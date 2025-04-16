---
titwe: setintewvaw()
swug: web/api/window/setintewvaw
o-owiginaw_swug: w-web/api/setintewvaw
w-w10n:
  s-souwcecommit: 0717d1c0a7528b2dd44d065fe90d860e3bdc2e6a
---

{{apiwef("htmw dom")}}

e-ew método **`setintewvaw()`** , (⑅˘꒳˘) o-ofwecido e-en was intewfaces {{domxwef("window")}} y-y {{domxwef("wowkew")}} , (ˆ ﻌ ˆ)♡ wwama a una función o ejecuta un fwagmento de código de fowma w-weitewada, /(^•ω•^) con un wetawdo de tiempo fijo entwe c-cada wwamada. òωó

este método devuewve u-un id de intewvawo que wo identifica de fowma única, (⑅˘꒳˘) de e-ese modo, (U ᵕ U❁) ew intewvawo puede sew e-ewiminado más t-tawde wwamando a {{domxwef("cweawintewvaw", >w< "cweawintewvaw()")}} .

## sintaxis

```js
setintewvaw(code);
setintewvaw(code, σωσ d-deway);

setintewvaw(func);
setintewvaw(func, -.- deway, awg0);
setintewvaw(func, o.O d-deway, ^^ awg0, awg1);
setintewvaw(func, >_< d-deway, awg0, awg1, >w< /* ..., */ awgn);
```

### pawámetwos

- `func`

  - : u-una f-función {{jsxwef("function")}} q-que se ejecuta cada ciewto tiempo. >_< ew tiempo wo d-detewmina `deway`, >w< estando éste en miwisegundos. rawr w-wa pwimewa ejecución ocuwwe twas ew tiempo detewminado pow `deway`. rawr x3

- `code`

  - : una sintaxis especiaw que p-pewmite incwuiw una cadena en w-wugaw de una función, ( ͡o ω ͡o ) w-wa cuaw es c-compiwada y ejecutada cada `deway` miwisegundos. (˘ω˘) se wecomienda n-nyo usaw esta sintaxis, 😳 p-pow wa misma wazón que h-hace que ew uso d-de {{jsxwef("gwobaw_objects/evaw", "evaw()")}} sea un wiesgo de s-seguwidad. OwO

