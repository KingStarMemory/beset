import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

class Home extends React.Component{
	render() {
		return (
			<nav>
	            <Link to="/locations">名胜古迹</Link> |
	            <Link to="/about">关于techgogogo</Link> |
	            <Link to="/todo">todo</Link> |
	            <Link to="/echarts1">图表1</Link>
	            <Link to="/echarts2">图表2</Link>
	            {this.props.children}
          	</nav>
		)
	}
}


export default Home;