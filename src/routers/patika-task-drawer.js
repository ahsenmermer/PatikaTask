import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../pages/Home"
import Favorites from "../pages/Favorites"


const Drawer = createDrawerNavigator();

const PatikaTaskDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Jobs" component={Home}/>
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
}
export default PatikaTaskDrawer