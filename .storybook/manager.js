import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://Joew.com/icon.svg',
    brandTitle: 'Jokwon Pope Components',
    brandUrl: 'https://Jokwonpope.com',
  },
});
