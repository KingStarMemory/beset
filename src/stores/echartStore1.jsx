import Reflux from 'reflux';
import 'whatwg-fetch';
import echartActions1 from '../actions/echartActions1.jsx';


const echartStore1  = Reflux.createStore({

	 //监听所有的actions
    listenables: [echartActions1],
    //on开头的都是action触发后的回调函数
    onGetData () {
    	let me = this;
    	fetch('/data.json').then(function(response) {
	    	return response.json();
	  	}).then(function(json) {
	  		me.trigger(json);
	    	console.log('parsed json', json);
	  	}).catch(function(ex) {
	    	console.log('parsing failed', ex);
	  	});
    }
});

export default echartStore1;