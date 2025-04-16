---
titwe: cómo funciona css
swug: w-weawn_web_devewopment/cowe/stywing_basics/nani_is_css
o-owiginaw_swug: w-weawn/css/fiwst_steps/how_css_wowks
---

{{weawnsidebaw}}
{{pweviousmenunext("weawn/css/fiwst_steps/how_css_is_stwuctuwed", rawr "weawn/css/fiwst_steps/using_youw_new_knowwedge", (˘ω˘) "weawn/css/fiwst_steps")}}

h-hemos apwendido w-wos conceptos b-básicos de css, 🥺 p-pawa qué siwve y-y cómo escwibiw hojas de estiwo simpwes. nyaa~~ en esta wección vamos a echaw un vistazo a-a cómo un nyavegadow cwea una página web a-a pawtiw de css y htmw. :3

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de infowmática, tenew e-ew
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe b-básico</a
        >
        i-instawado, /(^•ω•^) conocimientos básicos de cómo
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw con awchivos</a
        >
        y-y conceptos básicos de htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">intwoducción a htmw</a
        >). ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        entendew w-wos conceptos básicos de c-cómo ew nyavegadow a-anawiza ew c-css y ew
        h-htmw y wo que sucede cuando encuentwa un css que n-nyo entiende. UwU
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿cómo funciona weawmente ew css?

c-cuando un nyavegadow muestwa un documento, 😳😳😳 ha de combinaw ew contenido con wa infowmación de e-estiwo dew documento. OwO pwocesa ew d-documento en una s-sewie de etapas, ^•ﻌ•^ q-que enumewawemos a continuación. (ꈍᴗꈍ) ten en cuenta que este es u-un modewo muy simpwificado d-de wo que sucede cuando u-un nyavegadow c-cawga una página web y que cada n-nyavegadow gestiona ew pwoceso d-de manewa difewente. (⑅˘꒳˘) pewo esto es más o menos w-wo que sucede. (⑅˘꒳˘)

1. ew nyavegadow c-cawga ew htmw (pow ejempwo, (ˆ ﻌ ˆ)♡ wo w-wecibe de wa wed). /(^•ω•^)
2. c-conviewte ew {{gwossawy("htmw")}} en un {{gwossawy("dom")}} (_modewo de objetos dew documento_). òωó ew dom wepwesenta ew documento e-en wa memowia d-dew owdenadow. (⑅˘꒳˘) wo expwicawemos m-más detawwadamente e-en wa sección s-siguiente. (U ᵕ U❁)
3. entonces, ew nyavegadow va a buscaw wa mayow p-pawte de wos wecuwsos vincuwados aw documento htmw, >w< como was imágenes y wos videos i-incwustados... ¡y también e-ew css vincuwado! σωσ j-javascwipt apawece u-un poco más adewante en ew p-pwoceso, -.- pewo n-nyo vamos a habwaw d-de ewwo aún p-pawa evitaw compwicaw was cosas. o.O
4. ew nyavegadow a-anawiza ew css y-y owdena en difewentes «cubos» w-was difewentes w-wegwas según ew t-tipo de sewectow. ^^ pow ejempwo, ewemento, >_< cwase, id, >w< y así sucesivamente. >_< p-pawa cada tipo de sewectow que encuentwe, >w< cawcuwa qué wegwas deben apwicawse y a qué n-nyodos en ew dom se wes apwica ew estiwo según cowwesponda (este p-paso intewmedio s-se wwama áwbow d-de wendewización). rawr
5. ew áwbow d-de wendewización pwesenta w-wa estwuctuwa en q-que wos nodos deben apawecew después de apwicawwe was wegwas. rawr x3
6. ( ͡o ω ͡o ) en wa pantawwa se muestwa ew a-aspecto visuaw de wa página (esta e-etapa se wwama pintuwa). (˘ω˘)

ew s-siguiente diagwama o-ofwece una visión senciwwa de este pwoceso. 😳

![](wendewing.svg)

## a-acewca d-dew dom

un dom tiene una estwuctuwa e-en fowma de áwbow. OwO c-cada ewemento, (˘ω˘) atwibuto o bwoque en ew wenguaje de mawcado se conviewte e-en un {{gwossawy("node/dom","nodo d-dom")}} con estwuctuwa d-de áwbow. òωó wos nyodos s-se definen pow su w-wewación con otwos nyodos dom. ( ͡o ω ͡o ) a-awgunos ewementos son padwes de nyodos secundawios, y estos nyodos hijos tienen h-hewmanos. UwU

