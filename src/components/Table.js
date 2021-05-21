import React, {useEffect, useState} from 'react'

const Table = (props) => {
    const rowHeadings = ['Country', 'Confirmed', 'Active', 'Recovered', 'Deceased', 'Tests']
    const [countriesData, setCountriesData] = useState([]);
    const [nameAsc, setNameAsc] = useState(false)
    const [caseAsc, setCaseAsc] = useState(false)
    const [activeAsc, setActiveAsc] = useState(false)
    const [recoveredAsc, setRecoveredAsc] = useState(false)
    const [deathAsc, setDeathAsc] = useState(false)
    const [testAsc, setTestAsc] = useState(false)

    useEffect(() => {
        setCountriesData(props.countriesData.sort(compareValues('cases', 'desc')))
    }, [props.countriesData])

    function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }
        
            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];
        
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }
    
    const headingClicked = (index) =>{
        if(index===0){
            setNameAsc(!nameAsc)
            if(nameAsc){
                const x = countriesData.sort(compareValues('country', 'asc'))
                setCountriesData([...x])
            }
            else{
                const x = countriesData.sort(compareValues('country', 'desc'))
                setCountriesData([...x])
            }
        }
        if(index===1){
            setCaseAsc(!caseAsc)
            if(caseAsc){
                const x = countriesData.sort(compareValues('cases', 'asc'))
                setCountriesData([...x])
            }
            else{
                const x = countriesData.sort(compareValues('cases', 'desc'))
                setCountriesData([...x])
            }
        }
        if(index===2){
            setActiveAsc(!activeAsc)
            if(activeAsc){
                const x = countriesData.sort(compareValues('active', 'asc'))
                setCountriesData([...x])
            }
            else{
                const x = countriesData.sort(compareValues('active', 'desc'))
                setCountriesData([...x])
            }
        }
        if(index===3){
            setRecoveredAsc(!recoveredAsc)
            if(recoveredAsc){
                const x = countriesData.sort(compareValues('recovered', 'asc'))
                setCountriesData([...x])
            }
            else{
                const x = countriesData.sort(compareValues('recovered', 'desc'))
                setCountriesData([...x])
            }
        }
        if(index===4){
            setDeathAsc(!deathAsc)
            if(deathAsc){
                const x = countriesData.sort(compareValues('deaths', 'asc'))
                setCountriesData([...x])
            }
            else{
                const x = countriesData.sort(compareValues('deaths', 'desc'))
                setCountriesData([...x])
            }
        }
        if(index===5){
            setTestAsc(!testAsc)
            if(testAsc){
                const x = countriesData.sort(compareValues('tests', 'asc'))
                setCountriesData([...x])
            }
            else{
                const x = countriesData.sort(compareValues('tests', 'desc'))
                setCountriesData([...x])
            }
        }
    }

    return(
        <div className="my-28">
            <div className="relative overflow-auto">
                <table className="table">
                    <thead>
                        <tr className="text-center bg-gray-100 text-gray-500 text-normal">
                            {rowHeadings.map((heading, index) => 
                                <th onClick={()=>headingClicked(index)} className="py-4 pl-6 pr-3 h-auto left-0 rounded hover:bg-gray-200 border-white border-r-4 first:sticky first:z-10 first:bg-gray-100 cursor-pointer">{heading}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {countriesData.map((country, index)=>
                            index<50 &&
                            <tr className="bg-gray-50 text-right odd:bg-white text-gray-500 text-md font-medium">
                                <td className="py-2 px-6 text-left border-white border-t-4 border-r-4 sticky z-10 left-0">{country.country}</td>
                                <td className="py-2 pr-3 pl-6 border-white border-t-4 border-r-4">{country.cases}</td>
                                <td className="py-2 pr-3 pl-6 border-white border-t-4 border-r-4">{country.active}</td>
                                <td className="py-2 pr-3 pl-6 border-white border-t-4 border-r-4">{country.recovered}</td>
                                <td className="py-2 pr-3 pl-6 border-white border-t-4 border-r-4">{country.deaths}</td>
                                <td className="py-2 pr-3 pl-6 border-white border-t-4 border-r-4">{country.tests}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )   
}

export default Table