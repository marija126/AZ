<template>
  <div class="containerAZ">
    <h1 class="mainHeading">Registracija <span>novog člana.</span></h1>
    <img src="../../static/img/nalivpero.png" alt=""/>
    <p>Registracija je besplatna i traje 10-ak minuta. Nakon toga informacije o stanjima vašeg računa te važnim obavijestima bit će dostupne jednim klikom miša!</p>
    <h2 class="subHead">Za brže ispunjavanje Zahtjeva potrebno je pripremiti:</h2>
    <ul class="circle">
      <li><span>OIB</span> – možete ga naći na kartici dopunskog zdravstvenog osiguranja ili pomoću aplikacije Porezne uprave <a href="#"><span>LINK</span></a> </li>
      <li><span>Osobna iskaznica</span> – kako bi u što kraćem roku registrirali vas kao korisnika potrebna nam je preslika osobne iskaznice. Do toga možete doći na više načina:
        <ul class="line">
          <li><span>1. način:</span> skenirajte prednju i stražnju stranu osobne iskaznice te ju pohranite na tvrdom disku računala.</li>
          <li><span>2. način:</span> fotografirajte prednju i stražnju stranu osobne iskaznice svojim mobilnim uređajem te ih USB kablom prenesite na osobno računalo sa kojega radite registraciju.</li>
        </ul>
      </li>
      <li><span>IBAN</span> – nalazi se na kartici tekućeg računa sa kojeg ćete izvršiti prvu uplatu.</li>
    </ul>
    <router-link to="/osobna-scan" class="button">NASTAVITE DALJE</router-link>
    <p class="note">Traje samo desetak minuta</p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  margin-top: 150px;
}
</style>
