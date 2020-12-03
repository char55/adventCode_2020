var fs = require('fs');

const arrangeData = () => {
  const data = fs.readFileSync('fileInput_day2.txt', 'utf8')
  const dataArray = data.split('\n')

  var sortedData = dataArray.reduce((acc, cur)=>{
    var a = cur.split(':')
    var b = a[0].split(' ')
    var rule = b[0].split('-')
    acc.push({
      'rule': rule.map(x => parseInt(x)),
      'ruleLetter': b[1],
      'code': a[1].trim().split('')
    })
    return acc
  },[])
  return sortedData
}



const firstPolicy = (sortedData) => {
  var finalResult = 0
  sortedData.forEach(x => {
    var ruleCount = x.code.filter(c => c === x.ruleLetter).length
    if(x.rule[0] <= ruleCount && x.rule[1] >= ruleCount){
      finalResult++
    }
  })
  return finalResult
}

const secondPolicy = (sortedData) => {
  const finalResult = []

  sortedData.forEach(x => {
 
    if(
      (x.code[x.rule[0]-1] === x.ruleLetter && x.code[x.rule[1]-1] !== x.ruleLetter) ||
      (x.code[x.rule[1]-1] === x.ruleLetter && x.code[x.rule[0]-1] !== x.ruleLetter) 
      )
      {
        finalResult.push(x)
      }
  })
  return finalResult.length
} 

const sortedData = arrangeData()
console.log('firstPolicy', firstPolicy(sortedData))
console.log('secondPolicy', secondPolicy(sortedData))
