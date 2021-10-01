<template>
  <div class="details container">
    <div class="pokemon" v-if="pokemon">
        <div class="row d-flex justify-content-center info flex-nowrap">
            <div class="dex-back dex-nav">
                <a v-if="(pokemon.id - 1) != 0" :href="`/details/${pokemon.id - 1}`"><i class="bi bi-caret-left-square-fill"></i></a>
            </div>
            <div class="col-sm-6 info-left">
                <!--conditionals for pokemon numbers-->
                <h2 class="number" v-if="pokemon.id < 10">#00{{pokemon.id}}</h2>
                <h2 class="number" v-else-if="pokemon.id > 9 && pokemon.id < 100">#0{{pokemon.id}}</h2>
                <h2 class="number" v-else>#{{pokemon.id}}</h2>
            </div>

            <div class="col-sm-6 info-right">
                <!--conditionals for specfic pokemon formatting-->
                <h3 class="name" v-if="pokemon.name == 'nidoran-f'">nidoran &#9792;</h3>
                <h3 class="name" v-else-if="pokemon.name == 'nidoran-m'">nidoran &#9794;</h3>
                <h3 class="name" v-else-if="pokemon.name == 'basculin-red-striped'">basculin</h3>
                <h3 class="name" v-else-if="pokemon.name == 'meowstic-male'">meowstic</h3>
                <h3 class="name" v-else-if="pokemon.name == 'deoxys-normal'">deoxys</h3>
                <h3 class="name" v-else-if="pokemon.name == 'wormadam-plant'">wormadam</h3>
                <h3 class="name" v-else-if="pokemon.name == 'mime-jr'">mime jr.</h3>
                <h3 class="name" v-else-if="pokemon.name == 'giratina-altered'">giratina</h3>
                <h3 class="name" v-else-if="pokemon.name == 'shaymin-land'">shaymin</h3>
                <h3 class="name" v-else-if="pokemon.name == 'darmanitan-standard'">darmanitan</h3>
                <h3 class="name" v-else-if="pokemon.name == 'tornadus-incarnate'">tornadus</h3>
                <h3 class="name" v-else-if="pokemon.name == 'thundurus-incarnate'">thundurus</h3>
                <h3 class="name" v-else-if="pokemon.name == 'landorus-incarnate'">landorus</h3>
                <h3 class="name" v-else-if="pokemon.name == 'keldeo-ordinary'">keldeo</h3>
                <h3 class="name" v-else-if="pokemon.name == 'meloetta-aria'">meloetta</h3>
                <h3 class="name" v-else-if="pokemon.name == 'aegislash-shield'">aegislash</h3>
                <h3 class="name" v-else-if="pokemon.name == 'pumpkaboo-average'">pumpkaboo</h3>
                <h3 class="name" v-else-if="pokemon.name == 'gourgeist-average'">gourgeist</h3>
                <h3 class="name" v-else-if="pokemon.name == 'oricorio-baile'">oricorio</h3>
                <h3 class="name" v-else-if="pokemon.name == 'lycanroc-midday'">lycanroc</h3>
                <h3 class="name" v-else-if="pokemon.name == 'wishiwashi-solo'">wishiwashi</h3>
                <h3 class="name" v-else-if="pokemon.name == 'type-null'">type: null</h3>
                <h3 class="name" v-else-if="pokemon.name == 'minior-red-meteor'">minior</h3>
                <h3 class="name" v-else-if="pokemon.name == 'mimikyu-disguised'">mimikyu</h3>
                <h3 class="name" v-else-if="pokemon.name == 'tapu-koko'">tapu koko</h3>
                <h3 class="name" v-else-if="pokemon.name == 'tapu-lele'">tapu lele</h3>
                <h3 class="name" v-else-if="pokemon.name == 'tapu-bulu'">tapu bulu</h3>
                <h3 class="name" v-else-if="pokemon.name == 'tapu-fini'">tapu fini</h3>
                <h3 class="name" v-else-if="pokemon.name == 'toxtricity-amped'">toxtricity</h3>
                <h3 class="name" v-else-if="pokemon.name == 'mr-rime'">mr. rime</h3>
                <h3 class="name" v-else-if="pokemon.name == 'mr-mime'">mr. mime</h3>
                <h3 class="name" v-else-if="pokemon.name == 'eiscue-ice'">eiscue</h3>
                <h3 class="name" v-else-if="pokemon.name == 'indeedee-male'">indeedee</h3>
                <h3 class="name" v-else-if="pokemon.name == 'zacian-hero'">zacian</h3>
                <h3 class="name" v-else-if="pokemon.name == 'zamazenta-hero'">zamazenta</h3>
                <h3 class="name" v-else-if="pokemon.name == 'urshifu-single-strike'">urshifu</h3>

                <h3 class="name" v-else>{{pokemon.name}}</h3>

                <div v-for="(genus, index) in pokemonSpecies.genera" :key="index">
                    <p class="mx-auto genus" v-if="genus.language.name == 'en'">{{genus.genus}}</p>
                </div>
            </div>
            <div class="dex-forward dex-nav">
                <a v-if="(pokemon.id + 1) != 899" :href="`/details/${pokemon.id + 1}`"><i class="bi bi-caret-right-square-fill"></i></a>
            </div>
        </div>
        <div class="row poke-details">
            <div class="col-lg-6 details-left">
                <img :src="imgUrl" alt="">
            </div>
            <div class="col-lg-6 details-right">
                <p class="type-label">Type:</p>
                <div class="types row d-flex flex-nowrap">
                    <div class="type-container" v-for="(type, index) in pokemon.types" :key="index">
                        <div class="type" :class="type.type.name">
                            <h4>{{type.type.name}}</h4>
                        </div>
                    </div>
                </div>
                <div class="dimensions">
                    <h5>Height:  {{pokemon.height / 10}} meters</h5>
                    <h5>Weight:  {{pokemon.weight / 10}} kilograms</h5>
                </div>
                <div v-for="(flavor, index) in pokemonSpecies.flavor_text_entries" :key="index">
                    <p class="flavor" v-if="flavor.language.name == 'en' && (flavor.version.name == 'lets-go-pikachu' || (flavor.version.name == 'black-2' && pokemon.id > 151) || (flavor.version.name == 'ultra-sun' && pokemon.id > 721) || (flavor.version.name == 'sword' && pokemon.id > 809))">{{flavor.flavor_text}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import {useRoute} from "vue-router"
    import {reactive, toRefs} from "vue"

    export default {
        setup() {
            const route = useRoute()

            const state = reactive({
                pokemon: null,
                pokemonSpecies: null,
                imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params.slug}.png`
            })

            fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}`)
                .then((res)=> res.json())
                .then((data)=> {
                    state.pokemon = data
                    console.log(state.pokemon)
                })

            fetch(`https://pokeapi.co/api/v2/pokemon-species/${route.params.slug}`)
                .then((res)=> res.json())
                .then((data)=> {
                    state.pokemonSpecies = data
                    console.log(state.pokemonSpecies)
                })

            return {...toRefs(state)}
        }
    }
</script>