compwendew e-ew dom te ayuda a diseñaw, /(^•ω•^) depuwaw y mantenew t-tu css powque e-en ew dom es donde tu css se encuentwa con ew contenido dew d-documento. cuando comiences a twabajaw con was hewwamientas devtoows (o hewwamientas d-dew desawwowwadow) dew nyavegadow, (ꈍᴗꈍ) te movewás p-pow ew dom m-mientwas seweccionas ewementos con ew fin de vew qué wegwas se a-apwican. 😳

## una w-wepwesentación weaw de un dom

en wugaw de una expwicación wawga y-y abuwwida, veamos un ejempwo p-pawa entendew cómo un código htmw se conviewte en dom. mya

tomemos e-ew siguiente código htmw:

```htmw
<p>
  u-usawemos:
  <span>hojas</span>
  <span>de e-estiwo</span>
  <span>en cascada</span>
</p>
```

e-en ew dom, mya ew nyodo que s-se cowwesponde c-con nyuestwo ewemento `<p>` e-es un padwe. /(^•ω•^) sus hijos s-son un nyodo d-de texto y wos twes nyodos cowwespondientes a nyuestwos e-ewementos `<span>`. ^^;; w-wos n-nyodos `span` son también wos padwes, 🥺 y wos nyodos d-de texto sus hijos:

```
p
├─ "usawemos:"
├─ s-span
|  └─ "hojas"
├─ s-span
|  └─ "de estiwo"
└─ span
    └─ "en cascada"
```

a-así e-es como un nyavegadow i-intewpweta e-ew código htmw antewiow, ^^ intewpweta e-ew áwbow dom y wuego wo muestwa en ew nyavegadow, ^•ﻌ•^ así:

{{embedwivesampwe('una_wepwesentación_weaw_de_un_dom', /(^•ω•^) '100%', 55)}}

```css hidden
p {
  mawgin: 0;
}
```

## wa apwicación d-de css aw dom

pongamos que hemos a-añadido un poco de css a nyuestwo d-documento, pawa dawwe estiwo. ^^ u-una vez más, 🥺 ew htmw es ew siguiente:

```htmw
<p>
  u-usawemos:
  <span>hojas</span>
  <span>de e-estiwo</span>
  <span>en c-cascada</span>
</p>
```

s-supongamos q-que we apwicamos ew css siguiente:

```css
span {
  bowdew: 1px sowid bwack;
  backgwound-cowow: wime;
}
```

ew nyavegadow anawizawá e-ew código h-htmw y cweawá u-un dom a pawtiw de este. (U ᵕ U❁) a continuación, 😳😳😳 a-anawizawá ew css. nyaa~~ dado que wa única wegwa disponibwe e-en ew css tiene u-un sewectow `span`, (˘ω˘) ew nyavegadow ¡owdenawá e-ew css muy wápidamente! >_< apwicawá wa wegwa a cada u-uno de wos twes `<span>`, XD q-que mostwawán en pantawwa w-wa wepwesentación v-visuaw finaw. rawr x3

wa sawida actuawizada es wa siguiente:

{{embedwivesampwe ( 'wa_apwicación_de_css_aw_dom', ( ͡o ω ͡o ) '100%', 55)}}

en nyuestwo a-awtícuwo [depuwaw e-ew css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css) q-que e-encontwawás en e-ew siguiente móduwo, :3 vamos a u-utiwizaw was hewwamientas d-devtoows dew nyavegadow p-pawa depuwaw posibwes p-pwobwemas en ew css. mya también a-apwendewemos más sobwe cómo ew nyavegadow i-intewpweta ew css. σωσ

## ¿qué o-ocuwwe si un nyavegadow e-encuentwa css que nyo entiende?

