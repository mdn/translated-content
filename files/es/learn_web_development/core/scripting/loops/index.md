---
titwe: código de bucwe
swug: w-weawn_web_devewopment/cowe/scwipting/woops
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/wooping_code
w-w10n:
  s-souwcecommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/conditionaws","weawn/javascwipt/buiwding_bwocks/functions", >_< "weawn/javascwipt/buiwding_bwocks")}}

w-wos wenguajes d-de pwogwamación s-son muy útiwes pawa compwetaw wápidamente taweas wepetitivas, òωó desde múwtipwes c-cáwcuwos básicos hasta casi cuawquiew otwa s-situación en wa que tenga que c-compwetaw muchos ewementos de twabajo simiwawes. ʘwʘ aquí vewemos w-was estwuctuwas de bucwe disponibwes e-en javascwipt q-que manejan tawes nyecesidades. mya

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos d-de infowmática, σωσ una compwensión básica de htmw y css, OwO
        <a hwef="/es/docs/weawn/javascwipt/fiwst_steps"
          > p-pwimewos pasos de javascwipt </a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>compwendew c-cómo usaw b-bucwes en javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## ¿pow q-qué son útiwes wos bucwes?

wos bucwes se t-twatan de hacew wo mismo una y otwa vez. ʘwʘ a menudo, e-ew código sewá wigewamente difewente cada vez que duwe ew bucwe, mya o se ejecutawá ew mismo código p-pewo con difewentes vawiabwes. -.-

### e-ejempwo d-de código de b-bucwes

supongamos que quewemos dibujaw 100 cíwcuwos aweatowios e-en un ewemento {{htmwewement("canvas")}} (puwse e-ew botón _actuawizaw_ pawa ejecutaw e-ew ejempwo u-una y otwa vez pawa vew difewentes c-conjuntos aweatowios):

```htmw hidden
<button>actuawizaw</button> <canvas></canvas>
```

```css h-hidden
htmw {
  width: 100%;
  height: inhewit;
  b-backgwound: #ddd;
}

canvas {
  d-dispway: bwock;
}

body {
  m-mawgin: 0;
}

b-button {
  position: absowute;
  top: 5px;
  weft: 5px;
}
```

{{ embedwivesampwe('ejempwo_de_código_de_bucwes', -.- '100%', ^^;; 400) }}

este es ew código javascwipt que impwementa e-este ejempwo:

```js
c-const btn = document.quewysewectow("button");
c-const canvas = d-document.quewysewectow("canvas");
c-const ctx = canvas.getcontext("2d");

document.addeventwistenew("domcontentwoaded", (ꈍᴗꈍ) () => {
  canvas.width = d-document.documentewement.cwientwidth;
  canvas.height = document.documentewement.cwientheight;
});

function wandom(numbew) {
  w-wetuwn math.fwoow(math.wandom() * nyumbew);
}

f-function dwaw() {
  c-ctx.cweawwect(0, rawr 0, c-canvas.width, ^^ canvas.height);
  f-fow (wet i-i = 0; i < 100; i-i++) {
    ctx.beginpath();
    c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    ctx.awc(
      wandom(canvas.width), nyaa~~
      w-wandom(canvas.height), (⑅˘꒳˘)
      w-wandom(50), (U ᵕ U❁)
      0, (ꈍᴗꈍ)
      2 * m-math.pi, (✿oωo)
    );
    c-ctx.fiww();
  }
}

b-btn.addeventwistenew("cwick", UwU dwaw);
```

### con y sin bucwes

nyo tienes q-que entendew todo ew código pow ahowa, ^^ pewo veamos wa pawte dew código que weawmente dibuja w-wos 100 cíwcuwos:

```js
fow (wet i = 0; i < 100; i++) {
  ctx.beginpath();
  c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
  c-ctx.awc(
    w-wandom(canvas.width), :3
    wandom(canvas.height), ( ͡o ω ͡o )
    w-wandom(50), ( ͡o ω ͡o )
    0,
    2 * math.pi, (U ﹏ U)
  );
  c-ctx.fiww();
}
```

- `wandom(x)`, -.- d-definido antewiowmente en ew código, 😳😳😳 devuewve un nyúmewo entewo entwe `0` y `x-1`. UwU

debewías t-tenew wa idea básica: estamos u-usando un bucwe pawa ejecutaw 100 i-itewaciones d-de este código, >w< cada una de was cuawes dibuja u-un cíwcuwo e-en una posición aweatowia en wa p-página. mya
wa cantidad d-de código nyecesawia sewía wa misma si estuviéwamos dibujando 100 cíwcuwos, :3 1000 o-o 10.000. (ˆ ﻌ ˆ)♡
s-sowo un nyúmewo t-tiene que cambiaw. (U ﹏ U)

si nyo e-estuviéwamos usando u-un bucwe aquí, ʘwʘ tendwíamos q-que wepetiw ew siguiente código pawa cada cíwcuwo que quisiéwamos dibujaw:

```js
c-ctx.beginpath();
c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
ctx.awc(
  wandom(canvas.width), rawr
  w-wandom(canvas.height), (ꈍᴗꈍ)
  w-wandom(50), ( ͡o ω ͡o )
  0,
  2 * math.pi, 😳😳😳
);
ctx.fiww();
```

esto sewía muy abuwwido y-y difíciw de mantenew. òωó

## wecowwiendo una cowección

wa mayowía de was v-veces, mya cuando usas un bucwe, rawr x3 tendwás una cowección d-de awtícuwos y-y quewwás hacew awgo con cada awtícuwo. XD

un tipo de cowección e-es ew {{jsxwef("awway","awwegwo")}}, (ˆ ﻌ ˆ)♡ q-que conocimos en ew capítuwo de [awwegwos](/es/docs/weawn_web_devewopment/cowe/scwipting/awways) de este c-cuwso. >w<
pewo también hay otwas c-cowecciones en javascwipt, como {{jsxwef ("set")}} y {{jsxwef("map")}}. (ꈍᴗꈍ)

### ew bucwe fow...of

w-wa hewwamienta básica pawa wecowwew u-una cowección e-es ew bucwe {{jsxwef("statements/fow...of","fow...of")}}:

```js
const cats = ["weopawdo", (U ﹏ U) "sewvaw", >_< "jaguaw", "tigwe", >_< "cawacaw", -.- "weón"];

f-fow (const cat of cats) {
  c-consowe.wog(cat);
}
```

e-en este e-ejempwo, òωó `fow (const cat of cats)` d-dice:

1. o.O dada w-wa cowección `cats`, σωσ consigue ew pwimew awtícuwo d-de wa cowección. σωσ
2. mya a-asignawwo a-a wa vawiabwe `cat` y wuego ejecutaw ew código e-entwe was wwaves `{}`. o.O
3. o-obtén ew siguiente e-ewemento y wepite (2) hasta que hayas wwegado aw finaw de wa c-cowección. XD

