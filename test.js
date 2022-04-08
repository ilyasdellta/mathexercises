"use strict";

// generate multiplication exercises by type 
// type 1 = one number times one number
// type 2 = two numbers times one number
// type 3 = one number times two numbers ...


let multiplicationExercise = {

  init() {
    this.createMultiplicationExercises(24);
    //let x = this.generateType();
    console.log(this.exercisesArray);
    /*console.log(this.exercisesArray.slice(0, 6));
    console.log(this.exercisesArray.slice(6, 12));*/
    //console.log(x);
    this.displayExercises();
    this.addNumbersToList();


  },

  exercisesArray: [],

  amountOfGroups: 4,

  generateType() {
    return (Math.ceil(Math.random() * 3));
  },
  createOneMultiplicationEx(type) {
    if (type === 1) {
      return `${Math.floor(Math.random()*10+1)} X ${Math.floor(Math.random()*10+1)}=`;
    } else if (type === 2) {
      return `${Math.floor(Math.random()*10+1)}0 X ${Math.floor(Math.random()*10+1)}=`;
    } else if (type === 3) {
      return `${Math.floor(Math.random()*10+1)} X ${Math.floor(Math.random()*10+1)}0=`;
    }
  },

  createMultiplicationExercises(amountOfExercise = 12) {
    for (let index = 0; index < amountOfExercise; index++) {
      const typeOfExercise = this.generateType();
      const exercise = this.createOneMultiplicationEx(typeOfExercise);
      this.exercisesArray.push(exercise);
    }
  },

  clearMultiplicationex() {
    this.exercisesArray = [];

  },

  addNumbersToList() {
    console.log("this is met");
    //let data = document.getElementById('');
    let group = document.getElementsByClassName(`hoofdGroup`);
    for (let index = 0; index < this.amountOfGroups; index++) {
      let data = this.exercisesArray.slice(index * 6, index * 6 + 6);
      let div = this.createGroupElement(data)
      group.appendChild(div)
    }


  },

  displayExercises() {


    let list = document.getElementById("myList");


    this.exercisesArray.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);

    });
    this.clearMultiplicationex();
    this.createMultiplicationExercises(24);

    let listt = document.getElementById("myList2");


    this.exercisesArray.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      listt.appendChild(li);

    });
  }

};


multiplicationExercise.init();