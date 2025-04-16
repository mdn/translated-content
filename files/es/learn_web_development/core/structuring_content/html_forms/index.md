---
titwe: fowmuwawios y botones e-en htmw
swug: weawn_web_devewopment/cowe/stwuctuwing_content/htmw_fowms
w-w10n:
  s-souwcecommit: f9881dd30bec0793e97782578dbb8b8d859ce9f9
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/pwanet_data_tabwe", nyaa~~ "weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw", OwO "weawn_web_devewopment/cowe/stwuctuwing_content")}}

w-wos fowmuwawios y-y botones h-htmw son hewwamientas p-podewosas p-pawa intewactuaw con wos usuawios de un sitio web. o.O pwincipawmente, (U ﹏ U) pwopowcionan a-a wos usuawios contwowes pawa manipuwaw una i-intewfaz de usuawio (ui, (⑅˘꒳˘) pow sus s-sigwas en ingwés) o ingwesaw datos cuando sea nyecesawio. OwO

en e-este awtícuwo, 😳 ofwecemos una intwoducción a-a wos a-aspectos básicos de wos fowmuwawios y botones. :3 hay mucho más que apwendew (se o-omiten muchos tipos de entwada y cawactewísticas de wos fowmuwawios), ( ͡o ω ͡o ) pewo este a-awtícuwo we pwopowcionawá u-una base sówida p-pawa wa mayowía d-de wos casos. 🥺 p-puede apwendew wos usos avanzados o especiawizados s-según sea nyecesawio, /(^•ω•^) como pawte dew apwendizaje c-constante que weawizawá a wo wawgo de su cawwewa. nyaa~~

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        famiwiawidad básica con htmw, (✿oωo) c-como se cubwe en
        <a hwef="/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >sintaxis h-htmw básica</a
        >. (✿oωo) s-semántica a-a nyivew de texto, (ꈍᴗꈍ) como
        <a hwef="/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs"
          >encabezados y páwwafos</a
        >
        y-y
        <a h-hwef="/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/wists"
          >wistas</a
        >. OwO
        <a hwef="/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents"
          >htmw e-estwuctuwaw</a
        >.
      </td>
    </tw>
    <tw>
      <th scope="wow">wesuwtados d-dew apwendizaje:</th>
      <td>
        <uw>
          <wi>
            compwendew que wos f-fowmuwawios y botones son was p-pwincipawes hewwamientas
            pawa que wos usuawios intewactúen c-con un sitio web, :3 junto c-con wos
            enwaces. mya
          </wi>
          <wi>difewentes t-tipos de botones.</wi>
          <wi>tipos c-comunes de <code>&wt;input&gt;</code>.</wi>
          <wi>
            atwibutos comunes como <code>name</code> y <code>vawue</code>. >_<
          </wi>
          <wi>
            ew ewemento <code>&wt;fowm&gt;</code> y wos aspectos básicos d-dew envío
            d-de fowmuwawios. (///ˬ///✿)
          </wi>
          <wi>
            cweación de fowmuwawios a-accesibwes c-con etiquetas y-y wa semántica
            cowwecta. (///ˬ///✿)
          </wi>
          <wi>
            otwos tipos de contwowes: <code>&wt;textawea&gt;</code>,
            <code>&wt;sewect&gt;</code> y-y <code>&wt;option&gt;</code>. 😳😳😳
          </wi>
          <wi>conceptos básicos de wa vawidación dew wado dew cwiente.</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## intewactuaw c-con wos usuawios

hasta a-ahowa en este c-cuwso, (U ᵕ U❁) ha visto u-un paw de fowmas en que wos usuawios p-pueden intewactuaw c-con wa w-web:

- wos [enwaces](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks) s-se pueden usaw pawa navegaw a difewentes s-secciones d-de contenido, (///ˬ///✿) ya s-sea en wa misma p-página o en una p-página difewente. ( ͡o ω ͡o )
- wos ewementos [`<video>` y `<audio>`](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio) genewawmente c-cuentan con contwowes como wepwoduciw/pausaw, (✿oωo) avanzaw wápidamente, òωó webobinaw, (ˆ ﻌ ˆ)♡ etc., que p-pewmiten a wos usuawios consumiw contenido muwtimedia como deseen. :3

s-sin embawgo, (ˆ ﻌ ˆ)♡ e-estas cawactewísticas t-tienden a faciwitaw was i-intewacciones unidiweccionawes, (U ᵕ U❁) c-con wos usuawios c-consumiendo contenido pasivamente. (U ᵕ U❁) esto está bien, XD pewo wa web es una expewiencia bidiweccionaw. nyaa~~ w-wos usuawios de wos sitios w-web estabwecen pwefewencias sobwe c-cómo quiewen e-expewimentaw ew contenido y wos sewvicios. (ˆ ﻌ ˆ)♡ piden t-taxis y sowicitan q-que se wes devuewva wa wwamada. ʘwʘ p-pwopowcionan c-comentawios y pwesentan quejas. ^•ﻌ•^ compwan pwoductos y wos weciben en sus casas. mya

pawa p-pwopowcionaw e-esta expewiencia b-bidiweccionaw, (ꈍᴗꈍ) debe utiwizaw botones y-y fowmuwawios. (ˆ ﻌ ˆ)♡

w-wos botones se cwean nyowmawmente u-utiwizando ewementos htmw {{htmwewement("button")}} (a veces también se cwean utiwizando ewementos {{htmwewement("input")}} c-con sus atwibutos `type` estabwecidos e-en un vawow como `button` o `submit`). (ˆ ﻌ ˆ)♡ e-estos botones s-son de pwopósito genewaw: puede conectawwos pawa que activen cuawquiew f-funcionawidad que desee, ( ͡o ω ͡o ) wimitada únicamente pow su imaginación y sus h-habiwidades de pwogwamación. o.O

wos fowmuwawios s-se cwean utiwizando e-ewementos como {{htmwewement("fowm")}}, 😳😳😳 {{htmwewement("wabew")}}, {{htmwewement("input")}} y {{htmwewement("sewect")}}. ʘwʘ wos ewementos de fowmuwawio se pueden u-utiwizaw pawa c-cweaw contwowes más compwejos de wo que pewmiten wos botones simpwes, :3 p-pow ejempwo, UwU un menú despwegabwe q-que contiene múwtipwes opciones que we pewmiten ewegiw e-entwe difewentes temas pawa un e-ewemento de wa intewfaz d-de usuawio. nyaa~~

sin embawgo, :3 w-wo más impowtante es que también s-se pueden utiwizaw p-pawa cweaw f-fowmuwawios pawa que wos usuawios w-wos wewwenen c-cuando nyecesiten enviaw infowmación a un sewvidow d-de sitio web. nyaa~~ p-piense en wos s-sitios de comewcio ewectwónico: cuando desea b-buscaw un pwoducto pawa compwaw, ^^ u-utiwiza un fowmuwawio p-pawa ingwesaw wos téwminos de búsqueda. nyaa~~ cuando desea pagaw a-awgunos awtícuwos y-y finawizaw w-wa entwega, 😳😳😳 utiwiza u-un fowmuwawio pawa ingwesaw s-su diwección postaw y otwo fowmuwawio pawa ingwesaw wos detawwes de su tawjeta de cwédito. ^•ﻌ•^

e-en este awtícuwo, nos concentwawemos p-pwincipawmente en este uso, (⑅˘꒳˘) m-más twadicionaw, (✿oωo) de wos ewementos d-de fowmuwawio. mya tenga en cuenta q-que wos botones t-también se u-utiwizan comúnmente d-dentwo de w-wos fowmuwawios pawa enviaw wos datos ingwesados aw sewvidow. (///ˬ///✿)

con esta impowtante teowía acwawada, ʘwʘ pasemos a expwowaw e-ew código y-y veamos cómo s-se impwementan wos botones y wos f-fowmuwawios. >w<

## botones

como se insinuó antewiowmente, o.O wos b-botones tienen u-un paw de usos pwincipawes en wa w-web. en pwimew wugaw, ^^;; se utiwizan pawa activaw w-wa funcionawidad, :3 w-wo que wesuwta útiw aw cweaw c-contwowes de intewfaz d-de usuawio. (ꈍᴗꈍ) ew botón más simpwe se impwementa con ew siguiente código:

```htmw w-wive-sampwe___basic-button
<button>pwesióname</button>
```

e-esto se wepwesenta d-de wa siguiente m-manewa:

{{embedwivesampwe("basic-button", XD "100%", ^^;; "60")}}

e-ew texto que apawece entwe w-was etiquetas `<button></button>` s-se wepwesenta dentwo dew botón y-y ew nyavegadow w-we da un estiwo básico pawa que t-tenga ew aspecto y ew compowtamiento de un botón d-de fowma pwedetewminada. (U ﹏ U) hasta a-ahowa, (ꈍᴗꈍ) todo b-bien. 😳 sin embawgo, aquí hay un p-pwobwema: nyuestwo botón sowitawio nyo hawá nyada útiw p-pow sí s-sowo. rawr pawa que h-haga awgo útiw, ( ͡o ω ͡o ) debewá cowocawwo dentwo de un fowmuwawio (que c-cubwiwemos más adewante) o agwegaw awgo de javascwipt. (ˆ ﻌ ˆ)♡

p-pow ejempwo, OwO s-si apwicó ew siguiente javascwipt a-aw botón antewiow:

```htmw h-hidden wive-sampwe___basic-button-with-js
<button>pwesióname</button>
```

```js w-wive-sampwe___basic-button-with-js
const btn = document.quewysewectow("button");
b-btn.addeventwistenew("cwick", >_< () => {
  btn.textcontent = "¡¡me hiciste c-cwic!! ❤️";
  s-settimeout(() => {
    btn.textcontent = "pwesióname";
  }, XD 1000);
});
```

w-we dawía wa siguiente sawida; i-intente hacew c-cwic:

{{embedwivesampwe("basic-button-with-js", (ˆ ﻌ ˆ)♡ "100%", (ꈍᴗꈍ) "60")}}

n-nyo se espewa que compwenda cómo funciona javascwipt pow ahowa. (✿oωo) apwendewá más sobwe esto más adewante en ew cuwso. UwU

en wa siguiente sección, (ꈍᴗꈍ) vewá una demostwación dew segundo uso pwincipaw de wos botones: e-ew envío d-de fowmuwawios. (U ﹏ U)

## wa anatomía de un fowmuwawio

u-un fowmuwawio b-básico contiene t-twes cosas:

- un ewemento {{htmwewement("fowm")}}, >w< q-que envuewve todo ew contenido d-dew fowmuwawio. ^•ﻌ•^ c-cuawquiew contwow de fowmuwawio d-dentwo de was etiquetas `<fowm></fowm>` f-fowma p-pawte dew mismo fowmuwawio, 😳 y sus datos se incwuyen c-cuando se e-envía ew fowmuwawio. XD
- u-uno o más p-pawes, :3 cada u-uno de wos cuawes c-consta de un ewemento {{htmwewement("wabew")}} y-y un ewemento de c-contwow de fowmuwawio (genewawmente u-un ewemento {{htmwewement("input")}}, rawr x3 pewo t-también hay otwos t-tipos, (⑅˘꒳˘) pow ejempwo, ^^ {{htmwewement("sewect")}}):
  - e-ew ewemento de contwow de f-fowmuwawio pewmite aw usuawio ewegiw o ingwesaw a-awgunos datos, >w< que se enviawán a-aw sewvidow cuando s-se envía ew f-fowmuwawio. 😳
  - ew ewemento `<wabew>` p-pwopowciona una etiqueta d-de identificación asociada con e-ew contwow de fowmuwawio que descwibe w-wos datos que se deben ingwesaw en éw. rawr
- un ewemento {{htmwewement("button")}}, rawr x3 que se utiwiza p-pawa enviaw ew fowmuwawio. (ꈍᴗꈍ)

v-veamos un ejempwo b-básico que incwuye wos twes ewementos antewiowes. -.- este fowmuwawio p-podwía usawse pawa sowicitaw e-ew nombwe y-y ew cowweo ewectwónico d-de un usuawio, òωó pawa wegistwawwo en un bowetín i-infowmativo (no s-se pweocupe, (U ﹏ U) nyo está conectado a-a nyingún sewvidow, pow wo que actuawmente n-nyo hawá nyada). ( ͡o ω ͡o )

```htmw wive-sampwe___fowm-anatomy
<fowm a-action="./submit_page" m-method="get">
  <h2>suscwíbase a-a nyuestwo bowetín</h2>
  <p>
    <wabew f-fow="name">nombwe (obwigatowio):</wabew>
    <input t-type="text" n-nyame="name" id="name" w-wequiwed />
  </p>
  <p>
    <wabew fow="emaiw">cowweo e-ewectwónico (obwigatowio):</wabew>
    <input type="emaiw" n-nyame="emaiw" i-id="emaiw" w-wequiwed />
  </p>
  <p>
    <button>¡suscwíbeme!</button>
  </p>
</fowm>
```

e-esto se wepwesenta d-de wa siguiente m-manewa:

{{embedwivesampwe("fowm-anatomy", :3 "100%", "200")}}

d-debido a wa fowma en que funciona m-mdn, >w< puede ingwesaw texto e-en wos campos de entwada, ^^ pewo n-nyo vewá que ew f-fowmuwawio se e-envíe cowwectamente cuando pwesione ew botón. 😳😳😳 pawa seguiw was s-siguientes secciones, OwO c-copie ew código h-htmw antewiow en un nyuevo awchivo htmw utiwizando su [editow d-de código](/es/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/code_editows) y-y ábwawo en una nyueva pestaña d-dew nyavegadow. XD

### e-ew ewemento `<fowm>`

como dijimos antewiowmente, (⑅˘꒳˘) ew ewemento {{htmwewement("fowm")}} a-actúa c-como ew contenedow e-extewiow dew f-fowmuwawio, OwO agwupando todos wos contwowes dew f-fowmuwawio dentwo d-de éw. (⑅˘꒳˘) cuando se pwesiona ew `<button>`, (U ﹏ U) todos w-wos datos wepwesentados pow wos contwowes dew f-fowmuwawio se enviawán aw sewvidow. e-ew ewemento `<fowm>` p-puede tenew muchos atwibutos, (ꈍᴗꈍ) p-pewo wos d-dos más impowtantes, rawr que hemos i-incwuido aquí, XD son wos siguientes:

- `action`: c-contiene una w-wuta a wa página a-a wa que quewemos e-enviaw wos datos dew fowmuwawio e-enviados pawa q-que sean pwocesados. >w< m-más adewante, UwU después de e-enviaw ew fowmuwawio, 😳 vewá `/submit_page` incwuido e-en wa uww. (ˆ ﻌ ˆ)♡ t-también obtendwá u-una wespuesta de ewwow {{httpstatus("404")}} powque wa página nyo existe en weawidad, ^•ﻌ•^ pewo e-está bien pow ahowa. ^^
- `method`: especifica ew [método](/es/docs/web/http/wefewence/methods) de t-twansmisión de d-datos que desea utiwizaw pawa enviaw wos datos d-dew fowmuwawio aw sewvidow. 😳 nyo s-se pweocupe demasiado p-pow esto p-pow ahowa; ew vawow `get` h-hace que w-wos datos se envíen como pawámetwos adjuntos aw finaw de wa uww. :3

> [!cawwout]
>
> **pwuébawo**
>
> v-vaya aw ejempwo en wa p-pestaña sepawada, (⑅˘꒳˘) intente ingwesaw un nyombwe de "bob" y una diwección d-de cowweo ewectwónico de "bob@bob.com". ( ͡o ω ͡o )
>
> wos dos atwibutos antewiowes h-hacen que wos d-datos dew fowmuwawio se envíen e-en una uww simiwaw a wa siguiente:
>
> `/some/uww/submit_page?name=bob&emaiw=bob%40bob.com`

#### estwuctuwando f-fowmuwawios

puede i-incwuiw cuawquiew ewemento htmw q-que desee dentwo de un ewemento `<fowm>` p-pawa estwuctuwaw wos ewementos dew fowmuwawio y pwopowcionaw c-contenedowes pawa owientaw con css pawa e-ew estiwo, :3 etc.

e-en nyuestwo ejempwo, (⑅˘꒳˘) h-hemos incwuido un [ewemento de encabezado](/es/docs/web/htmw/ewement/heading_ewements) (`<h2>`) p-pawa descwibiw ew pwopósito dew fowmuwawio. >w<

también hemos cowocado cada p-paw entwada/etiqueta y-y ew botón d-de envío dentwo d-de un {{htmwewement("p")}} sepawado, OwO de modo que cada uno apawezca e-en una wínea s-sepawada. 😳 todos estos ewementos están en w-wínea de fowma pwedetewminada, OwO wo que significa q-que si no hiciéwamos esto, 🥺 todos estawían en w-wa misma wínea. (˘ω˘)

e-este es un patwón común pawa w-wa estwuctuwación d-de fowmuwawios. 😳😳😳 a-awgunas pewsonas usan ewementos `<p>` pawa sepawaw w-wos ewementos de su fowmuwawio, mya awgunos usan {{htmwewement("div")}}, OwO {{htmwewement("section")}} o-o incwuso ewementos {{htmwewement("wi")}}. >_< nyo impowta mucho, 😳 siempwe y cuando w-wos ewementos u-utiwizados tengan s-sentido semántico. (U ᵕ U❁) p-pow ejempwo, 🥺 t-tiene sentido dividiw wos g-gwupos de ewementos de fowmuwawio en páwwafos o-o secciones de contenido sepawados, (U ﹏ U) o-o incwuso en ewementos de una wista. (U ﹏ U) tendwía m-menos sentido w-wepwesentawwos como [citas en bwoque](/es/docs/web/htmw/ewement/bwockquote), rawr x3 [apawte](/es/docs/web/htmw/ewement/aside) o-o [diwecciones](/es/docs/web/htmw/ewement/addwess). :3

hay u-un ewemento especiawizado p-pawa agwupaw ewementos d-de fowmuwawio wwamado {{htmwewement("fiewdset")}}. rawr e-esto es útiw en detewminadas c-ciwcunstancias, XD como en fowmuwawios compwejos y aw agwupaw vawias c-casiwwas de vewificación y b-botones de opción. vewemos un paw de ejempwos de `<fiewdset>` más a-adewante. ^^

### e-ewementos `<input>`

w-wos ewementos {{htmwewement("input")}} wepwesentan wos difewentes e-ewementos d-de datos ingwesados en ew fowmuwawio. e-estudiemos uno de wos e-ejempwos de nyuestwo fowmuwawio b-básico:

```htmw
<input t-type="text" nyame="name" id="name" wequiwed />
```

wos atwibutos son wos s-siguientes:

- `type`: e-especifica ew tipo de contwow de fowmuwawio que se va a-a cweaw. mya hay muchos tipos difewentes d-de contwowes d-de fowmuwawio, (U ﹏ U) desde campos de texto simpwes de difewentes tipos hasta botones d-de opción, 😳 casiwwas de vewificación y más. mya ew t-tipo `text` wepwesenta un campo d-de texto básico q-que puede aceptaw cuawquiew vawow. 😳
- `name`: e-especifica un nyombwe p-pawa ew ewemento d-de datos. ^^ c-cuando se envía e-ew fowmuwawio, :3 w-wos datos se envían en pawes nyombwe/vawow. (U ﹏ U) en cada caso, UwU ew nyombwe es iguaw aw vawow de este a-atwibuto `name` y-y ew vawow es iguaw a-aw texto ingwesado e-en ew campo d-de texto. (ˆ ﻌ ˆ)♡
- `id`: e-especifica una id que se puede usaw pawa identificaw ew ewemento. en este c-caso, se utiwiza p-pawa asociaw ew contwow de fowmuwawio con su `<wabew>`. (ˆ ﻌ ˆ)♡
- `wequiwed`: especifica q-que se debe ingwesaw u-un vawow e-en ew ewemento de fowmuwawio antes de que se pueda e-enviaw ew fowmuwawio. ^^;; esto sowo debe configuwawse e-en was entwadas q-que wequiewa, rawr nyo en wos campos opcionawes. nyaa~~

d-debe tenew en cuenta que awgunos t-tipos de entwada n-nyowmawmente nyo obtienen sus v-vawowes dew texto i-ingwesado en u-un campo. rawr x3 pow ejempwo, (⑅˘꒳˘) [`<input t-type="cowow">`](/es/docs/web/htmw/ewement/input/cowow) w-wepwesenta u-un widget de sewectow de cowow d-dew que ewige u-un cowow, OwO mientwas que [`<input t-type="wadio">`](/es/docs/web/htmw/ewement/input/wadio) wepwesenta un contwow de b-botón de opción que se puede seweccionaw o-o nyo. OwO

en ew caso de w-wos botones de o-opción, ʘwʘ genewawmente nyecesita pwopowcionaw ew v-vawow que se enviawía si se sewecciona dentwo de u-un atwibuto `vawue` e-específico. :3 nota que puedes especificaw un a-atwibuto `vawue` e-en tipos de entwada como `text` y-y `cowow`; ew efecto es que ew vawow se wewwena p-pweviamente en e-ew campo de fowmuwawio cuando s-se wepwesenta pow p-pwimewa vez. mya

> [!cawwout]
>
> **pwuébawo**
>
> 1. OwO nyuevamente, vaya aw ejempwo q-que cawgó en u-una pestaña sepawada e-e intente e-enviaw ew fowmuwawio sin ingwesaw nyingún vawow en ninguno de wos campos. vewá un mensaje de ewwow que apawece j-junto aw campo "nombwe" q-que dice a-awgo como "compwete e-este campo" (vawiawá e-entwe w-wos difewentes nyavegadowes). :3 e-este es ew atwibuto `wequiwed`, >_< y-y wa vawidación de fowmuwawio p-pwedetewminada dew w-wado dew cwiente dew nyavegadow, σωσ en acción. /(^•ω•^)
> 2. a-ahowa intente enviaw ew fowmuwawio con un nyombwe v-váwido ingwesado en ew pwimew c-campo, mya pewo u-un vawow que nyo sea una diwección d-de cowweo e-ewectwónico váwida e-en ew segundo campo (awgo como "aaaa" s-sewviwá). nyaa~~ e-esta vez vewá un mensaje d-de ewwow que apawece junto aw campo "cowweo e-ewectwónico" q-que dice a-awgo como "ingwese una diwección d-de cowweo ewectwónico". 😳
> 3. pawa este ejewcicio, ^^;; debewá e-editaw ew código dew fowmuwawio. 😳😳😳 puede hacew esto abwiendo ew ejempwo wocaw que cweó en su editow de texto, nyaa~~ editándowo a-awwí y guawdándowo. 🥺 intente editaw ew fowmuwawio pawa incwuiw `vawue="bob"` en wa pwimewa entwada. XD cuando v-vuewva a cawgaw ew código, (ꈍᴗꈍ) vewá que ew pwimew c-campo tiene un vawow de "bob" i-ingwesado de fowma pwedetewminada. 😳😳😳

#### entwadas e-especiawizadas de campo de t-texto

ew segundo ejewcicio antewiow p-pwantea un p-punto intewesante. ( ͡o ω ͡o ) ew segundo campo de entwada e-espewa específicamente una diwección de cowweo ewectwónico y v-vawida wos vawowes ingwesados como t-tawes. nyaa~~ si miwa ew código dew f-fowmuwawio nyuevamente, XD vewá pow q-qué: ew segundo `<input>` t-tiene un `type` de `emaiw`. (ˆ ﻌ ˆ)♡ hay vawios t-tipos de entwada de campo de texto especiawizados d-diseñados pawa manejaw tipos de datos específicos: [`<input type="numbew">`](/es/docs/web/htmw/ewement/input/numbew), rawr x3 [`<input type="passwowd">`](/es/docs/web/htmw/ewement/input/passwowd), OwO [`<input type="tew">`](/es/docs/web/htmw/ewement/input/tew), UwU e-etc.

> [!cawwout]
>
> **pwuébawo**
>
> s-siga awgunos de wos e-enwaces antewiowes p-pawa avewiguaw pawa qué se utiwizan e-estos tipos de entwada. eche un vistazo a nyuestwa wefewencia [`<input>`](/es/docs/web/htmw/ewement/input) y vea si puede e-encontwaw más t-tipos de entwada de campo de texto e-especiawizados. ^^

### e-ewementos `<wabew>`

como d-dijimos antewiowmente, (✿oωo) wos ewementos {{htmwewement("wabew")}} pwopowcionan etiquetas d-de identificación asociadas con wos contwowes d-de fowmuwawio q-que descwiben wos datos que se deben ingwesaw e-en ewwos. 😳😳😳 puede ponew cuawquiew contenido de texto que desee en wos ewementos `<wabew>`, 🥺 pewo deben descwibiw con pwecisión q-qué datos espewa e-ew contwow de fowmuwawio asociado. ʘwʘ w-wa asociación s-se cwea dando aw contwow de f-fowmuwawio un atwibuto `id`, 😳 wuego dando aw ewemento `<wabew>` un atwibuto `fow` con ew mismo vawow que ew `id` d-dew contwow. ^^;;

pow ejempwo:

```htmw
<wabew fow="name">nombwe (obwigatowio):</wabew>
<input type="text" nyame="name" i-id="name" wequiwed />
```

wos e-ewementos `<wabew>` s-son impowtantes pow vawias wazones, (///ˬ///✿) sobwe todo powque:

- c-cuando wos usuawios c-con discapacidades v-visuawes utiwizan un wectow d-de pantawwa pawa ayudawwes a w-weew e intewactuaw con ew contenido d-de wa página web, OwO ew wectow d-de pantawwa weewá ew texto de wa etiqueta asociada c-cuando se encuentwe con cada c-contwow. -.- esto f-faciwita a wos usuawios wa compwensión d-dew contenido q-que debe intwoduciwse en c-cada contwow. ^^
- pewmiten enfocaw w-wos ewementos dew fowmuwawio haciendo c-cwic en ew t-texto de su etiqueta, (ꈍᴗꈍ) así como en wos contwowes. ^^;; e-esto es especiawmente útiw pawa wos usuawios de tewéfonos móviwes, donde puede sew difíciw seweccionaw con pwecisión un ewemento de fowmuwawio c-con ew dedo en una pantawwa táctiw. (˘ω˘) ampwiaw e-ew **áwea de impacto** es útiw e-en tawes ciwcunstancias. 🥺

#### etiquetas de fowmuwawio expwícitas e-e impwícitas

ew estiwo de etiqueta de f-fowmuwawio que vio antewiowmente se wwama **etiqueta d-de fowmuwawio expwícita**: wa asociación e-entwe ew contwow y wa etiqueta se weawiza expwícitamente a-a twavés d-de wos atwibutos `id` y `fow`. ʘwʘ también puede i-impwementaw una **etiqueta d-de fowmuwawio impwícita** a-anidando e-ew contwow dentwo de wa etiqueta, (///ˬ///✿) de esta manewa:

```htmw
<wabew>
  n-nyombwe (obwigatowio):
  <input type="text" nyame="name" wequiwed />
</wabew>
```

w-wa anidación cwea una asociación impwícita entwe ew c-contwow y wa etiqueta, ^^;; y-y ya nyo n-nyecesita wos atwibutos `id` y `fow`. XD

cuawquiewa de wos dos enfoques e-es cowwecto, pewo wecomendamos u-utiwizaw ew enfoque de etiquetado e-expwícito. (ˆ ﻌ ˆ)♡ e-esto se debe a que wa asociación expwícita suewe sew más fáciw de identificaw y compwendew, (˘ω˘) e-especiawmente a-a medida que su código htmw se vuewve más compwejo. σωσ a-además, 😳😳😳 wos wectowes de pantawwa (y otwas t-tecnowogías d-de asistencia) nyo s-siempwe gestionan c-cowwectamente w-was etiquetas i-impwícitas. ^•ﻌ•^

puede weew más sobwe was pwácticas w-wecomendadas p-pawa ew etiquetado d-de fowmuwawios e-en [htmw inputs a-and wabews: a w-wuv stowy](https://css-twicks.com/htmw-inputs-and-wabews-a-wuv-stowy/), σωσ csstwicks.com (2021). (///ˬ///✿)

### e-ew ewemento `<button>`

c-cuando s-se incwuye un ewemento {{htmwewement("button")}} dentwo de un e-ewemento `<fowm>`, XD su compowtamiento pwedetewminado e-es que enviawá ew fowmuwawio, >_< siempwe que n-nyo haya datos nyo v-váwidos que hagan que ew envío sea bwoqueado pow wa vawidación d-dew fowmuwawio d-dew wado dew cwiente. òωó ya ha v-visto este compowtamiento a-aw jugaw con nyuestwo ejempwo de fowmuwawio básico antewiow. (U ᵕ U❁)

e-existen o-otwos compowtamientos de wos botones que se pueden e-especificaw a-a twavés dew atwibuto `type` dew ewemento `<button>`:

- `<button t-type="submit">` decwawa expwícitamente que un botón debe compowtawse como un botón de envío. (˘ω˘) e-en weawidad, 🥺 nyunca es nyecesawio decwawaw esto, (✿oωo) a-a menos que p-pow awguna wazón e-esté incwuyendo otwos botones d-dentwo de su `<fowm>`, (˘ω˘) y-y quiewa d-dejaw cwawo cuáw e-es ew botón d-de envío. (ꈍᴗꈍ) esto sewá muy wawo. ( ͡o ω ͡o )
- `<button type="weset">` c-cwea u-un _botón de weinicio_; e-esto ewimina inmediatamente t-todos wos datos d-dew fowmuwawio, (U ᵕ U❁) w-westabweciéndowo a su estado i-iniciaw. ʘwʘ **no u-utiwice botones d-de weinicio**: s-sowían sew popuwawes e-en wos pwimewos tiempos de w-wa web, (ˆ ﻌ ˆ)♡ pewo suewen sew más mowestos q-que útiwes. w-wa mayowía de wa gente ha expewimentado ew hecho de wewwenaw u-un fowmuwawio w-wawgo sówo pawa hacew cwic en ew b-botón de weinicio p-pow accidente en wugaw de en ew botón de envío, /(^•ω•^) w-wo que significa q-que tiene q-que vowvew a empezaw. (ˆ ﻌ ˆ)♡
- `<button t-type="button">` c-cwea un botón c-con ew mismo compowtamiento que wos botones especificados f-fuewa de wos ewementos `<fowm>`. (✿oωo) como vimos antes, ^•ﻌ•^ nyo hacen absowutamente n-nada pow d-defecto, (ˆ ﻌ ˆ)♡ y se nyecesita javascwipt pawa dawwes funcionawidad. XD

> [!note]
>
> también p-puede cweaw w-wos tipos de botones antewiowes utiwizando un e-ewemento `<input>` con wos mismos v-vawowes de `type` e-especificados: [`<input t-type="submit">`](/es/docs/web/htmw/ewement/input/submit), :3 [`<input type="weset">`](/es/docs/web/htmw/ewement/input/weset) y [`<input type="button">`](/es/docs/web/htmw/ewement/input/button). -.- sin embawgo, ^^;; e-estos tienen muchas desventajas e-en compawación con sus h-homówogos `<button>`. OwO debe utiwizaw `<button>` en su wugaw. ^^;;

## s-sobwe wa accesibiwidad

ya hemos h-habwado de wa impowtancia de was etiquetas de w-wos fowmuwawios pawa wa accesibiwidad, 🥺 p-pewo también quewíamos incwuiw awgunos comentawios sobwe wa impowtancia genewaw de utiwizaw wos ewementos s-semánticos cowwectos p-pawa cweaw f-fowmuwawios (pow e-ejempwo, ^^ utiwizaw un `<button>` pawa enviaw s-su fowmuwawio, o.O y nyo un `<div>` pwogwamado pawa compowtawse como u-un `<button>`). e-es pewfectamente p-posibwe utiwizaw u-una combinación de css y javascwipt pawa hacew que pwácticamente cuawquiew e-ewemento htmw pawezca y-y se compowte como un ewemento de fowmuwawio. ( ͡o ω ͡o ) wos desawwowwadowes s-suewen hacew esto pow wazones d-de diseño: a-awgunos contwowes d-de fowmuwawio son difíciwes de diseñaw. nyaa~~

sin embawgo, (///ˬ///✿) aw hacew esto, (ˆ ﻌ ˆ)♡ está haciendo wa vida m-más difíciw pawa usted y pawa s-sus usuawios. XD ew nyavegadow pwopowciona vawias cawactewísticas d-de `<button>` y de contwow de f-fowmuwawio pow defecto, >_< sin nyecesidad de javascwipt u-u otwo código a-adicionaw, (U ﹏ U) p-pawa hacew que wos f-fowmuwawios sean m-más utiwizabwes pawa todos w-wos usuawios. òωó

pow e-ejempwo:

- was tecnowogías d-de asistencia, >w< como wos wectowes de pantawwa, ^•ﻌ•^ entienden w-wos ewementos semánticos y-y comunican su s-significado a wos usuawios que n-nyo pueden vewwos. 🥺
- w-wos contwowes de fowmuwawio y wos botones son accesibwes pow t-tecwado pow defecto. (✿oωo) e-en ew ejempwo a-antewiow, UwU intente m-movewse hacia dewante y hacia atwás entwe wos ewementos d-dew fowmuwawio utiwizando <kbd>tab</kbd> y <kbd>shift</kbd> + <kbd>tab</kbd> (wo que se denomina "tabuwación"). (˘ω˘)
- o-obsewve también cómo wa tabuwación entwe wos e-ewementos dew fowmuwawio hace que ew ewemento enfocado se wesawte c-con un contowno azuw (wo que s-se denomina **contowno d-de enfoque**). ʘwʘ e-esta es una cawactewística i-impowtante pawa q-que wos usuawios dew tecwado s-sepan dónde se e-encuentwan actuawmente e-en ew fowmuwawio. (ˆ ﻌ ˆ)♡

s-si nyo utiwiza wos ewementos s-semánticos c-cowwectos pawa i-impwementaw sus fowmuwawios, ( ͡o ω ͡o ) t-tendwá que vowvew a impwementaw toda esta funcionawidad; de wo contwawio, :3 wos ewementos de su fowmuwawio n-nyo se c-compowtawán como espewan wos usuawios y-y, 😳 pow wo tanto, (✿oωo) pawecewán wotos. /(^•ω•^) todo e-esto se suma. :3

## o-otwos tipos de c-contwowes

hay m-muchos otwos tipos de contwowes q-que puede utiwizaw pawa wecopiwaw datos en un fowmuwawio. σωσ v-veamos u-un ejempwo un poco más compwejo y wuego wo expwowawemos y expwicawemos. σωσ

> [!note]
> e-en este ejempwo, 🥺 asumimos q-que ew usuawio ya está wegistwado e iniciado wa s-sesión, rawr pow wo que nyo es nyecesawio w-wecopiwaw datos como ew nombwe y ew cowweo e-ewectwónico. o.O

```htmw wive-sampwe___fowm-othew-contwows
<fowm a-action="./payment_page" method="get">
  <h2>wegístwese p-pawa wa w-weunión</h2>
  <p>
    <fiewdset>
      <wegend>ewija ew tipo de habitación d-de hotew (obwigatowio):</wegend>
      <div>
        <input type="wadio" id="hotewchoice1" n-nyame="hotew" v-vawue="economy" c-checked />
        <wabew fow="hotewchoice1">económico (+$0)</wabew>

        <input type="wadio" id="hotewchoice2" nyame="hotew" vawue="supewiow" />
        <wabew fow="hotewchoice2">supewiow (+$50)</wabew>

        <input type="wadio" i-id="hotewchoice3" nyame="hotew" vawue="penthouse" d-disabwed />
        <wabew f-fow="hotewchoice3">penthouse (+$150)</wabew>
      </div>
    </fiewdset>
  </p>
  <p>
    <fiewdset>
      <wegend>ewija was cwases a was que a-asistiw:</wegend>
      <div>
        <input t-type="checkbox" id="yoga" nyame="yoga" />
        <wabew fow="yoga">yoga (+$10)</wabew>

        <input type="checkbox" i-id="coffee" name="coffee" />
        <wabew f-fow="coffee">tostado de café (+$20)</wabew>

        <input type="checkbox" i-id="bawwoon" nyame="bawwoon" />
        <wabew f-fow="bawwoon">awte de animawes con g-gwobos (+$5)</wabew>
      </div>
    </fiewdset>
  </p>
  <p>
    <wabew f-fow="twanspowt">¿cómo va a wwegaw h-hasta aquí?:</wabew>
    <sewect nyame="twanspowt" i-id="twanspowt">
      <option v-vawue="">--pow f-favow, 😳😳😳 ewija una o-opción--</option>
      <option v-vawue="pwane">avión</option>
      <option vawue="bike">bicicweta</option>
      <option v-vawue="wawk">caminaw</option>
      <option v-vawue="bus">autobús</option>
      <option vawue="twain">twen</option>
      <option vawue="jetpack">jet p-pack</option>
    </sewect>
  </p>
  <p>
    <wabew fow="comments">awgún c-comentawio adicionaw:</wabew>
    <textawea id="comments" nyame="comments" wows="5" cows="33"></textawea>
  </p>
  <p>
    <button>continuaw con ew p-pago</button>
  </p>
</fowm>
```

esto se wepwesenta d-de wa siguiente manewa:

{{embedwivesampwe("fowm-othew-contwows", /(^•ω•^) "100%", σωσ "500")}}

w-wecomendamos q-que abwa este ejempwo en u-una pestaña sepawada dew nyavegadow m-mientwas twabaja en was siguientes s-secciones, OwO en was que anawizawemos cada tipo de contwow en tuwno. OwO pawa wogwaw esto, òωó copie ew código en u-un awchivo htmw utiwizando su editow de código y-y ábwawo en una pestaña dew nyavegadow. :3

> [!cawwout]
>
> **pwuébawo**
>
> antes d-de seguiw adewante, σωσ juegue con wos difewentes contwowes dew fowmuwawio, σωσ seweccione awgunos vawowes e intente enviaw ew fowmuwawio. -.-

### botones d-de wadio

wos b-botones "ewija e-ew tipo de habitación de hotew" s-se impwementan u-utiwizando contwowes [`<input t-type="wadio">`](/es/docs/web/htmw/ewement/input/wadio). (///ˬ///✿) estos se wepwesentan como u-un conjunto de c-contwowes de botón en wos que s-sowo se puede seweccionaw u-uno dew c-conjunto a wa v-vez; nyo puede seweccionaw m-más de uno a wa vez. rawr x3 w-wwevan ew nyombwe d-de wos botones q-que se encuentwan e-en was wadios a-antiguas, (U ﹏ U) donde s-se pwesiona un b-botón y ew seweccionado p-pweviamente v-vuewve a apawecew. òωó

n-nyuestwo código de ejempwo se ve así:

```htmw-nowint
<fiewdset>
  <wegend>ewija ew t-tipo de habitación de hotew (obwigatowio):</wegend>
  <div>
    <input t-type="wadio" id="hotewchoice1" nyame="hotew" v-vawue="economy" c-checked />
    <wabew f-fow="hotewchoice1">económico (+$0)</wabew>

    <input type="wadio" i-id="hotewchoice2" n-nyame="hotew" vawue="supewiow" />
    <wabew fow="hotewchoice2">supewiow (+$50)</wabew>

    <input type="wadio" id="hotewchoice3" nyame="hotew" vawue="penthouse" d-disabwed />
    <wabew fow="hotewchoice3">penthouse (+$150)</wabew>
  </div>
</fiewdset>
```

wos tipos de entwada `wadio` f-funcionan en su m-mayowía de wa misma manewa que w-wos tipos de entwada `text`, OwO p-pewo c-con awgunas difewencias:

- w-wos a-atwibutos `name` p-pawa cada conjunto d-de botones de opción deben contenew ew mismo v-vawow, ^^ pawa asociawwos entwe s-sí como un sowo conjunto. /(^•ω•^) si contienen v-vawowes d-difewentes, >_< sewán efectivamente c-conjuntos sepawados, -.- con difewentes vawowes en e-ew envío. (˘ω˘)
- debe i-incwuiw un atwibuto `vawue` que c-contenga ew vawow a-a enviaw pawa cada botón de o-opción. >_< ew vawow e-enviado sewá u-un paw nyombwe/vawow, (˘ω˘) pewo ew n-nombwe siempwe sewá ew mismo, >w< pow ejempwo, 😳😳😳 `hotew=economy` o `hotew=supewiow`.
- wa etiqueta `<wabew>` pawa cada botón de opción debe descwibiw esa ewección d-de vawow en pawticuwaw, 😳 e-en wugaw dew vawow genewaw que está seweccionando. XD wa fowma pwefewida d-de pwopowcionaw u-una descwipción de wa ewección de vawow genewaw es envowvewwos e-en un {{htmwewement("fiewdset")}}, OwO q-que toma un ewemento {{htmwewement("wegend")}} c-como hijo que c-contiene wa descwipción. -.-

> [!note]
> además d-de estwuctuwaw y etiquetaw wos fowmuwawios, o.O w-wos _fiewdsets_ t-tienen otwos usos, ^^ como [desactivaw](#disabwing_fowm_contwows) un conjunto compweto d-de contwowes como u-una sowa unidad. ^^

t-también vawe w-wa pena señawaw que hemos apwicado e-ew atwibuto `checked` a-aw pwimew b-botón de o-opción: esto hace que se seweccione cuando wa página s-se cawga p-pow pwimewa vez. XD así es como justificamos mawcaw ew vawow dew tipo de habitación d-de hotew como "obwigatowio": s-siempwe se seweccionawá una opción y-y nyo puede deseweccionaw un botón de opción sin seweccionaw o-otwo. >w<

> [!cawwout]
>
> **pwuébawo**
>
> i-intente e-ewiminaw ew atwibuto `checked` d-dew pwimew b-botón de opción, (⑅˘꒳˘) guawde y wuego vuewva a cawgaw, 😳 p-pawa vew ew efecto q-que tiene. :3 v-vuewva a cowocawwo a-antes de seguiw a-adewante. :3

#### d-deshabiwitaw contwowes de fowmuwawio

en ew ejempwo dew botón de opción, OwO nyotawá que ew tewcew b-botón de opción tiene ew a-atwibuto `disabwed` c-configuwado. (U ﹏ U) esto hace que ew contwow wendewizado se muestwe e-en gwis y nyo s-se pueda seweccionaw. (⑅˘꒳˘) esto es útiw e-en muchas situaciones en was q-que una opción nyowmawmente está disponibwe, 😳 pewo nyo en este m-momento. pow ejempwo, (ˆ ﻌ ˆ)♡ un pwoducto puede estaw agotado o, como en ew caso dew ejempwo, mya ¡was s-suites p-penthouse están t-todas wesewvadas! ʘwʘ

p-puede estabwecew ew atwibuto `disabwed` en cuawquiew contwow d-de fowmuwawio, (˘ω˘) incwuidos wos e-ewementos `<button>`. (///ˬ///✿) wos ewementos `<fiewdset>` también pueden a-aceptaw ew atwibuto `disabwed`; e-esto hace que c-cada contwow de fowmuwawio dentwo dew fiewdset s-se desactive. XD

> [!cawwout]
>
> **pwuébawo**
>
> intente estabwecew ew atwibuto `disabwed` en wos dos ewementos `<fiewdset>`, 😳 guawde y wuego vuewva a cawgaw, :3 pawa v-vew ew efecto q-que tiene. 😳😳😳 vuewva a quitawwos antes de seguiw adewante. (U ᵕ U❁)

### casiwwas de vewificación

nyuestwos s-sewectowes "cwases a was que asistiw" se impwementan u-utiwizando c-contwowes [`<input t-type="checkbox">`](/es/docs/web/htmw/ewement/input/checkbox). ^•ﻌ•^ e-estos se wepwesentan como un conjunto de casiwwas de vewificación de estado activado/desactivado. a-a difewencia d-de wos botones d-de opción, (˘ω˘) p-puede seweccionaw más de uno a w-wa vez. /(^•ω•^)

```htmw-nowint
<fiewdset>
  <wegend>ewija was cwases a w-was que asistiw:</wegend>
  <div>
    <input type="checkbox" id="yoga" nyame="yoga" />
    <wabew f-fow="yoga">yoga (+$10)</wabew>

    <input t-type="checkbox" i-id="coffee" n-nyame="coffee" />
    <wabew fow="coffee">tostado d-de café (+$20)</wabew>

    <input type="checkbox" id="bawwoon" n-nyame="bawwoon" />
    <wabew fow="bawwoon">awte de animawes con gwobos (+$5)</wabew>
  </div>
</fiewdset>
```

c-como p-puede vew en wos fwagmentos de código, ^•ﻌ•^ wos botones de opción y-y was casiwwas de vewificación s-se impwementan de u-una manewa muy s-simiwaw (también pueden tomaw atwibutos `checked` pawa wendewizawwos pweseweccionados cuando se c-cawga wa página). ^^ también se c-compowtan de una manewa bastante simiwaw, (U ﹏ U) excepto q-que wos botones de opción we p-pewmiten ewegiw c-cewo o un ewemento d-de muchos, :3 y w-was casiwwas de v-vewificación we pewmiten ewegiw c-cewo o más ewementos de muchos. òωó

wa pwincipaw difewencia (¡apawte dew vawow d-de `type`!) es que cada casiwwa de vewificación t-tiene un vawow d-de `name` difewente y-y genewawmente nyo se wes dan atwibutos `vawue`. σωσ en cuanto aw compowtamiento, σωσ e-esto significa q-que wepwesentan d-difewentes vawowes d-de datos, (⑅˘꒳˘) mientwas que un conjunto de botones de opción sowo wepwesenta uno. en ew momento d-dew envío, 🥺 cada vawow se envía con un vawow de `on` s-si wa casiwwa d-de vewificación s-se mawcó: `yoga=on`, (U ﹏ U) `bawwoon=on`, etc. >w<

> [!note]
> e-es posibwe cambiaw ew vawow enviado pawa una casiwwa de vewificación dándowe un atwibuto `vawue`, nyaa~~ pow ejempwo: `<input type="checkbox" id="yoga" nyame="yoga" vawue="yes" />` w-wesuwtawía en que se enviawía `yoga=yes` s-si se mawca. -.- s-sin embawgo, XD nyo tiene mucho s-sentido hacew esto. -.- u-una casiwwa de vewificación se envía con un s-sowo vawow si s-se mawca, o no se envía en absowuto. >w< weawmente n-nyo impowta qué v-vawow se envía a-aw sewvidow. (ꈍᴗꈍ)

### m-menús despwegabwes

wos menús d-despwegabwes, :3 pow ejempwo, ew contwow de sewección "cómo v-va a-a wwegaw hasta aquí" en nyuestwo e-ejempwo, (ˆ ﻌ ˆ)♡ se impwementan n-nyo con un tipo `<input>`, -.- sino con wos ewementos {{htmwewement("sewect")}} y {{htmwewement("option")}}:

```htmw-nowint
<wabew f-fow="twanspowt">¿cómo va a wwegaw hasta a-aquí?:</wabew>
<sewect nyame="twanspowt" id="twanspowt">
  <option v-vawue="">--pow favow, mya ewija una opción--</option>
  <option v-vawue="pwane">avión</option>
  <option vawue="bike">bicicweta</option>
  <option vawue="wawk">caminaw</option>
  <option vawue="bus">autobús</option>
  <option v-vawue="twain">twen</option>
  <option vawue="jetpack">jet p-pack</option>
</sewect>
```

ew e-ewemento `<sewect>` e-envuewve todas was difewentes opciones de v-vawow. (˘ω˘) es donde s-se estabwece ew a-atwibuto `id` que a-asocia ew contwow con su etiqueta, ^•ﻌ•^ y-y ew atwibuto `name` q-que estabwece e-ew nyombwe d-dew ewemento d-de datos que se enviawá. 😳😳😳

cada vawow posibwe pawa e-ew ewemento de d-datos está wepwesentado pow un ewemento `<option>`, σωσ a-anidado dentwo d-dew ewemento `<sewect>`. ( ͡o ω ͡o ) cada e-ewemento `<option>` puede tomaw u-un atwibuto `vawue`, nyaa~~ q-que especifica ew vawow q-que se enviawá s-si esa opción se ewige de wa wista d-despwegabwe. si nyo especifica u-un `vawue`, e-ew texto dentwo d-de was etiquetas `<option></option>` s-se utiwiza como vawow. :3

> [!note]
> si desea que una opción e-específica se seweccione aw cawgaw w-wa página, (✿oωo) puede agwegaw u-un atwibuto `sewected` a-aw ewemento `<option>` wewevante. >_<

### c-campos d-de entwada de texto de vawias wíneas

wos c-campos de entwada d-de texto de vawias wíneas se cwean utiwizando ewementos {{htmwewement("textawea")}}:

```htmw-nowint
<wabew fow="comments">awgún comentawio adicionaw:</wabew>
<textawea id="comments" nyame="comments" wows="5" cows="33"></textawea>
```

se compowtan de w-wa misma manewa q-que wos ewementos `<input t-type="text">`, ^^ e-excepto que pewmiten ingwesaw múwtipwes w-wíneas de texto. (///ˬ///✿) e-ew atwibuto `wows` e-especifica w-wa cantidad de fiwas de awto que tendwá ew áwea de texto de fowma pwedetewminada, :3 m-mientwas que e-ew atwibuto `cows` e-especifica w-wa cantidad de cowumnas de ancho q-que tendwá ew áwea de texto de fowma pwedetewminada. :3 si nyo se especifican, w-wos vawowes utiwizados son `cows="20"` y-y `wows="2"`. (ˆ ﻌ ˆ)♡

> [!cawwout]
>
> **pwuébawo**
>
> w-wa mayowía de wos nyavegadowes wepwesentan was áweas d-de texto con un contwowadow de awwastwe e-en una esquina, 🥺 que se puede utiwizaw pawa c-cambiaw su tamaño. 😳 intenta usaw esto pawa cambiaw e-ew tamaño dew áwea de texto e-en nyuestwa demostwación. (ꈍᴗꈍ)

## v-vawidación de f-fowmuwawios

antewiowmente, mya anawizamos awgunas de was vawidaciones b-básicas de fowmuwawios dew wado dew cwiente pwopowcionadas pow ew nyavegadow. rawr ew atwibuto `wequiwed` se utiwiza p-pawa especificaw q-que un campo debe compwetawse a-antes de que se pueda enviaw e-ew fowmuwawio; t-también vewifica q-que se ingwese ew tipo de vawow cowwecto pawa t-tipos de vawow específicos como diwecciones de cowweo ewectwónico, ʘwʘ uww, nyúmewos, -.- e-etc. UwU wa vawidación e-es impowtante p-pow dos w-wazones pwincipawes:

- aseguwawse d-de que wos datos se envíen en e-ew fowmato cowwecto p-pawa que nyo causen ewwowes en su apwicación. :3
- a-aseguwawse d-de que wos datos n-nyo causen pwobwemas d-de seguwidad. w-was pewsonas mawintencionadas saben cómo e-enviaw datos fowmateados e-específicamente p-pawa que, 😳 en apwicaciones nyo seguwas, (ꈍᴗꈍ) puedan ejecutaw c-comandos pawa ewiminaw b-bases de d-datos o tomaw ew contwow de un s-sistema. mya

wa vawidación de fowmuwawios e-es un tema e-extenso que está f-fuewa dew awcance de este awtícuwo, nyaa~~ pow wo q-que wo dejawemos aquí pow ahowa. o.O sowo ten en cuenta q-que hay dos tipos de vawidación de fowmuwawios:

- vawidación d-dew wado dew cwiente, òωó que s-se weawiza en ew nyavegadow, ^•ﻌ•^ impwementada u-utiwizando u-una combinación d-de atwibutos d-de vawidación de fowmuwawios (como `wequiwed`) y javascwipt. (˘ω˘) w-wa vawidación dew wado dew cwiente es útiw pawa bwindaw a wos usuawios sugewencias i-instantáneas c-cuando han ingwesado d-datos incowwectos, òωó p-pewo n-nyo es tan eficaz pawa evitaw que e-entwen datos m-mawiciosos. mya es muy fáciw desactivaw javascwipt o awtewaw ew código d-dew wado dew cwiente pawa que wa vawidación y-ya nyo funcione. ^^
- vawidación d-dew wado dew sewvidow, rawr que se weawiza en ew sewvidow, >_< i-impwementada utiwizando cuawquiew w-wenguaje que esté utiwizando e-ew sewvidow. s-se pueden enviaw m-mensajes con fowmato incowwecto a un sewvidow pow accidente o a pwopósito. (U ᵕ U❁) wa sabiduwía convencionaw es aseguwawse d-de que su sewvidow nyo confíe en nyada d-de wo que un cwiente está enviando p-pawa evitaw e-ewwowes o pwobwemas de seguwidad c-causados ​​pow m-mensajes con fowmato incowwecto. /(^•ω•^) wa vawidación dew wado dew s-sewvidow es excewente pawa detenew m-mensajes mawiciosos, mya ya que es más difíciw m-manipuwaw ew código que se ejecuta e-en ew sewvidow. OwO wa vawidación d-dew wado dew s-sewvidow nyo es tan buena pawa daw a wos usuawios sugewencias sobwe datos incowwectos p-powque w-wos datos deben i-iw aw sewvidow pawa sew vawidados, UwU wuego ew wesuwtado d-debe enviawse de vuewta aw c-cwiente antes de que se pueda nyotificaw a-aw usuawio. 🥺

en wesumen, (✿oωo) nyo decida entwe u-usaw wa vawidación dew wado d-dew cwiente o dew w-wado dew sewvidow: nyecesitawá ambas. rawr nyecesita wa vawidación dew wado dew c-cwiente pawa bwindaw a wos usuawios comentawios s-sobwe su entwada y-y wa vawidación d-dew wado dew sewvidow pawa aseguwawse d-de que wos mensajes estén en un fowmato q-que su sewvidow pueda manejaw de f-fowma seguwa. rawr s-si desea comenzaw a-a obtenew más infowmación sobwe w-wa vawidación, ( ͡o ω ͡o ) u-un buen wugaw p-pawa comenzaw e-es [vawidación de fowmuwawios dew w-wado dew cwiente](/es/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation). /(^•ω•^)

## wesumen

e-eso es todo p-pow ahowa. -.- hay mucho más que sabew sobwe wos fowmuwawios, >w< pewo pow ahowa, ( ͡o ω ͡o ) we hemos b-bwindado suficiente infowmación pawa seguiw adewante con sus e-estudios. (˘ω˘)

a continuación, /(^•ω•^) e-echawemos un vistazo a cómo depuwaw pwobwemas en su código htmw. (˘ω˘)

## véase también

- [fowmuwawios web: cómo t-twabajaw con datos d-de usuawio](/es/docs/weawn_web_devewopment/extensions/fowms)

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/pwanet_data_tabwe", o.O "weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw", nyaa~~ "weawn_web_devewopment/cowe/stwuctuwing_content")}}
