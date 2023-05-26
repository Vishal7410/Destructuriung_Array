function NestedObject(person) {
    const{name} = person;
    const{street} = person.address;

  //  return name,street;

    console.log(`Name : ${name} ||  Street : ${street}`);
    
}


const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8,Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
    },

};

NestedObject(person);

