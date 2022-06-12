import { getAnalytics, logEvent } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import platformEnv from '../platformEnv';

import firebaseConfig from './firebase.web.json';

const getAnalyticsInstance = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return analytics;
};

export const analyticLogEvent = (
  eventName: string,
  eventParams?: {
    [key: string]: any;
  },
) => {
  const instance = getAnalyticsInstance();
  console.log('-------instance', instance);
  return logEvent(instance, eventName, eventParams);
};
