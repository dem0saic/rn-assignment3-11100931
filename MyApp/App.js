import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text,TextInput, View, SafeAreaView, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { categoriesData } from "./MData/categories.data";
import { taskData } from "./MData/task.data";
import Icon from 'react-native-vector-icons/FontAwesome';
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
            {/**Bell Icon */}

            {/**Profile Picture */} 
            <TouchableOpacity style={{backgroundColor:'#fff', padding: 6.5, borderRadius: 30,}}>
                <Image source={require("./Assets/profile.png")}></Image>
            </TouchableOpacity>
          </View>
          {/**End of First Component */}

          {/**Second Component */}  
          <View style={sec2.secondCompo}>
            {/**TextInput Box  */}
              <TouchableOpacity>
                <Icon  style={{fontSize: 20,   borderRadius: 35, padding: 5,  display: 'flex',
    alignItems: 'flex',
    backgroundColor: "white",}} name='search'/>
              </TouchableOpacity>
              <TextInput style={searchInput.searchHere} placeholder="Search"/>
            
      
            {/**Search Icon and FIlter Icon */}
            <View style={{backgroundColor: "#F0522F", padding: 10, borderRadius: 10}}>
              <Image source={require("./Assets/setting.png")} />
            </View>

          </View>
          {/**End of Second Component */}

          {/**Third Component */} 
          <View style={{gap: 10, width: 380, height: 235, top: 42, }}>
            <Text style={{fontSize: 20, fontWeight: "bold", left: 2,}}>Categories</Text>

            <FlatList style={{top: 40, left: 2, width: 380, top: 0.7, height: 192,}}
              data={categoriesData}

              renderItem={({ item }) => (
                <View style={flatlistcategories.flatlists}>

                  <View style={{width: 72, height: 37, top: 10, left: 15,}}>
                    <Text style={{fontWeight: "bold", fontSize: 16,}}>
                      {item.name}
                    </Text>
                    <Text style={{fontSize: 12,}}>{item.description}</Text>
                  </View>
                  <View style={{alignItems: 'center', width: 151, height: 132,top: 18,left: 18,}}>
                  <Image source={item.image} />
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
            {/**End of Third Component */}

          
          {/**Fourth Component */}
          {/**Ongoing Tasks */}
          <View style={{ gap: 10, width: 380, top: 40, height: 450,}}>
            <Text style={{fontWeight: "bold", fontSize: 20}}>Ongoing Task</Text>
              <FlatList style={{top: 40, width: 380, top: 0.7, height: 320,}}
                data={taskData}
                renderItem={({ item }) => (
                  <View style={flatListTask.flatLists}>
                    <View>
                      <Text style={{fontWeight: 700, fontSize: 16 }} >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                  )}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
              />
          </View>
          {/**End of Fourth Component */}
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
    height: 46,
    top: 40,
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
    height: 52,
    top: 48,
    left: 2,
    border: 1,
  }
})

{/** SearchInput Area */}
const searchInput = StyleSheet.create({
  searchHere: {
    display: 'flex',
    alignItems: 'flex',
    backgroundColor: "white",
    width: 285,
    height: 48,
    borderRadius: 10,
    padding: 5,
    right: 4.5,
  }
})

{/**Third component */}
const flatlistcategories =({
  flatlists: {
  display: "flex", 
  backgroundColor: "white", 
  marginRight: 14, 
  borderRadius: 15, 
  width: 186,
  height: 195,
  }
})

const flatListTask =({
  flatLists: {
    height: 128, 
    backgroundColor: "white", 
    borderColor: "#E8D1BA", 
    padding: 20, 
    borderRadius: 15, 
    marginBottom: 12, 
    justifyContent: "center",
    border: 1,
  }
})