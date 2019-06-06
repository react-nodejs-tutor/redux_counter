import React from 'react';
import './WaitingList.css';

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
	return (
		<li>
			<div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
			<div className="buttons">
				<button onClick={onEnter}>입장</button>
				<button onClick={onLeave}>나감</button>
			</div>
		</li>
	);
};

const WaitingList = ({ waitingList, onEnter, onLeave }) => {
	return (
		<div className="WaitingList">
			<h2>대기자</h2>
			<form>
				<input />
				<button>등록</button>
			</form>
			<ul>
				<WaitingItem text="1번 손님" entered />
				<WaitingItem text="2번 손님" />
				<WaitingItem text="3번 손님" />
			</ul>
		</div>
	);
};

export default WaitingList;
