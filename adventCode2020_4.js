const fs = require('fs')


const input = fs.readFileSync('./input_day4.txt', 'utf8').split('\n\n')

const fields =  ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']

const neededFields = fields.filter(x => x != 'cid').map(x => x + ':')
const allValids = input.filter(x => neededFields.every(f => x.includes(f)))

console.log(allValids.length)

const formattedValids = allValids.reduce((acc, cur) => {
  var data = cur.replace(/\n/g,' ').split(' ').map(x=>{
    return x.split(':')
  }).reduce((a,c)=> {
    a[c[0]] = c[1]
    return a
  },{})

  acc.push(data)
  return acc
},[])

 const isFourDigits = str => str.length === 4

 const checkInBetween = (str, min, max )=> {
   return parseInt(str) >= min && parseInt(str) <= max
 }

 const heightCheck = hgt => {
   if(hgt.includes('cm')){
     return checkInBetween(hgt.substring(0, hgt.length-2), 150,193)
   }
   if(hgt.includes('in')){
    return checkInBetween(hgt.substring(0, hgt.length-2), 59,76)
   }
   return false
 }

 const checkEyes = ecl => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)

 const checkHair = hcl => {
   if (hcl.substring(0,1) === '#'){
     return !/[^a-z0-9]+/g.test(hcl.substring(1))
   }
   return false
 }

const mostValid =  formattedValids.filter(x => 
  isFourDigits(x.byr) && isFourDigits(x.iyr) && isFourDigits(x.eyr) &&
  checkInBetween(x.byr, 1920, 2002) && checkInBetween(x.iyr, 2010, 2020) &&  checkInBetween(x.eyr, 2020, 2030) &&
  heightCheck(x.hgt) && checkEyes(x.ecl) && 
  !!parseInt( x.pid) && x.pid.length === 9 &&
  checkHair(x.hcl)
)

console.log(mostValid.length)
