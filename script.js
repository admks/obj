// console.log(staff)

// staff.forEach(element => {
//    console.log(element) 
// });

for (let index = 0; index < staff.length; index++) {
    const element = staff[index];
    console.log(element.lastname)

    element.email=`${element.lastName.toLowerCase()}@coorparation.com`
    console.log(element)
    
}

// Obj.mail="lastname@coorparation.com"