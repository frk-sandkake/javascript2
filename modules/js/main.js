import '../css/style.css'
import {addNumbers} from './math.mjs';
import {showMessage} from './actions.mjs'
import passTheBall, {shootTheBall} from './team.mjs'

// math.mjs
const result = addNumbers(100, 200);
console.log("result: ", result);

// actions.mjs
showMessage("you");

// team.mjs
passTheBall();
shootTheBall();