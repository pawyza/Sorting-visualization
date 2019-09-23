async function mergeSort(array, start, end){
  if(start < end){
    let mid = parseInt((start+end)/2)
    await mergeSort(array,start,mid);
    await mergeSort(array,mid+1,end);
    await merge(array,start,mid,end);
  }
}

async function merge(array,start,mid,end){
  let sortedTemp = [];
  let a = start;
  let b = mid+1;

  while (a <= mid && b <= end){
    if(array[a] <= array[b]){
      sortedTemp.push(array[a++]);
      await sleep(timeAdded);
    } else {
      sortedTemp.push(array[b++]);
      await sleep(timeAdded);
    }
  }

  while(a <= mid){
    sortedTemp.push(array[a++]);
    await sleep(timeAdded);
  }

  while(b <= end){
    sortedTemp.push(array[b++]);
    await sleep(timeAdded);
  }

  for(i = start; i <= end; i++){
    array[i] = sortedTemp[i - start];
    await sleep(timeAdded);
  }
}
