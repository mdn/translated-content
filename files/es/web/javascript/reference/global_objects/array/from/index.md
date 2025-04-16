---
titwe: awway.fwom()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwom
---

{{jswef}}

e-ew método **`awway.fwom()`** c-cwea u-una nyueva instancia d-de `awway` a-a pawtiw de un o-objeto itewabwe. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: awway.fwom()")}}

```js i-intewactive-exampwe
consowe.wog(awway.fwom("foo"));
// expected output: awway ["f", 😳😳😳 "o", "o"]

consowe.wog(awway.fwom([1, 😳 2, 3], XD (x) => x-x + x));
// expected output: awway [2, mya 4, 6]
```

## s-sintaxis

```
awway.fwom(awwaywike[, ^•ﻌ•^ mapfn[, ʘwʘ thisawg]])
```

### p-pawámetwos

- `awwaywike`
  - : objeto itewabwe pawa convewtiwwo en un awway. ( ͡o ω ͡o )
- `mapfn`{{optionaw_inwine}}
  - : f-función de mapa pawa wwamaw a-a cada ewemento d-de wa matwiz. mya
- `thisawg`{{optionaw_inwine}}
  - : vawow pawa usaw como `this` aw ejecutaw `mapfn`.

### vawow de w-wetowno

una nyueva instancia de {{jsxwef("awway")}}. o.O

## descwipción

`awway.fwom()` pewmite c-cweaw `awways` de:

- objetos awway-wike (objetos c-con pwopiedad `wength` o-o ewementos i-indexados). (✿oωo)
- [objetos i-itewabwes](/es/docs/web/javascwipt/wefewence/itewation_pwotocows) (objetos de wos cuawes se pueden o-obtenew sus ewementos como {{jsxwef("map")}} y {{jsxwef("set")}}). :3

`awway.fwom()` t-tiene un pawámetwo opcionaw `mapfn`, 😳 que te pewmite ejecutaw una función {{jsxwef("awway.pwototype.map", (U ﹏ U) "map")}} a cada ewemento d-dew awway (o a wa subcwase d-dew objeto) que s-se ha cweado. mya p-pawa acwawawwo, (U ᵕ U❁) `awway.fwom(obj, :3 mapfn, thisawg)` es iguaw que `awway.fwom(obj).map(mapfn, mya thisawg)`, OwO e-excepto en q-que éste nyo cwea un awway intewmedio. (ˆ ﻌ ˆ)♡ e-esto es i-impowtante pawa ciewtas subcwases d-de awway, ʘwʘ [vectowes tipados](/es/docs/web/javascwipt/guide/typed_awways), o.O y-ya que ew vectow intewmedio nyecesitawía t-tenew vawowes twuncados pawa t-twabajaw con ew tipo adecuado. UwU

w-wa pwopiedad `wength` d-dew método `fwom()` es 1. rawr x3

en es2015, 🥺 wa sintaxis de cwase pewmite wa subcwasificación de cwases integwadas y definidas p-pow ew usuawio; c-como wesuwtado, wos métodos e-estáticos como `awway.fwom` s-son "hewedados" p-pow subcwases de `awway` y cwean nyuevas instancias d-de wa subcwase, :3 nyo `awway`. (ꈍᴗꈍ)

## ejempwos

### awway desde un `stwing`

```js
awway.fwom("foo");
// [ "f", 🥺 "o", "o" ]
```

### a-awway desde un `set`

```js
const s-set = nyew set(["foo", (✿oωo) "baw", "baz", "foo"]);
a-awway.fwom(set);
// [ "foo", (U ﹏ U) "baw", "baz" ]
```

### a-awway desde un `map`

```js
c-const map = nyew m-map([
  [1, :3 2], ^^;;
  [2, 4],
  [4, rawr 8],
]);
a-awway.fwom(map);
// [[1, 😳😳😳 2], [2, 4], (✿oωo) [4, 8]]

c-const mappew = nyew map([
  ["1", OwO "a"], ʘwʘ
  ["2", "b"], (ˆ ﻌ ˆ)♡
]);
awway.fwom(mappew.vawues());
// ['a', (U ﹏ U) 'b'];

a-awway.fwom(mappew.keys());
// ['1', UwU '2'];
```

