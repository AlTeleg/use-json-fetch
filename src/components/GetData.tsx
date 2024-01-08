import useJsonFetch from "../hooks/useJsonFetch"

const DATA_URL = 'http://localhost:3030/data';

const GetData: React.FC = ()=> {
    const [data, loading, error] = useJsonFetch(DATA_URL, {
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

export default GetData