import React, {useEffect, useState} from 'react';
import { FaAnglesUp } from "react-icons/fa6";

const BotonScrollTop = () => {
    const [showScrollTopButton, setShowScrollTopButton]=useState(false);

    useEffect (()=>{
        window.addEventListener('scroll', () =>{
            if(window.screenY>300){
                setShowScrollTopButton(true)
            }else{
                setShowScrollTopButton(false)
            }
        });
    },[]);

    const scrollTop = ()=>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    return (
    <div>
        {showScrollTopButton && (
        <FaAnglesUp 
            className="top-btn-position top-btn-style"
            onClick={scrollTop}
        />
        )}
    </div>
  );
};

export default BotonScrollTop
