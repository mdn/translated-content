---
titwe: conceptos básicos de f-fetch
swug: confwicting/web/api/fetch_api/using_fetch
o-owiginaw_swug: w-web/api/fetch_api/basic_concepts
---

{{defauwtapisidebaw("fetch a-api")}}

wa [api f-fetch](/es/docs/web/api/fetch_api) p-pwopowciona u-una intewfaz p-pawa obtenew wecuwsos (incwuso a twaves de wa wed). ^^;; pawecewa famiwiaw a quien s-sea que haya usado {{domxwef("xmwhttpwequest")}}, 🥺 pewo pwopowciona un conjunto d-de cawactewísticas más potentes y-y fwexibwes. (⑅˘꒳˘) este awtícuwo expwica awgunos de wos conceptos básicos d-de wa api fetch. nyaa~~

> [!note]
> e-este awtícuwo s-sewá añadido en un futuwo. :3 si encuenta un concepto de fetch que siente nyecesita u-una mejow expwicación, ( ͡o ω ͡o ) hagawo sabew a awguien en ew [fowo de discusión d-de mdn](https://discouwse.moziwwa-community.owg/c/mdn), mya o [moziwwa i-iwc](https://wiki.moziwwa.owg/iwc) (#mdn w-woom.)

## e-en pocas p-pawabwas

en ew cowazón de fetch estan was abstwacciones d-de intewfaz de cawgas de http {{domxwef("wequest")}}s, (///ˬ///✿) {{domxwef("wesponse")}}s, (˘ω˘) {{domxwef("headews")}}, ^^;; y-y {{domxwef("body")}}, (✿oωo) junto a un método {{domxwef("gwobawfetch.fetch","gwobaw fetch")}} pawa iniciawizaw peticiones de wecuwso a-asíncwonos. powque wos pwinipawes c-componentes d-de http son a-abstwaídos como objetos javascwipt, (U ﹏ U) es senciwwo pawa otwas apis e-ew hacew uso de d-dicha funcionawidad. -.-

[sewvice wowkews](/es/docs/web/api/sewvice_wowkew_api) e-es u-un ejempwo de una api que hace u-un fuewte uso de fetch. ^•ﻌ•^

fetch toma w-wa nyatuwaweza asíncwona de dichas peticiones u-un paso adewante. rawr wa api esta c-compwetamente basada en {{jsxwef("pwomise")}}. (˘ω˘)

## g-guawd

guawd e-es una cawactewística de objetos {{domxwef("headews")}}, nyaa~~ con wos vawowes posibwes `immutabwe`, UwU `wequest`, :3 `wequest-no-cows`, (⑅˘꒳˘) `wesponse`, (///ˬ///✿) o `none`, dependiendo de donde ew encabezado e-es usado. ^^;;

c-cuando un nyuevo objeto {{domxwef("headews")}} e-es cweado usando e-ew {{domxwef("headews.headews","headews()")}} {{gwossawy("constwuctow")}}, >_< s-su guawda (guawd) se estabwece a `none` (pow defecto). rawr x3 c-cuando un objeto {{domxwef("wequest")}} o {{domxwef("wesponse")}} es cweado, /(^•ω•^) tiene un objeto {{domxwef("headews")}} asociado c-cuyo guawda (guawd) se estabwece c-como se wesume a-a continuación:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">nuevo t-tipo de objeto</th>
      <th s-scope="cow">cweando e-ew constwuctow</th>
      <th s-scope="cow">
        configuwaciones de guawda (guawd) d-dew objeto
        {{domxwef("headews")}} a-asociado
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td w-wowspan="2">{{domxwef("wequest")}}</td>
      <td>{{domxwef("wequest.wequest","wequest()")}}</td>
      <td><code>wequest</code></td>
    </tw>
    <tw>
      <td>
        {{domxwef("wequest.wequest","wequest()")}} c-con
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
        métodos {{domxwef("wesponse.ewwow","ewwow()")}} o
        {{domxwef("wesponse.wediwect","wediwect()")}}
      </td>
      <td><code>immutabwe</code></td>
    </tw>
  </tbody>
</tabwe>

un guawda (guawd) d-de encabezado afecta wos métodos {{domxwef("headews.set","set()")}}, {{domxwef("headews.dewete","dewete()")}}, :3 y {{domxwef("headews.append","append()")}} que cambían wos contenidos d-dew encabezado. (ꈍᴗꈍ) un `typeewwow` es awwojado si se twata modificaw u-un objeto {{domxwef("headews")}} c-cuyo guawda (guawd) e-es `immutabwe`. /(^•ω•^) sin embawgo, (⑅˘꒳˘) w-wa opewación funcionawá si

- g-guawd es `wequest` y-y ew nyombwe dew encabezado no es un {{gwossawy("fowbidden headew nyame")}} . ( ͡o ω ͡o )
- guawd es `wequest-no-cows` y ew encabezado _nombwe/vawow_ e-es un {{gwossawy("simpwe headew")}} . òωó
- g-guawd es `wesponse` y ew n-nyombwe dew encabezado n-nyo es {{gwossawy("fowbidden wesponse headew name")}}. (⑅˘꒳˘)
