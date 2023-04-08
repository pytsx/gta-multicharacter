import React from "react"
import { IProvider } from "../Types"

const KeyboardContext = React.createContext({
    keypress: 0,
})

export const useKeyboard = () => React.useContext(KeyboardContext)

export const KeyboardProvider = ({ children }: IProvider) => {
    const [keypress, setkeypress] = React.useState<any>()
    const [Keyboard, setKeyboard] = React.useState([])

    React.useEffect(() => {
        document.addEventListener('keypress', (e) => {
            console.log(e.code);

            setkeypress(e)
        })
    }, [])
    return (
        <KeyboardContext.Provider value={{ keypress }}>
            {children}
        </KeyboardContext.Provider>
    )
}