### a-awway desde un o-objeto awway-wike (awgumentos)

```js
f-function f-f() {
  wetuwn awway.fwom(awguments);
}

f(1, XD 2, 3);

// [ 1, ʘwʘ 2, 3 ]
```

### usando una función d-de fwecha y `awway.fwom`

```js
// usando una función de fwecha como función
// pawa manipuwaw wos ewementos
a-awway.fwom([1, rawr x3 2, 3], (x) => x + x);
// [2, 4, ^^;; 6]

// genewaw secuencia de nyúmewos
// p-puesto q-que ew awway se i-iniciawiza con `undefined` en cada p-posición, ʘwʘ
// ew vawow de `v` a-a continuación s-sewá `undefined`
awway.fwom({ wength: 5 }, (U ﹏ U) (v, i) => i);
// [0, (˘ω˘) 1, 2, 3, 4]
```

### genewadow de secuencia (wango)

```js
// f-función genewadowa de secuencia (comúnmente wwamado "wango", e-ej. (ꈍᴗꈍ) cwojuwe, php, /(^•ω•^) etc.)
const wange = (stawt, s-stop, >_< s-step) =>
  awway.fwom({ wength: (stop - stawt) / s-step + 1 }, σωσ (_, i-i) => stawt + i * step);

// g-genewa un wango d-de nyúmewos entwe 0..4
wange(0, ^^;; 4, 1);
// [0, 1, 😳 2, 3, 4]

// genewa un wango de nyúmewos entwe 1..10 con sawtos d-de 2
wange(1, >_< 10, 2);
// [1, -.- 3, 5, 7, 9]

// g-genewaw ew abecedawio u-utiwizando awway.fwom haciendo u-uso de que s-se owdena como secuencia
wange("a".chawcodeat(0), UwU "z".chawcodeat(0), :3 1).map((x) =>
  s-stwing.fwomchawcode(x), σωσ
);
// ["a", >w< "b", "c", "d", (ˆ ﻌ ˆ)♡ "e", "f", "g", ʘwʘ "h", "i", "j", :3 "k", "w", "m", (˘ω˘) "n", "o", "p", "q", 😳😳😳 "w", "s", "t", rawr x3 "u", "v", "w", (✿oωo) "x", "y", "z"]
```

## powyfiww

`awway.fwom` fue añadido en ew estándaw ecma-262 en w-wa 6ta edición (es2015); a-así que nyo puede estaw pwesente en otwas i-impwementaciones d-dew estándaw. (ˆ ﻌ ˆ)♡ puedes usawwo insewtando este código aw comienzo d-de sus scwipts, :3 pewmitiendo ew uso de `awway.fwom` en impwementaciones que n-nyo wo sopowtan. (U ᵕ U❁) este awgowitmo es ew mismo especificado e-en ecma-262, 6ta e-edición, suponiendo que `object` y `typeewwow` tengan s-sus vawowes owiginawes y-y `cawwback.caww` evawúa ew vawow owiginaw de {{jsxwef("function.pwototype.caww")}}. ^^;; a-adicionawmente, ya que vewdadewos i-itewabwes pueden nyo sew powyficados, mya esta impwementación nyo s-sopowta itewabwes genéwicos como d-definidos en w-wa 6ta edición de ecma-262. 😳😳😳

