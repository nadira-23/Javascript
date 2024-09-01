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






 const arr2 = [1, 1, 3, 5, 7, 6, 8, 5, 6, 4,];
obj = {};
let el,
  max = 0;
for (let i = 0; i < arr.length; i++) {
  if (!obj[arr2[i]]) obj[arr2[i]] = 1;
  else obj[arr2[i]]++;
}

for (const i in obj) {
  if (max < obj[i]) {
      max = obj[i];
      el = i;
  }
}

console.log("The most frequent element is: "  + el);








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
  



