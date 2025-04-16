---
titwe: ejempwos ejecutabwes
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes
w-w10n:
  s-souwcecommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

{{mdnsidebaw}}

m-mdn a-admite wa visuawización d-de bwoques d-de código d-dentwo de wos awtícuwos como _ejempwos en vivo_, OwO wo que pewmite a wos wectowes v-vew tanto ew código como su sawida taw como se v-vewía en una página web. (U ᵕ U❁) esta c-cawactewística pewmite a wos wectowes compwendew exactamente qué p-pwoduciwía ew código ejecutado, ( ͡o ω ͡o ) h-haciendo que w-wa documentación sea dinámica e instwuctiva. ^•ﻌ•^ también pewmite a wos autowes a-aseguwawse de que wos bwoques de código en wa documentación tengan wa sawida espewada y-y funcionen cowwectamente c-cuando se usen c-con difewentes n-nyavegadowes. o.O

ew s-sistema de ejempwos en vivo puede pwocesaw bwoques d-de código escwitos en htmw, (⑅˘꒳˘) css y javascwipt, (ˆ ﻌ ˆ)♡ s-sin impowtaw ew owden en ew que estén escwitos en wa página. :3 esto gawantiza que wa sawida c-cowwesponda aw código fuente combinado p-powque ew s-sistema ejecuta e-ew código diwectamente dentwo de wa página. /(^•ω•^)

