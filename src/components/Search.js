import {useEffect} from 'react'
import Autocomplete from './Autocomplete'

const Search = ({countriesData}) => {
    const countries = []

    useEffect(() => {
        for(let i=0; i<countriesData.length; i++){
            countries.push(countriesData[i].country)
        }
    }, [countriesData])

    return(
        <div className="mb-24">
            <div className="text-center mb-3 text-sm text-gray-400 font-medium">Search By Country</div>
            <div className="mx-auto w-0.5 h-5 bg-gray-100"></div>
            <Autocomplete 
                suggestions={countries}
            />
        </div>
    )
}

export default Search