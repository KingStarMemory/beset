import React from 'react';
import { Link } from 'react-router';
import echarts from 'echarts'
import Reflux from 'reflux';
import ReactMixin from 'react-mixin'

import echartStore1 from '../stores/echartStore1.jsx';
import echartActions1 from '../actions/echartActions1.jsx';


let myChart = null;
class ECharts1 extends React.Component{
	
	

	
	ajaxGetData(){
		console.log(echartActions1.getData());
	}
	
	render() {

        if(this.state.list){
        	// 基于准备好的dom，初始化echarts实例
			myChart = echarts.init(document.getElementById('e-main'));
			// 绘制图表
			myChart.setOption({
			    title: {text: '异步数据加载示例'},
			    tooltip: {},
			    legend: {
			        data:['销量']
			    },
			    xAxis: {
			        data:  ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			    },
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: this.state.list
			    }]
			});
        }
		return (
			<div>
				<div id="e-main"  style={{width: 500, height:500}}>aaa</div>
				<button onClick={this.ajaxGetData.bind(this)}>ajax获取数据</button>
			</div>
		)
	}
}
ReactMixin.onClass(ECharts1, Reflux.connect(echartStore1,'list'));
export default ECharts1;
