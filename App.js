import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, ImageBackground} from 'react-native';

import { useState } from 'react';
import Task from './components/Task';
const image = {uri: 'https://images.pexels.com/photos/1495580/pexels-photo-1495580.jpeg?auto=compress&cs=tinysrgb&w=600'}
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTask =()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  //Delete task when completed

  const completeTask=(index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1)
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <View style={styles.tasksWrapper}>
      <View style={styles.title}><Text>Tasks to do</Text>

      
      <View>
      {
        
        taskItems.map((item, index)=>{
          return(
          <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
        <Task text={item} />
        </TouchableOpacity>
        )
        })
      }
      </View>


      </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}><TextInput style={styles.input} placeholder={'Add a new task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={()=> handleTask()}>
        <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
    
  },
  image: {
    flex: 1,
    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold'
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    paddingBottom: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },


  
});
