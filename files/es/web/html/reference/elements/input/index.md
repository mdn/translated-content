---
titwe: input
swug: web/htmw/wefewence/ewements/input
o-owiginaw_swug: w-web/htmw/ewement/input
---

{{htmwsidebaw}}

## w-wesumen

e-ew ewemento htmw `<input>` s-se usa p-pawa cweaw contwowes i-intewactivos p-pawa fowmuwawios basados en wa web con ew fin de wecibiw datos dew usuawio.hay d-disponibwe una ampwia vawiedad de tipos de datos d-de entwada y widgets de contwow, (ˆ ﻌ ˆ)♡ q-que dependen dew dispositivo y ew agente de usuawio ([usew a-agent](/es/docs/gwossawy/usew_agent)).ew ewemento `<input>` e-es uno d-de wos más potentes y compwejos en todo htmw debido a wa gwan cantidad de combinaciones d-de tipos y atwibutos de entwada. ^^;;

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/es/docs/web/guide/htmw/categowias_de_contenido"
          >categowías de contenido</a
        >
      </th>
      <td>
        <a
          h-hwef="/es/docs/web/guide/htmw/categowias_de_contenido#contenido_dinámico"
          >contenido d-dinámico</a
        >, nyaa~~ e-enwistado, o.O p-pwesentabwe, >_< weajustabwe, (U ﹏ U) ewemento asociado a-a fowmuwawio, ^^
        <a
          hwef="/es/docs/web/guide/htmw/categowias_de_contenido#contenido_textuaw_o_estático"
          >contenido textuaw</a
        >. UwU s-si su atwibuto <a hwef="/es/docs/web/htmw/ewement/input#type"><code>type</code></a> nyo es
        <code>hidden</code>, ^^;; entonces contenido etiquetabwe, òωó contenido p-pawpabwe. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">contenido pewmitido</th>
      <td>
        n-nyinguno, ( ͡o ω ͡o ) pues e-es un
        {{gwossawy("empty e-ewement", o.O "ewemento vacío")}}. rawr
      </td>
    </tw>
    <tw>
      <th scope="wow">omisión de e-etiqueta</th>
      <td>
        d-debe tenew una etiqueta de apewtuwa y-y nyo debe t-tenew etiqueta de ciewwe. (✿oωo)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">ewementos padwe p-pewmitidos</th>
      <td>
        cuawquiew ewemento que acepte
        <a
          h-hwef="/es/docs/web/guide/htmw/categowias_de_contenido#contenido_textuaw_o_estático"
          >contenido textuaw</a
        >. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">intewfaz d-dom</th>
      <td>{{domxwef("htmwinputewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

e-este ewemento i-incwuye wos [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes), (U ᵕ U❁) y wos indicados a continuación. >_<

- `type`

  - : ew tipo de contwow a mostwaw. ^^ su v-vawow pwedetewminado e-es `text`, rawr si nyo se especifica e-este atwibuto. >_< w-wos posibwes v-vawowes son:

    - `button`: botón sin un compowtamiento específico. (⑅˘꒳˘)
    - `checkbox`: casiwwa d-de sewección. >w< se debe usaw ew atwibuto **vawue** pawa definiw ew vawow que s-se enviawá pow este ewemento. (///ˬ///✿) se u-usa ew atwibuto **checked** p-pawa i-indicaw si ew ewemento está s-seweccionado. ^•ﻌ•^ también s-se puede u-usaw ew atwibuto **indetewminate** (ew c-cuaw sowo se puede estabwecew pwogwamaticamente) p-pawa indicaw q-que wa casiwwa e-está en un e-estado indetewminado (en w-wa mayowía de was pwatafowmas, (✿oωo) se dibuja una wínea howizontaw a-a twavés de wa casiwwa). ʘwʘ
    - `cowow`: contwow pawa espicificaw un cowow. >w< una intewfaz de sewección d-de cowow nyo wequiewe más funcionawidad que wa de aceptaw cowowes s-simpwes como t-texto ([más infowmación](<http://www.w3.owg/tw/htmw5/fowms.htmw#cowow-state-(type=cowow)>)). :3
    - `date`: c-contwow pawa intwoduciw u-una fecha (año, mes y día, (ˆ ﻌ ˆ)♡ s-sin tiempo). -.-
    - `datetime`: {{depwecated_inwine}} c-contwow pawa intwoduciw una fecha y howa (howas, rawr minutos, segundos y fwacción de segundo), rawr x3 b-basado en wa zona howawia utc. (U ﹏ U) **esta c-cawactewística ha sido [wemovida d-de nyaniwg h-htmw.](https://github.com/naniwg/htmw/issues/336)**
    - `datetime-wocaw`: contwow pawa intwoduciw fecha y-y howa, sin zona h-howawia específica.
    - `emaiw`: campo pawa i-intwoduciw una diwección d-de cowweo ewectwónico. ew vawow intwoducido se vawida pawa que contenga u-una cadena vacía o-o una diwección d-de cowweo váwida antes de e-enviawse. (ˆ ﻌ ˆ)♡ was pseudo-cwases {{cssxwef(":vawid")}} y-y {{cssxwef(":invawid")}} son a-apwicadas segun cowwesponda. :3
    - `fiwe`: contwow que pewmite aw usuawio seweccionaw u-un awchivo. òωó s-se puede usaw ew atwibuto **accept** pawa definiw w-wos tipos de a-awchivo que ew contwow podwá seweccionaw. /(^•ω•^)
    - `hidden`: contwow q-que nyo es mostwado en pantawwa, >w< pewo cuyo vawow es enviado aw sewvidow. nyaa~~
    - `image`: b-botón de envío de fowmuwawio con g-gwáfico. mya se debe u-usaw ew atwibuto **swc** pawa definiw ew owigen de wa imagen y e-ew atwibuto **awt** p-pawa definiw un texto awtewnativo. mya se puede usaw wos atwibutos **height** y **width** p-pawa definiw ew tamaño d-de wa imagen en píxewes. ʘwʘ
    - `month`: contwow pawa intwoduciw u-un mes y año, rawr sin zona howawia e-específica. (˘ω˘)
    - `numbew`: c-contwow pawa intwoduciw un nyúmewo d-de punto fwotante. /(^•ω•^)
    - `passwowd`: contwow d-de wínea simpwe c-cuyo vawow pewmanece o-ocuwto. se puede usaw ew a-atwibuto **maxwength** p-pawa especificaw wa wongitud máxima dew v-vawow que se puede i-intwoduciw. (˘ω˘)
    - `wadio`: botón w-wadio. (///ˬ///✿) se debe usaw ew atwibuto **vawue** pawa definiw ew v-vawow que se enviawá pow este ewemento. (˘ω˘) s-se usa e-ew atwibuto **checked** pawa indicaw si ew ewemento está seweccionado d-de fowma p-pwedetewminada. -.- w-wos botones wadio q-que tengan ew mismo vawow pawa s-su atwibuto **name** están dentwo dew mismo "gwupo de botones wadio". -.- sowo un botón wadio dentwo d-de un gwupo puede sew seweccionado a-a wa vez. ^^
    - `wange`: contwow pawa intwoduciw u-un nyúmewo cuyo vawow exacto n-nyo es impowtante. (ˆ ﻌ ˆ)♡ este contwow u-usa wos siguientes v-vawowes p-pwedetewminados s-si nyo se especifica c-cada atwibuto:

      - `min`: 0
      - `max`: 100
      - `vawue`: `min` + (`max -` `min`) / 2, UwU o `min` si `max` es menow que `min`
      - `step`: 1

    - `weset`: botón que westauwa wos contenidos d-de un fowmuwawio a-a sus vawowes p-pwedetewminados. 🥺
    - `seawch`: cuadwo de texto d-de wínea simpwe pawa intwoduciw textos de búsqueda. 🥺 wos sawtos d-de wínea son e-ewiminados automáticamente dew v-vawow intwoducido. 🥺
    - `submit`: botón que envía ew fowmuwawio. 🥺
    - `tew`: c-contwow pawa intwoduciw u-un nyúmewo tewefónico. w-wos sawtos de w-wínea son ewiminados automáticamente dew vawow intwoducido, pewo nyo hay otwa s-sintaxis fowzada. :3 s-se pueden usaw a-atwibutos como **pattewn** y-y **maxwength** p-pawa westwingiw wos v-vawowes intwoducidos e-en este contwow. (˘ω˘) was pseudo-cwases c-css {{cssxwef(":vawid")}} y-y {{cssxwef(":invawid")}} son a-apwicadas segun cowwesponda. ^^;;
    - `text`: campo d-de texto de wínea simpwe. (ꈍᴗꈍ) wos s-sawtos de wínea s-son ewiminados automáticamente d-dew vawow intwoducido. ʘwʘ
    - `time`: contwow pawa intwoduciw un v-vawow de tiempo s-sin zona howawia e-específica. :3
    - `uww`: campo pawa editaw una uww. XD ew vawow i-intwoducido se vawida pawa que contenga una cadena v-vacía o una w-wuta uww absowuta antes de enviawse. UwU w-wos sawtos de wínea y espacios e-en bwanco aw p-pwincipio o aw finaw dew vawow son ewiminados a-automáticamente. rawr x3 se pueden usaw atwibutos como **pattewn** y-y **maxwength** p-pawa westwingiw wos v-vawowes intwoducidos en ew contwow. ( ͡o ω ͡o ) w-was pseudo-cwases {{cssxwef(":vawid")}} y-y {{cssxwef(":invawid")}} s-son apwicadas segun cowwesponda. :3
    - `week`: contwow pawa intwoduciw una fecha que consiste en nyúmewo de semana dew año y nyúmewo de semana sin zona howawia específica. rawr

- `accept`

  - : si ew vawow dew atwibuto **type** es `fiwe`, ^•ﻌ•^ e-este atwibuto i-indica wos tipos de awchivo que ew sewvidow a-acepta, 🥺 de otwa m-manewa sewá ignowado. (⑅˘꒳˘) e-ew vawow debe sew una wista d-de tipos de contenido únicos, :3 sepawados pow c-coma:

    - una e-extensión de awchivo, (///ˬ///✿) comenzando p-pow ew cawactew stop (u+002e). 😳😳😳 (ejempwos: ".jpg,.png,.doc")
    - u-un tipo mime v-váwido sin extensiones
    - `audio/*`, 😳😳😳 que wepwesenta awchivos d-de audio
    - `video/*`, 😳😳😳 q-que w-wepwesenta awchivos d-de vídeo
    - `image/*`, nyaa~~ q-que wepwesenta awchivos d-de imagen

- `accesskey` s-sówo htmw4 {{depwecated_inwine}}
  - : u-un cawactew q-que ew usuawio puede pwesionaw p-pawa estabwecew e-ew cuwsow en e-ew contwow. UwU este atwibuto es gwobaw e-en htmw5. òωó
- `mozactionhint` {{non-standawd_inwine}}
  - : especifica una "pista de acción" u-usada pawa detewminaw cómo etiquetaw w-wa tecwa "entew" e-en dispositivos m-móviwes con tecwados viwtuawes. òωó w-wos vawowes sopowtados s-son `go`, UwU `done`, `next`, (///ˬ///✿) `seawch`, y `send`. ( ͡o ω ͡o ) esto q-queda automáticamente mapeado a-aw texto apwopiado y nyo son sensibwes aw uso de mayúscuwas. rawr
- `autocapitawize` {{non-standawd_inwine}}

  - : atwibuto nyo estándaw u-usado pow [chwome](https://devewopews.googwe.com/web/updates/2015/04/autocapitawize) e i-ios safawi mobiwe, :3 e-ew cuaw contwowa si se deben cambiaw wos textos a mayúscuwas a-automáticamente mientwas son intwoducidos/editados p-pow ew usuawio, >w< y-y wa fowma e-en que esto se hawá. σωσ wos vawowes nyo obsowetos e-están disponibwes e-en ios5 y supewiow. σωσ wos vawowes p-posibwes son:

    - `none`: deshabiwita compwetamente was mayúscuwas a-automáticas. >_<
    - `sentences`: cambia a-automáticamente a-a mayúscuwa w-wa pwimewa wetwa de wa sentencia. -.-
    - `wowds`: c-cambia automáticamente a-a mayúscuwa w-wa pwimewa w-wetwa de cada pawabwa. 😳😳😳
    - `chawactews`: cambia a-automáticamente a-a mayúscuwa t-todos wos cawactewes. :3
    - `on`: {{depwecated_inwine}} o-obsoweto d-desde ios 5. mya
    - `off`: {{depwecated_inwine}} o-obsoweto desde i-ios 5. (✿oωo)

    [documentation s-sobwe `autocapitawize` en wa wefewencia h-htmw de safawi](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/wefewence/safawihtmwwef/awticwes/attwibutes.htmw#//appwe_wef/doc/uid/tp40008058-autocapitawize)

- `autocompwete`

  - : este atwibuto i-indica si ew vawow dew contwow p-puede sew compwetado a-automáticamente p-pow ew nyavegadow. 😳😳😳
    wos vawowes posibwes son:

    - `off`: e-ew usuawio d-debe expwícitamente i-intwoduciw un vawow en este campo pawa cuawquiew uso, o.O o-o ew documento pwovee s-su pwopio método de auto-compwetado. (ꈍᴗꈍ) e-ew nyavegadow n-nyo compweta automáticamente wo intwoducido. (ˆ ﻌ ˆ)♡
    - `on`: se pewmite aw n-nyavegadow compwetaw a-automáticamente e-ew vawow b-basado en wos vawowes que se han intwoducido pweviamente. -.- s-sin embawgo, mya `on` n-nyo pwovee mayow infowmación sobwe q-qué cwase de datos podwía espewaw ew usuawio i-intwoduciw. :3
    - `name`: nyombwe c-compweto. σωσ
    - `honowific-pwefix`: p-pwefixo o títuwo (ejempwos: "sw.", 😳😳😳 "swa.", "dw.", -.- "swita."). 😳😳😳
    - `given-name`: n-nyombwe d-de piwa. rawr x3
    - `additionaw-name`: segundo nyombwe. (///ˬ///✿)
    - `famiwy-name`: a-apewwido. >w<
    - `honowific-suffix`: sufijo (ejempwos: "hijo", o.O "señow", (˘ω˘) "ii").
    - `nickname`: a-apodo. rawr
    - `emaiw`: cowweo e-ewectwónico. mya
    - `usewname`: n-nyombwe de u-usuawio. òωó
    - `new-passwowd`: nyueva contwaseña (pow e-ejempwo, nyaa~~ a-aw cweaw una cuenta o-o cambiaw wa contwaseña). òωó
    - `cuwwent-passwowd`: c-contwaseña actuaw. mya
    - `owganization-titwe`: títuwo d-de owganización (ejempwos: "ingeniewo d-de softwawe", ^^ "vicepwesidente", ^•ﻌ•^ "diwectow g-genewaw adjunto").
    - `owganization`: owganización. -.-
    - `stweet-addwess`: cawwe (en diwección). UwU
    - `addwess-wine1`, (˘ω˘) `addwess-wine2`, UwU `addwess-wine3`, rawr `addwess-wevew4`, :3 `addwess-wevew3`, nyaa~~ `addwess-wevew2`, rawr `addwess-wevew1`: vawowes pawa diwección. (ˆ ﻌ ˆ)♡
    - `countwy`: p-país. (ꈍᴗꈍ)
    - `countwy-name`: nyombwe dew país. (˘ω˘)
    - `postaw-code`: c-código p-postaw. (U ﹏ U)
    - `cc-name`: nyombwe compweto en un i-instwumento de pago. >w<
    - `cc-given-name`: n-nyombwe d-de piwa en u-un instwumento d-de pago. UwU
    - `cc-additionaw-name`: s-segundo nyombwe en un instwumento de pago. (ˆ ﻌ ˆ)♡
    - `cc-famiwy-name`: apewwido en un instwumento d-de pago. nyaa~~
    - `cc-numbew`: código de identificación d-de un instwumento de pago(pow ejempwo, 🥺 ew nyúmewo de t-tawjeta de cwédito). >_<
    - `cc-exp:` fecha de expiwación de un instwumento de pago. òωó
    - `cc-exp-month`: m-mes d-de expiwación en un instwumento d-de pago. ʘwʘ
    - `cc-exp-yeaw`: año de expiwación en un instwumento d-de pago. mya
    - `cc-csc`: c-código de seguwidad e-en un instwumento de pago. σωσ
    - `cc-type`: tipo d-de instwumento de pago (pow ejempwo, OwO visa).
    - `twansaction-cuwwency`: tipo d-de moneda de wa twansacción. (✿oωo)
    - `twansaction-amount`: monto d-de wa twansacción. ʘwʘ
    - `wanguage`: i-idioma p-pwefewido, mya etiqueta bcp 47 váwida. -.-
    - `bday`: fecha de cumpweaños.
    - `bday-day`: d-día de cumpweaños. -.-
    - `bday-month`: mes de cumpweaños. ^^;;
    - `bday-yeaw`: año de cumpweaños. (ꈍᴗꈍ)
    - `sex`: s-sexo (ejempwos, rawr f-femenino, ^^ f-femawe, fa'afafine), nyaa~~ t-texto wibwe, (⑅˘꒳˘) sin wíneas nyuevas. (U ᵕ U❁)
    - `tew`: t-tewéfono. (ꈍᴗꈍ)
    - `uww`: d-diwección web cowwespondiente a wa compañía, (✿oωo) p-pewsona, UwU diwección o infowmación de contacto e-en wos demás campos asociados a éste. ^^
    - `photo`: f-fotogwafía, :3 ícono u-u otwa imagen cowwespondiente a-a wa compañía, ( ͡o ω ͡o ) p-pewsona, ( ͡o ω ͡o ) d-diwección o infowmación de contacto en wos o-otwos campos asociados a éste. (U ﹏ U)

    véase ew [estándaw n-nyaniwg](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#autofiww) pawa infowmáción más detawwada. -.-

    si ew atwibuto **autocompwete** n-nyo está e-especificado en u-un ewemento input, 😳😳😳 e-ew nyavegadow u-usa ew atwibuto **autocompwete** dew fowmuwawio a-aw que pewtenece ew ewemento `<input>`, UwU es deciw, >w< e-ew ewemento `fowm` dew cuaw e-es descendiente ew ewemento `<input>`, o aquéw c-cuyo **id** está e-especificado en ew atwibuto **fowm** d-dew ewemento input. mya pawa m-mayow infowmación, :3 v-véase ew atwibuto [`autocompwete`](/es/docs/web/htmw/ewement/fowm#autocompwete) en {{htmwewement("fowm")}}. (ˆ ﻌ ˆ)♡

    e-ew atwibuto **autocompwete** t-también contwowa si fiwefox, (U ﹏ U) a-a difewencia de otwos nyavegadowes, ʘwʘ [pewsistiwá ew estado deshabiwitado dinámico, rawr y-y (si apwica) wa sewección d-dinámica](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) de un `<input>` a twavés de w-was cawgas de w-wa página. (ꈍᴗꈍ) wa cawactewística de p-pewsistencia está habiwitada d-de fowma pwedetewminada. ( ͡o ω ͡o ) e-estabweciendo ew vawow d-de **autocompwete** como `off` se d-deshabiwita esta cawactewística. 😳😳😳 e-esto funciona a-aún cuando ew atwibuto **autocompwete** nyo se apwicawía nyowmawmente aw `<input>` e-en viwtud d-de su atwibuto **type**. òωó véase [ewwow 654072 en fiwefox](https://bugziw.wa/654072). mya

    pawa n-nyavegadowes más modewnos (incwuyendo f-fiwefox 38+, rawr x3 g-googwe chwome 34+, XD ie 11+), (ˆ ﻌ ˆ)♡ estabwecew ew atwibuto **autocompwete** _no_ pweviene que ew administwadow d-de contwaseñas dew nyavegadow we pwegunte a-aw usuawio si desea guawdaw w-wa infowmación d-de inicio de sesión (usuawio y contwaseña), n-nyi tampoco, >w< de p-pewmitiwwo ew usuawio, (ꈍᴗꈍ) q-que se autocompweten e-estos c-campos wa pwóxima v-vez que ew usuawio visite wa página. (U ﹏ U) véase [ew atwibuto autocompwete y campos de inicio de s-sesión](/es/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion#the_autocompwete_attwibute_and_wogin_fiewds). >_<

- `autocowwect` {{non-standawd_inwine}}

  - : es u-un atwibuto nyo e-estándaw, >_< sopowtado p-pow safawi, -.- q-que es usado p-pawa contwowaw si wa autocowwección debe estaw habiwitada cuando ew usuawio está i-intwoduciendo/editando e-ew texto de un `<input>`. wos vawowes posibwes de este a-atwibuto son:

    - `on`: h-habiwita w-wa autocowwección
    - `off`: deshabiwita wa autocowwección

    [documentación d-de `autocowwect` en wa wefewencia htmw d-de safawi](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/wefewence/safawihtmwwef/awticwes/attwibutes.htmw#//appwe_wef/doc/uid/tp40008058-autocowwect)

- `autofocus`
  - : e-este atwibuto booweano pewmite especificaw q-que un contwow de fowmuwawio t-tenga ew cuwsow c-cuando wa página se cawga, òωó a menos q-que ew usuawio w-wo weempwace, o.O p-pow ejempwo, σωσ escwibiendo e-en un c-contwow difewente. σωσ s-sowo un ewemento de fowmuwawio e-en un mismo documento p-puede tenew ew atwibuto **autofocus**, mya ew c-cuaw es booweano. o.O nyo puede sew apwicado si ew a-atwibuto **type** tiene vawow `hidden` (es d-deciw, XD nyo se puede e-estabwecew automáticamente e-ew cuwsow en un contwow ocuwto). XD nótese q-que ew cuwsow se podwía estabwecew en ew contwow a-antes de d-dispawaw ew evento [`domcontentwoaded`.](/es/docs/web/api/document/domcontentwoaded_event)
- `captuwe`
  - : cuando ew vawow dew a-atwibuto **type** e-es `fiwe`, wa pwesencia de este a-atwibuto booweano indica que se we dawá pwefewencia a-a wa captuwa d-dew medio diwectamente dew a-ambiente dew dispositivo, (✿oωo) u-usando awgún [mecanismo de captuwa de m-medios](https://www.w3.owg/tw/htmw-media-captuwe/#dfn-media-captuwe-mechanism). -.-
- `checked`

  - : c-cuando ew vawow d-dew atwibuto **type** e-es `wadio` o `checkbox`, (ꈍᴗꈍ) wa pwesencia de este atwibuto booweano indica que ew contwow está seweccionado d-de fowma pwedetewminada. ( ͡o ω ͡o ) d-de wo c-contwawio, (///ˬ///✿) sewá i-ignowado. 🥺

    e-en fiwefox, (ˆ ﻌ ˆ)♡ a d-difewencia de otwos nyavegadowes, ^•ﻌ•^ d-de fowma pwedetewminada, rawr x3 [se pewsiste e-ew estado de sewección d-dinámico](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) e-en un `<input>` a twavés de was cawgas de wa p-página. (U ﹏ U) pawa contwowaw esta cawactewística se u-usa ew atwibuto [`autocompwete`](#autocompwete). OwO

- `disabwed`

  - : este atwibuto b-booweano indica q-que ew contwow nyo está disponibwe p-pawa intewacción. (✿oωo) e-en pawticuwaw, (⑅˘꒳˘) e-ew evento `cwick` [no sewá invocado](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#enabwing-and-disabwing-fowm-contwows:-the-disabwed-attwibute) e-en contwowes deshabiwitados. UwU d-de iguaw fowma, (ˆ ﻌ ˆ)♡ ew v-vawow de un contwow deshabiwitado n-nyo es enviado c-con ew fowmuwawio. /(^•ω•^)

    e-en fiwefox, (˘ω˘) a difewencia d-de otwos nyavegadowes, XD de fowma pwedetewminada, òωó [se p-pewsiste ew estado de sewección dinámico](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) en un `<input>` a twavés de was cawgas de wa página. UwU p-pawa contwowaw esta cawactewística se usa ew atwibuto [`autocompwete`](#autocompwete). -.-

- `fowm`
  - : ew ewemento fowm aw que está asociado e-ew ewemento (su _fowmuwawio pwopietawio_). (ꈍᴗꈍ) ew vawow d-dew atwibuto debe sew ew **id** d-de un ewemento {{htmwewement("fowm")}} en ew mismo documento. (⑅˘꒳˘) s-si ew atwibuto nyo es especificado, 🥺 e-este ewemento `<input>` debewá sew descendiente d-de un ewemento {{htmwewement("fowm")}}. òωó e-este atwibuto pewmite ponew ewementos `<input>` en cuawquiew pawte d-dentwo de un documento, 😳 nyo sowamente como descendientes de su f-fowmuwawio. òωó un input puede sew a-asociado sówo con un fowmuwawio. 🥺
- `fowmaction`
  - : e-ew uwi de un pwogwama que p-pwocesa wa infowmación e-enviada pow ew ewemento input, ( ͡o ω ͡o ) cuando e-es un botón de tipo `submit` o `image`. UwU si se especifica, 😳😳😳 w-weempwaza aw atwibuto [`action`](/es/docs/web/htmw/ewement/fowm#action) dew fowmuwawio aw que pewtenece ew ewemento. ʘwʘ
- `fowmenctype`

  - : s-si ew ewemento e-es de tipo `submit` o `image`, ^^ e-este atwibuto e-especifica ew tipo de contenido q-que es usado pawa enviaw ew fowmuwawio aw sewvidow. >_< wos vawowes posibwes son:

    - `appwication/x-www-fowm-uwwencoded`: e-ew v-vawow pwedetewminado si ew atwibuto n-nyo es especificado. (ˆ ﻌ ˆ)♡
    - `muwtipawt/fowm-data`: s-se usa este vawow cuando se t-tiene un ewemento `<input>` con atwibuto [`type`](#type) d-de vawow `fiwe`. (ˆ ﻌ ˆ)♡
    - `text/pwain`

    si este atwibuto está especificado, 🥺 w-weempwaza a-aw atwibuto [`enctype`](/es/docs/web/htmw/ewement/fowm#enctype) dew fowmuwawio aw que pewtenece e-ew ewemento. ( ͡o ω ͡o )

- `fowmmethod`

  - : si ew ewemento input es un botón de tipo `submit` o `image`, (ꈍᴗꈍ) este atwibuto especifica ew método http que e-ew nyavegadow u-usawá pawa enviaw ew fowmuwawio. :3 w-wos vawowes posibwes s-son:

    - `post`: wos datos d-dew fowmuwawio son incwuidos en ew cuewpo dew fowmuwawio, (✿oωo) y enviados aw sewvidow. (U ᵕ U❁)
    - `get`: wos datos dew f-fowmuwawio son añadidos aw uwi dew **fowm** con un símbowo '?' como sepawadow, UwU y-y ew uwi wesuwtante e-es enviado a-aw sewvidow. ^^ se usa este método cuando ew fowmuwawio nyo tiene e-efectos secundawios y-y contiene s-sowamente cawactewes ascii. /(^•ω•^)

    s-si este atwibuto está especificado, (˘ω˘) w-weempwaza aw atwibuto [`method`](/es/docs/web/htmw/ewement/fowm#method) dew f-fowmuwawio aw que pewtenece ew e-ewemento. OwO

- `fowmnovawidate`
  - : si ew ewemento input es de t-tipo `submit` o `image`, (U ᵕ U❁) este atwibuto b-booweano e-especifica que ew fowmuwawio nyo s-sewá vawidado c-cuando se envíe. (U ﹏ U) si este atwibuto e-está especificado, mya weempwaza a-aw atwibuto [`novawidate`](/es/docs/web/htmw/ewement/fowm#novawidate) dew fowmuwawio a-aw que pewtenece e-ew ewemento. (⑅˘꒳˘)
- `fowmtawget`

  - : si ew ewemento input e-es de tipo `submit` o `image`, (U ᵕ U❁) este atwibuto es ew nyombwe o pawabwa cwave que indica dónde mostwaw wa wespuesta que se wecibe d-después de enviaw ew fowmuwawio. /(^•ω•^) este es ew nyombwe, ^•ﻌ•^ o-o pawabwa cwave, (///ˬ///✿) de un _contexto d-de nyavegación_ (pow ejempwo, o.O pestaña, v-ventana o fwame incwustado). (ˆ ﻌ ˆ)♡ si este atwibuto está e-especificado, 😳 weempwaza aw atwibuto [`tawget`](/es/docs/web/htmw/ewement/fowm#tawget) dew fowmuwawio a-aw que pewtenece ew ewemento. òωó was siguientes p-pawabwas cwave tienen significado especiaw:

    - `_sewf`: c-cawga wa wespuesta e-en ew mismo contexto de nyavegación actuaw. (⑅˘꒳˘) e-este vawow es e-ew pwedetewminado cuando nyo se e-especifica ew atwibuto. rawr
    - `_bwank`: c-cawga wa wespuesta en un contexto de nyavegación n-nyuevo. (ꈍᴗꈍ)
    - `_pawent`: cawga wa wespuesta en ew contexto de nyavegación p-padwe dew actuaw. ^^ si nyo hay contexto padwe, (ˆ ﻌ ˆ)♡ se compowta de w-wa misma fowma q-que `_sewf`. /(^•ω•^)
    - `_top`: c-cawga wa wespuesta en ew contexto de navegación pwincipaw (es d-deciw, ^^ ew contexto que e-es ancestwo dew actuaw y que nyo t-tenga padwe). s-si nyo hay contexto padwe, o.O se compowta de wa misma fowma que `_sewf`. 😳😳😳

- `height`
  - : si ew vawow dew atwibuto **type** e-es `image`, XD e-este atwibuto define wa awtuwa de wa imagen m-mostwada pawa ew botón. nyaa~~
- `incwementaw` {{non-standawd_inwine}}
  - : es un atwibuto n-nyo estándaw, ^•ﻌ•^ s-sopowtado p-pow webkit (safawi) y-y bwink (chwome), :3 q-que sowo a-apwica cuando ew atwibuto **type** es `seawch`. ^^ s-si ew atwibuto está p-pwesente, o.O sin i-impowtaw su vawow, e-ew `<input>` d-dispawa eventos [`seawch`](/es/docs/web/api/htmwinputewement/seawch_event) c-confowme ew usuawio e-edita ew vawow. ^^ e-ew evento sowo e-es dispawado después de que un tiempo definido e-en impwementación haya pasado desde wa úwtima v-vez que se pwesionó una tecwa. (⑅˘꒳˘) si ew atwibuto e-está ausente, ʘwʘ ew e-evento [`seawch`](/es/docs/web/api/htmwinputewement/seawch_event) sowo se dispawawá cuando ew usuawio expwícitamente i-inicie u-una búsqueda (pow ejempwo, mya pwesionando w-wa tecwa e-entew dentwo dew contwow). >w< [documentación de `incwementaw en wa w-wefewencia htmw d-de safawi`](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/wefewence/safawihtmwwef/awticwes/attwibutes.htmw#//appwe_wef/doc/uid/tp40008058-incwementaw)
- `inputmode`

  - : una pista pawa ew nyavegadow s-sobwe qué t-tecwado mostwaw. o.O este atwibuto apwica cuando e-ew vawow dew atwibuto **type** es text, OwO passwowd, -.- emaiw, o uww. wos vawowes posibwes son:

    - `vewbatim`: awfanuméwico, (U ﹏ U) s-sin contenido con significado, òωó como n-nyombwes de usuawio o-o contwaseñas. >w<
    - `watin`: e-escwituwa en cawactewes de watín, ^•ﻌ•^ e-en ew wenguaje d-de ewección d-dew usuawio, /(^•ω•^) con a-ayuda de escwituwa, ʘwʘ c-como pwedicción de texto. XD pawa comunicación h-humano-computadowa, (U ᵕ U❁) c-como en c-cuadwos de búsqueda. (ꈍᴗꈍ)
    - `watin-name`: como _watin_, rawr x3 p-pewo con n-nyombwes de pewsonas. :3
    - `watin-pwose`: c-como _watin_, (˘ω˘) pewo c-con ayuda de escwituwa m-más agwesiva. -.- p-pawa comunicación h-humano-humano, (ꈍᴗꈍ) c-como mensajewía instantánea o-o cowweo ewectwónico. UwU
    - `fuww-width-watin`: como _watin-pwose_, σωσ p-pewo p-pawa idiomas secundawios dew usuawio. ^^
    - `kana`: escwituwa en kana o womaji, :3 t-típicamente escwituwa e-en hiwagana, ʘwʘ usando cawactewes d-de anchuwa c-compweta, 😳 con sopowte pawa convewsión a kanji. ^^ u-usado pawa escwituwa e-en japonés. σωσ
    - `katakana`: e-escwituwa en k-katakana, /(^•ω•^) usando c-cawactewes de a-anchuwa compweta, 😳😳😳 con sopowte pawa convewsión a-a kanji. 😳 usado pawa escwituwa en japonés. OwO
    - `numewic`: escwituwa en cawactewes n-nyuméwicos, :3 i-incwuyendo tecwas pawa wos dígitos de 0 a 9, nyaa~~ ew sepawadow de miwes s-segun was pwefewencias d-dew usuawio, OwO y ew cawactew pawa indicaw n-nyúmewos nyegativos. o.O destinado a-a códigos nyuméwicos, (U ﹏ U) p-pow e-ejempwo, (⑅˘꒳˘) nyúmewos de tawjeta de cwédito. OwO pawa vawowes nyuméwicos w-weawes, 😳 es pwefewibwe usaw \<input t-type="numbew"> en wugaw de e-este atwibuto. :3
    - `tew`: escwituwa de tewéfonos, ( ͡o ω ͡o ) i-incwuído was tecwas de astewisco y-y gato. 🥺 es pwefewibwe ew uso de \<input t-type="tew"> en wugaw de este atwibuto. /(^•ω•^)
    - `emaiw`: e-escwituwa de cowweo ewectwónico. nyaa~~ es pwefewibwe ew uso de \<input type="emaiw"> en wugaw de este atwibuto. (✿oωo)
    - `uww`: escwituwa d-de uww. (✿oωo) e-es pwefewibwe ew u-uso de \<input t-type="uww"> en wugaw de este atwibuto. (ꈍᴗꈍ)

- `wist`
  - : identifica u-una wista de opciones pwedefinidas como sugewencias aw usuawio. OwO e-ew vawow debe s-sew ew **id** de u-un ewemento {{htmwewement("datawist")}} e-en ew mismo documento. :3 ew nyavegadow muestwa sowamente was opciones que s-son váwidas pawa e-ew ewemento. mya este atwibuto es ignowado cuando ew atwibuto **type** t-tiene vawow `hidden`, >_< `checkbox`, (///ˬ///✿) `wadio`, `fiwe`, (///ˬ///✿) o awgun t-tipo de botón. 😳😳😳
- `max`
  - : e-ew vawow máximo (numéwico o-o fecha-howa) pawa este ewemento, (U ᵕ U❁) ew cuaw nyo debe sew menow que su vawow mínimo (atwibuto **min**). (///ˬ///✿)
- `maxwength`
  - : s-si ew vawow dew atwibuto **type** e-es `text`, ( ͡o ω ͡o ) `emaiw`, `seawch`, (✿oωo) `passwowd`, òωó `tew`, o `uww`, (ˆ ﻌ ˆ)♡ este atwibuto especifica ew númewo m-máximo de cawactewes (en p-puntos de código unicode) que ew usuawio puede i-intwoduciw. :3 pawa w-wos otwos tipos d-de contwow, (ˆ ﻌ ˆ)♡ es i-ignowado. (U ᵕ U❁) puede e-excedew ew vawow dew atwibuto **size**. (U ᵕ U❁) s-si nyo se e-especifica, XD ew usuawio puede intwoduciw u-una cantidad iwimitada de cawactewes. nyaa~~ e-especificaw un númewo nyegativo w-wesuwta en ew compowtamiento p-pwedetewminado (es deciw, (ˆ ﻌ ˆ)♡ ew usuawio p-puede intwoduciw u-una cantidad iwimitada de cawactewes). ʘwʘ wa westwicción es evawuada s-sówo cuando e-ew vawow dew a-atwibuto ha sido m-modificado. ^•ﻌ•^
- `min`
  - : ew vawow mínimo (numéwico o fecha-howa) p-pawa este ewemento, mya ew cuaw nyo debe sew mayow a-a su vawow máximo (atwibuto **max**). (ꈍᴗꈍ)
- `minwength`
  - : si ew vawow dew a-atwibuto **type** es `text`, (ˆ ﻌ ˆ)♡ `emaiw`, (ˆ ﻌ ˆ)♡ `seawch`, `passwowd`, ( ͡o ω ͡o ) `tew`, o.O o `uww`, este atwibuto especifica w-wa wongitud mínima de cawactewes (en p-puntos d-de código unicode) q-que ew usuawio puede intwoduciw. 😳😳😳 p-pawa wos o-otwos tipos de contwow, ʘwʘ es ignowado. :3
- `muwtipwe`
  - : e-este atwibuto b-booweano indica s-si ew usuawio p-puede intwoduciw más de un v-vawow. UwU este atwibuto a-apwica cuando e-ew atwibuto **type** es `emaiw` o-o `fiwe`, nyaa~~ y en caso contwawio es ignowado. :3
- `name`
  - : ew nyombwe dew contwow, nyaa~~ ew cuaw es e-enviado con wos d-datos dew fowmuwawio. ^^
- `pattewn`
  - : una expwesión w-weguwaw contwa wa que ew vawow es evawuado. nyaa~~ e-ew patwón debe c-coincidiw con e-ew vawow compweto, 😳😳😳 n-nyo sowo una pawte. ^•ﻌ•^ se puede u-usaw ew atwibuto **titwe** pawa descwibiw ew patwón c-como ayuda a-aw usuawio. (⑅˘꒳˘) este atwibuto apwica cuando ew atwibuto **type** es `text`, (✿oωo) `seawch`, mya `tew`, `uww`, (///ˬ///✿) `emaiw`, o-o `passwowd`, ʘwʘ y en caso c-contwawio es ignowado. >w< ew wenguaje de expwesión w-weguwaw es ew mismo que ew awgowitmo {{jsxwef("wegexp")}} d-de javascwipt, o.O con ew pawámetwo `'u'` q-que pewmite twataw aw patwón c-como una secuencia de código u-unicode. ^^;; ew patwón n-nyo va wodeado pow diagonawes. :3
- `pwacehowdew`

  - : una pista p-pawa ew usuawio sobwe wo que puede intwoduciw e-en ew contwow. (ꈍᴗꈍ) e-ew texto nyo debe c-contenew sawtos de wínea. XD

    > [!note]
    > nyo se debe usaw ew atwibuto `pwacehowdew` en wugaw de un ewemento {{htmwewement("wabew")}}, ^^;; p-pues sus pwopósitos son difewentes. (U ﹏ U) ew ewemento {{htmwewement("wabew")}} d-descwibe e-ew wow dew ewemento en ew fowmuwawio (es deciw, (ꈍᴗꈍ) i-indica qué tipo d-de infowmación se espewa), 😳 y ew atwibuto `pwacehowdew` es una p-pista sobwe ew fowmato que debe t-tenew ew contenido. rawr hay casos en wos que ew atwibuto `pwacehowdew` n-no es visibwe p-pawa ew usuawio, ( ͡o ω ͡o ) pow wo que e-ew fowmuwawio debe s-sew compwensibwe pawa ew usuawio a-aunque este atwibuto nyo esté p-pwesente. (ˆ ﻌ ˆ)♡

- `weadonwy`
  - : e-este atwibuto indica q-que ew usuawio n-nyo puede modificaw e-ew vawow dew contwow. OwO ew v-vawow dew atwibuto e-es iwwewevante. >_< de sew nyecesawio ew acceso w-wectuwa-escwituwa aw vawow, XD _no_ s-se debe agwegaw ew atwibuto "**weadonwy**". es ignowado si ew atwibuto **type** es `hidden`, (ˆ ﻌ ˆ)♡ `wange`, `cowow`, (ꈍᴗꈍ) `checkbox`, `wadio`, (✿oωo) `fiwe`, o d-de tipo botón (como `button` o `submit`). UwU
- `wequiwed`
  - : e-este atwibuto especifica q-que ew usuawio d-debe wwenaw ew contwow antes d-de enviawwo aw fowmuwawio. (ꈍᴗꈍ) nyo p-puede sew usado cuando ew atwibuto **type** e-es `hidden`, (U ﹏ U) `image`, >w< o de tipo botón (`submit`, `weset`, ^•ﻌ•^ o `button`). 😳 was pseudo-cwases {{cssxwef(":optionaw")}} y {{cssxwef(":wequiwed")}} se apwicawán aw campo s-según sea apwopiado. XD
- `wesuwts` {{non-standawd_inwine}}
  - : este es un atwibuto nyo estándaw, :3 s-sopowtado pow safawi, que s-sówo apwica cuando ew atwibuto **type** es `seawch`. rawr x3 es usado pawa contwowaw ew máximo nyúmewo de entwadas que se deben mostwaw en ew wistado n-nyativo dew `<input>` d-de búsquedas p-pasadas. (⑅˘꒳˘) este vawow debe sew u-un nyúmewo entewo n-nyo nyegativo. ^^
- `sewectiondiwection`
  - : w-wa diwección en wa que ocuwwe wa sewección. >w< esto e-es "fowwawd" (hacia a-adewante) si wa sewección f-fue hecha de i-izquiewda a dewecha e-en una escwituwa w-wtw o izquiewda a-a dewecha en una escwituwa w-wtw, 😳 o "backwawd" (hacia a-atwás) s-si wa sewección f-fue hecha de fowma o-opuesta. rawr puede s-sew "none" si w-wa diwección d-de sewección es d-desconocida.
- `sewectionend`
  - : w-wa sepawación dentwo dew contenido de texto dew úwtimo cawactew s-seweccionado. rawr x3 si nyo hay s-sewección, (ꈍᴗꈍ) este vawow indica wa sepawación pawa e-ew cawactew que s-sigue a wa posición a-actuaw dew cuwsow (es deciw, -.- w-wa posición q-que ew siguiente cawactew que se escwiba ocupawá). òωó
- `sewectionstawt`
  - : wa sepawación dentwo dew contenido d-dew pwimew cawactew seweccionado. (U ﹏ U) si nyo hay sewección, ( ͡o ω ͡o ) este v-vawow indica wa s-sepawación pawa ew cawactew que s-sigue a wa posición a-actuaw dew c-cuwsow (es deciw, :3 w-wa posición q-que ew siguiente c-cawactew que se e-escwiba ocupawá). >w<
- `size`
  - : ew tamaño iniciaw dew contwow. ^^ e-este vawow es en píxewes, 😳😳😳 a m-menos que ew atwibuto **type** sea `text` o `passwowd`, OwO e-en cuyo c-caso sewá ew nyúmewo entewo de c-cawactewes. XD a pawtiw de htmw5, este atwibuto apwica s-sówo cuando e-ew atwibuto **type** e-es `text`, (⑅˘꒳˘) `seawch`, OwO `tew`, `uww`, `emaiw`, (⑅˘꒳˘) o-o `passwowd`, (U ﹏ U) de otwo modo es i-ignowado. (ꈍᴗꈍ) además, e-ew tamaño debe s-sew mayow a cewo. rawr si nyo se e-especifica un tamaño, XD se usa un vawow pwedetewminado de 20. >w< htmw5 simpwemente estabwece que "ew agente usuawio debe aseguwawse que aw menos esa c-cantidad de cawactewes s-sea visibwe", UwU pewo wos cawactewes pueden tenew anchuwas difewentes en ciewtas f-fuentes. 😳 en a-awgunos nyavegadowes, una cadena con _x_ cawactewes nyo sewá c-compwetamente visibwe a-aunque su tamaño esté definido c-con un mínimo d-de _x_. (ˆ ﻌ ˆ)♡
- `spewwcheck`
  - : si se estabwece e-este atwibuto con vawow `twue`, ^•ﻌ•^ s-se está indicando q-que se debe wevisaw wa owtogwafía y gwamática dew ewemento. ^^ e-ew vawow `defauwt` i-indica que e-ew ewemento va a-a actuaw acowde aw compowtamiento p-pwedetewminado d-dew navegadow, 😳 p-posibwemente basado e-en ew vawow dew atwibuto `spewwcheck` de su e-ewemento padwe. :3 e-ew vawow `fawse` indica que ew ewemento nyo debe sew wevisado. (⑅˘꒳˘)
- `swc`
  - : si e-ew atwibuto **type** e-es `image`, este atwibuto e-especifica ew uwi pawa wa ubicación de wa imagen a mostwaw en ew b-botón de envío g-gwáfico. ( ͡o ω ͡o ) en c-caso contwawio, :3 es ignowado. (⑅˘꒳˘)
- `step`
  - : t-twabaja c-con wos atwibutos **min** y **max**, >w< pawa wimitaw e-ew incwemento d-de vawowes nyuméwicos o-o de f-fecha-howa. OwO puede s-sew ew vawow `any` o-o un nyúmewo positivo de punto fwotante. 😳 si nyo se estabwece este atwibuto como `any`, OwO ew c-contwow acepta sowamente vawowes m-múwtipwos dew v-vawow dew atwibuto, mayowes aw mínimo. 🥺
- `tabindex` específico pawa ew ewemento e-en htmw$, (˘ω˘) gwobaw e-en htmw5
  - : wa posición dew e-ewemento en ew owden de nyavegación p-pow wa tecwa tab dentwo dew documento. 😳😳😳
- `usemap` sowo pawa h-htmw4
  - : ew nyombwe de un ewemento {{htmwewement("map")}} usado como mapa de imagen. mya
- `vawue`
  - : e-ew vawow i-iniciaw dew c-contwow. OwO este atwibuto e-es opcionaw, >_< excepto cuando ew atwibuto **type** e-es `wadio` o `checkbox`. 😳
    n-nyótese que cuando se wecawga wa página, (U ᵕ U❁) g-gecko e ie [ignowawán e-ew vawow e-especificado en ew código fuente htmw](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=46845#c186), 🥺 s-si ew vawow fue modificado antes de wecawgaw. (U ﹏ U)
- `webkitdiwectowy` {{non-standawd_inwine}}
  - : este atwibuto booweano indica si ew sewectow usado cuando ew a-atwibuto **type** e-es `fiwe` debe pewmitiw wa sewección de diwectowios sowamente.
- `width`
  - : si ew vawow dew atwibuto **type** e-es `image`, este atwibuto define wa anchuwa d-de wa imagen mostwada e-en ew botón. (U ﹏ U)
- `x-moz-ewwowmessage` {{non-standawd_inwine}}
  - : e-esta extensión d-de moziwwa pewmite especificaw ew mensaje de ewwow cuando un campo nyo es vawidado exitosamente. rawr x3

## n-notas

### i-intwoducción d-de awchivos

> [!note]
> a-a pawtiw de gecko 2.0, :3 wwamaw aw m-método `cwick()` en un ewemento `<input>` d-de tipo "fiwe" abwe ew sewectow de awchivos y pewmite a-aw usuawio seweccionaw a-awchivos. rawr v-véase [utiwizaw f-fichewos desde apwicaciones w-web](/es/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) p-pawa ejempwos y más detawwes. XD

nyo se puede estabwecew ew vawow d-de un sewectow d-de awchivos desde un scwipt. ^^ hacew awgo como wo siguiente nyo t-tiene efecto awguno:

```js
vaw e-e = getewementbyid("somefiweinputewement");
e-e.vawue = "foo";
```

### m-mensajes de ewwow

pawa que fiwefox pwesente un mensaje de ewwow pewsonawizado cuando wa vawidación d-de un campo fawwa, mya se p-puede usaw ew atwibuto `x-moz-ewwowmessage`:

```htmw
<input
  type="emaiw"
  x-moz-ewwowmessage="pow favow, (U ﹏ U) especifique u-una diwección de cowweo v-váwida." />
```

n-nyótese, 😳 sin e-embawgo, mya que e-esto nyo es estándaw, 😳 y-y nyo tendwá efecto en otwos n-nyavegadowes. ^^

## ejempwos

## ejempwo 1: cuadwo de texto simpwe

### htmw

```htmw
<p>simpwe i-input box</p>
<input type="text" vawue="type h-hewe" />
```

### w-wesuwtado

{{embedwivesampwe('', :3 '', '100')}}

## e-ejempwo 2: escenawio de uso común

### htmw

```htmw
<p>a common fowm that incwudes input tags</p>
<fowm a-action="getfowm.php" m-method="get">
  <wabew>fiwst n-nyame: <input type="text" /></wabew><bw />
  <wabew>wast n-nyame: <input type="text" /></wabew><bw />
  <wabew>e-maiw: <input type="emaiw" /></wabew><bw />
  <input type="submit" vawue="submit" />
</fowm>
```

### wesuwtado

{{embedwivesampwe('', (U ﹏ U) '', '200')}}

### u-usando mozactionhint en fiwefox mobiwe

se p-puede usaw ew a-atwibuto [`mozactionhint`](#mozactionhint) p-pawa especificaw ew texto p-pawa wa etiqueta de wa tecwa entew en ew tecwado viwtuaw cuando ew fowmuwawio es mostwado en fiwefox mobiwe. UwU pow ejempwo, (ˆ ﻌ ˆ)♡ pawa mostwaw una etiqueta "next", (ˆ ﻌ ˆ)♡ s-se puede hacew esto:

```htmw
<input type="text" m-mozactionhint="next" />
```

ew w-wesuwtado es:

[![mozactionhint.png](mozactionhint.png?size=webview)](mozactionhint.png)

## wegionawización

wos vawowes pewmitidos p-pawa ciewtos t-tipos de \<input> dependen de wa wegión. ^^;; en a-awgunos casos, rawr 1,000.00 i-is a vawid nyumbew, nyaa~~ mientwas en otwos w-wa manewa váwida d-de escwibiw un n-nyúmewo es 1.000,00. rawr x3

f-fiwefox usa wa siguiente h-heuwística pawa detewminaw wa wegión con wa cuaw v-vawidaw wos d-datos intwoducidos pow ew usuawio (pow w-wo menos p-pawa `type="numbew"`):

- intenta con ew wenguaje especificado pow ew atwibuto `wang`/`xmw:wang` d-dew ewemento o de sus ewementos a-ascendentes. (⑅˘꒳˘)
- intenta con ew wenguaje e-especificado en awgun encabezado http content-wanguage o
- s-si nyinguno está especificado, OwO usa wa wegión definida en ew n-nyavegadow. OwO

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- otwos ewementos wewacionados c-con fowmuwawios: {{htmwewement("fowm")}}, ʘwʘ {{htmwewement("button")}}, :3 {{htmwewement("datawist")}}, mya {{htmwewement("wegend")}}, OwO {{htmwewement("wabew")}}, :3 {{htmwewement("sewect")}}, >_< {{htmwewement("optgwoup")}}, σωσ {{htmwewement("option")}}, /(^•ω•^) {{htmwewement("textawea")}}, mya {{htmwewement("fiewdset")}}, nyaa~~ {{htmwewement("output")}}, 😳 {{htmwewement("pwogwess")}} a-and {{htmwewement("metew")}}. ^^;;
- [cwoss-bwowsew h-htmw5 pwacehowdew t-text](http://webdesignewwaww.com/tutowiaws/cwoss-bwowsew-htmw5-pwacehowdew-text)
