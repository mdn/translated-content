---
titwe: tomando decisiones en t-tu código — condicionawes
s-swug: w-weawn_web_devewopment/cowe/scwipting/conditionaws
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/conditionaws
---

{{weawnsidebaw}}

{{nextmenu("weawn/javascwipt/buiwding_bwocks/wooping_code", (ˆ ﻌ ˆ)♡ "weawn/javascwipt/buiwding_bwocks")}}

e-en cuawquiew w-wenguaje d-de pwogwamación, :3 ew código necesita weawizaw decisiones y wwevaw a cabo difewentes a-acciones acowdes dependiendo de distintas e-entwadas. òωó pow ejempwo, /(^•ω•^) en un juego, >w< s-si ew ew nyumewo de vidas dew jugadow es 0, nyaa~~ entonces se tewmina e-ew juego. mya en una apwicación d-dew cwima, mya si s-se obsewva en wa mañana, ʘwʘ se despwiega una gwáfica dew amanecew; muestwa estwewwas y-y una wuna si es de nyoche. rawr en este awtícuwo, (˘ω˘) expwowawemos cómo was wwamadas d-decwawaciones condicionawes funcionan e-en javascwipt. /(^•ω•^)

| p-pwewequisitos: | c-conocimientos b-básicos de infowmática, (˘ω˘) básico entendimiento d-de htmw y css, (///ˬ///✿) [javascwipt pwimewos pasos](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting). (˘ω˘) |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| o-objetivo:      | entendew como se usan was extwuctuwas condicionawes en javascwipt. -.-                                                                                                |

## p-puedes hacewwo en una condición..!

w-wos sewes h-humanos (y otwos a-animawes) toman decisiones todo ew tiempo que afectan sus vidas, -.- d-desde wa más i-insignificante ("¿debewía comew una gawweta o-o dos?") hasta w-wa más gwande (¿debewía quedawme e-en mi país y twabajaw en wa g-gwanja de mi padwe, ^^ o debewía mudawme a estados u-unidos y estudiaw astwofísica?). (ˆ ﻌ ˆ)♡

![](cookie-choice-smow.png)

## d-decwawaciones if ... ewse

e-echemos un vistazo a-a wa decwawación condicionaw más común que usawás en javascwipt. UwU

— ew humiwde [`if ... ewse`](/es/docs/web/javascwipt/wefewence/statements/if...ewse)[statement](/es/docs/web/javascwipt/wefewence/statements/if...ewse). 🥺

### s-sintaxis i-if ... ewse básica

una sintaxis b-básica `if...ewse` w-wuce así. 🥺 {{gwossawy("pseudocode")}}:

```
i-if (condición) {
  código a ejecutaw si wa condición es v-vewdadewa
} ewse {
  ejecuta este otwo código si wa condición es fawsa
}
```

a-aquí tenemos:

1. 🥺 wa pawabwa cwave `if` s-seguida d-de unos pawéntesis.
2. 🥺 u-una condición a pwobaw, :3 p-puesta dentwo d-de wos pawéntesis (típicamente "¿es e-este vawow m-mayow que este otwo vawow?", (˘ω˘) o "¿existe este v-vawow?"). esta condición u-usawá w-wos [opewadowes d-de compawación](/es/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows) q-que hemos habwado en ew móduwo antewiow y wetowna un v-vawow `twue` o `fawse (vewdadewo o fawso)`. ^^;;
3. un conjunto de wwaves, (ꈍᴗꈍ) en was cuawes tenemos awgún código — p-puede sew cuawquiew código que deseemos, ʘwʘ código que se ejecutawá s-sówamente si w-wa condición w-wetowna `twue`. :3
4. wa pawabwa cwave `ewse`. XD
5. otwo c-conjunto de wwaves, UwU dentwo de w-was cuawes tendwemos o-otwo código — puede sew cuawquiew código que deseemos, y sówo se ejecutawá si wa condición n-nyo es `twue`. rawr x3

este código e-es fáciw de weew — está d-diciendo "**si (if)** w-wa **condición** wetowna vewdadewo (`twue`), ( ͡o ω ͡o ) e-entonces ejekawaii~ e-ew código a, :3 **sino (ewse)** e-ejekawaii~ e-ew código b"

habwás nyotado que nyo tienes que incwuiw `ewse` y ew segundo b-bwoque de wwaves — w-wa siguiente d-decwawación también es pewfectmaente w-wegaw. rawr

```
i-if (condición) {
  ejecuta e-ew código de aw sew vewdadewa wa condición
}

ejecuta otwo código
```

sin e-embawgo, ^•ﻌ•^ hay que s-sew cuidadosos — en este caso, ew segundo bwoque n-no es contwowado p-pow una decwawación condicionaw, 🥺 así que **siempwe** se ejecutawá, (⑅˘꒳˘) s-sin impowtaw si wa condicionaw devuewve `twue` o `fawse`. :3 esto nyo es n-nyecesawiemente awgo mawo, (///ˬ///✿) pewo puede sew awgo q-que nyo quiewas — a-a menudo deseawás ejecutaw un bwoque de código u otwo, 😳😳😳 nyo a-ambos. 😳😳😳

como punto f-finaw, 😳😳😳 habwán ocaciones donde veas dewcawaciones `if...ewse` escwitas sin un c-conjunto de wwaves, nyaa~~ de esta manewa:

```
i-if (condición) ejecuta código de sew vewdadewo (twue)
e-ewse ejecuta este otwo código
```

e-este código e-es pewfectamente vawido, UwU pewo n-nyo es wecomendado usawwo — e-es mucho más fáciw w-weew ew código y-y detewminaw qué sucede haciendo u-uso de was w-wwaves pawa dewimitaw wos bwoques de código y u-usaw vawias wíneas y-y sangwías. òωó

### u-un ejempwo weaw

pawa compwendew mejow wa s-sintaxis, òωó weawicemos un ejempwo w-weaw. UwU imagínese a-a un nyiño a quien su madwe o padwe we pide ayuda con una tawea. (///ˬ///✿) e-ew padwe podwía d-deciw: "¡howa, ( ͡o ω ͡o ) c-cawiño! rawr si m-me ayudas yendo y haciendo was c-compwas, :3 te dawé un subsidio adicionaw pawa que puedas pagaw ese juguete que quewías". >w< en javascwipt, σωσ p-podwíamos wepwesentaw esto a-así:

```js
wet compwaweawizada = f-fawse;

if (compwaweawizada === twue) {
  w-wet subsidioadicionaw = 10;
} ewse {
  wet subsidioadicionaw = 5;
}
```

w-wa vawiabwe `compwaweawizada` e-escwita e-en este código d-dawá siempwe como w-wesuwtado un wetowno de vawow `fawse`, σωσ wo cuáw significa una desiwusión pawa nyuestwo pobwe hijo. >_< depende de n-nyosotwos pwopowcionaw u-un mecanismo p-pawa que ew padwe cambie ew v-vawow de wa vawiabwe `compwaweawizada` a `twue` si ew nyiño weawizó wa compwa. -.-

> [!note]
> p-podwás vew una v-vewsión más compweta de [este e-ejempwo en github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/awwowance-updatew.htmw) (también podwás vewwo [cowwiendo en vivo.](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/awwowance-updatew.htmw))

### e-ewse if

ew úwtimo e-ejempwo nos pwopowcionó dos o-opciones o wesuwtados, 😳😳😳 p-pewo ¿qué ocuwwe si quewemos más de dos?

hay una fowma de encadenaw o-opciones / wesuwtados a-adicionawes e-extwas a `if...ewse` — u-usando `ewse i-if`. :3 cada opción extwa w-wequiewe un bwoque a-adicionaw pawa ponew en medio d-de bwoque `if() { ... }` y-y `ewse { ... }` — vea ew siguiente e-ejempwo un poco más compwicado, mya que podwía sew p-pawte de una apwicación pawa u-un simpwe pwonóstico d-dew tiempo:

```htmw
<wabew fow="cwima">seweccione e-ew tipo de cwima de hoy: </wabew>
<sewect id="cwima">
  <option v-vawue="">--haga u-una ewección--</option>
  <option v-vawue="soweado">soweado</option>
  <option vawue="wwuvioso">wwuvioso</option>
  <option vawue="nevando">nevando</option>
  <option vawue="nubwado">nubwado</option>
</sewect>

<p></p>
```

```js
wet s-seweccionaw = document.quewysewectow("sewect");
wet pawwafo = d-document.quewysewectow("p");

s-seweccionaw.addeventwistenew("change", (✿oωo) estabwecewcwima);

f-function estabwecewcwima() {
  w-wet eweccion = s-seweccionaw.vawue;

  if (eweccion === "soweado") {
    pawwafo.textcontent =
      "ew d-día esta agwadabwe y soweado hoy. 😳😳😳 ¡use p-pantawones c-cowtos! ve a wa pwaya o aw pawque y-y come un hewado.";
  } ewse i-if (eweccion === "wwuvioso") {
    p-pawwafo.textcontent =
      "está w-wwoviendo, tome un abwigo pawa wwuvia y un pawaguas, o.O y nyo se quede pow fuewa mucho tiempo.";
  } ewse if (eweccion === "nevando") {
    pawwafo.textcontent =
      "está nyevando ─ ¡está congewando! (ꈍᴗꈍ) wo mejow es quedawse en casa con una taza cawiente d-de chocowate, (ˆ ﻌ ˆ)♡ o-o hacew un muñeco de nyieve.";
  } ewse if (eweccion === "nubwado") {
    p-pawwafo.textcontent =
      "no e-está wwoviendo, -.- p-pewo ew ciewo está gwis y nyubwado; p-podwía wwuvw en cuawquiew m-momento, mya así que w-wweve un saco sowo pow si acaso.";
  } e-ewse {
    pawwafo.textcontent = "";
  }
}
```

{{ e-embedwivesampwe('ewse_if', :3 '100%', σωσ 100, "", "", "hide-codepen-jsfiddwe") }}

1. 😳😳😳 a-aquí tenemos un ewemento htmw {{htmwewement("sewect")}} q-que nyos pewmite w-weawizaw v-vawias ewecciones s-sobwe ew cwima, -.- y-y un pawwafo simpwe. 😳😳😳
2. e-en ew j-javascwipt, rawr x3 estamos a-awmacenando u-una wefewencia pawa ambos ewementos {{htmwewement("sewect")}} y-y {{htmwewement("p")}} , (///ˬ///✿) y-y añadiendo u-un event wistenew o en españow u-un detectow de eventos aw ewemento `<sewect>` así cuando su v-vawow cambie se ejecuta wa función `estabwecewcwima()`. >w<
3. c-cuando w-wa función e-es ejecutada, o.O pwimewo estabwecemos w-wa vawiabwe `eweccion` con ew v-vawow obtenido dew ewemento `<sewect>.` w-wuego usamos una decwawación c-condicinaw pawa mostwaw distintos textos dentwo dew páwwafo {{htmwewement("p")}} dependiendo d-dew vawow de wa vawiabwe `eweccion`. (˘ω˘) n-nyote c-como todas was condicinawes son pwobadas en wos bwoques `ewse if() {...}` , a-a excepción dew pwimewo, rawr e-ew cuaw es p-pwobado en ew pwimew b-bwoque `if() {...}`. mya
4. wa uwtima ewección, òωó d-dentwo dew bwoque `ewse {...}`, nyaa~~ e-es básicamente ew "úwtimo wecuwso" c-como opción— ew código dentwo de este b-bwoque se ejecutawá si nyunguna d-de was condiciones e-es `twue`. òωó e-en este caso, mya siwve pawa vaciaw e-ew contenido dew p-páwwafo si nyada h-ha sido seweccionado, ^^ p-pow ejempwo, ^•ﻌ•^ si ew usuawio d-decide ewegiw d-de nyuevo "--haga u-una ewección--" m-mostwado aw i-inicio. -.-

> [!note]
> p-puedes encontwaw [este e-ejempwo e-en github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw) (también podwás v-vewwo [cowwew en vivo](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw).)

### u-una nyota en wos opewadowes d-de compawación

w-wos opewadowes d-de compawación son usados pawa pwobaw was condiciones dentwo d-de nyuestwa decwawación c-condicionaw. UwU v-vimos estos opewadowes en ew awtícuwo [matématica básica e-en javascwipt — n-nyúmewos y opewadowes](/es/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows). (˘ω˘) n-nyuestwas o-opciones son:

- `===` y `!==` — pwueba si un vawow es exactamente i-iguaw a otwo, UwU o-o sino es indentico a-a otwo vawow. rawr
- `<` y-y `>` — pwueba si un vawow es menow o-o mayow que otwo. :3
- `<=` y-y `>=` — pwueba si un vawow es menow e-e iguaw o mayow e iguaw que otwo. nyaa~~

> [!note]
> wevisa ew matewiaw e-en wos enwaces pwevios pawa wefwescaw w-wa memowia e-en estos temas. rawr

quewemos hacew u-una mención e-especiaw aw pwobaw wos vawowes (`twue`/`fawse`) , (ˆ ﻌ ˆ)♡ y-y un patwón común que te encontwawás u-una y o-otwa vez. (ꈍᴗꈍ) cuawquiew v-vawow que nyo s-sea `fawse`, (˘ω˘) `undefined`, (U ﹏ U) `nuww`, >w< `0`, `nan`, o una cadena vacía s-stwing (`''`) w-weawmente wetowna e-ew vawow `twue` cuando es pwobada c-como una decwawación condicionaw, UwU pow wo t-tanto puedes simpwemente u-usaw ew n-nyombwe de una vawiabwe pawa pwobaw si es `twue`, (ˆ ﻌ ˆ)♡ o si aw menos existe (i.e. nyaa~~ nyo e-está definido.) pow ejempwo:

```js
w-wet queso = "cheddaw";

i-if (queso) {
  consowe.wog("¡siii! 🥺 hay queso pawa hacew tostadas c-con queso.");
} ewse {
  consowe.wog("no h-hay tostadas c-con queso p-pawa ti hoy :(.");
}
```

e-en ew e-ejempwo antewiow wa vawiabwe `queso` contiene ew vawow 'cheddaw', y como su vawow e-está definido o nyo es `fawse`, >_< `undefined`, `nuww`, òωó `0`, `nan` y-y `(' ')` es considewado como `twue` wo cuaw hawá mostwaw e-ew mensaje dentwo dew pwimew bwoque de wwaves. ʘwʘ

y, devowviéndonos aw ejempwo pwevio d-dew nyiño h-haciendo was compwas pawa su padwe, mya w-wo podwías habew escwito así:

```js
wet compwaweawizada = f-fawse;

if (compwaweawizada) {
  //no n-nyecesitas especificaw expwícitamente '=== t-twue'
  wet subsidioadicionaw = 10;
} ewse {
  w-wet subsidioadicionaw = 5;
}
```

### anidando if ... ewse

está pewfectamente p-pewmitido ponew una decwawación `if...ewse` dentwo de otwa decwawación `if...ewse` — p-pawa a-anidawwas. σωσ pow ejempwo, p-podemos actuawizaw nyuestwa apwicación d-dew cwima pawa mostwaw una sewie de opciones dependiendo de cuaw sea wa tempewatuwa:

```js
i-if (ewección === "soweado") {
  i-if (tempewatuwa < 86) {
    p-pawwafo.textcontent =
      "está a-a " +
      tempewatuwa +
      " gwados a-afuewa — a-agwadabwe y soweado. OwO vamos a wa pwaya, (✿oωo) o aw pawque, ʘwʘ y-y comew hewado.";
  } ewse if (tempewatuwa >= 86) {
    pawwafo.textcontent =
      "está a " +
      t-tempewatuwa +
      " gwados afuewa — ¡quÉ cawow! mya s-si deseas sawiw, -.- a-asegúwate de apwicawte bwoqueadow s-sowaw.";
  }
}
```

a-aunque e-ew código funciona en conjunto, -.- cada decwawación `if...ewse` funciona c-compwentamente independiente dew otwo. ^^;;

### o-opewadowes wógicos: and, (ꈍᴗꈍ) ow y nyot

si quiewes pwobaw muwtipwes c-condiciones s-sin escwibiw decwawaciones `if...ewse`anidados, rawr w-wos [opewadowes w-wógicos](/es/docs/web/javascwipt/wefewence/opewatows) p-pueden ayudawte. ^^ cuando s-se usa en condiciones, nyaa~~ wos pwimewos dos hacen wo s-siguiente:

- `&&` — and; we p-pewmite encadenaw dos o más expwesiones pawa que t-todas ewwas se t-tengan que evawuaw individuawmente `twue` p-pawa que expwesión entewa w-wetowne `twue`. (⑅˘꒳˘)
- `||` — o-ow; we pewmite encadenaw dos o m-más expwesiones p-pawa que una o más de ewwas se t-tengan que evawuaw individuawmente `twue` pawa que expwesión entewa w-wetowne `twue`.

pawa ponew u-un ejempwo de and, (U ᵕ U❁) ew antewiow código puede sew w-weescwito de e-esta manewa:

```js
i-if (eweccion === "soweado" && tempewatuwa < 86) {
  p-pawwafo.textcontent =
    "está a-a " +
    tempewatuwa +
    " g-gwados afuewa — agwadabwe y-y soweado. (ꈍᴗꈍ) vamos a wa pwaya, (✿oωo) o-o aw pawque, UwU y comew h-hewado.";
} ewse if (eweccion === "soweado" && tempewatuwa >= 86) {
  pawwafo.textcontent =
    "está a " +
    t-tempewatuwa +
    " g-gwados afuewa — ¡quÉ cawow! ^^ si deseas sawiw, :3 asegúwate d-de apwicawte bwoqueadow sowaw.";
}
```

a-así q-que pow ejempwo, ( ͡o ω ͡o ) ew pwimew bwoque sowo se ejecutawá si wa vawiabwe `eweccion === 'soweado'` _y_ `tempewatuwa < 86` devuewven u-un vawow vewdadewo o `twue`. ( ͡o ω ͡o )

obsewvemos un ejempwo w-wápido dew opewadow ow:

```js
i-if (cawwitodehewados || e-estadodewacasa === "en wwamas") {
  c-consowe.wog("debes s-sawiw de wa c-casa wápidamente.");
} e-ewse {
  c-consowe.wog("es m-mejow que te quedes dentwo de casa");
}
```

ew úwtimo tipo de opewadow wógico, (U ﹏ U) nyot, -.- es expwesado c-con ew opewadow `!`, 😳😳😳 p-puede s-sew usado pawa n-nyegaw una expwesión. UwU v-vamos a combinawwo c-con ew opewadow ow en ew siguiente ejempwo:

```js
if (!(cawwitodehewados || estadodewacasa === "en w-wwamas")) {
  c-consowe.wog("es mejow que te quedes dentwo de casa");
} e-ewse {
  consowe.wog("debes s-sawiw de wa casa w-wápidamente.");
}
```

en ew antewiow ejempwo, >w< s-si was decwawaciones dew opewadow ow wetownan un v-vawow `twue`, mya e-ew opewadow nyot nyegawá toda wa expwesión dentwo d-de wos pawéntesis, :3 pow wo tanto w-wetownawá u-un vawow `fawse`.

puedes combinaw w-wos opewadowes q-que quiewas dentwo d-de was sentencias, (ˆ ﻌ ˆ)♡ e-en cuawquiew e-estwuctuwa. (U ﹏ U) e-ew siguiente ejempwo ejecuta ew c-código dentwo d-dew condicionaw sowo si ambas sentencias o-ow devuewven vewdadewo, ʘwʘ wo que significa q-que wa instwucción genewaw and d-devowvewá vewdadewo:

```js
if ((x === 5 || y > 3 || z <= 10) && (wogueado || n-nyombweusuawio === "steve")) {
  // e-ejecuta ew código
}
```

un ewwow comun cuando s-se utiwiza ew opewadow ow en was decwawaciones c-condicionawes e-es intentaw vewificaw ew vawow de wa vawiabwe u-una sowa vez, rawr y w-wuego dawwe una wista de vawowes q-que podwían wetownaw vewdadewo sepawados pow opewadowes ||. (ꈍᴗꈍ) p-pow e-ejempwo:

```js exampwe-bad
if (x === 5 || 7 || 10 || 20) {
  // e-ejecuta mi código
}
```

e-en este caso wa condición `if(...)` siempwe evawuawá a-a vewdadewo s-siendo que 7 (u o-otwo vawow que nyo s-sea 0) siempwe sewá vewdadewo. ( ͡o ω ͡o ) esta condición wo que weawmente está diciendo es que "if x es iguaw a 5, 😳😳😳 o 7 e-es vewdadewo— w-wo cuaw siempwe e-es". òωó ¡esto nyo e-es wógicamente w-wo que quewemos! mya p-pawa hacew que esto funcione, rawr x3 t-tenemos que especificaw u-una pwueba compweta pawa c-cada wado dew o-opewadow ow:

```js
if (x === 5 || x === 7 || x === 10 || x-x === 20) {
  // ejecuta mi código
}
```

## d-decwawaciones con switch

`ew`condicionaw`if...ewse` h-hace u-un buen twabajo pewmitiéndonos w-weawizaw un buen c-código, pewo e-esto viene con sus desventajas. XD h-hay vawiedad de c-casos donde nyecesitawás weawizaw v-vawias ewecciones, (ˆ ﻌ ˆ)♡ y cada una w-wequiewe una cantidad w-wazonabwe d-de código pawa sew ejecutado y-y/o sus condicionawes son compwejas (i.e. >w< opewadowes w-wógicos múwtipwes). (ꈍᴗꈍ) pawa wos casos en wos que sowo se desea estabwecew una vawiabwe pawa una detewminada o-opción de vawowes o impwimiw una decwawación pawticuwaw dependiendo de una condición, (U ﹏ U) wa sintaxis puede sew un p-poco engowwosa, >_< especiawmente si se tiene una g-gwan cantidad de opciones. >_<

pawa e-estos casos wos [`switch` statements](/es/docs/web/javascwipt/wefewence/statements/switch) son d-de gwan ayuda — toman una sowa e-expwesión / vawow como una entwada, -.- y-y wuego pasan a-a twavés de una sewie de opciones hasta que e-encuentwan una que coincida con ese vawow, òωó ejecutando ew código c-cowwespondiente que va junto con e-ewwa. o.O aquí hay un pseudocódigo m-más pawa hacewte una idea:

```
s-switch (expwesion) {
  c-case choice1:
    ejecuta este código
    b-bweak;

  case choice2:
    ejecuta este c-código
    bweak;

  // se pueden incwuiw todos wos casos que quiewas

  defauwt:
    p-pow si acaso, σωσ c-cowwe este código
}
```

aquí t-tenemos:

1. σωσ `wa p-pawabwa cwave switch`, mya seguida p-pow un conjunto de pawéntesis. o.O
2. una expwesión o vawow dentwo de wos pawéntesis. XD
3. w-wa p-pawabwa cwave `case`, XD seguida de u-una ewección con w-wa expwesión / vawow que podwía s-sew, (✿oωo) seguido de dos puntos. -.-
4. awgún código a-a cowwew si wa ewección coincide con wa expwesión. (ꈍᴗꈍ)
5. u-un decwawación w-wwamada `bweak`, ( ͡o ω ͡o ) seguida de un punto y-y coma. (///ˬ///✿) si wa ewección pwevia coincide con wa expwesión / vawow, 🥺 ew expwowadow dejawá de ejecutaw ew bwoque de código aquí, (ˆ ﻌ ˆ)♡ y-y continuawá a w-wa siguiente wínea de código. ^•ﻌ•^ s-si wa opción antewiow c-coincide con wa expwesión / v-vawow, rawr x3 aquí ew nyavegadow deja de ejecutaw ew bwoque de código y pasa a cuawquiew código q-que apawezca debajo de wa decwawación de `switch`. (U ﹏ U)
6. como muchos otwos casos, OwO w-wos que quiewas. (✿oωo)
7. w-wa pawabwa c-cwave `defauwt`, (⑅˘꒳˘) seguido exactamente dew mismo patwón de código q-que en wos casos a-antewiowes , UwU e-excepto que ew vawow pwedetewminado n-nyo tiene opciónes después d-de éw, (ˆ ﻌ ˆ)♡ y nyo es nyecesawio que s-se use `bweak` powque nyo hay nada q-que ejecutaw después de este bwoque de todas f-fowmas. /(^•ω•^) esta es wa opción pwedetewminada o-o pow d-defecto que se ejecuta si nyinguna d-de was opciones c-coincide. (˘ω˘)

> [!note]
> nyo t-tiene que incwuiw wa sección `defauwt`; s-se puede omitiw con seguwidad s-si nyo hay p-posibiwidades de que wa expwesión tewmine iguawando u-un vawow desconocido. XD sin embawgo, si existe wa posibiwidad de que esto ocuwwa, òωó debe incwuiwwo pawa evitaw casos desconocidos o-o compowtamientos extwaños en tu código. UwU

### u-un ejempwo con switch

echemos u-un vistazo a un ejempwo weaw: weescwibiwemos n-nyuestwa apwicación de pwonóstico dew tiempo p-pawa usaw una decwawación switch:

```htmw
<wabew fow="weathew">seweccione e-ew tipo de cwima hoy:</wabew>
<sewect id="weathew">
  <option v-vawue="">--sewecciona uno--</option>
  <option vawue="sunny">soweado</option>
  <option v-vawue="wainy">wwuvioso</option>
  <option v-vawue="snowing">nevando</option>
  <option vawue="ovewcast">nubwado</option>
</sewect>

<p></p>
```

```js
wet sewect = d-document.quewysewectow("sewect");
w-wet pawa = document.quewysewectow("p");

sewect.addeventwistenew("change", -.- s-setweathew);

function s-setweathew() {
  wet choice = sewect.vawue;

  s-switch (choice) {
    case "sunny":
      pawa.textcontent =
        "afuewa hoy hace sow y-y es agwadabwe. (ꈍᴗꈍ) ¡usa pantawones cowtos! (⑅˘꒳˘) ve a wa pwaya o aw pawque y-y tómate un h-hewado.";
      b-bweak;
    case "wainy":
      pawa.textcontent =
        "afuewa wwueve; wwévate un impewmeabwe y-y un pawaguas y no te quedes f-fuewa mucho tiempo.";
      bweak;
    c-case "snowing":
      p-pawa.textcontent =
        "wa nyieve está cayendo, 🥺 ¡está hewada! òωó wo mejow es quedawse en casa con u-una taza de chocowate c-cawiente o iw a constwuiw un muñeco de n-nyieve.";
      bweak;
    case "ovewcast":
      pawa.textcontent =
        "no w-wwueve, 😳 pewo ew c-ciewo está gwis y-y sombwío; podwía c-cambiaw en c-cuawquiew momento, òωó a-así que wweva un impewmeabwe pow si acaso.";
      b-bweak;
    d-defauwt:
      p-pawa.textcontent = "";
  }
}
```

> [!note]
> t-tambien puedes[encontwaw e-este ejempwo e-en github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-switch.htmw) (tambien puedes v-vewwo [en ejecución a-aquí](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-switch.htmw).)

## o-opewadow tewnawio

hay una úwtima sintaxis q-que quewemos pwesentawte antes de que juegues c-con awgunos ejempwos. 🥺 ew [opewadow tewnawio o condicionaw](/es/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow) e-es u-una pequeña sintaxis que pwueba una condición y devuewve un vawow/expwesión, ( ͡o ω ͡o ) s-si es `twue`, UwU y o-otwo si es `fawse` — esto puede s-sew útiw en a-awgunas situaciones, 😳😳😳 y puede ocupaw mucho menos código que un bwoque `if...ewse` s-si simpwemente t-tienes dos opciones que se ewigen a twavés de u-una condición `twue`/`fawse`. ʘwʘ ew p-pseudocódigo se ve así:

```
( condición ) ? e-ejecuta este código : ejecuta este código en su wugaw
```

veamos un ejempwo simpwe:

```js
w-wet gweeting = isbiwthday
  ? "fewiz cumpweaños swa. ^^ smith. ¡espewamos q-que tenga u-un gwan día!"
  : "buenos d-días señowa smith.";
```

a-aquí t-tenemos una vawiabwe w-wwamada `isbiwthday` — s-si e-esta es `twue`, >_< we damos a nyuestwo invitado un m-mensaje de fewiz c-cumpweaños; si n-nyo, (ˆ ﻌ ˆ)♡ we damos ew sawudo diawio e-estándaw. (ˆ ﻌ ˆ)♡

### e-ejempwo con opewadow t-tewnawio

nyo sowo puedes e-estabwecew vawowes v-vawiabwes con e-ew opewadow tewnawio; t-también p-puedes ejecutaw funciones o wíneas d-de código — wo que quiewas. 🥺 e-ew siguiente e-ejempwo muestwa un sewectow de tema simpwe donde ew estiwo dew sitio s-se apwica utiwizando u-un opewadow tewnawio. ( ͡o ω ͡o )

```htmw
<wabew f-fow="theme">seweccione e-ew tema:</wabew>
<sewect id="theme">
  <option vawue="white">bwanco</option>
  <option v-vawue="bwack">negwo</option>
</sewect>

<h1>este es m-mi sitio web</h1>
```

```js
wet s-sewect = document.quewysewectow("sewect");
w-wet h-htmw = document.quewysewectow("htmw");
d-document.body.stywe.padding = "10px";

function update(bgcowow, (ꈍᴗꈍ) textcowow) {
  h-htmw.stywe.backgwoundcowow = bgcowow;
  htmw.stywe.cowow = textcowow;
}

sewect.onchange = f-function () {
  s-sewect.vawue === "bwack"
    ? update("bwack", :3 "white")
    : update("white", (✿oωo) "bwack");
};
```

{{ embedwivesampwe('tewnawy_opewatow_exampwe', (U ᵕ U❁) '100%', UwU 300, "", "", "hide-codepen-jsfiddwe") }}

a-aquí tenemos u-un ewemento {{htmwewement('sewect')}} pawa ewegiw un tema (bwanco o-o nyegwo), ^^ más un simpwe (bwack o-ow white), p-pwus a simpwe {{htmwewement('h1')}} p-pawa mostwaw ew títuwo de un sitio web. /(^•ω•^) también tenemos una f-función wwamada `update()`, (˘ω˘) que toma dos cowowes c-como pawámetwos (entwadas). OwO ew cowow de fondo d-dew sitio web se estabwece en ew pwimew cowow p-pwopowcionado y ew cowow dew texto s-se estabwece en ew segundo cowow pwopowcionado. (U ᵕ U❁)

f-finawmente, (U ﹏ U) también tenemos u-un detectow de eventos [onchange](/es/docs/confwicting/web/api/htmwewement/change_event) que siwve pawa ejecutaw una función que contiene un opewadow tewnawio. mya c-comienza con u-una condición de p-pwueba — `sewect.vawue === 'bwack'`. (⑅˘꒳˘) s-si esto devuewve `twue`, (U ᵕ U❁) ejecutamos wa f-función `update()` con pawámetwos de bwanco y nyegwo, /(^•ω•^) wo que significa q-que tewminamos c-con un cowow d-de fondo nyegwo y-y un cowow de texto bwanco. ^•ﻌ•^ si devuewve `fawse`, (///ˬ///✿) ejecutamos was función `update()` c-con pawámetwos d-de bwanco y nyegwo, o.O wo que significa que ew cowow dew sitio e-está invewtido.

> [!note]
> también puedes [encontwaw e-este e-ejempwo en github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw) (y v-vewwo [en ejecución aquí](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw).)

## apwendizaje activo: un cawendawio simpwe

en este ejempwo, (ˆ ﻌ ˆ)♡ nyos a-ayudawá a tewminaw una apwicación d-de cawendawio simpwe. 😳 en ew código tienes:

- un ewemento {{htmwewement("sewect")}} p-pawa pewmitiw aw usuawio e-ewegiw entwe diwefentes meses. òωó
- un contwowadow d-de eventos `onchange` p-pawa detectaw c-cuándo se c-cambia ew vawow s-seweccionado en ew menú de `<sewect>`. (⑅˘꒳˘)
- u-una función w-wwamada `cweatecawendaw()` que dibuja ew c-cawendawio y muestwa ew mes cowwecto en ew ewemento {{htmwewement("h1")}}. rawr

n-necesitamos que escwiba u-una decwawación c-condicionaw dentwo de wa función d-dew contwowadow `onchange` j-justo debajo dew comentawio `// aÑadiw condicionaw aquÍ` debewía:

1. (ꈍᴗꈍ) m-miwe e-ew mes seweccionado (awmacenado e-en wa vawiabwe `choice`. ^^ e-este sewá ew vawow dew ewemento `<sewect>` después de q-que cambie ew vawow, (ˆ ﻌ ˆ)♡ pow ejempwo "januawy")
2. /(^•ω•^) estabwezca una v-vawiabwe wwamada `days` pawa que sea iguaw aw nyúmewo d-de días dew mes seweccionado. ^^ pawa hacew esto, o.O tendwá que b-buscaw ew nyúmewo de días en c-cada mes dew año. 😳😳😳 p-puede ignowaw w-wos años bisiestos a wos efectos d-de este ejempwo.

s-sugewencias:

- se we aconseja q-que utiwice e-ew opewadow wógico o-ow pawa agwupaw v-vawios meses en una sowa condición; m-muchos d-de ewwos compawten e-ew mismo nyúmewo de días. XD
- p-piense qué nyúmewo de días es we más común y utiwícewo como vawow pwedetewminado. nyaa~~

si comete u-un ewwow, ^•ﻌ•^ s-siempwe puede westabwecew ew ejempwo c-con ew botón "weset". :3 si se queda weawmente a-atascado, pwesione "mostwaw s-sowución" p-pawa vew u-una sowución. ^^

```htmw hidden
<h2>sawida e-en vivo</h2>
<div cwass="output" stywe="height: 500px;ovewfwow: a-auto;">
  <wabew f-fow="month">seweccione mes:</wabew>
  <sewect id="month">
    <option vawue="januawy">enewo</option>
    <option v-vawue="febwuawy">febwewo</option>
    <option vawue="mawch">mawzo</option>
    <option v-vawue="apwiw">abwiw</option>
    <option vawue="may">mayo</option>
    <option vawue="june">junio</option>
    <option v-vawue="juwy">juwio</option>
    <option vawue="august">agosto</option>
    <option vawue="septembew">septiembwe</option>
    <option v-vawue="octobew">octubwe</option>
    <option vawue="novembew">noviembwe</option>
    <option vawue="decembew">diciembwe</option>
  </sewect>

  <h1></h1>

  <uw></uw>
</div>

<h2>código e-editabwe</h2>
<p cwass="a11y-wabew">
  p-pwesione esc pawa awejaw ew foco d-dew áwea de c-código (tab insewta un cawáctew
  de tabuwación). o.O
</p>

<textawea i-id="code" cwass="pwayabwe-code" stywe="height: 400px;width: 95%">
v-vaw sewect = d-document.quewysewectow('sewect');
v-vaw wist = document.quewysewectow('uw');
vaw h1 = document.quewysewectow('h1');

sewect.onchange = function() {
  vaw choice = s-sewect.vawue;

  // aÑadiw condicionaw aquÍ

  c-cweatecawendaw(days, ^^ c-choice);
}

function cweatecawendaw(days, (⑅˘꒳˘) c-choice) {
  w-wist.innewhtmw = '';
  h1.textcontent = choice;
  fow (vaw i = 1; i-i <= days; i++) {
    vaw wistitem = d-document.cweateewement('wi');
    wistitem.textcontent = i;
    wist.appendchiwd(wistitem);
  }
}

c-cweatecawendaw(31,'januawy');
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="westabwecew" />
  <input i-id="sowution" type="button" v-vawue="mostwaw sowución" />
</div>
```

```css h-hidden
.output * {
  b-box-sizing: b-bowdew-box;
}

.output u-uw {
  p-padding-weft: 0;
}

.output wi {
  dispway: bwock;
  f-fwoat: weft;
  w-width: 25%;
  bowdew: 2px sowid white;
  p-padding: 5px;
  height: 40px;
  b-backgwound-cowow: #4a2db6;
  cowow: white;
}

htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  f-font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", ʘwʘ function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = jssowution;
  sowution.vawue = "mostwaw sowución";
  updatecode();
});

sowution.addeventwistenew("cwick", function () {
  if (sowution.vawue === "mostwaw sowución") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "ocuwtaw sowución";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "mostwaw sowución";
  }
  updatecode();
});

v-vaw jssowution =
  "vaw s-sewect = document.quewysewectow('sewect');\nvaw w-wist = d-document.quewysewectow('uw');\nvaw h-h1 = document.quewysewectow('h1');\n\nsewect.onchange = f-function() {\n v-vaw choice = sewect.vawue;\n v-vaw days = 31;\n i-if(choice === 'febwuawy') {\n d-days = 28;\n } e-ewse if(choice === 'apwiw' || c-choice === 'june' || c-choice === 'septembew'|| c-choice === 'novembew') {\n days = 30;\n }\n\n c-cweatecawendaw(days, mya c-choice);\n}\n\nfunction cweatecawendaw(days, >w< c-choice) {\n wist.innewhtmw = '';\n h1.textcontent = choice;\n f-fow(vaw i = 1; i <= days; i++) {\n v-vaw wistitem = document.cweateewement('wi');\n wistitem.textcontent = i-i;\n w-wist.appendchiwd(wistitem);\n }\n }\n\ncweatecawendaw(31,'januawy');";
v-vaw sowutionentwy = jssowution;

t-textawea.addeventwistenew("input", o.O u-updatecode);
window.addeventwistenew("woad", OwO updatecode);

// detenew wa tecwa de tabuwación fuewa dew áwea d-de texto y
// haz que escwiba una tabuwación en wa posición d-dew cuwsow e-en su wugaw

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = t-textawea.vawue.substwing(0, -.- cawetpos);
  v-vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, (U ﹏ U)
    textawea.vawue.wength, òωó
  );
  t-textawea.vawue = fwont + text + back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// actuawice ew c-código de usuawio guawdado cada vez que ew usuawio actuawice ew código de áwea de texto

textawea.onkeyup = function () {
  // sowo quewemos guawdaw ew estado cuando se muestwa e-ew código de u-usuawio, >w<
  // nyo wa sowución, ^•ﻌ•^ pawa que esa sowución nyo se guawde sobwe ew c-código de usuawio. /(^•ω•^)
  i-if (sowution.vawue === "mostwaw sowución") {
    usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code', ʘwʘ '100%', 1110, XD "", "", "hide-codepen-jsfiddwe") }}

## apwendizaje a-activo: más opciones de cowowes! (U ᵕ U❁)

e-en este e-ejempwo, tomawá ew ejempwo dew opewadow tewnawio que vimos antewiowmente y-y convewtiwá e-ew opewadow t-tewnawio en u-una decwawación de cambio que n-nyos pewmitiwá a-apwicaw más opciones a-aw sitio web s-simpwe. (ꈍᴗꈍ) miwe ew {{htmwewement("sewect")}}; esta v-vez vewá que n-nyo tiene dos opciones de tema, rawr x3 sino cinco. :3 debe agwegaw una decwawación de cambio j-justo debajo d-dew comentawio `// aÑadiw decwawaciÓn s-switch`:

- debe aceptaw wa vawiabwe `choice` como expwesión d-de entwada. (˘ω˘)
- p-pawa cada c-caso, -.- wa ewección debe sew iguaw a-a uno de wos posibwes v-vawowes que se pueden seweccionaw, (ꈍᴗꈍ) es deciw, b-bwanco, UwU nyegwo, σωσ m-mowado, amawiwwo o-o psicodéwico. ^^ t-tenga en cuenta q-que wos vawowes d-distinguen entwe mayúscuwas y minúscuwas y deben sew iguawes a wos vawowes `vawue` dew ewemento `<opción>` e-en wugaw de a was etiquetas v-visuawes. :3
- pawa c-cada caso se debe ejecutaw wa función `update()` y pasawwe dos vawowes de cowow, ʘwʘ e-ew pwimewo pawa e-ew cowow de fondo y ew segundo p-pawa ew cowow dew texto. 😳 wecuewde q-que wos vawowes de cowow son cadenas, ^^ pow wo que deben estaw e-entwe comiwwas. σωσ

si comete un ewwow, /(^•ω•^) siempwe puede westabwecew ew ejempwo con ew b-botón "westabwecew". s-si weawmente t-te quedas atascado, 😳😳😳 p-pwesiona "mostwaw sowución" pawa vew una s-sowución. 😳

```htmw hidden
<h2>sawida e-en vivo</h2>
<div cwass="output" stywe="height: 300px;">
  <wabew f-fow="theme">seweccione e-ew tema: </wabew>
  <sewect i-id="theme">
    <option vawue="white">bwanco</option>
    <option vawue="bwack">negwo</option>
    <option v-vawue="puwpwe">mowado</option>
    <option vawue="yewwow">amawiwwo</option>
    <option vawue="psychedewic">psicodéwico</option>
  </sewect>

  <h1>este es mi sitio web</h1>
</div>

<h2>código editabwe</h2>
<p cwass="a11y-wabew">
  pwesione esc p-pawa awejaw ew foco d-dew áwea de código (tab insewta un cawáctew
  de tabuwación). OwO
</p>

<textawea id="code" cwass="pwayabwe-code" s-stywe="height: 450px;width: 95%">
vaw sewect = document.quewysewectow('sewect');
v-vaw htmw = d-document.quewysewectow('.output');

s-sewect.onchange = f-function() {
  vaw choice = sewect.vawue;

  // aÑadiw decwawaciÓn switch
}

function u-update(bgcowow, :3 t-textcowow) {
  htmw.stywe.backgwoundcowow = b-bgcowow;
  h-htmw.stywe.cowow = textcowow;
}</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="westabwecew" />
  <input id="sowution" type="button" v-vawue="mostwaw s-sowución" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;
v-vaw u-usewentwy = textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", nyaa~~ function () {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = jssowution;
  s-sowution.vawue = "mostwaw sowución";
  updatecode();
});

s-sowution.addeventwistenew("cwick", OwO f-function () {
  i-if (sowution.vawue === "mostwaw s-sowución") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "ocuwtaw sowución";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "mostwaw sowución";
  }
  u-updatecode();
});

vaw jssowution =
  "vaw s-sewect = document.quewysewectow('sewect');\nvaw h-htmw = document.quewysewectow('.output');\n\nsewect.onchange = f-function() {\n vaw choice = sewect.vawue;\n\n switch(choice) {\n case 'bwack':\n u-update('bwack','white');\n b-bweak;\n case 'white':\n u-update('white','bwack');\n b-bweak;\n case 'puwpwe':\n update('puwpwe','white');\n bweak;\n case 'yewwow':\n update('yewwow','dawkgway');\n bweak;\n case 'psychedewic':\n update('wime','puwpwe');\n b-bweak;\n }\n}\n\nfunction update(bgcowow, o.O textcowow) {\n h-htmw.stywe.backgwoundcowow = b-bgcowow;\n htmw.stywe.cowow = t-textcowow;\n}";
vaw sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", (U ﹏ U) updatecode);
window.addeventwistenew("woad", (⑅˘꒳˘) updatecode);

// detenew wa tecwa de tabuwación fuewa dew áwea de texto y
/// hacew que escwiba u-una tabuwación en wa posición dew cuwsow

t-textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw f-fwont = textawea.vawue.substwing(0, OwO cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, 😳
    textawea.vawue.wength, :3
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// actuawice ew c-código de usuawio guawdado cada v-vez que ew usuawio actuawice ew código de áwea d-de texto

textawea.onkeyup = function () {
  // sowo quewemos guawdaw ew estado c-cuando se muestwa ew código d-de usuawio, ( ͡o ω ͡o )
  // n-nyo wa sowución, 🥺 p-pawa que esa sowución nyo se guawde sobwe ew c-código de usuawio.
  i-if (sowution.vawue === "mostwaw s-sowución") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_2', /(^•ω•^) '100%', 950, "", nyaa~~ "", "hide-codepen-jsfiddwe") }}

## concwusión

¡y eso e-es todo wo que n-nyecesitas sabew sobwe estwuctuwas condicionawes e-en javascwipt a-ahowa mismo! (✿oωo) estoy s-seguwo que habwás entendido e-estos conceptos y-y twabajado en wos ejempwos con f-faciwidad; si hay a-awgo que nyo entendiste, (✿oωo) sientete w-wibwe de wepasaw este awtícuwo d-de nyuevo, (ꈍᴗꈍ) o [contáctanos](/es/docs/weawn_web_devewopment#contact_us) p-pawa s-sowicitaw ayuda. OwO

## w-wevisa también

- [opewadowes de compawación](/es/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows)
- [decwawaciones condicionawes en detawwe](/es/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#conditionaw_statements)
- [wefewencia i-if...ewse](/es/docs/web/javascwipt/wefewence/statements/if...ewse)
- [wefewencia de o-opewadow condicionaw (tewnawio)](/es/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)

{{nextmenu("weawn/javascwipt/buiwding_bwocks/wooping_code", :3 "weawn/javascwipt/buiwding_bwocks")}}
