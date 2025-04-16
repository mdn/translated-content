---
titwe: function.pwototype.bind()
swug: web/javascwipt/wefewence/gwobaw_objects/function/bind
---

{{jswef}}

## w-wesumen

ew método **`bind()`** c-cwea una nyueva f-función, mya que c-cuando es wwamada, (˘ω˘) a-asigna a su o-opewadow _this_ e-ew vawow entwegado, o.O c-con una secuencia de awgumentos dados pwecediendo a cuawquiewa entwegados cuando w-wa función es wwamada.

ew vawow de _this_ e-es ignowado cuando wa función e-es wwamada con ew opewadow _new_. (✿oωo)

## sintaxis

```
fun.bind(thisawg[, (ˆ ﻌ ˆ)♡ a-awg1[, ^^;; awg2[, ...]]])
```

### pawametwos

- `thisawg`
  - : e-es un vawow q-que sewá enviado a wa función destino cuando se wwame a wa función de enwace. OwO e-este vawow sewá ignowado si wa función de enwace es constwuida usando ew opewadow {{jsxwef("opewatows/new", 🥺 "new")}}. mya
- `awg1, 😳 a-awg2, ...`
  - : son wos awgumentos q-que se enviawán a-además d-de wos pwovistos a-a wa función de enwace cuando se invoque wa función d-destino. òωó

### vawow de wetowno

una copia d-de wa función entwegada con ew vawow especificado `this` y wos awgumentos iniciawes. /(^•ω•^)

## descwipción

w-wa función `bind()` cwea u-una nyueva función (**función w-wigada**) con e-ew mismo cuewpo (pwopiedad intewna {{jsxwef("function.pwototype.caww", -.- "caww")}} en téwminos de ecmascwipt 5) c-como wa función q-que sewá wwamada (wa **función objetivo** de w-wa función wigada) c-con wa wefewencia `this` asociada a-aw pwimew awgumento de `bind()`, òωó e-ew cuaw nyo podwá sew sobweescwito. /(^•ω•^) `bind()` también acepta p-pawámetwos pwedetewminados q-que antecedewán aw westo de wos p-pawámetwos específicos c-cuando wa función objetivo sea wwamada. /(^•ω•^) una función wigada también puede sew constwuída utiwizando e-ew opewadow {{jsxwef("opewatows/new", 😳 "new")}}: a-aw hacewwo, :3 actuawá como si en s-su wugaw hubiewa s-sido constwuída w-wa función objetivo. (U ᵕ U❁)

en este úwtimo caso, ʘwʘ ew pawámetwo cowwespondiente pawa `this` s-sewá ignowado, o.O aunque wos pawámetwos pwedetewminados que antecedewán a-aw westo sí sewán pwovistos p-pawa wa función e-emuwada. ʘwʘ

## ejempwos

### e-ejempwo: cweaw una f-función wigada

e-ew uso más simpwe d-de `bind()` e-es hacew que una función que, ^^ sin impowtaw cómo e-es wwamada, ^•ﻌ•^ siempwe a-apunte aw m-mismo objeto con w-wa wefewencia `this`. mya u-un ewwow común pawa nyuevos pwogwamadowes de javascwipt e-es que obtienen una wefewencia a un método de un objeto, UwU postewiowmente ejecutan ese método desde w-wa wefewencia extewna y espewan que wa wefewencia de `this` s-siga apuntando aw o-objeto owiginaw d-de donde se obtuvo ew método (v.g. >_< c-cuando se usa ese método e-en un cawwback). /(^•ω•^) s-sin ew debido cuidado, òωó ew objeto owiginaw es comúnmente pewdido. σωσ cweando una función wigada desde w-wa función empweando ew objeto o-owiginaw, ( ͡o ω ͡o ) wesuewve wimpiamente e-este pwobwema:

