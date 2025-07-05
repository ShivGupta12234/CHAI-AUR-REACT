import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("Fetched rates:", res.rates);
        setData(res.rates)
    })  
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
