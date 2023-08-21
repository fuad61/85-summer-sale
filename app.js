function KitchenWareOne(){
    const KitName = document.getElementById("kit");
    const selectedKit = KitName.innerText;
    const NewListKitName = document.createElement('li');
    NewListKitName.innerText = selectedKit;

   
  const KitField = document.getElementById('list');
  KitField.appendChild(NewListKitName);



  

  const Price = document.getElementById("kitPrice");
  const numberKitPrice = parseFloat(Price.innerText)


  const TotalPrice = document.getElementById('totalPrice')
  const numberTotalPrice = parseFloat(TotalPrice.innerText);

  const Discount = document.getElementById('discount');
  const numberDiscount = parseFloat(Discount);

  const Total = document.getElementById('total');
  const numberTotal = parseFloat(Total);



  const finalTotalPrice = numberKitPrice + numberTotalPrice;





  // const mainDiscount = ((20/100) * finalTotalPrice).toFixed(2);

  // const finalTotal = finalTotalPrice - mainDiscount;

  TotalPrice.innerText = finalTotalPrice;
  // Discount.innerText = mainDiscount;
  Total.innerText = finalTotalPrice;
  const couponBut = document.getElementById("couponBut")

  if(finalTotalPrice >= 200 ){

    couponBut.disabled = false;

  }

  const PurchaseBut = document.getElementById('PurchaseButton')

  if(finalTotalPrice >= 1.00 ){

    PurchaseBut.disabled = false;

  }

}


function KitchenWareTwo(){
    const KitName = document.getElementById("kit_2");
    const KitPrice = document.getElementById("kitPrice_2");

    const selectedKit = KitName.innerText;
    const NewListKitName = document.createElement('li');
    NewListKitName.innerText = selectedKit;

   
  const KitField = document.getElementById('list');
  KitField.appendChild(NewListKitName);



  const Price = document.getElementById("kitPrice_2");
  const numberKitPrice = parseFloat(Price.innerText)


  const TotalPrice = document.getElementById('totalPrice')
  const numberTotalPrice = parseFloat(TotalPrice.innerText);

  const Discount = document.getElementById('discount');
  const numberDiscount = parseFloat(Discount);

  const Total = document.getElementById('total');
  const numberTotal = parseFloat(Total);



  const finalTotalPrice = numberKitPrice + numberTotalPrice;





  // const mainDiscount = ((20/100) * finalTotalPrice).toFixed(2);

  // const finalTotal = finalTotalPrice - mainDiscount;

  TotalPrice.innerText = finalTotalPrice;
  // Discount.innerText = mainDiscount;
  Total.innerText = finalTotalPrice;

  const couponBut = document.getElementById("couponBut")

  if(finalTotalPrice >= 200 ){

    couponBut.disabled = false;

  }


  const PurchaseBut = document.getElementById('PurchaseButton')

  if(finalTotalPrice >= 1.00 ){

    PurchaseBut.disabled = false;

  }


}

function KitchenWareThree(){
    const KitName = document.getElementById("kit_3");
    const KitPrice = document.getElementById("kitPrice_3");

    const selectedKit = KitName.innerText;
    const NewListKitName = document.createElement('li');
    NewListKitName.innerText = selectedKit;

   
  const KitField = document.getElementById('list');
  KitField.appendChild(NewListKitName);



  const Price = document.getElementById("kitPrice_3");
  const numberKitPrice = parseFloat(Price.innerText)


  const TotalPrice = document.getElementById('totalPrice')
  const numberTotalPrice = parseFloat(TotalPrice.innerText);

  const Discount = document.getElementById('discount');
  const numberDiscount = parseFloat(Discount);

  const Total = document.getElementById('total');
  const numberTotal = parseFloat(Total);



  const finalTotalPrice = numberKitPrice + numberTotalPrice;





  // const mainDiscount = ((20/100) * finalTotalPrice).toFixed(2);

  // const finalTotal = finalTotalPrice - mainDiscount;

  TotalPrice.innerText = finalTotalPrice;
  // Discount.innerText = mainDiscount;
  Total.innerText = finalTotalPrice;

  const couponBut = document.getElementById("couponBut")

  if(finalTotalPrice >= 200 ){

    couponBut.disabled = false;

  }

  const PurchaseBut = document.getElementById('PurchaseButton')

  if(finalTotalPrice >= 1.00 ){

    PurchaseBut.disabled = false;

  }

}