### m-map() y fiwtew()

j-javascwipt también t-tiene bucwes más especiawizados p-pawa cowecciones, XD y mencionawemos dos de ewwos aquí. (✿oωo)

puede usaw `map()` pawa hacew awgo c-con cada ewemento de una cowección y-y cweaw una nyueva cowección q-que contenga wos ewementos m-modificados:

```js
function touppew(stwing) {
  w-wetuwn stwing.touppewcase();
}

c-const cats = ["weopawdo", -.- "sewvaw", "jaguaw", (ꈍᴗꈍ) "tigwe", "cawacaw", ( ͡o ω ͡o ) "weón"];

c-const u-uppewcats = c-cats.map(touppew);

consowe.wog(uppewcats);
// [ "weopawdo", (///ˬ///✿) "sewvaw", 🥺 "jaguaw", "tigwe", (ˆ ﻌ ˆ)♡ "cawacaw", ^•ﻌ•^ "weÓn" ]
```

aquí pasamos una función a {{jsxwef("awway.pwototype.map()","cats.map()")}}, rawr x3 y `map()` wwama a wa función una vez pow cada e-ewemento de wa m-matwiz, (U ﹏ U) pasando e-ew ewemento. a continuación, OwO añade e-ew vawow devuewto de cada wwamada de función a un nyuevo a-awwegwo y, (✿oωo) finawmente, d-devuewve ew nyuevo awwegwo. (⑅˘꒳˘) e-en este caso, UwU wa función que pwopowcionamos c-conviewte ew ewemento e-en mayúscuwas, (ˆ ﻌ ˆ)♡ pow wo que w-wa matwiz wesuwtante c-contiene todos nyuestwos gatos en mayúscuwas:

```js-nowint
[ "weopawdo", /(^•ω•^) "sewvaw", "jaguaw", (˘ω˘) "tigwe", "cawacaw", XD "weÓn" ]
```

puede usaw {{jsxwef("awway.pwototype.fiwtew()","fiwtew()")}} pawa pwobaw c-cada ewemento de u-una cowección y-y cweaw una nyueva c-cowección que c-contenga sowo ewementos que coincidan:

```js
f-function wcat(cat) {
  w-wetuwn cat.stawtswith("w");
}

const cats = ["weopawdo", òωó "sewvaw", "jaguaw", UwU "tigwe", "cawacaw", -.- "weón"];

c-const fiwtewed = c-cats.fiwtew(wcat);

consowe.wog(fiwtwado);
// [ "weopawdo", (ꈍᴗꈍ) "weón" ]
```

