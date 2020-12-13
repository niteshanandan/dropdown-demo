import React, {useState, useEffect} from 'react';
import Symbol from './Symbol';
import Select from 'react-select';


const Dropdown = () => {


    const tokens = [
        { address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", symbol: "USDC" },
        { address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", symbol: "DAI" }
      ];
    
    const[dropdownList, setDropdownList] = useState([]);

    const formatLabel = (token) => {
        return(
            <div style={{display: "flex"}}>
                <div style={{marginRight: "10px"}}>
                    {/* {token.symbol} */}
                    <Symbol address={token.address} />
                </div>
                <div>
                    {token.address}
                </div>
                

            </div>
        )
    }

    useEffect(async () => {
        setDropdownList(tokens);
    }, []);
    return(
      <Select id="first-choice" formatOptionLabel={formatLabel} options={dropdownList}/>
    )
  }

  export default Dropdown;