import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import HomeScreen from '../screens/Homescreen'
import AddMenuScreen from '../screens/AddMenuScreen'
import FilterMenuScreen from '../screens/FilterMenuScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
  const [menu, setMenu] = useState([]);

return(
<Stack.Navigator>
<Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="AddMenu">
          {(props) => <AddMenuScreen {...props} menu={menu} setMenu={setMenu} />}
        </Stack.Screen>
        <Stack.Screen name="FilterMenu">
          {(props) => <FilterMenuScreen {...props} menu={menu} />}
        </Stack.Screen>
</Stack.Navigator>
);
}