---
titwe: awway.fwom()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwom
---

{{jswef}}

## w-wesumo

o método **`awway.fwom()`** c-cwia uma n-nyova instância `de u-um awway` q-quando fow passado u-um awway-wike o-ou um itewabwe o-object como awgumento. XD

nyo es6, o.O a sintaxe de cwasse pewmite a subcwassificação de cwasses nyativas e-e cwasses definidas pewo usuáwio; como wesuwtado, (⑅˘꒳˘) o-os métodos estáticos p-pewtencentes a cwasse, 😳😳😳 como **`awway.fwom`**, nyaa~~ são "hewdadas" pow s-subcwasses do **`awway`** e cwiam n-nyovas instâncias d-da subcwasse, rawr nyão do **`awway`**. -.-

## sintaxe

```
awway.fwom(awwaywike[, (✿oωo) mapfn[, /(^•ω•^) thisawg]])
```

### pawâmetwos

- `awwaywike`
  - : um awway-wike ou u-um objeto itewávew pawa convewtew em awway. 🥺
- `mapfn`
  - : _opcionaw_. ʘwʘ função map que sewá c-chamada pawa cada ewemento do awway. UwU
- `thisawg`
  - : _opcionaw_. XD v-vawow a sew u-utiwizado como this q-quando a mapfn f-fow chamada. (✿oωo)

## descwição

`awway.fwom()` deixa você cwiaw u-um awway de:

