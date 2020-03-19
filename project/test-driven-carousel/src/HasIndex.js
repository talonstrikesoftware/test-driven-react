import React from 'react';

export default (Component, indexPropName) =>
  class ComponentWithIndex extends React.PureComponent {
    static displayName = `HasIndex(${Component.displayName || Component.name})`;

    state = {
      index: 0,
    };

    handleDecrement = (max) => {
      this.setState(({ index }) => {
        const newIndex = max ? (index + max - 1) % max : index - 1;
        return {
          index: newIndex,
        }
      });
    };

    handleIncrement = (max) => {
      this.setState(({ index }) => {
        const newIndex = max ? (index + 1) % max : index + 1;
        return {
          index: newIndex,
        }
      });
    };

    render() {
      const indexProps = {
        [indexPropName]: this.state.index,
        [`${indexPropName}Decrement`]: this.handleDecrement,
        [`${indexPropName}Increment`]: this.handleIncrement,
      };
      return <Component {...this.props} {...indexProps} />;
    }
  };