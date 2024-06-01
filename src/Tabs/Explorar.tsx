import { Card, ScrollView, VStack } from "native-base";
import { BuscarMedico } from "../componentes/buscarMedico";
import { Titulo } from "../componentes/titulo";
import {CardConsulta} from "../componentes/CardsConsulta";
import { useState } from "react";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";

interface Especialista {
    nome: string,
    imagem: string,
    especialidade: string,
    id: string
}


export default function Explorar({navigation}: any){
    const [estado, setEstado] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [resultadoBusca, setResultadoBusca] = useState([])

    async function buscar(){
        if(!estado || !especialidade) return null //verifica se tem algum dos dois
        const resultado = await buscarEspecialistaPorEstado(estado, especialidade)
        if(resultado){
            setResultadoBusca(resultado)
            console.log(resultado)
        }
    }

    return(
        <ScrollView p="5">
            <BuscarMedico estado={estado} setEstado={setEstado} especialidade={especialidade} setEspecialidade={setEspecialidade} funcaoBotao={buscar} mt="20" value={especialidade}></BuscarMedico>
            <Titulo mt="5" color="blue.500" mb="5">Resultado da busca</Titulo>

            {resultadoBusca?.map((especialista: Especialista, index) => (
                <VStack flex={1} w='100%' alignItems="flex-start" bgColor="white" key={index}>
                    <CardConsulta
                        especialidade={especialista.especialidade}
                        foto={especialista.imagem}
                        nome={especialista.nome}
                        onPress={() => navigation.navigate('Agendamento', {
                            especialistaId: especialista.id
                        })}
                        />

            </VStack>
            ))
            }

        </ScrollView>
    )
}