module.exports = {
  stories: [
      "../packages/@teatez-design-system/core/**/**/*.stories.mdx",
      "../packages/@teatez-design-system/core/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../apps/native/StyleGuide/components/**/*.stories.mdx",
    "../apps/native/StyleGuide/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
};

// Will want to figure out the best way to handle alias paths to shorten imports