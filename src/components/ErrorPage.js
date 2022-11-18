import { useRouteError } from "react-router-dom"

export default ErrorPage = () => {
    let error = useRouteError()
    return (
        <>
        <div className="error-page">
            Dang!
        </div>
        </>
    )
}