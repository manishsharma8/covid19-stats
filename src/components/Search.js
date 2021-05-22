import {useEffect} from 'react'
import Autocomplete from './Autocomplete'
import history from '../history'

const Search = ({countriesData}) => {
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const countries = []

    useEffect(() => {
        for(let i=0; i<countriesData.length; i++){
            countries.push(countriesData[i].country)
        }
    }, [countriesData, countries])

    const onSubmit=(value)=>{
        console.log("Clicked",value)
        history.push(`/country/${value}`)
    }

    return(
        <div className="mb-24">
            <div className="text-center mb-3 text-sm text-gray-400 font-medium">Search By Country</div>
            <div className="mx-auto w-0.5 h-5 bg-gray-100"></div>
            <Autocomplete 
                suggestions={countries}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default Search