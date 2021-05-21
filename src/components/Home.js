import {useState,useEffect} from 'react'
import axios from 'axios'

import DailyCountTab from './DailyCountTab'
import Table from './Table'
import Search from './Search'

const Home = () => {
    const [countriesData,setCountriesData] = useState([]) 

    useEffect(() => {
        async function getData(){
            const response = await axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
            setCountriesData(response.data)            
        }
        getData();
    }, [])

    return(
        <div className="mx-10 md:mx-80">
            <div className="text-center font-bold text-4xl my-20 text-gray-500">Covid Statistics</div>
            <Search countriesData={countriesData} />
            <DailyCountTab />
            <Table countriesData={countriesData} />
        </div>
    )
}

export default Home