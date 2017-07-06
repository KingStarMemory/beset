import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import RootRouters from './RootRouters.jsx';

ReactDOM.render(
	<RootRouters history={browserHistory} />,
  	document.getElementById('example')
);