//One full data loop
async function bubbleSort(){
  while(bubbleM < valuesBubble.length){
    for(let bubbleN = 0; bubbleN <= valuesBubble.length - bubbleM -1; bubbleN++){
        let a = valuesBubble[bubbleN];
        let b = valuesBubble[bubbleN+1];
        if (a > b){
          await swap(valuesBubble, bubbleN, bubbleN+1);
        }
      }
    bubbleM++;
  }
}
