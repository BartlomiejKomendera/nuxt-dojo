export default defineEventHandler(async (event) => { // Standard Nuxt function to handle requests and event parameter to have request data like parameters. We add async for post request. Not needed for get.

    const { name } = getQuery(event) // Built in function to extract query parameters

    const { age } = await readBody(event) // We need await because function is asynchronous

    // If we were calling an outside service that requires an api key or some sort of sensitive data we would do it here for security reasons. Heres an example of how it would look like:
    const { data } = await $fetch('https://api.endpoint.com/api/?apiKey=dfiuwidnfiwhj34454kj3b5hk43b') // Server side we use $fetch instead of useFetch
    // return data // We would return the retrieved data

    return {
        message: `Hello, ${name}! You are ${age} years old.` // Use the query param. Back ticks.
    }
})