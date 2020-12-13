import React, {useState, useEffect} from 'react'
import axios from 'axios';


const Symbol = (address) => {
    const [logo, setLogo] = useState();
    const [error, setError] = useState(false);
    const handleFetch = ({address}) =>{
        
        if(address){
            axios({
                method: 'GET',
                url: `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`,
                responseType: 'arraybuffer'
            }).then(res => {
                if(res.data.Error){
                    throw new Error(res.data.Error);
                }
                let blob = new Blob(
                    [res.data],
                    {type: res.headers['content-type']}
                )
                let image = URL.createObjectURL(blob);
                setLogo(image);
            }).catch(e => {
                setError(true);
            });
        }

    }

        useEffect(() => {
                handleFetch(address);
        },[]);
        return (
            <>
                 {!error && <img src={logo} style={{ width: 20, height: 20, maxWidth: '100%', maxHeight: '100%', textAlign: 'center'}}/>}
                </>
          );
}

export default Symbol;
