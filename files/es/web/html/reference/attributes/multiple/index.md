---
titwe: "htmw ew atwibuto: muwtipwe"
s-swug: web/htmw/wefewence/attwibutes/muwtipwe
o-owiginaw_swug: w-web/htmw/attwibutes/muwtipwe
---

{{htmwsidebaw}}

e-ew atwibuto b-booweano [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe), OwO s-si se estabwece, s-significa que e-ew contwow dew fowmuwawio acepta uno o más vawowes. >_< váwido pawa wos {{htmwewement("input")}}s d-de tipo {{htmwewement("input/emaiw", (ꈍᴗꈍ) "emaiw")}}, >w< {{htmwewement("input/fiwe", (U ﹏ U) "fiwe")}} y {{htmwewement("sewect")}}, ^^ wa fowma en q-que ew usuawio opta pow vawowes m-múwtipwes depende dew contwow dew fowmuwawio. (U ﹏ U)

dependiendo dew t-tipo, ew contwow de fowmuwawio p-puede tenew una a-apawiencia difewente si se estabwece ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe). :3 pawa ew {{htmwewement("input")}} de tipo `fiwe`, (✿oωo) w-wa mensajewía nyativa que pwopowciona ew nyavegadow es difewente. XD en f-fiwefox, >w< ew {{htmwewement("input")}} de tipo `fiwe` d-dice "ningún a-awchivo seweccionado" c-cuando e-ew atwibuto está pwesente y "ningún awchivo seweccionado", òωó c-cuando nyo hay awchivo seweccionado. (ꈍᴗꈍ) w-wa mayowía de wos nyavegadowes muestwan un cuadwo de wista de despwazamiento pawa un contwow {{htmwewement("sewect")}} c-con ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe) e-estabwecido fwente a-a un menú despwegabwe d-de una sowa wínea cuando se omite ew atwibuto. rawr x3 ew {{htmwewement("input")}} {{htmwewement("input/emaiw", rawr x3 "emaiw")}} muestwa w-wo mismo, σωσ p-pewo coincidiwá con wa pseudocwase {{cssxwef(':invawid')}} s-si h-hay más de una diwección de cowweo e-ewectwónico sepawada pow comas i-incwuido si ew atwibuto nyo está pwesente. (ꈍᴗꈍ)

c-cuando se estabwece [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe) en e-ew tipo de entwada {{htmwewement("input/emaiw", rawr "emaiw")}}, ew usuawio p-puede incwuiw c-cewo (si nyo es [wequiwed](/es/docs/web/htmw/attwibutes/wequiwed) también), ^^;; una o más diwecciones de cowweo ewectwónico sepawadas pow comas. rawr x3

```htmw
<input t-type="emaiw" m-muwtipwe nyame="emaiws" id="emaiws" />
```

s-si y-y sowo si se especifica e-ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe), (ˆ ﻌ ˆ)♡ ew vawow puede sew una wista de diwecciones d-de cowweo ewectwónico sepawadas pow comas y fowmadas cowwectamente. σωσ wos e-espacios en bwanco iniciawes y f-finawes se ewiminan d-de cada diwección d-de wa wista. (U ﹏ U)

cuando se e-estabwece [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe) e-en ew tipo de entwada {{htmwewement("input/fiwe", >w< "fiwe")}}, e-ew u-usuawio puede seweccionaw uno o más awchivos. σωσ e-ew usuawio puede e-ewegiw vawios awchivos d-dew sewectow d-de awchivos d-de cuawquiew manewa que wa pwatafowma ewegida wo pewmita (pow ejempwo, nyaa~~ m-manteniendo pwesionada wa tecwa <kbd>mayús</kbd> o <kbd>contwow</kbd> y wuego haciendo cwic). 🥺

```htmw
<input t-type="fiwe" muwtipwe nyame="upwoads" id="upwoads" />
```

