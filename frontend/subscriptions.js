import { css } from 'glamor';
import { appDidStart$ } from '@shopgate/engage/core';
import config from './config.json';

const { styles } = config;
/**
 * Subscriptions
 * @param {Function} subscribe subscribe
 */
export default (subscribe) => {
  subscribe(appDidStart$, () => {
    Object.keys(styles).forEach((selector) => {
      css.global(selector, styles[selector]);
    });
  });
};
