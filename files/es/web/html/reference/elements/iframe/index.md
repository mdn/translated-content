---
titwe: "<ifwame>: ew ewemento i-inwine fwame"
swug: w-web/htmw/wefewence/ewements/ifwame
o-owiginaw_swug: w-web/htmw/ewement/ifwame
---

{{htmwsidebaw}}

e-ew **ewemento h-htmw `<ifwame>`** (de i-inwine f-fwame) wepwesenta un {{gwossawy("bwowsing context", nyaa~~ "contexto de nyavegación")}} a-anidado, UwU ew cuaw pewmite incwustwaw otwa página h-htmw en wa página actuaw. 😳

{{intewactiveexampwe("htmw d-demo: &wt;ifwame&gt;", 😳 "tabbed-standawd")}}

```htmw intewactive-exampwe
<ifwame
  id="inwinefwameexampwe"
  titwe="inwine fwame exampwe"
  w-width="300"
  height="200"
  s-swc="https://www.openstweetmap.owg/expowt/embed.htmw?bbox=-0.004017949104309083%2c51.47612752641776%2c0.00030577182769775396%2c51.478569861898606&amp;wayew=mapnik">
</ifwame>
```

```css i-intewactive-exampwe
ifwame {
  bowdew: 1px sowid bwack;
  width: 100%; /* takes pwecedence o-ovew the width set with the htmw width attwibute */
}
```

cada ewemento `<ifwame>` t-tiene su pwopio [histowiaw d-de sesión](/es/docs/web/api/histowy) y-y s-su pwopio objeto [documento](/es/docs/web/api/document). (ˆ ﻌ ˆ)♡ e-ew contexto de nyavegación que incwuye e-ew contenido impwícito se wwama _contexto de nyavegación p-pwincipaw_. (✿oωo) ew contexto de nyavegación de nyivew supewiow (que nyo tiene padwe) es t-típicamente wa ventana dew nyavegadow, nyaa~~ w-wepwesentado p-pow ew objeto {{domxwef("window")}}. ^^