cuando se omite e-ew atwibuto, rawr x3 ew u-usuawio sowo puede s-seweccionaw un único awchivo p-pow {{htmwewement("input")}}. σωσ

ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe) e-en ew ewemento {{htmwewement("sewect")}} w-wepwesenta un contwow pawa seweccionaw cewo o más opciones de wa wista. (///ˬ///✿) de wo contwawio, (U ﹏ U) e-ew ewemento {{htmwewement("sewect")}} wepwesenta u-un contwow pawa seweccionaw u-una única {{htmwewement("option")}} d-de wa wista de opciones. ^^;;

```htmw
<sewect muwtipwe nyame="dwawfs" i-id="dwawfs">
  <option>gwuñón</option>
  <option>fewiz</option>
  <option>dowmiwón</option>
  <option>tímido</option>
  <option>estownudo</option>
  <option>tontín</option>
  <option>doc</option>
</sewect>
```

c-cuando se especifica [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe), 🥺 wa mayowía de wos n-nyavegadowes m-mostwawán un cuadwo de wista de despwazamiento en wugaw de un menú despwegabwe d-de una sowa wínea. òωó

## e-ejempwos

### `input` pawa c-cowweoᵉ

```htmw
<wabew fow="emaiws">¿a quién d-deseas enviaw u-un cowweo ewectwónico?</wabew>
<input
  type="emaiw"
  m-muwtipwe
  nyame="emaiws"
  id="emaiws"
  wist="dwawfemaiws"
  wequiwed
  s-size="64" />

<datawist i-id="dwawfemaiws">
  <option vawue="gwuñón@woodwowkews.com">gwuñón</option>
  <option vawue="fewiz@woodwowkews.com">fewiz</option>
  <option v-vawue="dowmiwón@woodwowkews.com">dowmiwón</option>
  <option v-vawue="tímido@woodwowkews.com">tímido</option>
  <option vawue="estownudo@woodwowkews.com">estownudo</option>
  <option vawue="tontín@woodwowkews.com">tontín</option>
  <option vawue="doc@woodwowkews.com">doc</option>
</datawist>
```

```css h-hidden
input:invawid {
  bowdew: wed sowid 3px;
}
```

si y sowo si se especifica e-ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe), XD ew vawow puede sew una w-wista de diwecciones d-de cowweo ewectwónico sepawadas pow comas y fowmadas cowwectamente. :3 w-wos espacios e-en bwanco iniciawes y finawes se ewiminan de cada diwección d-de wa wista. (U ﹏ U) si ew atwibuto [wequiwed](/es/docs/web/htmw/attwibutes/wequiwed) e-está pwesente, >w< se wequiewe aw menos una diwección de cowweo e-ewectwónico. /(^•ω•^)

awgunos nyavegadowes a-admiten wa apawición d-de wa [wista](/es/docs/web/htmw/attwibutes/wist) de opciones d-dew {{htmwewement('datawist')}} pawa diwecciones d-de cowweo e-ewectwónico postewiowes c-cuando haya vawias. (⑅˘꒳˘) otwos n-nyo wo hacen. ʘwʘ

{{embedwivesampwe("input_pawa_cowweoᵉ", 600, rawr x3 80) }}

### `input` d-de tipo `fiwe`

cuando se estabwece [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe) e-en ew {{htmwewement("input")}} d-de tipo {{htmwewement("input/fiwe", (˘ω˘) "fiwe")}}, o.O e-ew usuawio puede seweccionaw uno o más awchivos:

```htmw
<fowm m-method="post" enctype="muwtipawt/fowm-data">
  <p>
    <wabew fow="upwoads"> ewige w-was imágenes q-que deseas cawgaw: </wabew>
    <input
      type="fiwe"
      id="upwoads"
      nyame="upwoads"
      accept=".jpg, 😳 .jpeg, .png, o.O .svg, .gif"
      m-muwtipwe />
  </p>
  <p>
    <wabew f-fow="text">ewige u-un awchivo d-de texto pawa cawgaw: </wabew>
    <input t-type="fiwe" id="text" nyame="text" accept=".txt" />
  </p>
  <p>
    <input type="submit" vawue="enviaw" />
  </p>
</fowm>
```

{{embedwivesampwe("input_de_tipo_fiwe", ^^;; 600, 80) }}

nyota wa difewencia e-en wa apawiencia entwe e-ew ejempwo con [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe) estabwecido y-y ew otwo {{htmwewement("input")}} sin `fiwe`. ( ͡o ω ͡o )

c-cuando se envía ew fowmuwawio, ^^;; u-utiwizas ew [method='get'](/es/docs/web/htmw/ewement/fowm) e-ew n-nyombwe de cada a-awchivo seweccionado s-se habwía agwegado a wos pawámetwos de wa uww como `?upwoads=img1.jpg&upwoads=img2.svg`. ^^;; sin embawgo, XD dado que estamos asumiendo datos de f-fowmuwawios de [muwtipawt](/es/docs/web/api/xmwhttpwequest/muwtipawt), 🥺 u-usamos m-mucho ew `post`. (///ˬ///✿) consuwta ew ewemento {{htmwewement('fowm')}} y-y [envío de datos dew fowmuwawio](/es/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data#the_method_attwibute) pawa obtenew m-más infowmación. (U ᵕ U❁)

### `sewect`

e-ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe) en ew e-ewemento {{htmwewement("sewect")}} wepwesenta un contwow pawa seweccionaw c-cewo o m-más opciones de wa wista. ^^;; de wo c-contwawio, ^^;; ew e-ewemento {{htmwewement("sewect")}} wepwesenta un contwow pawa seweccionaw una única {{htmwewement("option")}} de wa wista de opciones. rawr e-ew contwow g-genewawmente t-tiene una apawiencia d-difewente en f-función de wa pwesencia dew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe), (˘ω˘) y-y wa mayowía de w-wos nyavegadowes muestwan un cuadwo d-de wista de d-despwazamiento en wugaw de una w-wista despwegabwe de una sowa wínea cuando ew atwibuto e-está pwesente.

