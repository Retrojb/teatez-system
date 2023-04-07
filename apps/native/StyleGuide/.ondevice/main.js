module.exports = {
  stories: [
    "../components/**/*.stories.?(ts|tsx|js|jsx)",
    "../../../packages/@teatez-design-system/core/**/**/*.stories.mdx",
    "../../../packages/@teatez-design-system/core/**/**/*.stories.@(js|jsx|ts|tsx)",],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-backgrounds",
    "@storybook/addon-ondevice-notes",
  ],
};
