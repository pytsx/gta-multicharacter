import { Container, Stack } from "@mui/material"
import { Cards } from "../../Components/Cards"

export const CharacterSelector = () => {
    return (
        <Stack
            alignItems='center'
            justifyContent='center'
            sx={{
                width: '100%',
                height: '100%',
                transition: 'all 300ms ease-in-out',
                transformOrigin: 'left'

            }}>
            <Cards />
        </Stack>
    )
}