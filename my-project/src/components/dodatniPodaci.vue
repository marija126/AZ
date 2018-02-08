<template>
  <div class="containerFilled paddBottom" id="dodatniPodaci">
    <h1 class="mainHeading">DODATNI PODACI</h1>
    <form action="" id="podaciUpisani">
      <div class="flex100">
        <div class="formRow mb20">
          <p class="fontGrey pb5">Status zaposlenja</p>
          <div class="w50 borderBot mb20">
            <div class="dropdownMenu w50">
              <select name="zaposlenje">
                <option value="zaposlen">zaposlen</option>
                <option value="honorarno">honorarno</option>
                <option value="nezaposlen">nezaposlen</option>
                <option value="student">student</option>
                <option value="ostalo">ostalo</option>
              </select>
            </div>
          </div>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Prosječni mjesečni prihodi</p>
          <div class="w50 borderBot mb20">
            <input type="text" name="prihod" value="" class="w50">
          </div>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Ostali izvori prihoda</p>
          <div class="w50 borderBot mb20">
            <input type="text" name="ostaliPrihod" value="" class="w50">
          </div>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Politički izložena osoba<br/><span class="moreLink" v-on:click ="politickaInfo = !politickaInfo">Više &rarr;</span></p>
          <div class="w50">
            <div class="radioHolder mr25">
              <p class="pr15 radio-label">Da</p>
              <input type="radio" name="politickaOsoba" value="da" checked="checked">
            </div>
            <div class="radioHolder mr25">
              <p class="pr15 radio-label">Ne</p>
              <input type="radio" name="politickaOsoba" value="ne">
            </div>
          </div>
        </div>
        <div v-if="politickaInfo">
          <p class="napomenaHeading"><strong>Politički izložena osoba:</strong></p>
          <ol type="A" class="napomenaOL">
            <li>Svaka fizička osoba koja djeluje ili je u proteklih najmanje 12 mjeseci djelovala na istaknutoj javnoj dužnosti (predsjednici država, vlada, ministri i njihovi zamjenici tj. državni tajnici te pomoćnici, članovi zakonodavnog tijela, članovi upravnih tijela političkih stranaka, suci vrhovnih ili ustavnih sudova ili dr. visoki pravosudni dužnosnici protiv čijih odluka, osim u iznimnim slučajevima, nije moguće koristiti pravne lijekove, suci revizorskih sudova, članovi savjeta središnjih banaka, veleposlanici, otpravnici poslova i visoki časnici oružanih snaga, članovi upravnih i nadzornih odbora pravnih osoba koje su u vlasništvu/većinskom vlasništvu države, direktori, zamjenici direktora, članovi odbora i osobe koje obavljaju jednakovrijedne funkcije u međunarodnoj organizaciji, općinski načelnici, gradonačelnici, župani i njihovi zamjenici izabrani na temelju zakona kojim se uređuju lokalni izbori u Republici Hrvatskoj) u državi članici ili trećoj državi, uključujući i članove njezine uže obitelji i osobe za koje je poznato da su bliski suradnici politički izložene osobe.</li>
            <li>Član obitelji osobe pod A. što uključuje bračnog ili izvanbračnog druga, roditelje, djecu i njihove bračne ili izvanbračne drugove</li>
            <li>Bliski suradnik osobe pod A. koji ima zajedničko stvarno vlasništvo nad pravnom osobom / pravnim uređenjem ili bilo koje druge bliske poslovne odnose, koja je jedini stvarni vlasnik pravne osobe ili pravnog uređenja za koje je poznato da su osnovani za dobrobit osobe A.</li>
          </ol>
        </div>
        <div v-show="uplata === 'nalog'">
          <p class="napomena">Trajni nalog možete ugovoriti u svojoj poslovnoj banci. Po ugovaranju istog, na mrežnim stranicama Društva > osobni račun > osobni podaci, možete ažurirati podatak o načinu uplate.</p>
        </div>
        <div v-show="uplata === 'obustava'">
          <p class="napomena">Uplate obustavom iz plaće možete ugovoriti u računovodstvu tvrtke u kojoj ste zaposleni. Ovdje možete preuzeti predložak obrasca „Administrativne zabrane“. Po ugovaranju istog, na mrežnim stranicama Društva > osobni račun > osobni podaci, možete ažurirati podatak o načinu uplate</p>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Državljanin SAD-a ili rezident SAD-a</p>
          <div class="w50">
            <div class="radioHolder mr25">
              <p class="pr15">Da</p>
              <input type="radio" name="SAD" value="da">
            </div>
            <div class="radioHolder mr25">
              <p class="pr15">Ne</p>
              <input type="radio" name="SAD" value="ne">
            </div>
          </div>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Posjedujem Zelenu kartu:</p>
          <div class="w50">
            <div class="radioHolder mr25">
              <p class="pr15">Da</p>
              <input type="radio" name="zelenaKarta" value="da">
            </div>
            <div class="radioHolder mr25">
              <p class="pr15">Ne</p>
              <input type="radio" name="zelenaKarta" value="ne">
            </div>
          </div>
        </div>
        <div class="formRow mb20">
          <p class="fontGrey pb5">Stalno naseljen stranac u SAD-u<br/><span class="moreLink" v-on:click ="stranacShow = !stranacShow">Više &rarr;</span></p>
          <div class="w50">
            <div class="radioHolder mr25">
              <p class="pr15">Da</p>
              <input type="radio" name="stranacSAD" value="da">
            </div>
            <div class="radioHolder mr25">
              <p class="pr15">Ne</p>
              <input type="radio" name="stranacSAD" value="ne">
            </div>
          </div>
        </div>
        <div v-if="stranacShow">
          <p class="napomena">Osobne podatke navedene u ovom Upitniku Allianz ZB d.o.o. društvo za upravljanje dobrovoljnim mirovinskim fondovima, Heinzelova 70, Zagreb (Voditelj obrade, nadalje: Društvo) obrađuje za potrebe uspostave i održavanja Vašeg poslovnog odnosa s Društvom, odnosno sklapanja ugovora o dobrovoljnoj mirovinskoj štednji te ostvarenju prava koja proizlaze iz članstva u dobrovoljnom mirovinskom fondu (prijenos sredstava, isplata), sve sukladno Zakonu o dobrovoljnim mirovinskim fondovima.<br/>Nadalje, osobni podaci se obrađuju temeljem Zakona o sprječavanju pranja novca i financiranja terorizma i njegovih provedbenih propisa u svrhu provedbe dubinske analize klijenta i ispunjenja obveza koje proizlaze iz navedenih propisa. Osobni podaci se obrađuju temeljem provođenja Sporazuma o unaprjeđenju ispunjavanja poreznih obveza na međunarodnoj razini i provedbi FATCA-e odnosno ispunjenja obveze izvještavanja sukladno Zakonu o administrativnoj suradnji u području poreza. <br/>Osobni podaci će biti pohranjeni u razdoblju do isteka rokova koje propisuju gore navedeni zakonski propisi.<br/>Osobni podaci u ovom Upitniku su neophodni da bi Društvo moglo ispuniti svoje zakonske obveze te uspostaviti poslovni odnos s Vama. Posljedica uskrate davanja osobnih podataka ili davanje netočnih podataka može biti nemogućnost sklapanja poslovnog odnosa s Vama, odnosno odbijanje sklapanja ugovora o članstvu u dobrovoljnom mirovinskom fondu i ugovora o isplati mirovine putem fonda. Uvid u svoje osobne podatke te ažuriranje i ispravak netočnih podataka u Upitniku možete u svakom trenutku provesti putem mrežnih stranica Društva (<a href="www.azfond.hr">www.azfond.hr</a>) ili pisanim putem, slanjem obavijesti na adresu AZ d.o.o., p.p. 5, 10002 Zagreb.</p>
        </div>
        <div class="m30 ">
          <p class="fontGrey alignCenter">Suglasan/sna sam da Društvo osobne podatke obrađuje u svrhu marketinga.</p>
          <div class="alignCenter">
            <div class="radioHolder mr25">
              <p class="pr15">Da</p>
              <input type="radio" name="marketing" value="da">
            </div>
            <div class="radioHolder mr25">
              <p class="pr15">Ne</p>
              <input type="radio" name="marketing" value="ne">
            </div>
          </div>
          <p class="napomenaMarketing">Ovime potvrđujem da sam upoznat s pravom da u svako doba mogu odustati od dane privole i zatražiti prestanak daljnje obrade svojih podataka u svrhu marketinga.</p>
        </div>
      </div>
    </form>
    <div>
    </div>
    <router-link to="/dodatni-podaci" class="button" id="korak3">RAZUMIJEM I PRIHVAĆAM</router-link>
  </div>
</template>
<script>
export default {
  name: 'podaciStednja',
  data () {
    return {
      uplata: 'uplatnica',
      politickaInfo: false,
      stranacShow: false
    }
  }
}
</script>
