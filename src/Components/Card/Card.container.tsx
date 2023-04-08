import { Box } from "@mui/material"
import { useState } from "react"
import { useCard } from "../../Common/Context/Card.context"
import { usePersonagensAPI } from "../../Common/Context/PersonagensAPI"
import { ICardContainer } from "../../Common/Types"

export const CardContainer = ({ personagem, children }: ICardContainer) => {
    const border = '.4rem'
    const [mouseEnter, setMouseEnter] = useState(false)
    const { handleCardActivation, isActive } = useCard()
    const { personagens, addPersonagem } = usePersonagensAPI()
    const transition = 'all 200ms ease-in-out'

    const handleCardClick = () => {
        if (!!personagem) {
            handleCardActivation(personagem?.id)
        }
    }

    return (
        <Box
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
            onClick={() => handleCardClick()}

            sx={{
                m: .16,
                transition,
                width:
                    !!personagem && isActive?.id == personagem?.id
                        ? '64rem'
                        : !isActive && !!personagem
                            ? '20rem' : !!!personagem && isActive && !addPersonagem
                                ? '4rem'
                                : addPersonagem ? '25rem' : '6rem',
                height: "32rem",
                backgroundImage: 'radial-gradient(circle, rgba(162,162,162,.6) 0%, rgba(209,209,209,.3) 45%)',
                backdropFilter: isActive?.id == personagem?.id ? 'blur(40px)' : 'blur(20px)',
                borderRadius: border,
                borderLeft: mouseEnter ? '2px solid #1d1d1daf' : '2px solid #2d2d2daf',
                borderTop: mouseEnter ? '2px solid #2d2d2daf' : '2px solid #3d3d3daf',
                borderRight: mouseEnter ? '2px solid #3d3d3daf' : '2px solid #4d4d4daf',
                borderBottom: mouseEnter ? '2px solid #4d4d4daf' : '2px solid #1d1d1daf',
                transform: !isActive && mouseEnter ? 'scale(1.004) ' : 'scale(1)',
                cursor: 'pointer',
                overflow: 'hidden',
                '&:hover': {
                    boxShadow: 'inset 1px 0px 8px -7px #fafafa, inset -1px 0px 8px -7px #fafafa, 2px 2px 8px -7px #fafafa, -2px 2px 8px -7px #fafafa'
                }
            }}>
            {children}


        </Box>
    )
}