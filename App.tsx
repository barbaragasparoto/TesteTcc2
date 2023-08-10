import { SafeAreaView, StatusBar  } from 'react-native';
import Login from './src/componentes/Login';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/> 
      <Login/>
    </SafeAreaView>
  );
}


