const sortingTypes = 3;
const size = 2;
const gap = 20;
let exampleSize = 500;
let valuesBubble = [];
let valuesQuick = [];
let valuesMerge = [];
let bubbleM = 0;
var bubbleRun = false;
var quickRun = false;
var mergeRun = false;
var timeAdded = 0;
var startLabel;
var canvas;
var bubbleSortLabel;
var mergeSortLabel;
var quickSortLabel;
var started = false;

function setup(){
  let windowForType = parseInt((windowWidth/size)/sortingTypes);
  if(exampleSize*size > windowForType){
    exampleSize = windowForType - parseInt(gap/size - gap/(sortingTypes*2));
  }

  startLabel = createP('CLICK ANYWHERE TO START');
  startLabel.style('color','white');
  startLabel.style('font-size','15px');
  startLabel.position((windowWidth/2)-100,2);

  bubbleSortLabel = createP('BUBBLE SORT');
  bubbleSortLabel.style('color','white');
  bubbleSortLabel.style('font-size','15px');
  bubbleSortLabel.position(exampleSize*size*0 + gap*0,30);

  mergeSortLabel = createP('MERGE SORT');
  mergeSortLabel.style('color','white');
  mergeSortLabel.style('font-size','15px');
  mergeSortLabel.position(exampleSize*size*1 + gap*1,30);

  quickSortLabel = createP('QUICK SORT');
  quickSortLabel.style('color','white');
  quickSortLabel.style('font-size','15px');
  quickSortLabel.position(exampleSize*size*2 + gap*2,30);

  canvas = createCanvas(windowWidth, windowHeight-40);
  canvas.position(0,60);

  valuesBubble = [];
  for(let i = 0; i < exampleSize; i++){
    valuesBubble.push(random(canvas.size().height));
  }
  valuesQuick = valuesBubble.slice(0);
  valuesMerge = valuesBubble.slice(0);
}

function mousePressed(){
  if(!started){
    valuesBubble = [];
    for(let i = 0; i < exampleSize; i++){
      valuesBubble.push(random(canvas.size().height));
    }
    valuesQuick = valuesBubble.slice(0);
    valuesMerge = valuesBubble.slice(0);
    bubbleRun = true;
    mergeRun = true;
    quickRun = true;
    started = true;
  }
  startLabel.remove();
}

function draw() {
  background(0);

  sortingVis(valuesBubble,0);
  sortingVis(valuesQuick,2);
  sortingVis(valuesMerge,1);

  if(started){
    while(bubbleRun){
      bubbleSort();
      bubbleRun = false;
    }
    while(quickRun){
      quickSort(valuesQuick,0,valuesQuick.length-1);
      quickRun = false;
    }
    while(mergeRun){
      mergeSort(valuesMerge,0,valuesMerge.length-1);
      mergeRun = false;
    }
  }
}

function sortingVis(values,order){
  let positionOffset = exampleSize*size*order + gap*order;
  for (let i = 0; i < values.length; i++){
    line(i*size + positionOffset,windowHeight,i*size + positionOffset,windowHeight - values[i]);
    strokeWeight(size);
    strokeCap(SQUARE);
    stroke(255);
  }
}

async function swap(values, a, b){
  await sleep(timeAdded);
  let buff = values[a];
  values[a] = values[b];
  values[b] = buff;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