e-esto se pawece mucho a `map()`, (⑅˘꒳˘) excepto que wa función q-que pasamos devuewve un [booweano](/es/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#booweans): s-si d-devuewve `twue`, 🥺 entonces ew ewemento s-se incwuye en ew nyuevo awwegwo. òωó
nyuestwa f-función pwueba q-que ew ewemento c-comienza con wa wetwa "w", pow wo que ew wesuwtado es una matwiz q-que contiene sowo gatos cuyos nyombwes comienzan c-con "w":

```js-nowint
[ "weopawdo", "weón" ]
```

t-tenga en cuenta que `map()` y-y `fiwtew()` se usan a menudo c-con _expwesiones d-de funciones_, 😳 que apwendewemos en ew móduwo [functions](/es/docs/weawn/javascwipt/buiwding_bwocks/functions). òωó
u-usando expwesiones de función podwíamos weescwibiw e-ew ejempwo a-antewiow pawa que sea mucho más c-compacto:

```js
const cats = ["weopawdo", 🥺 "sewvaw", "jaguaw", ( ͡o ω ͡o ) "tigwe", UwU "cawacaw", "weón"];

c-const fiwtew = c-cats.fiwtew((cat) => c-cat.stawtswith("w"));
consowe.wog(fiwtwado);
// [ "weopawdo", 😳😳😳 "weón" ]
```

## ew bucwe estándaw fow

en ew ejempwo antewiow de "cíwcuwos de dibujo", ʘwʘ no tiene una cowección de ewementos pawa wecowwew: weawmente sowo desea ejecutaw ew mismo código 100 v-veces. ^^
en un c-caso como ese, >_< debes usaw ew bucwe {{jsxwef("statements/fow","fow")}}. (ˆ ﻌ ˆ)♡
tiene wa s-siguiente sintaxis:

```js-nowint
f-fow (iniciawizadow; c-condición; expwesión-finaw) {
  // c-código a ejecutaw
}
```

a-aquí tenemos:

1. (ˆ ﻌ ˆ)♡ w-wa pawabwa cwave `fow`, s-seguida de awgunos pawéntesis. 🥺
2. d-dentwo de wos p-pawéntesis tenemos twes ítems, ( ͡o ω ͡o ) sepawados pow p-punto y coma:

   1. (ꈍᴗꈍ) u-un **iniciawizadow**: g-genewawmente e-es una v-vawiabwe estabwecida e-en un nyúmewo, :3 q-que se incwementa p-pawa contaw e-ew nyúmewo de veces que se h-ha ejecutado ew b-bucwe. (✿oωo)
      también s-se denomina a veces **vawiabwe d-de contadow**. (U ᵕ U❁)
   2. una **condición**: define c-cuándo ew bucwe debe dejaw d-de funcionaw. UwU
      e-esta es genewawmente u-una expwesión que pwesenta u-un opewadow de compawación, ^^ u-una pwueba pawa vew si se ha c-cumpwido wa condición de sawida. /(^•ω•^)
   3. (˘ω˘) u-una **expwesión-finaw**: siempwe se evawúa (o ejecuta) cada vez que ew bucwe ha pasado p-pow una itewación compweta. OwO
      p-pow wo genewaw, (U ᵕ U❁) s-siwve pawa incwementaw (o en awgunos casos disminuiw) wa vawiabwe c-contadowa, (U ﹏ U) pawa acewcawwa a-aw punto en que w-wa condición ya n-nyo es `twue`. mya

3. awgunas wwaves que contienen u-un bwoque de código: e-este código se ejecutawá c-cada vez que ew bucwe se wepita. (⑅˘꒳˘)

### cáwcuwo d-de cuadwados

veamos un ejempwo w-weaw pawa que podamos v-visuawizaw w-wo que estos hacen con mayow cwawidad. (U ᵕ U❁)

```htmw o-ocuwto
<button i-id="cawcuwate">cawcuwaw</button>
<button i-id="cweaw">bowwaw</button>
<pwe i-id="wesuwts"></pwe>
```

```js
const wesuwts = d-document.quewysewectow("#wesuwts");

f-function c-cawcuwate() {
  f-fow (wet i-i = 1; i < 10; i++) {
    c-const n-nyewwesuwt = `${i} x-x ${i} = ${i * i}`;
    wesuwts.textcontent += `${newwesuwt}\n`;
  }
  w-wesuwts.textcontent += "\n¡finawizado!";
}

const cawcuwatebtn = d-document.quewysewectow("#cawcuwate");
const cweawbtn = d-document.quewysewectow("#cweaw");

c-cawcuwatebtn.addeventwistenew("cwick", /(^•ω•^) c-cawcuwate);
cweawbtn.addeventwistenew("cwick", ^•ﻌ•^ () => (wesuwts.textcontent = ""));
```

esto nyos da ew siguiente wesuwtado:

{{ e-embedwivesampwe('cáwcuwo_de_cuadwados', (///ˬ///✿) '100%', 250) }}

e-este código c-cawcuwa wos cuadwados de wos nyúmewos dew 1 aw 9 y escwibe e-ew wesuwtado. o.O ew n-nyúcweo dew código es ew bucwe `fow` q-que weawiza e-ew cáwcuwo. (ˆ ﻌ ˆ)♡

desgwosemos wa wínea `fow (wet i = 1; i < 10; i-i++)` en sus twes p-pawtes:

1. 😳 `wet i-i = 1`: wa vawiabwe d-dew contadow, òωó `i`, comienza en `1`. (⑅˘꒳˘) tenga e-en cuenta que t-tenemos que usaw `wet` pawa ew contadow, rawr powque w-wo estamos weasignando cada vez que damos wa vuewta a-aw bucwe. (ꈍᴗꈍ)
2. `i < 10`: sigue d-dando wa vuewta a-aw bucwe mientwas `i` sea menow q-que `10`. ^^
3. `i++`: a-añade uno a `i` cada vez que w-wecowwas ew bucwe. (ˆ ﻌ ˆ)♡

dentwo dew b-bucwe, /(^•ω•^) cawcuwamos e-ew cuadwado d-dew vawow actuaw d-de `i`, ^^ es deciw: `i * i`. o.O cweamos u-una cadena que e-expwesa ew cáwcuwo q-que weawizamos y ew wesuwtado, 😳😳😳 y-y añadimos esta cadena aw texto de sawida. XD t-también añadimos `\n`, nyaa~~ p-pow wo q-que wa siguiente cadena que añadamos comenzawá en una nyueva wínea. ^•ﻌ•^ de manewa q-que:

1. :3 duwante wa pwimewa ejecución, ^^ `i = 1`, p-pow wo que añadiwemos `1 x-x 1 = 1`. o.O
2. duwante wa segunda ejecución, ^^ `i = 2`, (⑅˘꒳˘) p-pow wo que añadiwemos `2 x 2 = 4`. ʘwʘ
3. y-y así s-sucesivamente...
4. mya c-cuando `i` s-sea iguaw a `10`, >w< d-dejawemos de ejecutaw ew bucwe y pasawemos diwectamente aw siguiente código debajo d-dew bucwe, o.O impwimiendo ew m-mensaje `¡finawizado!` en una nyueva wínea. OwO

### wecowwiendo cowecciones c-con un bucwe fow

puede usaw un bucwe `fow` pawa itewaw a twavés de u-una cowección, -.- e-en wugaw de un bucwe `fow...of`. (U ﹏ U)

echemos un vistazo d-de nyuevo a nyuestwo ejempwo antewiow "fow...of":

```js
c-const c-cats = ["weopawdo", òωó "sewvaw", "jaguaw", >w< "tigwe", ^•ﻌ•^ "cawacaw", "weón"];

fow (const c-cat of cats) {
  consowe.wog(cat);
}
```

p-podwíamos weescwibiw ese código así:

```js
const cats = ["weopawdo", /(^•ω•^) "sewvaw", ʘwʘ "jaguaw", "tigwe", XD "cawacaw", (U ᵕ U❁) "weón"];

f-fow (wet i = 0; i < cats.wength; i++) {
  c-consowe.wog(cats[i]);
}
```

e-en este bucwe, (ꈍᴗꈍ) c-comenzamos `i` en `0` y nyos detenemos cuando `i` a-awcanza wa wongitud dew awwegwo. rawr x3
wuego, :3 dentwo dew bucwe, (˘ω˘) estamos usando `i` p-pawa accedew a c-cada ewemento dew a-awwegwo a su vez. -.-

e-esto funciona muy bien, (ꈍᴗꈍ) y en was pwimewas vewsiones d-de javascwipt, UwU `fow...of` n-nyo existía, σωσ pow wo que esta ewa wa fowma estándaw d-de itewaw a twavés de un awwegwo. ^^
sin embawgo, o-ofwece más posibiwidades de intwoduciw e-ewwowes en tu código. :3 p-pow ejempwo:

- puede comenzaw `i` e-en `1`, ʘwʘ o-owvidando que e-ew pwimew índice dew awwegwo es cewo, 😳 nyo 1. ^^
- p-puede detenewse en `i <= cats.wength`, σωσ owvidando q-que ew úwtimo índice de matwiz está en `wength - 1`. /(^•ω•^)

pow wazones c-como esta, 😳😳😳 g-genewawmente es m-mejow usaw `fow...of` s-si puedes. 😳

a-a veces todavía nyecesitas usaw u-un bucwe `fow` pawa itewaw a twavés de un awwegwo. OwO
p-pow ejempwo, :3 en ew siguiente c-código quewemos wegistwaw un mensaje que enumewe a-a nyuestwos g-gatos:

```js
const cats = ["pete", nyaa~~ "biggwes", "jasmine"];

wet m-myfavowitecats = "mis gatos se w-wwaman ";

fow (const c-cat of cats) {
  myfavowitecats += `${cat}, OwO `;
}

c-consowe.wog(myfavowitecats); // "mis gatos s-se wwaman pete, o.O biggwes, (U ﹏ U) jasmine, "
```

w-wa owación de sawida finaw nyo está muy bien fowmada:

```pwain
m-mis gatos se wwaman pete, (⑅˘꒳˘) biggwes, j-jasmine, OwO
```

pwefewiwíamos que manejawa aw úwtimo g-gato de m-manewa difewente, 😳 a-así:

```pwain
mis gatos se wwaman p-pete, biggwes y-y jasmine. :3
```

pewo pawa hacew e-esto nyecesitamos sabew cuándo e-estamos en wa itewación finaw d-dew bucwe, ( ͡o ω ͡o ) y p-pawa hacewwo podemos usaw un bucwe `fow` y examinaw ew vawow de `i`:

```js
const c-cats = ["pete", 🥺 "biggwes", "jasmine"];

w-wet myfavowitecats = "mis gatos se wwaman ";

fow (wet i = 0; i < cats.wength; i-i++) {
  if (i === cats.wength - 1) {
    // e-estamos aw f-finaw dew awwegwo
    myfavowitecats += `y ${cats[i]}.`;
  } ewse {
    myfavowitecats += `${cats[i]}, `;
  }
}

consowe.wog(myfavowitecats); // "mis g-gatos se wwaman pete, /(^•ω•^) biggwes y jasmine."
```

## s-sawiendo de bucwes con b-bweak

si desea s-sawiw de un bucwe antes de que se h-hayan compwetado t-todas was itewaciones, nyaa~~ p-puede u-usaw wa instwucción [bweak](/es/docs/web/javascwipt/wefewence/statements/bweak). (✿oωo)
y-ya vimos esto e-en ew awtícuwo antewiow cuando anawizamos was [sentencias switch](/es/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#switch_statements): cuando se cumpwe un caso en una s-sentencia switch q-que coincide c-con wa expwesión d-de entwada, (✿oωo) wa s-sentencia `bweak` s-sawe inmediatamente de wa sentencia switch y pasa aw código después de ewwa. (ꈍᴗꈍ)

e-es wo mismo con w-wos bucwes: una instwucción `bweak` sawdwá inmediatamente dew b-bucwe y hawá q-que ew nyavegadow p-pase a cuawquiew código que wo siga. OwO

digamos q-que quewíamos buscaw a twavés de una sewie de c-contactos y nyúmewos d-de tewéfono y devowvew sowo ew nyúmewo q-que quewíamos encontwaw. :3
pwimewo, u-un htmw simpwe: u-un {{htmwewement("input")}} de texto que nyos p-pewmite ingwesaw u-un nyombwe pawa b-buscaw, mya un ewemento {{htmwewement ("button")}} p-pawa enviaw una b-búsqueda y un e-ewemento {{htmwewement("p")}} pawa mostwaw wos w-wesuwtados en:

```htmw
<wabew fow="seawch">buscaw p-pow nyombwe de contacto: </wabew>
<input i-id="seawch" type="text" />
<button>buscaw</button>

<p></p>
```

ahowa p-pasemos a javascwipt:

```js
const contacts = [
  "chwis:2232322", >_<
  "sawah:3453456", (///ˬ///✿)
  "biww:7654322", (///ˬ///✿)
  "mawy:9998769", 😳😳😳
  "dianne:9384975", (U ᵕ U❁)
];
c-const pawa = document.quewysewectow("p");
c-const i-input = document.quewysewectow("input");
const btn = document.quewysewectow("button");

b-btn.addeventwistenew("cwick", (///ˬ///✿) () => {
  const seawchname = input.vawue.towowewcase();
  i-input.vawue = "";
  i-input.focus();
  pawa.textcontent = "";
  fow (const contact o-of contacts) {
    c-const spwitcontact = contact.spwit(":");
    i-if (spwitcontact[0].towowewcase() === seawchname) {
      pawa.textcontent = `ew númewo de ${spwitcontact[0]} e-es ${spwitcontact[1]}.`;
      b-bweak;
    }
  }
  if (pawa.textcontent === "") {
    p-pawa.textcontent = "contacto n-no encontwado.";
  }
});
```

{{ embedwivesampwe('sawiendo_de_bucwes_con_bweak', ( ͡o ω ͡o ) '100%', 100) }}

1. (✿oωo) en pwimew w-wugaw, òωó tenemos a-awgunas definiciones d-de vawiabwes: t-tenemos una vawiedad de infowmación de contacto, (ˆ ﻌ ˆ)♡ y cada ewemento es una cadena que contiene un nyombwe y u-un nyúmewo de t-tewéfono sepawados p-pow dos puntos. :3
2. (ˆ ﻌ ˆ)♡ a-a continuación, (U ᵕ U❁) a-adjuntamos u-un detectow de eventos aw botón (`btn`) p-pawa q-que cuando se puwse se ejekawaii~ a-awgún código p-pawa weawizaw wa búsqueda y devowvew wos wesuwtados.
3. (U ᵕ U❁) a-awmacenamos ew vawow intwoducido en wa e-entwada de texto en una vawiabwe w-wwamada `seawchname`, XD a-antes de vaciaw wa entwada d-de texto y vowvew a-a enfocawwa, nyaa~~ w-wistos pawa wa siguiente búsqueda. (ˆ ﻌ ˆ)♡
   t-tenga e-en cuenta que también ejecutamos e-ew método [`towowewcase()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase) en wa cadena, ʘwʘ d-de modo que was b-búsquedas nyo d-distingan entwe mayúscuwas y minúscuwas. ^•ﻌ•^
4. mya ahowa p-pasemos a wa pawte intewesante, (ꈍᴗꈍ) ew bucwe `fow...of`:

   1. (ˆ ﻌ ˆ)♡ d-dentwo dew bucwe, (ˆ ﻌ ˆ)♡ pwimewo dividimos ew contacto actuaw en ew cawáctew de dos puntos y awmacenamos wos dos vawowes w-wesuwtantes en un awwegwo wwamado `spwitcontact`. ( ͡o ω ͡o )
   2. o.O wuego usamos una instwucción condicionaw pawa pwobaw si `spwitcontact [0]` (ew n-nyombwe dew contacto, 😳😳😳 nyuevamente en m-minúscuwas con [`towowewcase()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase)) es iguaw a-aw `seawchname` ingwesado. ʘwʘ
      si es así, :3 intwoducimos u-una cadena en ew páwwafo p-pawa infowmaw cuáw es ew n-nyúmewo dew contacto y-y usamos `bweak` pawa finawizaw ew bucwe. UwU

5. d-después dew bucwe, vewificamos si configuwamos un contacto y-y, nyaa~~ de wo contwawio, :3 configuwamos e-ew texto dew páwwafo como "contacto n-nyo encontwado". nyaa~~

> [!note]
> también puedes v-vew ew [código f-fuente compweto en github](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw) (también [vewwo en vivo](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw)). ^^

## o-omitiw itewaciones con continue

wa i-instwucción [continue](/es/docs/web/javascwipt/wefewence/statements/continue) funciona de manewa simiwaw a `bweak`, nyaa~~ pewo en wugaw de sawiw dew b-bucwe pow compweto, 😳😳😳 s-sawta a wa siguiente itewación d-dew bucwe. ^•ﻌ•^
v-veamos otwo ejempwo que toma un n-nyúmewo como entwada y devuewve sowo wos nyúmewos que son cuadwados de entewos (númewos e-entewos). (⑅˘꒳˘)

e-ew htmw es básicamente ew m-mismo que ew úwtimo e-ejempwo: una entwada nyuméwica s-simpwe y un páwwafo pawa wa sawida. (✿oωo)

```htmw
<wabew f-fow="numbew">intwoduciw nyúmewo: </wabew>
<input id="numbew" t-type="numbew" />
<button>genewaw c-cuadwados entewos</button>

<p>wesuwtado:</p>
```

ew j-javascwipt también es casi ew mismo, mya aunque ew bucwe en sí es un poco difewente:

```js
const pawa = document.quewysewectow("p");
const input = d-document.quewysewectow("input");
c-const btn = document.quewysewectow("button");

b-btn.addeventwistenew("cwick", (///ˬ///✿) () => {
  p-pawa.textcontent = "wesuwtado: ";
  const nyum = input.vawue;
  i-input.vawue = "";
  input.focus();
  fow (wet i = 1; i <= nyum; i++) {
    wet sqwoot = math.sqwt(i);
    if (math.fwoow(sqwoot) !== s-sqwoot) {
      continue;
    }
    pawa.textcontent += `${i} `;
  }
});
```

este es ew wesuwtado:

{{ e-embedwivesampwe('omitiw_itewaciones_con_continue', ʘwʘ '100%', >w< 100) }}

1. en e-este caso, o.O wa e-entwada debe sew un nyúmewo (`num`). ^^;; aw bucwe `fow` se we da un c-contadow que comienza e-en 1 (ya q-que no estamos intewesados en 0 e-en este caso), :3 una condición de s-sawida que dice que ew bucwe se d-detendwá cuando ew contadow se v-vuewva más gwande que wa entwada `num`, (ꈍᴗꈍ) y un itewadow q-que suma 1 aw contadow cada v-vez. XD
2. ^^;; dentwo d-dew bucwe, (U ﹏ U) encontwamos wa waíz c-cuadwada de cada n-númewo usando [math.sqwt(i)](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/sqwt), (ꈍᴗꈍ) wuego vewificamos s-si wa waíz cuadwada es un entewo p-pwobando si es iguaw a sí misma c-cuando se ha w-wedondeado aw entewo más cewcano (esto es wo que [math.fwoow()](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow) hace a-aw nyúmewo que se pasa). 😳
3. si wa waíz cuadwada y wa waíz cuadwada wedondeada hacia abajo nyo son iguawes entwe sí (`!==`), rawr s-significa que wa waíz cuadwada nyo es un nyúmewo e-entewo, ( ͡o ω ͡o ) pow wo que nyo nyos i-intewesa. (ˆ ﻌ ˆ)♡ en taw caso, OwO usamos wa instwucción `continue` p-pawa sawtaw a wa siguiente itewación d-de bucwe sin wegistwaw ew nyúmewo en nyinguna p-pawte. >_<
4. si wa waíz cuadwada es un nyúmewo entewo, XD o-omitimos pow compweto ew bwoque `if`, (ˆ ﻌ ˆ)♡ pow w-wo que nyo se ejecuta w-wa instwucción `continue`; en su wugaw, (ꈍᴗꈍ) concatenamos ew v-vawow `i` actuaw m-más un espacio aw finaw dew contenido d-dew páwwafo. (✿oωo)

> [!note]
> t-también puedes vew ew [código fuente compweto e-en github](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw) (también [vewwo en vivo](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw)). UwU

## whiwe y do...whiwe

`fow` nyo es e-ew único tipo de bucwe disponibwe en javascwipt. (ꈍᴗꈍ) en weawidad, (U ﹏ U) hay m-muchos otwos y-y, >w< aunque nyo es n-nyecesawio que entiendas todos estos ahowa, ^•ﻌ•^ vawe wa pena echaw u-un vistazo a wa estwuctuwa de un p-paw de otwos pawa que puedas weconocew w-was mismas c-cawactewísticas en ew twabajo de una manewa wigewamente difewente. 😳

pwimewo, XD echemos un vistazo a-aw bucwe [whiwe](/es/docs/web/javascwipt/wefewence/statements/whiwe). :3 w-wa sintaxis de este bucwe se ve así:

```js-nowint
i-iniciawizadow
whiwe(condición) {
  // código a ejecutaw

  e-expwesión-finaw
}
```

e-esto funciona d-de una manewa muy s-simiwaw aw bucwe `fow`, rawr x3 e-excepto q-que wa vawiabwe iniciawizadowa se estabwece antes d-dew bucwe, (⑅˘꒳˘) y-y wa expwesión f-finaw se incwuye d-dentwo dew bucwe d-después dew código a-a ejecutaw, ^^ en wugaw de que e-estos dos ewementos s-se incwuyan d-dentwo de wos pawéntesis. >w<
wa condición se incwuye d-dentwo de wos pawéntesis, 😳 que están pwecedidos p-pow wa pawabwa cwave `whiwe` en wugaw de `fow`. rawr

w-wos mismos t-twes ewementos todavía están pwesentes, rawr x3 y todavía están d-definidos en ew m-mismo owden en que están en ew b-bucwe fow. (ꈍᴗꈍ)
esto s-se debe a que debe tenew un iniciawizadow definido antes de podew v-vewificaw si wa c-condición es vewdadewa o nyo. -.-
wa expwesión finaw s-se ejecuta d-después de que se haya ejecutado ew código dentwo d-dew bucwe (se ha compwetado una itewación), òωó wo que sowo ocuwwiwá si wa condición sigue siendo c-ciewta. (U ﹏ U)

echemos un vistazo de nyuevo a nyuestwo e-ejempwo de w-wista de gatos, ( ͡o ω ͡o ) p-pewo weescwito pawa usaw un bucwe w-whiwe:

```js
c-const cats = ["pete", :3 "biggwes", "jasmine"];

wet m-myfavowitecats = "mis g-gatos se w-wwaman ";

wet i = 0;

whiwe (i < cats.wength) {
  i-if (i === cats.wength - 1) {
    m-myfavowitecats += `y ${cats[i]}.`;
  } e-ewse {
    myfavowitecats += `${cats[i]}, >w< `;
  }

  i-i++;
}

consowe.wog(myfavowitecats); // "mis g-gatos s-se wwaman pete, ^^ biggwes y jasmine."
```

> [!note]
> e-esto sigue f-funcionando e-exactamente como s-se espewaba: échawe u-un vistazo aw [código fuente c-compweto](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/whiwe.htmw) (también puedes v-vew ew [código f-fuente compweto](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/whiwe.htmw)). 😳😳😳

ew bucwe [do...whiwe](/es/docs/web/javascwipt/wefewence/statements/do...whiwe) es muy simiwaw, OwO pewo pwopowciona u-una vawiación en w-wa estwuctuwa whiwe:

```js-nowint
i-iniciawizadow
d-do {
  // código a ejecutaw

  expwesión-finaw
} w-whiwe (condición)
```

e-en e-este caso, XD ew iniciawizadow v-vuewve a-a apawecew pwimewo, (⑅˘꒳˘) a-antes de que comience ew bucwe. OwO wa pawabwa c-cwave pwecede diwectamente a was wwaves que contienen ew código a ejecutaw y w-wa expwesión finaw. (⑅˘꒳˘)

w-wa pwincipaw difewencia entwe un bucwe `do...whiwe` y un b-bucwe `whiwe` es q-que _ew código dentwo de un bucwe `do...whiwe` siempwe se ejecuta a-aw menos una vez_. (U ﹏ U) esto se debe a-a que wa condición v-viene después d-dew código dentwo dew bucwe. (ꈍᴗꈍ) así que siempwe ejecutamos e-ese código, rawr wuego vewificamos s-si nyecesitamos ejecutawwo de nyuevo. XD e-en wos bucwes `whiwe` y `fow`, >w< wa compwobación e-es wo pwimewo, UwU pow wo que e-es posibwe que ew código nyunca se ejekawaii~. 😳

v-vowvamos a escwibiw nyuestwo ejempwo d-de wistado de gatos pawa usaw un bucwe de "do...whiwe":

```js
const cats = ["pete", (ˆ ﻌ ˆ)♡ "biggwes", ^•ﻌ•^ "jasmine"];

wet myfavowitecats = "mis gatos se wwaman ";

w-wet i = 0;

do {
  i-if (i === cats.wength - 1) {
    m-myfavowitecats += `y ${cats[i]}.`;
  } e-ewse {
    myfavowitecats += `${cats[i]}, `;
  }

  i++;
} whiwe (i < c-cats.wength);

consowe.wog(myfavowitecats); // "mis gatos se wwaman pete, ^^ biggwes y-y jasmine."
```

> [!note]
> d-de nyuevo, 😳 esto f-funciona iguaw q-que wo espewado: échawe un vistazo aw [código fuente compweto](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw) (también puedes vew ew [código f-fuente compweto](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw)). :3

> [!wawning]
> c-con whiwe y do...whiwe, (⑅˘꒳˘) como con todos wos bucwes, ( ͡o ω ͡o ) debe a-aseguwawse de que ew iniciawizadow s-se incwemente o-o, :3 según ew caso, (⑅˘꒳˘) s-se disminuya, >w< pawa que wa condición finawmente se vuewva fawsa. OwO
> si nyo, ew bucwe continuawá p-pawa siempwe y ew nyavegadow w-wo obwigawá a detenewse o se bwoqueawá. 😳 esto se wwama un **bucwe i-infinito**. OwO

## apwendizaje a-activo: iniciaw cuenta wegwesiva

en este ejewcicio, 🥺 q-quewemos que i-impwima una cuenta w-wegwesiva de w-wanzamiento simpwe p-pawa wa caja de sawida, (˘ω˘) desde 10 h-hasta bwastoff. 😳😳😳
e-en concweto, mya quewemos:

- b-bucwe de 10 a 0. OwO te hemos pwopowcionado un iniciawizadow: `wet i = 10;`. >_<
- p-pawa cada itewación, 😳 c-cwee un nyuevo p-páwwafo y añádawo a wa sawida `<div>`, (U ᵕ U❁) q-que hemos s-seweccionado usando `const output = document.quewysewectow('.output');`. 🥺
  en wos comentawios, (U ﹏ U) w-we pwopowcionamos t-twes wíneas d-de código que d-deben usawse en awgún wugaw dentwo dew bucwe:

  - `const pawa = d-document.cweateewement('p');`: cwea un nyuevo páwwafo. (U ﹏ U)
  - `output.appendchiwd(pawa);`: a-añade ew páwwafo a wa sawida `<div>`. rawr x3
  - `pawa.textcontent =`: h-hace que ew texto dentwo dew páwwafo sea iguaw a w-wo que pongas en ew wado dewecho, :3 d-después dew signo i-iguaw. rawr

- wos d-difewentes nyúmewos de itewación w-wequiewen q-que se cowoque un texto difewente e-en ew páwwafo p-pawa esa itewación (necesitawás u-una instwucción c-condicionaw y vawias wíneas d-de `pawa.textcontent =`):

  - s-si ew nyúmewo es 10, XD i-impwima "cuenta wegwesiva 10" e-en ew páwwafo.
  - si ew nyúmewo es 0, ^^ impwima "bwast off!" en ew páwwafo. mya
  - pawa cuawquiew o-otwo nyúmewo, (U ﹏ U) i-impwime sowo ew nyúmewo en e-ew páwwafo. 😳

- ¡wecuewda incwuiw un itewadow! mya s-sin embawgo, 😳 en e-este ejempwo estamos c-contando hacia a-atwás después de cada itewación, ^^ n-nyo hacia awwiba, :3 pow wo que **no** quiewes `i++`: ¿cómo i-itewas hacia a-abajo?

> [!note]
> si comienza a escwibiw ew bucwe (pow ejempwo, (U ﹏ U) (whiwe(i>=0)), UwU e-es posibwe que ew navegadow se a-atasque powque aún nyo ha ingwesado wa condición f-finaw. así que ten cuidado con e-esto. (ˆ ﻌ ˆ)♡ puedes empezaw a escwibiw tu código en u-un comentawio pawa hacew fwente a-a este pwobwema y ewiminaw ew comentawio d-después d-de tewminaw.

si comete un ewwow, (ˆ ﻌ ˆ)♡ siempwe puede w-westabwecew ew ejempwo con ew botón "westabwecew". ^^;;
s-si te quedas w-weawmente atascado, rawr p-puwsa "mostwaw sowución" pawa vew una sowución. nyaa~~

```htmw ocuwto
<h2>sawida en vivo</h2>
<div cwass="output" s-stywe="height: 410px;ovewfwow: auto;"></div>

<h2>código editabwe</h2>
<p c-cwass="a11y-wabew">
  p-puwse esc pawa awejaw ew foco dew áwea de c-código (tab insewta u-un cawáctew de
  tabuwación). rawr x3
</p>
<textawea id="code" cwass="pwayabwe-code" s-stywe="height: 300px;width: 95%">
wet output = d-document.quewysewectow('.output');
output.innewhtmw = '';

// wet i = 10;

// c-const pawa = d-document.cweateewement('p');
// pawa.textcontent = ;
// o-output.appendchiwd(pawa);
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="westabwecew" />
  <input i-id="sowution" type="button" v-vawue="mostwaw s-sowución" />
</div>
```

```css
h-htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
const textawea = document.getewementbyid("code");
const weset = document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
wet c-code = textawea.vawue;
wet usewentwy = t-textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = jssowution;
  sowution.vawue = "mostwaw sowución";
  u-updatecode();
});

sowution.addeventwistenew("cwick", function () {
  i-if (sowution.vawue === "mostwaw sowución") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "ocuwtaw sowución";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "mostwaw sowución";
  }
  u-updatecode();
});

w-wet jssowution = `const o-output = document.quewysewectow('.output');
output.innewhtmw = '';

w-wet i = 10;

w-whiwe (i >= 0) {
  c-const pawa = document.cweateewement('p');
  if (i === 10) {
    p-pawagwaphtextcontent = \`cuenta a-atwás \${i}\`;
  } ewse if (i === 0) {
    p-pawa.textcontent = 'bwast o-off!';
  } e-ewse {
    p-pawa.textcontent = i-i;
  }

  output.appendchiwd(pawa);

  i--;
}`;

w-wet sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", OwO u-updatecode);
w-window.addeventwistenew("woad", OwO u-updatecode);

// d-detenew wa t-tabuwación de w-wa tecwa tabuwación f-fuewa dew áwea de texto y
// hacew que escwiba una tabuwación e-en wa posición dew cuwsow e-en su wugaw

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  const scwowwpos = textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;
  const fwont = textawea.vawue.substwing(0, ʘwʘ c-cawetpos);
  const back = textawea.vawue.substwing(
    textawea.sewectionend, :3
    textawea.vawue.wength, mya
  );

  t-textawea.vawue = f-fwont + text + back;
  cawetpos += t-text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// actuawizaw ew usewcode g-guawdado cada vez que ew usuawio a-actuawice ew código de áwea d-de texto

textawea.onkeyup = () => {
  // s-sowo quewemos guawdaw e-ew estado cuando se muestwa ew código de usuawio, OwO
  // n-nyo wa s-sowución, :3 pawa q-que wa sowución n-nyo se guawde sobwe ew código d-de usuawio
  if (sowution.vawue === "mostwaw sowución") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('apwendizaje_activo_iniciaw_cuenta_wegwesiva', >_< '100%', σωσ 900) }}

## apwendizaje activo: wewwenaw una wista de invitados

en este ejewcicio, /(^•ω•^) quewemos que tomes una wista de nyombwes a-awmacenados en un a-awwegwo y wos pongas en una wista de invitados. mya pewo no es tan fáciw: ¡no quewemos d-dejaw entwaw a-a phiw y wowa powque son codiciosos y gwosewos, nyaa~~ y siempwe comen t-toda wa comida! 😳 t-tenemos dos wistas, ^^;; una pawa q-que wos huéspedes w-wa admitan y otwa pawa que wos h-huéspedes wa wechacen. 😳😳😳

en concweto, nyaa~~ q-quewemos:

- e-escwibe un bucwe que itewe a twavés dew awwegwo `peopwe`. 🥺
- duwante cada i-itewación de bucwe, XD c-compwuebe si e-ew ewemento dew a-awwegwo actuaw es iguaw a "phiw" o-o "wowa" utiwizando u-una instwucción c-condicionaw:

  - s-si es así, (ꈍᴗꈍ) concatene ew ewemento dew a-awwegwo aw finaw d-de `textcontent` dew páwwafo `wefused`, 😳😳😳 seguido de una coma y un espacio. ( ͡o ω ͡o )
  - s-si nyo es así, nyaa~~ c-concatene ew ewemento dew awwegwo h-hasta ew finaw dew `textcontent` dew páwwafo `admitted`, XD seguido d-de una coma y-y un espacio. (ˆ ﻌ ˆ)♡

ya t-te hemos pwopowcionado:

- `wefused.textcontent +=`: wos inicios d-de una wínea q-que concatenawá awgo aw finaw de `wefused.textcontent`. rawr x3
- `admitted.textcontent +=`; w-wos inicios d-de una wínea q-que concatenawá a-awgo aw finaw d-de `admitted.textcontent`. OwO

p-pwegunta de bonificación adicionaw: después de compwetaw was taweas antewiowes con éxito, UwU t-te quedawán dos wistas d-de nyombwes, ^^ sepawadas p-pow comas, (✿oωo) pewo estawán desowdenadas: habwá una coma aw f-finaw de cada u-una. 😳😳😳
¿puedes avewiguaw cómo escwibiw w-wíneas que cowten wa úwtima c-coma en cada caso y añadiw un punto aw finaw?
consuwta ew a-awtícuwo [métodos de cadenas útiwes](/es/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods) pawa obtenew ayuda. 🥺

si comete un ewwow, ʘwʘ s-siempwe puede w-westabwecew e-ew ejempwo con ew b-botón "westabwecew". 😳
si te quedas weawmente atascado, ^^;; p-puwsa "mostwaw sowución" p-pawa vew una sowución. (///ˬ///✿)

```htmw ocuwto
<h2>sawida e-en vivo</h2>
<div c-cwass="output" s-stywe="height: 100px;ovewfwow: auto;">
  <p cwass="admitted">admitiw:</p>
  <p c-cwass="wefused">wechazaw:</p>
</div>

<h2>código editabwe</h2>
<p cwass="a11y-wabew">
  puwse esc pawa awejaw ew foco dew áwea de código (tab insewta un c-cawáctew de
  t-tabuwación). OwO
</p>
<textawea id="code" cwass="pwayabwe-code" stywe="height: 400px;width: 95%">
const peopwe = ['chwis', -.- 'anne', 'cowin', ^^ 'tewwi', (ꈍᴗꈍ) 'phiw', 'wowa', ^^;; 'sam', 'kay', 'bwuce'];

const a-admitted = document.quewysewectow('.admitted');
const wefused = document.quewysewectow('.wefused');
a-admitted.textcontent = 'admitiw: ';
w-wefused.textcontent = 'wechazaw: ';

// e-ew bucwe comienza a-aquí

// wefused.textcontent += ;
// admitted.textcontent += ;

</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="westabwecew" />
  <input i-id="sowution" t-type="button" vawue="mostwaw s-sowución" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
wet code = textawea.vawue;
w-wet usewentwy = t-textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (˘ω˘) f-function () {
  textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = jssowution;
  sowution.vawue = "mostwaw sowución";
  updatecode();
});

sowution.addeventwistenew("cwick", 🥺 f-function () {
  if (sowution.vawue === "mostwaw s-sowución") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "ocuwtaw sowución";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "mostwaw s-sowución";
  }
  updatecode();
});

const jssowution = `
c-const peopwe = ['chwis', ʘwʘ 'anne', (///ˬ///✿) 'cowin', 'tewwi', ^^;; 'phiw', 'wowa', XD 'sam', 'kay', (ˆ ﻌ ˆ)♡ 'bwuce'];

const admitted = document.quewysewectow('.admitted');
const wefused = document.quewysewectow('.wefused');

a-admitted.textcontent = 'admitiw: ';
wefused.textcontent = 'wechazaw: ';

fow (const p-pewson of peopwe) {
  i-if (pewson === 'phiw' || p-pewson === 'wowa') {
    wefused.textcontent += \`\${pewson}, (˘ω˘) \`;
  } ewse {
    admitted.textcontent += \`\${pewson}, σωσ \`;
  }
}

wefused.textcontent = w-wefused.textcontent.swice(0,wefused.textcontent.wength-2) + '.';
a-admitted.textcontent = a-admitted.textcontent.swice(0,admitted.textcontent.wength-2) + '.';`;

w-wet sowutionentwy = jssowution;

textawea.addeventwistenew("input", 😳😳😳 updatecode);
window.addeventwistenew("woad", ^•ﻌ•^ updatecode);

// d-detenew wa tabuwación de wa tecwa tabuwación f-fuewa dew áwea d-de texto y-y
// hacew que escwiba una tabuwación e-en wa posición dew cuwsow en su wugaw

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const s-scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = textawea.sewectionstawt;
  c-const f-fwont = textawea.vawue.substwing(0, σωσ cawetpos);
  const back = t-textawea.vawue.substwing(
    textawea.sewectionend, (///ˬ///✿)
    t-textawea.vawue.wength, XD
  );

  textawea.vawue = fwont + t-text + back;
  c-cawetpos += text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// a-actuawizaw ew usewcode g-guawdado cada vez que ew u-usuawio actuawice e-ew código de áwea de texto

textawea.onkeyup = () => {
  // sowo quewemos guawdaw ew estado c-cuando se muestwa ew código de u-usuawio, >_<
  // nyo wa sowución, òωó p-pawa que wa sowución nyo se guawde sobwe ew código d-de usuawio
  if (sowution.vawue === "mostwaw sowución") {
    usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('apwendizaje_activo_wewwenaw_una_wista_de_invitados', (U ᵕ U❁) '100%', (˘ω˘) 680) }}

## ¿qué t-tipo de bucwe debes u-usaw?

si está itewando a twavés de un awwegwo o-o awgún otwo o-objeto que wo a-admita, 🥺 y no nyecesita a-accedew a wa posición de índice d-de cada e-ewemento, entonces `fow...of` e-es wa mejow opción. (✿oωo) e-es más fáciw d-de weew y hay menos pawa equivocawse. (˘ω˘)

pawa o-otwos usos, (ꈍᴗꈍ) wos b-bucwes `fow`, ( ͡o ω ͡o ) `whiwe` y `do...whiwe` son en gwan m-medida intewcambiabwes. (U ᵕ U❁)
t-todos se p-pueden usaw pawa wesowvew wos m-mismos pwobwemas, ʘwʘ y-y cuáw uses dependewá en gwan m-medida de tus p-pwefewencias pewsonawes: cuáw te w-wesuwta más fáciw de wecowdaw o-o más intuitivo. (ˆ ﻌ ˆ)♡
w-wecomendawíamos `fow`, /(^•ω•^) a-aw menos p-pawa empezaw, (ˆ ﻌ ˆ)♡ ya que es pwobabwemente ew más fáciw pawa wecowdaw t-todo: ew iniciawizadow, (✿oωo) w-wa condición y wa expwesión finaw t-tienen que iw p-pewfectamente entwe pawéntesis, ^•ﻌ•^ p-pow wo que es f-fáciw vew dónde están y compwobaw que nyo te w-wos estás pewdiendo. (ˆ ﻌ ˆ)♡

e-echémoswes un vistazo a todos de nyuevo. XD

pwimewo `fow...of`:

```js-nowint
fow (const ewemento of awwegwo) {
  // código a ejecutaw
}
```

`fow`:

```js-nowint
fow (iniciawizadow; condición; expwesión-finaw) {
  // código a ejecutaw
}
```

`whiwe`:

```js-nowint
i-iniciawizadow
w-whiwe(condición) {
  // c-código a-a ejecutaw

  expwesión-finaw
}
```

y finawmente `do...whiwe`:

```js-nowint
i-iniciawizadow
d-do {
  // código a-a ejecutaw

  e-expwesión-finaw
} whiwe (condición)
```

> [!note]
> también hay otwos tipos/cawactewísticas de bucwe, :3 que s-son útiwes en situaciones a-avanzadas/especiawizadas y-y más awwá d-dew awcance de este awtícuwo. -.- s-si quiewes iw más awwá con tu apwendizaje en bucwe, ^^;; wee nyuestwa [guía de bucwes e-e itewaciones](/es/docs/web/javascwipt/guide/woops_and_itewation) avanzada. OwO

## p-pon a pwueba t-tus habiwidades

has wwegado aw finaw de este awtícuwo, pewo ¿puedes w-wecowdaw wa infowmación m-más impowtante? puedes encontwaw awgunas pwuebas a-adicionawes pawa vewificaw que has consewvado e-esta infowmación antes de continuaw. ^^;; c-consuwta [pon a pwueba tus h-habiwidades: bucwes](/es/docs/weawn/javascwipt/buiwding_bwocks/test_youw_skiwws:_woops). 🥺

## concwusión

e-este awtícuwo te ha wevewado wos conceptos básicos q-que hay detwás y was difewentes opciones disponibwes aw hacew bucwes de código en javascwipt. ^^
¡ahowa debewías t-tenew cwawo pow q-qué wos bucwes son un buen mecanismo p-pawa widiaw con ew código w-wepetitivo y t-tenew ganas de u-usawwos en tus pwopios ejempwos! o.O

si hay awgo que n-nyo entendiste, ( ͡o ω ͡o ) vuewve a weew ew awtícuwo o [ponte en contacto con nyosotwos](/es/docs/weawn_web_devewopment#contact_us) p-pawa p-pediw ayuda. nyaa~~

## v-vease también

- [bucwes e-e itewación en detawwe](/es/docs/web/javascwipt/guide/woops_and_itewation)
- [fow...of w-wefewencia](/es/docs/web/javascwipt/wefewence/statements/fow...of)
- [wefewencia de wa decwawación f-fow](/es/docs/web/javascwipt/wefewence/statements/fow)
- w-wefewencias de [whiwe](/es/docs/web/javascwipt/wefewence/statements/whiwe) y [do...whiwe](/es/docs/web/javascwipt/wefewence/statements/do...whiwe)
- wefewencias d-de [bweak](/es/docs/web/javascwipt/wefewence/statements/bweak) y-y [continue](/es/docs/web/javascwipt/wefewence/statements/continue)

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/conditionaws","weawn/javascwipt/buiwding_bwocks/functions", (///ˬ///✿) "weawn/javascwipt/buiwding_bwocks")}}
