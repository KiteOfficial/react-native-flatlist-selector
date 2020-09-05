import React, { Component } from 'react'
import { FlatList, TouchableOpacity, View, Text, FlatListProps } from 'react-native'
import PropTypes from 'prop-types'

class Selector extends Component {
  data = this.props.data

  state = {
    data: this.data,
    selectedIndex: []
  }

  componentDidMount = () => {
    const {
      selectedIndex = [],
      multiple
    } = this.props
    let setIndex = undefined
    let stopper = true
    this.state.data.map((item, index) => {
      if (Array.isArray(selectedIndex)) {
        selectedIndex.map((u, i) => {
          if (index == u && stopper) {
            item.active = true
            if (multiple) {
              stopper = true
            } else {
              stopper = false
            }
          }
        })
      } else {
        if (index == selectedIndex) {
          item.active = true
        }
      }
    })
    this.props.getSelectedIndex(selectedIndex)
    this.setState({ data: this.state.data })
  }

  selection = (id) => {
    let selectedIndex = []
    this.state.data.map((item, index) => {
      this.props.multiple == false ? item.active = false : null
      index == id ? item.active = !item.active : item
      item.active == true ? selectedIndex.push(index) : selectedIndex.slice(index, 1)
    })
    this.props.getSelectedIndex(selectedIndex)
    this.setState({ data: this.state.data, selectedIndex: selectedIndex })
  }

  renderItem = ({ item, index }) => {

    const {
      selectedColor,
      unselectedColor,
      renderItem,
    } = this.props

    return (
      <TouchableOpacity
        style={{ backgroundColor: item.active ? selectedColor : unselectedColor }}
        onPress={() => this.selection(index)}>
        {renderItem(item, index)}
      </TouchableOpacity>
    )
  }

  render() {
    const {
    } = this.props

    return (
      <FlatList
        {...this.props}
        data={this.data}
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
  unselectedColor: PropTypes.string,
  renderItem: PropTypes.func.isRequired
}


Selector.defaultProps = {
  multiple: false,
  selectedColor: '#3535356E',
  unselectedColor: 'transparent',
}

export default Selector;