const autos = require('./autos');

const concesionaria = {
     autos: autos,

   buscarAuto: function busqueda(laPatente){
      for(let i=0; i<this.autos.length; i++){
         if(this.autos[i].patente==laPatente){
            return this.autos[i];        
             }
      }
       return null;
   },


venderAuto: function(patente) {
   const auto = this.buscarAuto(patente);
   if(auto){
      return auto.vendido = true;
   }else{
      return auto.vendido = false;
   }
},
autosParaLaVenta : function () {
   let aVender = this.autos.filter(function(cadaAuto){
      return cadaAuto.vendido == false ? cadaAuto: "" ;
   })
   return aVender;
},


autosNuevos: function (){
let aLaVenta = this.autosParaLaVenta();
let nuevos = aLaVenta.filter(function (cadaAuto){
   return cadaAuto.km < 100 ;
})


return nuevos;
},


  listaDeVentas : function () {
   let listado = []; 
   this.autos.forEach(function (cadaAuto){
      cadaAuto.vendido == true ? listado.push(cadaAuto.precio):""
   })

   return listado;
},

   totalDeVentas: function(){
      return ventas = this.listaDeVentas().reduce((num, precio)=> num + precio, 0)
},

  


    puedeComprar:function(){
    let aptoCompra = unAuto.precio<unaPersona.capacidadDePagoTotal ? 'true' : unAuto.precio>capacidadDePagoEnCuotas;
    return aptoCompra;
}

,

autosQuePuedeComprar: function(persona){
    return this.autosParaLaVenta(autos).filter(auto => this.puedeComprar(auto, persona));
 
    
 }
 
 }

