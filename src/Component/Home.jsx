import { useEffect, useState } from "react";
import swal from 'sweetalert';
import Card from "./Card";
import Cart from "./Cart";
const Home = () => {

  const [data, setData] = useState([]);
  const [selectPlayer, setSelectPlayer] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0)
  const [remaining,setRemaining] = useState(500)

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

 
  const selectPlayerHandler = (info) => {
    const newSelect = [...selectPlayer, info];
    const isExist = selectPlayer.find(item => item.id == info.id)
    if(isExist){
        return swal({
            text:"Already Purchased",
            icon: "error",
            button: "Okay",
          });
    }
    else{
        const valueString = info.marketValue
        const valuInt = parseInt(valueString.replace(/\D+/g, ''))
        const spent = valuInt
        const newTotalSpent = totalSpent+ spent
        
        if (newTotalSpent > 500) {
            return swal({
                text:"You Don't Have Enough money",
                icon: "error",
                button: "Okay",
              });
        }
        setTotalSpent(newTotalSpent)
        const newRemaining = 500 - newTotalSpent
        setRemaining(newRemaining)
        setSelectPlayer(newSelect);
        swal({
            text:"SucessFully Purchased",
            icon: "success",
            button: "Aww Yess!",
          });
    }
   
  };

  return (
    <div>
      <div className="lg:flex lg:justify-between mx-auto max-w-screen-xl my-20">
        <div className="grid md:grid-cols-2 mx-auto lg:grid-cols-3 w-3/4 gap-5">
          {data.map((info) => (
            <Card
              key={info.id}
              selectPlayerHandler={selectPlayerHandler}
              info={info}
            />
          ))}
        </div>
        <Cart selectPlayer={selectPlayer} totalSpent={totalSpent} remaining={remaining}/>
      </div>
    </div>
  );
};

export default Home;
