const app = new Vue({
    el:'#root',
    data:{
        cerca:'',
        generi:['All'],
        lista:[],
        prezzi:[],
        prodotti :[
            {
            'marca':'Samsung',
            'modello':'s23 ultra',
            'ram':'12gb',
            'memoriainterna':'512gb',
            'prezzo':1350,
            'foto':'img/samsung.png',
            'genere':'smartphone'
            },
             {
             'marca':'Apple',
             'modello':'Iphone 14 pro',
             'ram':'8gb',
             'memoriainterna':'256gb',
             'prezzo':1179,
             'foto':'img/iphone.png',
             'genere':'smartphone'
              }  ,
            {
             'marca':'Oppo',
             'modello':'findX',
             'ram':'4gb',
             'memoriainterna':'128gb',
             'prezzo':900,
             'foto':'img/oppo.png',
             'genere':'smartphone'
            },
             {
             'marca':'Xiaomi',
             'modello':'Xiaomi 13 pro',
             'ram':'8gb',
             'memoriainterna':'256gb',
             'prezzo':1100,
             'foto':'img/xiaomi.png',
             'genere':'smartphone'
             },
             {
             'marca':'Motorola',
             'modello':'edge 40',
             'ram':'6gb',
             'memoriainterna':'128gb',
             'prezzo':980,
             'foto':'img/motorola.png',
             'genere':'smartphone'
             },
            {
             'marca':'Goolge',
             'modello':'pixel 7 pro',
             'ram':'12gb',
             'memoriainterna':'512gb',
             'prezzo':1400,
             'foto':'img/pixel.png',
             'genere':'smartphone'
    
            },
           {
             'marca':'onePlus',
             'modello':'Nord',
             'ram':'6gb',
             'memoriainterna':'128gb',
             'prezzo':740,
             'foto':'img/oneplus.png',
             'genere':'smartphone'
           },
    
         //   fine smartphone
          {
             'marca':'samsung',
             'modello':'galaxyWatch',
             'ram':'2gb',
             'memoriainterna':'8gb',
             'prezzo':300,
             'foto':'img/samsungWatch.png',
             'genere':'smartwatch'
          },
     
           {
             'marca':'Apple',
             'modello':'applewatch',
             'ram':'2gb',
             'memoriainterna':'8gb',
             'prezzo':499,
             'foto':'img/appleWatch.png',
             'genere':'smartwatch'
           },
     
           {
             'marca':'xiaomi',
             'modello':'miwatch',
             'ram':'2gb',
             'memoriainterna':'8gb',
             'prezzo':300,
             'foto':'img/xiaomiWatch.png',
             'genere':'smartwatch'
           },
     
    ],
    },
    mounted(){
     this.prodotti.forEach(element => {
               !this.generi.includes(element.genere)?this.generi.push(element.genere):'';
     });
       
       console.log(this.prezzi);
    },
 
  
    /**
     * ----------------------------------------------------------------
     * ////////////////////////////////////////////////////////////////
     * ----------------------------------------------------------------
     */

    methods:{
     scegli:function(card){
          if(this.cerca =="All"||card.genere==this.cerca){
            return true
          } else {
            return false
          }
     },
     invia:function(nome,costo){
                this.lista.push({'nome':nome,'prezzo':costo})
               this.prezzi.push(Number(costo));
              
                
                console.log(this.lista);
                console.log(this.prezzi);
     },
     elimina:function(index){
         this.lista.splice(index,1)
         this.prezzi.splice(index,1)
          for(let i = 0; i < this.prezzi.length;i++){
            if(this.prezzi[i]==0){
              document.querySelector('#mioTotale').innerHTML=`Totale Carrello: <span style="color:dodgerblue;">0</span>`
            }
          }
         
     },

     totale:function(){
         somma = 0
         for(let i=0; i < this.prezzi.length;i++){
          somma +=this.prezzi[i]
          console.log(somma);
          document.querySelector('#mioTotale').innerHTML=`Totale Carrello: <span style="color:dodgerblue;">${somma}</span>`
             
            
         }
     }

    },

})





