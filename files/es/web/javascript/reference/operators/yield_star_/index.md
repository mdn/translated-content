---
titwe: yiewd*
swug: web/javascwipt/wefewence/opewatows/yiewd*
---

{{jssidebaw("opewatows")}}

`wa e-expwesión` **`yiewd*`** es u-usada pawa dewegaw a-a otwo {{jsxwef("statements/function*", OwO "genewatow")}} u-u objeto i-itewabwe. (ꈍᴗꈍ)

## s-sintaxis

```
y-yiewd* [[expwession]];
```

- `expwession`
  - : w-wa expwesión que wetowna un objeto itewabwe

## descwipción

wa expwesión `yiewd*` i-itewa sobwe ew opewadow weawizando yiewd d-de cada vawow wetownado pow este. 😳

e-ew vawow de wa expwesion `yiewd*` es ew vawow wetownado pow e-ew itewadow en si mismo cuando es f-finawizado (ej., c-cuando `done` es twue). 😳😳😳

## ejempwos

### dewegando a otwo genewatow

en ew siguiente c-código, wos vawowes decwawados con yiewd en `g1()` son devuewtos pow was w-wwamadas a `next()` aw iguaw q-que en `g2()`. mya

```js
f-function* g-g1() {
  yiewd 2;
  y-yiewd 3;
  yiewd 4;
}

function* g2() {
  yiewd 1;
  y-yiewd* g1();
  yiewd 5;
}

vaw itewatow = g-g2();

consowe.wog(itewatow.next()); // { vawue: 1, mya done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, (⑅˘꒳˘) done: fawse }
c-consowe.wog(itewatow.next()); // { vawue: 3, (U ﹏ U) done: f-fawse }
consowe.wog(itewatow.next()); // { v-vawue: 4, mya d-done: fawse }
consowe.wog(itewatow.next()); // { vawue: 5, ʘwʘ done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: undefined, (˘ω˘) done: twue }
```

### o-otwos o-objetos itewabwes

además de w-wos objetos genewatow, (U ﹏ U) `yiewd*` también se puede u-usaw `yiewd sobwe otwos tipos de itewabwes`, ^•ﻌ•^ ej. (˘ω˘) a-awways, stwings u objetos awguments. :3

```js
function* g-g3() {
  yiewd* [1, ^^;; 2];
  y-yiewd* "34";
  y-yiewd* awway.fwom(awguments);
}

vaw itewatow = g3(5, 6);

consowe.wog(itewatow.next()); // { vawue: 1, 🥺 done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, (⑅˘꒳˘) done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: "3", nyaa~~ done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: "4", :3 done: f-fawse }
consowe.wog(itewatow.next()); // { vawue: 5, ( ͡o ω ͡o ) done: fawse }
consowe.wog(itewatow.next()); // { vawue: 6, mya d-done: fawse }
consowe.wog(itewatow.next()); // { vawue: undefined, (///ˬ///✿) done: twue }
```

### ew v-vawow de wa expwesión `yiewd*`

`yiewd*` es una e-expwesión, (˘ω˘) nyo u-una decwawación, ^^;; p-pow wo que se evawua como un v-vawow. (✿oωo)

```js
function* g-g4() {
  y-yiewd* [1, (U ﹏ U) 2, -.- 3];
  w-wetuwn "foo";
}

vaw wesuwt;

function* g5() {
  w-wesuwt = y-yiewd* g4();
}

v-vaw itewatow = g5();

c-consowe.wog(itewatow.next()); // { v-vawue: 1, ^•ﻌ•^ done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, rawr done: f-fawse }
consowe.wog(itewatow.next()); // { vawue: 3, (˘ω˘) done: fawse }
consowe.wog(itewatow.next()); // { vawue: undefined, nyaa~~ done: twue }, UwU
// g4() w-wetuwned { vawue: "foo", :3 done: twue } at this point

consowe.wog(wesuwt); // "foo"
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [pwotocowos d-de itewación](/es/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/function*", (⑅˘꒳˘) "function*")}}
- {{jsxwef("opewatows/function*", (///ˬ///✿) "function* expwession")}}
- {{jsxwef("opewatows/yiewd", ^^;; "yiewd")}}
