import { Box } from "@mui/material"
import { useState } from "react"
import { IChildren } from "../../Common/Types"

export const Layout = ({ children }: IChildren) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    return (
        <Box sx={{
            background: '#1d1d1d',
            width, height,
            overflow: 'hidden',
            position: 'relative',
            transition: 'all 300ms ease'
        }}>


            {children}

        </Box>
    )
}