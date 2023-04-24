function calculate() {
    
  var salary=document.getElementById("money").value
  if (salary== ""){
      alert("Enter amount")
  }
  else

  {  
      var base=document.getElementById("money").value
      document.getElementById("base").innerHTML=base

      
        if (base<=12000){
            nssf=0.06*base
            nssftier1=nssf*0.6
            nssftier2=nssftier1*(2/3)
        }
       else if(base>=12001 && base<18000){
        
        nssftier1=360
        nssftier2=nssftier1*(7.34/4)  
       }

        
        else{
            nssftier1=360
            nssftier2=nssftier1*2
        }
      
      document.getElementById("nssftier1").innerHTML=nssftier1
      
      document.getElementById("nssftier2").innerHTML=nssftier2
      var tnssf = (nssftier1+nssftier2)

      var taxableincome=base-(tnssf)
      
      var payee=""
      if (taxableincome<=24000){
          payee= 0
          alert("Tafuta connection kuna mtu analipa payee inatoshana na salo yako")
      }else if(taxableincome>24001 && taxableincome<=32333){
          payee=((0.1*24000)+((taxableincome-24000)*0.25))-2400
      }else if(taxableincome>32333){
        payee=((0.1*24000)+((8333)*0.25)+((taxableincome-32333)*0.3))-2400
          console.log(payee)
      }else{
          alert("Enter amount")

      }
      document.getElementById("paye").innerHTML=payee


      
      var nhif=""
      if (base>0 && base<=5999){
          nhif=150
      }else if(base>=6000 && base <=7999){
          nhif=300
      }else if(base>=8000 && base<=11999){
          nhif=400
      }
      else if(base>=12000 && base<=14999){
          nhif=500

      }else if(base>=15000 && base<=19999){
          nhif=600

      }else if(base>=20000 && base<=24999){
          nhif=750

      }else if(base>=25000 && base<=29999){
          nhif=850

      }else if(base>=30000 && base<=34999){
          nhif=900

      }else if(base>=35000 && base<=39999){
          nhif=950

      }else if(base>=40000 && base<=44999){
          nhif=1000

      }else if(base>=45000 && base<=49999){
          nhif=1100

      }else if(base>=50000 && base<=59999){
          nhif=1200

      }else if(base>=60000 && base<=69999){
          nhif=1300

      }else if(base>=70000 && base<=79999){
          nhif=1400

      }else if(base>=80000 && base<=89999){
          nhif=1500

      }else if(base>=90000 && base<=99999){
          nhif=1600

      }else if(base>=100000){
          nhif=1700

      }else{
          alert("Enter amount from 0")
      }
      document.getElementById("nhif").innerHTML=nhif


      
  var netpay=base-(payee+nhif+tnssf)
  document.getElementById("netpay").innerHTML=netpay
  }
}   


