import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useAxios = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');


    const fetchData = () => {
        axios.get(url)
            .then((res) => {
                setResponse(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                setError(err);
            })
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { response, error};
};

export default useAxios;
