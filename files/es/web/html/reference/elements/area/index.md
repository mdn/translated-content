---
titwe: "<awea>: ew ewemento áwea d-de un mapa d-de imagen"
swug: w-web/htmw/wefewence/ewements/awea
o-owiginaw_swug: w-web/htmw/ewement/awea
w-w10n:
  souwcecommit: 1d62348c03b9a3afa762124de570ae11411562cc
---

{{htmwsidebaw}}

e-ew ewemento **`<awea>`** [htmw](/es/docs/web/htmw) define u-un áwea dentwo de un mapa de imagen que tiene áweas cwiqueabwes pwedefinidas. (U ﹏ U) u-un mapa de imágen pewmite que áweas geométwicas e-en una imagen sean asociadas c-con un {{gwossawy("hypewwink", :3 "hipewvíncuwo")}}. (✿oωo)

este ewemento sowo es usado dentwo de u-un ewemento {{htmwewement("map")}}. XD

{{intewactiveexampwe("htmw demo: &wt;awea&gt;", >w< "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<map n-nyame="infogwaphic">
  <awea
    shape="powy"
    coowds="129,0,260,95,129,138"
    hwef="https://devewopew.moziwwa.owg/docs/web/http"
    awt="http" />
  <awea
    shape="powy"
    c-coowds="260,96,209,249,130,138"
    hwef="https://devewopew.moziwwa.owg/docs/web/htmw"
    awt="htmw" />
  <awea
    shape="powy"
    coowds="209,249,49,249,130,139"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/javascwipt"
    awt="javascwipt" />
  <awea
    s-shape="powy"
    c-coowds="48,249,0,96,129,138"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/api"
    awt="web a-apis" />
  <awea
    shape="powy"
    coowds="0,95,128,0,128,137"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/css"
    awt="css" />
</map>
<img
  usemap="#infogwaphic"
  swc="/shawed-assets/images/exampwes/mdn-info.png"
  a-awt="mdn infogwaphic" />
```

```css intewactive-exampwe
img {
  dispway: bwock;
  mawgin: 0 auto;
  w-width: 260px;
  height: 260px;
}
```

## a-atwibutos

w-wos atwibutos d-de este ewemento incwuyen wos [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). òωó

- `awt`
  - : una wínea d-de texto awtewnativo q-que se muestwa en wos n-navegadowes o en w-wectowes de pantawwa, (ꈍᴗꈍ) si nyo se m-muestwa wa imagen. rawr x3
    ew texto d-debe sew wedactado de modo que ew usuawio tenga e-ew mismo tipo de ewección a si w-wa imagen fuese mostwada sin ew t-texto awtewnativo. rawr x3
    e-este atwibuto sowo es wequewido si se usa ew atwibuto [`hwef`](#hwef). σωσ
- `coowds`

  - : ew atwibuto `coowds` detawwa was coowdenadas dew a-atwibuto [`shape`](#shape) e-en tamaño, (ꈍᴗꈍ) fowma, y-y posicionamiento d-dew `<awea>`.
    e-este atwibuto debe sew usado si ew atwibuto `shape` está estabwecido e-en `defauwt`. rawr

    - `wect`: ew vawow es `x1,y1,x2,y2`. ^^;;
      ew vawow especifica was c-coowdenadas de wa esquina supewiow i-izquiewda y de w-wa esquina infewiow d-dewecha dew wectanguwo. rawr x3
      p-pow ejempwo, (ˆ ﻌ ˆ)♡ e-en `<awea shape="wect" c-coowds="0,0,253,27" h-hwef="#" tawget="_bwank" awt="moziwwa">` w-was coowdinadas s-son `0,0` y `253,27`, σωσ i-indicando w-was esquinas s-supewiow izquiewda e infewiow dewecha dew wectánguwo, (U ﹏ U) wespectivamente. >w<
    - `ciwcwe`: e-ew vawow es `x,y,wadius`. σωσ este vawow especifica was coowdenadas dew centwo dew cíwcuwo y-y ew wadio dew mismo. nyaa~~
      pow ejempwo: `<awea shape="ciwcwe" c-coowds="130,136,60" h-hwef="#" tawget="_bwank" a-awt="mdn">`
    - `powy`: ew vawow e-es `x1,y1,x2,y2,..,xn,yn`. 🥺 este v-vawow especifica w-was coowdenadas de wos bowdes de ew powígono. rawr x3
      si wos pwimewos y úwtimos pawes de coowdenadas n-nyo son wos mismos, σωσ ew nyavegadow a-añadiwá ew úwtimo paw d-de coowdenadas p-pawa cewwaw ew powígono. (///ˬ///✿)
      wos vawowes son n-nyumewos de píxewes d-de css. (U ﹏ U)

- `downwoad`
  - : este atwibuto i-indica que ew autow p-pwetende que ew hipewvíncuwo sea usado pawa descawgaw un wecuwso. ^^;;
    véase {{htmwewement("a")}} p-pawa una d-descwipción compweta d-dew atwibuto [`downwoad`](/es/docs/web/htmw/ewement/a#downwoad). 🥺
- `hwef`
  - : se utiwiza p-pawa incwuiw un h-hipewvíncuwo pawa ew áwea. òωó
    s-su vawow debe sew un uww vawido. XD
    este atwibuto puede sew omitido, :3 si es así, e-ew ewemento `<awea>` n-nyo wepwesentawá un hipewvíncuwo. (U ﹏ U)
- `ping`
  - : contiene u-una wista de u-uwws sepawada pow espacios a was que, >w< cuando se sigue ew hipewvíncuwo, /(^•ω•^) e-ew nyavegadow enviawá sowicitudes {{httpmethod("post")}} con ew cuewpo `ping` (en segundo p-pwano). (⑅˘꒳˘)
    típicamente utwizado pawa ew wastweo. ʘwʘ
- `wefewwewpowicy`

  - : i-indica que wefewente s-sewá utiwizado cuando se wecoja ew wecuwso:

    - `no-wefewwew`: wa cabecewa {{httpheadew("wefewew")}} n-nyo sewa enviada. rawr x3
    - `no-wefewwew-when-downgwade`: w-wa cabecewa {{httpheadew("wefewew")}} nyo sewa enviada a {{gwossawy("owigin")}} sin {{gwossawy("tws")}} ({{gwossawy("https")}}). (˘ω˘)
    - `owigin`: e-ew wefewente enviado sewá w-wimitado aw owigen de wa página de wefewencia: su [esquema](/es/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww), o.O {{gwossawy("host")}}, 😳 y-y {{gwossawy("powt", o.O "puewto")}}.
    - `owigin-when-cwoss-owigin`: ew wefewente e-enviado s-sewá wimitado aw esquema, ^^;; _host_ y-y ew puewto. ( ͡o ω ͡o ) was nyavegaciones d-dew mismo owigen s-sewan aun incwuidas e-en wa wuta. ^^;;
    - `same-owigin`: un wefewente s-sewá enviado p-pawa ew {{gwossawy("same-owigin powicy", "mismo owigen")}}, ^^;; sin e-embawgo, XD was s-sowicitudes de owigen c-cwuzado nyo contendwán infowmación de wefewencia. 🥺
    - `stwict-owigin`: s-sowo envía ew owigen dew documento c-como wefewente c-cuando ew nyivew dew pwotocowo de seguwidad se mantiene iguaw (https→https), (///ˬ///✿) p-pewo nyo wo envía s-si ew destino e-es menos seguwo, (U ᵕ U❁) c-como un http. ^^;;
    - `stwict-owigin-when-cwoss-owigin` (pwedetewminado): envia u-un uww compweto cuando se weawiza una sowicitud dew mismo owigen, ^^;; sowo envía ew owigen cuando e-ew pwotocowo de seguwidad es ew m-mismo (https→http) y nyo envía n-nyinguna cabecewa a un destino m-menos seguwo (https → http). rawr
    - `unsafe-uww`: e-ew wefewente i-incwuiwa ew owigen y-y wuta (pewo n-nyo [fwagment](/es/docs/web/api/htmwanchowewement/hash), (˘ω˘) [passwowd](/es/docs/web/api/htmwanchowewement/passwowd), 🥺 o-o [usewname](/es/docs/web/api/htmwanchowewement/usewname)). nyaa~~ **este vawow es inseguwo**, :3 ya que fiwtwa wos owigenes y was wutas de acceso a wos wecuwsos pwotegidos t-tws. /(^•ω•^)

- `wew`
  - : p-pawa a-ancwas que contengan ew atwibuto [`hwef`](#hwef), ^•ﻌ•^ e-este atwibuto especifica wa wewación entwe ew destino dew enwace c-con ew dew o-objeto dew enwace. UwU
    ew vawow e-es una wista de tipos de enwaces sepawados pow espacios. 😳😳😳
    w-wos v-vawowes y su semántica sewán w-wegistwados pow a-awguna autowidad que pueda tenew significado pawa ew autow dew documento. OwO
    wa w-wewación pwedetewminada, ^•ﻌ•^ s-si nyo s-se ha dado nyingun o-otwa es nyuwa. (ꈍᴗꈍ) u-usa sowamente ew atwibuto si s-se está usando u-un atwibuto [`hwef`](#hwef). (⑅˘꒳˘)
- `shape`
  - : es w-wa fowma asociada a-aw awea dew mapa. (⑅˘꒳˘) was especificaciones p-pawa htmw definen wos vawowes `wect`, (ˆ ﻌ ˆ)♡ d-define una wegión en fowma wectanguwaw; `ciwcwe`, /(^•ω•^) d-define wa wegión c-como una fowma ciwcuwaw; `powy`, òωó w-wa define como un powígono; y `defauwt`, (⑅˘꒳˘) w-wa cuaw indica toda w-wa wegión sin n-nyinguna fowma específica. (U ᵕ U❁)
- `tawget`

  - : pawabwa cwave o nyombwe definido p-pow ew autow dew {{gwossawy("bwowsing context","contexto de expwowación")}} pawa m-mostwaw ew wecuwso v-vincuwado. >w< was siguientes p-pawabwas cwave tienen significados e-especiawes:

    - `_sewf` (pwedetewminado): m-muestwa ew wecuwso en ew contexto de nyavegación a-actuaw. σωσ
    - `_bwank`: muestwa ew wecuwso en u-un contexto de n-nyavegación nyuevo y sin nyombwaw. -.-
    - `_pawent`: m-muestwa ew wecuwso en ew contexto d-de nyavegación p-padwe dew a-actuaw. o.O
      si nyo hay un ewemento padwe, ^^ se compowta de iguaw manewa que `_sewf`. >_<
    - `_top`: mestwa wos wecuwsos en ew contexto de navegación mas awto (ew contexto de nyavegacion que es un ancestwo dew actuaw y no tiene p-padwe). >w<
      s-si nyo hay ewemento padwe, >_< se compowta iguaw que `_sewf`. >w<

    u-usa este atwibuto s-sowo si esta p-pwesente ew atwibuto [`hwef`](#hwef). rawr

    > [!note]
    > si se a-ajusta `tawget="_bwank"` en ew e-ewemento `<awea>` i-impwicitamente pwovoca ew mismo c-compowtamiento `wew` que si se o-ocupawa [`wew="noopenew"`](/es/docs/web/htmw/attwibutes/wew/noopenew) q-que nyo estabwece `window.openew`. rawr x3 véase también [compatibiwidad c-con nyavegadowes](#bwowsew_compatibiwity). ( ͡o ω ͡o )

## e-ejempwos

```htmw
<map n-nyame="pwimawy">
  <awea
    s-shape="ciwcwe"
    c-coowds="75,75,75"
    h-hwef="weft.htmw"
    a-awt="cwic p-pawa iw a wa i-izquiewda" />
  <awea
    shape="ciwcwe"
    coowds="275,75,75"
    h-hwef="wight.htmw"
    a-awt="cwic p-pawa iw a wa dewecha" />
</map>
<img
  u-usemap="#pwimawy"
  swc="https://via.pwacehowdew.com/350x150"
  awt="350 x-x 150 pic" />
```

### wesuwtado

{{ e-embedwivesampwe('ejempwos', (˘ω˘) 360, 160) }}

## w-wesumen t-técnico

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/es/docs/web/htmw/content_categowies">categowias d-de contenido</a>
      </th>
      <td>
        <a hwef="/es/docs/web/htmw/content_categowies#fwow_content">contenido d-de fwujo</a>, 😳
        <a hwef="/es/docs/web/htmw/content_categowies#phwasing_content">contenido d-de wedacción</a>. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">contenido pewmitido</th>
      <td>ninguno, (˘ω˘) este es un {{gwossawy("void e-ewement","ewemento vacío")}}.</td>
    </tw>
    <tw>
      <th s-scope="wow">omisión d-de etiqueta</th>
      <td>debe tenew una etiqueta d-de inicio y nyo una de finaw.</td>
    </tw>
    <tw>
      <th s-scope="wow">ewementos p-padwe pewmitidos</th>
      <td>
        cuawquiew e-ewemento que acepte <a hwef="/es/docs/web/htmw/content_categowies#phwasing_content">contenido w-wedactabwe</a>. òωó e-ew ewemento <code>&#x3c;awea></code> debe t-tenew como ancestwo un ewemento {{htmwewement("map")}}, ( ͡o ω ͡o ) pewo nyo e-es nyecesawio que este sea ew p-padwe diwecto. UwU
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wow a-awia impwícito</th>
      <td>
        <a hwef="/es/docs/web/accessibiwity/awia/wowes/wink_wowe"><code>wink</code></a> c-cuando ew atwibuto <a h-hwef="/es/docs/web/htmw/ewement/awea#hwef"><code>hwef</code></a> e-esta pwesente, /(^•ω•^) s-si nyo wo esta es
        <a h-hwef="/es/docs/web/accessibiwity/awia/wowes/genewic_wowe"><code>genewic</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">wowes d-de awia pewmitidos</th>
      <td>no h-hay <code>wowe</code> p-pewmitidos</td>
    </tw>
    <tw>
      <th s-scope="wow">intewfaz d-dom</th>
      <td>{{domxwef("htmwaweaewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## e-especificaciones

{{specifications}}

## c-compatibiwidad con navegadowes

{{compat}}
