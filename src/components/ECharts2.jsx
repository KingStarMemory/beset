import React from 'react';
import echarts from 'echarts';
import { Input,DatePicker } from 'antd';
import './antd.css';

let myChart = null;
class ECharts2 extends React.Component{
	
	constructor(){
		super();
		this.state = {list:[5]};
		this.handleChange = this.handleChange.bind(this);
	}

	
	handleChange(event){
		console.log(this.refs.test.value);
		this.setState({list:[event.target.value]});
		this.drewGay();
	}
	
	componentDidMount(){
		this.drewGay();
	}
	
	drewGay(){
		if(this.state.list != null){
        	// 基于准备好的dom，初始化echarts实例
        	if(myChart==null){
        		myChart = echarts.init(document.getElementById('e-main'));
        	}
			// 绘制图表
			myChart.setOption({
			    title: {text: '异步数据加载示例'},
			    tooltip: {},
			    legend: {
			        data:['销量']
			    },
			    xAxis: {
			        data:  ["衬衫"]
			    },
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: this.state.list
			    }]
			});
        }
	}
	
	
	render() {
		return (
			<div>
				<div id="e-main"  style={{width: 500, height:500}}>aaa</div>
				<span>{this.state.list}</span>
				<Input placeholder="请输入数据" ref="test" onChange={this.handleChange} />
				<DatePicker />
			</div>
		)
	}
}
export default ECharts2;
