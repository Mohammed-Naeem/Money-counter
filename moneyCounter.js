 



document.getElementById('calculate').addEventListener('click', function(){
     //food
  const foodText = document.getElementById('food').value;
  const food = parseInt(foodText);
  console.log(food);
  
  //rent
  const rentText = document.getElementById('rent').value;
  const rent = parseInt(rentText);
  console.log(rent);

  //colthes
  const colthesText = document.getElementById('clothes').value;
  const clothes = parseInt(colthesText);
  console.log(clothes);

  //income
  const incomeText = document.getElementById('income').value;
    const income = parseInt(incomeText);
    console.log(income);

    //food+rent+clothes
    const expences = food + rent + clothes;
    console.log(expences);
    
    const TotalExpences = document.getElementById('total-expences');
    TotalExpences.innerText = expences;

    const balance = income - expences;
    console.log(balance);

    const totalBalance = document.getElementById('balance');
    totalBalance.innerText = balance;

   
        if(expences < income){
            console.log('ok, tumar budjet thik thaak!');
            return ;
        }
        else{
            console.log('budget baraite hbe')
            return ;
        }

        
  
    
})

