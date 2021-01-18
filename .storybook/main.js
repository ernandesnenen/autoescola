module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(js|mdx)",
    "../src/styles/*.stories.@(js|mdx)"
    
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-knobs"
  ]
}

// .storybook/main.js


