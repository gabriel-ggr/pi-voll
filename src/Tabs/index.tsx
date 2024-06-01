import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from "./Principal";
import Consulta from "./Consulta";
import Ionicons from "react-native-vector-icons/Ionicons"
import Explorar from "./Explorar";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator()
const ScreenOptions = {
    tabBarStyle: {
        backgroundColor: "#002851"
    },
    tabBarActiveTintColor: "#339Cff",
    tabBarInactiveTintColor: '#fff'
}

const tabs = [
    {
        id:1,
        name: 'Principal',
        component: Principal,
        icon: 'home'
    },
    {
        id:2,
        name: 'Consultas',
        component: Consulta,
        icon: 'calendar'
    },
    {
        id:3,
        name: 'Explorar',
        component: Explorar,
        icon: 'search'
    },
    {
        id:4,
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    },
]


export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={ScreenOptions}>

            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.id} 
                    name={tab.name}
                    component={tab.component}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name={tab.icon} color={color} size={size} />
                        )
                    }}
                />
            ))
            }
        </Tab.Navigator>
    )
}