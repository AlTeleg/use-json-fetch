import useJsonFetch from "../hooks/useJsonFetch"

const LOADING_URL = 'http://localhost:3030/loading';

const GetLoading: React.FC = ()=> {
    const [data, loading, error] = useJsonFetch(LOADING_URL, { 
        method: "GET",  
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (loading) {
        return <div>Loading...</div>;
      }
    
    else if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
      }
      
    else {
        return <div>Data: {JSON.stringify(data)}</div>;
    }
}

export default GetLoading