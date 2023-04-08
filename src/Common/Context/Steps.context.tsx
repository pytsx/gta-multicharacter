import React from "react"
import { IProvider } from "../Types"

const StepsContext = React.createContext({
    nextStep: () => { },
    step: 0,
})

export const useSteps = () => React.useContext(StepsContext)

export const StepsProvider = ({ children }: IProvider) => {
    const [step, setStep] = React.useState<number>(1)
    const [steps, setSteps] = React.useState([])

    const nextStep = () => {
        setStep(prev => prev += 1)
    }

    return (
        <StepsContext.Provider value={{ step, nextStep }}>
            {children}
        </StepsContext.Provider>
    )
}