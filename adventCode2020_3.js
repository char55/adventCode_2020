const fs = require('fs')

var input = fs.readFileSync('./fileInput_day3.txt', 'utf8')
              .split('\n')
              .map(x=> x.split(''))


const howManyTrees = (right, down) => {
  var count = 0
  var currentRight = 0
  var currentDown = 0

  for( i=0; i<input.length; i++) {
    if(currentDown % down === 0 ){
      if(currentRight >= input[0].length){
        currentRight = currentRight - input[0].length
      }

      if(currentDown >= input.length){
        break
      }

      if(input[currentDown][currentRight] === '#'){
        count++
      }
      currentRight = currentRight + right
      currentDown =currentDown + down
    }
  }
  return count
}

console.log(howManyTrees(3,1))

const weirdMath = () => {
  return  howManyTrees(1,1) * howManyTrees(3,1) * howManyTrees(5,1) * howManyTrees(7,1) * howManyTrees(1,2) 

}

console.log(weirdMath())


const theActualPath = () => {
  // i read the question wrong lol
  var right=1
  var down=1
  var found = false

  var currentRight = 0
  var currentDown = 0

  do{
    found=true
    for( i=0; i<input.length; i++) {
      if(i % down === 0 ){
        currentRight = currentRight + right
        if(currentRight > input[0].length){
          currentRight = currentRight - input[0].length
        }
        currentDown =currentDown + down

        if(currentDown > input.length){
          break
        }
        
        if(input[currentDown][currentRight] === '#'){
          found=false
          break;
        }
      }
    }

    if(!found){ 
      if(right > input[0].length){
        down++
        right = 1
      }
      right++
    }

  }
  while(!found)
}

