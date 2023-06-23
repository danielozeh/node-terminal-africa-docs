export default {
    title: 'Node Package for Terminal Africa',
    description: 'Documentation for Integrating the Node Package for Terminal Africa',
    head: [
        ['link', { rel: 'icon', href: 'https://assets.website-files.com/6389cfbe0e53ef4cccebef43/638e03e4137b580bd0afa96d_256.svg' }],
        ['link', { rel: 'stylesheet', href: '../theme/custom.css' }]
    ],
    themeConfig: {
        logo: "https://assets.website-files.com/6389cfbe0e53ef4cccebef43/638e03e4137b580bd0afa96d_256.svg",
        siteTitle: "Node Terminal Africa",
        nav: [
            { text: "Setup", link: "/setup" },
            { text: "Official Documentation", link: "https://docs.terminal.africa/tship/" },
            { text: "Github", link: "https://github.com/danielozeh/node-terminal-africa" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/danielozeh" },
            { icon: "twitter", link: "https://twitter.com/danielozeh_" },
            { icon: "linkedin", link: "https://linkedin.com/in/danielozeh" },
        ],
        sidebar: [
            {
              text: "INTRODUCTION",
              collapsible: true,
              items: [
                { text: "Setup", link: "/setup" },
                { text: "Usage", link: "/usage" },
              ],
            },
            {
              text: "API ENDPOINTS",
              collapsible: false,
              items: [
                { text: "Locations", link: "/locations" },
                { text: "Addresses", link: "/addresses" },
                { text: "Carriers", link: "/carriers" },
                { text: "Packaging", link: "/packaging" },
                { text: "HS Codes", link: "/hscodes" },
                { text: "Parcels", link: "/parcels" },
                { text: "Rates", link: "/rates" },
                { text: "Shipments", link: "/shipments" },
                { text: "Webhooks", link: "/webhooks" },
                { text: "Insurance", link: "/insurance" },
                { text: "Claims", link: "/claims" },
                { text: "Transactions", link: "/transactions" },
                { text: "Users", link: "/users" },
              ],
            },
        ],  
        
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023 Node Terminal Africa",
        },
    },
}