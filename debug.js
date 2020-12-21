const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  // Get the year of the current date
  const dateNow =  new Date().getFullYear();
  
  for (let person of array) {
    //hier moeten console.logs komen
    //console.log('Persons all details:', person);
    //console.log('Name of the person:', person.name);
    //console.log('Birth date:', dateNow-person.age);
    //console.log(person.name, 'works as', person.profession);

    if (person.age>50){
        console.log(person.name, 'is older than 50');
    };
  }
  