<img src="images/logo_full.png" width="100%"/>

[![NPM version](http://img.shields.io/npm/v/react-native-flatlist-selector.svg?style=flat-square)](http://npmjs.org/package/react-native-flatlist-selector)
[![npm](https://img.shields.io/npm/dy/react-native-flatlist-selector?style=flat-square)](http://npmjs.org/package/react-native-flatlist-selector)
[![Package Quality](https://npm.packagequality.com/shield/react-native-flatlist-selector.svg?style=flat-square)](https://packagequality.com/#?package=react-native-flatlist-selector)
[![Compatibility](https://img.shields.io/badge/platform-android%20%7C%20ios-blue.svg?style=flat-square)](http://npmjs.org/package/react-native-flatlist-selector)

[![NPM](https://nodei.co/npm/react-native-flatlist-selector.png?mini=true)](https://nodei.co/npm/react-native-flatlist-selector/)

### If this project has helped you out, please support us with a star 🌟

## 📘 Description

**Author:** Kite

**Github:** https://github.com/KiteOfficial/react-native-flatlist-selector

A Selectable Flatlist which you can Highlight a selected item

_Tested with: Android, iOS

## 📖 Install

Install the library from npm just running one of the following command lines:

| npm                                             |
| ----------------------------------------------- |
| `npm install react-native-flatlist-selector --save` |

## 💻 Usage

```javascript
import { Selector } from "react-native-flatlist-selector";

// Example
class Main extends Component {
  constructor(props) {
    super(props)
    this.data = [{
      title: 'REGION 1',
      image: require('images/region1.png'),
    },
    {
      title: 'REGION 2',
      image: require('images/region2.png'),
    },
    {
      title: 'REGION 3',
      image: require('images/region3.png'),
    }]
  }

  state = {
    selectedIndex: 0
  }

  getIndex = (selectedIndex) => {
    this.setState({ selectedIndex: selectedIndex })
    console.log(selectedIndex)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Selector
          multiple={true}
          numColumns={2}
          selectedIndex={this.getIndex}
          data={this.data}
          renderItem={(item, index) => (
            <>
              <Text>Asa</Text>
              <Text>{index.image}</Text>
              <Text>{index}</Text>
              <Text>{item.title}</Text>
            </>
          )} />
        <Text>Selected Index: {this.state.selectedIndex} </Text>
      </SafeAreaView>
    )
  }
}
```

## 🎥 DEMO

<img src="src/assets/images/example.gif" /> 

## 💡 Props

Check the "[Props List](PROPS.md)" file to have the complete list of component props ordered by name.

### Props

| Property            | Description                                                                             | Type             | Default.      | Note                              |
| ------------------- | --------------------------------------------------------------------------------------- | ---------------- | ------------- | --------------------------------- |
| `multiple`          | Either multiple selection or single                                                     | Boolean          | `false`       |                                   |
| `data`              | Array of data to be render.                                                             | Array            |               | Only 2D array is acceptable       |
| `selectedColor`     | Higlight for selected Item                                                              | String           | `#3535356E`   |                                   |
| `unselectedColor`   | Higlight for unselected Item                                                            | String           | `transparent` |                                   |
| `getSelectedIndex`  | Get selected index.                                                                     | Function         |               |                                   |
| `renderItem`        | Component to be rendered                                                                | Function.        |               |                                   |

## 🤔 How to contribute

Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/KiteOfficial/react-native-flatlist-selector/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

<p align="center">
    <br>
    <a href="https://nodei.co/npm/react-native-flatlist-selector/" rel="nofollow">
        <img align="center" src="https://nodei.co/npm/react-native-flatlist-selector.png?downloads=true&downloadRank=true" width="384">
    </a>
</p>