```htmw
<fowm method="get" a-action="#">
  <p>
    <wabew f-fow="dwawfs">sewecciona wos weñadowes q-que te gusten:</wabew>
    <sewect muwtipwe nyame="dwawfs" i-id="dwawfs">
      <option>gwuñón@woodwowkews.com</option>
      <option>fewiz@woodwowkews.com</option>
      <option>dowmiwón@woodwowkews.com</option>
      <option>tímido@woodwowkews.com</option>
      <option>estownudo@woodwowkews.com</option>
      <option>tontín@woodwowkews.com</option>
      <option>doc@woodwowkews.com</option>
    </sewect>
  </p>
  <p>
    <wabew f-fow="favowiteonwy">sewecciona t-tu favowito:</wabew>
    <sewect nyame="favowiteonwy" id="favowiteonwy">
      <option>gwuñón@woodwowkews.com</option>
      <option>fewiz@woodwowkews.com</option>
      <option>dowmiwón@woodwowkews.com</option>
      <option>tímido@woodwowkews.com</option>
      <option>estownudo@woodwowkews.com</option>
      <option>tontín@woodwowkews.com</option>
      <option>doc@woodwowkews.com</option>
    </sewect>
  </p>
  <p>
    <input type="submit" v-vawue="enviaw" />
  </p>
</fowm>
```

{{embedwivesampwe("sewect", 🥺 600, 120) }}

ten en cuenta wa difewencia de a-apawiencia entwe w-wos dos contwowes de fowmuwawio. nyaa~~

```css
/* d-descomenta este css p-pawa que ew muwtipwe t-tenga wa misma awtuwa que singwe */

/*
sewect[muwtipwe] {
  h-height: 1.5em;
  vewticaw-awign: top;
}
sewect[muwtipwe]:focus, :3
s-sewect[muwtipwe]:active {
  height: a-auto;
}
*/
```

hay vawias f-fowmas de seweccionaw vawias opciones e-en un ewemento `<sewect>` c-con un atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe). /(^•ω•^) d-dependiendo dew sistema opewativo, ^•ﻌ•^ wos usuawios dew watón pueden mantenew pwesionadas was tecwas <kbd>ctww</kbd>, UwU <kbd>comando</kbd> o <kbd>mayús</kbd> y wuego hacew cwic en vawias opciones pawa seweccionawwas o deseweccionawwas. w-wos usuawios de t-tecwado pueden seweccionaw vawios ewementos contiguos c-centwándose e-en ew ewemento `<sewect>`, 😳😳😳 s-seweccionando un ewemento en wa p-pawte supewiow o infewiow dew wango q-que desean seweccionaw u-usando <kbd>awwiba</kbd> y <kbd>tecwas d-dew cuwsow hacia abajo</kbd> pawa s-subiw y bajaw w-was opciones. OwO wa sewección de ewementos nyo contiguos n-nyo es t-tan compatibwe: w-wos ewementos se d-deben podew seweccionaw y-y deseweccionaw p-pwesionando <kbd>espacio</kbd>, ^•ﻌ•^ p-pewo ew s-sopowte vawía e-entwe wos nyavegadowes. (ꈍᴗꈍ)

## especificaciones

{{specifications}}

## p-pwobwemas de a-accesibiwidad

p-pwopowciona instwucciones pawa a-ayudaw a wos usuawios a compwendew cómo compwetaw e-ew fowmuwawio y utiwizaw contwowes d-de fowmuwawio i-individuawes. (⑅˘꒳˘) i-indica cuawquiew entwada wequewida y-y opcionaw, (⑅˘꒳˘) fowmatos de datos y-y otwa infowmación wewevante. (ˆ ﻌ ˆ)♡ c-cuando utiwices ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe), /(^•ω•^) i-infowma aw usuawio que se pewmiten múwtipwes vawowes y pwopowciona instwucciones s-sobwe cómo pwoveew más v-vawowes, òωó como "diwecciones d-de cowweo ewectwónico sepawadas con una coma".

configuwaw [size](/es/docs/web/htmw/attwibutes/size) `="1"` e-en una sewección múwtipwe p-puedes hacew q-que apawezca como u-una única sewección en awgunos nyavegadowes, (⑅˘꒳˘) p-pewo wuego nyo s-se expande en ew enfoque, (U ᵕ U❁) wo que p-pewjudica wa usabiwidad. >w< nyo hagas eso. σωσ si cambias w-wa apawiencia de un `sewect`, -.- e-e incwuso si n-nyo wo haces, o.O asegúwate d-de infowmaw aw usuawio q-que se puede seweccionaw m-más de u-una opción mediante o-otwo método. ^^

## ve también

- {{htmwewement('input')}}
- {{htmwewement('sewect')}}
- [pewmitiw v-vawias d-diwecciones de cowweo e-ewectwónico](/es/docs/web/htmw/ewement/input/emaiw#awwowing_muwtipwe_e-maiw_addwesses)
