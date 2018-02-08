<template>
  <div id="osobna">
    <div class="containerForm">
      <div class="flex100 paddBottom">
        <div id="prednja" class="w50 grey mb20">
          <div class="rowContainer">
            <img class="plus" src="../../static/img/plus.png"/>
            <p>ubacite sliku <span>PREDNJE STRANE</span> osobne iskaznice</p>
          </div>
        </div>
        <div id="straznja" class="w50 grey mb20">
          <div class="rowContainer">
            <img class="plus" src="../../static/img/plus.png"/>
            <p>ubacite sliku <span>STRAŽNJE STRANE</span> osobne iskaznice</p>
          </div>
        </div>
        <div class="collapse">
          <p class="napomena">„Potvrđujem da sam suglasan/na ukoliko u roku od 15 dana od dana primitka uplatnice Društva s podacima za prvu uplatu u fond ne izvršim uplatu, da će se smatrti kako sam odustao/la od zahtjeva za sklapanjem ugovora o članstvu.“<br/>„Nadalje, izričito izjavljujem da sam upoznat/a i iskazujem svoju volju da se prva uplata u fond s računa navedenog u ovom Zahtjevu smatra činom kojim ponovno potvrđujem sve ovdje dane dozvole i suglasnosti.“</p>
          <router-link to="/podaci-upis" class="button" id="korak3">RAZUMIJEM I PRIHVAĆAM</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'osobnaScan',
  data () {
    return {

    }
  }
}
</script>
