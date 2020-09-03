import React, { Component } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

class Selector extends Component {
  regions = this.props.data
  state = {
    data: this.regions
  }

  multiple = (id) => {
    this.state.data.map((item, index) => {
      // console.log(item[index])
      index == id ? item.active = !item.active : item
    })
    this.setState({ data: this.state.data })
  }

  single = (id) => {
    this.state.data.map((item, index) => {
      // console.log(item[index])
      item.active = false
      index == id ? item.active = !item.active : item
    })
    this.setState({ data: this.state.data })
  }

  renderItem = ({ item, index }) => {

    const { selectedColor, unselectedColor } = this.props

    return (
      <TouchableOpacity
        style={{ backgroundColor: item.active ? selectedColor : unselectedColor }}
        onPress={() => {
          this.props.multiple ?
            this.multiple(index)
            : this.single(index);
        }}>
        {this.props.renderItem(item, index)}
      </TouchableOpacity>
    )
  }

  render() {
    const {

    } = this.props
    return (
      <FlatList
        data={this.regions}
        extraData={this.state}
        renderItem={this.renderItem}
        keyExtractor={(key, index) => String(index)} />
    )
  }
}

Selector.propTypes = {
  ...FlatList.propTypes,
  multiple: PropTypes.bool,
  selectedColor: PropTypes.string,
  unselectedColor: PropTypes.string
}


Selector.defaultProps = {
  multiple: false,
  selectedColor: '#3535356E',
  unselectedColor: 'transparent'
}

export default Selector;