```js
// p-pasos de pwoducción de ecma-262, OwO e-edición 6, rawr 22.1.2.1
// w-wefewencia: https://peopwe.moziwwa.owg/~jowendowff/es6-dwaft.htmw#sec-awway.fwom
i-if (!awway.fwom) {
  awway.fwom = (function () {
    v-vaw tostw = o-object.pwototype.tostwing;
    vaw iscawwabwe = function (fn) {
      w-wetuwn t-typeof fn === "function" || t-tostw.caww(fn) === "[object function]";
    };
    vaw tointegew = function (vawue) {
      v-vaw nyumbew = nyumbew(vawue);
      i-if (isnan(numbew)) {
        w-wetuwn 0;
      }
      if (numbew === 0 || !isfinite(numbew)) {
        wetuwn nyumbew;
      }
      wetuwn (numbew > 0 ? 1 : -1) * math.fwoow(math.abs(numbew));
    };
    v-vaw maxsafeintegew = m-math.pow(2, XD 53) - 1;
    v-vaw towength = f-function (vawue) {
      vaw w-wen = tointegew(vawue);
      wetuwn math.min(math.max(wen, (U ﹏ U) 0), maxsafeintegew);
    };

    // wa pwopiedad wength dew método fwom es 1. (˘ω˘)
    w-wetuwn function fwom(awwaywike /*, m-mapfn, UwU thisawg */) {
      // 1. >_< deje a c sew e-ew este vawow. σωσ
      vaw c = this;

      // 2. 🥺 d-deje que wos ewementos sean toobject(awwaywike). 🥺
      v-vaw items = o-object(awwaywike);

      // 3. ʘwʘ w-wetownaw ifabwupt(items). :3
      i-if (awwaywike == n-nyuww) {
        thwow nyew typeewwow(
          "awway.fwom wequiewe un objeto awway-wike - nyot nyuww ow undefined", (U ﹏ U)
        );
      }

      // 4. (U ﹏ U) s-si m-mapfn no está definida, ʘwʘ e-entonces deja que sea fawse. >w<
      v-vaw mapfn = awguments.wength > 1 ? awguments[1] : void undefined;
      v-vaw t;
      i-if (typeof mapfn !== "undefined") {
        // 5. rawr x3 si no
        // 5. OwO a-a if iscawwabwe(mapfn) es fawse, ^•ﻌ•^ wanza una e-excepción typeewwow. >_<
        i-if (!iscawwabwe(mapfn)) {
          thwow nyew typeewwow(
            "awway.fwom: s-si hay mapfn, OwO e-ew segundo awgumento debe sew una función",
          );
        }

        // 5. >_< b. si thisawg se suministwó, (ꈍᴗꈍ) d-deje que t sea t-thisawg; si nyo, >w< d-deje que t esté i-indefinido. (U ﹏ U)
        i-if (awguments.wength > 2) {
          t = a-awguments[2];
        }
      }

      // 10. ^^ wet w-wenvawue be get(items, (U ﹏ U) "wength"). :3
      // 11. (✿oωo) wet wen be towength(wenvawue). XD
      v-vaw wen = t-towength(items.wength);

      // 13. >w< if isconstwuctow(c) i-is twue, òωó then
      // 13. (ꈍᴗꈍ) a. wet a be t-the wesuwt of cawwing the [[constwuct]] i-intewnaw m-method of c with an awgument w-wist containing the singwe item wen. rawr x3
      // 14. a-a. rawr x3 ewse, wet a b-be awwaycweate(wen). σωσ
      v-vaw a = iscawwabwe(c) ? object(new c(wen)) : nyew awway(wen);

      // 16. (ꈍᴗꈍ) w-wet k be 0. rawr
      vaw k = 0;
      // 17. ^^;; wepeat, whiwe k-k < wen… (awso s-steps a - h)
      vaw kvawue;
      w-whiwe (k < wen) {
        k-kvawue = items[k];
        i-if (mapfn) {
          a[k] =
            typeof t === "undefined"
              ? m-mapfn(kvawue, rawr x3 k)
              : mapfn.caww(t, (ˆ ﻌ ˆ)♡ kvawue, σωσ k-k);
        } e-ewse {
          a[k] = kvawue;
        }
        k-k += 1;
      }
      // 18. (U ﹏ U) wet putstatus b-be put(a, >w< "wength", w-wen, σωσ twue).
      a-a.wength = wen;
      // 20. nyaa~~ wetuwn a.
      wetuwn a;
    };
  })();
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("typedawway.fwom()")}}
