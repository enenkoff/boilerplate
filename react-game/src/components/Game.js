import React from "react";

import Board from './Board';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            historyMassive: [],
            squaresClasses: [],
            activeSquare: []
        }
    }

    renderSquare(i,_class) {

        if (!_class) {_class=''}

        return (
            <div
                className={"square "+_class}
            >
                {i}
            </div>
        );
    }

    historyMassive = (value) => {

        let massive = this.state.historyMassive.slice();
        massive.push(value);

        this.setState({
            historyMassive: massive,
        });

    };

    changeSquaresClasses = (value) => {

        let _class = Array(9).fill('');
        _class[value] = 'active';

        let massive = this.state.activeSquare.slice();
        massive.push(_class);

        this.setState({
            activeSquare: massive,
        });
    };

    render() {

        let m = this.state.historyMassive,
            _vm = this;

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        historyMassive={this.historyMassive}
                        infoSquaresClasses={this.changeSquaresClasses}
                    />
                </div>
                <div className="game-info">
                    {


                        m.map(function (i,index) {

                            let classes = _vm.state.activeSquare[index];

                            return (
                                <div className="step" key={index}>
                                    <div className="status">Ход №{++index}</div>
                                    <div className="board-row">
                                        {_vm.renderSquare(i[0],classes[0])}
                                        {_vm.renderSquare(i[1],classes[1])}
                                        {_vm.renderSquare(i[2],classes[2])}
                                    </div>
                                    <div className="board-row">
                                        {_vm.renderSquare(i[3],classes[3])}
                                        {_vm.renderSquare(i[4],classes[4])}
                                        {_vm.renderSquare(i[5],classes[5])}
                                    </div>
                                    <div className="board-row">
                                        {_vm.renderSquare(i[6],classes[6])}
                                        {_vm.renderSquare(i[7],classes[7])}
                                        {_vm.renderSquare(i[8],classes[8])}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Game;
