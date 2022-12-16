import React from 'react'
export const columns=[
    {
       Header:'date',
        accessor:'date'
    },
    {
        Header:'App Id',
        accessor:'app_id'
    },
    {
        Header:'Ad Requests',
        accessor:'requests'
    },
    {
        Header:'Ad Responses',
        accessor:'responses'
    },
    {
        Header:'Impression',
        accessor:'impression'
    },
    {
        Header:'Clicks',
        accessor:'clicks'
    },
    {
        Header:'Revenue',
        accessor:'revenue'
    }
]
const columns = () => {
  return (
    <div>columns</div>
  )
}

export default columns