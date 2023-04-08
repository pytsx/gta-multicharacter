import { Stack } from "@mui/material"
import { CardContainer } from "../Card/Card.container"
import { useSteps } from "../../Common/Context/Steps.context"
import { usePersonagensAPI } from "../../Common/Context/PersonagensAPI"
import { AddPersonagem } from "../Card/AddPersonagem/Card.addPersonagem"
import { IoMdAdd } from "react-icons/io"
import { CardPersonagemContainer } from "../Card/ViewPersonagem/CardPersonagem.container"

export const Cards = () => {
    const { personagens, addPersonagem, handleAddPersonagem } = usePersonagensAPI()
    const { step } = useSteps()

    return (
        <Stack sx={{
            width: '80rem', height: '100%',
            perspective: '2000px',
            display: step == 1 ? 'flex' : 'none',

        }}>
            {addPersonagem
                ? <Stack direction='row' sx={{
                    transform: 'rotateY(4deg) skew(1deg)',
                    width: '100%', height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    < CardContainer >
                        <AddPersonagem />
                    </CardContainer>
                </Stack>
                : <Stack direction='row' sx={{
                    transform: 'rotateY(4deg) skew(1deg)',
                    width: '100%', height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {
                        personagens?.map((personagem: any) => (
                            <CardContainer key={personagem?.id} personagem={personagem}>
                                <CardPersonagemContainer personagem={personagem} />
                            </CardContainer>

                        ))
                    }
                    <CardContainer >
                        <Stack onClick={() => handleAddPersonagem()} alignItems='center' justifyContent='center' sx={{ width: '100%', height: '100%' }}>
                            <IoMdAdd color='#fafafaaf' style={{ transform: 'scale(1.4)' }} fontSize={32} />
                        </Stack>
                    </CardContainer>
                </Stack>
            }




        </Stack >

    )
}