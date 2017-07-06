import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin'

import testStore from '../stores/testStore.jsx';
import testActions from '../actions/testActions.jsx';

class Todo extends React.Component{

	//组件渲染完成后，通过action获取所有的数组，刷新绑定到this.state上
  	componentDidMount() {
    	testActions.getAll();
  	}
  	
  	add(){
    	var item =this.refs.item.value;
    	this.refs.item.value='';
    	testActions.add(item);
  	}
  	
  	remove(i){
    	testActions.remove(i);
  	}
	
	render() {
		//items用于乘放li的集合
    	let items = [];
    	if(this.state.list){
    		for(let i=0;i<this.state.list.items.length;i++){
    			let item = this.state.list.items[i];
    			items.push(<li key={i}>{item.name}<button onClick={this.remove.bind(this,i)}>remove</button></li>);
    		}
    	}
    	
		return (
			<div>
          		<input type="text" ref="item"/>
          		<button onClick={this.add.bind(this)}>add</button>
          		<ul>
            		{items}
          		</ul>
        	</div>
		)
	}
}

ReactMixin.onClass(Todo, Reflux.connect(testStore,'list'));
/**
 * 此处说明
 * ReactMixin.onClass  是用来监听和绑定，store中this.trigger()出的数据，数据有变化就会更新
 * Todo 是本组件名称
 * testStore 是store名称
 * list 是想当于接受 this.trigger() 括号中所传入的参数的别名，在本组件中就使用所起的别名获取
 * 例如：
 * 		this.trigger(aaa) 传入aaa
 * 		Reflux.connect(testStore,'bbb') 通过bbb获取传入的aaa
 * 		this.state.bbb  本组件直接使用bbb获取aaa对象的数据
 */
export default Todo;