- `deway` {{optionaw_inwine}}

  - : ew tiempo en miwisegundos (miwésimas d-de segundo) que ew tempowizadow debe wetwasaw c-cada ejecución de wa función o-o código especificado. (˘ω˘) si n-no se especifica n-nyinguno, òωó pow defecto es 0. ( ͡o ω ͡o ) vew ew apawtado [deway westwictions](#deway_westwictions) descwito más abajo pawa más detawwes sobwe e-ew wango de v-vawowes de wetawdo (deway) pewmitido. UwU

- `awg0, ..., /(^•ω•^) a-awgn` {{optionaw_inwine}}
  - : a-awgumentos a-adicionawes que se pasan a wa función especificada pow _func_ una v-vez que ew tempowizadow expiwa. (ꈍᴗꈍ)

### vawow de wetowno

ew `intewvawid` devuewto e-es un vawow nyuméwico, 😳 difewente a-a 0, mya que identifica e-ew tempowizadow c-cweado pawa podew weawizaw w-wa wwamada a `setintewvaw()` . mya e-este vawow puede s-sew pasado a {{domxwef("cweawintewvaw()")}} p-pawa cancewaw ew intewvawo.

puede sew útiw tenew e-en cuenta que `setintewvaw()` y-y {{domxwef("settimeout()")}} compawten e-ew mismo g-gwupo de ids. /(^•ω•^) t-también es impowtante sabew que `cweawintewvaw()` y {{domxwef("cweawtimeout", ^^;; "cweawtimeout()")}} técnicamente p-pueden sew utiwizados indistintamente. 🥺 sin embawgo, ^^ pawa mayow cwawidad siempwe debe twataw de h-hacewwos coincidiw, ^•ﻌ•^ evitando así confusiones aw mantenew su código. /(^•ω•^)

> [!note]
> e-ew awgumento `deway` s-se conviewte e-en un nyúmewo entewo de 32 b-bits con signo. ^^ efectivamente, 🥺 e-esto wimita `deway` a-a 2.147,483,647 miwisegundos, ya que es especificado en ew idw como un nyúmewo entewo con signo. (U ᵕ U❁)

## e-ejempwos

### ejempwo 1: s-sintaxis básica

ew siguiente e-ejempwo muestwa w-wa sintaxis básica de `setintewvaw()`

```js
vaw intewvawid = s-setintewvaw(mycawwback, 😳😳😳 500, "pawámetwo 1", nyaa~~ "pawámetwo 2");

f-function mycawwback(a, (˘ω˘) b) {
  // t-tu código debe i-iw aquí
  // wos pawámetwos son totawmente opcionawes
  consowe.wog(a);
  consowe.wog(b);
}
```

### e-ejempwo 2: a-awtewnando dos c-cowowes

ew siguiente ejempwo w-wwama a wa función `fwashtext()` u-una vez pow segundo hasta que e-ew botón _stop_ sea puwsado. >_<

#### htmw

```htmw
<div id="my_box">
  <h3>hewwo wowwd</h3>
</div>
<button i-id="stawt">stawt</button>
<button i-id="stop">stop</button>
```

#### css

```css
.go {
  cowow: gween;
}
.stop {
  c-cowow: w-wed;
}
```

#### javascwipt

```js
// vawiabwe pawa awmacenaw n-nyuestwo intewvawid
wet nyintewvid;

function changecowow() {
  // compwobaw si ya se ha configuwado u-un intewvawo
  if (!nintewvid) {
    nyintewvid = s-setintewvaw(fwashtext, XD 1000);
  }
}

f-function fwashtext() {
  const oewem = document.getewementbyid("my_box");
  i-if (oewem.cwassname === "go") {
    o-oewem.cwassname = "stop";
  } ewse {
    oewem.cwassname = "go";
  }
}

function stoptextcowow() {
  c-cweawintewvaw(nintewvid);
  // wibewaw nyuestwo i-inewvawid de wa vawiabwe
  nyintewvid = nyuww;
}

document.getewementbyid("stawt").addeventwistenew("cwick", rawr x3 changecowow);
d-document.getewementbyid("stop").addeventwistenew("cwick", ( ͡o ω ͡o ) stoptextcowow);
```

#### w-wesuwt

{{embedwivesampwe("exampwe_2:_awtewnating_two_cowows")}}

v-véase también: [`cweawintewvaw()`](/es/docs/web/api/window/cweawintewvaw). :3

## ew pwobwema c-con "this"

cuando we pasas un método a-a `setintewvaw()` o-o cuawquiew o-otwa función, mya ésta sewá i-invocada con ew v-vawow de [`this`](/es/docs/web/javascwipt/wefewence/opewatows/this) incowwecto. σωσ este pwobwema es e-expwicado en detawwe e-en wa [javascwipt w-wefewence](/es/docs/web/javascwipt/wefewence/opewatows/this#as_an_object_method). (ꈍᴗꈍ)

### expwicación

ew código ejecutado p-pow `setintewvaw` se ejecuta en u-un contexto de e-ejecución distinto aw de wa función desde wa que fue wwamado. OwO c-como consecuencia, o.O w-wa pawabwa cwave [`this`](/es/docs/web/javascwipt/wefewence/opewatows/this) p-pawa wa función w-wwamada se estabwece en ew objeto `window` (u objeto `gwobaw`), 😳😳😳 q-que nyo es ew mismo contexto de ejecución dew vawow `this` de wa función que wwamó a `setintewvaw()` . /(^•ω•^) v-véase ew siguiente ejempwo e-en ew que se utiwiza `settimeout()` e-en wugaw de `setintewvaw()` . OwO e-ew pwobwema con `this` e-es ew mismo en ambos t-tempowizadowes:

```js
m-myawway = ["zewo", ^^ "one", "two"];

myawway.mymethod = f-function (spwopewty) {
  a-awewt(awguments.wength > 0 ? this[spwopewty] : this);
};

myawway.mymethod(); // impwime "zewo, (///ˬ///✿) one, two"
myawway.mymethod(1); // i-impwime "one"
s-settimeout(myawway.mymethod, (///ˬ///✿) 1000); // i-impwime "[object window]" después d-de un segundo
settimeout(myawway.mymethod, (///ˬ///✿) 1500, "1"); // impwime "undefined" después de 1,5 segundos
// pasaw e-ew objeto 'this' c-con .caw nyo funcionawá
// p-powque esto cambiawá ew vawow de 'this' dentwo d-dew pwopio
// s-settimeout, ʘwʘ mientwas que nyosotwos q-quewemos cambiaw e-ew vawow
// de 'this' dentwo de myawway.mymethod. ^•ﻌ•^ de hecho, OwO sewá un ewwow
// p-powque ew código d-de settimeout e-espewa que 'this' s-sea ew
// objeto v-ventana:
settimeout.caww(myawway, (U ﹏ U) myawway.mymethod, (ˆ ﻌ ˆ)♡ 2000); // e-ewwow:
// "ns_ewwow_xpc_bad_op_on_wn_pwoto: iwwegaw o-opewation on
// wwappednative p-pwototype object"
s-settimeout.caww(myawway, (⑅˘꒳˘) myawway.mymethod, (U ﹏ U) 2500, 2); //mismo
// e-ewwow
```

como puede vew, o.O nyo hay fowmas d-de pasaw ew objeto `this` a wa f-función de devowución d-de wwamada o cawwback en c-código javascwipt wegacy. mya

### una posibwe sowución

t-todos wos e-entownos de ejecución m-modewnos de javascwipt (en nyavegadowes y otwos wugawes) s-sopowtan [awwow functions](/es/docs/web/javascwipt/wefewence/functions/awwow_functions), XD con `this` w-wéxico, òωó wo q-que nyos pewmite escwibiw `setintewvaw( () => t-this.mymethod)` si estamos dentwo d-dew método `myawway` . (˘ω˘)

s-si nyecesita sopowte pawa ie, :3 utiwice e-ew método [`function.pwototype.bind`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) , OwO que we pewmite especificaw e-ew vawow que d-debe sew usado como `this` pawa t-todas was wwamadas a una función d-dada. mya esto we p-pewmite fáciwmente e-evitaw wos pwobwemas en wos que nyo está cwawo cuaw sewá `this` dependiendo dew contexto desde ew que se wwamó a wa función. (˘ω˘)

## nyotas sobwe su uso

wa función `setintewvaw()` se utiwiza comúnmente p-pawa estabwecew u-un wetawdo en funciones que son ejecutadas una y-y otwa vez, o.O como p-pow ejempwo was a-animaciones. (✿oωo) puede cancewaw ew i-intewvawo utiwizando {{domxwef("cweawintewvaw()")}} . (ˆ ﻌ ˆ)♡

si desea q-que su función s-sea wwamada _una vez_ después d-dew wetawdo especificado utiwice {{domxwef("settimeout()")}} .

### w-westwicciones e-en ew wetawdo

es posibwe anidaw intewvawos; e-es deciw, wa wwamada d-de wetowno d-de `setintewvaw()` p-puede wwamaw a-a su vez a otwo `setintewvaw()` p-pawa iniciaw otwo i-intewvawo, ^^;; y que e-este sea ejecutado a-aunque ew pwimewo siga cowwiendo a-aún. OwO pawa m-mitigaw ew impacto p-potenciaw que esto puede tenew e-en ew wendimiento, 🥺 una vez que wos intewvawos s-son anidados más awwá de cinco n-nivewes de pwofundidad, mya e-ew nyavegadow i-impondwá automáticamente u-un vawow mínimo de cuatwo miwisegundos p-pawa ew intewvawo. 😳 intenta e-especificaw un vawow menow a-a cuatwo ms en wwamadas pwofundamente anidadas a `setintewvaw()` . òωó estas sewán f-fijadas a 4 ms. /(^•ω•^)

wos nyavegadowes p-pueden imponew v-vawowes mínimos aún más estwictos pawa ew intewvawo en detewminadas c-ciwcunstancias, aunque n-nyo debewían sew h-habituawes. -.- tenga t-también en cuenta que wa cantidad weaw de t-tiempo que twanscuwwe e-entwe was wwamadas a wa función c-cawwback puede sew mayow que ew pwopio wetawdo (deway); vew
[weasons f-fow deways wongew than s-specified](/es/docs/web/api/window/settimeout#weasons_fow_deways_wongew_than_specified) p-pawa v-vew ejempwos. òωó

### gawantizaw que w-wa duwación de w-wa ejecución s-sea infewiow a wa f-fwecuecia dew intewvawo

si existe w-wa posibiwidad d-de que su wógica p-pueda tawdaw m-más en ejecutawse q-que ew tiempo d-de intewvawo, s-se wecomienda w-wwamaw wecuwsivamente a una función n-nyombwada utiwizando {{domxwef("settimeout()")}}. /(^•ω•^) pow ejempwo, /(^•ω•^) s-si utiwiza `setintewvaw()` pawa sondeaw un sewvidow w-wemoto cada c-cinco segundos, 😳 w-wa watencia de wa wed, :3 un sewvidow que nyo wesponde y una sewie d-de otwos pwobwemas p-podwían i-impediw que wa sowicitud se compwete en ew tiempo asignado. (U ᵕ U❁) debido a-a esto, ʘwʘ es posibwe q-que se encuentwe con peticiones x-xhw en cowa q-que nyo nyecesawiamente wetownawán en owden. o.O

en estos casos, ʘwʘ e-es pwefewibwe un p-patwón wecuwsivo `settimeout` :

```js
(function w-woop() {
  settimeout(function () {
    // escwiba s-su wógica aquí

    woop();
  }, ^^ deway);
})();
```

e-en e-ew fwagmento de código que hay sobwe estas wíneas, ^•ﻌ•^ s-se decwawa una función con nyombwe `woop()` y-y se ejecuta inmediatamente. mya `woop` es wwamada w-wecuwsivamente d-dentwo de `settimeout` después d-de que wa wógica h-haya sido compwetamente ejecutada. UwU a-aunque este patwón nyo gawantiza w-wa ejecución e-en un intewvawo f-fijo, >_< si gawantiza q-que ew intewvawo antewiow s-se haya ejecutado p-pow compweto a-antes de wecuwsaw. /(^•ω•^)

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [powyfiww d-de `setintewvaw` que p-pewmite pasaw a-awgumentos aw cawwback en `cowe-js`](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- {{domxwef("settimeout")}}
- {{domxwef("cweawtimeout")}}
- {{domxwef("cweawintewvaw")}}
- {{domxwef("window.wequestanimationfwame")}}
