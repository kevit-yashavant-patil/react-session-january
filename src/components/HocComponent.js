import React from 'react';

function withCounter(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                hocCount: 0
            };
        }

        increaseCount = () => {
            this.setState((state) => ({
                hocCount: state.hocCount + 1,
            }));
        }

        render() {
            return <Component hocCount={this.state.hocCount} increaseHocCount={this.increaseCount} {...this.props} />;
        }
    };
}

export default withCounter;