<template>
  <div class="dex container">
    <div class="row d-flex justify-content-center flex-row">
      <input class="user-search" type="text" placeholder="Search by Number" v-model="userSearchNumber">
      <input class="user-search" type="text" placeholder="Search by Name" v-model="userSearchName">
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
      <div v-for="(pokemon, index) in filteredPokemon" :key="index">
        <router-link :to="`/details/${pokemon.id}`" style="text-decoration: none; color: inherit">
          <div class="card col-md-4 col-lg-3 col-sm-12">
            <div class="card-body d-flex justify-content-start flex-column">
              <!--conditionals for pokemon numbers-->
              <h6 v-if="pokemon.id < 10">#00{{pokemon.id}}</h6>
              <h6 v-else-if="pokemon.id > 9 && pokemon.id < 100">#0{{pokemon.id}}</h6>
              <h6 v-else>#{{pokemon.id}}</h6>

              <!--conditionals for specfic pokemon formatting-->
              <h6 v-if="pokemon.name == 'nidoran-f'">nidoran &#9792;</h6>
              <h6 v-else-if="pokemon.name == 'nidoran-m'">nidoran &#9794;</h6>
              <h6 v-else-if="pokemon.name == 'basculin-red-striped'">basculin</h6>
              <h6 v-else-if="pokemon.name == 'meowstic-male'">meowstic</h6>
              <h6 v-else-if="pokemon.name == 'deoxys-normal'">deoxys</h6>
              <h6 v-else-if="pokemon.name == 'wormadam-plant'">wormadam</h6>
              <h6 v-else-if="pokemon.name == 'mime-jr'">mime jr.</h6>
              <h6 v-else-if="pokemon.name == 'giratina-altered'">giratina</h6>
              <h6 v-else-if="pokemon.name == 'shaymin-land'">shaymin</h6>
              <h6 v-else-if="pokemon.name == 'darmanitan-standard'">darmanitan</h6>
              <h6 v-else-if="pokemon.name == 'tornadus-incarnate'">tornadus</h6>
              <h6 v-else-if="pokemon.name == 'thundurus-incarnate'">thundurus</h6>
              <h6 v-else-if="pokemon.name == 'landorus-incarnate'">landorus</h6>
              <h6 v-else-if="pokemon.name == 'keldeo-ordinary'">keldeo</h6>
              <h6 v-else-if="pokemon.name == 'meloetta-aria'">meloetta</h6>
              <h6 v-else-if="pokemon.name == 'aegislash-shield'">aegislash</h6>
              <h6 v-else-if="pokemon.name == 'pumpkaboo-average'">pumpkaboo</h6>
              <h6 v-else-if="pokemon.name == 'gourgeist-average'">gourgeist</h6>
              <h6 v-else-if="pokemon.name == 'oricorio-baile'">oricorio</h6>
              <h6 v-else-if="pokemon.name == 'lycanroc-midday'">lycanroc</h6>
              <h6 v-else-if="pokemon.name == 'wishiwashi-solo'">wishiwashi</h6>
              <h6 v-else-if="pokemon.name == 'type-null'">type: null</h6>
              <h6 v-else-if="pokemon.name == 'minior-red-meteor'">minior</h6>
              <h6 v-else-if="pokemon.name == 'mimikyu-disguised'">mimikyu</h6>
              <h6 v-else-if="pokemon.name == 'tapu-koko'">tapu koko</h6>
              <h6 v-else-if="pokemon.name == 'tapu-lele'">tapu lele</h6>
              <h6 v-else-if="pokemon.name == 'tapu-bulu'">tapu bulu</h6>
              <h6 v-else-if="pokemon.name == 'tapu-fini'">tapu fini</h6>
              <h6 v-else-if="pokemon.name == 'toxtricity-amped'">toxtricity</h6>
              <h6 v-else-if="pokemon.name == 'mr-rime'">mr. rime</h6>
              <h6 v-else-if="pokemon.name == 'mr-mime'">mr. mime</h6>
              <h6 v-else-if="pokemon.name == 'eiscue-ice'">eiscue</h6>
              <h6 v-else-if="pokemon.name == 'indeedee-male'">indeedee</h6>
              <h6 v-else-if="pokemon.name == 'zacian-hero'">zacian</h6>
              <h6 v-else-if="pokemon.name == 'zamazenta-hero'">zamazenta</h6>
              <h6 v-else-if="pokemon.name == 'urshifu-single-strike'">urshifu</h6>

              <h6 v-else>{{pokemon.name}}</h6>

              <img class="card-image" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/' + pokemon.id + '.png'" alt="">

              <div v-for="(type, index) in pokemon.types" :key="index">
                <div class="type-small" :class="type.type.name">
                  <h6>{{type.type.name}}</h6>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs, computed} from "vue"

export default {
  name: 'Home',
  setup() {

    const state = reactive({
      pokemons: [],
      userSearchName: "",
      userSearchNumber: "",
      sortedPokemon: computed(()=> sortPokemon()),
      filteredPokemon: computed(()=> updatePokemon())
    })


    function sortPokemon() {
      function compare(a, b) {
        if (a.id < b.id)
          return -1
        if (a.id > b.id)
          return 1
        return 0
      }

    return state.pokemons.sort(compare)
    }

    function updatePokemon() {
      if(!state.userSearchNumber && !state.userSearchName){
        return state.sortedPokemon
      }

      else if(!state.userSearchNumber && state.userSearchName) {
        return state.sortedPokemon.filter((pokemon)=>
          pokemon.name.includes(state.userSearchName)
        )
      }

      else if(state.userSearchNumber && !state.userSearchName) {
        return state.sortedPokemon.filter((pokemon)=> 
          pokemon.id.toString().includes(state.userSearchNumber)
        )
      }

      return state.sortedPokemon.filter((pokemon)=>
        (pokemon.name.includes(state.userSearchName) && pokemon.id.toString().includes(state.userSearchNumber))
      )
    }

    for (let i=1; i <= 898; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res)=> res.json())
        .then((data)=> {
          state.pokemons.push(data)
        })  
    }

    return {...toRefs(state)}
  }
}
</script>