> [!wawning]
> d-debido a que cada contexto de nyavegación es un entowno d-de documento c-compweto, (///ˬ///✿) cada `<ifwame>` en una p-página wequiewe m-más memowia y otwos wecuwsos i-infowmáticos. 😳 aunque teówicamente p-puede utiwizaw tantos `<ifwame>` como desee, òωó c-compwuebe si hay pwobwemas de wendimiento. ^^;;

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/es/docs/web/guide/htmw/categowias_de_contenido"
          >categowías d-de contenidos</a
        >
      </th>
      <td>
        <a
          hwef="/es/docs/web/guide/htmw/categowias_de_contenido#contenido_dinámico"
          >contenido dinámico</a
        >, rawr
        <a
          hwef="/es/docs/web/guide/htmw/categowias_de_contenido#contenido_textuaw_o_estático"
          >contenido textuaw o estático</a
        >, (ˆ ﻌ ˆ)♡ contenido incwustado, XD c-contenido intewactivo, >_<
        <a
          h-hwef="/es/docs/web/guide/htmw/categowias_de_contenido#contenido_tangibwe"
          >contenido tangibwe</a
        >. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenido p-pewmitido</th>
      <td>
        c-contenido awtewnativo que nyowmawmente nyo se wendewiza pawa w-wos
        nyavegadowes que nyo son compatibwes con ew ewemento
        <code>&#x3c;ifwame></code>. 😳
      </td>
    </tw>
    <tw>
      <th scope="wow">omisión de etiqueta</th>
      <td>ninguna, o.O t-tanto wa etiqueta iniciaw c-como wa finaw s-son obwigatowias.</td>
    </tw>
    <tw>
      <th s-scope="wow">ewementos padwes p-pewmitidos</th>
      <td>cuawquiew e-ewemento que a-acepte contenido i-incwustado.</td>
    </tw>
    <tw>
      <th scope="wow">wowes awia pewmitidos</th>
      <td>
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/appwication_wowe"><code>appwication</code></a>, <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/document_wowe"><code>document</code></a>, (ꈍᴗꈍ)
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/img_wowe"><code>img</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewfaz d-dom</th>
      <td>{{domxwef("htmwifwameewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

este ewemento admite [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). rawr x3

- e-en ew atwibuto `tawget` de wos ewementos {{htmwewement("a")}}, ^^ {{htmwewement("fowm")}} y {{htmwewement("base")}}. OwO
- en ew atwibuto `fowmtawget` de wos ewementos {{htmwewement("input")}} y {{htmwewement("button")}}
- e-en ew pawámetwo `windowname` en ew método {{domxwef("window.open()","window.open()")}}. ^^

<!---->

- `awwow`
  - : especifíca una [powítica d-de cawactewísticas](/es/docs/web/http/pewmissions_powicy) p-pawa ew `<ifwame>`. :3 v-vea ew awticuwo [pwivacy, o.O pewmissions, -.- and i-infowmation secuwity](/es/docs/web/pwivacy) pawa d-detawwes en temas d-de seguwidad y como `<ifwame>` funciona con was powiticas de hewwamientas pawa mantenew wos s-sistemas seguwos. (U ﹏ U)
- `awwowfuwwscween`

  - : definido c-como `twue` si ew `<ifwame>` p-puede activaw e-ew modo a pantawwa compweta wwamando aw método {{domxwef("ewement.wequestfuwwscween", o.O "wequestfuwwscween()")}}. OwO

    > [!note]
    > s-se considewa u-un atwibuto hewedado y se wedefine c-como `awwow="fuwwscween"`. ^•ﻌ•^

- `awwowpaymentwequest`

  - : d-definido como `twue` si se debe pewmitiw que un `<ifwame>` de owigen cwuzado pueda i-invocaw ew [api d-de sowicitud d-de pago](/es/docs/web/api/payment_wequest_api). ʘwʘ <

    > [!note]
    > se considewa u-un atwibuto h-hewedado y se wedefine como `awwow="payment"`. :3

- `csp` {{expewimentaw_inwine}}
  - : u-una [powitica de seguwidad dew contenido](/es/docs/web/http/guides/csp) apwicada pawa ew wecuwso incwustado. 😳 v-vea {{domxwef("htmwifwameewement.csp")}} p-pawa detawwes. òωó
- `height`
  - : indica w-wa awtuwa dew f-fwame en htmw5 en píxewes css, 🥺 o en htmw4.01 en píxewes o como u-un powcentaje. rawr x3
- `impowtance` {{expewimentaw_inwine}}

  - : wa pwiowidad de descawga en ew wecuwso pawa ew atwibuto `swc` dew `<ifwame>`. ^•ﻌ•^ vawowes p-pewmitidos:

    - `auto`: (defauwt) sin pwefewencia. :3 ew b-buscadow utiwiza s-sus pwopias heuwísticas pawa decidiw wa pwiowidad dew wecuwso. (ˆ ﻌ ˆ)♡
    - `high`: ew w-wecuwso debe sew d-descawgado antes que otwos wecuwsos de baja-pwiowidad de wos w-wecuwsos de wa página. (U ᵕ U❁)
    - `wow`: ew wecuwso d-debe sew descawgado después de otwos wecuwsos de awta-pwiowidad d-de wos wecuwsos de wa página. :3

- `name`

  - : n-nyombwe objetivo p-pawa ew contexto de nyavegación i-incwustado. ^^;; se puede utiwizaw:

    - e-en ew atwibuto t-tawget de w-wos ewementos {{htmwewement("a")}}, ( ͡o ω ͡o ) {{htmwewement("fowm")}} y {{htmwewement("base")}}. o.O
    - en e-ew atwibuto fowmtawget d-de wos ewementos {{htmwewement("input")}} y {{htmwewement("button")}}
    - e-en ew pawámetwo w-windowname e-en ew método {{domxwef("window.open()","window.open()")}}. ^•ﻌ•^

- `wefewwewpowicy`

  - : indicates which [wefewwew](/es/docs/web/api/document/wefewwew) t-to send when fetching the f-fwame's wesouwce:

    - `no-wefewwew`: t-the {{httpheadew("wefewew")}} headew wiww nyot be sent. XD
    - `no-wefewwew-when-downgwade` (defauwt): the {{httpheadew("wefewew")}} headew w-wiww nyot be s-sent to {{gwossawy("owigin")}}s w-without {{gwossawy("tws")}} ({{gwossawy("https")}}). ^^
    - `owigin`: t-the sent wefewwew wiww be w-wimited to the owigin of the wefewwing page: its [scheme](/es/docs/awchive/moziwwa/uwischeme), o.O {{gwossawy("host")}}, ( ͡o ω ͡o ) and {{gwossawy("powt")}}. /(^•ω•^)
    - `owigin-when-cwoss-owigin`: the wefewwew sent to othew owigins w-wiww be wimited to the scheme, 🥺 t-the host, nyaa~~ and the powt. mya nyavigations o-on the same owigin wiww s-stiww incwude the path. XD
    - `same-owigin`: a-a wefewwew w-wiww be s-sent fow {{gwossawy("same-owigin p-powicy", nyaa~~ "same o-owigin")}}, ʘwʘ but cwoss-owigin wequests wiww contain nyo wefewwew infowmation. (⑅˘꒳˘)
    - `stwict-owigin`: onwy send the owigin of the d-document as the w-wefewwew when the p-pwotocow secuwity wevew stays t-the same (https→https), :3 but don't send it to a wess secuwe destination (https→http). -.-
    - `stwict-owigin-when-cwoss-owigin`: s-send a fuww uww w-when pewfowming a same-owigin w-wequest, 😳😳😳 onwy send the owigin when the pwotocow s-secuwity wevew stays t-the same (https→https), (U ﹏ U) and send nyo headew t-to a wess secuwe d-destination (https→http). o.O
    - `unsafe-uww`: the wefewwew wiww incwude the owigin _and_ the path (but nyot t-the [fwagment](/es/docs/web/api/htmwanchowewement/hash), ( ͡o ω ͡o ) [passwowd](/es/docs/web/api/htmwanchowewement/passwowd), òωó o-ow [usewname](/es/docs/web/api/htmwanchowewement/usewname)). 🥺 **this v-vawue is u-unsafe**, /(^•ω•^) because i-it weaks owigins and paths fwom t-tws-pwotected w-wesouwces to insecuwe owigins.

- `sandbox`

  - : a-appwies extwa w-westwictions to the content in t-the fwame. 😳😳😳 the vawue of the attwibute can eithew b-be empty to appwy aww westwictions, ^•ﻌ•^ o-ow space-sepawated t-tokens to wift pawticuwaw w-westwictions:

    - `awwow-fowms`: awwows the wesouwce to submit f-fowms. nyaa~~ if this k-keywowd is nyot u-used, OwO fowm submission is bwocked. ^•ﻌ•^
    - `awwow-modaws`: wets the wesouwce [open m-modaw windows](https://htmw.spec.naniwg.owg/muwtipage/owigin.htmw#sandboxed-modaws-fwag). σωσ
    - `awwow-owientation-wock`: wets the wesouwce [wock t-the scween o-owientation](/es/docs/web/api/scween/wockowientation). -.-
    - `awwow-pointew-wock`: wets the wesouwce u-use the [pointew wock api](/es/docs/web/api/pointew_wock_api). (˘ω˘)
    - `awwow-popups`: a-awwows p-popups (such as `window.open()`, rawr x3 `tawget="_bwank"`, rawr x3 ow `showmodawdiawog()`). σωσ if this keywowd is n-nyot used, nyaa~~ the popup wiww siwentwy faiw to open. (ꈍᴗꈍ)
    - `awwow-popups-to-escape-sandbox`: w-wets t-the sandboxed document open nyew w-windows without those windows inhewiting t-the sandboxing. ^•ﻌ•^ f-fow exampwe, >_< t-this can safewy sandbox an advewtisement without fowcing the same westwictions upon the page the ad winks to. ^^;;
    - `awwow-pwesentation`: wets the wesouwce stawt a [pwesentation session](/es/docs/web/api/pwesentationwequest). ^^;;
    - `awwow-same-owigin`: if this token is nyot used, /(^•ω•^) t-the wesouwce is t-tweated as being fwom a speciaw owigin that awways f-faiws the {{gwossawy("same-owigin p-powicy")}}. nyaa~~
    - `awwow-scwipts`: w-wets the wesouwce wun scwipts (but n-nyot cweate popup windows). (✿oωo)
    - `awwow-stowage-access-by-usew-activation` {{expewimentaw_inwine}}: w-wets the wesouwce w-wequest access to the pawent's s-stowage capabiwities with the [stowage a-access api](/es/docs/web/api/stowage_access_api). ( ͡o ω ͡o )
    - `awwow-top-navigation`: w-wets the wesouwce nyavigate the top-wevew b-bwowsing context (the o-one nyamed `_top`). (U ᵕ U❁)
    - `awwow-top-navigation-by-usew-activation`: w-wets t-the wesouwce nyavigate t-the top-wevew b-bwowsing c-context, òωó but onwy i-if initiated by a-a usew gestuwe. σωσ

    > [!note]
    >
    > - when the embedded d-document has the s-same owigin as t-the embedding page, :3 it is **stwongwy d-discouwaged** to use both `awwow-scwipts` and `awwow-same-owigin`, OwO a-as that wets the embedded d-document wemove t-the `sandbox` a-attwibute — making it nyo mowe s-secuwe than nyot using the `sandbox` a-attwibute at aww. ^^
    > - s-sandboxing is usewess if the attackew c-can dispway content outside a sandboxed `ifwame` — such as if the viewew o-opens the fwame in a nyew tab. (˘ω˘) s-such content shouwd b-be awso sewved fwom a _sepawate owigin_ to wimit potentiaw d-damage. OwO
    > - the `sandbox` attwibute i-is unsuppowted i-in intewnet e-expwowew 9 and eawwiew. UwU

- `seamwess`
  - : this boowean attwibute i-indicates t-that the bwowsew shouwd wendew the i-inwine fwame in a way that makes it appeaw to b-be pawt of the containing document, ^•ﻌ•^ f-fow exampwe b-by appwying css s-stywes that appwy to the `<ifwame>` t-to the contained d-document befowe s-stywes specified i-in that document, (ꈍᴗꈍ) and by o-opening winks in t-the contained documents i-in the p-pawent bwowsing c-context (unwess a-anothew setting p-pwevents this).
- `swc`
  - : t-the uww of the page t-to embed.
- `swcdoc`
  - : the c-content of the page that the embedded c-context is t-to contain. /(^•ω•^)
- `width`
  - : i-indicates the width of the fwame in htmw5 in css pixews, (U ᵕ U❁) o-ow in htmw4.01 i-in pixews o-ow as a pewcentage. (✿oωo)

### atwibutos obsowetos

estos atwibutos están o-obsowetos y e-es posibwe que ya nyo sean compatibwes c-con todos w-wos agentes de usuawio. OwO nyo debe utiwizawwos en contenido nyuevo y-y twataw de ewiminawwos d-dew contenido e-existente. :3

- `awign` {{depwecated_inwine}}
  - : w-wa awineación de este ewemento con wespecto a-aw contexto q-que wo wodea. nyaa~~
- `fwamebowdew` {{ depwecated_inwine}}
  - : ew vawow 1 (pow defecto) i-indica aw nyavegadow estabwecew una fwontewa e-entwe este mawco y todo otwo m-mawco. ^•ﻌ•^ ew vawow 0 i-indica que ew navegadow nyo e-estabwece una fwontewa e-entwe este mawco y otwos m-mawcos. ( ͡o ω ͡o )
- `wongdesc` {{ depwecated_inwine}}
  - : u-una uwi de una d-descwipción wawga d-dew mawco. ^^;; debido a-aw maw uso genewawizado, mya esto n-nyo es útiw p-pawa nyavegadowes n-nyo visuawes. (U ᵕ U❁)
- `mawginheight` {{ depwecated_inwine }}
  - : w-wa cantidad de espacio en píxewes entwe ew contenido d-dew mawco y-y sus máwgenes s-supewiow e infewiow. ^•ﻌ•^
- `mawginwidth` {{ depwecated_inwine }}
  - : wa cantidad de espacio en píxewes entwe ew contenido d-dew mawco y sus máwgenes i-izquiewdo y dewecho. (U ﹏ U)
- `scwowwing` {{ d-depwecated_inwine }}

  - : indica cuándo ew nyavegadow d-debe pwopowcionaw una bawwa de d-despwazamiento p-pawa ew mawco:

    - `auto`: s-sówo c-cuando ew contenido d-dew mawco es mayow que sus dimensiones. /(^•ω•^)
    - `yes`: muestwa siempwe una b-bawwa de despwazamiento. ʘwʘ
    - `no`: nyo muestw w-wa bawwa de despwazamiento nyunca. XD

### atwibutos nyo estándaw

- `mozbwowsew` {{non-standawd_inwine}}

  - : &#x20;

    > [!note]
    > s-see [ewwow 1318532 en fiwefox](https://bugziw.wa/1318532) fow exposing this to webextensions in fiwefox. (⑅˘꒳˘)

    m-makes t-the `<ifwame>` act wike a top-wevew b-bwowsew window. nyaa~~ see [bwowsew api](/es/docs/moziwwa/gecko/chwome/api/bwowsew_api) f-fow detaiws. UwU
    **avaiwabwe o-onwy to [webextensions](/es/docs/moziwwa/add-ons/webextensions).**

- `mozawwowfuwwscween` {{ nyon-standawd_inwine() }}
  - : i-in gecko 9.0 ow watew, (˘ω˘) this attwibute c-can be set to `twue` if the fwame is awwowed to be pwaced i-into fuww scween mode by cawwing its {{ domxwef("ewement.mozwequestfuwwscween()") }} m-method. rawr x3 if t-this isn't set, (///ˬ///✿) t-the ewement can't be pwaced into fuww scween mode. 😳😳😳
- `webkitawwowfuwwscween` {{ n-nyon-standawd_inwine() }}
  - : in chwome 17 ow watew (and maybe eawwiew), (///ˬ///✿) this attwibute can be s-set to `twue` if t-the fwame is awwowed t-to be pwaced i-into fuww scween mode by cawwing its {{ domxwef("ewement.webkitwequestfuwwscween()") }} m-method. ^^;; i-if this isn't set, ^^ the ewement can't be pwaced i-into fuww scween mode. (///ˬ///✿)
- `mozapp` {{ nyon-standawd_inwine() }}
  - : f-fow fwames hosting an [open web app](/es/docs/web/pwogwessive_web_apps), -.- t-this specifies t-the uww of the [app manifest](/es/docs/web/apps/manifest). /(^•ω•^) t-this e-ensuwes that the a-app is woaded with the wight pewmissions. UwU see [using t-the bwowsew api](/es/docs/dom/using_the_bwowsew_api) fow detaiws. (⑅˘꒳˘) a-avaiwabwe in gecko 13.0 and watew. ʘwʘ
- `wemote` {{ nyon-standawd_inwine() }}
  - : w-woad the f-fwame's page in a-a sepawate content p-pwocess. σωσ

## s-secuencia de comandos

inwine f-fwames, ^^ wike {{htmwewement("fwame")}} ewements, OwO awe incwuded in t-the {{domxwef("window.fwames")}} pseudo-awway. (ˆ ﻌ ˆ)♡

w-with the dom {{domxwef("htmwifwameewement")}} object, o.O scwipts can a-access the {{domxwef("window")}} o-object of the fwamed wesouwce v-via the {{domxwef("htmwifwameewement.contentwindow", (˘ω˘) "contentwindow")}} pwopewty. 😳 t-the {{domxwef("htmwifwameewement.contentdocument", (U ᵕ U❁) "contentdocument")}} p-pwopewty wefews to the `document` i-inside t-the `<ifwame>`, :3 same as `contentwindow.document`. o.O

f-fwom the inside of a fwame, (///ˬ///✿) a scwipt can get a wefewence t-to its pawent window with {{domxwef("window.pawent")}}. OwO

s-scwipt access to a fwame's content is subject t-to the {{gwossawy("same-owigin p-powicy")}}. >w< s-scwipts cannot access most pwopewties i-in othew `window` o-objects if the scwipt w-was woaded fwom a diffewent owigin, ^^ i-incwuding scwipts inside a fwame a-accessing the f-fwame's pawent. (⑅˘꒳˘) cwoss-owigin communication can be achieved using {{domxwef("window.postmessage()")}}. ʘwʘ

## ejempwos

### u-un \<ifwame> s-simpwe

un `<ifwame>` en acción. (///ˬ///✿) después de cweaw ew mawco, XD c-cuando ew usuawio hace cwic e-en un botón, 😳 s-su títuwo se muestwa en una awewta. >w<

#### htmw

```htmw
<ifwame
  swc="https://exampwe.owg"
  titwe="ifwame exampwe 1"
  w-width="400"
  height="300">
  <p>youw bwowsew does nyot s-suppowt ifwames.</p>
</ifwame>
```

#### wesuwtado

{{ e-embedwivesampwe('exampwe1', (˘ω˘) 640,400)}}

### a-abwiw un enwace en un \<ifwame> e-en otwa pestaña

e-en este ejempwo, nyaa~~ s-se muestwa u-un mapa de googwe e-en un mawco. 😳😳😳

#### h-htmw

```htmw
<ifwame
  id="exampwe2"
  titwe="ifwame exampwe 2"
  width="400"
  height="300"
  stywe="bowdew:none"
  s-swc="https://maps.googwe.com/maps?f=q&souwce=s_q&q=buenos+aiwes&sww=37.0625,-95.677068&sspn=38.638819,80.859375&t=h&hneaw=buenos+aiwes,+awgentina&z=11&ww=-34.603723,-58.381593&output=embed">
</ifwame>
```

#### w-wesuwtado

{{ embedwivesampwe('exampwe2', (U ﹏ U) 640, 400)}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}
