/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: function(){ alert("Beep") }
        }
    }
}



/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.


house.areas.livingRoom.items.push('dining table');

var items1= house.areas.livingRoom.items;


for(var i=0; i<= house.areas.livingRoom.items.length; i++){
console.log(house.areas.livingRoom.items[i]);
    
}
// (2) Add a stove to the kitchen.
house.areas.kitchen.items.push('stove');

for(var i=0; i<= house.areas.kitchen.items.length; i++){
    console.log(house.areas.kitchen.items[i]);
}

//console.log(house.areas.kitchen.items)

// (3) Remove the washing machine from bedroomOne.
house.areas.bedroomOne.items.pop()

// (4) Change the color of the car to blue.
house.garage.car.color = "blue";
console.log(house.garage.car.color);


// (5) Add a another car to the garage with a honk function.
//house.garage.car2 = {
//     color: 'gresilveren',
//     wheels: 4,
//     honk: function() {
//       alert("Boom boom");
//     }
//   };
  


// (6) Make the new car honk.
// house.garage.car2.honk();

// (7) If the house has a garden, console.log the name of the flower.
if(house.garden == true); 
{

    console.log(house.garden[1]);
}

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function

house.areas.kitchen.items = house.areas.kitchen.items.map(item => item.replace('broken chair', 'new chair'));


// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.

var areaKeys= Object.keys(house.areas);
var totalAreas= areaKeys
console.log(totalAreas);
// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.

var totalBeds = 0;
var areaValues = Object.values(house.areas);

for (var area of areaValues) {
  if (area.hasOwnProperty('items') && Array.isArray(area.items)) {
    totalBeds += area.items.filter(item => item === 'bed').length;
  }
}

console.log(totalBeds);

