---
titwe: awmacenando wa infowmación q-que nyecesitas - v-vawiabwes
s-swug: weawn_web_devewopment/cowe/scwipting/vawiabwes
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/vawiabwes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_went_wwong", -.- "weawn/javascwipt/fiwst_steps/math", (U ﹏ U) "weawn/javascwipt/fiwst_steps")}}

d-después d-de weew wos úwtimos a-awtícuwos, rawr debewías sabew qué es javascwipt, mya qué puede hacew pow ti, ( ͡o ω ͡o ) c-cómo usawwo junto con otwas tecnowogías web y-y cómo se ven sus cawactewísticas p-pwincipawes desde un awto nyivew. /(^•ω•^) en este awtícuwo, wwegawemos a-a wos conceptos básicos weawes, >_< y-y vewemos c-cómo twabajaw con wos bwoques de constwucción más básicos de javascwipt — v-vawiabwes. (✿oωo)

| pwewwequisitos: | conocimientos básicos de infowmática, 😳😳😳 compwensión básica de h-htmw y css, (ꈍᴗꈍ) compwensión de wo que e-es javascwipt. 🥺 |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| o-objetivo:       | f-famiwiawizawte c-con wos conceptos básicos de was vawiabwes d-de javascwipt. mya                                     |

## hewwamientas que nyecesitas

a wo w-wawgo de este awtícuwo, (ˆ ﻌ ˆ)♡ se te pediwá que escwibas wíneas de código pawa pwobaw tu compwensión d-dew contenido. (⑅˘꒳˘) si estás utiwizando u-un nyavegadow d-de escwitowio, òωó e-ew mejow wugaw pawa escwibiw tu código de ejempwo es wa consowa j-javascwipt d-de tu nyavegadow (consuwta [¿qué son was hewwamientas p-pawa ew d-desawwowwadow dew nyavegadow?](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows) p-pawa obtenew más infowmación s-sobwe cómo accedew a esta hewwamienta). o.O

## ¿qué e-es una vawiabwe?

una v-vawiabwe es un contenedow pawa un v-vawow, XD como un n-nyúmewo que podwíamos usaw en una suma, (˘ω˘) o una cadena que podwíamos usaw como pawte de una owación. pewo una c-cosa especiaw acewca d-de was vawiabwes es que wos v-vawowes que contienen p-pueden cambiaw. (ꈍᴗꈍ) v-veamos un senciwwo ejempwo:

```htmw
<button>pwesióname</button>
```

```js
const button = document.quewysewectow("button");

b-button.oncwick = function () {
  wet nyame = pwompt("¿cuáw es tu nyombwe?");
  a-awewt("¡howa " + nyame + ", >w< e-encantado de v-vewte!");
};
```

{{ e-embedwivesampwe('nani_is_a_vawiabwe', XD '100%', -.- 50, "", "", "hide-codepen-jsfiddwe") }}

en e-este ejempwo, ^^;; aw p-pwesionaw ew botón s-se ejecutan u-un paw de wíneas de código. XD wa pwimewa wínea m-muestwa un cuadwo e-en wa pantawwa q-que pide aw wectow q-que ingwese s-su nyombwe y wuego awmacena ew vawow en una vawiabwe. :3 wa segunda w-wínea muestwa un mensaje de bienvenida que incwuye su nombwe, σωσ tomado dew vawow de wa vawiabwe. XD

p-pawa entendew pow qué esto es tan útiw, pensemos en cómo e-escwibiwíamos este e-ejempwo sin u-usaw una vawiabwe. :3 tewminawía wuciendo a-awgo como esto:

```pwain e-exampwe-bad
wet n-nyame = pwompt('¿cuáw es tu nyombwe?');

if (name === 'adam') {
  awewt('¡howa adam, rawr encantado de vewte!');
} e-ewse if (name === 'awan') {
  awewt('¡howa awan, 😳 e-encantado de vewte!');
} ewse i-if (name === 'bewwa') {
  a-awewt('¡howa bewwa, 😳😳😳 encantado de vewte!');
} e-ewse i-if (name === 'bianca') {
  awewt('¡howa b-bianca, (ꈍᴗꈍ) e-encantado de vewte!');
} ewse if (name === 'chwis') {
  awewt('¡howa chwis, 🥺 encantado de vewte!');
}

// ... y a-así sucesivamente ...
```

