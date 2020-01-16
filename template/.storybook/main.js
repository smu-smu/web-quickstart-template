module.exports = {
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-actions/register"
  ],
  stories: ["../src/**/*.stories.tsx"]
};
