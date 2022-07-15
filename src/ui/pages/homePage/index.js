import SelectionTemplate from '../../templates/selectionTemplate'
// import photoCards from '../../../data/photoCards'
import { getBreeds } from '../../../services/breeds'
import { useEffect } from 'react';

export default function HomePage() {

    useEffect(() => {
        _onGetCats();
    })

    const photoCards = [
        { age: "1", name:"abrosio", breed: "gato", photo: require('../../../assets/1.jpg') },
        { age: "2", name:"abrosio", breed: "gato", photo: require('../../../assets/1.jpg') },
        { age: "3", name:"abrosio", breed: "gato", photo: require('../../../assets/1.jpg') },
        { age: "4", name:"abrosio", breed: "gato", photo: require('../../../assets/1.jpg') },
        { age: "5", name:"abrosio", breed: "gato", photo: require('../../../assets/1.jpg') },
    ]


    async function _onGetCats() {
        var responseModel = await getBreeds();
    }

    return (
        <SelectionTemplate photoCards={photoCards}></SelectionTemplate>
    )
}