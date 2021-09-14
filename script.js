/* let precioOriginal = 140;
let descuento = 25;
let precioConDescuento = (precioOriginal *(100 - descuento)) / 100;

console.log({
    precioOriginal,
    descuento,
    precioConDescuento
});
 */





/* 


function porcentajePrecio(precio, descuento )
{
    return (precio * (100 - descuento)) / 100;
}

function buttonPrecio()
{

    let descuento = document.getElementById('descuento');
    let valueDescuento = descuento.value;
    
    let precio = document.getElementById('precio');
    let cupons = document.getElementById('cupons');
    let valuePrecio = precio.value;
    let valueCupons = cupons.value;


    
    if(valueCupons == 'get10' ){
        valueDescuento = Number(valueDescuento) + 10;
        let totalCupon10 = porcentajePrecio(valuePrecio, valueDescuento);
            return resultadoPrecio.innerHTML = ` El precio total es de: $${totalCupon10}`;
        
    }else if(valueCupons == 'get20'){
        valueDescuento = Number(valueDescuento) + 20;
        let totalCupon20 = (valuePrecio, valueDescuento );
        return resultadoPrecio.innerHTML = ` El precio total es de: $${totalCupon20}`;
        
    }else if(valueCupons == 'get30'){
        valueDescuento = Number(valueDescuento) + 30;
        let totalCupon30 = (valuePrecio, valueDescuento );
        return resultadoPrecio.innerHTML = ` El precio total es de: $${totalCupon30}`;
        
    }else if(valueCupons == 'get40'){
        valueDescuento = Number(valueDescuento) + 40;
        let totalCupon40 = (valuePrecio, valueDescuento );
        return resultadoPrecio.innerHTML = ` El precio total es de: $${totalCupon40}`;
        
    }else if(valueCupons == 'get50'){
        valueDescuento = Number(valueDescuento) + 50;
        let totalCupon50 = (valuePrecio, valueDescuento );
        return resultadoPrecio.innerHTML = ` El precio total es de: $${totalCupon50}`;
        
    }else{
        let precioConDescuento = porcentajePrecio(valuePrecio, valueDescuento );
        return resultadoPrecio.innerHTML = ` El precio total es de: $${precioConDescuento}`;
    }  
    
}
 */








function porcentajePrecio(precio, descuento )
{
    return (precio * (100 - descuento)) / 100;
}

function buttonPrecio()
{
    let precio = document.getElementById('precio');
    let cupons = document.getElementById('cupons');
    let valuePrecio = precio.value;
    let valueCupons = cupons.value;
    
    if(valueCupons == 'get10' ){
        let cupon10 = 10 ;
        let totalCupon10 = porcentajePrecio(valuePrecio, cupon10);

        return resultadoPrecio.innerHTML = ` El precio total es de: $${totalCupon10}`;
        
    }else if(valueCupons == 'get20'){
        let cupon20 = 20;
        let totalCupon20 = porcentajePrecio(valuePrecio, cupon20 );

        return resultadoPrecio.innerHTML = ` El precio total es de: $${totalCupon20}`;
        
    }else if(valueCupons == 'get30'){
        let cupon30 = 30;
        let totalCupon30 = porcentajePrecio(valuePrecio, cupon30 );

        return resultadoPrecio.innerHTML = ` El precio total es de: $${totalCupon30}`;
        
    }else if(valueCupons == 'get40'){
        let cupon40 = 40;
        let totalCupon40 = porcentajePrecio(valuePrecio, cupon40 );

        return resultadoPrecio.innerHTML = ` El precio total es de: $${totalCupon40}`;
        
    }else if(valueCupons == 'get50'){
        let cupon50 = 50;
        let totalCupon50 = porcentajePrecio(valuePrecio, cupon50 );

        return resultadoPrecio.innerHTML = ` El precio total es de: $${totalCupon50}`;
        
    }else{
        return resultadoPrecio.innerHTML = `<hr> El precio total es de: $${valuePrecio}`;
    }  
    
}





