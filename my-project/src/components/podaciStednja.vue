<template>
  <div class="containerFilled paddBottom" id="podaciUpis">
    <h1 class="mainHeading">PODACI O DOBROVOLJNOJ MIROVINSKOJ ŠTEDNJI</h1>
    <form action="" id="podaciUpisani">
      <div class="flex100">
        <div class="formRow mb20">
          <p class="fontGrey pb5">Ulazna naknada: </p>
          <div class="w50 borderBot mb20">
            <div class="dropdownMenu w50">
              <select name="ulNaknada">
                <option value="postotna">postotna</option>
                <option value="jednokratna">jednokratna</option>
              </select>
            </div>
          </div>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Visina uplate:</p>
          <div class="w50 borderBot mb20">
            <input type="text" name="visinaUplate" value="417,00 kn" class="w50">
          </div>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Dinamika uplate</p>
          <div class="w50 borderBot mb20">
            <div class="dropdownMenu w50">
              <select name="ulNaknada">
                <option value="mjesecno">mjesečno</option>
                <option value="kvartalno">kvartalno</option>
                <option value="polugodisnje">polugodišnje</option>
                <option value="godisnje">godišnje</option>
                <option value="jednokratno">jednokratno</option>
              </select>
            </div>
          </div>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Razdoblje štednje:</p>
          <div class="w50 borderBot mb20">
            <input type="text" name="razdoblje" value="" class="w50">
          </div>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Način uplate*</p>
          <div class="w50 borderBot mb20">
            <div class="dropdownMenu w50">
              <select name="nacinUplate" v-model="uplata">
                <option value="uplatnica">Opća uplatnica</option>
                <option value="bankarstvo">Internet bankarstvo</option>
                <option value="nalog">Trajni nalog</option>
                <option value="obustava">Obustavom iz plaće</option>
              </select>
            </div>
          </div>
        </div>
        <div v-show="uplata === 'nalog'">
          <p class="napomena">Trajni nalog možete ugovoriti u svojoj poslovnoj banci. Po ugovaranju istog, na mrežnim stranicama Društva > osobni račun > osobni podaci, možete ažurirati podatak o načinu uplate.</p>
        </div>
        <div v-show="uplata === 'obustava'">
          <p class="napomena">Uplate obustavom iz plaće možete ugovoriti u računovodstvu tvrtke u kojoj ste zaposleni. Ovdje možete preuzeti predložak obrasca „Administrativne zabrane“. Po ugovaranju istog, na mrežnim stranicama Društva > osobni račun > osobni podaci, možete ažurirati podatak o načinu uplate</p>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Želim 15% državnih poticajnih sredstava (DPS)</p>
          <div class="w50">
            <div class="radioHolder mr25">
              <p class="pr15">Da</p>
              <input type="radio" name="drzavniPoticaj" value="da" checked="checked">
            </div>
            <div class="radioHolder mr25">
              <p class="pr15">Ne</p>
              <input type="radio" name="drzavniPoticaj" value="ne">
            </div>
          </div>
        </div>
      </div>
    </form>
    <div>
      <p class="napomena">Potvrđujem kako sam u cijelosti pročitao/la priložene dokumente „Prethodne obavijesti o ugovoru o članstvu u dobrovoljnom mirovinskom fondu“, „Prospekt“, „Statut“, „Ključne podatke za članove“ i „odredbe ugovora o članstvu u AZ Profit / AZ Benefit otvorenom dobrovoljnom mirovinskom fondu“, da sam izvršio/la ispis sve navedene dokumentacije te da ih u cijelosti razumijem i prihvaćam.<br/>Potvrđujem da sam upoznat/a kako prava iz dobrovoljnog mirovinskog osiguranja mogu ostvariti najranije s navršenih 50 godina života te dajem svoju izričitu suglasnost da se moje članstvo upiše u registar članova i prije isteka roka za jednostrani raskid ugovora.</p>
    </div>
    <router-link to="/dodatni-podaci" class="button" id="korak3">RAZUMIJEM I PRIHVAĆAM</router-link>
  </div>
</template>
<script>
export default {
  name: 'podaciStednja',
  data () {
    return {
      uplata: 'uplatnica'
    }
  }
}
</script>
