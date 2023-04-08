import { Box } from "@mui/material"
import { useState } from "react"
import { useSteps } from "./Common/Context/Steps.context"
import { Layout } from "./Pages/Layout"
import { CharacterSelector } from "./Pages/CharacterSelector"
import { noise_6, fundo } from './assets'
function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const { step, nextStep } = useSteps()
  return (
    <Layout>
      <Box sx={{
        background: '#3d3d3d',
        backgroundImage: `url(${fundo})`,
        backgroundSize: step == 1 ? '100%' : '500%',
        opacity: step == 1 ? 1 : 0,
        backgroundPosition: '50% 50%',
        width: '100%', height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        transition: 'all 300ms ease-in-out'
      }}>

        <Box sx={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          backdropFilter: 'blur(16px)',

        }}>
          <img style={{
            width: '100%',
            height: '100%',
            opacity: .03
          }} src={noise_6} />
        </Box>
        <CharacterSelector />
      </Box>

    </Layout>

  )
}

export default App
