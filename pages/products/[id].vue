<template>
    <div>
        <!-- Components to set meta data dynamically -->
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>

        <ProductDetails :product="product" />
        <!--<p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>-->
    </div>
</template>

<script setup>
const { id } = useRoute().params // To get passed prop we run useRoute that returns route object 
// with params property which we destruct into id variable
const uri = 'https://fakestoreapi.com/products/' + id

// Fetch the product
const { data: product } = await useFetch(uri, { key: id }) // The second parameter are options in which we specify a key 
// that is unique to every new item / request so that fetch performs a new request for every new key.

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true }) // Nuxt function for creating custom errors.
} // It will call the error.vue page. Fatal makes the error page appear regardless od throwing it in browser or from server.

definePageMeta({
    layout: 'products' // Overriding default layout
})
</script>

<style lang="scss" scoped></style>