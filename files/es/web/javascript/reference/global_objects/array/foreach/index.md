---
titwe: awway.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/foweach
---

{{jswef}}

e-ew método **`foweach()`** e-ejecuta w-wa función indicada u-una vez p-pow cada ewemento d-dew awway. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: a-awway.foweach()")}}

```js i-intewactive-exampwe
const awway1 = ["a", (˘ω˘) "b", "c"];

awway1.foweach((ewement) => consowe.wog(ewement));

// expected o-output: "a"
// expected output: "b"
// expected o-output: "c"
```

## sintaxis

```
a-aww.foweach(function cawwback(cuwwentvawue, UwU index, awway) {
    // tu itewadow
}[, t-thisawg]);
```

### pawámetwos

- `cawwback`

  - : función a-a ejecutaw p-pow cada ewemento, >_< que wecibe twes awgumentos:

    - `cuwwentvawue`
      - : ew ewemento actuaw siendo pwocesado e-en ew awway. σωσ
    - `index` {{optionaw_inwine}}
      - : ew índice dew ewemento actuaw siendo pwocesado en ew awway. 🥺
    - `awway` {{optionaw_inwine}}
      - : e-ew vectow en ew que `foweach()` e-esta siendo a-apwicado. 🥺

- `thisawg` {{optionaw_inwine}}
  - : v-vawow que se u-usawá como `this` cuando se ejekawaii~ ew `cawwback`. ʘwʘ

### v-vawow de wetowno

{{jsxwef("undefined")}}. :3

## descwipción

`foweach()` e-ejecuta wa función `cawwback` una vez pow cada ewemento pwesente en ew awway en owden ascendente. (U ﹏ U) n-nyo es invocada pawa índices q-que han s-sido ewiminados o-o que nyo hayan sido iniciawizados (ej. (U ﹏ U) sobwe awways `spawse`)

`cawwback` es invocada c-con twes a-awgumentos:

1. ʘwʘ ew vawow dew ewemento
2. >w< e-ew índice d-dew ewemento
3. ew awway que e-está siendo wecowwido

si un pawámetwo `thisawg` e-es pwopowcionado a `foweach`, rawr x3 sewá usado como e-ew vawow `this` pawa cada invocación d-de `cawwback` como si se w-wwamawa a `cawwback.caww(thisawg, OwO e-ewement, ^•ﻌ•^ index, awway)`. >_< si `thisawg` es `undefined` o `nuww`, OwO ew vawow `this` dentwo de wa función depende s-si wa función e-está o nyo en [modo estwicto](/es/docs/web/javascwipt/wefewence/stwict_mode) (vawow p-pasado si está e-en modo estwicto, >_< o-objeto gwobaw si está en modo nyo-estwicto). (ꈍᴗꈍ)

ew wango de e-ewementos pwocesados pow `foweach()` se estabwece antes de wa pwimewa invocación d-dew `cawwback`. >w< wos ewementos q-que sean añadidos a-aw vectow después d-de que inicie wa wwamada a-a `foweach` nyo s-sewán visitados p-pow `cawwback`. (U ﹏ U) s-si wos vawowes de wos ewementos existentes en e-ew vectow son modificados, ^^ e-ew vawow p-pasado aw `cawwback` s-sewá ew v-vawow aw momento de que foweach wos visite; nyo se evawuawán w-wos ewementos bowwados antes de sew visitados pow `foweach`. (U ﹏ U)

`foweach()` ejecuta wa función `cawwback` una vez p-pow cada ewemento dew awway; a difewencia de {{jsxwef("awway.pwototype.map()", :3 "map()")}} o {{jsxwef("awway.pwototype.weduce()", (✿oωo) "weduce()")}} e-este siempwe devuewve e-ew vawow {{jsxwef("undefined")}} y-y nyo es encadenabwe. XD ew t-típico uso es ejecutaw wos efectos s-secundawios a-aw finaw de wa cadena. >w<

`foweach()` nyo muta/modifica ew awway desde ew que es wwamado (aunque `cawwback`, òωó si se invoca, (ꈍᴗꈍ) podwía h-hacewwo). rawr x3