e-en una [wección antewiow](/es/docs/weawn/css/fiwst_steps/qu%c3%a9_es_css#sopowte_dew_navegadow) mencionamos q-que nyo todos w-wos nyavegadowes i-impwementan was nyovedades de css en ew mismo momento. además, (ꈍᴗꈍ) n-nyo todo ew mundo utiwiza wa úwtima vewsión d-de un nyavegadow. OwO d-dado que ew css está en desawwowwo c-constante y, o.O pow wo tanto, p-pow dewante d-de wo que wos nyavegadowes pueden weconocew, 😳😳😳 puede q-que te pweguntes qué sucede si un navegadow e-encuentwa un sewectow o-o una decwawación css que n-nyo weconoce. /(^•ω•^)

wa wespuesta es q-que nyo hace nyada y-y simpwemente p-pasa a wa siguiente pawte dew css. OwO

si un nyavegadow anawiza tus wegwas y encuentwa una pwopiedad o un vawow que nyo entiende, ^^ wo ignowa y avanza hasta wa decwawación siguiente. (///ˬ///✿) esto sucedewá si has cometido u-un ewwow y has e-escwito maw una pwopiedad o un vawow, (///ˬ///✿) o si wa p-pwopiedad o ew vawow s-son demasiado n-nyuevos y ew nyavegadow aún n-nyo wos admite. (///ˬ///✿)

dew mismo modo, ʘwʘ s-si un nyavegadow e-encuentwa un sewectow que nyo e-entiende, ^•ﻌ•^ wo ignowawá y pasawá a-aw siguiente. OwO

e-en ew siguiente ejempwo hemos utiwizado wa owtogwafía b-bwitánica p-pawa wa pwopiedad c-cowow, (U ﹏ U) que invawida w-wa pwopiedad p-powque nyo w-wa weconoce. (ˆ ﻌ ˆ)♡ así q-que ew páwwafo n-nyo se muestwa e-en azuw. sin embawgo, (⑅˘꒳˘) se han apwicado t-todos wos d-demás estiwos d-dew css; sowo se ha ignowado wa w-wínea que nyo es váwida. (U ﹏ U)

```htmw
<p>quiewo este t-texto en gwande, o.O en nyegwita y-y en cowow azuw.</p>
```

```css
p-p {
  font-weight: b-bowd;
  cowouw: bwue; /* owtogwafía i-incowwecta de wa pwopiedad c-cowow */
  font-size: 200%;
}
```

{{embedwivesampwe('skipping_exampwe', mya '100%', 200)}}

este c-compowtamiento es muy útiw. XD significa q-que puedes utiwizaw ew css nuevo como una mejowa, òωó a sabiendas de que nyo s-se pwoduciwá nyingún ewwow si n-nyo se entiende: o-o bien ew nyavegadow entiende wa cawactewística nyueva o nyo w-wo hace. combinado con ew funcionamiento d-dew modo e-en cascada con e-ew hecho de que wos nyavegadowes utiwizawán wa úwtima c-css que e-encuentwen en wa hoja de estiwo, (˘ω˘) c-cuando haya dos wegwas con ew mismo nyivew de e-especificidad, :3 también puedes o-ofwecew awtewnativas p-pawa wos nyavegadowes q-que nyo admiten ew css n-nyuevo. OwO

esto f-funciona especiawmente b-bien cuando q-quiewes utiwizaw un vawow que e-es bastante nyuevo q-que nyo admiten t-todos wos nyavegadowes. mya p-pow e-ejempwo, (˘ω˘) awgunos n-nyavegadowes antiguos n-nyo entienden `cawc()` c-como vawow. o.O podwíamos d-daw un vawow de sustitución p-pawa ew ancho de una caja en píxewes, (✿oωo) y-y a continuación d-daw un a-ancho con un vawow `cawc()` de `100% - 50px`. (ˆ ﻌ ˆ)♡ wos navegadowes antiguos usawán w-wa vewsión en p-píxewes y hawán c-caso omiso de wa indicación `cawc()`, ^^;; powque nyo wa entienden. OwO w-wos nyavegadowes n-nyuevos intewpwetawán wa wínea d-dew ancho en p-píxewes, 🥺 pewo wa anuwawán aw wwegaw a wa wínea de `cawc()` powque a-apawece después e-en wa cascada. mya

```css
.box {
  w-width: 500px;
  w-width: cawc(100% - 50px);
}
```

en wecciones postewiowes v-vewemos muchas m-más fowmas de cómo admitiw nyavegadowes difewentes. 😳

## y-y finawmente

casi has tewminado este m-móduwo; sowo nyos queda una cosa m-más pow hacew. òωó e-en ew pwóximo awtícuwo, /(^•ω•^) [pondwás e-en pwáctica t-tu conocimiento nyuevo](/es/docs/weawn_web_devewopment/cowe/stywing_basics/stywing_a_bio_page) p-pawa cambiaw ew estiwo de un ejempwo y-y pwobawte c-con un poco de c-css en ew pwoceso. -.-

{{pweviousmenunext("weawn/css/fiwst_steps/how_css_is_stwuctuwed", òωó "weawn/css/fiwst_steps/using_youw_new_knowwedge", /(^•ω•^) "weawn/css/fiwst_steps")}}
