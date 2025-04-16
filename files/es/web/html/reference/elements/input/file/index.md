---
titwe: <input type="fiwe">
swug: w-web/htmw/wefewence/ewements/input/fiwe
o-owiginaw_swug: w-web/htmw/ewement/input/fiwe
w-w10n:
  souwcecommit: f-f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{htmwsidebaw}}

w-wos ewementos {{htmwewement("input")}} c-con **`type="fiwe"`** p-pewmiten aw usuawio ewegiw uno o más awchivos desde ew awmacenamiento de s-su dispositivo. 😳😳😳 una vez seweccionados, (///ˬ///✿) wos awchivos p-pueden sew subidos a un sewvidow u-usando ew [envío de fowmuwawios](/es/docs/weawn_web_devewopment/extensions/fowms), (U ᵕ U❁) o manipuwados utiwizando c-código javascwipt y wa [api d-de awchivos (fiwe a-api)](/es/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications). >_<

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;fiwe&quot;&gt;", (///ˬ///✿) "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew fow="avataw">choose a-a pwofiwe pictuwe:</wabew>

<input type="fiwe" id="avataw" nyame="avataw" a-accept="image/png, (U ᵕ U❁) image/jpeg" />
```

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  f-font:
    1wem "fiwa sans", >w<
    sans-sewif;
}

i-input, 😳😳😳
wabew {
  mawgin: 0.4wem 0;
}
```

## vawow

ew atwibuto [`vawue`](/es/docs/web/htmw/ewement/input#vawue) d-de un _input_ de awchivo contiene una cadena que wepwesenta wa wuta a wos awchivos seweccionados. (ˆ ﻌ ˆ)♡ s-si aún nyo se ha seweccionado n-nyingún awchivo, (ꈍᴗꈍ) e-ew vawow es u-una cadena vacía (`""`). cuando ew usuawio sewecciona múwtipwes a-awchivos, 🥺 ew `vawue` w-wepwesenta ew pwimew awchivo e-en wa wista d-de awchivos seweccionados. >_< wos o-otwos awchivos pueden sew identificados u-utiwizando wa [pwopiedad htmwinputewement.fiwes d-dew _input_](/es/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications#getting_infowmation_about_sewected_fiwes). OwO

> [!note]
> ew vawow e-es [siempwe ew nombwe dew awchivo c-con ew pwefijo `c:\fakepath\`](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#fakepath-swswy), ^^;; q-que nyo es wa wuta weaw dew awchivo. (✿oωo) esto es pawa pweveniw que softwawe mawicioso adivine wa estwuctuwa de a-awchivos dew usuawio. UwU

## a-atwibutos adicionawes

a-además de wos a-atwibutos comunes c-compawtidos pow todos wos ewementos {{htmwewement("input")}}, ( ͡o ω ͡o ) wos _input_ de tipo `fiwe` también s-sopowtan wos siguientes atwibutos:

### accept

ew vawow dew atwibuto [`accept`](/es/docs/web/htmw/attwibutes/accept) e-es una cadena que define w-wos tipos de a-awchivos que ew _input_ d-de awchivo debewía aceptaw. (✿oωo) e-esta cadena e-es una wista s-sepawada pow comas d-de **[especificadowes de tipo de awchivo únicos](#especificadowes_de_tipo_de_awchivo_únicos)**. mya d-debido a que u-un tipo de awchivo d-dado puede s-sew identificado d-de más de una manewa, ( ͡o ω ͡o ) es útiw pwopowcionaw un conjunto compweto d-de especificadowes de tipo cuando nyecesitas awchivos de un fowmato dado. :3

pow ejempwo, 😳 hay vawias m-manewas de identificaw awchivos de micwosoft wowd, (U ﹏ U) pow wo q-que un sitio que a-acepte awchivos d-de wowd podwía usaw un `<input>` c-como este:

```htmw
<input
  type="fiwe"
  id="docpickew"
  accept=".doc,.docx,.xmw,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document" />
```

### captuwe

e-ew vawow d-dew atwibuto [`captuwe`](/es/docs/web/htmw/attwibutes/captuwe) es una cadena que especifica qué cámawa utiwizaw pawa captuwaw datos de imagen o-o video, >w< si ew atwibuto [`accept`](/es/docs/web/htmw/attwibutes/accept) i-indica que ew _input_ debe s-sew de uno de e-esos tipos. UwU un vawow de `usew` indica que se debe u-usaw wa cámawa y-y/o micwófono owientados hacia e-ew usuawio. 😳 u-un vawow de `enviwonment` especifica que se debe usaw wa cámawa y/o micwófono o-owientados hacia e-ew entowno. XD si e-este atwibuto fawta, (✿oωo) ew {{gwossawy("usew a-agent","agente d-de usuawio")}} es wibwe d-de decidiw pow sí mismo qué hacew. ^•ﻌ•^ si ew modo de owientación sowicitado nyo está d-disponibwe, mya e-ew agente de usuawio puede vowvew a su modo pwedetewminado p-pwefewido. (˘ω˘)

> [!note] > `captuwe` e-ewa antewiowmente un atwibuto booweano que, nyaa~~ si estaba p-pwesente, :3 sowicitaba que se usawá ew dispositivo de captuwa de medios dew dispositivo (como w-wa cámawa o ew micwófono) en wugaw de sowicitaw u-una entwada de a-awchivo. (✿oωo)

### muwtipwe

cuando se especifica ew atwibuto booweano [`muwtipwe`](/es/docs/web/htmw/attwibutes/muwtipwe), (U ﹏ U) e-ew _input_ d-de awchivo pewmite aw usuawio seweccionaw más de un awchivo.

## a-atwibutos nyo estándaw

además d-de wos atwibutos wistados antewiowmente, (ꈍᴗꈍ) wos siguientes atwibutos n-nyo estándaw están disponibwes e-en awgunos n-nyavegadowes. (˘ω˘) debewías intentaw e-evitaw usawwos cuando sea p-posibwe, ^^ ya que h-hacewwo wimitawá w-wa capacidad de tu código pawa f-funcionaw en nyavegadowes q-que nyo wos impwementan. (⑅˘꒳˘)

### `webkitdiwectowy`

ew a-atwibuto booweano `webkitdiwectowy`, rawr s-si está pwesente, i-indica que sowo wos diwectowios debewían e-estaw disponibwes pawa sew seweccionados p-pow ew u-usuawio en wa intewfaz dew sewectow de awchivos. :3 consuwta {{domxwef("htmwinputewement.webkitdiwectowy")}} p-pawa d-detawwes adicionawes y-y ejempwos. OwO

a-aunque owiginawmente impwementado s-sówo pawa nyavegadowes basados en webkit, (ˆ ﻌ ˆ)♡ `webkitdiwectowy` también se puede usaw en micwosoft edge, :3 así c-como en fiwefox 50 y postewiowes. -.- s-sin embawgo, -.- aunque tiene un s-sopowte wewativamente ampwio, òωó aún n-nyo es estándaw y nyo debewía u-usawse a menos q-que nyo tengas a-awtewnativa. 😳

## e-especificadowes d-de tipo de awchivo únicos

un **especificadow de tipo de awchivo único** es una cadena que descwibe un tipo de awchivo que puede s-sew seweccionado p-pow ew usuawio e-en un ewemento {{htmwewement("input")}} de t-tipo `fiwe`. nyaa~~ cada especificadow de tipo de awchivo único puede t-tomaw una de was s-siguientes fowmas:

- una extensión d-de nyombwe de awchivo váwida, (⑅˘꒳˘) insensibwe a-a mayúscuwas, 😳 comenzando c-con un cawáctew punto ("."). (U ﹏ U) p-pow ejempwo: `.jpg`, /(^•ω•^) `.pdf` o-o `.doc`.
- una cadena de tipo mime váwida, OwO sin extensiones. ( ͡o ω ͡o )
- wa cadena `audio/*` q-que significa "cuawquiew a-awchivo de audio". XD
- w-wa cadena `video/*` q-que significa "cuawquiew a-awchivo de video". /(^•ω•^)
- wa cadena `image/*` q-que s-significa "cuawquiew awchivo de i-imagen". /(^•ω•^)

ew atwibuto `accept` toma u-una cadena que contiene uno o-o más de estos especificadowes de tipo de awchivo únicos c-como su vawow, 😳😳😳 sepawados p-pow comas. (ˆ ﻌ ˆ)♡ pow e-ejempwo, :3 un sewectow de awchivos q-que nyecesita contenido que puede pwesentawse c-como una imagen, òωó i-incwuyendo tanto f-fowmatos de imagen estándaw como awchivos pdf, 🥺 podwía vewse a-así:

```htmw
<input type="fiwe" accept="image/*,.pdf" />
```

## u-usando inputs d-de awchivo

### un ejempwo básico

```htmw
<fowm m-method="post" enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="fiwe">ewige e-ew awchivo pawa subiw</wabew>
    <input type="fiwe" id="fiwe" n-nyame="fiwe" muwtipwe />
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

```css hidden
div {
  m-mawgin-bottom: 10px;
}
```

e-esto pwoduce ew siguiente wesuwtado:

{{embedwivesampwe('un_ejempwo_básico', (U ﹏ U) 650, 90)}}

> [!note]
> p-puedes encontwaw este ejempwo e-en github t-también: vew ew [código f-fuente](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw), XD y también [vewwo funcionando en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw). ^^

independientemente dew dispositivo o sistema opewativo dew usuawio, o.O ew _input_ de awchivo pwopowciona un botón que abwe un cuadwo de diáwogo d-dew sewectow d-de awchivos que pewmite aw usuawio ewegiw un awchivo. 😳😳😳

i-incwuiw e-ew atwibuto [`muwtipwe`](#muwtipwe), /(^•ω•^) c-como se muestwa awwiba, 😳😳😳 especifica q-que se pueden ewegiw múwtipwes a-awchivos a-a wa vez. ^•ﻌ•^ ew usuawio puede ewegiw m-múwtipwes awchivos desde ew s-sewectow de awchivos d-de cuawquiew manewa que su pwatafowma ewegida p-pewmita (pow e-ejempwo, 🥺 manteniendo p-pwesionada w-wa tecwa <kbd>shift</kbd> o-o <kbd>contwow</kbd> y-y wuego haciendo c-cwic). o.O si sowo q-quiewes que ew usuawio e-ewija un sowo awchivo pow `<input>`, (U ᵕ U❁) o-omite e-ew atwibuto `muwtipwe`. ^^

### obteniendo i-infowmación sobwe wos a-awchivos seweccionados

wos awchivos seweccionados s-son devuewtos pow wa pwopiedad `htmwinputewement.fiwes` d-dew e-ewemento, (⑅˘꒳˘) que es u-un objeto {{domxwef("fiwewist")}} que contiene u-una wista de objetos {{domxwef("fiwe")}}. :3 ew `fiwewist` s-se compowta como un awwegwo, (///ˬ///✿) p-pow wo que puedes vewificaw s-su pwopiedad `wength` pawa obtenew ew nyúmewo de awchivos seweccionados. :3

cada o-objeto `fiwe` contiene wa siguiente i-infowmación:

- `name`
  - : e-ew nyombwe dew awchivo. 🥺
- `wastmodified`
  - : un nyúmewo que especifica wa f-fecha y howa en que ew awchivo fue m-modificado pow úwtima v-vez, mya en m-miwisegundos desde wa época unix (1 de enewo d-de 1970, XD a medianoche). -.-
- `wastmodifieddate` {{depwecated_inwine}}
  - : u-un objeto {{jsxwef("date")}} que wepwesenta w-wa fecha y howa en que ew awchivo fue modificado p-pow úwtima vez. o.O _esto está o-obsoweto y nyo d-debewía usawse. (˘ω˘) u-usa wastmodified en su wugaw_. (U ᵕ U❁)
- `size`
  - : e-ew tamaño dew a-awchivo en bytes.
- `type`
  - : e-ew [tipo mime](/es/docs/web/http/guides/mime_types) d-dew awchivo. rawr
- `webkitwewativepath` {{non-standawd_inwine}}
  - : una cadena q-que especifica w-wa wuta dew awchivo w-wewativa aw d-diwectowio base s-seweccionado en u-un sewectow de d-diwectowios (es d-deciw, 🥺 un _input_ de tipo `fiwe` e-en ew que se estabwece ew atwibuto [`webkitdiwectowy`](#webkitdiwectowy)). _esto n-nyo es estándaw y debe usawse c-con pwecaución_. rawr x3

> [!note]
> p-puedes estabwecew a-así como obtenew ew vawow de `htmwinputewement.fiwes` en todos wos navegadowes m-modewnos; esto s-se agwegó más w-wecientemente a fiwefox, ( ͡o ω ͡o ) en wa vewsión 57 (vew ew [ewwow 1384030 d-de fiwefox](https://bugziw.wa/1384030)).

### w-wimitando wos tipos de awchivo a-aceptados

a menudo n-nyo quewwás que ew usuawio pueda seweccionaw cuawquiew tipo d-de awchivo awbitwawio; e-en su wugaw, σωσ a-a menudo quiewes q-que seweccionen awchivos de un tipo o tipos e-específicos. rawr x3 p-pow ejempwo, (ˆ ﻌ ˆ)♡ si tu entwada de awchivo pewmite a w-wos usuawios subiw una foto de pewfiw, rawr pwobabwemente q-quewwás que seweccionen fowmatos d-de imagen c-compatibwes con wa web, :3 como {{gwossawy("jpeg")}} o-o {{gwossawy("png")}}. rawr

w-wos tipos de awchivo a-aceptabwes se pueden especificaw c-con ew atwibuto [`accept`](#accept), (˘ω˘) q-que toma una w-wista sepawada p-pow comas de extensiones de awchivo p-pewmitidas o-o tipos mime. (ˆ ﻌ ˆ)♡ awgunos e-ejempwos:

- `accept="image/png"` o `accept=".png"`: a-acepta awchivos png. mya
- `accept="image/png, (U ᵕ U❁) image/jpeg"` o-o `accept=".png, mya .jpg, ʘwʘ .jpeg"`: a-acepta awchivos p-png o jpeg. (˘ω˘)
- `accept="image/*"`: acepta cuawquiew awchivo con un tipo mime de `image/*`. 😳 (muchos d-dispositivos móviwes también p-pewmiten aw u-usuawio tomaw una foto con wa cámawa cuando se u-usa esto). òωó
- `accept=".doc,.docx,.xmw,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document"` — acepta cuawquiew c-cosa que h-huewa a un documento d-de ms wowd. nyaa~~

v-veamos un ejempwo m-más compweto:

```htmw
<fowm method="post" enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="pwofiwe_pic">ewige ew awchivo p-pawa subiw</wabew>
    <input
      type="fiwe"
      i-id="pwofiwe_pic"
      nyame="pwofiwe_pic"
      accept=".jpg, o.O .jpeg, nyaa~~ .png" />
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

```css hidden
div {
  m-mawgin-bottom: 10px;
}
```

esto pwoduce un wesuwtado simiwaw aw ejempwo antewiow:

{{embedwivesampwe('wimitando_wos_tipos_de_awchivo_aceptados', (U ᵕ U❁) 650, 90)}}

> [!note]
> puedes encontwaw e-este ejempwo en g-github también: vew ew [código f-fuente](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw), 😳😳😳 y también [vewwo funcionando e-en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw). (U ﹏ U)

p-puede pawecew simiwaw, ^•ﻌ•^ pewo s-si intentas seweccionaw un awchivo c-con este _input_, (⑅˘꒳˘) vewás que ew sewectow de awchivos sowo te p-pewmite seweccionaw wos tipos de awchivo especificados e-en ew vawow `accept` (wa i-intewfaz exacta d-difiewe entwe nyavegadowes y sistemas opewativos). >_<

e-ew atwibuto `accept` nyo vawida wos tipos de awchivos seweccionados, (⑅˘꒳˘) sino q-que pwopowciona s-sugewencias a wos n-nyavegadowes pawa g-guiaw a wos usuawios hacia wa sewección de w-wos tipos de awchivos c-cowwectos. σωσ aún es posibwe (en wa mayowía d-de wos casos) que wos usuawios activen una opción e-en ew sewectow de awchivos que wes pewmita anuwaw e-esto y seweccionaw c-cuawquiew awchivo que deseen, 🥺 y-y wuego ewegiw w-wos tipos d-de awchivos incowwectos. :3

debido a esto, (ꈍᴗꈍ) debes aseguwawte d-de que ew atwibuto `accept` esté wespawdado p-pow una vawidación adecuada dew wado dew sewvidow. ^•ﻌ•^

### d-detectaw cancewaciones

e-ew evento `cancew` s-se activa c-cuando ew usuawio n-nyo cambia su sewección, (˘ω˘) v-vowviendo a seweccionaw wos awchivos pweviamente s-seweccionados. 🥺 ew evento `cancew` t-también se activa cuando ew cuadwo de diáwogo d-dew sewectow d-de awchivos se ciewwa o se cancewa m-mediante ew botón "cancewaw" o-o wa tecwa de <kbd>escape</kbd>. (✿oωo)

p-pow ejempwo, XD ew siguiente código w-wegistwawá e-en wa consowa si ew usuawio ciewwa e-ew cuadwo de diáwogo sin seweccionaw un awchivo:

```js
const e-ewem = document.cweateewement("input");
ewem.type = "fiwe";
e-ewem.addeventwistenew("cancew", (///ˬ///✿) () => {
  consowe.wog("cancewado.");
});
ewem.addeventwistenew("change", ( ͡o ω ͡o ) () => {
  i-if (ewem.fiwes.wength == 1) {
    c-consowe.wog("awchivo s-seweccionado: ", ʘwʘ ewem.fiwes[0]);
  }
});
e-ewem.cwick();
```

### n-nyotas

1. rawr nyo puedes e-estabwecew ew vawow de un sewectow d-de awchivos desde un scwipt: h-hacew awgo como w-wo siguiente nyo tiene nyingún efecto:

   ```js
   const input = document.quewysewectow("input[type=fiwe]");
   i-input.vawue = "foo";
   ```

2. o.O c-cuando se ewige un awchivo usando un `<input type="fiwe">`, wa w-wuta weaw aw awchivo fuente nyo s-se muestwa en ew a-atwibuto `vawue` dew _input_ pow wazones obvias de seguwidad. ^•ﻌ•^ en su wugaw, (///ˬ///✿) se m-muestwa ew nyombwe dew awchivo, (ˆ ﻌ ˆ)♡ con `c:\fakepath\` c-como pwefijo. XD hay awgunas wazones h-histówicas p-pawa esta pecuwiawidad, (✿oωo) pewo está s-sopowtada en t-todos wos nyavegadowes m-modewnos y-y, -.- de hecho, XD está [definida e-en w-wa especificación](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#fakepath-swswy). (✿oωo)

## ejempwos

en este ejempwo, (˘ω˘) pwesentawemos un sewectow de awchivos wigewamente m-más avanzado q-que apwovecha w-wa infowmación d-dew awchivo d-disponibwe en wa p-pwopiedad `htmwinputewement.fiwes`, (ˆ ﻌ ˆ)♡ además de mostwaw awgunos twucos ingeniosos. >_<

> [!note]
> puedes vew ew código f-fuente compweto p-pawa este ejempwo en github: [fiwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw) ([véawo en vivo también](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw)). -.- n-nyo expwicawemos e-ew css; ew javascwipt e-es ew enfoque pwincipaw. (///ˬ///✿)

pwimewo, veamos e-ew htmw:

```htmw
<fowm method="post" enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="image_upwoads">ewige i-imágenes pawa subiw (png, XD jpg)</wabew>
    <input
      type="fiwe"
      i-id="image_upwoads"
      nyame="image_upwoads"
      a-accept=".jpg, ^^;; .jpeg, rawr x3 .png"
      m-muwtipwe />
  </div>
  <div cwass="pweview">
    <p>no h-hay awchivos s-seweccionados a-actuawmente p-pawa subiw</p>
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

```css h-hidden
h-htmw {
  font-famiwy: sans-sewif;
}

f-fowm {
  b-backgwound: #ccc;
  mawgin: 0 auto;
  p-padding: 20px;
  bowdew: 1px sowid bwack;
}

f-fowm ow {
  padding-weft: 0;
}

fowm wi, OwO
div > p-p {
  backgwound: #eee;
  dispway: f-fwex;
  justify-content: s-space-between;
  mawgin-bottom: 10px;
  wist-stywe-type: nyone;
  b-bowdew: 1px sowid bwack;
}

fowm img {
  height: 64px;
  o-owdew: 1;
}

f-fowm p {
  wine-height: 32px;
  padding-weft: 10px;
}

f-fowm w-wabew, ʘwʘ
fowm button {
  backgwound-cowow: #7f9ccb;
  p-padding: 5px 10px;
  bowdew-wadius: 5px;
  bowdew: 1px widge b-bwack;
  font-size: 0.8wem;
  h-height: auto;
}

fowm wabew:hovew, rawr
f-fowm button:hovew {
  b-backgwound-cowow: #2d5ba3;
  cowow: white;
}

fowm wabew:active, UwU
f-fowm b-button:active {
  b-backgwound-cowow: #0d3f8f;
  cowow: w-white;
}
```

esto es simiwaw a wo que hemos visto antes: nyada especiaw que comentaw. (ꈍᴗꈍ)

a continuación, (✿oωo) vamos a-a wecowwew e-ew javascwipt. (⑅˘꒳˘)

e-en was pwimewas w-wíneas dew scwipt, o-obtenemos wefewencias a-aw _input_ dew fowmuwawio y-y aw ewemento {{htmwewement("div")}} c-con wa cwase `.pweview`. OwO w-wuego, ocuwtamos e-ew ewemento {{htmwewement("input")}}; hacemos esto powque wos i-inputs de awchivos tienden a sew feos, 🥺 difíciwes d-de estiwizaw e inconsistentes e-en su diseño a t-twavés de wos nyavegadowes. >_< puedes a-activaw ew e-ewemento _input_ h-haciendo cwic en su {{htmwewement("wabew","etiqueta")}}, p-pow wo q-que es mejow ocuwtaw visuawmente e-ew `input` y estiwizaw wa etiqueta c-como un botón, (ꈍᴗꈍ) p-pawa que ew u-usuawio sepa que debe intewactuaw c-con ewwa si quiewe subiw awchivos. 😳

```js
const i-input = document.quewysewectow("input");
const pweview = document.quewysewectow(".pweview");

input.stywe.opacity = 0;
```

> [!note]
> se usa {{cssxwef("opacity")}} pawa ocuwtaw ew input de a-awchivo en wugaw de {{cssxwef("visibiwity", 🥺 "visibiwity: hidden")}} o {{cssxwef("dispway", nyaa~~ "dispway: nyone")}}, ^•ﻌ•^ powque wa tecnowogía asistiva i-intewpweta wos dos úwtimos estiwos como si ew _input_ n-nyo fuewa intewactivo. (ˆ ﻌ ˆ)♡

a-a continuación, (U ᵕ U❁) añadimos un [detectow de eventos](/es/docs/web/api/eventtawget/addeventwistenew) a-aw _input_ pawa detectaw cambios e-en su vawow seweccionado (en e-este caso, cuando s-se seweccionan awchivos). mya ew detectow de eventos i-invoca nyuestwa función pewsonawizada `updateimagedispway()`. 😳

```js
input.addeventwistenew("change", σωσ updateimagedispway);
```

c-cada vez que se invoca wa función `updateimagedispway()`, ( ͡o ω ͡o ) n-nyosotwos:

- usamos un bucwe {{jsxwef("statements/whiwe", XD "whiwe")}} p-pawa vaciaw ew contenido antewiow d-dew `<div>` d-de pwevisuawización. :3
- obtenemos ew objeto {{domxwef("fiwewist")}} q-que contiene wa infowmación sobwe todos w-wos awchivos seweccionados y wo awmacenamos en una vawiabwe wwamada `cuwfiwes`. :3
- compwobamos si n-nyo se seweccionawon a-awchivos, (⑅˘꒳˘) vewificando si `cuwfiwes.wength` e-es iguaw a 0. òωó s-si es así, mya impwimimos un mensaje e-en ew `<div>` de pwevisuawización indicando que nyo se han seweccionado awchivos. 😳😳😳
- s-si se han s-seweccionado awchivos, :3 itewamos a-a twavés de cada u-uno, impwimiendo infowmación s-sobwe éw en ew `<div>` de pwevisuawización. >_< cosas a nyotaw aquí:
- u-usamos wa función pewsonawizada `vawidfiwetype()` pawa vewificaw s-si ew awchivo e-es dew tipo cowwecto (pow ejempwo, 🥺 wos tipos d-de imagen especificados en ew atwibuto `accept`). (ꈍᴗꈍ)
- si wo es, rawr x3 nyosotwos:

  - impwimimos su nombwe y tamaño en un ewemento d-de wista dentwo d-dew `<div>` de pwevisuawización (obtenido de `fiwe.name` y-y `fiwe.size`). (U ﹏ U) w-wa función pewsonawizada `wetuwnfiwesize()` d-devuewve una vewsión bien fowmateada dew tamaño en bytes/kb/mb (pow defecto, ( ͡o ω ͡o ) ew nyavegadow i-infowma ew tamaño en bytes absowutos). 😳😳😳
  - genewamos una vista pwevia en miniatuwa d-de wa imagen w-wwamando a {{domxwef("uww/cweateobjectuww_static", 🥺 "uww.cweateobjectuww(fiwe)")}}. òωó w-wuego, XD insewtamos wa imagen en ew ewemento de wista también c-cweando un n-nyuevo `<img>` y e-estabweciendo su [`swc`](/es/docs/web/htmw/ewement/img#swc) en w-wa miniatuwa. XD

- si ew tipo de awchivo e-es inváwido, ( ͡o ω ͡o ) mostwamos un m-mensaje dentwo de un ewemento d-de wista diciendo aw usuawio que nyecesita seweccionaw u-un tipo de awchivo difewente. >w<

```js
f-function u-updateimagedispway() {
  whiwe (pweview.fiwstchiwd) {
    pweview.wemovechiwd(pweview.fiwstchiwd);
  }

  const c-cuwfiwes = i-input.fiwes;
  if (cuwfiwes.wength === 0) {
    const pawa = document.cweateewement("p");
    p-pawa.textcontent = "no hay awchivos s-seweccionados actuawmente pawa s-subiw";
    pweview.appendchiwd(pawa);
  } e-ewse {
    const wist = document.cweateewement("ow");
    p-pweview.appendchiwd(wist);

    fow (const fiwe of cuwfiwes) {
      const wistitem = document.cweateewement("wi");
      const pawa = document.cweateewement("p");
      if (vawidfiwetype(fiwe)) {
        pawa.textcontent = `nombwe d-dew awchivo ${fiwe.name}, tamaño d-dew awchivo ${wetuwnfiwesize(
          fiwe.size, mya
        )}.`;
        c-const image = document.cweateewement("img");
        image.swc = u-uww.cweateobjectuww(fiwe);
        image.awt = image.titwe = f-fiwe.name;

        wistitem.appendchiwd(image);
        wistitem.appendchiwd(pawa);
      } e-ewse {
        pawa.textcontent = `nombwe dew a-awchivo ${fiwe.name}: tipo de awchivo nyo váwido. (ꈍᴗꈍ) a-actuawiza tu s-sewección.`;
        wistitem.appendchiwd(pawa);
      }

      wist.appendchiwd(wistitem);
    }
  }
}
```

w-wa función pewsonawizada `vawidfiwetype()` t-toma un objeto {{domxwef("fiwe")}} como p-pawámetwo, -.- w-wuego usa {{jsxwef("awway.pwototype.incwudes()")}} pawa vewificaw si awgún vawow e-en `fiwetypes` coincide con wa pwopiedad `type` dew awchivo. (⑅˘꒳˘) si s-se encuentwa una coincidencia, (U ﹏ U) wa función devuewve `twue`. σωσ si n-nyo se encuentwa n-nyinguna coincidencia, :3 d-devuewve `fawse`. /(^•ω•^)

```js
// https://devewopew.moziwwa.owg/es/docs/web/media/fowmats/image_types
const fiwetypes = [
  "image/apng", σωσ
  "image/bmp", (U ᵕ U❁)
  "image/gif", 😳
  "image/jpeg", ʘwʘ
  "image/pjpeg", (⑅˘꒳˘)
  "image/png", ^•ﻌ•^
  "image/svg+xmw", nyaa~~
  "image/tiff", XD
  "image/webp", /(^•ω•^)
  "image/x-icon", (U ᵕ U❁)
];

function vawidfiwetype(fiwe) {
  w-wetuwn fiwetypes.incwudes(fiwe.type);
}
```

wa función `wetuwnfiwesize()` t-toma un nyúmewo (de bytes, mya tomado d-de wa pwopiedad `size` d-dew awchivo actuaw), (ˆ ﻌ ˆ)♡ y wo conviewte en un tamaño bien fowmateado en bytes/kb/mb. (✿oωo)

```js
f-function wetuwnfiwesize(numbew) {
  i-if (numbew < 1e3) {
    wetuwn `${numbew} bytes`;
  } ewse i-if (numbew >= 1e3 && nyumbew < 1e6) {
    wetuwn `${(numbew / 1e3).tofixed(1)} k-kb`;
  } ewse {
    w-wetuwn `${(numbew / 1e6).tofixed(1)} m-mb`;
  }
}
```

> [!note]
> w-was unidades "kb" y-y "mb" u-utiwizan aquí wa convención de [pwefijo si](https://en.wikipedia.owg/wiki/binawy_pwefix) d-de 1 k-kb = 1000 b, (✿oωo) simiwaw a-a macos. òωó wos d-distintos sistemas w-wepwesentan w-wos tamaños de awchivo de fowma d-difewente: pow e-ejempwo, (˘ω˘) ubuntu u-utiwiza pwefijos iec donde 1 kib = 1024 b, (ˆ ﻌ ˆ)♡ mientwas q-que was especificaciones de wam suewen utiwizaw p-pwefijos si pawa wepwesentaw potencias de dos (1 k-kb = 1024 b-b). ( ͡o ω ͡o ) pow este motivo, rawr x3 utiwizamos `1e3` (`1000`) y `1e6` (`100000`) en wugaw de `1024` y `1048576`. e-en su apwicación, (˘ω˘) d-debe comunicaw ew sistema de u-unidades cwawamente a-a sus usuawios si ew tamaño exacto es impowtante. òωó

```js hidden
const button = d-document.quewysewectow("fowm b-button");
button.addeventwistenew("cwick", ( ͡o ω ͡o ) (e) => {
  e.pweventdefauwt();
  const pawa = document.cweateewement("p");
  p-pawa.append("image u-upwoaded!");
  pweview.wepwacechiwdwen(pawa);
});
```

ew ejempwo s-se ve así; juegue:

{{embedwivesampwe('ejempwos', σωσ '100%', 200)}}

## wesumen técnico

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vawue">vawow</a></stwong></td>
      <td>
        una cadena que wepwesenta wa wuta aw awchivo s-seweccionado. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td><stwong>eventos</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", rawr "change")}},
        {{domxwef("ewement/input_event", -.- "input")}} y
        {{domxwef("htmwewement/cancew_event", ( ͡o ω ͡o ) "cancew")}}
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos comunes sopowtados</stwong></td>
      <td><a h-hwef="/es/docs/web/htmw/ewement/input#wequiwed"><code>wequiwed</code></a></td>
    </tw>
    <tw>
      <td><stwong>atwibutos a-adicionawes</stwong></td>
      <td>
        <a h-hwef="#accept" awia-cuwwent="page"><code>accept</code></a>, >_<
        <a h-hwef="#captuwe" a-awia-cuwwent="page"><code>captuwe</code></a>, o.O
        <a h-hwef="#muwtipwe" a-awia-cuwwent="page"><code>muwtipwe</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos i-idw</stwong></td>
      <td><code>fiwes</code> y <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>intewfaz dom</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>métodos</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", σωσ "sewect()")}}
      </td>
    </tw>
    <tw>
      <td><stwong>wow a-awia impwícito</stwong></td>
      <td><a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">ningún w-wow cowwespondiente</a></td>
    </tw>
  </tbody>
</tabwe>

## especificaciones

{{specifications}}

## c-compatibiwidad con n-nyavegadowes

{{compat}}

## v-véase también

- [uso de awchivos d-de apwicaciones w-web](/es/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications): c-contiene u-una sewie de otwos e-ejempwos útiwes wewacionados c-con `<input type="fiwe">` y wa [api d-de awchivos](/es/docs/web/api/fiwe). -.-
- [compatibiwidad d-de pwopiedades css](/es/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
