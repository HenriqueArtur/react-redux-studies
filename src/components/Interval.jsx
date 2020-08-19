import './Interval.css'
import React from 'react'
import Card from './Card'

export default props => {
    return (
        <Card title='Numbers Interval' red>
            <div className="Interval">
                <span>
                    <strong>Min:</strong>
                    <input
                        type="number"
                        value={1}/>
                </span>
                <span>
                    <strong>Max:</strong>
                    <input
                        type="number"
                        value={12}/>
                </span>
            </div>
        </Card>
    )
}