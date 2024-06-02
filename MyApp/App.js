import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text,TextInput, View, SafeAreaView, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fceeeb'}}>
      <View style={styles.container}>

        {/**First Component */}
        <View style={firs1.firstCompo}>
          <View style={{}}>
            <Text style={{fontSize: 32, fontWidth: 'bold', font: ''}}>Hello, Devs</Text>
            <Text style={{fontSize: 12}}>14 Tasks Today</Text>
          </View>

          <TouchableOpacity style={{backgroundColor:'#fff', padding: 6.5, borderRadius: 30,}}>
              <Image source={require("./assets/profile.png")}></Image>
          </TouchableOpacity>
        </View>

        {/**Second Component */}  
        <View style={sec2.secondCompo}>
          {/**TextInput Box  */}
          <TextInput placeholder="Search" style={searchInput.searchHere}/>
    
          {/**Search Icon and FIlter Icon */}
          <View style={{backgroundColor: "#F0522F", padding: 10, borderRadius: 10}}>
            <Image source={require("./assets/Vector.png")} />
          </View>
        </View>

        <View style={{gap: 10,}}>
          <Text style={{fontSize: 20, fontWeight: "bold", top: 55,}}>Categories</Text>
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

{/**First Component */}
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

  {/**Second Component */}  
const sec2 = StyleSheet.create({
  secondCompo: {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between",
    width: 380,
    height: 49,
    top: 55,
    left: 2,
    border: 1,
  }
})

{/** SearchInput Area */}
const searchInput = StyleSheet.create({
  searchHere: {
    backgroundColor: "white",
    width: 300,
    height: 48,
    borderRadius: 10,
    padding: 5,
    border: 1,
  }
})