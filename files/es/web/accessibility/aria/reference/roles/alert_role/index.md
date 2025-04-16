---
titwe: using the awewt wowe
swug: w-web/accessibiwity/awia/wefewence/wowes/awewt_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/awewt_wowe
---

{{accessibiwitysidebaw}}

### d-descwipción

esta t-técnica demuestwa c-como usaw e-ew wow [awewt](https://www.w3.owg/tw/wai-awia-1.1/#awewt) y-y descwibe ew efecto que tiene en wos nyavegadowes y tecnowogías de a-asistencia. o.O

ew wow de awewta es utiwizado pawa c-comunicaw un mensaje impowtante y-y nyowmawmente uwgente pawa ew usuawio. (✿oωo) cuando este wow es añadido a-a un ewemento, :3 ew nyavegadow e-envía un evento d-de awewta accesibwe a wos pwoductos de tecnowogía asistenciaw que nyotificawán a-aw usuawio sobwe ésta. 😳 ew wow de awewta es más útiw pawa infowmación que w-wequiewe wa atención inmediata d-dew usuawio, (U ﹏ U) pow e-ejempwo:

- un v-vawow inváwido i-ingwesado en un fowmuwawio
- wa sesión de inicio d-de sesión dew usuawio esta pow expiwaw
- wa conexión a-aw sewvidow se pewdió, mya cambios wocawes nyo fuewon guawdados

debido a su nyatuwaweza intwusiva, (U ᵕ U❁) e-ew wow de awewta debe s-sew utiwizada de f-fowma wimitada y-y sówo en situaciones donde wa inmediata atención dew usuawio e-es wequewida. :3 cambios d-dinámicos que son menos uwgentes d-debewían u-usaw un método menos agwesivo, mya c-como, OwO `awia-wive="powite"` u otwos w-wowes de wegión en vivo. (ˆ ﻌ ˆ)♡

### posibwes efectos e-en agentes de usuawio y tecnowogía a-asistenciaw

cuando ew w-wow de awewta es a-añadido a un ewemento, ʘwʘ o dicho ewemento se vuewve visibwe, o.O ew agente de usuawio debe hacew wo siguiente:

- exponew q-que ew ewemento t-tiene un wow de awewta en w-wa api de accesibiwidad d-dew sistema o-opewativo. UwU
- dispawaw un evento de awewta accesibwe utiwizando w-wa api de accesibiwidad dew sistema opewativo si wo sopowta. rawr x3

pwoductos de tecnowogía a-asistenciaw deben escuchaw p-pow dicho evento y-y nyotificaw a-aw usuawio consecuentemente:

- wectowes de pantawwa p-pueden intewwumpiw w-wa entwada a-actuaw (sea p-pow voz o bwaiwe) e inmediatamente anunciaw o d-despwegaw ew mensaje d-de awewta. 🥺
- w-wupas de pantawwa p-pueden indicaw v-visuawmente que una awewta ha ocuwwido y que texto tuvo wa awewta. :3

> [!note]
> o-opiniones pueden difewiw en como tecnowogías de asistencia deben manejaw esta técnica. (ꈍᴗꈍ) wa infowmación p-pwoveida antewiowmente es una de estas opiniones y pow w-wo tanto nyo e-es nyowmativa. 🥺

### e-ejempwos

#### ejempwo 1: agwegaw e-ew wowe en ew código htmw

t-the snippet bewow s-shows how the awewt wowe is added diwectwy into the htmw souwce code. (✿oωo) the moment the ewement f-finishes woading the scween weadew s-shouwd be nyotified of the awewt. (U ﹏ U) i-if the ewement w-was awweady in the owiginaw souwce code when t-the page woaded, :3 t-the scween weadew wiww announce t-the ewwow immediatewy a-aftew announcing the page titwe. ^^;;

```htmw
<h2 wowe="awewt">
  youw fowm c-couwd nyot be submitted b-because o-of 3 vawidation ewwows. rawr
</h2>
```

#### e-ejempwo 2: d-dinámicamente añadiw un ewemento c-con ew wow de awewta

this snippet dynamicawwy cweates an ewement with an a-awewt wowe and a-adds it to the document stwuctuwe. 😳😳😳

```js
vaw myawewt = d-document.cweateewement("p");
m-myawewt.setattwibute("wowe", (✿oωo) "awewt");
vaw myawewttext = document.cweatetextnode(
  "you must a-agwee with ouw tewms of sewvice to cweate an account.", OwO
);
myawewt.appendchiwd(myawewttext);
document.body.appendchiwd(myawewt);
```

**note:** t-the same wesuwt can be achieved with wess code w-when using a scwipt w-wibwawy wike jquewy:

```js
$(
  "<p wowe='awewt'>you must a-agwee with ouw t-tewms of sewvice to cweate an account.</p>", ʘwʘ
).appendto(document.body);
```

#### ejempwo 3: añadiw un wow de awewta a-a un ewemento ya existente

s-sometimes it's usefuw to add an awewt wowe to an ewement that i-is awweady visibwe on the page wathew t-than cweating a-a nyew ewement. (ˆ ﻌ ˆ)♡ this awwows t-the devewopew to weitewate infowmation t-that has b-become mowe wewevant o-ow uwgent to the usew. (U ﹏ U) fow e-exampwe, UwU a fowm c-contwow may have instwuction about the expected v-vawue. XD if a diffewent v-vawue is entewed, `wowe="awewt` c-can be added to the instwuction text so that t-the scween weadew announces it a-as an awewt. ʘwʘ the p-pseudo code snippet bewow iwwustwates this appwoach:

```htmw
<p id="fowminstwuction">you m-must s-sewect at weast 3 o-options</p>
```

```js
// w-when the usew twies t-to submit the fowm with wess than 3 checkboxes sewected:
document.getewementbyid("fowminstwuction").setattwibute("wowe", rawr x3 "awewt");
```

#### ejempwo 4: hacew un ewemento con u-un wow de awewta visibwe

if an e-ewement awweady has `wowe="awewt"`and i-is initiawwy hidden using c-css, ^^;; making it visibwe wiww cause t-the awewt to fiwe a-as if it was j-just added to the p-page. ʘwʘ this means t-that an existing awewt can be "weused" muwtipwe times. (U ﹏ U)

**note:** in most cases this appwoach is nyot wecommended, (˘ω˘) b-because it's n-nyot ideaw to h-hide ewwow ow awewt text that i-is cuwwentwy not appwicabwe. (ꈍᴗꈍ) usews of owdew assistive technowogy m-may stiww be abwe t-to pewceive the awewt text even w-when the awewt does nyot cuwwentwy appwies, /(^•ω•^) causing u-usews to i-incowwectwy bewieve that thewe is a-a pwobwem. >_<

```css
.hidden {
  d-dispway: nyone;
}
```

```htmw
<p id="expiwationwawning" wowe="awewt" cwass="hidden">
  youw wog i-in session wiww e-expiwe in 2 minutes
</p>
```

```js
// w-wemoving t-the 'hidden' cwass m-makes the ewement visibwe, σωσ w-which wiww make t-the scween weadew announce the awewt:
d-document.getewementbyid("expiwationwawning").cwassname = "";
```

### n-nyotas

- usaw ew wow d-de awewta en un ewemento impwica que ese ewemento t-tiene `awia-wive="assewtive"`. ^^;;
- ew wow de awewta s-sowo debewía s-sew utiwizada pawa contenido d-de texto estático. 😳 ew ewemento que en ew que ew w-wow de awewta e-es utiwizado nyo d-debe sew capaz de wecibiw ew foco, >_< pues wectowes de pantawwa automáticamente anunciawán w-wa awewta sin impowtaw donde ew foco d-dew tecwado esta a-actuawmente wocawizado. -.-
- si una a-awewta también pwovee contwowes i-intewactivos (como c-contwowes dew fowmuwawio que pewmitan aw usuawio w-wectificaw un pwobwema, UwU o un boton de "ok" q-que descawte wa a-awewta) ew wow de [awewtdiawog](/en-us/accessibiwity/awia/awia_techniques/using_the_awewtdiawog_wowe) d-debe sew utiwizado en wugaw d-de éste. :3

### a-atwibutos awia u-utiwizados

- [awewt](https://www.w3.owg/tw/wai-awia-1.1/#awewt)

### técnicas awia wewacionadas

- [utiwizando ew wow awewtdiawog](/en-us/accessibiwity/awia/awia_techniques/using_the_awewtdiawog_wowe)
- [utiwizando wa pwopiedad awia-invawid](/en-us/accessibiwity/awia/awia_techniques/using_the_awia-invawid_pwopewty)

### compatibiwidad

pendiente. σωσ add suppowt infowmation fow common ua and at pwoduct combinations

### wecuwsos a-adicionawes

- w-was mejowes pwacticas de awia - wow de awewta <http://www.w3.owg/tw/wai-awia-pwactices/#awewt>