function sportsWareOne(){
    const KitName = document.getElementById("sports");

    const selectedKit = KitName.innerText;
    const NewListKitName = document.createElement('li');
    NewListKitName.innerText = selectedKit;

   
  const KitField = document.getElementById('list');
  KitField.appendChild(NewListKitName);



  const Price = document.getElementById("sportsPrice");
  const numberKitPrice = parseFloat(Price.innerText)


  const TotalPrice = document.getElementById('totalPrice')
  const numberTotalPrice = parseFloat(TotalPrice.innerText);

  const Discount = document.getElementById('discount');
  const numberDiscount = parseFloat(Discount);

  const Total = document.getElementById('total');
  const numberTotal = parseFloat(Total);



  const finalTotalPrice = numberKitPrice + numberTotalPrice;





  // const mainDiscount = ((20/100) * finalTotalPrice).toFixed(2);

  // const finalTotal = finalTotalPrice - mainDiscount;

  TotalPrice.innerText = finalTotalPrice;
  // Discount.innerText = mainDiscount;
  Total.innerText = finalTotalPrice;

  const couponBut = document.getElementById("couponBut")

  if(finalTotalPrice >= 200 ){

    couponBut.disabled = false;

  }

  const PurchaseBut = document.getElementById('PurchaseButton')

  if(finalTotalPrice >= 1.00 ){

    PurchaseBut.disabled = false;

  }

}


function sportsWareTwo(){
    const KitName = document.getElementById("sports_2");

    const selectedKit = KitName.innerText;
    const NewListKitName = document.createElement('li');
    NewListKitName.innerText = selectedKit;

   
  const KitField = document.getElementById('list');
  KitField.appendChild(NewListKitName);



  const Price = document.getElementById("sportsPrice_2");
  const numberKitPrice = parseFloat(Price.innerText)


  const TotalPrice = document.getElementById('totalPrice')
  const numberTotalPrice = parseFloat(TotalPrice.innerText);

  const Discount = document.getElementById('discount');
  const numberDiscount = parseFloat(Discount);

  const Total = document.getElementById('total');
  const numberTotal = parseFloat(Total);



  const finalTotalPrice = numberKitPrice + numberTotalPrice;





  // const mainDiscount = ((20/100) * finalTotalPrice).toFixed(2);

  // const finalTotal = finalTotalPrice - mainDiscount;

  TotalPrice.innerText = finalTotalPrice;
  // Discount.innerText = mainDiscount;
  Total.innerText = finalTotalPrice;

  const couponBut = document.getElementById("couponBut")

  if(finalTotalPrice >= 200 ){

    couponBut.disabled = false;

  }

  const PurchaseBut = document.getElementById('PurchaseButton')

  if(finalTotalPrice >= 1.00 ){

    PurchaseBut.disabled = false;

  }


}

function sportsWareThree(){
    const KitName = document.getElementById("sports_3");

    const selectedKit = KitName.innerText;
    const NewListKitName = document.createElement('li');
    NewListKitName.innerText = selectedKit;

   
  const KitField = document.getElementById('list');
  KitField.appendChild(NewListKitName);


  const Price = document.getElementById("sportsPrice_3");
  const numberKitPrice = parseFloat(Price.innerText)


  const TotalPrice = document.getElementById('totalPrice')
  const numberTotalPrice = parseFloat(TotalPrice.innerText);

  const Discount = document.getElementById('discount');
  const numberDiscount = parseFloat(Discount);

  const Total = document.getElementById('total');
  const numberTotal = parseFloat(Total);



  const finalTotalPrice = numberKitPrice + numberTotalPrice;





  // const mainDiscount = ((20/100) * finalTotalPrice).toFixed(2);

  // const finalTotal = finalTotalPrice - mainDiscount;

  TotalPrice.innerText = finalTotalPrice;
  // Discount.innerText = mainDiscount;
  Total.innerText = finalTotalPrice;


  const couponBut = document.getElementById("couponBut")

  if(finalTotalPrice >= 200 ){

    couponBut.disabled = false;

  }

  const PurchaseBut = document.getElementById('PurchaseButton')

  if(finalTotalPrice >= 1.00 ){

    PurchaseBut.disabled = false;

  }

}


function applyCoupon(){
  const coupon = document.getElementById("coupon")
  const couponData = coupon.value;
  

  const TotalPrice = document.getElementById('totalPrice')
  const numberTotalPrice = parseFloat(TotalPrice.innerText);

  const Discount = document.getElementById('discount');
  const numberDiscount = parseFloat(Discount);

  const Total = document.getElementById('total');
  const numberTotal = parseFloat(Total);

  const couponBut = document.getElementById("couponBut")



  const finalTotalPrice = numberTotalPrice;

  if(finalTotalPrice >= 200 && couponData == "SALl200"){
    

    const mainDiscount = ((20/100) * finalTotalPrice).toFixed(2);
    const finalTotal = finalTotalPrice - mainDiscount;

    TotalPrice.innerText = finalTotalPrice;
    Discount.innerText = mainDiscount;
    Total.innerText = finalTotal;
    coupon.value = " ";
    couponBut.disabled = true;
  }
  else{
    
    alert("Purchase 200 Tk or More And Apply Coupon");
  }




  console.log(couponData);
}
