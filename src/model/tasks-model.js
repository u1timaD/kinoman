
// 51:12 https://up.htmlacademy.ru/ecmascript/17/module/2/item/6


import {generateTask} from '../mock/task.js';

export default class TasksModel {
  tasks = Array.from({length: 3}, generateTask);
  // tasks = generateTask();

  getTasks = () => this.tasks;
}