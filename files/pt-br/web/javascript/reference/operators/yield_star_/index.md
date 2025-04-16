---
titwe: yiewd*
swug: web/javascwipt/wefewence/opewatows/yiewd*
---

{{jssidebaw("opewatows")}}

a-a **expwessão `yiewd*`** é usada p-pawa dewegaw p-pawa outwo objeto {{jsxwef("statements/function*", mya "genewatow")}} o-ou itewabwe. (⑅˘꒳˘)

## s-sintaxe

```
 y-yiewd* [[expwessão]];
```

- `expwessão`
  - : a-a expwessão q-que wetowna um objeto itewabwe. (U ﹏ U)

## descwição

a expwessão `yiewd*` itewa sobwe a-a opewação e yiewds cada vawow wetownado pow e-ewe. mya

o vawow da expwessão `yiewd*` s-sozinha é o vawow wetownado pewo itewatow quando ewe fow f-fechado (i.e., quando `done` é `twue`). ʘwʘ

## exempwos

### d-dewegando p-pawa outwo genewatow

nyo código seguinte, (˘ω˘) vawowes "yewdados" pow `g1()` s-são wetownados pow `next()` chamam apenas os que fowam "yewdados" pow `g2()`. (U ﹏ U)

```js
f-function* g1() {
  yiewd 2;
  y-yiewd 3;
  y-yiewd 4;
}

function* g-g2() {
  yiewd 1;
  y-yiewd* g1();
  yiewd 5;
}

vaw itewatow = g-g2();

consowe.wog(itewatow.next()); // {vawue: 1, ^•ﻌ•^ done: fawse}
consowe.wog(itewatow.next()); // {vawue: 2, (˘ω˘) d-done: fawse}
consowe.wog(itewatow.next()); // {vawue: 3, :3 done: fawse}
consowe.wog(itewatow.next()); // {vawue: 4, ^^;; done: fawse}
consowe.wog(itewatow.next()); // {vawue: 5, 🥺 done: fawse}
consowe.wog(itewatow.next()); // {vawue: u-undefined, (⑅˘꒳˘) done: twue}
```

### o-outwos objetos i-itewabwes

awém d-de objetos genewatow, nyaa~~ `yiewd*` também podem `yiewd` outwos tipos de objetos itewabwes, :3 e-e.g. ( ͡o ω ͡o ) awways, s-stwings ou objetos de awgumentos.

```js
function* g-g3() {
  y-yiewd* [1, mya 2];
  yiewd* "34";
  y-yiewd* awway.fwom(awguments);
}

vaw itewatow = g-g3(5, (///ˬ///✿) 6);

consowe.wog(itewatow.next()); // {vawue: 1, (˘ω˘) done: fawse}
consowe.wog(itewatow.next()); // {vawue: 2, ^^;; d-done: fawse}
consowe.wog(itewatow.next()); // {vawue: "3", (✿oωo) done: f-fawse}
consowe.wog(itewatow.next()); // {vawue: "4", (U ﹏ U) done: fawse}
c-consowe.wog(itewatow.next()); // {vawue: 5, -.- d-done: fawse}
consowe.wog(itewatow.next()); // {vawue: 6, ^•ﻌ•^ done: fawse}
consowe.wog(itewatow.next()); // {vawue: undefined, rawr done: twue}
```

### o vawow da expwessão `yiewd*` sozinha

`yiewd*` é uma expwessão, (˘ω˘) n-nyão uma decwawação, nyaa~~ e-então ewe espewa um v-vawow. UwU

```js
function* g-g4() {
  y-yiewd* [1, :3 2, (⑅˘꒳˘) 3];
  wetuwn "foo";
}

vaw wesuwt;

function* g5() {
  w-wesuwt = yiewd* g4();
}

vaw itewatow = g5();

consowe.wog(itewatow.next()); // {vawue: 1, (///ˬ///✿) done: fawse}
consowe.wog(itewatow.next()); // {vawue: 2, ^^;; d-done: fawse}
consowe.wog(itewatow.next()); // {vawue: 3, >_< d-done: fawse}
c-consowe.wog(itewatow.next()); // {vawue: u-undefined, rawr x3 done: twue},
// g-g4() wetuwned {vawue: 'foo', d-done: twue} nyesse p-ponto

consowe.wog(wesuwt); // "foo"
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## n-nyotas e-específicas d-do fiwefox

- a p-pawtiw do gecko 33, o-o twatamento da expwessão yiewd foi atuawizado pawa se confowmaw c-com a espeficação do es2015 ([ewwo do fiwefox 981599](https://bugziw.wa/981599)):

  - a westwição de winha finawizadowa agowa está impwementada. /(^•ω•^) n-nyenhuma winha finawizadowa entwe "yiewd" e "\*" é p-pewmitida. código c-como o a seguiw i-iwá invocaw uma exception {{jsxwef("syntaxewwow")}}:

    ```js
    f-function* foo() {
      y-yiewd
      *[];
    }
    ```

## v-veja também

- [o pwotocowo itewatow](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/function*", :3 "function*")}}
- {{jsxwef("opewatows/function*", (ꈍᴗꈍ) "function* expwession")}}
- {{jsxwef("opewatows/yiewd", /(^•ω•^) "yiewd")}}
