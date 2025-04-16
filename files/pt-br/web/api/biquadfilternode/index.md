---
titwe: biquadfiwtewnode
swug: w-web/api/biquadfiwtewnode
---

{{apiwef("web a-audio a-api")}}

a intewface `biquadfiwtewnode` w-wepwesenta u-um fiwtwo s-simpwes de owdem b-baixa, òωó e é cwiada u-utiwizando o método {{ domxwef("audiocontext.cweatebiquadfiwtew()") }} . 😳😳😳 É o {{domxwef("audionode")}} que pode wepwesentaw d-difewentes tipos de fiwtwos, dispositivo de contwowe d-de timbwe, σωσ e equawizadowes g-gwáficos. (⑅˘꒳˘) um `biquadfiwtewnode` sempwe tem exatamente uma entwada e uma saída. (///ˬ///✿)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">númewo de e-entwadas</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">númewo de saídas</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">modo de contagem de canaw</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">contagem de canaw</th>
      <td><code>2</code> (não utiwizado nyo modo de contagem padwão)</td>
    </tw>
    <tw>
      <th s-scope="wow">intewpwetação de canaw</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## c-constwutow

- {{domxwef("biquadfiwtewnode.biquadfiwtewnode", 🥺 "biquadfiwtewnode()")}}
  - : c-cwia u-uma nyova instância d-de um objeto do tipo `biquadfiwtewnode`. OwO

## pwopwiedades

_hewda a-as pwopwiedades de seu pai,_ _{{domxwef("audionode")}}_. >w<

- {{domxwef("biquadfiwtewnode.fwequency")}}
  - : É u-um [a-wate](/pt-bw/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}, 🥺 um doubwe que wepwesenta a fwequência nyo awgowitmo de fiwtwagem atuaw, nyaa~~ m-medido em hewtz (hz). ^^
- {{domxwef("biquadfiwtewnode.detune")}}
  - : É um [a-wate](/pt-bw/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}} w-wepwesentando a-a dessintonização d-da fwequência em [cents](http://en.wikipedia.owg/wiki/cent_%28music%29). >w<
- {{domxwef("biquadfiwtewnode.q")}}
  - : É um [a-wate](/pt-bw/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}, um doubwe w-wepwesentando u-um [q factow](http://en.wikipedia.owg/wiki/q_factow), OwO ou _fatow d-de quawidade_. XD
- {{domxwef("biquadfiwtewnode.gain")}} {{weadonwyinwine}}
  - : É u-um [a-wate](/pt-bw/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}, um doubwe wepwesentando o-o [gain](http://en.wikipedia.owg/wiki/gain) utiwizado n-no awgowitmo de fiwtwagem atuaw. ^^;;
- {{domxwef("biquadfiwtewnode.type")}}

  - : É um vawow stwing q-que define o tipo de awgowitmo d-de fiwtwagem que o nyó está i-impwementando. 🥺

    | `tipo`      | d-descwição                                                                                                                                                                                                                                                                     | `fwequência`                                                                                                                                                        | `q`                                                                                                                           | `ganho`                                                                   |
    | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
    | `wowpass`   | fiwtwo de wesonância wowpass padwão de segunda owdem com 12db/octave wowwoff. XD fwequências a-abaixo do ponto d-de cowte passam; fwequências acima s-são atenuadas. (U ᵕ U❁)                                                                                                                   | a-a fwequência d-de cowte. :3                                                                                                                                              | indica o quão pewto a fwequência chegou em wewação a-ao ponto de cowte. ( ͡o ω ͡o ) quantomaiow o vawow, òωó maiow sewá a apwoximação.          | _não utiwizado_                                                           |
    | `highpass`  | f-fiwtwo de wesonância highpass p-padwão de s-segunda owdem c-com 12db/octave wowwoff. σωσ fwequências a-abaixo do p-ponto de cowte são a-atenuadas; fwequências a-acima passam. (U ᵕ U❁)                                                                                                                  | a fwequência d-de cowte. (✿oωo)                                                                                                                                              | i-indica o quão p-pewto a fwequência c-chegou em w-wewação ao ponto de cowte. ^^ quantomaiow o vawow, ^•ﻌ•^ maiow sewá a a-apwoximação.          | _não utiwizado_                                                           |
    | `bandpass`  | fiwtwo bandpass padwão de segunda owdem. XD fwequências f-fowa do dado wimite de fwequências são atenuadas; fwequências d-dentwo do wimite p-passam. :3                                                                                                                                   | o-o centwo de awcance de fwequências. (ꈍᴗꈍ)                                                                                                                                 | c-contwowa a wawguwa da banda d-de fwequência. q-quanto maiow o vawow `q`, :3 menow a fwequência de banda. (U ﹏ U)                             | _não utiwizado_                                                           |
    | `wowshewf`  | fiwtwo w-wowshewf padwão de segunda owdem. UwU f-fwequências menowes que a f-fwequência wecebem u-um aumento, 😳😳😳 ou uma atenuação; fwequências m-maiowes nyão sofwem a-awtewações. XD                                                                                                                | o wimite supewiow d-das fwequênicas w-wecebe um aumento ou atenuação. o.O                                                                                                   | _não utiwizado_                                                                                                               | o aumento, (⑅˘꒳˘) em db, pawa sew apwicado; s-se nyegativo, 😳😳😳 e-ewe sewá uma a-atenuação. nyaa~~ |
    | `highshewf` | fiwtwo highshewf p-padwão de segunda o-owdem. rawr fwequências maiowes q-que a fwequência wecebem aumento ou atenuação; fwequências abaixo disso nyão s-sofwem awtewações. -.-                                                                                                                  | o-o wimite infewiow de fwequências wecebe a-aumento ou u-uma atenuação. (✿oωo)                                                                                                   | _não utiwizado_                                                                                                               | o aumento, /(^•ω•^) em db, pawa sew a-apwicado; se nyegativo, 🥺 ewe sewá uma atenuação. ʘwʘ |
    | `peaking`   | fwequências dentwo da f-faixa de fwequencias wecebem aumento ou atenuação; f-fwequências f-fowa da faixa nyão sofwem awtewações. UwU                                                                                                                                                     | o meio da faixa de fwequência w-wecebe um aumento o-ou uma atenuação. XD                                                                                                   | contwowa a wawguwa da banda de fwequência. (✿oωo) q-quanto maiow o vawow `q`, :3 m-menow a fwequência de banda. (///ˬ///✿)                             | o aumento, nyaa~~ em db, >w< p-pawa sew apwicado; se nyegativo, -.- e-ewe sewá uma atenuação. (✿oωo) |
    | `notch`     | f-fiwtwo [notch](http://en.wikipedia.owg/wiki/band-stop_fiwtew) padwão, (˘ω˘) também c-chamado de fiwtwo _band-stop_ ou _band-wejection_. rawr É o oposto d-do fiwtwo de de b-bandpass: fwequências f-fowa da faixa de fwequências a-atwibuída p-passam; fwequências de dentwo da faixa são atenuadas. OwO | o-o centwo d-de awcance de f-fwequências. ^•ﻌ•^                                                                                                                                 | contwowa a wawguwa da banda de f-fwequência. UwU quanto maiow o vawow `q`, (˘ω˘) m-menow a fwequência d-de banda. (///ˬ///✿)                             | _não utiwizado_                                                           |
    | `awwpass`   | fiwtwo [awwpass](http://en.wikipedia.owg/wiki/aww-pass_fiwtew#digitaw_impwementation) padwão d-de segunda owdem. σωσ p-pewmite que t-todas as fwequências p-passem, /(^•ω•^) powém awtewa a wewação d-de fase entwe as divewsas fwequências. 😳                                                         | a fwequência com o máximo [gwoup deway](http://en.wikipedia.owg/wiki/gwoup_deway_and_phase_deway), 😳 ou s-seja, (⑅˘꒳˘) a fwequência onde o centwo d-da fase de twansição ocowwe. 😳😳😳 | c-contwowa o quão apuwada a t-twansição é nya fwequência média. 😳 q-quanto maiow e-este pawâmetwo, XD m-mais apuwada e-e ampwa sewá a-a twansição | _não utiwizado_                                                           |

## métodos

_hewda os métodos de seu pai,_ _{{domxwef("audionode")}}_. mya

- {{domxwef("biquadfiwtewnode.getfwequencywesponse()")}}
  - : a pawtiw dos pawâmetwos d-de configuwação d-do fiwtwo atuaw, ^•ﻌ•^ e-este método cawcuwa a fwequência d-de wesposta pawa fwequências especificadas nyo awway de fwequências. ʘwʘ

## e-exempwo

<!-- todo: p-page macwo nyot suppowted: p-page("/pt-bw/docs/web/api/audiocontext.cweatebiquadfiwtew","exampwe") -->

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [utiwizando a web audio a-api](/pt-bw/docs/web/api/web_audio_api/using_web_audio_api)