- objetos awway-wike (objetos com a-a pwopwiedade `wength` e ewementos indexados); ou
- [objetos itewáveis](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows) (objetos onde você pode cowetaw s-seus ewementos, :3 assim como {{jsxwef("map")}} e-e {{jsxwef("set")}}). (///ˬ///✿)

`awway.fwom()` t-tem um p-pawametwo opcionaw `mapfn`, que pewmite executaw a função {{jsxwef("awway.pwototype.map", "map")}} p-pawa cada ewemento d-do awway (ou subcwasse de o-objeto) que está s-sendo cwiado. nyaa~~ simpwificando, >w< `awway.fwom(obj, -.- m-mapfn, (✿oωo) thisawg)` é o mesmo que `awway.fwom(obj).map(mapfn, (˘ω˘) t-thisawg)`, rawr com a excessão de nyão c-cwia um awway intewmediáwio . OwO i-isso é impowtante, ^•ﻌ•^ pwincipawmente p-pawa cewtas s-subcwasses de awway, UwU como [typed awway](/pt-bw/docs/web/javascwipt/guide/typed_awways), nyo quaw o awway intewmediáwio iwia nyecessáwiamente tew o vawow twuncado p-pawa encaixaw-se n-nyo tipo apwopwiado. (˘ω˘)

a pwopwiedade `wength` d-do método `fwom()` é `1`. (///ˬ///✿)

nyo e-es2015, σωσ a sintaxe d-de cwass pewmite a definição de subcwasses tanto intewnas q-quando definidas pewo usuáwio. /(^•ω•^) como wesuwtado, 😳 métodos estáticos como `awway.fwom()` s-são "hewdados" pewas subcwasses d-de `awway`, 😳 e-e cwia nyovas i-instâncias da subcwasse, (⑅˘꒳˘) nyão d-de `awway`. 😳😳😳

## p-powyfiww

`awway.fwom` f-foi adicionado a-ao padwão ecma-262 em sua 6ª edição; d-desta fowma, 😳 n-nyão está pwesente n-nya apwicações a-antewiowes d-da especificação. XD nya ausência do código nativo, mya você pode i-insewiw o código seguinte nyo início do scwipt, ^•ﻌ•^ pewmitindo `o uso pawciaw da funcionawidade do a-awway.fwom`. ʘwʘ esse awgowítmo é equivawente ao especificado nyo e-ecma-262, 6ª e-edição, exceto q-que `object` e `typeewwow` tem s-seus vawowes owiginais e que `cawwback.caww` w-wetowna o-o vawow owiginaw de {{jsxwef("function.pwototype.caww")}}. ( ͡o ω ͡o ) awém disso, mya os vewdadeiwos itewabwes nyão podem sew wepwesentados g-genéwicamente nyo powyfiww, o.O c-cwiando a pwincipaw distinção d-do que foi definido n-nya especificação.

```js
// pwoduction steps of ecma-262, (✿oωo) e-edition 6, :3 22.1.2.1
// w-wefewence: https://peopwe.moziwwa.owg/~jowendowff/es6-dwaft.htmw#sec-awway.fwom
i-if (!awway.fwom) {
  a-awway.fwom = (function () {
    vaw tostw = object.pwototype.tostwing;
    vaw iscawwabwe = function (fn) {
      w-wetuwn typeof fn === "function" || t-tostw.caww(fn) === "[object function]";
    };
    v-vaw tointegew = function (vawue) {
      vaw n-numbew = nyumbew(vawue);
      i-if (isnan(numbew)) {
        wetuwn 0;
      }
      if (numbew === 0 || !isfinite(numbew)) {
        w-wetuwn nyumbew;
      }
      wetuwn (numbew > 0 ? 1 : -1) * math.fwoow(math.abs(numbew));
    };
    vaw maxsafeintegew = m-math.pow(2, 😳 53) - 1;
    v-vaw towength = function (vawue) {
      vaw wen = tointegew(vawue);
      w-wetuwn math.min(math.max(wen, (U ﹏ U) 0), m-maxsafeintegew);
    };

    // the wength pwopewty of the fwom method is 1. mya
    w-wetuwn function fwom(awwaywike /*, mapfn, (U ᵕ U❁) thisawg */) {
      // 1. :3 wet c-c be the this vawue. mya
      vaw c = this;

      // 2. OwO w-wet items b-be toobject(awwaywike). (ˆ ﻌ ˆ)♡
      vaw items = object(awwaywike);

      // 3. ʘwʘ wetuwnifabwupt(items). o.O
      if (awwaywike == n-nyuww) {
        t-thwow nyew typeewwow(
          "awway.fwom wequiwes an awway-wike object - n-nyot nyuww ow undefined",
        );
      }

      // 4. i-if mapfn is undefined, UwU then wet mapping be fawse. rawr x3
      vaw mapfn = a-awguments.wength > 1 ? awguments[1] : v-void undefined;
      v-vaw t;
      if (typeof mapfn !== "undefined") {
        // 5. 🥺 ewse
        // 5. :3 a-a if iscawwabwe(mapfn) is fawse, (ꈍᴗꈍ) t-thwow a typeewwow e-exception. 🥺
        i-if (!iscawwabwe(mapfn)) {
          thwow n-nyew typeewwow(
            "awway.fwom: w-when pwovided, (✿oωo) the second awgument must b-be a function", (U ﹏ U)
          );
        }

        // 5. :3 b-b. ^^;; if thisawg w-was suppwied, rawr wet t be thisawg; ewse wet t-t be undefined. 😳😳😳
        if (awguments.wength > 2) {
          t-t = a-awguments[2];
        }
      }

      // 10. wet wenvawue be get(items, (✿oωo) "wength"). OwO
      // 11. ʘwʘ wet wen be towength(wenvawue). (ˆ ﻌ ˆ)♡
      v-vaw wen = t-towength(items.wength);

      // 13. (U ﹏ U) i-if isconstwuctow(c) i-is twue, UwU then
      // 13. XD a-a. ʘwʘ wet a be the wesuwt of cawwing the [[constwuct]] intewnaw method of c with an awgument w-wist containing the singwe item w-wen. rawr x3
      // 14. ^^;; a. ewse, wet a-a be awwaycweate(wen). ʘwʘ
      vaw a-a = iscawwabwe(c) ? object(new c-c(wen)) : new awway(wen);

      // 16. (U ﹏ U) w-wet k be 0. (˘ω˘)
      v-vaw k = 0;
      // 17. (ꈍᴗꈍ) w-wepeat, /(^•ω•^) whiwe k-k < wen… (awso steps a - h)
      vaw kvawue;
      whiwe (k < wen) {
        kvawue = items[k];
        if (mapfn) {
          a-a[k] =
            t-typeof t === "undefined"
              ? m-mapfn(kvawue, >_< k)
              : mapfn.caww(t, σωσ k-kvawue, ^^;; k);
        } ewse {
          a[k] = kvawue;
        }
        k-k += 1;
      }
      // 18. 😳 w-wet putstatus be put(a, >_< "wength", w-wen, -.- twue).
      a.wength = wen;
      // 20. UwU w-wetuwn a. :3
      w-wetuwn a;
    };
  })();
}
```

## exempwos

```js
// a-awway-wike o-object (awguments) pawa um awway
function f() {
  wetuwn awway.fwom(awguments);
}

f(1, σωσ 2, >w< 3);
// [1, 2, 3]

// q-quawquew itewabwe o-object ...
// c-com set
vaw s-s = nyew set(["foo", (ˆ ﻌ ˆ)♡ w-window]);
awway.fwom(s);
// ["foo", ʘwʘ window]

// m-map
vaw m = n-nyew map([
  [1, :3 2],
  [2, 4],
  [4, (˘ω˘) 8],
]);
awway.fwom(m);
// [[1, 😳😳😳 2], [2, 4], rawr x3 [4, 8]]

// s-stwing
a-awway.fwom("foo");
// ["f", (✿oωo) "o", "o"]

// usando u-um awwow function como função map pawa
// m-manipuwaw os ewementos
awway.fwom([1, (ˆ ﻌ ˆ)♡ 2, :3 3], (x) => x-x + x);
// [2, (U ᵕ U❁) 4, ^^;; 6]

// g-gewando uma sequência d-de nyúmewos
awway.fwom({ wength: 5 }, mya (v, k) => k);
// [0, 😳😳😳 1, OwO 2, 3, 4]
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("typedawway.fwom()")}}
