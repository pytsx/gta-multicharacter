import { Stack, Box, Typography, Button, IconButton } from "@mui/material"
import { c2, c7 } from "../../../assets"
import { useState } from "react"
import '../style.css'
import { genderType, genderIdentityType } from "../../../Common/Types";
import { NewCharacterInput } from "./Input";
import { NewCharacterSelect } from "./Select/Select.container";
import { FiAlertTriangle } from 'react-icons/fi'
import { usePersonagensAPI } from "../../../Common/Context/PersonagensAPI";
import { v4 as uuidv4 } from 'uuid'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import { randomPersonagens } from "../../../Common/randomPersonagem";

export const AddPersonagem = () => {

    const [name, setName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [dia, setDia] = useState<string>()
    const [mes, setMes] = useState<string>()
    const [ano, setAno] = useState<string>()
    const [gender, setGender] = useState<genderType>(undefined)
    const [genderIdentity, setGenderIdentity] = useState<genderIdentityType>(undefined)
    const [emprego, setEmprego] = useState<string>('')
    const random = randomPersonagens
    const indiceRandom = Math.floor(Math.random() * random.length);

    let db_gender = ['MALE', 'FEMALE']
    let db_dia = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    let db_mes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let db_ano: string[] = []
    for (let i = 1900; i < 2024; i++) {
        db_ano.push(i.toString())
    }
    let db_genderIdentity = ['CISGÊNERO', 'TRANSGÊNERO', 'GÊNERO NEUTRO', 'NÃO-BINÁRIO']


    const { post, handleAddPersonagem, personagens } = usePersonagensAPI()
    let isFormComplete = !!!gender || !!!name || !!!lastName || !!!dia || !!!mes || !!!ano || !!!genderIdentity


    const handleSetGender = (gender: genderType) => {
        setGender(prev => prev == gender ? undefined : gender)
    }



    const [formsDataNascimento, setFormsDataNascimento] = useState([
        {
            label: 'dia',
            values: db_dia,
            setState: setDia,
            state: dia
        },
        {
            label: 'mês',
            values: db_mes,
            setState: setMes,
            state: mes
        },
        {
            label: 'ano',
            values: db_ano,
            setState: setAno,
            state: ano
        }
    ])
    const [formsGenero, setFormGenero] = useState([
        {
            label: 'gênero',
            values: db_genderIdentity,
            setState: setGenderIdentity,
            state: genderIdentity
        }
    ])



    const randomNewCharacter = () => {
        let personagem = randomPersonagens[indiceRandom]
        let nome = personagem.nome.split(' ').length > 0 ? personagem.nome.split(' ')[0] : personagem.nome
        let emprego = personagem.emprego.split(' ').length > 0 ? personagem.emprego.split(' ')[0].replace(',', '') : personagem.emprego
        setGender(personagem.sexo as genderType)
        setName(nome)
        setLastName(personagem.sobrenome)
        setDia(personagem.nascimento.split('/')[0])
        setMes(personagem.nascimento.split('/')[1])
        setAno(personagem.nascimento.split('/')[2])
        setGenderIdentity(personagem.gender_identity as genderIdentityType)
        setEmprego(emprego)
    }

    const handlePost = () => {
        let newPersonagem = {
            'id': uuidv4(),
            'nome': name,
            'sobrenome': lastName,
            'passaporte': uuidv4().split('-')[0],
            'data_de_nascimento': `${dia}/${mes}/${ano}`,
            'carteira': 0,
            'banco': 0,
            'nivel': 0,
            'emprego': emprego,
            'img': gender == 'FEMALE' ? c7 : c2
        }
        if (name && lastName) {
            post(newPersonagem)
            handleAddPersonagem()
        }
    }

    const transition = 'all 200ms ease-in-out'
    return (
        <Stack sx={{ width: '100%', height: '100%' }}>

            <Stack
                alignItems='end'
                justifyContent='center'
                direction='row'
                sx={{
                    width: '100%', height: '50%',
                    position: 'relative',
                    bgcolor: '#3d3d3d44',
                    boxShadow: 'inset -0px -10px 20px -10px #4d4d4d'
                }}>

                <Box
                    onClick={() => handleSetGender('MALE')}
                    sx={{
                        maskImage: gender == 'MALE'
                            ? 'linear-gradient(to top, transparent 0%, #fafafa 50%)'
                            : 'linear-gradient(to top, transparent 10%, #fafafa 50%)',
                        height: '90%',
                        borderRadius: '.4rem',
                        p: 3,
                        pb: 0,

                    }}>

                    <img
                        src={c2}
                        style={{
                            width: 'auto',
                            height: '100%',
                            transition,
                            userSelect: 'none',
                            opacity: gender == 'MALE'
                                ? 1
                                : .2
                        }} />
                </Box>
                <Box
                    onClick={() => handleSetGender('FEMALE')}
                    sx={{
                        maskImage: gender == 'FEMALE'
                            ? 'linear-gradient(to top, transparent 0%, #fafafa 50%)'
                            : 'linear-gradient(to top, transparent 10%, #fafafa 50%)',
                        height: '90%',
                        maxWidth: '50%',

                    }}>
                    <img
                        src={c7}
                        style={{
                            width: 'auto',
                            height: '100%',
                            transition,
                            userSelect: 'none',
                            opacity: gender == 'FEMALE'
                                ? 1
                                : .2
                        }} />
                </Box>
                <IconButton onClick={() => randomNewCharacter()} sx={{ position: 'absolute', right: 2, bottom: 1, m: '.4rem' }}>
                    <GiPerspectiveDiceSixFacesRandom fontSize={24} color="#1d1d1d" />
                </IconButton>
            </Stack>

            <Stack alignItems='center' justifyContent='space-between' sx={{ height: '100%', p: '.64rem', width: '100%' }}>



                <Stack sx={{ width: '100%' }}>
                    <NewCharacterInput setState={setName} value={name} label='nome' gender={gender} />


                    <NewCharacterInput setState={setLastName} value={lastName} label='sobrenome' gender={gender} />

                    <NewCharacterSelect label="nascimento" forms={formsDataNascimento} gender={gender} />
                    <NewCharacterSelect label="gênero" forms={formsGenero} gender={gender} />
                </Stack>

                <Stack direction='row' alignItems='center' sx={{ width: '100%', height: 24, m: .8 }}>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: 1,
                        m: .1,
                        bgcolor: ' #2d2d2daf',
                        height: '100%',
                        borderRadius: '.2rem 0 0 .2rem',
                        '&:hover': {
                            bgcolor: ' #2d2d2d',
                        }
                    }}>
                        <FiAlertTriangle style={{ userSelect: 'none' }} color='#8d8d8d' />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        backgroundImage: 'linear-gradient(98deg, #2d2d2daf 20%, #2d2d2d00 100%)',
                        px: 1,
                        m: .1,
                        py: .4,
                        height: '100%',
                        borderRadius: ' 0 .2rem .2rem 0',
                        '&:hover': {
                            backgroundImage: 'linear-gradient(98deg, #2d2d2d 10%, #2d2d2d00 100%)',

                        }
                    }}>
                        <Typography fontSize={14} sx={{ userSelect: 'none' }} color='#8d8d8d' >
                            customize seu personagem in game
                        </Typography>
                    </Box>
                </Stack>

                <Button
                    onClick={() => handlePost()}
                    sx={{
                        bgcolor: '#4d4d4d',
                        borderRadius: '.4rem',
                        color: '#9d9d9d',
                        '&:hover': {
                            bgcolor: '#2d2d2d'
                        }
                    }}
                    disabled={isFormComplete}
                    fullWidth
                    disableElevation
                    variant="contained">
                    adicionar personagem
                </Button>
            </Stack>
        </Stack >
    )
}


