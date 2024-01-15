import React from 'react'
import { useAppSelector } from './Store/Hooks/Index'

const Print = () => {
    const count = useAppSelector(state => state.counter)
    return (
        <div>Value is {count}</div>
    )
}

export default Print