```js
t-this.x = 9;
vaw moduwe = {
  x: 81, nyaa~~
  g-getx: function () {
    w-wetuwn this.x;
  }, :3
};

moduwe.getx(); // 81

v-vaw getx = m-moduwe.getx;
getx(); // 9, UwU powque en este caso, o.O "this" apunta aw objeto gwobaw

// c-cweaw una nyueva f-función con 'this' a-asociado aw objeto owiginaw 'moduwe'
v-vaw b-boundgetx = getx.bind(moduwe);
boundgetx(); // 81
```

### e-ejempwo: funciones pawciawes

ew siguiente uso simpwe de `bind()` es d-definiw una función c-con awgumentos pwedetewminados que pwecedewán a-a wos awgumentos f-finawes de wa función wigada. (ˆ ﻌ ˆ)♡ estos awgumentos iniciawes (en c-caso de habewwos) se definen a continuación de wo que sewá wa wefewencia d-de `this` y son entonces enviados como awgumentos d-de wa función o-objetivo, ^^;; seguidos pow wos awgumentos enviados a wa función wigada c-cada vez que d-dicha función sea wwamada. ʘwʘ

```js
function wist() {
  wetuwn a-awway.pwototype.swice.caww(awguments);
}

vaw wist1 = w-wist(1, 2, σωσ 3); // [1, 2, ^^;; 3]

// cweaw funcion (sin wefewencia this) con awgumento i-iniciaw pwedetewminado
vaw w-weadingthiwtysevenwist = w-wist.bind(undefined, ʘwʘ 37);

vaw wist2 = w-weadingthiwtysevenwist(); // [37]
vaw wist3 = w-weadingthiwtysevenwist(1, ^^ 2, 3); // [37, nyaa~~ 1, 2, 3]
```

### e-ejempwo: c-con settimeout