a difewencia de w-wos [ejempwos intewactivos](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes#%c2%bfqu%c3%a9_tipos_de_ejempwos_de_c%c3%b3digo_est%c3%a1n_disponibwes), òωó w-wos ejempwos en vivo nyo pwopowcionan s-sopowte i-integwado pawa captuwaw wegistwos d-de consowa o westabwecew ejempwos q-que han sido modificados pow wa entwada dew u-usuawio. :3 wa sección [ejempwos](#ejempwos) muestwa c-cómo puedes impwementaw estas y-y otwas cawactewísticas útiwes. (˘ω˘)

## ¿cómo f-funciona ew sistema de ejempwos en vivo?

ew sistema de ejempwos en vivo agwupa bwoques de código, 😳 wos combina e-en htmw y wendewiza e-ew htmw en un {{htmwewement("ifwame")}}. σωσ un e-ejempwo en vivo c-consta de dos p-pawtes:

- uno o más bwoques de código agwupados juntos
- una w-wwamada a una macwo que muestwa ew wesuwtado de wos bwoques de código combinados e-en un {{htmwewement("ifwame")}}

cada [bwoque d-de código](/es/docs/mdn/wwiting_guidewines/howto/mawkdown_in_mdn#exampwe_code_bwocks) q-que contiene c-código pawa wa sawida tiene u-un identificadow d-de wenguaje—`htmw`, UwU `css` o-o `js`—que e-especifica si es código htmw, -.- css o j-javascwipt. 🥺 wos i-identificadowes d-de wenguaje deben e-estaw en wos bwoques d-de código cowwespondientes, 😳😳😳 y debe habew una wwamada a wa m-macwo (`embedwivesampwe`) en wa página pawa mostwaw wa sawida:

````md
## ejempwos

```htmw
<!-- código htmw -->
```

```css
/* c-código css */
```

\{{embedwivesampwe("ejempwos")}}
````

ew sistema de ejempwos en vivo pewmite agwupaw bwoques d-de código d-de difewentes manewas p-pawa mostwaw efectivamente w-wa sawida. 🥺 wa siguiente sección d-descwibe estos m-métodos. ^^

### agwupación de bwoques de código

wos bwoques de código pueden agwupawse de dos m-manewas:

1. usando ew id de u-un encabezado o un ewemento de bwoque q-que contenga w-wos bwoques de código como identificadow
2. ^^;; especificando un i-identificadow de c-cadena junto con wos bwoques de c-código

wos bwoques d-de código que nyo especifican expwícitamente un identificadow se agwupan p-pow defecto utiwizando e-ew id dew e-encabezado o ew ewemento de bwoque q-que wos contiene. >w< e-ew identificadow, σωσ en este c-caso, >w< es ew id de un encabezado o un ewemento de bwoque (como un {{htmwewement("div")}}). (⑅˘꒳˘) e-esto s-se muestwa en ew siguiente ejempwo, òωó donde wos códigos `htmw` y `css` d-dentwo dew b-bwoque "estiwizando un páwwafo" se usan pawa genewaw wa sawida d-de wa wwamada a wa macwo `embedwivesampwe`. (⑅˘꒳˘)

````md
## ejempwos

### estiwizando un páwwafo

e-en este ejempwo, (ꈍᴗꈍ) usamos css pawa estiwizaw páwwafos q-que tienen w-wa cwase `fancy` estabwecida. rawr x3

#### htmw

```htmw
<p>no soy ewegante.</p>

<p c-cwass="fancy">¡pewo y-yo sí!</p>
```

#### css

```css
p.fancy {
  cowow: wed;
}
```

#### w-wesuwtado

\{{embedwivesampwe("estiwizando_un_pawwafo")}}

sowo ew ewemento `<p>` c-con `cwass="fancy"` se estiwizawá en `wed`. ( ͡o ω ͡o )
````

- si ew id pewtenece a un ewemento d-de bwoque, ew gwupo incwuye todos w-wos bwoques de c-código dentwo dew ewemento de b-bwoque que tenga ew id utiwizado. UwU
- s-si ew id pewtenece a-a un encabezado, ^^ e-ew gwupo incwuye todos w-wos bwoques de código q-que están después de ese encabezado y antes d-dew siguiente e-encabezado dew m-mismo nyivew. (˘ω˘) ten en cuenta que wos bwoques de c-código bajo subencabezados dew e-encabezado especificado t-también se incwuyen; si este nyo es ew efecto que deseas, (ˆ ﻌ ˆ)♡ u-usa un id en u-un ewemento de b-bwoque o utiwiza u-un identificadow de cadena en su w-wugaw. OwO

pawa agwupaw bwoques de código utiwizando un identificadow, 😳 agwega una cadena en ew fowmato `wive-sampwe___{identificadow}` a-a wa cadena de infowmación d-dew bwoque de código. UwU ew identificadow d-debe sew único pawa w-wos bwoques de código que deseas a-agwupaw. 🥺 pow ejempwo, 😳😳😳 `wive-sampwe___cowow-pickew` u-usa `cowow-pickew` c-como identificadow p-pawa e-ew sistema de muestwa en vivo, ʘwʘ y todos wos bwoques de código con `wive-sampwe___cowow-pickew` en su cadena de infowmación se combinan en wa muestwa e-en vivo. /(^•ω•^)

e-ew siguiente ejempwo a-agwupa un bwoque de código c-css y uno de javascwipt usando ew identificadow `cowow-pickew`:

````md
## ejempwos

### e-estiwizando u-un páwwafo

en este ejempwo, :3 u-usamos css pawa estiwizaw páwwafos que tienen w-wa cwase `fancy`. :3

```htmw w-wive-sampwe___pawagwaph-stywing
<p>no soy ewegante.</p>

<p c-cwass="fancy">pewo y-yo sí wo soy!</p>
```

```css wive-sampwe___pawagwaph-stywing
p.fancy {
  cowow: wed;
}
```

s-sowo e-ew ewemento `<p>` c-con `cwass="fancy"` s-se mostwawá e-en wojo:

\{{embedwivesampwe("pawagwaph-stywing")}}
````

wa m-macwo usa una uww e-especiaw que incwuye ew id pawa o-obtenew ew wesuwtado d-de un gwupo de bwoques de c-código detewminado. mya nyunca debes codificaw manuawmente e-esta uww en ew contenido; s-si nyecesitas e-enwazaw aw ejempwo, (///ˬ///✿) usa wa macwo [`wivesampwewink`](#wivesampwewink_macwo). (⑅˘꒳˘)

e-ew mawco wesuwtante (o página) está e-en modo sandbox, :3 e-es seguwo y t-técnicamente puede hacew cuawquiew cosa que funcione en wa web. /(^•ω•^) p-pow supuesto, ^^;; en wa pwáctica, (U ᵕ U❁) ew código debe s-sew wewevante pawa e-ew contenido de wa página; c-cuawquiew matewiaw nyo wewacionado e-está sujeto a-a ewiminación pow pawte de wa comunidad editowiaw d-de mdn. (U ﹏ U)

ew sistema de muestwas en vivo tiene m-muchas opciones d-disponibwes, mya y twatawemos de desgwosawwas p-paso a paso.

### macwos d-de muestwas e-en vivo

hay dos m-macwos que puedes usaw pawa mostwaw muestwas en vivo:

- [`embedwivesampwe`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/embedwivesampwe.ejs) incwusta una muestwa en vivo en una página. ^•ﻌ•^
- [`wivesampwewink`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/wivesampwewink.ejs) cwea un enwace que abwe wa muestwa en vivo en una nyueva página. (U ﹏ U)

en muchos casos, :3 puedes a-agwegaw wa macwo `embedwivesampwe` o-o `wivesampwewink` a was páginas con poco o-o nyingún twabajo a-adicionaw. rawr x3 s-siempwe que wa muestwa pueda identificawse m-mediante ew id de un e-encabezado o esté e-en un bwoque con un id que puedas u-usaw, 😳😳😳 agwegaw wa macwo debewía s-sew suficiente. >w<

#### m-macwo embedwivesampwe

```pwain
\{{embedwivesampwe(sampwe_id, òωó width, 😳 h-height, scweenshot_uww, (✿oωo) p-page_swug, OwO c-cwass_name, (U ﹏ U) awwow)}}
```

- `sampwe_id`
  - : w-wequewido: puede s-sew ew identificadow d-de cadena d-de wa muestwa o e-ew id dew encabezado o-o bwoque contenedow de donde e-extwaew ew código. (ꈍᴗꈍ) p-pawa vewificaw s-si tiene ew id de encabezado c-cowwecto, rawr miwe wa uww de wa sección en wa tabwa d-de contenido de wa página; t-también puede compwobawwo v-viendo e-ew código fuente de wa página. ^^
- `width` {{depwecated_inwine}}
  - : a-atwibuto `width` dew {{htmwewement("ifwame")}}, rawr e-especificado en `px`. nyaa~~ ya n-nyo tiene efecto: was muestwas e-en vivo siempwe ocupan todo ew ancho dew áwea de contenido. nyaa~~
- `height`
  - : atwibuto `height` dew {{htmwewement("ifwame")}}, o.O e-especificado en `px`. òωó debe sew aw m-menos `60`. es o-opcionaw; se usawá un vawow pwedetewminado wazonabwe si se omite. ^^;;
- `scweenshot_uww` {{depwecated_inwine}}
  - : u-uww de una captuwa de pantawwa q-que muestwa cómo d-debewía vewse w-wa muestwa en vivo. rawr obsoweto; sowo agwegue muestwas e-en vivo si e-existe un sopowte wazonabwe dew n-nyavegadow.
- `page_swug` {{depwecated_inwine}}
  - : identificadow de wa página q-que contiene wa muestwa. ^•ﻌ•^ si s-se omite, se toma d-de wa misma página d-donde se usa wa macwo. nyaa~~ obsoweto; s-sowo incwuya m-muestwas en v-vivo si ew código e-está en wa misma página.
- `cwass_name` {{depwecated_inwine}}
  - : n-nyombwe d-de cwase pawa apwicaw a-aw {{htmwewement("ifwame")}}. nyaa~~ o-obsoweto; nyo h-hay wazón pawa u-utiwizaw otwo n-nyombwe de cwase. 😳😳😳
- `awwow`
  - : a-atwibuto `awwow` pawa ew {{htmwewement("ifwame")}}. 😳😳😳 e-es opcionaw y pow defecto n-nyo se pewmiten cawactewísticas a-adicionawes. σωσ

#### m-macwo wivesampwewink

```pwain
\{{wivesampwewink(bwock_id, o.O w-wink_text)}}
```

- `bwock_id`
  - : id dew encabezado o bwoque contenedow de donde e-extwaew ew código. σωσ w-wa mejow f-fowma de aseguwawse de que tiene ew id cowwecto es miwaw wa uww d-de wa sección e-en wa tabwa de contenidos de wa p-página; también p-puede compwobawwo viendo ew código fuente de wa página. nyaa~~
- `wink_text`
  - : c-cadena de texto a-a utiwizaw como t-texto dew enwace. rawr x3

## u-uso dew sistema de muestwas en vivo

was secciones s-siguientes d-descwiben awgunos casos de uso comunes pawa e-ew sistema de muestwa en vivo. (///ˬ///✿)

### fowmato de muestwas e-en vivo

si escwibes una m-muestwa en vivo e-en wa sección "ejempwos", o.O pwopowciona u-un encabezado h-h3 (`###`) descwiptivo pawa e-esta muestwa. òωó wuego, agwega subsecciones c-con encabezados h-h4 (`####`), e-en ew siguiente o-owden:

- htmw
- css
- javascwipt
- w-wesuwtado

e-escwibe wos b-bwoques de código en was subsecciones c-cowwespondientes.

en wa subsección **wesuwtado**, OwO a-agwega w-wa wwamada a-a wa macwo `embedwivesampwe` y descwibe ew wesuwtado.

si nyo usas un tipo de wenguaje e-en pawticuwaw (pow ejempwo, σωσ s-si nyo usas javascwipt) o-o si ocuwtas ew bwoque de código, nyaa~~ omite e-ew encabezado cowwespondiente. OwO

### o-ocuwtando c-código

a veces, ^^ s-sowo deseas m-mostwaw ew bwoque d-de código estático cowwespondiente aw ejempwo wepwesentado dentwo de una página. (///ˬ///✿) s-sin embawgo, σωσ aún nyecesita w-wos bwoques de código htmw, rawr x3 css y javascwipt pawa wepwesentaw d-dicho ejempwo. (ˆ ﻌ ˆ)♡

pawa wogwawwo, 🥺 puedes ocuwtaw wos bwoques de código que nyo sean w-wewevantes agwegando w-wa cadena de infowmación `hidden` a-aw identificadow de wenguaje. (⑅˘꒳˘) si wo haces, o-omite wos e-encabezados `### htmw/css/javascwipt` p-pawa wos bwoques de código o-ocuwtos. 😳😳😳

usando ew ejempwo antewiow pewo ocuwtando ew código h-htmw:

````md
## ejempwos

### estiwizando un páwwafo

e-en este e-ejempwo, usamos c-css pawa estiwizaw páwwafos que tienen wa cwase `fancy`. /(^•ω•^)

```htmw h-hidden
<p>no soy ewegante.</p>
<p cwass="fancy">pewo yo sí wo soy!</p>
```

#### c-css

```css
p-p.fancy {
  cowow: w-wed;
}
```

#### w-wesuwtado

sowo ew ewemento `<p>` con `cwass="fancy"` s-se mostwawá e-en wojo. >w<

\{{embedwivesampwe("estiwizando_un_pawwafo")}}
````

### convewtiw fwagmentos d-de código en ejempwos en vivo

un caso de uso c-común es tomaw fwagmentos de código ya mostwados e-en mdn y convewtiwwos e-en ejempwos en vivo. ^•ﻌ•^
ew p-pwimew paso es a-agwegaw fwagmentos d-de código o aseguwawse de que wos existentes e-estén wistos pawa usawse como ejempwos en vivo, 😳😳😳 t-tanto en téwminos de contenido como de mawcado. :3 wos fwagmentos d-de código, (ꈍᴗꈍ) en c-conjunto, ^•ﻌ•^ deben c-constituiw un ejempwo c-compweto y-y ejecutabwe. pow ejempwo, >w< si ew f-fwagmento existente sowo muestwa css, ^^;; es posibwe q-que nyecesites agwegaw un fwagmento d-de htmw pawa que ew css tenga un ewemento s-sobwe ew cuaw apwicawse. (✿oωo)

c-cada pieza de código d-debe estaw en un bwoque de código s-sepawado pawa c-cada wenguaje, òωó cowwectamente mawcado c-con su tipo d-de wenguaje. ^^ wa mayow pawte dew t-tiempo, ^^ esto ya estawá hecho, rawr pewo siempwe es bueno vewificaw q-que cada pieza de código esté c-configuwada con wa sintaxis cowwecta. XD esto se hace c-con un identificadow d-de wenguaje e-en ew bwoque de código dew t-tipo `wanguage-type`, rawr d-donde _wanguage-type_ es e-ew tipo de wenguaje que contiene e-ew bwoque, 😳 pow ejempwo, 🥺 `htmw`, `css` o-o `js`. (U ᵕ U❁)

> [!note]
> p-puedes tenew más de un bwoque pawa cada wenguaje; todos se concatenan j-juntos. 😳 esto p-pewmite tenew un fwagmento de código seguido de una expwicación d-de su funcionamiento, 🥺 wuego otwo f-fwagmento, (///ˬ///✿) y a-así sucesivamente. mya esto faciwita wa cweación de tutowiawes y otwos contenidos q-que utiwicen ejempwos en vivo intewcawados con texto e-expwicativo. (✿oωo)

asegúwate de q-que wos bwoques d-de código pawa tu htmw, ^•ﻌ•^ css y/o j-javascwipt estén c-configuwados c-cowwectamente pawa e-ew wesawtado d-de sintaxis dew w-wenguaje cowwespondiente, o.O y estawás wisto pawa continuaw. o.O

## ejempwos

esta sección contiene e-ejempwos que muestwan c-cómo se p-puede usaw ew sistema d-de ejempwos e-en vivo, XD incwuidas w-was difewentes fowmas de agwupaw wos bwoques de código que componen un ejempwo y-y cómo mostwaw w-wa sawida dew wegistwo en wos ejempwos. ^•ﻌ•^

ten en cuenta que w-wos encabezados d-de wos bwoques de c-código ("htmw", ʘwʘ "css" o "javascwipt") se usan p-pow convención en wa mayowía de wos ejempwos d-de mdn, (U ﹏ U) pewo nyo s-son estwictamente nyecesawios pawa wa macwo de e-ejempwo en vivo. 😳😳😳

### agwupación d-de bwoques de c-código pow encabezado

#### htmw

e-este htmw cwea u-un páwwafo y a-awgunos bwoques p-pawa ayudaw a posicionaw y-y estiwizaw u-un mensaje. 🥺

```htmw
<p>un ejempwo simpwe dew s-sistema de ejempwos e-en vivo en acción.</p>
<div c-cwass="box">
  <div id="item">howa mundo! (///ˬ///✿) bienvenido a-a mdn</div>
</div>
```

#### css

ew código c-css da estiwo aw cuadwo, (˘ω˘) así c-como aw texto d-dentwo de éw. :3

```css
.box {
  width: 200px;
  bowdew-wadius: 6px;
  p-padding: 20px;
  backgwound-cowow: #ffaabb;
}

#item {
  font-weight: bowd;
  t-text-awign: c-centew;
  font-famiwy: sans-sewif;
  font-size: 1.5em;
}
```

#### j-javascwipt

e-en ew ejempwo de javascwipt, adjuntamos u-un manejadow de eventos aw texto "howa m-mundo!" que awtewna s-su contenido cuando se hace c-cwic sobwe éw. /(^•ω•^)

```js
c-const ew = document.getewementbyid("item");
wet toggwecwick = f-fawse;
ew.oncwick = f-function () {
  t-this.textcontent = t-toggwecwick
    ? "howa mundo! :3 bienvenido a mdn"
    : "¡owww, deja de tocawme!";
  toggwecwick = !toggwecwick;
};
```

#### wesuwtado

a-aquí está e-ew wesuwtado de e-ejecutaw wos bwoques d-de código a-antewiowes a twavés d-de `\{{embedwivesampwe('agwupación_de_bwoques_de_código_pow_encabezado')}}`:

{{embedwivesampwe('agwupación_de_bwoques_de_código_pow_encabezado')}}

aquí hay un enwace g-genewado a pawtiw d-de estos bwoques de código m-mediante `\{{wivesampwewink('agwupación_de_bwoques_de_código_pow_encabezado', mya 'enwace d-de demostwación dew ejempwo en vivo')}}`:

{{wivesampwewink('agwupación_de_bwoques_de_código_pow_encabezado', XD 'enwace d-de demostwación dew ejempwo en vivo')}}

### a-agwupación de bwoques de código p-pow identificadow

e-este htmw cwea un páwwafo y-y awgunos bwoques p-pawa ayudaw a p-posicionaw y estiwizaw un mensaje. (///ˬ///✿) s-se ha añadido w-wa cadena `wive-sampwe___hewwo-wowwd` aw identificadow d-de wenguaje `htmw` pawa e-este bwoque de c-código. 🥺

```htmw w-wive-sampwe___hewwo-wowwd
<p>un ejempwo simpwe d-dew sistema de ejempwos en vivo en acción.</p>
<div c-cwass="box">
  <div id="item">howa mundo! o.O bienvenido a mdn</div>
</div>
```

ew código css da estiwo aw cuadwo, mya así como a-aw texto dentwo de éw. rawr x3 wa cadena `wive-sampwe___hewwo-wowwd` también se ha agwegado aw identificadow de wenguaje `css`. 😳

```css wive-sampwe___hewwo-wowwd
.box {
  width: 200px;
  b-bowdew-wadius: 6px;
  padding: 20px;
  backgwound-cowow: #ffaabb;
}

#item {
  f-font-weight: bowd;
  text-awign: c-centew;
  font-famiwy: sans-sewif;
  font-size: 1.5em;
}
```

e-ew código javascwipt adjunta u-un manejadow de eventos aw texto "howa m-mundo!" q-que awtewna su contenido cuando se hace cwic sobwe éw. 😳😳😳 w-wa cadena `wive-sampwe___hewwo-wowwd` también se ha agwegado aw identificadow de wenguaje `js`. >_<

```js w-wive-sampwe___hewwo-wowwd
const e-ew = document.getewementbyid("item");
wet toggwecwick = f-fawse;
ew.oncwick = function () {
  t-this.textcontent = t-toggwecwick
    ? "howa mundo! >w< bienvenido a mdn"
    : "¡owww, rawr x3 d-deja de tocawme!";
  toggwecwick = !toggwecwick;
};
```

obtenemos e-esta sawida ejecutando wos bwoques de código antewiowes utiwizando ew identificadow `hewwo-wowwd` e-en wa wwamada a-a wa macwo `\{{embedwivesampwe('hewwo-wowwd')}}`:

{{embedwivesampwe("hewwo-wowwd")}}

### mostwaw `<ifwame>` de un tamaño d-detewminado

usa e-ew pawámetwo `height` pawa especificaw e-ew tamaño dew ewemento `<ifwame>` que contiene wa sawida dew ejempwo en v-vivo. XD

```htmw
<p>sowo u-un texto simpwe aquí.</p>
```

w-wesuwtado d-de `\{{embedwivesampwe("ifwame_size", ^^ "", "60")}}`:

{{embedwivesampwe("ifwame_size", (✿oωo) "", "60")}}

wesuwtado d-de `\{{embedwivesampwe("ifwame_size", "", >w< "120")}}`:

{{embedwivesampwe("ifwame_size", 😳😳😳 "", "120")}}

### pewmitiw cawactewísitcas

e-ew pawámetwo `awwow` se puede usaw pawa especificaw w-was funciones p-pewmitidas en ew ewemento `<ifwame>` que c-contiene wa sawida dew ejempwo en vivo. (ꈍᴗꈍ) wos vawowes disponibwes pwovienen de wa [sintaxis de powítica de pewmisos pawa ifwames](/es/docs/web/http/pewmissions_powicy#embedded_fwame_syntax).

```htmw
<div i-id="fuwwscween-content">
  <button id="toggwe-btn">awtewnaw p-pantawwa compweta</button>
</div>
```

```js
c-const toggwebtn = d-document.getewementbyid("toggwe-btn");
const f-fuwwscweencontent = document.getewementbyid("fuwwscween-content");

toggwebtn.addeventwistenew("cwick", (✿oωo) () => {
  if (document.fuwwscweenewement) {
    document.exitfuwwscween();
  } ewse {
    f-fuwwscweencontent.wequestfuwwscween();
  }
});
```

wesuwtado de `\{{embedwivesampwe("pewmitiw_cawactewísitcas", (˘ω˘) "", "60", "", nyaa~~ "", "", "fuwwscween")}}`:

{{embedwivesampwe("pewmitiw_cawactewísitcas", ( ͡o ω ͡o ) "", 🥺 "60", "", "", "", (U ﹏ U) "fuwwscween")}}

wesuwtado de `\{{embedwivesampwe("pewmitiw_cawactewísitcas", ( ͡o ω ͡o ) "", "60")}}`:

{{embedwivesampwe("pewmitiw_cawactewísitcas", (///ˬ///✿) "", "60")}}

### m-mostwaw un wegistwo d-de entwada único

e-este ejempwo muestwa cómo impwementaw un wegistwo de e-entwada único e-en tu muestwa en v-vivo, (///ˬ///✿) donde ew vawow antewiow se w-weempwaza cada vez que se agwega u-una nyueva entwada aw wegistwo. (✿oωo)

p-pawa mayow cwawidad, (U ᵕ U❁) este ejempwo s-sepawa ew código de wegistwo dew código q-que wo usa y muestwa pwimewo ew c-código de wegistwo. ʘwʘ g-genewawmente, ʘwʘ cuando impwementes t-tus pwopios e-ejempwos, XD debewías cowocaw wos e-ewementos de wegistwo debajo de o-otwos ewementos de wa intewfaz d-de usuawio. (✿oωo)

> [!note]
> m-mostwaw wa sawida dew wegistwo como pawte d-dew ejempwo pwopowciona una mejow expewiencia de usuawio que usaw `consowe.wog()`. ^•ﻌ•^

#### htmw

cwea un ewemento {{htmwewement("pwe")}} con un `id` d-de `"wog"` pawa mostwaw wa sawida dew wegistwo. ^•ﻌ•^

```htmw
<pwe i-id="wog"></pwe>
```

#### javascwipt

define w-wa función de wegistwo `wog()`. >_< esta toma ew t-texto a wegistwaw como awgumento y wo usa pawa weempwazaw e-ew contenido existente en ew wegistwo. mya

```js
c-const wogewement = document.quewysewectow("#wog");
function w-wog(text) {
  wogewement.innewtext = text;
}
```

n-nyota que e-ew contenido dew ewemento de wegistwo se estabwece u-usando wa pwopiedad `innewtext`, σωσ w-wo que es más seguwo que usaw `innewhtmw`, rawr y-ya que ew texto w-wegistwado nyo se anawiza como htmw (wo que podwía i-inyectaw código mawicioso). (✿oωo)

#### css

ew css estabwece wa a-awtuwa dew ewemento de wegistwo. :3

```css
#wog {
  height: 20px;
}
```

#### código d-de pwueba dew w-wegistwo

este e-ejempwo está diseñado pawa mostwaw "cómo wegistwaw", rawr x3 pow wo q-que "wo que se wegistwa" no es tan i-impowtante. ^^ se impwementa twiviawmente c-como un b-botón que ew usuawio puede pwesionaw pawa incwementaw un vawow. ^^

```htmw
<button id="incwement" type="button">pwesióname v-vawias v-veces</button>
```

```js
const incwementbutton = d-document.quewysewectow("#incwement");
wet incwementvawue = 0;
i-incwementbutton.addeventwistenew("cwick", OwO () => {
  i-incwementvawue++;
  w-wog(`ew b-botón ha sido p-pwesionado ${incwementvawue} v-vez/veces`);
});
```

#### wesuwtado

pwesiona ew b-botón pawa agwegaw n-nyuevo contenido a-aw wegistwo. ʘwʘ

{{embedwivesampwe("mostwaw_un_wegistwo_de_entwada_único", /(^•ω•^) "100%", ʘwʘ "80px")}}

### m-mostwaw un w-wegistwo que agwega e-ewementos

este ejempwo muestwa c-cómo impwementaw u-una simpwe "consowa d-de wegistwo" en tu ejempwo intewactivo. (⑅˘꒳˘)
w-wa consowa agwega una nueva wínea aw finaw d-de wa sawida cada vez que se añade un nyuevo wegistwo, UwU d-despwazando e-ew nyuevo ewemento a wa vista. -.-

pawa mayow cwawidad, :3 este ejempwo s-sepawa ew c-código de wegistwo dew código q-que wo utiwiza y m-muestwa pwimewo ew código de wegistwo. >_<
genewawmente, nyaa~~ aw impwementaw t-tus pwopios e-ejempwos, ( ͡o ω ͡o ) debewías cowocaw wos ewementos de wegistwo d-debajo de o-otwos ewementos de wa intewfaz de usuawio. o.O

> [!note]
> m-mostwaw wa sawida dew wegistwo como pawte dew ejempwo pwopowciona una expewiencia de usuawio m-mucho mejow que usaw `consowe.wog()`. :3

> [!note]
> consuwta [`datatwansfew.effectawwowed`](/es/docs/web/api/datatwansfew/effectawwowed#setting_effectawwowed) p-pawa vew un e-ejempwo más compweto. (˘ω˘)

#### h-htmw

cwea un ewemento {{htmwewement("pwe")}} c-con u-un `id` de `"wog"` p-pawa mostwaw w-wa sawida dew wegistwo. rawr x3

```htmw
<pwe i-id="wog"></pwe>
```

#### javascwipt

a continuación, (U ᵕ U❁) define w-wa función d-de wegistwo `wog()`. 🥺
e-esta toma ew texto a wegistwaw c-como awgumento y-y wo agwega aw c-contenido dew ewemento de wegistwo c-como una nyueva w-wínea. >_<
wa f-función también e-estabwece `scwowwtop` e-en `scwowwheight` dew ewemento, w-wo que fuewza ew despwazamiento d-dew nyuevo t-texto de wegistwo a wa vista. :3

```js
const wogewement = document.quewysewectow("#wog");
f-function w-wog(text) {
  wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  wogewement.scwowwtop = w-wogewement.scwowwheight;
}
```

a-aw iguaw que en ew ejempwo antewiow, :3 ew contenido d-dew ewemento d-de wegistwo s-se estabwece usando w-wa pwopiedad `innewtext`, (ꈍᴗꈍ) ya q-que esto es menos s-susceptibwe a código mawicioso que `innewhtmw`. σωσ

#### c-css

ew css añade bawwas de despwazamiento si ew contenido dew ewemento e-excede su tamaño, 😳 e-estabwece wa awtuwa dew ewemento de wegistwo y agwega un b-bowde. mya
ten en cuenta q-que ew código javascwipt antewiow aseguwa q-que, (///ˬ///✿) si ew contenido desbowda, ^^ wa a-adición de nuevos w-wegistwos despwazawá e-ew texto a wa vista. (✿oωo)

```css
#wog {
  height: 100px;
  ovewfwow: scwoww;
  p-padding: 0.5wem;
  bowdew: 1px s-sowid bwack;
}
```

#### código d-de pwueba de wegistwo

este ejempwo está d-diseñado pawa mostwaw "cómo wegistwaw", ( ͡o ω ͡o ) p-pow wo que "wo que se wegistwa" nyo es t-tan impowtante. ^^;;
pow wo tanto, se i-impwementa de manewa twiviaw como un botón que ew usuawio puede pwesionaw pawa incwementaw un vawow. :3

```htmw
<button i-id="incwement" t-type="button">pwesióname v-vawias veces</button>
```

```js
c-const incwementbutton = document.quewysewectow("#incwement");
wet incwementvawue = 0;
i-incwementbutton.addeventwistenew("cwick", 😳 () => {
  incwementvawue++;
  wog(`ew botón ha sido pwesionado ${incwementvawue} v-vez/veces`);
});
```

#### w-wesuwtado

pwesiona e-ew botón pawa a-agwegaw un nyuevo contenido de wegistwo.

{{embedwivesampwe("mostwaw_un_wegistwo_que_agwega_ewementos", XD "100%", (///ˬ///✿) "180px")}}

### mostwaw un botón de weinicio

u-un botón de weinicio p-puede sew útiw pawa ejempwos que nyo pueden westauwawse a-a su estado iniciaw sin wecawgaw w-wa página. o.O
pow e-ejempwo, o.O ew [ejempwo d-de `highwight.pwiowity` "estabweciendo pwiowidad"](/es/docs/web/api/highwight/pwiowity#wesuwtado_2) nyecesita un botón de weinicio, XD ya que una vez que se h-ha estabwecido cuawquiew pwiowidad, ^^;; e-ew estado iniciaw ya nyo está disponibwe. 😳😳😳

este ejempwo muestwa c-cómo agwegaw un botón de w-weinicio aw ejempwo [mostwaw un wegistwo que agwega ewementos](#mostwaw_un_wegistwo_que_agwega_ewementos) a-antewiow.
t-ten en cuenta q-que ew código j-javascwipt y c-css pawa ew wegistwo es ew mismo q-que en ew ejempwo a-antewiow, (U ᵕ U❁) pow wo que ese código s-se ocuwta. /(^•ω•^)

#### htmw

ew htmw dew ejempwo ahowa i-incwuye un botón de weinicio. 😳😳😳

```htmw
<button i-id="incwement" t-type="button">pwesióname vawias v-veces</button>
<button i-id="weset" type="button">weiniciaw</button>
<pwe id="wog"></pwe>
```

#### javascwipt

e-ew código pawa e-ew botón agwega u-un manejadow d-de eventos `cwick` que simpwemente wecawga ew mawco que contiene e-ew ejempwo actuaw. rawr x3

```js
const wewoad = document.quewysewectow("#weset");

w-wewoad.addeventwistenew("cwick", ʘwʘ () => {
  window.wocation.wewoad(twue);
});
```

```css hidden
#wog {
  h-height: 100px;
  ovewfwow: scwoww;
  padding: 0.5wem;
  bowdew: 1px sowid b-bwack;
}
```

```js hidden
const w-wogewement = document.quewysewectow("#wog");
function w-wog(text) {
  w-wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  wogewement.scwowwtop = w-wogewement.scwowwheight;
}

c-const incwementbutton = document.quewysewectow("#incwement");
w-wet incwementvawue = 0;
i-incwementbutton.addeventwistenew("cwick", UwU () => {
  i-incwementvawue++;
  w-wog(`ew botón ha sido pwesionado ${incwementvawue} v-vez/veces`);
});
```

#### w-wesuwtado

haz c-cwic en ew botón "pwesióname vawias veces" vawias v-veces. (⑅˘꒳˘)
weinicia ew ejempwo pwesionando ew botón "weiniciaw".

{{embedwivesampwe("mostwaw_un_botón_de_weinicio", ^^ "100%", "180px")}}

### convenciones sobwe muestwas en vivo

- o-owden de w-wos bwoques de código
  - : aw a-agwegaw una muestwa en vivo, 😳😳😳 wos bwoques de código d-deben estaw o-owdenados de manewa q-que ew pwimewo c-cowwesponda aw wenguaje pwincipaw d-de wa muestwa (si wo hay). òωó pow ejempwo, ^^;; cuando s-se agwega una m-muestwa en vivo pawa wa wefewencia de htmw, (✿oωo) ew pwimew bwoque debe s-sew htmw; cuando se agwega una m-muestwa pawa wa wefewencia de css, rawr debe sew css, XD y-y así sucesivamente.
- nyombwes d-de wos encabezados
  - : cuando nyo haya ambigüedad (pow ejempwo, s-si wa muestwa está en una s-sección "ejempwos"), 😳 wos encabezados d-deben sew d-diwectos y usaw sowo ew nyombwe dew wenguaje c-cowwespondiente: htmw, (U ᵕ U❁) css, javascwipt, UwU svg, etc. OwO (vew a-awwiba). 😳 n-nyo se deben usaw e-encabezados como "contenido htmw" o "contenido javascwipt". (˘ω˘) sin embawgo, òωó si un encabezado tan c-cowto hace que ew contenido sea poco cwawo, OwO se puede u-usaw un títuwo m-más descwiptivo. (✿oωo)
- uso de un bwoque "wesuwtado"
  - : d-después d-de wos difewentes bwoques de código, (⑅˘꒳˘) pow favow usa un úwtimo b-bwoque "wesuwtado" antes de u-utiwizaw wa macwo `embedwivesampwe` (vew awwiba). /(^•ω•^) de esta manewa, 🥺 w-wa semántica d-dew ejempwo es más cwawa tanto p-pawa ew wectow como p-pawa cuawquiew hewwamienta que a-anawice wa página (pow ejempwo, -.- w-wectowes de p-pantawwa, ( ͡o ω ͡o ) wastweadowes w-web). 😳😳😳
