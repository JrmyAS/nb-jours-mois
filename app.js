const nbJoursDansLeMois = () => {
	let nombreJour = 0;
	let date = new Date();
	console.log(date.getMonth())
	if(date.getMonth() <= 6){
		if(date.getMonth() % 2 == 0){
			nombreJour = 31;
		}else{
			nombreJour = 30;
		}
	}else{
		if(date.getMonth() % 2 == 1){
			nombreJour = 30;
		}else{
			nombreJour = 31;
		}
	}
	if(date.getMonth() == 1){
		if(date.getFullYear() % 4 == 0){
			if(date.getFullYear() % 100 == 0){
				if(date.getFullYear() % 400 == 0){
					nombreJour = 29;
				}else{
					nombreJour = 28;
				}
			}else{
				nombreJour = 29;
			}
		}else{
			nombreJour = 28;
		}
	}
	return nombreJour;
}
module.exports = nbJoursDansLeMois;