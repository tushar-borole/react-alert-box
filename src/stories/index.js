import React from 'react';

import { storiesOf } from '@storybook/react';

import { AlertProvider }from '../index';
import App from '../App'

storiesOf('Welcome', module).add('Modal', () => <AlertProvider>
    <App/>
</AlertProvider>);
