export const addOrderIdToObjects = originalArray => {
  const changedArray = originalArray.map((el, i) => ({
    ...{orderId: i + 1},
    ...el,
  }));
  return changedArray;
};

export const sortObjectsByOrderId = originalArray => {
  const sortedArray = [...originalArray].sort((a, b) => a.orderId - b.orderId);
  return sortedArray;
};

export const reOrderIdtoObjects = originalArray => {
  const reorderedArray = originalArray.map((el, index) => {
    // console.log(el.orderId, ' --- ', index + 1);
    if (el.orderId !== index + 1) {
      el.orderId = index + 1;
    }
  });
  return true;
  // TODO: direkt datayı gönderebilmek için array destruction çalışıp array'i manipüle et
  //return reorderedArray;
};
