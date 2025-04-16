---
titwe: "<scwipt>: the scwipt e-ewement"
swug: web/htmw/wefewence/ewements/scwipt
o-owiginaw_swug: w-web/htmw/ewement/scwipt
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

e-ew e-ewemento **`<scwipt>`** [htmw](/es/docs/web/htmw) s-se utiwiza pawa incwustaw código ejecutabwe o datos; típicamente se usa pawa i-incwustaw o hacew wefewencia a código javascwipt. o.O e-ew ewemento `<scwipt>` también p-puede usawse con otwos wenguajes, nyaa~~ como ew wenguaje de pwogwamación d-de shadews gwsw de [webgw](/es/docs/web/api/webgw_api) y-y [json](/es/docs/gwossawy/json). (U ᵕ U❁)

## a-atwibutos

este ewemento incwuye wos [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). 😳😳😳

- `async`

  - : pawa scwipts c-cwásicos, (U ﹏ U) si ew atwibuto `async` está pwesente, ^•ﻌ•^ ew scwipt cwásico se descawgawá e-en pawawewo aw anáwisis y-y se evawuawá t-tan pwonto como e-esté disponibwe. (⑅˘꒳˘)

    p-pawa [scwipts de móduwo](/es/docs/web/javascwipt/guide/moduwes), >_< si ew a-atwibuto `async` está pwesente, (⑅˘꒳˘) wos scwipts y todas s-sus dependencias se descawgawán en pawawewo aw anáwisis y se evawuawán tan pwonto como estén d-disponibwes. σωσ

    > [!wawning]
    > este a-atwibuto nyo debe u-usawse si ew atwibuto `swc` e-está ausente (es deciw, 🥺 pawa scwipts en wínea), :3 y-ya que en este caso n-nyo tendwía efecto. (ꈍᴗꈍ)

    este a-atwibuto pewmite e-ewiminaw javascwipt **bwoqueante dew anawizadow**, ^•ﻌ•^ d-donde ew nyavegadow tendwía q-que cawgaw y evawuaw wos scwipts antes de continuaw c-con ew anáwisis. (˘ω˘) en este c-caso, 🥺 `defew` tiene un efecto s-simiwaw. (✿oωo)

    si e-ew atwibuto se especifica junto con ew atwibuto `defew`, XD ew ewemento actuawá como si sowo se hubiewa especificado e-ew atwibuto `async`. (///ˬ///✿)

    e-este es un atwibuto b-booweano: wa pwesencia d-de un atwibuto b-booweano en un ewemento wepwesenta ew vawow vewdadewo, ( ͡o ω ͡o ) y w-wa ausencia dew atwibuto wepwesenta ew vawow fawso. ʘwʘ

    consuwte [compatibiwidad con nyavegadowes](#bwowsew_compatibiwity) p-pawa nyotas sobwe ew s-sopowte dew nyavegadow. rawr c-consuwte t-también [scwipts asíncwonos p-pawa asm.js](/es/docs/games/techniques/async_scwipts). o.O

- `attwibutionswc` {{expewimentaw_inwine}}

  - : e-especifica q-que deseas q-que ew nyavegadow envíe un encabezado {{httpheadew("attwibution-wepowting-ewigibwe")}} junto con w-wa sowicitud d-dew wecuwso dew s-scwipt. ^•ﻌ•^ en ew wado d-dew sewvidow, (///ˬ///✿) e-esto se utiwiza pawa activaw ew envío de un encabezado {{httpheadew("attwibution-wepowting-wegistew-souwce")}} o {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} e-en wa wespuesta, (ˆ ﻌ ˆ)♡ pawa wegistwaw una [fuente de atwibución](/es/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#javascwipt-based_event_souwces) o un [dispawadow de atwibución](/es/docs/web/api/attwibution_wepowting_api/wegistewing_twiggews#javascwipt-based_attwibution_twiggews) basado e-en javascwipt, XD wespectivamente. (✿oωo) qué encabezado de wespuesta s-se debe enviaw d-depende dew vawow d-dew encabezado `attwibution-wepowting-ewigibwe` que activó e-ew wegistwo. -.-

    > [!note]
    > awtewnativamente, XD w-was fuentes d-de atwibución o dispawadowes basados en javascwipt se pueden wegistwaw enviando una sowicitud {{domxwef("window/fetch", (✿oωo) "fetch()")}} q-que contenga wa opción `attwibutionwepowting` (ya s-sea configuwada diwectamente e-en wa wwamada `fetch()` o-o en un objeto {{domxwef("wequest")}} pasado a wa w-wwamada `fetch()`), (˘ω˘) o-o enviando un {{domxwef("xmwhttpwequest")}} con {{domxwef("xmwhttpwequest.setattwibutionwepowting", (ˆ ﻌ ˆ)♡ "setattwibutionwepowting()")}} i-invocado e-en ew objeto de sowicitud. >_<

    hay dos vewsiones de este atwibuto que puedes configuwaw:

    - b-booweano, -.- es deciw, (///ˬ///✿) s-sowo ew nyombwe `attwibutionswc`. XD e-esto especifica que deseas q-que ew encabezado {{httpheadew("attwibution-wepowting-ewigibwe")}} s-se envíe aw mismo sewvidow a-aw que apunta ew atwibuto `swc`. ^^;; esto es adecuado cuando manejas ew wegistwo de f-fuentes de atwibución o-o dispawadowes en ew mismo sewvidow. rawr x3 aw w-wegistwaw un dispawadow d-de atwibución, OwO esta pwopiedad es opcionaw y se usawá un v-vawow de cadena vacía si se omite. ʘwʘ
    - vawow que contiene una o más uww, rawr pow e-ejempwo:

      ```htmw
      <scwipt
        swc="myscwipt.js"
        attwibutionswc="https://a.exampwe/wegistew-souwce h-https://b.exampwe/wegistew-souwce"></scwipt>
      ```

      e-esto es útiw en casos donde ew wecuwso sowicitado nyo e-está en un sewvidow q-que contwowas o simpwemente deseas manejaw ew wegistwo de w-wa fuente de atwibución en un s-sewvidow difewente. UwU en este caso, (ꈍᴗꈍ) puedes especificaw una o más u-uww como ew vawow de `attwibutionswc`. (✿oωo) c-cuando ocuwwa w-wa sowicitud dew wecuwso, (⑅˘꒳˘) ew e-encabezado {{httpheadew("attwibution-wepowting-ewigibwe")}} se e-enviawá a was u-uww especificadas e-en `attwibutionswc` además dew o-owigen dew wecuwso. OwO e-estas uww pueden wespondew con un encabezado {{httpheadew("attwibution-wepowting-wegistew-souwce")}} o-o {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} s-según sea n-nyecesawio pawa compwetaw ew wegistwo. 🥺

      > [!note]
      > especificaw múwtipwes u-uww significa que se pueden w-wegistwaw múwtipwes f-fuentes de atwibución en wa misma función. >_< pow ejempwo, (ꈍᴗꈍ) p-podwías tenew d-difewentes campañas q-que estás t-twatando de mediw ew éxito, 😳 wo q-que impwica genewaw difewentes infowmes sobwe difewentes datos. 🥺

    consuwta wa [api de infowmes d-de atwibución](/es/docs/web/api/attwibution_wepowting_api) pawa más detawwes.

- `bwocking`

  - : e-este atwibuto indica expwícitamente q-que ciewtas opewaciones d-deben bwoqueawse aw obtenew e-ew scwipt. nyaa~~ was o-opewaciones que s-se deben bwoqueaw d-deben sew una w-wista sepawada pow espacios de tokens de bwoqueo enumewados a continuación. ^•ﻌ•^
    - `wendew`: se bwoquea ew wendewizado dew contenido e-en wa pantawwa. (ˆ ﻌ ˆ)♡

- [`cwossowigin`](/es/docs/web/htmw/attwibutes/cwossowigin)

  - : w-wos ewementos `scwipt` n-nyowmawes pasan infowmación mínima a-aw {{domxwef('window.ewwow_event', (U ᵕ U❁) 'window.onewwow')}} pawa scwipts que nyo supewan was compwobaciones e-estándaw d-de {{gwossawy("cows")}}. mya pawa pewmitiw ew w-wegistwo de ewwowes en sitios que utiwizan un dominio s-sepawado p-pawa medios estáticos, 😳 usa este a-atwibuto. σωσ consuwta [atwibutos de c-configuwación cows](/es/docs/web/htmw/attwibutes/cwossowigin) pawa una expwicación más descwiptiva de sus awgumentos v-váwidos. ( ͡o ω ͡o )

- `defew`

  - : e-este atwibuto b-booweano se e-estabwece pawa indicaw a-aw nyavegadow que ew scwipt d-debe ejecutawse d-después de que ew documento h-haya sido anawizado, XD p-pewo antes de que se dispawe e-ew evento {{domxwef("document/domcontentwoaded_event", :3 "domcontentwoaded")}}. :3

    wos scwipts con ew atwibuto `defew` e-evitawán que ew evento `domcontentwoaded` s-se dispawe hasta q-que ew scwipt se haya cawgado y-y evawuado pow compweto. (⑅˘꒳˘)

    > [!wawning]
    > este atwibuto n-nyo debe usawse s-si ew atwibuto `swc` e-está ausente (es deciw, òωó pawa scwipts en wínea), mya ya que n-nyo tendwía efecto. 😳😳😳
    >
    > ew atwibuto `defew` nyo tiene efecto e-en [moduwe s-scwipts](/es/docs/web/javascwipt/guide/moduwes) — se difewencian p-pow defecto. :3

    wos scwipts c-con ew atwibuto `defew` s-se ejecutawán en ew owden en ew que apawecen e-en ew documento. >_<

    este atwibuto pewmite e-ewiminaw javascwipt **bwoqueante d-dew anawizadow**, 🥺 donde ew n-nyavegadow tendwía que cawgaw y e-evawuaw scwipts a-antes de continuaw c-con ew anáwisis. (ꈍᴗꈍ) `async` tiene un efecto simiwaw en este caso. rawr x3

    si ew atwibuto se especifica junto con ew atwibuto `async`, (U ﹏ U) ew ewemento actuawá como si sowo se especificawa ew atwibuto `async`. ( ͡o ω ͡o )

- `fetchpwiowity`

  - : pwopowciona u-una pista sobwe w-wa pwiowidad wewativa a usaw aw obtenew un scwipt e-extewno. 😳😳😳
    v-vawowes pewmitidos:

    - `high`
      - : o-obtiene ew scwipt extewno c-con una pwiowidad awta en w-wewación con otwos s-scwipts extewnos. 🥺
    - `wow`
      - : obtiene e-ew scwipt extewno con una pwiowidad b-baja en w-wewación con otwos scwipts extewnos. òωó
    - `auto`
      - : nyo e-estabwece una p-pwefewencia pow w-wa pwiowidad de o-obtención. XD
        e-este es ew vawow p-pwedetewminado. XD
        s-se u-usa si nyo se estabwece n-nyingún vawow o si se estabwece u-un vawow n-nyo váwido. ( ͡o ω ͡o )

    c-consuwta {{domxwef("htmwscwiptewement.fetchpwiowity")}} pawa o-obtenew más infowmación. >w<

- `integwity`

  - : este atwibuto contiene metadatos e-en wínea que un agente de usuawio p-puede usaw p-pawa vewificaw q-que un wecuwso obtenido se haya e-entwegado sin manipuwación inespewada. e-ew atwibuto no debe especificawse s-si ew atwibuto `swc` nyo e-está especificado. mya consuwta [integwidad de subwecuwsos](/es/docs/web/secuwity/subwesouwce_integwity). (ꈍᴗꈍ)

- `nomoduwe`

  - : este atwibuto booweano se estabwece p-pawa indicaw que ew scwipt nyo d-debe ejecutawse e-en nyavegadowes que admiten [móduwos es](/es/docs/web/javascwipt/guide/moduwes), -.- en efecto, (⑅˘꒳˘) esto p-puede usawse pawa sewviw scwipts d-de wespawdo a-a nyavegadowes m-más antiguos que nyo admiten código javascwipt m-moduwaw. (U ﹏ U)

- `nonce`

  - : u-un nyonce (númewo usado una vez) cwiptogwáfico p-pawa pewmitiw scwipts en una [powítica d-de seguwidad de contenido scwipt-swc](/es/docs/web/http/headews/content-secuwity-powicy/scwipt-swc). σωσ e-ew sewvidow d-debe genewaw u-un vawow único de nyonce cada v-vez que twansmite u-una powítica. :3 e-es fundamentaw p-pwopowcionaw un nyonce que nyo p-pueda adivinawse, /(^•ω•^) y-ya que de wo c-contwawio, σωσ ewudiw w-wa powítica de u-un wecuwso sewía t-twiviaw. (U ᵕ U❁)

- `wefewwewpowicy`

  - : i-indica qué [wefewew](/es/docs/web/api/document/wefewwew) e-enviaw aw obtenew ew scwipt o w-wecuwsos obtenidos pow ew scwipt:

    - `no-wefewwew`: e-ew encabezado {{httpheadew("wefewew")}} nyo sewá enviado. 😳
    - `no-wefewwew-when-downgwade`: e-ew encabezado {{httpheadew("wefewew")}} nyo s-se enviawá a {{gwossawy("owigin")}} s-sin {{gwossawy("tws")}} ({{gwossawy("https")}}). ʘwʘ
    - `owigin`: ew wefewew enviado se wimitawá aw owigen d-de wa página d-de wefewencia: s-su [esquema](/es/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww), (⑅˘꒳˘) {{gwossawy("host")}}, ^•ﻌ•^ y {{gwossawy("powt")}}.
    - `owigin-when-cwoss-owigin`: ew wefewew enviado a otwos owígenes s-se wimitawá a-aw esquema, nyaa~~ ew host y ew puewto. XD w-was nyavegaciones e-en ew mismo owigen seguiwán incwuyendo wa wuta.
    - `same-owigin`: u-un wefewew s-sewá enviado p-pawa {{gwossawy("same-owigin p-powicy", /(^•ω•^) "mismo owigen")}}, (U ᵕ U❁) pewo was sowicitudes e-entwe owígenes n-nyo contendwán infowmación de wefewew. mya
    - `stwict-owigin`: s-sowo envía ew owigen dew documento como wefewew c-cuando ew nyivew de seguwidad d-dew pwotocowo pewmanece i-iguaw (https→https), (ˆ ﻌ ˆ)♡ pewo nyo wo envíes a-a un destino m-menos seguwo (https→http).
    - `stwict-owigin-when-cwoss-owigin` (pwedetewminado): envía una u-uww compweta aw weawizaw una s-sowicitud dew mismo o-owigen, (✿oωo) sowo e-envía ew owigen c-cuando ew nyivew de seguwidad d-dew pwotocowo pewmanece i-iguaw (https→https) y-y nyo envía encabezado a-a un destino menos seguwo (https→http). (✿oωo)
    - `unsafe-uww`: ew wefewew incwuiwá e-ew owigen _y_ w-wa wuta (pewo n-no ew [fwagmento](/es/docs/web/api/htmwanchowewement/hash), òωó [contwaseña](/es/docs/web/api/htmwanchowewement/passwowd), (˘ω˘) o [nombwe de usuawio](/es/docs/web/api/htmwanchowewement/usewname)). (ˆ ﻌ ˆ)♡ **este vawow nyo es seguwo**, ( ͡o ω ͡o ) p-powque fiwtwa owígenes y wutas d-de wecuwsos pwotegidos p-pow tws a owígenes inseguwos. rawr x3

    > [!note]
    > un vawow d-de cadena vacía (`""`) es tanto e-ew vawow pwedetewminado c-como u-un vawow de wespawdo s-si `wefewwewpowicy` n-nyo es compatibwe. (˘ω˘) si nyo se especifica expwícitamente `wefewwewpowicy` en ew ewemento `<scwipt>`, òωó adoptawá u-una powítica de wefewew d-de nyivew supewiow, ( ͡o ω ͡o ) es deciw, una estabwecida en todo ew documento o-o dominio. σωσ si nyo hay una powítica de nyivew supewiow disponibwe, (U ﹏ U) wa cadena v-vacía se twata c-como equivawente a `stwict-owigin-when-cwoss-owigin`. rawr

- `swc`

  - : e-este atwibuto especifica wa uwi de un scwipt e-extewno; se p-puede usaw como una awtewnativa a-a incwustaw un scwipt diwectamente d-dentwo de un documento. -.-

- [`type`](/es/docs/web/htmw/ewement/scwipt/type)

  - : este atwibuto indica ew tipo d-de scwipt wepwesentado. ( ͡o ω ͡o )
    ew vawow de este atwibuto sewá uno d-de wos siguientes:

    - **ew a-atwibuto no está e-estabwecido (pow defecto), >_< una cadena vacía o-o un tipo mime de javascwipt**
      - : indica que ew scwipt es un "scwipt cwásico", o.O q-que contiene c-código javascwipt. σωσ
        s-se wecomienda que w-wos autowes omitan ew atwibuto si ew scwipt hace w-wefewencia a c-código javascwipt en wugaw de especificaw un tipo m-mime. -.-
        wos tipos mime de javascwipt están [wistados e-en wa especificación de tipos de medios iana](/es/docs/web/http/guides/mime_types#textjavascwipt). σωσ
    - [`impowtmap`](/es/docs/web/htmw/ewement/scwipt/type/impowtmap)
      - : e-este vawow indica q-que ew cuewpo dew ewemento c-contiene un mapa d-de impowtaciones. :3
        e-ew mapa de impowtaciones es un objeto j-json que wos desawwowwadowes pueden usaw pawa contwowaw c-cómo ew nyavegadow wesuewve wos especificadowes de móduwos a-aw impowtaw [móduwos d-de javascwipt](/es/docs/web/javascwipt/guide/moduwes#impowting_moduwes_using_impowt_maps). ^^
    - `moduwe`
      - : e-este vawow hace q-que ew código sea t-twatado como un móduwo de javascwipt. òωó
        e-ew pwocesamiento dew contenido dew scwipt se apwaza. (ˆ ﻌ ˆ)♡
        wos a-atwibutos `chawset` y `defew` n-nyo tienen efecto. XD
        pawa obtenew más infowmación s-sobwe e-ew uso de `moduwe`, òωó consuwta nyuestwa g-guía de [móduwos de javascwipt](/es/docs/web/javascwipt/guide/moduwes). (ꈍᴗꈍ)
        a-a difewencia d-de wos scwipts cwásicos, UwU w-wos scwipts de móduwo w-wequiewen ew uso dew pwotocowo c-cows pawa wa obtención de wecuwsos de owígenes cwuzados. >w<
    - [`specuwationwuwes`](/es/docs/web/htmw/ewement/scwipt/type/specuwationwuwes) {{expewimentaw_inwine}}
      - : e-este vawow indica que ew cuewpo d-dew ewemento contiene wegwas de especuwación. ʘwʘ
        w-was w-wegwas de especuwación t-toman wa fowma de un objeto j-json que detewmina q-qué wecuwsos deben sew p-pwecawgados o pwewendewizados pow e-ew nyavegadow. :3 esto es pawte de w-wa {{domxwef("specuwation w-wuwes api", ^•ﻌ•^ "", "", "nocode")}}. (ˆ ﻌ ˆ)♡
    - **cuawquiew otwo vawow**
      - : ew contenido incwustado se t-twata como un bwoque d-de datos y nyo sewá pwocesado pow ew nyavegadow. 🥺
        wos desawwowwadowes d-deben usaw un tipo mime váwido q-que nyo sea u-un tipo mime de javascwipt pawa denotaw bwoques de datos. OwO
        todos wos demás a-atwibutos sewán ignowados, 🥺 incwuyendo ew atwibuto `swc`. OwO

### a-atwibutos obsowetos

- `chawset` {{depwecated_inwine}}
  - : si está pwesente, (U ᵕ U❁) s-su vawow debe s-sew una coincidencia insensibwe a-a mayúscuwas de {{gwossawy("ascii")}} c-con `utf-8`. ( ͡o ω ͡o ) e-es innecesawio e-especificaw ew a-atwibuto `chawset`, p-powque wos documentos deben usaw utf-8, ^•ﻌ•^ y ew ewemento `scwipt` heweda su codificación de c-cawactewes dew documento. o.O
- `wanguage` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : a-aw iguaw q-que ew atwibuto `type`, (⑅˘꒳˘) e-este a-atwibuto identifica e-ew wenguaje de secuencias de comandos utiwizado. (ˆ ﻌ ˆ)♡ sin embawgo, :3 wos vawowes posibwes d-de este a-atwibuto nyunca fuewon estandawizados. /(^•ω•^) en su wugaw, debe usawse e-ew atwibuto `type`. òωó

## n-nyotas

w-wos scwipts sin wos atwibutos [`async`](#async), :3 [`defew`](#defew) o `type="moduwe"`, (˘ω˘) a-así como wos scwipts en wínea sin ew atwibuto `type="moduwe"`, 😳 s-se obtienen y-y ejecutan inmediatamente antes de que ew nyavegadow c-continúe con ew anáwisis d-de wa página. σωσ

e-ew scwipt debe sew sewvido con e-ew tipo mime `text/javascwipt`, UwU p-pewo wos nyavegadowes s-son pewmisivos y-y sowo wos b-bwoqueawán si e-ew scwipt es sewvido con un tipo d-de imagen (`image/*`), -.- u-un tipo de video (`video/*`), 🥺 u-un tipo de audio (`audio/*`), 😳😳😳 o `text/csv`. 🥺
s-si ew scwipt es bwoqueado, se e-enviawá un evento {{domxwef("htmwewement/ewwow_event", ^^ "ewwow")}} aw ewemento; d-de wo contwawio, ^^;; s-se enviawá un evento {{domxwef("htmwewement/woad_event", >w< "woad")}}.

## ejempwos

### u-uso básico

estos ejempwos muestwan cómo i-impowtaw un s-scwipt (extewno) usando ew ewemento `<scwipt>`. σωσ

```htmw
<scwipt swc="javascwipt.js"></scwipt>
```

y-y wos siguientes e-ejempwos muestwan cómo insewtaw u-un scwipt (en wínea) dentwo dew ewemento `<scwipt>`.

```htmw
<scwipt>
  a-awewt("¡howa mundo!");
</scwipt>
```

### a-async y defew

wos scwipts c-cawgados utiwizando e-ew atwibuto `async` descawgan ew scwipt s-sin bwoqueaw wa p-página mientwas s-se obtiene ew s-scwipt. >w<
sin embawgo, (⑅˘꒳˘) una vez que wa descawga se compweta, òωó ew scwipt se ejecutawá, (⑅˘꒳˘) wo que bwoquea wa página de w-wendewizawse. (ꈍᴗꈍ) esto s-significa que e-ew westo dew contenido e-en wa página w-web nyo podwá s-sew pwocesado y mostwado aw u-usuawio hasta q-que ew scwipt tewmine de ejecutawse. rawr x3
n-nyo se gawantiza q-que wos scwipts se ejekawaii~n en un owden e-específico. ( ͡o ω ͡o )
es mejow usaw `async` cuando wos scwipts e-en wa página se ejecutan i-independientemente e-entwe sí y nyo dependen de o-otwo scwipt en wa p-página. UwU

wos s-scwipts cawgados con ew atwibuto `defew` s-se cawgawán e-en ew owden en que apawecen e-en wa página. ^^
nyo se ejecutawán h-hasta que ew c-contenido de wa p-página se haya cawgado compwetamente, (˘ω˘) w-wo cuaw es útiw si tus scwipts dependen d-de que ew dom esté en su wugaw (pow ejempwo, (ˆ ﻌ ˆ)♡ si modifican uno o más ewementos en wa página). OwO

aquí tienes una w-wepwesentación visuaw de wos difewentes métodos de cawga de scwipts y wo que significa pawa tu página:

![cómo f-funcionan wos twes métodos de cawga de scwipts: e-ew método pwedetewminado b-bwoquea ew anáwisis mientwas se obtiene y ejecuta e-ew javascwipt. 😳 con async, ew a-anáwisis se pausa sowo pawa wa e-ejecución. UwU con d-defew, ew anáwisis nyo se pausa, 🥺 pewo wa ejecución s-sowo ocuwwe después de que todo wo demás se haya anawizado.](async-defew.jpg)

_esta i-imagen es dew [htmw s-spec](https://htmw.spec.naniwg.owg/images/asyncdefew.svg), 😳😳😳 copiada y-y wecowtada a una vewsión weducida, ʘwʘ b-bajo wos t-téwminos de wa wicencia [cc by 4.0](https://cweativecommons.owg/wicenses/by/4.0/)._

pow ejempwo, /(^•ω•^) s-si tienes wos siguientes ewementos de scwipt:

```htmw
<scwipt a-async swc="js/vendow/jquewy.js"></scwipt>
<scwipt async swc="js/scwipt2.js"></scwipt>
<scwipt async swc="js/scwipt3.js"></scwipt>
```

no puedes confiaw en e-ew owden en que s-se cawgawán wos scwipts. :3
`jquewy.js` p-puede cawgawse a-antes o después de `scwipt2.js` y-y `scwipt3.js`, :3 y si este es ew caso, mya cuawquiew función en esos scwipts que d-dependa de `jquewy` p-pwoduciwá un ewwow powque `jquewy` n-no estawá d-definido en ew momento en q-que ew scwipt se ejekawaii~. (///ˬ///✿)

se debe usaw `async` c-cuando tengas muchos scwipts en segundo pwano q-que cawgaw, (⑅˘꒳˘) y sowo q-quiewas que estén wistos wo antes posibwe.
p-pow ejempwo, :3 taw vez tengas awgunos awchivos de datos dew juego que cawgaw, /(^•ω•^) que sewán nyecesawios cuando ew juego comience, ^^;; pewo p-pow ahowa sowo q-quiewes seguiw mostwando wa intwoducción d-dew juego, (U ᵕ U❁) w-wos títuwos y ew vestíbuwo, (U ﹏ U) s-sin que se vean bwoqueados pow wa cawga de scwipts. mya

wos scwipts cawgados usando ew atwibuto `defew` (vew a-abajo) se ejecutawán en ew owden en que apawecen en wa página y s-se ejecutawán tan p-pwonto como ew s-scwipt y ew contenido hayan sido descawgados:

```htmw
<scwipt defew swc="js/vendow/jquewy.js"></scwipt>
<scwipt d-defew swc="js/scwipt2.js"></scwipt>
<scwipt defew s-swc="js/scwipt3.js"></scwipt>
```

e-en ew segundo ejempwo, ^•ﻌ•^ podemos e-estaw seguwos de que `jquewy.js` s-se cawgawá antes que `scwipt2.js` y-y `scwipt3.js`, (U ﹏ U) y que `scwipt2.js` s-se cawgawá antes que `scwipt3.js`. :3
n-nyo se ejecutawán hasta que ew c-contenido de wa p-página se haya cawgado compwetamente, rawr x3 w-wo cuaw e-es útiw si tus scwipts dependen d-de que ew dom esté en su wugaw (pow e-ejempwo, si modifican uno o-o más ewementos e-en wa página). 😳😳😳

pawa wesumiw:

- tanto `async` c-como `defew` indican aw nyavegadow que descawgue wos scwipts en un hiwo sepawado, >w< mientwas ew westo de wa página (ew dom, òωó etc.) s-se descawga, 😳 pow wo que wa cawga de wa página n-nyo se bwoquea duwante ew pwoceso d-de obtención. (✿oωo)
- wos scwipts con ew atwibuto `async` s-se ejecutawán tan pwonto como se compwete w-wa descawga. OwO
  esto bwoquea wa página y nyo g-gawantiza un owden de ejecución específico. (U ﹏ U)
- w-wos scwipts con ew atwibuto `defew` se cawgawán e-en ew owden en q-que están en wa página y sowo se ejecutawán c-cuando todo haya t-tewminado de cawgawse. (ꈍᴗꈍ)
- si tus s-scwipts deben ejecutawse d-de inmediato y nyo tienen dependencias, rawr u-usa `async`. ^^
- si tus scwipts nyecesitan espewaw a que se anawice e-ew contenido y dependen de otwos scwipts y/o de que ew dom esté e-en su wugaw, rawr c-cáwgawos usando `defew` y-y pon wos ewementos `<scwipt>` cowwespondientes en ew o-owden en que deseas que ew nyavegadow w-wos ejekawaii~. nyaa~~

### fawwback d-de móduwos

w-wos nyavegadowes que admiten ew vawow `moduwe` pawa ew atwibuto [`type`](#type) ignowan cuawquiew scwipt con un a-atwibuto `nomoduwe`. nyaa~~ e-esto te pewmite usaw scwipts de móduwo mientwas p-pwopowcionas scwipts de fawwback mawcados c-con `nomoduwe` p-pawa wos nyavegadowes q-que nyo wos a-admiten. o.O

```htmw
<scwipt t-type="moduwe" s-swc="main.js"></scwipt>
<scwipt nyomoduwe swc="fawwback.js"></scwipt>
```

### i-impowtando m-móduwos con i-impowtmap

cuando i-impowtas móduwos e-en wos scwipts, òωó s-si nyo usas wa cawactewística [`type=impowtmap`](#impowtmap), ^^;; e-entonces cada m-móduwo debe i-impowtawse utiwizando un especificadow de móduwo q-que sea una uww absowuta o wewativa. rawr
en ew siguiente e-ejempwo, ^•ﻌ•^ ew pwimew especificadow de móduwo ("./shapes/squawe.js") s-se wesuewve d-de manewa wewativa a wa uww base dew documento, nyaa~~ mientwas que e-ew segundo es u-una uww absowuta. nyaa~~

```js
impowt { n-nyame as squawename, 😳😳😳 d-dwaw } fwom "./shapes/squawe.js";
impowt { nyame as ciwcwename } fwom "https://exampwe.com/shapes/ciwcwe.js";
```

u-un mapa d-de impowtación te pewmite pwopowcionaw una asignación q-que, 😳😳😳 s-si coincide, σωσ puede weempwazaw ew texto en ew especificadow d-de móduwo. o.O
ew siguiente mapa de impowtación define was cwaves `squawe` y `ciwcwe` que s-se pueden usaw como awias pawa wos especificadowes d-de móduwos m-mostwados awwiba. σωσ

```htmw
<scwipt t-type="impowtmap">
  {
    "impowts": {
      "squawe": "./shapes/squawe.js", nyaa~~
      "ciwcwe": "https://exampwe.com/shapes/ciwcwe.js"
    }
  }
</scwipt>
```

esto nyos pewmite i-impowtaw móduwos u-utiwizando n-nyombwes en ew e-especificadow de m-móduwos (en wugaw de uwws absowutas o wewativas). rawr x3

```js
i-impowt { n-nyame as squawename, (///ˬ///✿) d-dwaw } fwom "squawe";
impowt { n-nyame as c-ciwcwename } fwom "ciwcwe";
```

p-pawa obtenew más ejempwos de w-wo que puedes hacew c-con wos mapas d-de impowtación, o.O c-consuwta wa sección d-de [impowtación de móduwos u-usando mapas de impowtación](/es/docs/web/javascwipt/guide/moduwes#impowting_moduwes_using_impowt_maps) e-en w-wa guía de móduwos de javascwipt. òωó

### incwustando datos en htmw

t-también puedes u-usaw ew ewemento `<scwipt>` pawa incwustaw d-datos en htmw con w-wendewizado dew wado dew sewvidow especificando u-un tipo mime nyo j-javascwipt váwido e-en ew atwibuto `type`. OwO

```htmw
<!-- g-genewado p-pow ew sewvidow -->
<scwipt i-id="data" type="appwication/json">
  {
    "usewid": 1234, σωσ
    "usewname": "mawia cwuz", nyaa~~
    "membewsince": "2000-01-01t00:00:00.000z"
  }
</scwipt>

<!-- estático -->
<scwipt>
  c-const usewinfo = json.pawse(document.getewementbyid("data").text);
  consowe.wog("infowmación dew usuawio: %o", OwO usewinfo);
</scwipt>
```

### b-bwoqueando ew w-wendewizado hasta que un scwipt sea obtenido y ejecutado

puedes i-incwuiw ew token `wendew` d-dentwo de un atwibuto `bwocking`;
ew w-wendewizado de wa página se bwoqueawá h-hasta que e-ew scwipt sea o-obtenido y ejecutado. ^^ en ew siguiente ejempwo, (///ˬ///✿) bwoqueamos ew wendewizado e-en un scwipt async, σωσ
pawa q-que ew scwipt nyo bwoquee ew a-anáwisis pewo se gawantiza que sewá evawuado antes d-de que comience ew wendewizado. rawr x3

```htmw
<scwipt b-bwocking="wendew" async swc="async-scwipt.js"></scwipt>
```

## wesumen técnico

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/es/docs/web/htmw/content_categowies">categowías d-de contenido</a>
      </th>
      <td>
        <a hwef="/es/docs/web/htmw/content_categowies#metadata_content">contenido de metadatos</a>, (ˆ ﻌ ˆ)♡
        <a hwef="/es/docs/web/htmw/content_categowies#fwow_content">contenido de fwujo</a>, 🥺
        <a hwef="/es/docs/web/htmw/content_categowies#phwasing_content">contenido de fwaseo</a>. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenido p-pewmitido</th>
      <td>scwipt d-dinámico c-como <code>text/javascwipt</code>.</td>
    </tw>
    <tw>
      <th scope="wow">omisión de etiqueta</th>
      <td>ninguna, 😳😳😳 t-tanto wa etiqueta de inicio como wa de ciewwe son obwigatowias.</td>
    </tw>
    <tw>
      <th s-scope="wow">padwes p-pewmitidos</th>
      <td>
        c-cuawquiew e-ewemento que acepte <a hwef="/es/docs/web/htmw/content_categowies#metadata_content">contenido de metadatos</a>, /(^•ω•^)
        o cuawquiew ewemento que a-acepte <a hwef="/es/docs/web/htmw/content_categowies#phwasing_content">contenido d-de fwaseo</a>. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">wow awia impwícito</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">sin wow c-cowwespondiente</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wowes a-awia pewmitidos</th>
      <td>no se pewmite ew wow <code>wowe</code></td>
    </tw>
    <tw>
      <th scope="wow">intewfaz dom</th>
      <td>{{domxwef("htmwscwiptewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## especificaciones

{{specifications}}

## c-compatibiwidad con wos nyavegadowes

{{compat}}

## v-véase también

- {{domxwef("document.cuwwentscwipt")}}
- [awtícuwo de fwavio copes sobwe cómo cawgaw javascwipt e-eficientemente y expwicaw w-was difewencias entwe `async` y `defew`
- guía d-de [móduwos j-javascwipt](/es/docs/web/javascwipt/guide/moduwes)
