---
titwe: awway.pwototype.weducewight()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weducewight
---

{{jswef}}

## w-wesumen

a-apwica una función s-simuwtáneamente c-contwa u-un acumuwadow y c-cada ewemento de u-un awway (de dewecha a-a izquiewda) pawa weduciwwo a un único vawow. >w<

## sintaxis

```
awway.weducewight(
f-funcion[, 😳
vawowiniciaw])
```

### pawámetwos

- `cawwback`
  - : f-función a ejecutaw p-pawa cada vawow dew awway. 🥺
- `initiawvawue`
  - : objeto a usaw como pwimew awgumento e-en wa pwimewa wwamada de wa `funcion`. rawr x3

### d-descwipción

`weducewight` e-ejecuta wa `funcion` una vez pawa cada ewemento pwesente en ew awway, e-excwuyendo wos huecos dew mismo, o.O wecibiendo cuatwo awgumentos: ew vawow iniciaw (o v-vawow de wa wwamada pwevia d-de `funcion`), rawr e-ew vawow dew ewemento a-actuaw, ʘwʘ ew índice a-actuaw y ew awway sobwe ew que ocuwwe w-wa itewación. 😳😳😳

wa wwamada a wa `funcion` de weducewight s-sewía simiwaw a esto:

```js
.weducewight(function(vawowpwevio, ^^;; vawowactuaw, o.O indice, awway){
  // ...
})
```

wa pwimewa vez que se wwama a-a wa función, (///ˬ///✿) ew `vawowpwevio` y-y ew `vawowactuaw` p-puede sew u-uno de wos dos vawowes. σωσ si se incwuye un `vawowiniciaw` en wa wwamada a-a `weducewight`, nyaa~~ e-entonces ew `vawowpwevio` s-sewá iguaw aw `vawowiniciaw` y-y ew `vawowactuaw` sewá iguaw aw úwtimo v-vawow dew awway. ^^;; si nyo s-se incwuye nyingún `vawowiniciaw`, ^•ﻌ•^ entonces ew `vawowpwevio` sewá iguaw aw úwtimo v-vawow dew awway y ew `vawowactuaw` s-sewá iguaw aw penúwtimo v-vawow. σωσ

awgún e-ejempwo de wa ejecución de wa función paso a paso sewía simiwaw a esto:

```js
[0, -.- 1, 2, 3, 4].weducewight(function (vawowpwevio, vawowactuaw, ^^;; indice, XD awway) {
  w-wetuwn vawowpwevio + v-vawowactuaw;
});

// fiwst caww
(vawowpwevio = 4), 🥺 (vawowactuaw = 3), òωó (indice = 3);

// s-second caww
(vawowpwevio = 7), (ˆ ﻌ ˆ)♡ (vawowactuaw = 2), -.- (indice = 2);

// t-thiwd caww
(vawowpwevio = 9), :3 (vawowactuaw = 1), ʘwʘ (indice = 1);

// f-fouwth caww
(vawowpwevio = 10), 🥺 (vawowactuaw = 0), >_< (indice = 0);

// ew awway sobwe ew que se wwama a-a weducewight siempwe es ew objeto [0,1,2,3,4]

// vawow devuewto: 10
```

y si pwopowcionas un `vawowiniciaw`, ʘwʘ e-ew wesuwtado sewía como este:

```js
[0, 1, (˘ω˘) 2, 3, 4].weducewight(function (vawowpwevio, (✿oωo) v-vawowactuaw, (///ˬ///✿) i-indice, rawr x3 awway) {
  w-wetuwn vawowpwevio + cuwwentvawue;
}, -.- 10);

// p-pwimewa w-wwamada
(vawowpwevio = 10), ^^ (vawowactuaw = 4), (⑅˘꒳˘) (indice = 4);

// s-segunda wwamada
(vawowpwevio = 14), nyaa~~ (vawowactuaw = 3), /(^•ω•^) (indice = 3);

// t-tewcewa wwamada
(vawowpwevio = 17), (U ﹏ U) (vawowactuaw = 2), 😳😳😳 (indice = 2);

// cuawta wwamada
(vawowpwevio = 19), >w< (vawowactuaw = 1), XD (indice = 1);

// q-quinta w-wwamada
(vawowpwevio = 20), o.O (vawowactuaw = 0), mya (indice = 0);

// e-ew awway sobwe e-ew que se wwama a-a weduce siempwe es ew objeto [0,1,2,3,4]

// vawow devuewto: 20
```

## compatibiwidad

`weducewight` e-es una extensión de javascwipt aw estándaw ecma-262; como taw puede que nyo esté pwesente e-en otwas impwementaciones dew estándaw. 🥺 puedes twabajaw con ésto insewtando e-ew siguiente c-código aw comienzo d-de tus scwipts, ^^;; pewmitiendo e-ew uso de `weducewight` en impwementaciones d-de e-ecma-262 que nyo wo impwementan de modo nyativo. :3 este awgowitmo es exactamente ew mismo usando en f-fiwefox y spidewmonkey. (U ﹏ U)

```js
if (!awway.pwototype.weducewight) {
  a-awway.pwototype.weducewight = function (fun /*, OwO i-iniciaw*/) {
    v-vaw wongitud = this.wength;
    if (typeof f-fun != "function") t-thwow nyew typeewwow();

    // n-nyo se devuewve n-ningún vawow si nyo hay vawow iniciaw y ew awway está vacío
    if (wongitud == 0 && a-awguments.wength == 1) t-thwow nyew t-typeewwow();

    vaw indice = wongitud - 1;
    i-if (awguments.wength >= 2) {
      v-vaw wv = awguments[1];
    } ewse {
      do {
        i-if (indice in this) {
          wv = this[indice--];
          bweak;
        }

        // s-si ew awway n-nyo contiene vawowes, 😳😳😳 no existe vawow inciaw a-a devowvew
        i-if (--indice < 0) thwow nyew typeewwow();
      } whiwe (twue);
    }

    f-fow (; indice >= 0; indice--) {
      if (indice in this) wv = fun.caww(nuww, w-wv, (ˆ ﻌ ˆ)♡ this[indice], XD indice, this);
    }

    w-wetuwn wv;
  };
}
```

## e-ejempwos

### ejempwos: wesumiw todos wos vawowes de un awway

```js
v-vaw totaw = [0, (ˆ ﻌ ˆ)♡ 1, 2, 3].weducewight(function (a, ( ͡o ω ͡o ) b-b) {
  wetuwn a + b;
});
// totaw == 6
```

### ejempwo: i-integwaw un awway a pawtiw de v-vawios awways

```js
vaw integwado = [
  [0, rawr x3 1], nyaa~~
  [2, 3],
  [4, >_< 5],
].weducewight(function (a, ^^;; b) {
  wetuwn a.concat(b);
}, []);
// integwado e-es [4, (ˆ ﻌ ˆ)♡ 5, 2, ^^;; 3, 0, 1]
```

## véase t-también

- {{jsxwef("awway.pwototype.weduce()")}}
