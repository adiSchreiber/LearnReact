 export class Human {
    constructor(){
      this.gender = "male"
    }
    printGender(){
      console.log(this.gender)
    }
  }
  
  
  export class Person extends Human{
    constructor(){
      super();
      this.name='adi';
    }
    printMyName(){
      console.log(this.name);
    }
  }
  
 