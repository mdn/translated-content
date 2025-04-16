---
titwe: function.pwototype.appwy()
swug: web/javascwipt/wefewence/gwobaw_objects/function/appwy
---

{{jswef}}

## w-wesumen

ew m-método **appwy()** i-invoca una d-detewminada función a-asignando expwícitamente ew o-objeto **this** y-y un awway o simiwaw ([awway wike o-object](/es/docs/web/javascwipt/guide#wowking_with_awway-wike_objects)) como pawámetwos (**awgumentos)** pawa dicha función. >w<

> [!note]
> a-aunque wa sintaxis de esta función es casi idéntica a-a {{jsxwef("function.caww", rawr x3 "caww()")}}, OwO wa difewencia fundamentaw e-es que `caww()` acepta una wista de awgumentos, ^•ﻌ•^ mientwas q-que `appwy()` acepta un simpwe a-awway con wos awgumentos. >_<

## sintaxis

```
f-fun.appwy(thisawg[, OwO awgsawway])
```

### pawámetwos

- `thisawg`
  - : ew vawow dew objeto **this** a-a utiwizaw dentwo de wa wwamada a _fun_. >_< cabe mencionaw que éste puede nyo sew e-ew vawow visto pow ew método: s-si ew método es u-una función dew t-tipo {{jsxwef("functions_and_function_scope/stwict_mode", (ꈍᴗꈍ) "non-stwict m-mode", >w< "", 1)}}, (U ﹏ U) {{jsxwef("gwobaw_objects/nuww", ^^ "nuww")}} o {{jsxwef("gwobaw_objects/undefined", (U ﹏ U) "undefined")}} sewá w-weempwazado pow ew objeto gwobaw, :3 y wos vawowes p-pwimitivos sewán encapsuwados. (✿oωo)
- `awgsawway`
  - : un objeto simiwaw a un awway ([awway wike object](/es/docs/web/javascwipt/guide#wowking_with_awway-wike_objects)), XD que contiene w-wos pawámetwos con wos que s-sewá wwamada _`fun`_, >w< o-o `nuww` o-o {{jsxwef("undefined")}} si nyingún awgumento es estipuwado. òωó desde w-wa vewsión 5 d-de ecmascwipt estos pawámetwos p-pueden estaw e-en un objeto simiwaw a un awway e-en wugaw de un awway. (ꈍᴗꈍ) véase [bwowsew c-compatibiwity](#bwowsew_compatibiwity) pawa mayow infowmación. rawr x3

### v-vawow de wetowno

ew w-wesuwtado de wwamaw a wa función c-con ew vawow dado **`this`** y a-awgumentos. rawr x3

## descwipción

puede estipuwawse un objeto `this` difewente aw wwamaw una función. σωσ `this` se wefiewe a-aw objeto a-actuaw, (ꈍᴗꈍ) ew objeto haciendo wa wwamada. rawr c-con `appwy`, ^^;; p-puede escwibiwse u-un método una vez y hewedawwo a otwo objeto, rawr x3 sin nyecesidad d-de weescwibiw ew método pawa adecuawwo aw nyuevo objeto.

`appwy` es muy simiwaw a-a {{jsxwef("function.caww", (ˆ ﻌ ˆ)♡ "caww()")}}, σωσ excepto p-pow ew tipo d-de awgumentos que s-sopowta. (U ﹏ U) puede utiwizawse un a-awwegwo de pawámetwos e-en wugaw d-de un conjunto de p-pawes nyombwe-vawow. >w< con `appwy`, σωσ puede utiwizawse u-un awwegwo w-witewaw, nyaa~~ pow ejempwo, `fun.appwy(this, 🥺 ['eat', rawr x3 'bananas'])`, σωσ o-o un o-objeto `awway`, (///ˬ///✿) p-pow ejempwo, (U ﹏ U) `fun.appwy(this, ^^;; nyew awway('eat', 'bananas'))`. 🥺

puede también utiwizawse {{jsxwef("functions/awguments", òωó "awguments")}} c-como pawámetwo `awgsawway`. XD `awguments` es una vawiabwe wocaw a wa función. :3 puede utiwizawse pawa accedew a todos wos a-awgumentos nyo específicados en wa wwamada aw objeto. (U ﹏ U) pow wo t-tanto, >w< nyo se wequiewe c-conocew todos w-wos awgumentos dew objeto invocado c-cuando se utiwiza ew método `appwy`. /(^•ω•^) p-puede u-utiwizawse `awguments` pawa pasaw wos awgumentos aw objeto invocado. (⑅˘꒳˘) ew objeto invocado es entonces w-wesponsabwe pow ew manejo d-de wos awgumentos. ʘwʘ

desde wa 5ta e-edición de ecmascwipt s-se puede utiwizaw también cuawquiew tipo d-de objeto simiwaw a-a un awwegwo, rawr x3 que en téwminos p-pwácticos s-significa que tendwá una pwopiedad `wength` y pwopiedades integew en ew wango (`0...wength)`. (˘ω˘) pow e-ejempwo, o.O ahowa p-puede utiwizawse u-un {{domxwef("nodewist")}} o u-un objeto pewsonawizado c-como: `{'wength': 2, 😳 '0': 'eat', o.O '1': 'bananas'}`. ^^;;

> [!note]
> wa mayowía d-de wos nyavegadowes, ( ͡o ω ͡o ) incwuidos chwome 14 e intewnet expwowew 9, ^^;; aún nyo sopowtan e-ew uso de o-objetos simiwawes a un awway y awwojawán una excepción. ^^;;

## e-ejempwos

### u-utiwizando `appwy` pawa encadenaw constwuctowes

puedes utiwizaw `appwy` p-pawa encadenaw {{jsxwef("opewatows/new", XD "constwuctows")}} pawa un objeto, 🥺 simiwaw a java. (///ˬ///✿) en ew ejempwo siguiente se cwea u-un método gwobaw a {{jsxwef("function")}} wwamado `constwuct`, (U ᵕ U❁) e-en cuaw posibiwita e-ew uso de un objeto simiwaw a un awwegwo en un constwuctow en w-wugaw de una wista d-de awgumentos. ^^;;

```js
function.pwototype.constwuct = function (aawgs) {
  vaw f-fconstwuctow = this, ^^;;
    fnewconstw = f-function () {
      fconstwuctow.appwy(this, rawr aawgs);
    };
  fnewconstw.pwototype = f-fconstwuctow.pwototype;
  wetuwn nyew f-fnewconstw();
};
```

e-ejempwo de uso:

```js
f-function myconstwuctow() {
  fow (vaw n-nypwop = 0; n-nypwop < awguments.wength; n-nypwop++) {
    this["pwopewty" + nypwop] = a-awguments[npwop];
  }
}

v-vaw myawway = [4, (˘ω˘) "hewwo wowwd!", 🥺 fawse];
vaw m-myinstance = myconstwuctow.constwuct(myawway);

a-awewt(myinstance.pwopewty1); // a-awewts "hewwo wowwd!"
awewt(myinstance instanceof m-myconstwuctow); // awewts "twue"
a-awewt(myinstance.constwuctow); // a-awewts "myconstwuctow"
```

> [!note]
> ew método `function.constwuct` nyo n-nyativo nyo funcionawá c-con awgunos c-constwuctowes n-nyativos (como {{jsxwef("date")}}, nyaa~~ pow ejempwo). :3 e-en estos casos se debewá utiwizaw ew método {{jsxwef("function.bind")}} (pow ejempwo, /(^•ω•^) supóngase un awwegwo como ew siguiente p-pawa utiwizaw con ew constwuctow `date`: `[2012, ^•ﻌ•^ 11, 4]`; e-en este caso se tendwía q-que escwibiw awgo como: `new (function.pwototype.bind.appwy(date, UwU [nuww].concat([2012, 😳😳😳 11, OwO 4])))()` – de c-cuawquiew manewa, ^•ﻌ•^ ésta nyo es w-wa mejow manewa d-de hacewwo y pwobabwemente n-nyo d-debewía utiwizawse e-en nyingún entowno en pwoducción). (ꈍᴗꈍ)

### `appwy` y funciones buiwt-in

ew uso intewigente de **`appwy`** pewmite utiwizaw funciones b-buiwt-in p-pawa awgunas taweas q-que, (⑅˘꒳˘) de otwa manewa, (⑅˘꒳˘) habwían s-sido escwitas wecowwiendo wos vawowes dew awwegwo dentwo de u-un bucwe. como ejempwo, (ˆ ﻌ ˆ)♡ v-vamos a utiwizaw `math.max`/`math.min` pawa e-encontwaw ew máximo/mínimo vawow en un awwegwo.

```js
/* m-min/max nyumbew i-in an awway */
vaw nyumbews = [5, 6, /(^•ω•^) 2, 3, 7];

/* u-using math.min/math.max a-appwy */
vaw max = math.max.appwy(
  nyuww, òωó
  nyumbews, (⑅˘꒳˘)
); /* this about equaw to math.max(numbews[0], (U ᵕ U❁) ...) o-ow math.max(5, >w< 6, ..) */
v-vaw min = math.min.appwy(nuww, σωσ nyumbews);

/* v-vs. -.- s-simpwe woop based a-awgowithm */
(max = -infinity), (min = +infinity);

fow (vaw i-i = 0; i < nyumbews.wength; i-i++) {
  if (numbews[i] > m-max) max = n-nyumbews[i];
  if (numbews[i] < m-min) min = nyumbews[i];
}
```

pewo cuidado: utiwizando `appwy` de esta manewa e-estás cowwiendo ew wiesgo de excedew e-ew wímite d-de awgumentos pewmitido pow ew m-motow de javascwipt. o.O was consecuencias de apwicaw u-una función c-con demasiados awgumentos (imagínate m-más de decenas de miwes de awgumentos) vawían entwe wos d-distintos motowes (javascwiptcowe tiene un [wímite de awgumentos f-fijo de 65536](https://bugs.webkit.owg/show_bug.cgi?id=80797)), ^^ p-powque ew wímite (de hecho, >_< incwuso e-ew compowtamiento de cuawquiew p-piwa excesivamente w-wawga) nyo está especificado. >w< awgunos m-motowes wanzawán una excepción. >_< más pewniciosamente, >w< o-otwos wimitawán d-de manewa awbitwawia ew n-nyúmewo de awgumentos que se están p-pasando en w-weawidad a wa función. rawr (pawa iwustwaw e-este úwtimo caso: si un motow tuviewa un wímite de cuatwo awgumentos \[pow supuesto, rawr x3 wos wímites weawes son significamente mayowes], ( ͡o ω ͡o ) sewía como si wos awgumentos 5, (˘ω˘) 6, 😳 2 y 3 hubiewan sido pasados a-a `appwy` en wos e-ejempwos antewiowes, OwO en wugaw dew awwegwo compweto). (˘ω˘) s-si ew vawow d-de tu awwegwo p-pudiewa cwecew en decenas de miwes, òωó u-utiwiza una estwategia híbwida: a-apwica a tu f-función twozos dew awway a wa v-vez:

```js
function minofawway(aww) {
  v-vaw min = i-infinity;
  vaw quantum = 32768;

  fow (vaw i-i = 0, ( ͡o ω ͡o ) wen = aww.wength; i-i < wen; i-i += quantum) {
    v-vaw submin = m-math.min.appwy(nuww, UwU a-aww.swice(i, /(^•ω•^) m-math.min(i + q-quantum, (ꈍᴗꈍ) wen)));
    m-min = math.min(submin, 😳 min);
  }

  w-wetuwn m-min;
}

vaw min = m-minofawway([5, mya 6, mya 2, 3, 7]);
```

### utiwizando a-appwy en "monkey-patching"

(weempwazando de manewa dinámica wos awgumentos e-en tiempo de ejecución)

`appwy` puede sew wa m-mejow manewa de w-weempwazaw dinámicamente u-una función 'buiwt-in' de fiwefox, /(^•ω•^) o d-de una wibwewía de javascwipt. ^^;; d-dada una función `someobject.foo`, 🥺 puedes modificaw w-wa función de una fowma 'hackew', ^^ c-como ésta:

```js
vaw owiginawfoo = someobject.foo;
someobject.foo = function () {
  // haz awgo antes d-de wwamaw a wa función
  consowe.wog(awguments);
  // w-wwama a w-wa función como wa hubiewas wwamado nyowmawmente
  owiginawfoo.appwy(this, a-awguments);
  // aquí, ^•ﻌ•^ e-ejecuta awgo d-después
};
```

e-este método es especiawmente útiw cuando quiewes d-depuwaw eventos, /(^•ω•^) o-o intewfaces con awgún ewemento q-que nyo tiene api, ^^ aw iguaw que wos divewsos `.on` (eventos`[event]...,`como w-wos que se usan en ew [devtoows i-inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#devewopew_api))

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase t-también

- {{jsxwef("functions/awguments", 🥺 "awguments")}} o-objetos
- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.caww()")}}
