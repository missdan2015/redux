 // 如果想要改变一个reducer的值，需要使用dispatch派发一个action
 // action 需要两个参数： type , 
 
 const addAction = {
     type: 'add',
     payload: {}
 };

 const reduceAction = {
     type: 'reduce',
     payload: {}
 };
 export { addAction, reduceAction }