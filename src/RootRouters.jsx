import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect,IndexRoute,Router, Route, browserHistory } from 'react-router';

import Home from './components/Home.jsx';
import Locations from './components/Locations.jsx';
import About from './components/About.jsx';
import Todo from './components/Todo.jsx';
import ECharts1 from './components/ECharts1.jsx';
import ECharts2 from './components/ECharts2.jsx';

class RootRouters extends React.Component{
	
	render() {
		const { history } = this.props;
		return (
			<Router history = {browserHistory} >
				<route path ="/" component={Home} >
					<IndexRedirect  to="/about" />
					<route path ="/locations" component={Locations} />
					<route path ="/about" component={About} />
					<route path ="/todo" component={Todo} />
					<route path ="/echarts1" component={ECharts1} />
					<route path ="/echarts2" component={ECharts2} />
				</route>
    		</Router>
		)
	}
}

export default RootRouters;