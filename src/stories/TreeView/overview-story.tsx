import React from 'react';
import { storiesOf } from '@storybook/react';
import { TreeView } from '@progress/kendo-react-treeview';
import props from './props';
import data from './data';

storiesOf('TreeView', module).add('Overview', () =>
  <TreeView {...props()} data={data} />
);