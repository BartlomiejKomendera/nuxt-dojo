<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" /> <!-- Reusable component inside components folder -->
                <!--<NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>-->
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
// Fetch the products
// Extracting data property and renaming it to products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({ // Composable function to replace global meta data from nuxt config
    title: 'Nuxt Dojo | Merch',
    meta: [
        { name: 'description', content: 'Nuxt 3 Merch' }
    ]
})
</script>

<style scoped></style>