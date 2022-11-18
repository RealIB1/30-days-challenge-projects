import {useEffect, useState} from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data ,setData] = useState([])
    const [country, setCountry] = useState(data[Math.floor(Math.random() * data.length)])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                const country = data[Math.floor(Math.random() * data.length)]
                setData(data)
                setCountry(country)
            } catch (err) {
                console.log(err)
            }
        } 
        fetchData()
    }, [url])
    
    return data
}

export default useFetch