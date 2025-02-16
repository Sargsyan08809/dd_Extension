import React, { useEffect } from 'react';
import { BoltSlashIcon, BoltIcon} from '@heroicons/react/20/solid';
import axios from 'axios';
import { TabData } from '../types/types';


const REACT_APP_SERVER_URL = 'https://cryptohelmnode-3npc2uvlhq-no.a.run.app';

function Header(pageProps :TabData){

  // const [serverLive, setServerLive] = React.useState<boolean>(false);

  // useEffect(() => {
  //   async function livenessCheck() {
  //     const res = await axios.get(`${REACT_APP_SERVER_URL}/ping`);
  //     console.log(res);
  //     if (res.data === 'Server is running') {
  //       setServerLive(true);
  //     }
  //   }
  //   livenessCheck();
  // },[]);

  return(
    <div className="h-[60px] grid grid-cols-4 gap-8 rounded-sm">
      <div className="text-xs col-span-3 flex">
        <img src={pageProps.favIconUrl} className="h-6 w-6 ml-3 mt-1"/> 
        <span className="font-bold ml-1 mt-2 text-blue-300">{pageProps.url} </span>
      </div>
    </div>
  );
}

export default Header;