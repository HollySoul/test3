function myFirstApp (name, age) {

  alert("Привет, меня зовут " + name + " и это моя первая программа!");

  
  	let skills = ['html','css','c++'];

  	for(let i = 0;i< skills.length;i++){
    document.write("Я владею " + skills[i] + "</br>")
  	}



   

   if(age=>18){
   	alert("Доступ разрешён");
   } else{
   	alert("доступ ограничен");
   }
     
     function calcPow(num){
     	num=num*num;
     	console.log(num);
     }
    calcPow(4);
}
myFirstApp("Stas" ,"18");