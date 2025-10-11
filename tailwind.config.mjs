module.exports = {
    content: ["./src/**/*.{astro,html,ts,tsx,md,mdx}"],
    theme: {
        extend: {},
    },
    plugins: [require('@midudev/tailwind-animations')],
}