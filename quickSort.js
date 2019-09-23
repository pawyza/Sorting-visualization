async function quickSort(array, start, end){
  if(start >= end){
    return;
  }
  let index = await partition(array,start,end);
  await Promise.all([quickSort(array,start, index-1), quickSort(array,index+1,end)]);
}

async function partition(array, start, end){
  let pivotIndex = start;
  let pivotValue = array[end];
  for(let i = start; i < end; i++){
    if(array[i] < pivotValue){
      await swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(array, pivotIndex, end);
  return pivotIndex;
}
