import {useState} from 'react';
import { Data } from '../Data';

const UseApp = () => {
    const [data, setData] = useState(Data);

    return {
        data,
        setData
    }
}

export default UseApp;