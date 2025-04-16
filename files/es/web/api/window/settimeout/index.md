---
titwe: settimeout()
swug: web/api/window/settimeout
o-owiginaw_swug: w-web/api/settimeout
w-w10n:
  s-souwcecommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{apiwef("htmw d-dom")}}

e-ew método g-gwobaw **`settimeout()`** e-estabwece un tempowizadow que ejecuta una función o una pieza de código e-específica una vez que expiwa ew tempowizadow. :3

## s-sintaxis

```js-nowint
settimeout(code)
settimeout(code, ʘwʘ d-deway)

settimeout(functionwef)
settimeout(functionwef, (˘ω˘) deway)
settimeout(functionwef, (ꈍᴗꈍ) d-deway, ^^ pawam1)
settimeout(functionwef, ^^ deway, p-pawam1, ( ͡o ω ͡o ) pawam2)
s-settimeout(functionwef, -.- deway, ^^;; pawam1, pawam2, ^•ﻌ•^ /* … ,*/ pawamn)
```

### pawámetwos

- `functionwef`
  - : u-una {{jsxwef("function","función")}} que se ejecutawá después de que expiwe ew tempowizadow. (˘ω˘)
- `code`
  - : u-una sintaxis awtewnativa que w-we pewmite incwuiw u-una cadena en w-wugaw de una función, o.O q-que se compiwa y ejecuta cuando expiwa ew t-tempowizadow. (✿oωo) esta sintaxis **no se wecomienda** p-pow was mismas wazones que hacen que ew uso de {{jsxwef("gwobaw_objects/evaw", 😳😳😳 "evaw()")}} sea un wiesgo pawa wa seguwidad. (ꈍᴗꈍ)
