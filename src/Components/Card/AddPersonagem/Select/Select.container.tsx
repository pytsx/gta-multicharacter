import { Stack, Typography } from "@mui/material"
import { INewCharSelect } from "../../../../Common/Types"
import { NewCharacterSelectForm } from "./Select.form"



export const NewCharacterSelect = ({ label, forms, gender }: INewCharSelect) => {
    return (
        <Stack sx={{
            width: '100%',
            m: .32,
            ml: 0,
            height: 32,
            bgcolor: '#2d2d2d24',
            backdropFilter: 'blur(30px)',
            display: 'flex',
            borderRadius: '.2rem',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            pl: 2
        }} direction='row'>
            <Typography sx={{ userSelect: 'none' }} color='#3d3d3d'>{label}</Typography>
            <Stack direction='row' >
                {forms.map(form => (
                    <NewCharacterSelectForm label={form.label} values={form.values} gender={gender} setState={form.setState} state={form.state} />

                ))}

            </Stack>
        </Stack>
    )
}

