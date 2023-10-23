catchpoke(3);

var catchup = document.getElementById('many')

catchup.addEventListener('keyup',()=>{
    var error_index = document.querySelector('.error_index');
    if(catchup.value <= 700 && catchup.value > 3){
        error_index.innerHTML = '';
    catchpoke(catchup.value);
    }
    else{

       error_index.innerHTML = `
        <p class='error_p'>put a value that greater than 3 and less or equal than 700</p>
       `;
       
       
       catchpoke(3)
    }
});

var findup = document.getElementById('find');

findup.addEventListener('keyup',()=>{
    findpoke(findup.value);
    
})

function findpoke(finded){


    fetch('https://pokeapi.co/api/v2/pokemon/'+finded)
    .then(response => response.json())
    .then(pokemonfinder => {

           
            var pokemonfinded = document.querySelector('.pokemon-search');
            pokemonfinded.classList.add('pokemon-search-after');
            pokemonfinded.innerHTML = `
                <div class="pokemon-box-uni">
                <h3>Pokemon finded:</h3>
            <img src="`+pokemonfinder.sprites.front_default+`">
            <p>`+pokemonfinder.name+`</p>
        </div> 
                `;
        })
    }


function catchpoke(many){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${many}`)
.then(response => response.json())
.then(allpokemon => {

    var pokemons = [];

    console.log(pokemons);

    allpokemon.results.map((val)=>{
       
        fetch(val.url)
        .then(response => response.json())
        .then(pokemonsingle => {
            pokemons.push({nome:val.name,img:pokemonsingle.sprites.front_default});
            
           
             
            if(pokemons.length == many){
                

               var pokemonboxes = document.querySelector('.pokemon-boxes');
                pokemonboxes.innerHTML = '';

               pokemons.map(function(val){
                pokemonboxes.innerHTML += `
                <div class="pokemon-box-uni">
            <img src="`+val.img+`">
            <p>`+val.nome+`</p>
        </div> 
                `;
                
               })
           
            }
        
        
        
        })
    })

   
})
}


