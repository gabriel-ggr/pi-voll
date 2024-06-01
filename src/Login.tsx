import { VStack, Image, Text, Box, FormControl, Input, Button, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.jpg'
import {Titulo} from './componentes/titulo'
import {Botao} from './componentes/botao'
import { EntradaTexto } from './componentes/EntradaTexto';
import { useEffect, useState } from 'react';
import { fazerLogin } from './servicos/AutenticacaoServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';


export default function Login( {navigation}: any ) {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [carregando, setCarregando] = useState(true)
  const toast = useToast()

  useEffect(() => {
    //AsyncStorage.removeItem('token') // temporario para remover o token para cair na tela de login
    async function verificarLogin(){
      // verifica se já tem login salvo 
      const token = await AsyncStorage.getItem('token')
      if(token){
        navigation.replace('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin()
  }, [])

  async function login(){
    const resultado = await fazerLogin(email, senha)
    if(resultado){
      const { token } = resultado
      AsyncStorage.setItem('token', token) // armazena o token de login

      const tokenDecodificado = jwtDecode(token) as any
      const pacienteId = tokenDecodificado.id
      AsyncStorage.setItem('pacienteId', pacienteId)
      navigation.replace('Tabs')
    }
    else(
      // Toats usado para popup na tela
      toast.show({
        title: "Erro no login",
        description: "O email ou senha não conferem",
        background: "red.500"
      })
    )
  }

  if(carregando){
    return null
  }

  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent='center' backgroundColor='white'>
      {/* p = padding */}
      <Image source={Logo} alt='Logo Voll' />

      <Titulo>Faça login em sua conta</Titulo>

      <Box>
        <EntradaTexto 
        label='Email' 
        placeholder='Insira seu endereço de email'
        value={email}
        onChangeText={setEmail}
        />
      </Box>

      <Box>
        <EntradaTexto
        label='Senha'
        placeholder='Insira sua senha'
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        />
      </Box>

      <Botao onPress={login}>Entrar</Botao>

      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box width="100%" flexDirection='row' justifyContent='center' marginTop={10}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color='blue.500'>Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
};
