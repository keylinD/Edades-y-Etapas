window.onload = () =>{

   
/*let age = prompt("Ingrese su edad");

	if (age % 1 !==0 || age === "0" || age === NaN || age === null) {

		alert('Error al ingresar su edad ');
	}else if (age >=1 && age<3) {
		alert('Clasifica a Toddler')
	}
	}else if(age >=3 && age <5 ){
		alert('Clasifica a  Preschool')
	}else if (age >=5 && age <12){

		alert('Clasifica a Gradeschooler')
	}else if (age >=12 && age <18) {
		alert('Clasifica a Teen')
	} else if (age >=18 && age <21) {
		alert('Clasifica a Young Adult')
	}else if (age >=21 && age <30) {
		alert('Clasifica a Adult')
	}else{
		alert('No Clasifica !')
	}
}*/
let age = prompt('Ingrese su edad');

	if (age % 1 !==0 || age === "0" || age === NaN || age === null) {
		alert('Error al ingresar su edad');
	}else if (age >1 && age <3) {
		alert('Clasifica a Toddler');
	}else if (age >=3 && age <5) {
		alert('Clasifica a Preschool');
	}else if (age >=5 && age <12) {
		alert('Clasifica a Gradeschooler');
	}else if (age >=12 && age <18) {
		alert('Clasifica a Teen');
	}else if (age >=18 && age <21) {
		alert('Clasifica a Young Adult');
	}else if (age >=21) {
		alert('Clasifica a Adult');
	}else{
		alert('Tu debes ser un recién nacido  o un Anciano ');
	}
}