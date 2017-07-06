import Reflux from 'reflux';
import testActions from '../actions/testActions.jsx'

//给数组添加remove方法，用于去除指定下标的元素
Array.prototype.remove = function(dx)
{
    if(isNaN(dx)||dx>this.length){return false;}
    for(var i=0,n=0;i<this.length;i++)
    {
        if(this[i]!=this[dx])
        {
            this[n++]=this[i]
        }
    }
    this.length-=1
};

const testStore  = Reflux.createStore({
	items:[],
	 //监听所有的actions
    listenables: [testActions],
    //on开头的都是action触发后的回调函数
    onGetAll () {
        //更新状态（就是个对象）
        this.trigger({items:this.items});
    },
    onAdd(item){
    	//console.log(item);;
        this.items.push({name:item});
        this.trigger({items:this.items});
    },
    onRemove(i){
        this.items.remove(i);
        this.trigger({items:this.items});
    }
	
});

export default testStore;