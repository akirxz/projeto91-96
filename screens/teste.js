// import React, { Component } from 'react'
// import {
//     View,
//     Text,
//     ImageBackground,
//     StyleSheet,
//     FlatList,
//     TouchableOpacity,
//     Platform,
//     Alert
// } from 'react-native'

// import todayImage from '../assets/imgs/today.jpg'
// import Icon from 'react-native-vector-icons/FontAwesome'
// import moment from 'moment'
// import 'moment/locale/pt-br'

// export default class TaskList extends Component {
// render() {
//   const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
//   return (
//       <View style={styles.container}>
          
//           <ImageBackground source={todayImage}
//               style={styles.background}>
//               <View style={styles.titleBar}>
//                   <Text style={styles.title}>Hoje</Text>
//                   <Text style={styles.subtitle}>{today}</Text>
//               </View>
//           </ImageBackground>
//           <View style={styles.taskList}>
//              <Text>Task</Text>
//           </View>
//       </View>
//   )
// }
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1
// },
// background: {
//   flex: 3
// },
// taskList: {
//   flex: 7
// },
// titleBar: {
//   flex: 1,
//   justifyContent: 'flex-end'
// },
// title: {
  
//   fontSize: 50,
//   marginLeft: 20,
//   marginBottom: 20
// },
// subtitle: {
//   fontSize: 20,
//   marginLeft: 20,
//   marginBottom: 30
// },
// iconBar: {
//   flexDirection: 'row',
//   marginHorizontal: 20,
//   justifyContent: 'space-between',
//   marginTop: Platform.OS === 'ios' ? 40 : 10
// },
// addButton: {
//   position: 'absolute',
//   right: 30,
//   bottom: 30,
//   width: 50,
//   height: 50,
//   borderRadius: 25,
//   justifyContent: 'center',
//   alignItems: 'center'
// }
// });