import React from "react";
import PropTypes from "prop-types";
import { ItemWrapper } from "./styled";
import consts from "../consts";
import { noop } from "../utils/helpers";

class ItemWrapperContainer extends React.Component {
  onClick = () => {
    const { onClick, id } = this.props;
    onClick(id);
  };
  render() {
    return <ItemWrapper {...this.props} onClick={this.onClick} />;
  }
}

ItemWrapperContainer.defaultProps = {
  style: {},
  itemPosition: consts.CENTER,
  onClick: noop
};

ItemWrapperContainer.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};

export default ItemWrapperContainer;
