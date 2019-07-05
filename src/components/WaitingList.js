import React from 'react';
import './WaitingList.css';

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
	return (
		<li>
			<div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
			<div className="buttons">
				<button onClick={onEnter}>enter</button>
				<button onClick={onLeave}>leave</button>
			</div>
		</li>
	);
};

const WaitingList = ({ waitingList, onEnter, onLeave }) => {
	return (
		<div className="WaitingList">
			<h2>WaitingList</h2>
			<form>
				<input />
				<button>go</button>
			</form>
			<ul>
				<WaitingItem text="1st customer" entered />
				<WaitingItem text="2nd customer" />
				<WaitingItem text="3rd customer" />
			</ul>
		</div>
	);
};

export default WaitingList;
