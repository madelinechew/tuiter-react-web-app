import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";

function Assignment6() {
   const color = 'blue';
   const dangerous = true; 
   return (
     <div>
       <h1>Assignment 6</h1>
       <TodoList/>
       <ConditionalOutput/>
       <Styles/>
       <Classes/>
       <div className={`${dangerous ?  'wd-bg-red' : 'wd-bg-green' } 'wd-fg-black wd-padding-10px`}>
         Dangerous Background
       </div>
       <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
         Dynamic Blue Background
       </div>
     </div>
   );
  }
  export default Assignment6;