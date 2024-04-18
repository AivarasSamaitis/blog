import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isKraunasi, setKraunasi] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Nepavyko paimti duomenų.')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setKraunasi(false)
                setError(null)
            })
            .catch(err => {
                setKraunasi(false)
                setError(err.message)
            })
    }, [url])

    return {data, isKraunasi, error}
}

export default useFetch
