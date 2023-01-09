import axios from 'axios';
import React, { useState, useEffect } from 'react';


const useAxios = (url) => {
    const [data, setState] = useState([])
    const makeAPIcall = async (name = "") => {
        const res = await axios.get(url + name)
        setState([...data, res.data])
    }
    const clearCards = () => {
        setState([])
    }

    return [data, makeAPIcall, clearCards]
}
export default useAxios