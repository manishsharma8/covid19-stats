import React from 'react'
import DailyCountTab from './DailyCountTab'
import Table from './Table'

const App = () => {
    return (
        <div className="mx-80">
            <div className="text-center font-bold text-4xl my-20 text-gray-500">Covid Statistics</div>
            <DailyCountTab />
            <Table />
        </div>
    )
}

export default App;