import { IconButton, Stack, Typography } from "@mui/material"
import { useCard } from "../../../Common/Context/Card.context"
import { MdOutlineAccountCircle } from "react-icons/md"
import { CardPersonagem } from "./CardPersonagem"

export const CardPersonagemContainer = (personagem: any) => {
    const { isActive } = useCard()
    personagem = personagem.personagem

    return (
        <>
            <Stack
                direction='row'
                sx={{
                    width: '100%',
                    height: '40px',
                    backgroundImage: 'linear-gradient(90deg, rgba(29,29,29,.8) 0%, rgba(61,61,61,.5) 61%, rgba(61,61,61,.1) 80%)',
                    borderRadius: `.2rem .2rem 0rem 0rem`,
                    alignItems: 'center',
                    display: isActive?.id == personagem?.id ? 'flex' : !isActive ? 'flex' : 'none',

                }}>
                <IconButton
                    disableRipple
                    sx={{
                        borderRadius: `.2rem 0rem 0rem 0rem`,
                        bgcolor: '#1d1d1d',
                        height: '100%',
                        width: '40px'
                    }}>
                    <MdOutlineAccountCircle fontSize={32} color="#9d9d9d" />
                </IconButton>

                <Typography sx={{

                    fontSize: 16,
                    fontWeight: 800,
                    color: '#9d9d9d',
                    userSelect: 'none',
                    ml: '.4rem'
                }}>
                    {personagem?.charinfo.account}
                </Typography>

            </Stack>
            <CardPersonagem personagem={personagem} />

        </>

    )
}