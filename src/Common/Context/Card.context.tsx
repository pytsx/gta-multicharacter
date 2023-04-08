import React, { ReactNode, createContext, useContext, useState } from "react";
import { IProvider } from "../Types";
import { c1, c2, c3, c4 } from '../../assets'
import { usePersonagensAPI } from "./PersonagensAPI";
const cardsScript = [
    {
        'id': 1,
        'nome': 'nome',
        'sobrenome': 'sobrenome',
        'passaporte': '0001',
        'data_de_nascimento': '13/06/2000',
        'carteira': 200,
        'banco': 1000,
        'nivel': 12,
        'emprego': 'emprego',
        'img': c1
    },
    {
        'id': 2,
        'nome': 'nome',
        'sobrenome': 'sobrenome',
        'passaporte': '0002',
        'data_de_nascimento': '13/06/2000',
        'carteira': 43678,
        'banco': 23406370,
        'nivel': 100,
        'emprego': 'emprego',
        'img': c2
    },
    {
        'id': 3,
        'nome': 'nome',
        'sobrenome': 'sobrenome',
        'passaporte': '0003',
        'data_de_nascimento': '13/06/2000',
        'carteira': 2345,
        'banco': 132300,
        'nivel': 24,
        'emprego': 'emprego',
        'img': c3
    }
]

const c = {
    'id': 4,
    'nome': 'nome',
    'sobrenome': 'sobrenome',
    'passaporte': '0004',
    'data_de_nascimento': '13/06/2000',
    'carteira': 'carteira',
    'banco': 123450,
    'emprego': 'emprego',
    'img': c4
}



const CardContext = createContext({
    handleCardActivation: (id: number) => { },
    isActive: { 'id': 0, 'nome': null },
    cards: []
})

export const useCard = () => useContext(CardContext)

export const CardProvider = ({ children }: IProvider) => {
    const [isActive, setIsActive] = useState<any>(null)
    const [cards, setCards] = useState<any>()
    const { personagens } = usePersonagensAPI()
    type cardsType = typeof cards

    React.useEffect(() => {
        setCards(personagens)
    }, [personagens])

    const handleCardActivation = (id: number | string) => {
        setIsActive((prev: cardsType[0]) => prev?.id != id ? cards.find((e: cardsType) => e.id == id) : null)
    }

    return (
        <CardContext.Provider value={{ isActive, handleCardActivation, cards }}>
            {children}
        </CardContext.Provider>
    )
}