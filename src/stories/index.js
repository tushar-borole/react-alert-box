import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import Modal from '../Modal';

storiesOf('Welcome', module).add('to Storybook', () => <Modal/>);
