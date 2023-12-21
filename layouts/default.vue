<template>
    <!-- Here we define the default layout -->
    <header class="shadow-sm bg-white">
        <nav class="contianer mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products" class="btn">Products</NuxtLink> <!-- Custom defined btn class in tailwind.css -->
                </li>
            </ul>
        </nav>
    </header>

    <!-- Slot tag is where we want to output the page content -->

    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>