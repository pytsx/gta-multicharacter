import React, { useState } from "react"
import { IProvider, Character } from "../Types"

const personagensAPI = [
    {
        "citizenid": "1",
        "position": "{\"x\":-812.2417602539063,\"y\":182.53187561035157,\"z\":76.7288818359375}",
        "license": "license:4587864ac5b0a756f7ffe96b5d9c0f419946f520",
        "cid": 1,
        "last_updated": 1680885307000.0,
        "money": {
            "cash": 998159,
            "crypto": 0,
            "bank": 17763
        },
        "charinfo": {
            "phone": "1205923595",
            "firstname": "decibel",
            "lastname": "dev",
            "backstory": "placeholder backstory",
            "cid": 1,
            "birthdate": "2023-03-25",
            "nationality": "Brazil",
            "gender": 1,
            "account": "US09QBCore9385462065"
        },
        "name": "Vitor",
        "job": {
            "label": "Imobiliária",
            "type": "none",
            "name": "imobiliaria",
            "grade": {
                "name": "Corretor",
                "level": 3
            },
            "payment": 125,
            "isboss": false,
            "onduty": true
        },
        "gang": "{\"label\":\"Sem Gangue\",\"grade\":{\"level\":0,\"name\":\"Não filiado\"},\"isboss\":false,\"name\":\"nenhuma\"}",
        "inventory": "[{\"name\":\"WEAPON_PETROLCAN\",\"slot\":1,\"metadata\":{\"durability\":100,\"components\":[],\"ammo\":100},\"count\":1},{\"name\":\"money\",\"slot\":2,\"count\":998159},{\"name\":\"phone\",\"slot\":3,\"count\":1},{\"name\":\"driver_license\",\"slot\":4,\"metadata\":{\"type\":\"Class C Driver License\",\"firstname\":\"decibel\",\"birthdate\":\"2023-03-25\",\"lastname\":\"dev\"},\"count\":1},{\"name\":\"id_card\",\"slot\":5,\"metadata\":{\"firstname\":\"decibel\",\"nationality\":\"Brazil\",\"gender\":1,\"lastname\":\"dev\",\"citizenid\":1,\"birthdate\":\"2023-03-25\"},\"count\":1}]",
        "metadata": "{\"hunger\":0,\"armor\":0,\"attachmentcraftingrep\":0,\"jailitems\":[],\"craftingrep\":0,\"inside\":{\"apartment\":[]},\"status\":[],\"fingerprint\":\"yK180o01ctS1564\",\"ishandcuffed\":false,\"callsign\":\"NO CALLSIGN\",\"tracker\":false,\"phonedata\":{\"InstalledApps\":[],\"SerialNumber\":32865214},\"phone\":[],\"isdead\":false,\"walletid\":\"QB-12851439\",\"currentapartment\":\"apartment33215\",\"inlaststand\":false,\"criminalrecord\":{\"hasRecord\":false},\"injail\":0,\"stress\":0,\"bloodtype\":\"B+\",\"thirst\":0,\"dealerrep\":0,\"commandbinds\":[],\"jobrep\":{\"tow\":0,\"hotdog\":0,\"taxi\":0,\"trucker\":0},\"licences\":{\"weapon\":false,\"driver\":true,\"business\":false},\"fitbit\":[]}",
        "id": 1
    },
    {
        "citizenid": "2",
        "position": "{\"x\":-1034.927490234375,\"y\":-2730.263671875,\"z\":13.744384765625}",
        "license": "license:4587864ac5b0a756f7ffe96b5d9c0f419946f520",
        "cid": 2,
        "last_updated": 1680886728000.0,
        "money": {
            "cash": 500,
            "crypto": 0,
            "bank": 5000
        },
        "charinfo": {
            "phone": "7898971636",
            "firstname": "ddd",
            "lastname": "ccc",
            "backstory": "placeholder backstory",
            "cid": 2,
            "birthdate": "2023-04-07",
            "nationality": "Afghanistan",
            "gender": 0,
            "account": "US02QBCore7278901248"
        },
        "name": "Vitor",
        "job": {
            "label": "Desempregado",
            "type": "civil",
            "name": "desempregado",
            "grade": {
                "name": "Freelancer",
                "level": 0
            },
            "payment": 10,
            "isboss": false,
            "onduty": true
        },
        "gang": "{\"grade\":{\"name\":\"Não filiado\",\"level\":0},\"isboss\":false,\"name\":\"nenhuma\",\"label\":\"Sem Gangue\"}",
        "inventory": "[{\"name\":\"money\",\"slot\":1,\"count\":500},{\"name\":\"driver_license\",\"metadata\":{\"birthdate\":\"2023-04-07\",\"lastname\":\"ccc\",\"firstname\":\"ddd\",\"type\":\"Class C Driver License\"},\"slot\":2,\"count\":1},{\"name\":\"id_card\",\"metadata\":{\"nationality\":\"Afghanistan\",\"lastname\":\"ccc\",\"citizenid\":2,\"birthdate\":\"2023-04-07\",\"gender\":0,\"firstname\":\"ddd\"},\"slot\":3,\"count\":1},{\"name\":\"phone\",\"slot\":4,\"count\":1}]",
        "metadata": "{\"jobrep\":{\"hotdog\":0,\"trucker\":0,\"taxi\":0,\"tow\":0},\"commandbinds\":[],\"fingerprint\":\"Ox301N54inX6160\",\"hunger\":91.6,\"tracker\":false,\"licences\":{\"driver\":true,\"business\":false,\"weapon\":false},\"inside\":{\"apartment\":[]},\"fitbit\":[],\"armor\":0,\"bloodtype\":\"O-\",\"attachmentcraftingrep\":0,\"inlaststand\":false,\"dealerrep\":0,\"walletid\":\"QB-30142713\",\"status\":[],\"ishandcuffed\":false,\"injail\":0,\"phone\":[],\"callsign\":\"NO CALLSIGN\",\"phonedata\":{\"InstalledApps\":[],\"SerialNumber\":49551236},\"jailitems\":[],\"stress\":0,\"craftingrep\":0,\"criminalrecord\":{\"hasRecord\":false},\"isdead\":false,\"thirst\":92.4}",
        "id": 426
    }
]

const PersonagensAPIContext = React.createContext({
    personagens: [],
    addPersonagem: false,
    handleAddPersonagem: () => { },
    post: (newPersonagem: any) => { }
})

export const usePersonagensAPI = () => React.useContext(PersonagensAPIContext)

export const PersonagensAPIProvider = ({ children }: IProvider) => {
    const [personagens, setpersonagens] = React.useState<any>(personagensAPI)
    const [addPersonagem, setOpenPersonagem] = useState(personagens.length > 0 ? false : true)

    const handleAddPersonagem = () => {
        setOpenPersonagem(prev => !prev)
    }

    React.useEffect(() => {
        try {
            fetch("http://qd-multicharacter/setupPersonagens")
                .then((response) => response.json())
                .then((data) => setpersonagens(data));
        } catch (error) {
            console.log(error);

        }

    }, []);

    const post = (newPersonagem: any) => {
        console.log(newPersonagem);
        try {
            fetch("http://qd-multicharacter/", {
                method: "POST",
                body: JSON.stringify(newPersonagem),
            })
                .then((response) => response.json())
                .then((data) => {
                    let newPersonagens = personagens.concat(data);
                    setpersonagens(newPersonagens);
                });
        } catch (error) {
            console.log(error);
        }


    };

    return (
        <PersonagensAPIContext.Provider value={{ personagens, addPersonagem, handleAddPersonagem, post }}>
            {children}
        </PersonagensAPIContext.Provider>
    )
}
