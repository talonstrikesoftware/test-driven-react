import React from 'react';
import Carousel from '../src/Carousel';
import slides from  "../example/slides";

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const stories = storiesOf('Carousel', module);
stories.addDecorator(withKnobs);
stories.add('default', () => {
    return (
      <Carousel autoAdvanceDelay={number('autoAdvanceDelay',10e3)} slides={slides} onIndexChange={ action('onIndexChange') }/>
    )
  })