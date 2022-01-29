import { Component } from "react";
import { connect } from "react-redux";
import { CountContext } from "../App";
import { Box } from "./Box";
import { Button } from "./Button";
import withCounter from "./HocComponent";

class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateOfComponent: '0',
        };
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', { props, state })
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", prevProps, prevState);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate", {prevProps, prevState});
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", {nextProps, nextState});
        return true;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <>
                <Box>

                    <h1>Local State: {this.state.stateOfComponent.toString()}</h1>
                    <Button
                        onClick={() => {
                            this.setState({
                                stateOfComponent: Math.random().toString()
                            });
                        }}
                    >
                        Change State
                    </Button>
                </Box>
                <br />
                <br />
                <Box>

                    <h1>State Managed In Parent (Coming from props): {this.props.data}</h1>
                    <Button onClick={() => this.props.setData(Math.random())}>
                        Generate Random Number
                    </Button>
                </Box>
                <br />
                <br />
                <Box>
                    <h2>State Managed In Redux: {this.props.count}</h2>
                    <Button
                        onClick={() => {
                            this.props.addCount(2);
                        }}
                    >
                        Add to redux state
                    </Button>

                    <Button
                        onClick={() => {
                            this.props.decreaseCount(2);
                        }}
                    >
                        Decrease from redux state
                    </Button>
                </Box>
                <br />
                <br />
                <Box>
                    <h2>From HOC Managed State: {this.props.hocCount}</h2>
                    <Button
                        onClick={
                            this.props.increaseHocCount
                        }
                    >
                       Change state
                    </Button>
                </Box>
                <br />
                <br />
                <Box>

                    <CountContext.Consumer>
                        {
                            ({ count, setCount }) => (
                                <>
                                    <h1>
                                        From Context: {count}
                                    </h1>
                                    <Button
                                        onClick={() => {
                                            setCount(prev => prev + 1)
                                        }}
                                    >
                                        increment
                                    </Button>
                                </>
                            )
                        }
                    </CountContext.Consumer>
                </Box>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.value
})

const mapDispatchToProps = (dispatch) => ({
    addCount: (value) => dispatch({
        type: 'increment',
        value
    }),
    decreaseCount: (value) => dispatch({
        type: 'decrement',
        value
    })
})

const connectToStore = connect(mapStateToProps, mapDispatchToProps)

const ConnectedClassComponent = connectToStore(ClassComponent)

const WithHocComponent = withCounter(ConnectedClassComponent);

WithHocComponent.defaultProps = {
    data: 12321312
};

export default WithHocComponent;
