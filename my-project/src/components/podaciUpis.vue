<template>
    <div class="containerFilled paddBottom" id="podaciUpis">
        <h1 class="mainHeading">PODACI O PODNOSITELJU ZAHTJEVA</h1>
        <form action="" id="podaciUpisani">
            <div class="w100 cijeli">
                <div class="formRow">
                    <h3 class="inputHeading">Ime</h3>
                    <input type="text" name="ime" value="Miroslav">
                </div>
                <div class="formRow">
                    <h3 class="inputHeading">Prezime</h3>
                    <input type="text" name="prezime" value="Matutinović">
                </div>
            </div>
            <div class="flex100 h110">
                <div class="formRow">
                    <div class="w100">
                        <div class="w50 borderBot h55 mb20">
                            <h3 class="inputHeading">Spol</h3>
                            <div class="radioHolder mr25">
                                <p class="pr15">M/M</p>
                                <input type="radio" name="spol" value="muski" checked="checked">
                            </div>
                            <div class="radioHolder mr25">
                                <p class="pr15">F/M</p>
                                <input type="radio" name="spol" value="zenski">
                            </div>
                        </div>
                        <div class="w50 borderBot mb20">
                            <h3 class="inputHeading">Datum</h3>
                            <div class="datum">
                                <input type="text" name="datumRodjenja" value="01-01-1977">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="formRow">
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Mjesto rođenja</h3>
                        <input type="text" name="mjesto" value="ZAGREB" class="w50">
                    </div>
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Država rođenja</h3>
                        <div class="dropdownMenu">
                          <select name="drzava">
                            <option value="">odaberite državu</option>
                            <option value="Hrvatska">Hrvatska</option>
                              <option value="Njemacka">Njemačka</option>
                              <option value="Italija">Italija</option>
                              <option value="Francuska">Francuska</option>
                              <option value="Slovenija">Slovenija</option>
                          </select>
                        </div>
                    </div>
                </div>
                <div class="formRow">
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Državljanstvo</h3>
                        <input type="text" name="drzavljanstvo" value="HRV" class="w50">
                    </div>
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Drugo državljanstvo</h3>
                        <div class="dropdownMenu w50">
                          <select name="drzavljanstvo2">
                          <option value="">odaberite drugo državljanstvo</option>
                            <option value="hrv">Hrvatsko</option>
                              <option value="njem">Njemačko</option>
                              <option value="tal">Talijansko</option>
                              <option value="fra">Francusko</option>
                              <option value="slo">Slovensko</option>
                          </select>
                        </div>
                 </div>
                </div>
                <div class="formRow">
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Broj osobne iskaznice</h3>
                        <input type="text" name="brOsobne" value="123456789" class="w50">
                    </div>
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Izdavatelj osobne iskaznice</h3>
                        <input type="text" name="izdavatelj" value="PU ZAGREBAČKA" class="w50">
                    </div>
                </div>
                <div class="formRow">
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Datum važenja osobne iskaznice</h3>
                        <input type="text" name="datumOsobna" value="01-07-2023" class="w50">
                    </div>
                   <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Osobni indetifikacijski broj OIB</h3>
                        <input type="text" name="OIB" value="" class="w50">
                    </div>
                </div>
                <div class="formRow">
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Mjesto</h3>
                        <div class="dropdownMenu w50">
                          <select name="mjestoStanovanja">
                            <option value="">odaberite mjesto</option>
                            <option value="Zagreb">Zagreb</option>
                            <option value="Zagreb">Split</option>
                            <option value="Zagreb">Osijek</option>
                            <option value="Zagreb">Rijeka</option>
                            <option value="Zagreb">Karlovac</option>
                          </select>
                        </div>
                    </div>
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Poštanski broj</h3>
                        <div class="dropdownMenu w50">
                          <select name="pbr">
                            <option value="">odaberite mjesto</option>
                            <option value="10000">10000</option>
                            <option value="10000">10001</option>
                            <option value="10000">10002</option>
                            <option value="10000">10003</option>
                            <option value="10000">10004</option>
                          </select>
                        </div>
                    </div>
                </div>
                <div class="formRow">
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Ulica i kućni broj</h3>
                        <input type="text" name="ulica" rows="2" value="ZAGREB, GRAD ZAGREB SAVSKA CESTA 31" class="w50">
                    </div>
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Izdavatelj osobne iskaznice</h3>
                        <input type="text" name="izdavatelj" value="" class="w50">
                    </div>
                </div>
                <div class="formRow">
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Broj mobitela </h3>
                        <input type="text" name="mob" value="" class="w50">
                    </div>
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Broj telefona</h3>
                        <input type="text" name="tel" value="" class="w50">
                    </div>
                </div>
                <div class="formRow">
                    <div class="w100">
                        <div class="w50 borderBot h55 mb20">
                            <h3 class="inputHeading">Adresa elekroničke pošte</h3>
                            <input type="text" name="email" value="" class="w50">
                        </div>
                    </div>
                </div>
                <div class="formRow h75 mb20">
                    <p class="fontGrey pb5">Kontakt podaci se razlikuju od prebivališnih: </p>
                    <div class="w50">
                        <div class="radioHolder mr25">
                            <p class="pr15">Da</p>
                            <input type="radio" name="kontaktPodaci" value="da" v-model="checked">
                        </div>
                        <div class="radioHolder mr25">
                            <p class="pr15">Ne</p>
                            <input type="radio" name="kontaktPodaci" value="ne" v-model="checked">
                        </div>
                    </div>
                </div>
                <div class="formRow" v-show="checked === 'da'">
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Ulica i kućni broj</h3>
                        <input type="text" name="ulica-razlicita" rows="2" value="" class="w50">
                    </div>
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Mjesto</h3>
                        <input type="text" name="mjesto-razlicito" value="" class="w50">
                    </div>
                </div>
                <div class="formRow" v-show="checked === 'da'">
                    <div class="w50 borderBot h55 mb20">
                        <h3 class="inputHeading">Poštanski broj</h3>
                        <input type="text" name="mjesto-razlicito" value="" class="w50">
                    </div>
                </div>
                <div class="formRow h75 mb20">
                    <div class="halfRow">
                        <h3 class="inputHeading">Broj IBAN računa</h3>
                        <input type="text" name="IBAN" value="" class="w50 borderBot mb20">
                    </div>
                </div>
            </div>
        </form>
       <router-link to="/odabir-fonda" class="button" id="korak3">RAZUMIJEM I PRIHVAĆAM</router-link>
    </div>
</template>

<script>

export default {
  name: 'podaciUpis',
  data () {
    return {
      checked: 'ne'
    }
  }
}
</script>
