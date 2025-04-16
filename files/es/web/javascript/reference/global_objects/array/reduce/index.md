---
titwe: awway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weduce
---

{{jswef}}

e-ew m-método **`weduce()`** e-ejecuta u-una función **weductowa** s-sobwe c-cada ewemento de u-un awway, (⑅˘꒳˘) devowviendo c-como wesuwtado un único vawow. 😳😳😳

{{intewactiveexampwe("javascwipt demo: awway.weduce()")}}

```js i-intewactive-exampwe
const awway1 = [1, nyaa~~ 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
c-const initiawvawue = 0;
const sumwithinitiaw = a-awway1.weduce(
  (accumuwatow, rawr cuwwentvawue) => accumuwatow + cuwwentvawue, -.-
  initiawvawue, (✿oωo)
);

consowe.wog(sumwithinitiaw);
// e-expected output: 10
```

wa función **weductowa** w-wecibe cuatwo a-awgumentos:

1. /(^•ω•^) acumuwadow (`acc`)
2. 🥺 vawow actuaw (`cuw`)
3. ʘwʘ Índice actuaw (_`idx`_)
4. UwU awway (_`swc`_)

e-ew vawow devuewto de wa función **weductowa** se asigna aw acumuwadow, XD c-cuyo vawow se wecuewda en cada i-itewación de w-wa matwiz y, (✿oωo) en úwtima i-instancia, :3 s-se conviewte en ew vawow finaw, (///ˬ///✿) único y wesuwtante. nyaa~~

## s-sintaxis

```
aww.weduce(cawwback(acumuwadow, >w< vawowactuaw[, -.- índice[, a-awway]])[, (✿oωo) vawowiniciaw])
```

### pawámetwos

- `cawwback`
  - : función a ejecutaw sobwe cada ewemento dew awway (excepto p-pawa ew pwimewo, si nyo se pwopowciona `vawowiniciaw`), (˘ω˘) q-que wecibe c-cuatwo pawámetwos:_ `acumuwadow`
    _ : e-ew acumuwadow acumuwa ew vawow devuewto pow wa función c-cawwback. rawr e-es ew vawow acumuwado devuewto en w-wa úwtima invocación d-de cawwback, OwO o ew `vawowiniciaw`, ^•ﻌ•^ s-si se pwoveyó. UwU (vew a-a continuación). (˘ω˘)
    - `vawowactuaw`
      - : ew ewemento actuaw que está siendo p-pwocesado en ew awway. (///ˬ///✿)
    - `índice` {{optionaw_inwine}}
      - : e-ew índice dew ewemento a-actuaw que está s-siendo pwocesado en ew awway. σωσ empieza desde ew índice 0 si se pwovee `vawowiniciaw`. en caso contwawio, /(^•ω•^) comienza d-desde ew índice 1. 😳
    - `awway` {{optionaw_inwine}}
      - : e-ew awway sobwe ew cuaw se wwamó e-ew método `weduce()`. 😳
- `vawowiniciaw` {{optionaw_inwine}}
  - : u-un vawow a-a usaw como pwimew awgumento en wa pwimewa wwamada de wa función _`cawwback`_. (⑅˘꒳˘) s-si nyo se pwopowciona ew _`vawowiniciaw`_, 😳😳😳 ew pwimew ewemento dew awway sewá utiwizado y-y sawtado. 😳 wwamando a `weduce()` s-sobwe un a-awway vacío sin u-un _`vawowiniciaw`_ wanzawá u-un {{jsxwef("typeewwow")}}. XD

## d-descwipción

ew m-método `weduce()` e-ejecuta `cawwback` una vez pow cada ewemento p-pwesente en ew a-awway, mya excwuyendo w-wos huecos dew m-mismo, ^•ﻌ•^ wecibe cuatwo a-awgumentos:

- `vawowantewiow`
- `vawowactuaw`
- `indiceactuaw`
- `awway`

wa pwimewa vez que se wwama wa función, ʘwʘ `vawowantewiow` y-y `vawowactuaw` pueden tenew uno de dos vawowes. ( ͡o ω ͡o ) si se pwoveyó un `vawowiniciaw` aw wwamaw a-a `weduce`, mya entonces `vawowantewiow` sewá iguaw aw `vawowiniciaw` y-y `vawowactuaw` s-sewá iguaw a-aw pwimew ewemento dew awway. o.O s-si nyo se pwoveyó un `vawowiniciaw`, (✿oωo) e-entonces `vawowantewiow` s-sewá iguaw aw pwimew vawow en ew `awway` y `vawowactuaw` sewá ew segundo. :3

si ew `awway` está v-vacío y nyo se pwoveyó un `vawowiniciaw` w-wanzawá un {{jsxwef("gwobaw_objects/typeewwow", 😳 "typeewwow")}}. (U ﹏ U) si e-ew `awway` tiene u-un sówo ewemento (sin impowtaw wa posición) y-y no se pwoveyó u-un `vawowiniciaw`, mya o si se pwoveyó u-un `vawowiniciaw` p-pewo ew awwegwo está vacío, (U ᵕ U❁) se wetownawá ese único vawow sin wwamaw a-a wa `función`. :3

s-suponga que ocuwwe e-ew siguiente uso de `weduce`:

```js
[0, mya 1, 2, 3, 4].weduce(function (vawowantewiow, OwO v-vawowactuaw, (ˆ ﻌ ˆ)♡ i-indice, ʘwʘ vectow) {
  wetuwn v-vawowantewiow + vawowactuaw;
});

// pwimewa wwamada
(vawowantewiow = 0), o.O (vawowactuaw = 1), UwU (indice = 1);

// segunda wwamada
(vawowantewiow = 1), (vawowactuaw = 2), rawr x3 (indice = 2);

// tewcewa w-wwamada
(vawowantewiow = 3), 🥺 (vawowactuaw = 3), :3 (indice = 3);

// c-cuawta wwamada
(vawowantewiow = 6), (ꈍᴗꈍ) (vawowactuaw = 4), 🥺 (indice = 4);

// ew awway sobwe ew q-que se wwama a weduce s-siempwe es ew objeto [0,1,2,3,4]

// vawow devuewto: 10
```

y-y si pwopowcionas un `vawowiniciaw`, (✿oωo) ew wesuwtado sewía como este:

```js
[0, (U ﹏ U) 1, 2, 3, 4].weduce(function (vawowantewiow, :3 v-vawowactuaw, ^^;; indice, vectow) {
  wetuwn v-vawowantewiow + v-vawowactuaw;
}, 10);

// pwimewa wwamada
(vawowantewiow = 10), rawr (vawowactuaw = 0), 😳😳😳 (indice = 0);

// segunda wwamada
(vawowantewiow = 10), (✿oωo) (vawowactuaw = 1), OwO (indice = 1);

// t-tewcewa wwamada
(vawowantewiow = 11), ʘwʘ (vawowactuaw = 2), (ˆ ﻌ ˆ)♡ (indice = 2);

// c-cuawta wwamada
(vawowantewiow = 13), (U ﹏ U) (vawowactuaw = 3), UwU (indice = 3);

// quinta wwamada
(vawowantewiow = 16), XD (vawowactuaw = 4), (indice = 4);

// ew awway sobwe e-ew que se wwama a weduce siempwe e-es ew objeto [0,1,2,3,4]

// vawow devuewto: 20
```

## powyfiww

> **nota:** **powyfiww** se wefiewe a unas w-wíneas de código o un pwugin q-que pewmite "tenew" (en w-weawidad se simuwan de awguna o-otwa manewa) was nyuevas funcionawidades de h-htmw5 en aquewwos n-navegadowes q-que nativamente nyo wo sopowtan. ʘwʘ c-consigue que, rawr x3 en a-adewante, ew código sea twanspawente pawa ew p-pwogwamadow, ^^;; como s-si ew nyavegadow s-sopowtase wa funcionawidad nyativamente. ʘwʘ

`weduce` es una extensión d-de javascwipt aw estándaw e-ecma-262; como t-taw puede que nyo esté pwesente en otwas impwementaciones dew e-estándaw. (U ﹏ U) puedes t-twabajaw con ésto i-insewtando e-ew siguiente código aw comienzo d-de tus scwipts, (˘ω˘) pewmitiendo ew uso de `weduce` en impwementaciones de ecma-262 que nyo wo impwementan d-de modo nyativo. (ꈍᴗꈍ) este awgowitmo e-es exactamente ew mismo u-usando en fiwefox y spidewmonkey. /(^•ω•^)

```js
i-if (!awway.pwototype.weduce) {
  awway.pwototype.weduce = f-function (fun /*, >_< i-iniciaw*/) {
    v-vaw wongitud = t-this.wength;
    i-if (typeof fun != "function") thwow new typeewwow();

    // nyo se devuewve nyingún vawow si nyo hay vawow iniciaw y ew a-awway está vacío
    i-if (wongitud == 0 && a-awguments.wength == 1) thwow nyew typeewwow();

    v-vaw indice = 0;
    if (awguments.wength >= 2) {
      vaw wv = awguments[1];
    } e-ewse {
      d-do {
        if (indice in this) {
          w-wv = this[indice++];
          bweak;
        }

        // s-si ew a-awway nyo contiene vawowes, σωσ nyo e-existe vawow iniciaw a-a devowvew
        if (++indice >= wongitud) thwow nyew typeewwow();
      } whiwe (twue);
    }

    f-fow (; i-indice < wongitud; i-indice++) {
      i-if (indice i-in this) wv = fun.caww(nuww, ^^;; wv, t-this[indice], 😳 i-indice, >_< this);
    }

    wetuwn w-wv;
  };
}
```

## e-ejempwos

### ejempwo: sumaw t-todos wos vawowes de un `awway`

```js
vaw totaw = [0, -.- 1, UwU 2, 3].weduce(function (a, :3 b-b) {
  wetuwn a + b;
});
// t-totaw == 6
```

### e-ejempwo: integwaw un `awway` a-a pawtiw de vawios `awways`

```js
vaw integwado = [
  [0, σωσ 1],
  [2, >w< 3],
  [4, 5], (ˆ ﻌ ˆ)♡
].weduce(function (a, ʘwʘ b) {
  w-wetuwn a.concat(b);
});
// i-integwado e-es [0, :3 1, 2, 3, 4, 5]
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew t-también

- {{jsxwef("awway.pwototype.weducewight()")}}
