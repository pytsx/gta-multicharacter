import { Box, Fade, Stack, Typography } from "@mui/material"
import { useSteps } from "../../../Common/Context/Steps.context"
import { useCard } from "../../../Common/Context/Card.context"
import { c1, c2, c3 } from "../../../assets"

export const CardPersonagem = (personagem: any) => {
    const { isActive } = useCard()
    const { nextStep } = useSteps()
    const handleNextStep = () => {
        nextStep()
    }
    personagem = personagem.personagem
    let arrayCard = Object.entries(personagem.job)
    arrayCard = arrayCard.filter(item => item[0] != 'grade')

    return (

        <Stack
            justifyContent='space-between'
            sx={{
                display: isActive && isActive?.id != personagem.id ? 'none' : 'flex',
                padding: 2,
                height: 'calc(100% - 40px)',
                position: 'relative'
            }}>
            <Stack
                sx={{
                    height: '100%', width: '100%',
                    borderRadius: '.4rem',
                    p: '.8rem .4rem',
                }}>

                <Stack sx={{
                    width: 'min-content',
                    position: 'absolute',
                    left: 24,
                    top: 24,
                    zIndex: 1000
                }}>
                    <Typography
                        sx={{ userSelect: 'none' }}
                        fontSize={32}
                        fontWeight={800}
                        lineHeight={.6}
                        color='#fafafa'
                    >
                        {personagem?.charinfo.firstname}
                    </Typography>
                    <Typography
                        sx={{ userSelect: 'none' }}
                        fontSize={20}
                        fontWeight={800}
                        color='#9d9d9d'
                    >
                        {personagem?.job.grade.name}
                    </Typography>
                </Stack>

                <Stack
                    alignItems='start'
                    justifyContent={!isActive ? 'center' : 'space-between'}
                    direction='row'
                    sx={{
                        width: '100%', height: '100%',
                        pr: isActive && isActive?.id == personagem.id ? 12 : 0
                    }}>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: !isActive ? 'center' : 'space-between',
                            transition: 'all 300ms ease-in-out',
                            height: '100%',
                            width: !isActive ? '100%' : '40%',
                            maskImage: isActive ? 'linear-gradient(to top, transparent 10%, #fafafa 20%)' : 'linear-gradient(to top, transparent 30%, #fafafa 50%)'
                        }}>

                        <img style={{
                            height: isActive ? '100%' : '70%',
                            maxWidth: '300px',
                            marginTop: '2rem',
                            userSelect: 'none',
                            zIndex: 10000

                        }} src={c3} />

                    </Box>
                    <Fade in={!!isActive} timeout={800}>
                        <Stack sx={{
                            display: isActive && isActive?.id == personagem.id ? 'flex' : 'none',
                            transition: 'all 1s ease',
                            mt: 6,
                            width: '32rem', height: '64%',
                            mr: 2,
                        }}>

                            {arrayCard.map((e: any, index) => (

                                <Stack
                                    key={index}
                                    direction='row'
                                    justifyContent='space-between'
                                    alignItems='center'
                                    sx={{
                                        m: .16,
                                        width: '100%', height: '10%',
                                        bgcolor: '#2d2d2d32',
                                        px: 6,
                                        borderRadius: '.2rem'
                                    }}>
                                    <Typography
                                        sx={{
                                            userSelect: 'none'
                                        }}
                                        color='#949494'
                                    >
                                        {e[0].toString()}
                                    </Typography>
                                    <Typography sx={{
                                        userSelect: 'none'
                                    }}
                                        color='#bfbfbf'
                                    >
                                        {e[1].toString()}
                                    </Typography>
                                </Stack>
                            ))}

                        </Stack>
                    </Fade>

                </Stack>


                <Stack
                    alignItems='end'
                    justifyContent='center'
                    sx={{
                        position: 'absolute',
                        right: 0, top: !!isActive ? 0 : 40,
                        transition: 'all 100ms ease-in-out',
                        zIndex: -1
                    }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '40%',
                            p: 1
                        }}>

                        <svg >
                            <circle
                                strokeDasharray={240}
                                strokeDashoffset={240 - (240 * 100) / 100}
                                strokeWidth={1}
                                stroke='#3d3d3d2f'
                                fill='transparent'
                                cx='50'
                                cy='50'
                                r='40'
                                style={{ position: 'absolute' }}
                            />
                            <circle
                                strokeDasharray={240}
                                strokeDashoffset={240 - (240 * personagem?.job.grade.level) / 100}
                                strokeWidth={4}
                                stroke='#3d3d3d7f'
                                fill='transparent'
                                cx='50'
                                cy='50'
                                r='40'
                                style={{ position: 'absolute' }}
                            />

                        </svg>
                        <Typography
                            fontSize={40}
                            fontWeight={800}
                            color='#2d2d2d'
                            sx={{
                                bgcolor: 'transparent',
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                left: personagem?.job.grade.level == 100 ? '20%' : personagem?.job.grade.level < 10 ? '2.9rem' : '28%',
                                top: '1.8rem',
                                letterSpacing: -2,
                                userSelect: 'none'
                            }} >
                            {personagem?.job.grade.level}
                        </Typography>
                    </Box>
                </Stack>
            </Stack>

            <Stack
                alignItems='center'
                direction='row'
                justifyContent={isActive ? 'center' : 'center'}
                sx={{
                    position: 'absolute',
                    width: '100%', height: '32%',
                    bottom: 10,
                    left: 0,
                    right: 0,
                    zIndex: 1000
                }}>
                <Stack
                    sx={{ width: '100%', px: 2 }}
                    direction='column'
                    justifyContent={isActive ? 'center' : 'space-between'}
                    alignItems='end'>
                    <Typography sx={{ userSelect: 'none' }}
                        fontSize={32}
                        fontWeight={800}
                        lineHeight={.6}
                        color='#9d9d9d'  >
                        carteira
                    </Typography>
                    <Typography sx={{ userSelect: 'none' }}
                        fontSize={20}
                        fontWeight={800}
                        color='#fafafa'>
                        {personagem.money.cash}
                    </Typography>
                </Stack>
                <Stack sx={{ width: '100%', px: 2 }} direction='column' justifyContent={isActive ? 'center' : 'space-between'} alignItems='start'>
                    <Typography sx={{ userSelect: 'none' }}
                        fontSize={32}
                        fontWeight={800}
                        lineHeight={.6}
                        color='#9d9d9d' >
                        banco
                    </Typography>
                    <Typography sx={{ userSelect: 'none' }}
                        fontSize={20}
                        fontWeight={800}
                        color='#fafafa'>
                        {personagem.money.bank}
                    </Typography>
                </Stack>


            </Stack>

            <Box sx={{
                display: !isActive ? 'none' : isActive?.id == personagem.id ? 'flex' : 'none',
            }}>
                <Box
                    onClick={() => handleNextStep()}
                    sx={{
                        position: 'absolute',
                        right: 12,
                        bottom: 8,
                        borderRadius: '.2rem',
                        bgcolor: '#4cd964',
                        cursor: 'pointer',
                        width: 'min-content',
                        p: '.2rem 1.6rem',
                        transition: 'all 200ms ease-in-out',
                        opacity: isActive && isActive?.id == personagem.id ? 1 : 0,
                        zIndex: 14000
                    }} >
                    <Typography sx={{ userSelect: 'none' }}>
                        jogar
                    </Typography>
                </Box>

            </Box>

        </Stack>

    )
}