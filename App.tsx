import {NativeBaseProvider, StatusBar} from 'native-base';
import { TEMAS } from './src/estilos/temas';
import Rotas from './src/rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor='white' />
      <Rotas />
    </NativeBaseProvider>
  );
};