// Step 01. Create A Function And Make The Funcionality Into This Function
function calculateMacPrice(macMemorySelect, macDeliverySelect) {
    // Step 02. Get Query For Update Total Price 
    //Memory And Price Event 
     let memoryPrice = document.getElementById("memoryPrice");//Get The Memory Price Tag
     // let memoryPriceValue = parseInt(memoryPrice.innerText);//Get The Memory Price Tag Value
 
 
 
 
     // Step 03. Check The Clicked Button Using If ELse Statements
     if (macMemorySelect == true) {
 
     memoryPrice.innerText = 180;//Set The Memory Price
 
     //Update Total Price
     finalTotalPrice();
 
     }else {
 
     memoryPrice.innerText = 0;//Set The Memory Price
 
     //Update Total Price Again
     finalTotalPrice();
     }
 
 }
 
 function calculateMacPrice2(macStorageSelect) {
 
    //Let's Get Storage Price Tag
    let storagePriceTag = document.getElementById("storagePrice");
    // let storagePriceTagValue = storagePriceTag.innerText;//Get Storage Price TAg Value
 
 
 
    //Check The Mac Storage Selection
    if (macStorageSelect == true) {
    storagePriceTag.innerText = 180;//Set The More Extend Storage Price
 
     //Update Total Price
     finalTotalPrice();
 
    }else if(macStorageSelect == false){
    storagePriceTag.innerText = 100;//Set The Extend Storage Price
 
     //Update Total Price
     finalTotalPrice();
    }else{
    storagePriceTag.innerText = 0;//Set The Default Storage Price
 
     //Update Total Price
     finalTotalPrice();
    }
 }
 
 function calculateMacPrice3(macDeliverySelect) {
 
 //Let's Get Storage Price Tag
    let deliveryPriceTag = document.getElementById("deliveryPrice");
    // let storagePriceTagValue = storagePriceTag.innerText;//Get Storage Price TAg Value
 
  if(macDeliverySelect == true){
 
     deliveryPriceTag.innerText = 20;//Set The Memory Price
 
     //Update Total Price Again
     finalTotalPrice();
 
     }else{
      deliveryPriceTag.innerText = 0;//Set The Memory Price
 
     //Update Total Price Again
     finalTotalPrice();
     }
 }
 
 
 //Step 04. Get The All Button And Apply And Handle Event Listener
 
 // Step 04.1 Get Extend Memory Button And Apply Event Listener 
 let extendMemoryButton = document.getElementById("extendMemory");//Get The Extra Memory Button
 
 //Apply Event Listener On This Button
 
 extendMemoryButton.addEventListener('click', function(){
     calculateMacPrice(true);
 });
 
 
 // Step 04.2 Default Memory And Price Event
 let defaultMemoryButton = document.getElementById("defaultMemory");//Get The Default Memory Button
 
 //Apply Event Listener On This Button
 defaultMemoryButton.addEventListener('click', function(){
     calculateMacPrice(false);
 });
 
 
 
 // Step 04.3 Extend More Storage Button Event Apply And Handle
 let extendMoreStorageBtn = document.getElementById("extendMoreStorage");//Get The Extend More Storage Button
 
 //Apply Event Listener On This Button
 
 extendMoreStorageBtn.addEventListener('click', function(){
     calculateMacPrice2(true);
 });
 
 
 // Step 04.4 Extend Storage Button Event Apply And Handle
 let extendStorageBtn = document.getElementById("extendStorage");//Get The Extend Storage Button
 
 //Apply Event Listener On This Button
 
 extendStorageBtn.addEventListener('click', function(){
     calculateMacPrice2(false);
 });
 
 // Step 04.5 Default Storage Button Event Apply And Handle
 let defaultStorageBtn = document.getElementById("defaultStorage");//Get The Default Storage Button
 
 //Apply Event Listener On This Button
 
 defaultStorageBtn.addEventListener('click', function(){
     calculateMacPrice2();
 });
 
 
 // Step 04.6 Delivery Charge Button Event Apply And Handle
 let paidDeliveryBtn = document.getElementById("paidDelivery");//Get The Delivery Charge Button
 
 //Apply Event Listener On This Button
 
 paidDeliveryBtn.addEventListener('click', function(){
     calculateMacPrice3(true);
 });
 
 // Step 04.7 Delivery Free Button Event Apply And Handle
 let defaultDeliveryBtn = document.getElementById("defaultDelivery");//Get The Delivery Free Button
 
 //Apply Event Listener On This Button
 
 defaultDeliveryBtn.addEventListener('click', function(){
     calculateMacPrice3(false);
 });
 
 
 
 
 
 // Step 05. Let's Take The Value Of All Total Prices Tag And Add Make Them SubTotal Value
 function finalTotalPrice(){
 
     let besttotal = document.getElementById("subtotalPrice").innerText;
     let memoryPrice = document.getElementById("memoryPrice").innerText;
     let storagePrice = document.getElementById("storagePrice").innerText;
     let deliveryPrice = document.getElementById("deliveryPrice").innerText;
 
     let convtTotalPrice = (parseInt(besttotal) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice));//Convert All Of Prices From String To Intiger
 
     let subtotalPrice = document.getElementById("totalPrice");//Get The SubTotal Price Tag
     subtotalPrice.innerText = convtTotalPrice;//Set Sub Total Price
 

    //Let's Make Bonus Part For Getting Bonus Marks
 
 
     //***********Dynamic Grand Total In Footer************

      //Get The Grand Total Tag

      let grandTotalPrice = document.getElementById("grandTotalPrice");
 
      grandTotalPrice.innerText = subtotalPrice.innerText;//Set The Grand Total Price Of The MAC 
 
 }
 
 
 
 
 // Let's Get Discount 20% Using The Promo Code

 
 
  // Let's Apply Event Listener On The Promo Code Apply Button

  let promoCodeApplyBtn = document.getElementById("applyPromoCodeBtn");
  promoCodeApplyBtn.addEventListener("click", function(){
 
  // Let's Take The Peomo Code 
 
  let promoCode = "stevekaku"//'stevekaku' Is The Promo Code
 
  //Let's Take The Input, Where We Type The Promo Code

  let promoCodeInput = document.getElementById("promoCodeInput");
  let promoCodeInputValue = promoCodeInput.value.toLowerCase();
      if (promoCodeInputValue == promoCode) {
 
          // Let's Get The Discount Percentage

          let discountPrcntge = 20;
          let subtotalPrice = document.getElementById("totalPrice");  // Get The Subtotal Tag
          subtotalPrice = subtotalPrice.innerText;  //GEt The Subtotal Price Tag Value
 
          //Let's Take The Discount Amount

          let discountAmount = (subtotalPrice / 100) * 20;
          subtotalPrice = subtotalPrice - discountAmount;  //Subtotals 
            //Get The Grand Total Tag
       let grandTotalPrice = document.getElementById("grandTotalPrice");
       grandTotalPrice.innerText = subtotalPrice;  //Set The Grand Total Price Of The MAC 

       //Let's Clear The Promo Code Field

       promoCodeInput.value = " ";
 
       // Let's Show The Success Messge
       let sccMessg = document.getElementById("successAlert");//Get The Success Alert Tag
       sccMessg.innerText = "Wow, You Get $" + discountAmount.toFixed(2) + " Discount!";
 
      }else if(promoCodeInputValue == ""){
 
 
       alert("Your Promo Code Input Is Empty!");
 
       let sccMessg = document.getElementById("successAlert");  //Get The Success Alert Tag
       sccMessg.innerText = " ";
      }else if(promoCodeInputValue != promoCode){
 
 
       alert("Your Promo Code Did Not Matched!");
       //Let's Clear The Promo Code Field
       promoCodeInput.value = " ";
       let sccMessg = document.getElementById("successAlert");  //Get The Success Alert Tag
       sccMessg.innerText = " ";
      }else{
          alert("You Already Applied This Promo Code!");
       //Let's Clear The Promo Code Field
       promoCodeInput.value = " ";
       let sccMessg = document.getElementById("successAlert");  //Get The Success Alert Tag
       sccMessg.innerText = " ";
      }
  });
 