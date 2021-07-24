// export default class Todo{
//   id: string;
//   text: string;
//   completed: boolean;

//   constructor(id: string, text: string, completed: boolean){
//     this.id = id;
//     this.text = text;
//     this.completed = completed;
//   };
// }

export default class Todo {
  constructor(public title: string, public completed: boolean, public id: number = 0,) {}
}
