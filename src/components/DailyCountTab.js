import React, {useState, useEffect} from 'react'

const DailyCountTab = (props) => {
    const [recordedData, setRecordedData] = useState([])
    const [tested, setTested] = useState(0)
    const [show, setShow] = useState(false)

    useEffect(() => {
        if(props.data){
            setRecordedData([
                {heading:'Confirmed', total:props.data.cases, bgColor:'bg-red-100', textColor:'text-red-600', pColor:'text-red-300', today: props.data.todayCases},
                {heading:'Active', total:props.data.active, bgColor:'bg-blue-100', textColor:'text-blue-600', pColor:'text-blue-300'},
                {heading:'Recovered', total:props.data.recovered, bgColor:'bg-green-100', textColor:'text-green-600', pColor:'text-green-300', today: props.data.todayRecovered},
                {heading:'Deceased', total:props.data.deaths, bgColor:'bg-gray-100', textColor:'text-gray-600', pColor:'text-gray-300', today: props.data.todayDeaths}
            ])
            setTested(props.data.tests)
            if(props.data.cases!==undefined){
                setShow(true)
            }
        }
    }, [props])

    return(
        <div>
            {show &&
                <div className="mt-10 md:grid md:grid-cols-4 gap-2 text-center">
                    {recordedData.map((record)=>
                        <div className={`${record.bgColor} ${record.textColor} mx-auto w-56 md:w-full mt-3 py-3 rounded`}>
                            <div className="font-medium text-md">{record.heading}</div>
                            {/* {record.today===0?  */}
                            {(typeof record.today==="number") && <div className={`mt-3 ${record.pColor} text-md font-semibold`}>+{record.today.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>}
                            <div className={`text-2xl font-semibold ${typeof record.today==="number"? "mt-0": "mt-9"}`}>
                                {record.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                        </div>
                    )}
                    <div className="md:col-start-1 md:col-end-5 w-56 md:w-full mx-auto">
                        <div className="mt-4 p-2 bg-pink-100 text-pink-500 text-md font-semibold rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 mr-1 my-auto inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            {tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Tests Conducted Worldwide
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DailyCountTab