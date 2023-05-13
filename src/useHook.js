import { useEffect } from "react"

const useTitle = t => {
    useEffect(() => {
        document.title = t
    }, [])
}


export { useTitle }