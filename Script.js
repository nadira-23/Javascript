let arr=[2,4,6,8,10];
console.log(arr[0]);
 function isprime(num) {
   if (num<2)return false;
   if (num==2)return true;
     for (let i = 2;i*i<=num;i++) {
      if (num%i===0) return false;
   }
    return true;
}
 console.log(isprime(2));




const arr2=[1,2,2,3,3,3,4,4,4,4,5,5];
 console.log(mostfrequent(arr2));
 function mostfrequent(arr2){
  const frequency={};
 for (const item of arr2){
      frequency[item]=(frequency[item]||0)+1;
  }
   const maxfrequency= Math.max(...Object.values(frequency));
 return Object.keys(frequency).find(key=>frequency[key]===maxfrequency);
}





 for  (let i=0;i<=15;i++){
  if(i%2===0){
    console.log(`${i} is even`);
}
else{
     console.log(`${i} is odd`);
 }

}



let arr3=[2,4,6,8];
 function sumofsquares(arr){
  
   let sum=0;
  
  for (let i=0;i<arr.length;i++){
    (sum+=arr[i]*arr[i]);
  }
  return sum ;
 }

console.log(sumofsquares(arr3));
  



