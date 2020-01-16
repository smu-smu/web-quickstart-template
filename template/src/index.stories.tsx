/* eslint-disable import/no-extraneous-dependencies */
import { action } from "@storybook/addon-actions";
import { number, text, withKnobs } from "@storybook/addon-knobs";
import { Button } from "@storybook/react/demo";
import React from "react";

export default { title: "Button", decorators: [withKnobs] };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button onClick={action("button-click")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const asDynamicVariables = () => {
  const name = text("Name", "Test");
  const age = number("Age", 20);
  const content = `I am ${name} and I'm ${age} years old.`;
  return <div>{content}</div>;
};
