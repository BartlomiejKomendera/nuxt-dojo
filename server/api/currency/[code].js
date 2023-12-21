// We name the file to pass parameter in the same way as we did for frontend pages.
export default defineEventHandler(async (event) => {

    const { code } = event.context.params
    const { currencyKey } = useRuntimeConfig() // We use server runtime config defined in nuxt.config.ts

    const uri = `https://api.endpoint.com/api/latest?currencies=${code}&apiKey=${currencyKey}`

    const { data } = await $fetch(uri)

    return data
})