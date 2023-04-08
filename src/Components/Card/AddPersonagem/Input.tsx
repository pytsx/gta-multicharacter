import { Tooltip, Zoom, InputLabel, Typography, Input } from "@mui/material"
import { genderType } from "../../../Common/Types"
import { Dispatch, SetStateAction } from "react"


interface INewCharIn {
    label: string
    gender: genderType,
    setState: Dispatch<SetStateAction<any>>
    value: string | undefined
}

export const NewCharacterInput = ({ label, gender, setState, value }: INewCharIn) => {
    let mensagem = !!!gender ? 'primeiro escolha o sexo do seu personagem' : `escolha um ${label}`

    return (
        <Tooltip arrow TransitionComponent={Zoom} title={mensagem} placement="right">

            <InputLabel sx={{
                width: '100%',
                m: .32,
                ml: 0,
                height: 31,
                bgcolor: '#2d2d2d24',
                backdropFilter: 'blur(30px)',
                display: 'flex',
                borderRadius: '.2rem',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                pl: 2
            }}>

                <Typography sx={{ userSelect: 'none' }} color='#3d3d3d'>{label}</Typography>

                <Input onChange={(e) => setState(e.target.value as string)} value={value} disabled={!!!gender} sx={{ color: '#1d1d1d' }}></Input>
            </InputLabel>
        </Tooltip>

    )
}
