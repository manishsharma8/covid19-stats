import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import DailyCountTab from './DailyCountTab'

const Country = (props) => {
    const country = props.match.params.id;
    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        async function fetchCountry(){
            const response = await axios.get("https://corona.lmao.ninja/v3/covid-19/countries/" + country)
            setCountryData(response.data)
        }
        fetchCountry()
    }, [country])

    const getTime = () => {
        var date = moment(countryData.updated).format('lll')
        return (
            <div>
                <div className="mt-3 bg-yellow-100 text-yellow-600 inline-block px-3 py-1 rounded">Last updated on {date}</div>
            </div>
        )
    }

    return(
        <div className="mx-10 my-20 md:mx-80">
            {/* <div> */}
            <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-5 text-gray-600 hover:opacity-40 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
            </Link>
            {/* </div> */}
            <div className="inline-block bg-purple-100 text-purple-600 px-3 py-2 text-2xl font-semibold rounded">{country}</div>
            {getTime()}
            <DailyCountTab data={countryData} />
        </div>
    )
}

export default Country;