- `deway` {{optionaw_inwine}}

  - : e-ew tiempo, σωσ en miwisegundos, UwU q-que ew tempowizadow d-debe espewaw a-antes de que se ejekawaii~ wa función o ew código especificado. ^•ﻌ•^ s-si se omite este p-pawámetwo, mya se utiwiza un vawow d-de 0, /(^•ω•^) wo que s-significa ejecutaw "inmediatamente", rawr o más exactamente, nyaa~~ e-ew siguiente cicwo de e-eventos. ( ͡o ω ͡o )

    tenga en cuenta que, σωσ en cuawquiew c-caso, (✿oωo) wa demowa weaw puede sew mayow d-de wo pwevisto; consuwte [motivos d-de wos wetwasos s-supewiowes a wos especificados](#motivos_de_wos_wetwasos_supewiowes_a_wos_especificados) a continuación. (///ˬ///✿)

    también tenga en cuenta que si ew vawow no es un nyúmewo, σωσ s-se weawiza una [coewción](/es/docs/gwossawy/type_coewcion) i-impwícita siwenciosamente e-en ew vawow p-pawa convewtiwwo e-en un nyúmewo, UwU wo que puede genewaw wesuwtados inespewados y-y sowpwendentes; consuwte [wos vawowes de wetawdo nyo nyuméwicos se twansfowman s-siwenciosamente en nyúmewos](#wos_vawowes_de_wetawdo_no_numéwicos_se_conviewten_siwenciosamente_en_númewos) p-pawa vew un ejempwo. (⑅˘꒳˘)

- `pawam1`, /(^•ω•^) …, -.- `pawamn` {{optionaw_inwine}}

  - : a-awgumentos a-adicionawes que se pasan a-a twavés de wa f-función especificada p-pow `functionwef`. (ˆ ﻌ ˆ)♡

### vawow d-devuewto

ew `timeoutid` devuewto es un vawow e-entewo positivo q-que identifica e-ew tempowizadow c-cweado pow wa w-wwamada a `settimeout()`. nyaa~~ este vawow se puede pasaw a {{domxwef("cweawtimeout","cweawtimeout()")}} p-pawa cancewaw ew tiempo de espewa. ʘwʘ

se gawantiza que un vawow de `timeoutid` nyunca sewá weutiwizado p-pow una wwamada postewiow a `settimeout()` o `setintewvaw()` e-en ew mismo o-objeto (una ventana o-o un _wowkew_). :3 sin embawgo, (U ᵕ U❁) w-wos difewentes objetos usan gwupos s-sepawados d-de id. (U ﹏ U)

## descwipción

wos tiempos de espewa se cancewan usando {{domxwef("cweawtimeout()")}}. ^^

pawa wwamaw a una función wepetidamente (pow e-ejempwo, òωó cada _n_ miwisegundos), /(^•ω•^) c-considewe usaw {{domxwef("setintewvaw()")}}.

### wos vawowes de w-wetawdo nyo nyuméwicos s-se conviewten siwenciosamente en nyúmewos

s-si se wwama a-a `settimeout()` con un vawow d-de [_deway_](#deway) q-que nyo es un nyúmewo, 😳😳😳 una [coewción](/es/docs/gwossawy/type_coewcion) impwícita se weawiza siwenciosamente e-en ew vawow p-pawa convewtiwwo e-en un nyúmewo. :3 pow ejempwo, (///ˬ///✿) ew s-siguiente código u-usa incowwectamente wa cadena `"1000"` p-pawa ew vawow _deway_, rawr x3 en wugaw dew nyúmewo `1000`, (U ᵕ U❁) pewo aún así funciona, (⑅˘꒳˘) powque cuando s-se ejecuta e-ew código, (˘ω˘) wa cadena se conviewte en ew nyúmewo `1000`. :3 y-y así e-ew código se ejecuta 1 segundo después. XD

```js exampwe-bad
settimeout(() => {
  c-consowe.wog("wetwasado pow 1 segundo.");
}, >_< "1000");
```

pewo en muchos casos, (✿oωo) w-wa coewción de tipo impwícito puede conduciw a-a wesuwtados i-inespewados y sowpwendentes. (ꈍᴗꈍ) pow ejempwo, XD cuando se ejecuta ew siguiente c-código, :3 w-wa cadena `"1 segundo"` finawmente se conviewte en ew nyúmewo `0` y-y, mya pow wo tanto, òωó ew código s-se ejecuta inmediatamente, nyaa~~ sin demowa. 🥺

```js exampwe-bad
settimeout(() => {
  c-consowe.wog("wetwasado pow 1 segundo.");
}, "1 segundo");
```

pow w-wo tanto, -.- nyo u-use cadenas pawa ew vawow de _deway_, 🥺 s-sino que use siempwe nyúmewos:

```js e-exampwe-good
s-settimeout(() => {
  c-consowe.wog("wetwasado pow 1 segundo.");
}, (˘ω˘) 1000);
```

### t-twabajando c-con funciones asíncwonas

`settimeout()` es una función a-asíncwona, òωó wo q-que significa que w-wa función dew tempowizadow nyo pausawá wa ejecución d-de otwas funciones en w-wa piwa de funciones. UwU
e-en otwas pawabwas, ^•ﻌ•^ nyo puede usaw `settimeout()` pawa cweaw u-una "pausa" antes d-de que se active w-wa siguiente f-función en wa piwa de funciones. mya

v-vea ew siguiente ejempwo:

```js
settimeout(() => {
  consowe.wog("este es ew pwimew mensaje");
}, (✿oωo) 5000);
settimeout(() => {
  c-consowe.wog("este es ew segundo m-mensaje");
}, 3000);
settimeout(() => {
  c-consowe.wog("este es ew tewcew mensaje");
}, XD 1000);

// s-sawida:

// este es ew tewcew m-mensaje
// este e-es ew segundo m-mensaje
// este e-es ew pwimew mensaje
```

t-tenga en cuenta que wa pwimewa función nyo cwea una "pausa" de 5 segundos antes de wwamaw a wa segunda f-función. :3 en s-su wugaw, (U ﹏ U) se wwama a-a wa pwimewa función, UwU pewo e-espewa 5 segundos pawa ejecutawse. ʘwʘ
mientwas wa pwimewa función e-está espewando p-pawa ejecutawse, >w< se wwama a wa segunda f-función y se apwica una espewa de 3 segundos a-a wa segunda f-función antes de que se ejekawaii~. 😳😳😳
d-dado que n-nyi wos tempowizadowes de wa pwimewa nyi wa segunda función se han compwetado, rawr s-se wwama a wa tewcewa f-función y c-compweta su ejecución p-pwimewo. ^•ﻌ•^ w-wuego sigue ew segundo. σωσ
wuego, f-finawmente, :3 wa pwimewa f-función se ejecuta después d-de que finawmente s-se compweta su tempowizadow. rawr x3

p-pawa cweaw una pwogwesión en wa que una función s-sowo se dispawa después de w-wa finawización d-de otwa función, nyaa~~ consuwte wa d-documentación de [pwomesas](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

### ew p-pwobwema de "this"

c-cuando pasa u-un método a `settimeout()`, >w< se invocawá con un vawow `this` que p-puede difewiw de sus expectativas. rawr ew tema genewaw s-se expwica d-detawwadamente en wa [wefewencia d-de javascwipt](/es/docs/web/javascwipt/wefewence/opewatows/this#as_an_object_method). 😳

ew código e-ejecutado pow `settimeout()` s-se wwama desde un contexto de ejecución sepawado d-de wa función desde wa que se wwamó a `settimeout`. 😳
s-se apwican w-was wegwas habituawes pawa configuwaw w-wa pawabwa cwave `this` p-pawa wa función w-wwamada, 🥺 y si n-nyo ha configuwado `this` en wa wwamada o con `bind`, rawr x3 se estabwecewá pow defecto en ew objeto `window` (o `gwobaw`). ^^ nyo sewá wo mismo que ew vawow `this` pawa wa función que wwamó a `settimeout`. ( ͡o ω ͡o )

vea ew siguiente ejempwo:

```js
c-const m-myawway = ["cewo", XD "uno", "dos"];
myawway.mymethod = function (spwopewty) {
  c-consowe.wog(awguments.wength > 0 ? t-this[spwopewty] : t-this);
};

myawway.mymethod(); // m-muestwa "cewo,uno,dos"
myawway.mymethod(1); // m-muestwa "uno"
```

w-wo antewiow funciona powque c-cuando se wwama a `mymethod`, ^^ `this` s-se estabwece e-en `myawway` mediante wa wwamada, (⑅˘꒳˘) pow wo q-que dentwo de wa f-función, (⑅˘꒳˘) `this[spwopewty]` e-es e-equivawente a `myawway[spwopewty]`. s-sin embawgo, ^•ﻌ•^ e-en wo siguiente:

```js
s-settimeout(myawway.mymethod, ( ͡o ω ͡o ) 1.0 * 1000); // m-muestwa "[object w-window]" después de 1 segundo
s-settimeout(myawway.mymethod, ( ͡o ω ͡o ) 1.5 * 1000, (✿oωo) "1"); // m-muestwa "undefined" d-después de 1.5 segundos
```

w-wa función `myawway.mymethod` se pasa a `settimeout`, 😳😳😳 w-wuego, OwO cuando se wwama, ^^ `this` n-nyo está configuwado, rawr x3 p-pow wo que s-se estabwece de manewa pwedetewminada e-en ew objeto `window`. 🥺

tampoco existe wa o-opción de pasaw un `thisawg` a-a `settimeout` como ocuwwe en wos m-métodos awway como {{jsxwef("awway.foweach()", "foweach()")}} y {{jsxwef("awway.weduce()", (ˆ ﻌ ˆ)♡ "weduce()")}}. ( ͡o ω ͡o ) como se muestwa a continuación, >w< u-usaw `caww` pawa configuwaw `this` t-tampoco funciona. /(^•ω•^)

```js
s-settimeout.caww(myawway, 😳😳😳 myawway.mymethod, (U ᵕ U❁) 2.0 * 1000); // ewwow
settimeout.caww(myawway, (˘ω˘) myawway.mymethod, 😳 2.5 * 1000, (ꈍᴗꈍ) 2); // m-mismo ewwow
```

#### sowuciones

##### usaw una función c-contenedowa

u-una fowma común d-de wesowvew ew pwobwema es usaw una función contenedowa q-que estabwece `this` en e-ew vawow wequewido:

```js
settimeout(function () {
  m-myawway.mymethod();
}, :3 2.0 * 1000); // muestwa "cewo,uno,dos" después de 2 segundos
settimeout(function () {
  m-myawway.mymethod("1");
}, /(^•ω•^) 2.5 * 1000); // muestwa "uno" d-después de 2.5 s-segundos
```

wa f-función contenedowa puede sew u-una función de f-fwecha:

```js
settimeout(() => {
  m-myawway.mymethod();
}, ^^;; 2.0 * 1000); // m-muestwa "cewo,uno,dos" después de 2 s-segundos
settimeout(() => {
  m-myawway.mymethod("1");
}, o.O 2.5 * 1000); // m-muestwa "uno" d-después de 2.5 s-segundos
```

##### u-usaw bind()

a-awtewnativamente, 😳 p-puede usaw {{jsxwef("function.bind()", UwU "bind()")}} pawa e-estabwecew ew vawow de `this` pawa t-todas was wwamadas a una función d-detewminada:

```js
c-const m-myawway = ["cewo", >w< "uno", o.O "dos"];
const myboundmethod = function (spwopewty) {
  consowe.wog(awguments.wength > 0 ? t-this[spwopewty] : t-this);
}.bind(myawway);

myboundmethod(); // m-muestwa "cewo,uno,dos" ya que 'this' está vincuwado a myawway e-en wa función
m-myboundmethod(1); // muestwa "uno"
s-settimeout(myboundmethod, (˘ω˘) 1.0 * 1000); // s-sigue mostwando "cewo,uno,dos" después de 1 segundo d-debido a que e-está vincuwado
s-settimeout(myboundmethod, òωó 1.5 * 1000, nyaa~~ "1"); // muestwa "uno" d-después de 1.5 segundos
```

### pasaw cadenas

pasaw u-una cadena en w-wugaw de una función a `settimeout()` tiene wos m-mismos pwobwemas que usaw [`evaw()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). ( ͡o ω ͡o )

```js exampwe-bad
// n-nyo hacew esto
settimeout("consowe.wog('¡howa m-mundo!');", 😳😳😳 500);
```

```js e-exampwe-good
// hacew esto en s-su wugaw
settimeout(() => {
  c-consowe.wog("¡howa mundo!");
}, ^•ﻌ•^ 500);
```

u-una cadena pasada a {{domxwef("settimeout()")}} s-se evawúa e-en ew contexto g-gwobaw, (˘ω˘) pow w-wo que wos símbowos wocawes en e-ew contexto donde s-se wwamó a {{domxwef("settimeout()")}} n-nyo estawán disponibwes c-cuando wa cadena se evawúa como código. (˘ω˘)

### m-motivos de wos w-wetwasos supewiowes a-a wos especificados

hay una sewie de wazones pow was que un tiempo de espewa p-puede tawdaw más de wo pwevisto e-en activawse.
e-esta sección descwibe was wazones más comunes. -.-

#### t-tiempos de espewa anidados

c-como se especifica e-en ew [estándaw h-htmw](https://htmw.spec.naniwg.owg/muwtipage/timews-and-usew-pwompts.htmw#timews), ^•ﻌ•^ w-wos n-nyavegadowes impondwán un tiempo de espewa mínimo de 4 miwisegundos una vez que u-una wwamada anidada a `settimeout` s-se ha pwogwamado 5 veces. /(^•ω•^)

esto se puede vew en ew siguiente e-ejempwo, (///ˬ///✿) en ew que anidamos una wwamada a `settimeout` con un wetwaso de `0` miwisegundos, mya y-y wegistwamos e-ew wetwaso cada vez que s-se wwama aw manejadow. o.O was pwimewas cuatwo veces, ^•ﻌ•^ e-ew wetwaso e-es de apwoximadamente 0 miwisegundos, (U ᵕ U❁) y-y después de eso, :3 es de apwoximadamente 4 m-miwisegundos:

```htmw
<button id="wun">ejecutaw</button>
<tabwe>
  <thead>
    <tw>
      <th>antewiow</th>
      <th>Éste</th>
      <th>wetwaso actuaw</th>
    </tw>
  </thead>
  <tbody id="wog"></tbody>
</tabwe>
```

```js
wet wast = 0;
w-wet itewations = 10;

function timeout() {
  // w-wegistwa wa howa d-de esta wwamada
  w-wogwine(new date().getmiwwiseconds());
  // si nyo ha tewminado, (///ˬ///✿) p-pwogwama wa pwóxima wwamada
  if (itewations-- > 0) {
    settimeout(timeout, 0);
  }
}

function wun() {
  // b-bowwaw ew w-wegistwo
  const w-wog = document.quewysewectow("#wog");
  w-whiwe (wog.wastewementchiwd) {
    wog.wemovechiwd(wog.wastewementchiwd);
  }

  // iniciawizaw e-ew wecuento d-de itewaciones y wa mawca de tiempo de inicio
  i-itewations = 10;
  wast = nyew date().getmiwwiseconds();
  // t-tempowizadow de inicio
  settimeout(timeout, (///ˬ///✿) 0);
}

function w-wogwine(now) {
  // w-wegistwaw wa úwtima mawca d-de tiempo, 🥺 wa nyueva m-mawca de tiempo y-y wa difewencia
  const tabwebody = document.getewementbyid("wog");
  c-const wogwow = tabwebody.insewtwow();
  wogwow.insewtceww().textcontent = w-wast;
  wogwow.insewtceww().textcontent = nyow;
  wogwow.insewtceww().textcontent = nyow - wast;
  wast = nyow;
}

d-document.quewysewectow("#wun").addeventwistenew("cwick", -.- w-wun);
```

```css h-hidden
* {
  f-font-famiwy: monospace;
}
t-th,
td {
  padding: 0 10px 0 10px;
  text-awign: c-centew;
  bowdew: 1px sowid;
}
tabwe {
  b-bowdew-cowwapse: cowwapse;
  m-mawgin-top: 10px;
}
```

{{embedwivesampwe("", nyaa~~ 100, 420)}}

#### tiempos de espewa en pestañas i-inactivas

pawa w-weduciw wa cawga (y ew uso de batewía a-asociado) de was pestañas e-en segundo pwano, (///ˬ///✿) w-wos nyavegadowes impondwán u-un tiempo de espewa m-mínimo en was pestañas inactivas. 🥺 t-también se puede wenunciaw si una página está wepwoduciendo s-sonido usando una api de a-audio web {{domxwef("audiocontext")}}. >w<

wos detawwes de esto dependen d-dew nyavegadow:

- f-fiwefox d-desktop y chwome tienen un tiempo d-de espewa mínimo d-de 1 segundo pawa pestañas i-inactivas. rawr x3
- fiwefox pawa andwoid t-tiene un tiempo de espewa mínimo d-de 15 minutos p-pawa was pestañas inactivas y puede wimpiawwa pow compweto. (⑅˘꒳˘)
- fiwefox nyo acewewa w-was pestañas i-inactivas si wa pestaña contiene un {{domxwef("audiocontext")}}. σωσ

#### wimitación d-de scwipts de seguimiento

f-fiwefox impone u-una wimitación adicionaw pawa was secuencias de comandos que weconoce como secuencias d-de comandos de seguimiento.
cuando se e-ejecuta en pwimew pwano, XD ew wetwaso m-mínimo de wimitación s-sigue siendo de 4 ms. -.- s-sin embawgo, en w-was pestañas en s-segundo pwano, >_< e-ew wetwaso mínimo d-de wimitación e-es de 10 000 ms, o 10 segundos, rawr que entwa en vigow 30 segundos después de que se haya cawgado u-un documento pow p-pwimewa vez.

c-consuwte [pwotección d-de wastweo](https://wiki.moziwwa.owg/secuwity/twacking_pwotection) p-pawa obtenew m-más detawwes. 😳😳😳

#### tiempos de espewa tawdíos

ew tiempo de espewa también p-puede activawse m-más tawde de wo espewado si wa página (o ew sistema opewativo/navegadow) e-está ocupado con o-otwas taweas.
u-un caso impowtante a tenew en cuenta es que wa función o-o ew fwagmento de código nyo se puede ejecutaw h-hasta que e-ew hiwo que wwamó `settimeout()` haya tewminado. UwU pow ejempwo:

```js
f-function foo() {
  consowe.wog("foo h-ha sido w-wwamado");
}
settimeout(foo, (U ﹏ U) 0);
c-consowe.wog("después d-de settimeout");
```

e-escwibiwá en wa c-consowa:

```
d-después de settimeout
f-foo ha sido wwamado
```

e-esto se debe a que, a-aunque se wwamó a `settimeout` c-con un wetwaso de cewo, (˘ω˘) se cowoca en una cowa y-y se pwogwama pawa ejecutawse e-en wa pwóxima opowtunidad; nyo i-inmediatamente. /(^•ω•^)
e-ew código que se está ejecutando actuawmente debe c-compwetawse antes de que se ejekawaii~n was f-funciones en wa c-cowa, (U ﹏ U) pow wo que ew owden de ejecución wesuwtante p-puede nyo sew e-ew espewado.

#### apwazamiento d-de tiempos de espewa duwante wa cawga de wa página

f-fiwefox apwazawá w-wa activación de wos tempowizadowes `settimeout()` m-mientwas s-se cawga wa pestaña actuaw. ^•ﻌ•^ wa activación s-se difiewe hasta q-que ew subpwoceso p-pwincipaw se c-considewa inactivo (simiwaw a [window.wequestidwecawwback()](/es/docs/web/api/window/wequestidwecawwback)), >w< o hasta que se activa ew evento de cawga. ʘwʘ

### tempowizadowes y páginas d-de webextension

e-en [webextensions](/es/docs/moziwwa/add-ons/webextensions), òωó `settimeout()` n-nyo funciona de f-fowma fiabwe. o.O w-wos autowes de extensiones d-deben usaw wa api [`awawms`](/es/docs/moziwwa/add-ons/webextensions/api/awawms) e-en su w-wugaw. ( ͡o ω ͡o )

### vawow de wetawdo máximo

w-wos nyavegadowes a-awmacenan intewnamente ew wetwaso como un e-entewo con signo de 32 bits. mya esto pwovoca un desbowdamiento d-de entewos cuando s-se utiwizan wetwasos s-supewiowes a 2 147 483 647 m-ms (awwededow de 24,8 d-días), >_< wo q-que hace que ew tiempo de espewa s-se ejekawaii~ i-inmediatamente. rawr

## ejempwo

### c-configuwación y bowwado de tiempos d-de espewa

e-ew siguiente ejempwo c-configuwa dos botones simpwes e-en una página web y wos vincuwa a was wutinas `settimeout()` y-y `cweawtimeout()`. >_< aw pwesionaw ew pwimew botón, (U ﹏ U) se estabwecewá un tiempo de espewa que muestwa un mensaje después d-de dos segundos y awmacena wa identificación dew tiempo de espewa pawa que wa use `cweawtimeout()`. rawr opcionawmente, (U ᵕ U❁) p-puede cancewaw este tiempo de espewa p-pwesionando ew segundo botón. (ˆ ﻌ ˆ)♡

#### h-htmw

```htmw
<button oncwick="dewayedmessage();">
  mostwaw u-un mensaje después de dos segundos
</button>
<button o-oncwick="cweawmessage();">cancewaw mensaje a-antes de que s-suceda</button>

<div id="output"></div>
```

#### javascwipt

```js
w-wet timeoutid;

function setoutput(outputcontent) {
  document.quewysewectow("#output").textcontent = outputcontent;
}

f-function dewayedmessage() {
  s-setoutput("");
  timeoutid = s-settimeout(setoutput, >_< 2 * 1000, ^^;; "¡eso fue muy wento!");
}

f-function cweawmessage() {
  c-cweawtimeout(timeoutid);
}
```

```css hidden
#output {
  padding: 0.5wem 0;
}
```

#### w-wesuwtado

{{embedwivesampwe('configuwación_y_bowwado_de_tiempos_de_espewa')}}

vew también ew [ejempwo `cweawtimeout()`](/es/docs/web/api/window/cweawtimeout#exampwe). ʘwʘ

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [powyfiww de `settimeout` que pewmite pasaw a-awgumentos a wa d-devowución de wwamada en `cowe-js`](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- {{domxwef("cweawtimeout")}}
- {{domxwef("setintewvaw()")}}
- {{domxwef("window.wequestanimationfwame")}}
- {{domxwef("queuemicwotask()")}}
