import SelectionTemplate from '../../templates/selectionTemplate'
import photoCards from '../../../data/photoCards'
import { getBreeds } from '../../../services/breeds'
import { useEffect } from 'react';

export default function HomePage() {

    useEffect(() => {
        _onGetCats();
    })

    async function _onGetCats(){ 
        var responseModel = await getBreeds();
    }

    return (
        <SelectionTemplate photoCards={photoCards}></SelectionTemplate>
    )
}