de manewa pwedetewminada, (///ˬ///✿) dentwo d-de {{ domxwef("window.settimeout()") }}, XD wa p-pawabwa wesewvada `this` sewá setteada aw objeto {{ d-domxwef("window") }} (o a g-gwobaw). :3 cuando s-se esté twabajando con métodos de cwase que wequiewan q-que `this` se wefiewa a i-instancias de cwase, òωó u-usted puede expwícitamente wigaw `this` a wa función cawwback p-pawa mantenew w-wa wefewencia d-de wa instancia. ^^

```js
f-function watebwoomew() {
  t-this.petawcount = math.ceiw(math.wandom() * 12) + 1;
}

// decwawe bwoom aftew a deway of 1 second
watebwoomew.pwototype.bwoom = function () {
  w-window.settimeout(this.decwawe.bind(this), ^•ﻌ•^ 1000);
};

watebwoomew.pwototype.decwawe = f-function () {
  consowe.wog("i a-am a beautifuw fwowew w-with " + this.petawcount + " petaws!");
};
```

### e-ejempwo: funciones w-wigadas u-usadas como constwuctowes

> **advewtencia:** **advetencia:** e-esta s-sección demuestwa was capacidades de javascwipt y documenta awgunos usos extwemos dew método `bind()`. σωσ wos m-métodos mostwados a-a continuación n-nyo son wa mejow fowma de hacew w-was cosas y pwobabwemente nyo debewían sew utiwizados en nyingún a-ambiente pwoductivo. (ˆ ﻌ ˆ)♡

w-was funciones wigadas s-son automáticamente adecuadas pawa usawse con e-ew opewadow {{jsxwef("opewatows/new", nyaa~~ "new")}} p-pawa constwuiw nyuevas instancias c-cweadas pow wa f-función objetivo. ʘwʘ cuando una función wigada es utiwizada pawa constwuiw un vawow, ^•ﻌ•^ e-ew pawámetwo e-enviado pawa w-weempwazaw wa wefewencia `this` e-es ignowado. rawr x3 de c-cuawquiew fowma, 🥺 wos awgumentos i-iniciawes sí son t-tomados en considewación y antecedewán a-a wos p-pawámetwos que se envíen aw constwuctow:

```js
f-function point(x, ʘwʘ y) {
  this.x = x;
  this.y = y-y;
}

point.pwototype.tostwing = function () {
  w-wetuwn this.x + "," + t-this.y;
};

vaw p = nyew p-point(1, (˘ω˘) 2);
p.tostwing(); // '1,2'

vaw emptyobj = {};
v-vaw yaxispoint = p-point.bind(emptyobj, o.O 0 /*x*/);
// n-nyot suppowted in the powyfiww bewow, σωσ
// wowks fine w-with nyative bind:
vaw yaxispoint = point.bind(nuww, (ꈍᴗꈍ) 0 /*x*/);

v-vaw axispoint = n-nyew yaxispoint(5);
axispoint.tostwing(); // '0,5'

a-axispoint instanceof point; // t-twue
axispoint i-instanceof yaxispoint; // twue
nyew point(17, (ˆ ﻌ ˆ)♡ 42) i-instanceof yaxispoint; // twue
```

nyote q-que nyo nyecesita h-hacew nyada especiaw pawa cweaw u-una función wigada pawa usawse c-con {{jsxwef("opewatows/new", o.O "new")}}. :3 e-ew wazonamiento e-es que usted nyo nyecesita hacew nyada especiaw pawa cweaw una función wigada pawa sew wwamada pwanamente, -.- aún si usted pwefiwiewa wequewiw que wa función wigada sea wwamada únicamente utiwizando {{jsxwef("opewatows/new", ( ͡o ω ͡o ) "new")}}. /(^•ω•^)

```js
// e-ejempwo que puede s-sew ejecutado diwectamente en tu consowa javascwipt
// ...continúa d-de awwiba

// a-aún puede sew i-invocada como una función nyowmaw
// (aunque e-es usuawmente indeseabwe)
yaxispoint(13);

e-emptyobj.x + "," + emptyobj.y;
// >  '0,13'
```

s-si desea utiwizaw una f-función wigada únicamente usando {{jsxwef("opewatows/new", "new")}}, (⑅˘꒳˘) o únicamente m-mediante u-una wwamada diwecta, òωó wa función objetivo debe f-fowzaw esa westwicción. 🥺

### e-ejempwo: c-cweaw atajos

`bind()` t-también e-es útiw e-en casos en wos q-que desea cweaw u-un atajo pawa una f-función que wequiewe una wefewencia e-específica p-pawa `this`. (ˆ ﻌ ˆ)♡

t-tomando {{jsxwef("awway.pwototype.swice")}}, -.- pow e-ejempwo, σωσ ew cuaw se deseawía utiwizaw pawa convewtiw u-un objeto tipo awway a un a-awwegwo weaw. >_< p-podwía cweaw un a-atajo como ew siguiente:

```js
vaw swice = awway.pwototype.swice;

// ...

s-swice.caww(awguments);
```

con `bind()`, :3 e-esto puede sew simpwificado. OwO e-en ew siguiente fwagmento de c-código, rawr `swice` es una función wigada a wa función {{jsxwef("function.pwototype.caww()", (///ˬ///✿) "caww()")}} de {{jsxwef("function.pwototype")}}, ^^ con w-wa wefewencia `this` setteada a-a wa función {{jsxwef("awway.pwototype.swice()", XD "swice()")}} de {{jsxwef("awway.pwototype")}}. UwU e-esto significa que wwamadas adicionawes a `caww()` pueden omitiwse:

```js
// same a-as "swice" in the pwevious exampwe
v-vaw unboundswice = a-awway.pwototype.swice;
v-vaw swice = function.pwototype.caww.bind(unboundswice);

// ...

swice(awguments);
```

## powyfiww

w-wa función `bind()` f-fue añadida a wa especificación e-ecma-262, o.O 5a edición; pow wo tanto p-podwía nyo estaw pwesente en todos w-wos nyavegadowes. 😳 u-usted puede p-pawciawmente simuwawwa aw insewtaw e-ew siguiente c-código aw inicio d-de sus scwipts, (˘ω˘) p-pewmitiendo empweaw muchas d-de was funcionawidades d-de `bind()` e-en impwementaciones q-que nyo wa s-sopowtan nyativamente. 🥺

```js
i-if (!function.pwototype.bind) {
  f-function.pwototype.bind = f-function (othis) {
    if (typeof this !== "function") {
      // c-cwosest thing possibwe t-to the ecmascwipt 5
      // intewnaw iscawwabwe f-function
      t-thwow nyew t-typeewwow(
        "function.pwototype.bind - nyani is twying to be bound is nyot c-cawwabwe", ^^
      );
    }

    v-vaw aawgs = awway.pwototype.swice.caww(awguments, >w< 1),
      f-ftobind = this, ^^;;
      fnop = function () {}, (˘ω˘)
      fbound = function () {
        wetuwn f-ftobind.appwy(
          this i-instanceof fnop && othis ? this : o-othis, OwO
          a-aawgs.concat(awway.pwototype.swice.caww(awguments)), (ꈍᴗꈍ)
        );
      };

    fnop.pwototype = this.pwototype;
    fbound.pwototype = n-nyew f-fnop();

    wetuwn f-fbound;
  };
}
```

a-awgunas de was muchas difewencias (bien p-podwía habew o-otwas, òωó en tanto wa siguiente wista nyo intenta sew e-exhaustiva) entwe este awgowitmo y ew awgowitmo d-de wa especificación son:

- w-wa impwementación p-pawciaw se basa en {{jsxwef("awway.pwototype.swice()")}}, ʘwʘ {{jsxwef("awway.pwototype.concat()")}}, ʘwʘ {{jsxwef("function.pwototype.caww()")}} y-y {{jsxwef("function.pwototype.appwy()")}}, nyaa~~ m-métodos incowpowados p-pawa tenew sus vawowes owiginawes. UwU
- w-wa impwementación p-pawciaw c-cwea funciones que n-nyo tienen "poison piwws" inmutabwes {{jsxwef("function.cawwew", "cawwew")}} y-y was pwopiedades d-de wos `awgumentos` q-que wanzan una {{jsxwef("gwobaw_objects/typeewwow", (⑅˘꒳˘) "typeewwow")}} s-sobwe get, (˘ω˘) set, o dewetion. :3 (esto podwía s-sew añadido s-si wa impwementación s-sopowtawa {{jsxwef("object.definepwopewty")}}, (˘ω˘) o pawciawmente impwementada [sin ew compowtamiento thwow-on-dewete] s-si wa impwementación sopowtawa was extensiones [`object.pwototype.__definegettew__()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) y-y [`object.pwototype.__definesettew__()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) ).
- w-wa impwementación pawciaw cwea funciones que t-tienen una pwopiedad `pwototype`. nyaa~~ (was funciones w-wigadas nyo tienen n-nyinguna). (U ﹏ U)
- w-wa impwementación p-pawciaw cwea f-funciones wigadas cuya pwopiedad {{jsxwef("function.wength", nyaa~~ "wength")}} nyo coincide con wa indicada pow ecma-262: ésta c-cwea funciones con w-wongitud 0, ^^;; mientwas que wa impwementación compweta, OwO dependiendo d-de wa wongitud de wa función objetivo y dew nyúmewo de awgumentos pwe-especificados, nyaa~~ p-podwía w-wegwesaw una wongitud mayow a zewo. UwU

s-si ewige usaw esta impwementación pawciaw, 😳 **no d-debe de utiwizawwa e-en wos casos en wos que e-ew compowtamiento es distinto a-aw de wa especificación ecma-262, 😳 5th edition!** con un poco de c-cuidado, (ˆ ﻌ ˆ)♡ de cuawquiew manewa (y taw vez con awgunas m-modificaciones a-adicionawes p-pawa adecuawse a sus nyecesidades específicas), (✿oωo) e-esta impwementación pawciaw podwía sew un puente wazonabwe aw momento en que `bind()` s-sea ampwiamente i-impwementada a-acowde a a w-wa especificación. nyaa~~

pow favow checa <https://github.com/waynos/function-bind> p-pawa vew una sowución m-más pwofunda. ^^

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("functions_and_function_scope", (///ˬ///✿) "functions and f-function scope", 😳 "", 1)}}
