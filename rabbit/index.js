const Race = require('./race');
const Rabbit = require('./rabbit');
const Turtle = require('./turtle');

const race = new Race();
const rabbit = new Rabbit('rabbit');
const turtle = new Turtle('turtle');

race.addPlayer(turtle);
race.addPlayer(rabbit);

race.init();
race.start();

// const rabbit = 'rabbit';
// const turtle = 'turtle';

// const start = '|'; // 起点
// const end = '》'; // 终点
// const pad = '.'; // 跑道节点
// const speed = 1; // 150毫秒，1个节点
// const steps = 50; // 赛道总长度
// const stopAt = 42; // 兔子休息节点
// let stoped = false; // 判断兔子是否停下
// let t = 0; // 起始时间
// let timer = null; // 用于设置timeout

// const getRabbitLastSteps = () => {
//     return steps - (3 * speed * t);
// };

// const getTurtleLastSteps = () => {
//     return steps - (speed * t);
// }