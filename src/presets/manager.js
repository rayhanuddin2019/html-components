import { addons, types } from '@storybook/addons';

import { Tool } from '../Tool';

// Register the addon
addons.register('myAddon', () => {
  // Register the tool
  addons.add('myAddon', {
    type: types.TOOL,
    title: 'My addon',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });
});