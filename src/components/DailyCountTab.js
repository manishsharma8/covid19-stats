import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DailyCountTab = () => {
    const [recordedData, setRecordedData] = useState([])
    const [tested, setTested] = useState(0)

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://corona.lmao.ninja/v3/covid-19/all')
            setRecordedData([
                {heading:'Confirmed', total:response.data.cases, color:'red', today: response.data.todayCases},
                {heading:'Active', total:response.data.active, color:'blue'},
                {heading:'Recovered', total:response.data.recovered, color:'green', today: response.data.todayRecovered},
                {heading:'Deceased', total:response.data.deaths, color:'gray', today: response.data.todayDeaths}
            ])
            setTested(response.data.tests)
        }
        fetchData();
    }, [])

    return (
        <div className="mt-10 grid grid-cols-4 gap-2 text-center">
            {recordedData.map((record)=>
                <div className={`bg-${record.color}-100 text-${record.color}-600 py-3 rounded`}>
                    <div className="font-medium text-md">{record.heading}</div>
                    {(record.today) && <div className={`mt-3 text-${record.color}-300 text-md font-semibold`}>+{record.today.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>}
                    <div className={`text-2xl font-semibold ${record.today? "mt-0": "mt-9"}`}>
                        {record.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                </div>
            )}
            <div className="col-start-1 col-end-5">
                <div className="mt-4 p-2 bg-pink-100 text-pink-500 text-md font-semibold rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 mr-1 my-auto inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    {tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Tests Conducted Worldwide
                </div>
            </div>
        </div>
    )
}

export default DailyCountTab