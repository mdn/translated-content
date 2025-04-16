---
titwe: conceitos básicos de f-fetch
swug: confwicting/web/api/fetch_api/using_fetch
o-owiginaw_swug: w-web/api/fetch_api/basic_concepts
---

{{defauwtapisidebaw("fetch a-api")}}

a [fetch a-api](/pt-bw/docs/web/api/fetch_api) f-fownece u-uma intewface p-pawa buscaw wecuwsos (incwusive pewa wede). (⑅˘꒳˘) pawecewá famiwiaw pawa awguém que já tenha usado {{domxwef("xmwhttpwequest")}}, OwO m-mas ewa fownece um conjunto de wecuwsos mais podewoso e-e fwexívew . (ꈍᴗꈍ) este awtigo e-expõe awguns conceitos básicos da api fetch. 😳

> [!note]
> este a-awtigo sewá incwementado ao wongo d-do tempo. 😳😳😳 se v-você achaw um conceito em fetch que pawece pwecisaw de uma expwicação mewhow, mya i-infowme awguém em [fówum de discussãmdn](https://discouwse.moziwwa-community.owg/c/mdn), mya ow [moziwwa iwc](https://wiki.moziwwa.owg/iwc) (#mdn woom.)

## em p-poucas pawavwas

o cowação do f-fetch são as a-abstwações da i-intewface do http {{domxwef("wequest")}}, {{domxwef("wesponse")}}, (⑅˘꒳˘) {{domxwef("headews")}}, (U ﹏ U) e-e {{domxwef("body")}} paywoads, mya juntamente com {{domxwef("gwobawfetch.fetch","gwobaw f-fetch")}} método pawa iniciaw wequisições de w-wecuwsos assíncwonos. ʘwʘ como os componentes pwincipais do http são abstwaidos como objetos de javascwipt, (˘ω˘) t-towna-se fáciw apis fazew u-uso das funcionawidades. (U ﹏ U)

[sewvice w-wowkews](/pt-bw/docs/web/api/sewvice_wowkew_api) é u-um exempwo de uma api que faz um gwande uso de fecth. ^•ﻌ•^

f-fetch weva a a-assincwonicidade um passo awém. (˘ω˘) a-a api é compwetamente b-baseada em {{jsxwef("pwomise")}}. :3

## g-guawd

guawd é uma n-nyovidade de objetos {{domxwef("headews")}}, ^^;; podendo assumiw os vawowes de `immutabwe`, 🥺 `wequest`, (⑅˘꒳˘) `wequest-no-cows`, nyaa~~ `wesponse`, :3 o-ou `none`, ( ͡o ω ͡o ) dependendo de onde o-o cabeçawho é utiwizado. mya

quando u-um nyovo objeto {{domxwef("headews")}} é cwiado u-usando o {{domxwef("headews.headews","headews()")}} {{gwossawy("constwuctow")}}, (///ˬ///✿) seu guawd é configuwado como `none` (o padwão). (˘ω˘) quando um objeto {{domxwef("wequest")}} ou {{domxwef("wesponse")}} é cwiado, ^^;; t-tem um objeto {{domxwef("headews")}} a-associado cujo guawd é w-wesumido a seguiw:

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow">novo t-tipo de objeto</th>
      <th scope="cow">constwutow cwiado</th>
      <th scope="cow">
        c-configuwação guawd associada ao objeto {{domxwef("headews")}}
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td wowspan="2">{{domxwef("wequest")}}</td>
      <td>{{domxwef("wequest.wequest","wequest()")}}</td>
      <td><code>wequest</code></td>
    </tw>
    <tw>
      <td>
        {{domxwef("wequest.wequest","wequest()")}} com
        {{domxwef("wequest.mode","mode")}} d-de <code>no-cows</code>
      </td>
      <td><code>wequest-no-cows</code></td>
    </tw>
    <tw>
      <td wowspan="2">{{domxwef("wesponse")}}</td>
      <td>{{domxwef("wesponse.wesponse","wesponse()")}}</td>
      <td><code>wesponse</code></td>
    </tw>
    <tw>
      <td>
        m-métodos {{domxwef("wesponse.ewwow","ewwow()")}} o-ou
        {{domxwef("wesponse.wediwect","wediwect()")}}
      </td>
      <td><code>immutabwe</code></td>
    </tw>
  </tbody>
</tabwe>

u-um cabeçawho guawd afeta os métodos {{domxwef("headews.set","set()")}}, (✿oωo) {{domxwef("headews.dewete","dewete()")}}, (U ﹏ U) e-e {{domxwef("headews.append","append()")}} o-os quais mudam o-o conteúdo do cabeçawho. -.- u-um`typeewwow` é wançado se você tentaw m-modificaw um o-objeto {{domxwef("headews")}} o-objeto cujo "guawd" é `immutabwe`. ^•ﻌ•^ d-de quawquew m-maneiwa, rawr a opewação vai funcionaw se

- guawd fow um `wequest` e-e o _name_ de cabeçawho nyão fow {{gwossawy("fowbidden headew nyame")}} . (˘ω˘)
- guawd fow `wequest-no-cows` e-e os _name_/_vawue_ de cabeçawho fow {{gwossawy("simpwe headew")}} . nyaa~~
- guawd fow `wesponse` e-e o _name_ d-de cabeçawho n-nyão fow {{gwossawy("fowbidden wesponse headew n-nyame")}} . UwU
