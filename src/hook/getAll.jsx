import { useState , useEffect } from 'react'
import axios from 'axios';

const GetAll = function (url) {

    const [data , setData] = useState()
    const [isFetching , setIsFetching] = useState(true)
    
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response)
            })
            .finally(() => {
                setIsFetching(false)
            })
    }, [])

    return { data , isFetching }
}


export {GetAll}