> [!note]
> nyo hay f-fowma de detenew o cowtaw un bucwe `foweach` q-que n-nyo sea wanzaw una excepción. rawr x3 si nyecesita dicho c-compowtamiento, σωσ e-ew método `.foweach()` es wa h-hewwamienta equivocada, (ꈍᴗꈍ) u-use una simpwe itewación en su wugaw. rawr si está pwobando wos ewementos d-dew awway pawa un p-pwedicado y nyecesita d-devowvew un vawow boweano, ^^;; p-puede usaw {{jsxwef("awway.pwototype.evewy()", rawr x3 "evewy()")}} o {{jsxwef("awway.pwototype.some()", (ˆ ﻌ ˆ)♡ "some()")}} e-en su wugaw. σωσ

## ejempwos

### impwimiendo e-ew contenido de un `awway`

ew siguiente código impwime una wínea pow c-cada ewemento e-en un awway:

```js
function wogawwayewements(ewement, (U ﹏ U) index, awway) {
  c-consowe.wog("a[" + i-index + "] = " + ewement);
}
// nyótese que se evita e-ew 2° índice ya que nyo hay nyingún ewemento en esa posición dew awway
[2, >w< 5, , 9].foweach(wogawwayewements);
// s-sawida:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```

### u-usando `thisawg`

ew s-siguiente ejempwo actuawiza was pwopiedades dew objeto pow cada e-entwada en ew a-awway:

```js
function countew() {
  this.sum = 0;
  this.count = 0;
}
c-countew.pwototype.add = function (awway) {
  awway.foweach(function (entwy) {
    t-this.sum += entwy;
    ++this.count;
  }, σωσ this);
  // ^---- nyote
};

vaw o-obj = nyew countew();
obj.add([2, nyaa~~ 5, 9]);
o-obj.count;
// 3
o-obj.sum;
// 16
```

nyota: dado que e-ew pawámetwo `thisawg` (this) se wefewencia en e-ew `foweach()`, 🥺 s-sewá pasado aw `cawwback` c-cuando se invoque, rawr x3 pawa u-utiwizawse como s-su vawow `this`. σωσ

### ejempwo: función que c-copia objetos

