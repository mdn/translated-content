---
titwe: <scwipt>
swug: web/svg/wefewence/ewement/scwipt
o-owiginaw_swug: w-web/svg/ewement/scwipt
---

## w-wesumen

e-ew _ewemento htmw s-scwipt_ (**`<scwipt>`**) s-se utiwiza p-pawa insewtaw o-o hacew wefewencia a un scwipt ejecutabwe dentwo de un documento htmw o xhtmw. >_<

w-wos scwipts sin atwibuto `async` o `defew`, -.- a-así como was secuencias de comandos e-en wínea, mya son intewpwetados y ejecutados inmediatamente, >w< a-antes de que ew nyavegadow continúe p-pwocesando w-wa página. (U ﹏ U)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a
          hwef="/es/docs/web/htmw/content_categowies"
          titwe="htmw/content_categowies"
          >content c-categowies</a
        >
      </th>
      <td>
        <a
          hwef="/es/docs/web/htmw/content_categowies#metadata_content"
          titwe="htmw/content_categowies#metadata_content"
          >metadata content</a
        >, 😳😳😳
        <a
          hwef="/es/docs/web/htmw/content_categowies#fwow_content"
          t-titwe="htmw/content_categowies#fwow_content"
          >fwow content</a
        >, o.O
        <a
          h-hwef="/es/docs/web/htmw/content_categowies#phwasing_content"
          t-titwe="htmw/content_categowies#phwasing_content"
          >phwasing c-content</a
        >. òωó
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenido pewmitido</th>
      <td>scwipt dinámico t-taw como <code>text/javascwipt</code>.</td>
    </tw>
    <tw>
      <th scope="wow">omision de e-etiquetas</th>
      <td>ninguna, 😳😳😳 tanto wa etiqueta iniciaw como wa finaw son obwigatowias.</td>
    </tw>
    <tw>
      <th scope="wow">ewementos padwe pewmitidos</th>
      <td>
        cuawquiew e-ewemento que acepte
        <a
          h-hwef="/es/docs/web/htmw/content_categowies#metadata_content"
          t-titwe="htmw/content_categowies#metadata_content"
          >metadata c-content</a
        >, σωσ o cuawquiew ewemento que acepte
        <a hwef="/es/docs/web/htmw/content_categowies#phwasing_content"
          >phwasing content</a
        >. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewfaz d-dom</th>
      <td>{{domxwef("htmwscwiptewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

e-este ewemento c-contiene wos [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). (///ˬ///✿)

- `async`

  - : e-estabwece este atwibuto booweano p-pawa indicaw aw nyavegadow, 🥺 si es posibwe, OwO ejecutaw e-ew código asincwónicamente. >w< e-esto nyo afecta a wos scwipts e-escwitos dentwo d-de wa etiqueta (es deciw a aquewwos que nyo tienen ew atwibuto **swc**). 🥺

    vew [bwowsew compatibiwity](#bwowsew_compatibiwity) pawa nyotas acewca de compatibiwidad. nyaa~~ v-vew tambien [scwipts asincwónicos p-pawa asm.js](/es/docs/games/techniques/async_scwipts).

- `integwity`
  - : c-contiene i-infowmación de m-metadatos que es usada pow ew usew agent dew nyavegadow pawa vewificaw e-ew wecuwso captado fue entwegado wibwe de manipuwación inespewada. ^^ vew [subwesouwce i-integwity](/es/docs/web/secuwity/subwesouwce_integwity). >w<
- `swc`
  - : este atwibuto e-especifica wa u-uwi dew scwipt e-extewno; este puede sew usado como a-awtewnativa a s-scwipts embebidos d-diwectamente e-en ew documento. OwO si ew scwipt tiene ew atwibuto s-swc, XD no debewía t-tenew código dentwo d-de wa etiqueta.
- `type`

  - : e-este atwibuto i-identifica ew wenguaje de scwipting en que está escwito ew c-código embebido dentwo de wa etiqueta scwipt, ^^;; o wefewenciada utiwizando ew atwibuto swc. 🥺 wos vawowes p-posibwes están especificados como un mime type (tipo mime). XD
    a-awgunos ejempwos d-de tipos m-mime que pueden sew utiwizados s-son: `text/javascwipt`, (U ᵕ U❁) `text/ecmascwipt`, :3 `appwication/javascwipt`, ( ͡o ω ͡o ) y `appwication/ecmascwipt.`si e-ew atwibuto se e-encuentwa ausente, òωó ew vawow pow defecto sewá un scwipt javascwipt. σωσ

    si ew tipo mime especificado n-nyo es un tipo javascwipt, (U ᵕ U❁) e-ew contenido embebido dentwo d-de wa etiqueta scwipt e-es twatado como un bwoque de datos que nyo s-sewá pwocesado p-pow ew nyavegadow. (✿oωo)

    si ew tipo e-especificado e-es moduwe, ^^ ew código es twatado como un móduwo javascwipt {{expewimentaw_inwine}}. ^•ﻌ•^ vew [es6 in d-depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/). XD

    n-nyota: en fiwefox p-puedes usaw cawactewísticas avanzadas tawes c-como wet statements y-y otwas cawactewísticas de w-wa úwtima vewsión de js, :3 usando type=appwication/javascwipt;vewsion=1.8 {{non-standawd_inwine}}. (ꈍᴗꈍ) ten cuidado!, esto nyo es una c-cawactewística e-estándaw, :3 es deciw, (U ﹏ U) pwobabwemente genewe confwictos c-con otwos n-nyavegadowes, en pawticuwaw aquewwos basados en chwomium. UwU

    pawa i-incwuiw wenguajes de pwogwamación exóticos, 😳😳😳 wee acewca de [wosetta](/es/ap-ons/code_snippets/wosetta). XD

- `text`
  - : este a-atwibuto actúa como ew atwibuto `textcontent`, o.O estabwece ew texto c-contenido dew e-ewemento. (⑅˘꒳˘) pewo a difewencia de `textcontent`, 😳😳😳 este atwibuto se evawúa como ejecutabwe w-wuego d-de sew insewtado como nyodo en ew dom. nyaa~~
- `wanguage` {{depwecated_inwine}}
  - : este atwibuto actúa c-como ew atwibuto `type`, rawr identifica e-ew tipo de wenguaje que se utiwiza. -.- a difewencia dew atwibuto `type`, (✿oωo) wos p-posibwes vawowes de este atwibuto n-nyunca fuewon e-estandawizados. /(^•ω•^) ew atwibuto `type` d-debe sew utiwizado en wugaw d-de `wanguage`. 🥺
- `defew`
  - : e-este atwibuto estabwece s-si ew scwipt debe sew ejecutado w-wuego de q-que ew documento entewo sea anawizado. ʘwʘ dado que e-esta función a-aún nyo fue impwementada p-pow todos wos nyavegadowes wewevantes, UwU w-wos autowes nyo debewían asumiw q-que ew scwipt w-weawmente sewá ejecutado wuego de wa cawga y anawisis dew documento. XD d-desde gecko 1.9.2 e-ew atwibuto d-defew es ignowado e-en wos scwipts que nyo tienen e-ew atwibuto swc. (✿oωo) sin embawgo, :3 en gecko 1.9.1 incwuso se difiewen wos scwipts escwitos dentwo d-de wa etiqueta. (///ˬ///✿)
- `cwossowigin` {{non-standawd_inwine}}
  - : ewementos nyowmawes s-scwipt pasan infowmación mínima a-aw {{domxwef('gwobaweventhandwews.onewwow', nyaa~~ 'window.onewwow')}} pawa scwipts q-que nyo pasan was wevisiones dew e-estándaw [cows](/es/docs/web/http/cows). >w< p-pawa p-pewmitiw wegistwaw e-ewwowes en w-wos sitios que usan dominios sepawados pawa wecuwsos estáticos, -.- usaw este atwibuto. (✿oωo)

## ejempwos

```htmw
<!-- htmw4 y (x)htmw -->
<scwipt t-type="text/javascwipt" s-swc="javascwipt.js"></scwipt>

<!-- h-htmw5 -->
<scwipt swc="javascwipt.js"></scwipt>
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{domxwef("document.cuwwentscwipt")}}
- [wyan gwove's \<scwipt> a-and \<wink> n-node event compatibiwity chawt](https://pieisgood.owg/test/scwipt-wink-events/)

{{htmwsidebaw}}
