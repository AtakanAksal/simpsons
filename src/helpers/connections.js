import axios from 'axios';
import {addOrderIdToObjects, sortObjectsByOrderId} from './funtions';

const URL_SIMPSONS_LIST =
  'https://5fc9346b2af77700165ae514.mockapi.io/simpsons';

export const getSimpsons = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(URL_SIMPSONS_LIST)
      .then(res => {
        const changedArray = addOrderIdToObjects(res.data);
        const sortedArray = sortObjectsByOrderId(changedArray);
        resolve(sortedArray);
      })
      .catch(err => {
        reject(err);
      });
  });
};
