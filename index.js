const colors = [
            'rgb(0, 0, 139)',
            'rgb(0, 255, 255)', 
            'rgb(255, 192, 203)',
            'rgb(0, 128, 128)',  
            'rgb(255, 105, 180)',
            'rgb(0, 191, 255)',  
            'rgb(255, 69, 0)',   
            'rgb(0, 255, 127)',
            'rgb(255, 215, 0)',  
            'rgb(128, 128, 128)',
            'rgb(169, 169, 169)',  
            'rgb(0, 139, 139)',  
            'rgb(184, 134, 11)' ];
            
const square = document.getElementById('square');


for (let i = 0; i < colors.length; i++) {
   
    setTimeout(() => {
        square.style.backgroundColor = colors[i];
    }, i * 2000); 
}


setInterval(() => {
    for (let i = 0; i < colors.length; i++) {
        setTimeout(() => {
            square.style.backgroundColor = colors[i];
        }, i * 2000); 
    }
}, colors.length * 2000);
