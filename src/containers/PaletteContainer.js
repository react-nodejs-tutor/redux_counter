import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../store/modules/counter';
import Palette from '../components/Palette';

class PaletteContainer extends Component {
	render() {
		const { color, changeColor } = this.props;
		return <Palette selected={color} onSelect={changeColor} />;
	}
}

const mapStateToProps = state => ({
	color: state.counter.color
});

const mapDispatchToProps = dispatch => ({
	changeColor: color => dispatch(changeColor(color))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PaletteContainer);
