import React, {useState, useEffect} from 'react';

const useFetch = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(response => {
                    if(!response.ok) {
                        throw Error("could not fetch the data for that resource");
                    }
                    return response.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 2000);
    }, []);

}

export default useFetch;