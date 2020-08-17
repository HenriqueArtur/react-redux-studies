import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props
    
    return (
        <Card title='Numbers Random' purple>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{parseInt((Math.random() * (max-min) + min))}</strong>
                </span>
            </div>
        </Card>
    )
}