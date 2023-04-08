import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Character {
    citizenid: string;
    position: string;
    license: string;
    cid: number;
    last_updated: number;
    money: {
        cash: number;
        crypto: number;
        bank: number;
    };
    charinfo: {
        phone: string;
        firstname: string;
        lastname: string;
        backstory: string;
        cid: number;
        birthdate: string;
        nationality: string;
        gender: number;
        account: string;
    };
    name: string;
    job: {
        label: string;
        type: string;
        name: string;
        grade: {
            name: string;
            level: number;
        };
        payment: number;
        isboss: boolean;
        onduty: boolean;
    };
    gang: string;
    inventory: string;
    metadata: string;
    id: number;
}

export interface IProvider {
    children: ReactNode
}

export interface IChildren {
    children: ReactNode
}

export type genderType = 'MALE' | 'FEMALE' | undefined
export type genderIdentityType = 'CISGÊNERO' | 'TRANSGÊNERO' | 'GÊNERO NEUTRO' | 'NÃO-BINÁRIO' | undefined

export interface INewCharSelectForm {
    values: any
    label: string
    gender?: genderType
    setState: Dispatch<SetStateAction<any>>
    state: string | genderIdentityType | undefined
}

export interface INewCharSelect {
    forms: INewCharSelectForm[]
    label: string
    gender: genderType
}

export interface ICard {
    personagem?: any
    children?: ReactNode
    onClick?: () => void

}

export interface ICardContainer extends ICard { }
