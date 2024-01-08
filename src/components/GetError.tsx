import useJsonFetch from "../hooks/useJsonFetch"

const ERROR_URL = 'http://localhost:3030/error';

const GetError: React.FC = ()=> {
    const [data, loading, error] = useJsonFetch(ERROR_URL, {      
        method: "GET",  
        headers: {
            "Content-Type": "application/json",
        },  
    });
    
    if (loading) {
        return <div>Loading...</div>;
      }
    
    if (error!= null) {
        return <div>Error: {error.toString()}</div>;
    }
    else {
        return <div>Data: {JSON.stringify(data)}</div>;
    }

}

export default GetError