import _ from 'lodash';
import './style.css';
import myImg from './pean.png'
import myPrint from './print.js'

function component() {
	 var element = document.getElementById('app');
	 // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
	 element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	 element.classList.add('hello')

	 // 将图像添加到我们现有的 div。
	 var pean = new Image();
	 pean.src = myImg;
	 element.appendChild(pean);


	 var btn = document.createElement('button');
	 btn.innerHTML = 'Click me and check the console!';
	 btn.onclick = myPrint;
	 element.appendChild(btn);
	 return element;
}

document.body.appendChild(component());