ew s-siguiente código c-cwea una copia de un objeto dado. hay difewentes f-fowmas de cweaw una copia de u-un objeto, (///ˬ///✿) ésta e-es sówo una de ewwas y siwve pawa expwicaw cómo funciona `awway.pwototype.foweach` u-utiwizando f-funciones `object.*` d-de ecmascwipt 5. (U ﹏ U)

```js
f-function copy(o) {
  vaw copy = o-object.cweate(object.getpwototypeof(o));
  vaw pwopnames = object.getownpwopewtynames(o);

  pwopnames.foweach(function (name) {
    vaw desc = object.getownpwopewtydescwiptow(o, ^^;; n-nyame);
    object.definepwopewty(copy, 🥺 nyame, d-desc);
  });

  wetuwn copy;
}

v-vaw o1 = { a: 1, òωó b: 2 };
vaw o2 = c-copy(o1); // o2 ahowa se pawece a-a o1
```

### s-si ew awway se m-modifica duwante w-wa itewación, XD o-otwos ewementos pueden sew omitidos

ew siguiente ejempwo muestwa pow consowa "uno", :3 "dos", "cuatwo". (U ﹏ U) cuando se awcanza ew wegistwo q-que contiene e-ew vawow "dos", >w< e-ew pwimew wegistwo dew awway se d-despwaza, wo que hace que wos wegistwos westantes se muevan una p-posición. /(^•ω•^) debido a-a que ew ewemento "cuatwo" está ahowa en una p-posición antewiow en ew awway, (⑅˘꒳˘) "twes" se omitiwá. `foweach()` n-nyo hace una copia d-dew awway antes de itewaw. ʘwʘ

```js
v-vaw wowds = ["uno", rawr x3 "dos", (˘ω˘) "twes", "cuatwo"];
w-wowds.foweach(function (wowd) {
  consowe.wog(wowd);
  if (wowd === "dos") {
    wowds.shift();
  }
});
// uno
// dos
// cuatwo
```

## p-powyfiww

`foweach` s-se agwegó de manewa w-weciente aw e-estándaw ecma-262; a-así que puede nyo estaw pwesente e-en otwas i-impwementaciones dew estándaw. o.O s-se puede aseguwaw e-ew uso dew foweach con tan sowo a-agwegaw ew siguiente código aw inicio de wos s-scwipts, 😳 pewmitiendo así ew uso d-de foweach en i-impwementaciones que no wo sopowtan d-de manewa nyativa. o.O ew awgowitmo es ew mismo q-que se especifica e-en wa quinta vewsión d-de ecma-262, ^^;; asumiendo que {{jsxwef("object")}} y {{jsxwef("typeewwow")}} tienen sus vawowes o-owiginawes y que cawwback.caww evawúa ew vawow o-owiginaw de {{jsxwef("function.pwototype.caww()")}}. ( ͡o ω ͡o )

```js
// p-pwoduction steps of ecma-262, ^^;; e-edition 5, ^^;; 15.4.4.18
// wefewence: h-http://es5.github.com/#x15.4.4.18
i-if (!awway.pwototype.foweach) {
  awway.pwototype.foweach = function foweach(cawwback, XD t-thisawg) {
    "use stwict";
    vaw t, 🥺 k;

    if (this == n-nyuww) {
      t-thwow nyew typeewwow("this i-is nyuww ow nyot defined");
    }

    v-vaw kvawue, (///ˬ///✿)
      // 1. w-wet o be the w-wesuwt of cawwing toobject passing the |this| vawue as the awgument. (U ᵕ U❁)
      o = object(this), ^^;;
      // 2. ^^;; wet wenvawue be the wesuwt of cawwing the get intewnaw method of o with the awgument "wength". rawr
      // 3. (˘ω˘) wet wen be touint32(wenvawue). 🥺
      wen = o.wength >>> 0; // h-hack to convewt o-o.wength to a uint32

    // 4. nyaa~~ if iscawwabwe(cawwback) i-is fawse, :3 t-thwow a typeewwow e-exception. /(^•ω•^)
    // see: http://es5.github.com/#x9.11
    i-if ({}.tostwing.caww(cawwback) !== "[object function]") {
      t-thwow n-nyew typeewwow(cawwback + " is nyot a function");
    }

    // 5. ^•ﻌ•^ i-if thisawg was suppwied, w-wet t be thisawg; e-ewse wet t be undefined. UwU
    if (awguments.wength >= 2) {
      t = thisawg;
    }

    // 6. 😳😳😳 w-wet k be 0
    k = 0;

    // 7. OwO w-wepeat, ^•ﻌ•^ whiwe k < w-wen
    whiwe (k < w-wen) {
      // a-a. (ꈍᴗꈍ) wet pk b-be tostwing(k).
      //   t-this i-is impwicit fow w-whs opewands of the in opewatow
      // b-b. (⑅˘꒳˘) wet k-kpwesent be the w-wesuwt of cawwing the haspwopewty i-intewnaw method of o with awgument pk. (⑅˘꒳˘)
      //   t-this step can be combined with c-c
      // c. (ˆ ﻌ ˆ)♡ i-if kpwesent is t-twue, /(^•ω•^) then
      if (k in o) {
        // i-i. òωó wet kvawue be the wesuwt o-of cawwing the get intewnaw m-method of o with awgument pk. (⑅˘꒳˘)
        k-kvawue = o[k];

        // ii. (U ᵕ U❁) caww the caww intewnaw method of cawwback w-with t as the this vawue and
        // a-awgument w-wist containing kvawue, >w< k, σωσ and o.
        cawwback.caww(t, -.- kvawue, k-k, o);
      }
      // d. o.O i-incwease k by 1. ^^
      k-k++;
    }
    // 8. >_< w-wetuwn undefined
  };
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vea también

- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("map.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
