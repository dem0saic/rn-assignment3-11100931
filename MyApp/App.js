import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fceeeb'}}>
      <View style={styles.container}>
        <View style={firs1.firstCompo}>
          <View style={{}}>
            <Text style={{fontSize: 32, fontWidth: 'bold', font: ''}}>Hello, Devs</Text>
            <Text style={{fontSize: 12}}>14 Tasks Today</Text>
          </View>

          <TouchableOpacity style={{backgroundColor:'#fff', padding: 6.5, borderRadius: 30,}}>
              <Image source={require("./assets/profile.png")}></Image>
          </TouchableOpacity>
        </View>
          <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 15,
    width: 393,
    height: 852,
    borderRadius: 35,
  },
});

const firs1 = StyleSheet.create({
  firstCompo: {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between",
    width: 380,
    height: 52,
    top: 42,
    gap: 134,
    left: 2,
  }
})
