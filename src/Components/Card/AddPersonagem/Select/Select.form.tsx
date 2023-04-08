import styled from "@emotion/styled";
import { InputBase, FormControl, Select, MenuItem, Tooltip, Zoom } from "@mui/material";
import { INewCharSelectForm, genderIdentityType } from "../../../../Common/Types";

const BootstrapInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderRadius: 0,
        position: 'relative',
        backgroundColor: 'transparent',
        fontSize: 16,
        minWidth: '16px',
        paddingLeft: '12px',
    },
}));

export const NewCharacterSelectForm = ({ values, label, gender, setState, state }: INewCharSelectForm) => {
    const handleChange = (e: any) => {
        setState(e.target.value)
    }
    let mensagem = !!!gender ? 'primeiro escolha o sexo do seu personagem' : `${label}`
    return (
        <Tooltip arrow TransitionComponent={Zoom} title={mensagem} placement="top-end">

            <FormControl>
                <Select
                    labelId={`customized-select-label-${label}`}
                    id={`customized-select-${label}`}
                    value={state}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                    sx={{ color: '#1d1d1d' }}
                    disabled={!!!gender}
                >
                    {
                        values.map((value: string | genderIdentityType) => (
                            <MenuItem key={value} value={value}>{value}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Tooltip>
    )
}