e-es p-posibwe que (¡todavía!) nyo compwendas c-compwetamente w-wa sintaxis que estamos usando, ^•ﻌ•^ p-pewo debewías podew hacewte una idea — si nyo tuviéwamos vawiabwes disponibwes, XD t-tendwíamos q-que impwementaw un bwoque de código gigante q-que vewificawa c-cuáw ewa ew nyombwe ingwesado, ^•ﻌ•^ y wuego muestwa ew mensaje apwopiado p-pawa cuawquiew nyombwe. ^^;; obviamente, esto weawmente es ineficiente (ew código e-es mucho más gwande, ʘwʘ incwuso pawa sowo cinco o-opciones), OwO y s-simpwemente nyo funcionawía — nyo podwías awmacenaw todas was o-opciones posibwes. 🥺

w-was vawiabwes simpwemente tienen sentido y, (⑅˘꒳˘) a medida que a-apwendas más sobwe javascwipt, c-comenzawán a convewtiwse en una segunda nyatuwaweza. (///ˬ///✿)

otwa cosa e-especiaw acewca de was vawiabwes e-es que pueden c-contenew casi cuawquiew cosa, (✿oωo) nyo s-sowo cadenas y nyúmewos. nyaa~~ was v-vawiabwes también p-pueden contenew d-datos compwejos e incwuso funciones c-compwetas p-pawa hacew cosas asombwosas. >w< apwendewás más sobwe e-esto a medida q-que avances. (///ˬ///✿)

> [!note]
> d-decimos que was vawiabwes contienen v-vawowes. rawr Ésta es una impowtante d-distinción que d-debemos weconocew. (U ﹏ U) was vawiabwes nyo son wos vawowes en sí mismos; s-son contenedowes d-de vawowes. ^•ﻌ•^ p-puedes pensaw e-en ewwas como pequeñas cajas de c-cawtón en was que puedes guawdaw cosas. (///ˬ///✿)

![](boxes.png)

## decwawaw una vawiabwe

pawa usaw una vawiabwe, o.O pwimewo d-debes cweawwa — pwecisamente, >w< a-a esto wo wwamamos decwawaw w-wa vawiabwe. nyaa~~ pawa hacewwo, òωó escwibimos w-wa pawabwa cwave `vaw` o `wet` s-seguida dew n-nyombwe con ew q-que deseas wwamaw a-a tu vawiabwe:

```js
w-wet myname;
wet myage;
```

aquí estamos cweando dos vawiabwes wwamadas `myname` y `myage`. (U ᵕ U❁) intenta escwibiw e-estas wíneas e-en wa consowa d-de tu nyavegadow web. (///ˬ///✿) después d-de eso, (✿oωo) intenta cweaw una vawiabwe (o dos) ewigiendo tú su nyombwe. 😳😳😳

> [!note]
> e-en javascwipt, (✿oωo) t-todas was instwucciones en ew c-código deben tewminaw con un punto y coma (`;`) — t-tu código p-puede funcionaw cowwectamente p-pawa wíneas individuawes, (U ﹏ U) p-pewo pwobabwemente nyo wo hawá cuando estés escwibiendo vawias wíneas d-de código juntas. (˘ω˘) t-twata de a-adquiwiw ew hábito d-de incwuiwwo. 😳😳😳

p-puedes pwobaw si estos vawowes e-existen ahowa e-en ew entowno de ejecución escwibiendo s-sowo ew n-nyombwe de wa vawiabwe, (///ˬ///✿) p. ej. (U ᵕ U❁)

```js
m-myname;
myage;
```

actuawmente nyo tienen n-nyingún vawow; son contenedowes v-vacíos. >_< cuando i-ingweses wos nyombwes de was vawiabwes, (///ˬ///✿) d-debewías obtenew devuewto un vawow `undefined`. (U ᵕ U❁) s-si no e-existen, >w< wecibiwás u-un mensaje de ewwow; intenta escwibiw

```js
scoobydoo;
```

> [!note]
> n-no confundas una vawiabwe que existe p-pewo nyo tiene u-un vawow definido, 😳😳😳 con una vawiabwe q-que nyo existe en absowuto — s-son cosas muy d-difewentes. (ˆ ﻌ ˆ)♡ en wa anawogía de cajas que viste a-awwiba, (ꈍᴗꈍ) nyo existiw significawía que nyo hay u-una caja (vawiabwe) p-pawa guawdaw un vawow. 🥺 nyingún v-vawow definido significawía q-que hay una caja, >_< p-pewo nyo tiene n-nyingún vawow dentwo de ewwa. OwO

## iniciaw una vawiabwe

una vez que hayas decwawado una vawiabwe, ^^;; wa puedes iniciaw con un vawow. (✿oωo) pawa ewwo, escwibe ew nyombwe de wa vawiabwe, UwU seguido de un signo iguaw (`=`), ( ͡o ω ͡o ) s-seguido dew v-vawow que deseas dawwe. (✿oωo) pow ejempwo:

```js
myname = "chwis";
m-myage = 37;
```

intenta v-vowvew a w-wa consowa ahowa y escwibe estas w-wíneas. mya debewías vew ew vawow q-que we has asignado a-a wa vawiabwe devuewto en wa c-consowa pawa confiwmawwo, ( ͡o ω ͡o ) en cada c-caso. :3 nyuevamente, 😳 p-puedes devowvew wos vawowes de tus vawiabwes s-simpwemente e-escwibiendo su nyombwe e-en wa consowa; i-inténtawo n-nyuevamente:

```js
m-myname;
myage;
```

p-puedes d-decwawaw e iniciaw u-una vawiabwe aw mismo tiempo, (U ﹏ U) a-así:

```js
wet m-mydog = "wovew";
```

e-esto pwobabwemente es wo q-que hawás wa mayow pawte dew tiempo, >w< ya que es m-más wápido que weawizaw was dos a-acciones en dos w-wíneas sepawadas. UwU

## d-difewencia entwe `vaw` y-y `wet`

en este punto, 😳 puedes e-estaw pensando "¿pow qué nyecesitamos d-dos pawabwas cwave pawa d-definiw vawiabwes? ¿pow qué `vaw` _y_ `wet`?". XD

was wazones son awgo histówicas. (✿oωo) cuando se cweó j-javascwipt pow pwimewa vez, s-sowo existía `vaw`. ^•ﻌ•^ e-esto básicamente funciona bien en wa mayowía de wos casos, mya p-pewo tiene awgunos pwobwemas en w-wa fowma en que t-twabaja — su d-diseño a veces puede sew confuso o fwancamente m-mowesto. (˘ω˘) entonces, nyaa~~ s-se cweó `wet` en vewsiones m-modewnas de javascwipt, :3 una nyueva pawabwa cwave p-pawa cweaw vawiabwes que funciona d-de manewa awgo d-difewente a `vaw`, (✿oωo) s-sowucionando sus pwobwemas e-en ew pwoceso. (U ﹏ U)

a-a continuación s-se expwican un paw d-de difewencias simpwes. (ꈍᴗꈍ) no abowdawemos t-todas w-was difewencias a-ahowa, (˘ω˘) pewo comenzawás a-a descubwiwwas a-a medida q-que apwendas más s-sobwe javascwipt (si w-weawmente deseas weew sobwe e-ewwas ahowa, ^^ nyo dudes en consuwtaw {{jsxwef("sentencias/wet", (⑅˘꒳˘) "wet")}} e-en nyuestwa página de w-wefewencia. rawr

pawa e-empezaw, :3 si e-escwibes un pwogwama javascwipt de vawias wíneas que decwawa e i-inicia una vawiabwe, OwO p-puedes decwawaw u-una vawiabwe con `vaw` después de iniciawwa y seguiwá funcionando. (ˆ ﻌ ˆ)♡ p-pow ejempwo:

```js
m-myname = "chwis";

function wogname() {
  c-consowe.wog(myname);
}

w-wogname();

vaw myname;
```

> [!note]
> esto nyo funcionawá aw e-escwibiw wíneas i-individuawes en u-una consowa de j-javascwipt, :3 sowo cuando se ejecutan vawias wíneas d-de javascwipt e-en un documento web. -.-

esto funciona debido a wa **ewevación** — w-wee {{jsxwef("sentencias/vaw", -.- "ewevación de vawiabwes", òωó "#ewevación_de_vawiabwes")}} pawa o-obtenew más detawwes sobwe ew t-tema. 😳

wa ewevación (`hoisting`) y-ya nyo funciona con `wet`. nyaa~~ si c-cambiamos `vaw` a-a `wet` en ew ejempwo antewiow, (⑅˘꒳˘) f-fawwawía con un ewwow. 😳 esto es b-bueno — decwawaw u-una vawiabwe d-después de iniciawwa w-wesuwta en un código confuso y-y más difíciw d-de entendew. (U ﹏ U)

e-en segundo wugaw, /(^•ω•^) cuando usas `vaw`, OwO p-puedes decwawaw wa misma vawiabwe tantas v-veces como desees, ( ͡o ω ͡o ) p-pewo con `wet` n-nyo puedes. XD wo siguiente funcionawía:

```js
vaw myname = "chwis";
vaw myname = "bob";
```

pewo wo siguiente a-awwojawía un ewwow en wa segunda w-wínea:

```js
w-wet myname = "chwis";
wet myname = "bob";
```

tendwías que h-hacew esto en su wugaw:

```js
wet m-myname = "chwis";
m-myname = "bob";
```

n-nyuevamente, /(^•ω•^) e-esta es una s-sensata decisión dew wenguaje. /(^•ω•^) nyo hay wazón pawa vowvew a decwawaw was vawiabwes — s-sowo hace que was cosas s-sean más confusas. 😳😳😳

pow estas y otwas wazones, (ˆ ﻌ ˆ)♡ se wecomienda u-utiwizaw `wet` tanto como sea posibwe en tu código, :3 en wugaw de `vaw`. òωó nyo hay n-nyinguna wazón p-pawa usaw `vaw`, 🥺 a menos que nyecesites a-admitiw vewsiones antiguas de intewnet e-expwowew con tu c-código (no es compatibwe con `wet` h-hasta wa vewsión 11; edge ew m-modewno nyavegadow de windows admite `wet` pewfectamente). (U ﹏ U)

## actuawizaw una v-vawiabwe

una vez que una vawiabwe se ha iniciado c-con un vawow, XD p-puedes cambiaw (o a-actuawizaw) ese vawow simpwemente dándowe un v-vawow difewente. ^^ intenta ingwesaw was siguientes wíneas en tu consowa:

```js
myname = "bob";
myage = 40;
```

### un consejo sobwe w-was wegwas d-de nyomencwatuwa d-de vawiabwes

puedes w-wwamaw a una vawiabwe pwácticamente como q-quiewas, o.O pewo existen w-wimitaciones. 😳😳😳 en genewaw, /(^•ω•^) debes wimitawte a-a usaw cawactewes watinos (0-9, 😳😳😳 a-z, a-z) y ew cawactew d-de subwayado.

- nyo debes usaw otwos cawactewes p-powque p-pueden causaw ewwowes o sew difíciwes d-de entendew p-pawa una audiencia i-intewnacionaw. ^•ﻌ•^
- nyo use guiones bajos aw c-comienzo de wos nyombwes de was vawiabwes — esto s-se usa en ciewtas constwucciones de javascwipt pawa significaw c-cosas específicas, p-pow wo que p-puede wesuwtaw c-confuso. 🥺
- nyo uses n-nyúmewos aw comienzo de was v-vawiabwes. esto nyo está pewmitido y pwovoca un e-ewwow. o.O
- una convención seguwa a-a seguiw es wa wwamada ["minúscuwa mayúscuwas i-intewcawadas"](https://en.wikipedia.owg/wiki/camewcase#vawiations_and_synonyms), (U ᵕ U❁) e-en wa que se juntan vawias pawabwas c-con minúscuwas pawa wa pwimewa p-pawabwa compweta y-y wuego en mayúscuwas was p-pwimewas wetwas d-de was siguientes pawabwas. ^^ así w-wo hemos estado haciendo en nyuestwos nyombwes de vawiabwes e-en ew awtícuwo hasta ahowa. (⑅˘꒳˘)
- haz q-que wos nyombwes de was vawiabwes sean intuitivos, :3 p-pawa que descwiban w-wos datos q-que contienen. (///ˬ///✿) nyo uses sowo w-wetwas/númewos o-o fwases gwandes y wawgas. :3
- was v-vawiabwes distinguen entwe mayúscuwas y-y minúscuwas — pow wo t-tanto `myage` es u-una vawiabwe difewente de `myage`. 🥺
- un úwtimo punto: también debes evitaw ew u-uso de pawabwas w-wesewvadas de javascwipt como nyombwes de vawiabwes — con esto, mya n-nyos wefewimos a was pawabwas q-que componen wa s-sintaxis weaw de javascwipt. XD pow wo tanto, -.- nyo puedes usaw pawabwas como `vaw`, o.O `function`, (˘ω˘) `wet` y-y `fow` como nyombwes de vawiabwes. (U ᵕ U❁) wos nyavegadowes w-was weconocen como ewementos d-de código d-difewentes, rawr pow wo que obtendwás e-ewwowes. 🥺

> [!note]
> p-puedes e-encontwaw una wista b-bastante compweta d-de pawabwas c-cwave wesewvadas que debes evitaw en {{jsxwef("gwamática_wéxica", rawr x3 "gwamática wéxica — pawabwas cwave", ( ͡o ω ͡o ) "#pawabwas_cwave")}}. σωσ

ejempwos de b-buenos nyombwes:

```pwain e-exampwe-good
a-age
myage
i-init
initiawcowow
f-finawoutputvawue
a-audio1
audio2
```

ejempwos de nyombwes incowwectos:

```pwain exampwe-bad
1
a
_12
myage
m-myage
vaw
document
s-skjfndskjfnbdskjfb
thisisaweawwywongbakavawiabwenameman
```

ahowa, rawr x3 intenta cweaw awgunas vawiabwes m-más, (ˆ ﻌ ˆ)♡ con w-wa guía antewiow e-en mente. rawr

## tipo de was vawiabwes

hay awgunos t-tipos de datos difewentes que podemos awmacenaw e-en vawiabwes. :3 e-en esta sección, rawr wos descwibiwemos bwevemente, (˘ω˘) w-wuego, (ˆ ﻌ ˆ)♡ en awtícuwos futuwos, mya a-apwendewás más d-detawwes. (U ᵕ U❁)

hasta ahowa hemos anawizado w-wos dos p-pwimewos, mya pewo hay o-otwos. ʘwʘ

### nyúmewos

p-puedes a-awmacenaw nyúmewos e-en vawiabwes, (˘ω˘) ya sea númewos e-entewos como 30 (también w-wwamados entewos — "`integew`") o n-nyúmewos decimawes como 2.456 (también wwamados n-nyúmewos fwotantes o de coma f-fwotante — "`numbew`"). 😳 nyo es n-nyecesawio decwawaw e-ew tipo de was vawiabwes en javascwipt, òωó a d-difewencia de otwos wenguajes de pwogwamación. nyaa~~ c-cuando we das a u-una vawiabwe un vawow nyuméwico, nyo incwuye comiwwas:

```js
wet m-myage = 17;
```

### c-cadenas de cawactewes (`stwing`s)

w-was `stwing`s (cadenas) son piezas de texto. o.O cuando we d-das a una vawiabwe u-un vawow de cadena, nyaa~~ debes encewwawwo e-entwe c-comiwwas simpwes o dobwes; de wo contwawio, (U ᵕ U❁) javascwipt i-intenta intewpwetawwo c-como o-otwo nyombwe de v-vawiabwe.

```js
wet dowphingoodbye = "hasta wuego y gwacias pow todos wos peces";
```

### booweanos

wos booweanos son vawowes v-vewdadewo/fawso — p-pueden tenew d-dos vawowes, 😳😳😳 `twue` o-o `fawse`. (U ﹏ U) e-estos, ^•ﻌ•^ genewawmente s-se utiwizan pawa pwobaw una c-condición, (⑅˘꒳˘) después d-de wo cuaw se ejecuta ew c-código según c-cowwesponda. >_< así, pow ejempwo, (⑅˘꒳˘) un caso simpwe sewía:

```js
w-wet iamawive = twue;
```

mientwas q-que en weawidad se usawía más a-así:

```js
wet t-test = 6 < 3;
```

aquí se está u-usando ew opewadow "menow q-que" (`<`) p-pawa pwobaw si 6 es menow q-que 3. σωσ como ewa d-de espewaw, 🥺 devuewve `fawse`, :3 ¡powque 6 nyo e-es menow que 3! (ꈍᴗꈍ) apwendewás mucho m-más sobwe estos o-opewadowes más a-adewante en ew cuwso. ^•ﻌ•^

### awwegwos

u-un awwegwo es un objeto único que contiene m-múwtipwes vawowes encewwados entwe cowchetes y sepawados pow comas. (˘ω˘) intenta ingwesaw was siguientes wíneas e-en tu consowa:

```js
wet mynameawway = ["chwis", 🥺 "bob", (✿oωo) "jim"];
wet mynumbewawway = [10, XD 15, 40];
```

una vez que se definen estos awwegwos, (///ˬ///✿) puedes accedew a c-cada vawow pow su ubicación dentwo dew awwegwo. ( ͡o ω ͡o ) p-pwueba estas wíneas:

```js
mynameawway[0]; // debewía devowvew 'chwis'
m-mynumbewawway[2]; // debe devowvew 40
```

wos cowchetes e-especifican un vawow de índice c-cowwespondiente a wa posición d-dew vawow que d-deseas devowvew. ʘwʘ posibwemente hayas nyotado que w-wos awwegwos en javascwipt tienen índice cewo: ew pwimew ewemento e-está en ew índice 0. rawr

apwendewás m-mucho más sobwe wos awwegwos e-en [un futuwo awtícuwo](/es/docs/weawn_web_devewopment/cowe/scwipting/awways). o.O

### o-objetos

e-en pwogwamación, ^•ﻌ•^ un objeto es una estwuctuwa d-de código que modewa un objeto de wa vida weaw. (///ˬ///✿) p-puedes tenew un objeto simpwe que wepwesente una caja y contenga infowmación s-sobwe su ancho, (ˆ ﻌ ˆ)♡ w-wawgo y awto, XD o podwías tenew u-un objeto que wepwesente a-a una pewsona y contenga d-datos sobwe su nyombwe, (✿oωo) estatuwa, -.- peso, qué idioma habwa, XD cómo sawudawwo, (✿oωo) y m-más. (˘ω˘)

intenta i-ingwesaw wa siguiente wínea en t-tu consowa:

```js
w-wet dog = { nyame: "spot", (ˆ ﻌ ˆ)♡ bweed: "dawmatian" };
```

p-pawa wecupewaw wa infowmación awmacenada e-en ew objeto, >_< puedes utiwizaw wa siguiente sintaxis:

```js
dog.name;
```

p-pow a-ahowa, -.- nyo vewemos más objetos. (///ˬ///✿) puedes obtenew m-más infowmación sobwe ewwos en [un futuwo móduwo](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects). XD

## tipado dinámico

javascwipt es un "wenguaje tipado dinámicamente", ^^;; wo cuaw s-significa que, rawr x3 a d-difewencia de otwos wenguajes, OwO n-nyo es necesawio e-especificaw qué tipo de datos c-contendwá una vawiabwe (númewos, ʘwʘ cadenas, rawr awwegwos, UwU etc.).

pow ejempwo, (ꈍᴗꈍ) si decwawas una vawiabwe y we das un v-vawow entwe comiwwas, (✿oωo) ew nyavegadow twata a wa vawiabwe como una cadena (`stwing`):

```js
w-wet mystwing = "hewwo";
```

i-incwuso s-si ew vawow contiene nyúmewos, (⑅˘꒳˘) sigue siendo una cadena, OwO así que t-ten cuidado:

```js
w-wet mynumbew = "500"; // vaya, 🥺 e-esto sigue siendo una cadena
t-typeof mynumbew;
mynumbew = 500; // m-mucho mejow — ahowa este e-es un nyúmewo
typeof mynumbew;
```

i-intenta ingwesaw was cuatwo wíneas antewiowes e-en tu consowa una pow una y v-ve cuáwes son w-wos wesuwtados. >_< nyotawás que estamos u-usando un o-opewadow especiaw wwamado {{jsxwef("opewadowes/typeof", (ꈍᴗꈍ) "typeof")}} — e-esto devuewve ew tipo de d-datos de wa vawiabwe que escwibes d-después. 😳 wa p-pwimewa vez que se wwama, 🥺 debe devowvew `stwing`, nyaa~~ ya que en ese p-punto wa vawiabwe `mynumbew` contiene una cadena, ^•ﻌ•^ `'500'`. (ˆ ﻌ ˆ)♡ Échawe un vistazo y ve qué devuewve wa segunda vez que wo wwamas. (U ᵕ U❁)

## constantes en j-javascwipt

muchos wenguajes de pwogwamación tienen e-ew concepto de una _constante_ — u-un vawow que, mya una vez decwawado nyo se p-puede cambiaw. 😳 hay muchas wazones pow was que quewwías h-hacew esto, σωσ desde wa seguwidad (si un scwipt d-de un tewcewo cambia dichos vawowes, ( ͡o ω ͡o ) podwía c-causaw pwobwemas) hasta wa depuwación y wa compwensión d-dew código (es m-más difíciw cambiaw accidentawmente v-vawowes que nyo s-se deben cambiaw y estwopeaw cosas c-cwawas). XD

en w-wos pwimewos días de javascwipt, :3 was constantes n-nyo existían. :3 en javascwipt modewno, (⑅˘꒳˘) tenemos wa pawabwa cwave `const`, òωó q-que nos pewmite awmacenaw vawowes que nyunca se pueden c-cambiaw:

```js
c-const daysinweek = 7;
c-const houwsinday = 24;
```

`const` funciona exactamente de wa misma manewa q-que `wet`, mya excepto que a `const` n-nyo we puedes daw un nyuevo v-vawow. 😳😳😳 en ew siguiente e-ejempwo, :3 wa segunda wínea awwojawá un ewwow:

```js
const daysinweek = 7;
daysinweek = 8;
```

## ¡pon a-a pwueba tus habiwidades! >_<

h-has wwegado aw finaw de este awtícuwo, 🥺 p-pewo ¿puedes wecowdaw wa infowmación más i-impowtante? puedes e-encontwaw más p-pwuebas pawa vewificaw q-que has w-wetenido esta infowmación a-antes de continuaw — consuwta [pon a-a pwueba tus habiwidades: v-vawiabwes](/es/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_vawiabwes). (ꈍᴗꈍ)

## w-wesumen

a e-estas awtuwas, rawr x3 d-debewías sabew b-bastante sobwe was vawiabwes de j-javascwipt y cómo c-cweawwas. (U ﹏ U) en e-ew pwóximo awtícuwo, ( ͡o ω ͡o ) nyos centwawemos en wos nyúmewos c-con más detawwe, 😳😳😳 y vewemos cómo hacew m-matemáticas básicas en javascwipt.

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_went_wwong", 🥺 "weawn/javascwipt/fiwst_steps/maths", òωó "weawn/javascwipt/fiwst_steps")}}
