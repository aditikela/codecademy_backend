const getSleepHours = day => {
 switch (day){
   case 'monday':
     return 8
     break 
   case 'tuesday':
     return 6
     break
   case 'wednesday':
     return 5
     break 
   case 'thursday':
     return 4
     break
   case 'friday':
     return 8
     break
   case 'saturday':
     return 8
     break 
   case 'sunday':
     return 8
     break
   default:
     return "Error"
     break;
 }  
 }

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday')

console.log(getActualSleepHours())
// This will print out the amount of hours slept during the week from the figures above
const getIdealSleepHours = ()=> {
   idealHours = 8
  return idealHours * 7
 }
//console.log(getIdealSleepHours())
// this will print the ideal amountof hours that an indiviudal would want to sleep during the week

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    console.log('You have the perfect amount of sleep.');
  } 
  else if (actualSleepHours > idealSleepHours){
    console.log('You have slept more than necessary. Get your life together.')
  }
  else if (actualSleepHours < idealSleepHours){
    console.log('You should have some rest. Seems like you really need it.')
  }
  else {
    console.log('Error! Something went wrong. Please try again.')
  }
}
calculateSleepDebt();
