import { useNavigate } from "react-router-dom"

export default function AboutPage(){

    const navigate = useNavigate();

    return(
        <>
        <h1>About</h1>
        <button onClick={() => navigate("/")}>Go home</button>
        </>
    );
}