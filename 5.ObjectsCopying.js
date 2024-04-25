const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  let person2 = person1;
  person1.firstName= "Simon";
  
  //El objeto original se modifica ya que estamos haciendo un paso por REFERENCIA,
  // si quisiéramos que no se modificara, haríamos un paso por valor,
  // el cual crea una copia del objeto original para no modificarlo.
  console.log(person1);
  console.log(person2);