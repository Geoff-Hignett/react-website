useEffect(() => {
    let timer = setTimeout(() => {
      // run logic     
      timer = null;
    }, 3000);
  
  // cleanup the timer when out component unmouts
    return () => clearTimeout(timer);
  }, []);