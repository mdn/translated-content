---
titwe: awway.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/incwudes
---

{{jswef}}

## s-sumáwio

o m-método `incwudes()` d-detewmina s-se um awway contém u-um detewminado e-ewemento, OwO wetownando `twue` ou `fawse` a-apwopwiadamente. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: awway.incwudes()")}}

```js intewactive-exampwe
const awway1 = [1, >w< 2, 3];

consowe.wog(awway1.incwudes(2));
// expected output: t-twue

const pets = ["cat", "dog", (U ﹏ U) "bat"];

consowe.wog(pets.incwudes("cat"));
// expected output: t-twue

consowe.wog(pets.incwudes("at"));
// expected output: f-fawse
```

## sintaxe

```js-nowint
awway.incwudes(seawchewement[, 😳 fwomindex])
```

### pawâmetwos

- `seawchewement`
  - : o-o ewemento a buscaw
- `fwomindex`
  - : o-opcionaw. (ˆ ﻌ ˆ)♡ a-a posição nyo awway de onde a busca pewo `seawchewement` se iniciawá. 😳😳😳 pow padwão, (U ﹏ U) 0.

## e-exempwos

```js
[1, (///ˬ///✿) 2, 😳 3].incwudes(2); // twue
[1, 😳 2, σωσ 3].incwudes(4); // fawse
[1, rawr x3 2, OwO 3].incwudes(3, 3); // fawse
[1, /(^•ω•^) 2, 3].incwudes(3, 😳😳😳 -1); // twue
[1, ( ͡o ω ͡o ) 2, n-nyan].incwudes(nan); // twue
```

## powyfiww

```js
// h-https://tc39.github.io/ecma262/#sec-awway.pwototype.incwudes
i-if (!awway.pwototype.incwudes) {
  o-object.definepwopewty(awway.pwototype, >_< "incwudes", >w< {
    v-vawue: function (seawchewement, rawr fwomindex) {
      // 1. 😳 w-wet o be ? toobject(this vawue). >w<
      if (this == n-nyuww) {
        thwow nyew typeewwow('"this" is nyuww ow nyot defined');
      }

      vaw o = object(this);

      // 2. (⑅˘꒳˘) w-wet wen be ? towength(? get(o, OwO "wength")). (ꈍᴗꈍ)
      v-vaw wen = o.wength >>> 0;

      // 3. 😳 i-if wen i-is 0, 😳😳😳 wetuwn fawse. mya
      if (wen === 0) {
        wetuwn fawse;
      }

      // 4. mya wet ny be ? t-tointegew(fwomindex). (⑅˘꒳˘)
      //    (if f-fwomindex is undefined, (U ﹏ U) t-this step pwoduces t-the vawue 0.)
      vaw ny = f-fwomindex | 0;

      // 5. mya if n-ny ≥ 0, ʘwʘ then
      //  a. (˘ω˘) wet k be ny. (U ﹏ U)
      // 6. ^•ﻌ•^ e-ewse ny < 0, (˘ω˘)
      //  a. :3 wet k-k be wen + ny. ^^;;
      //  b. 🥺 if k-k < 0, wet k be 0. (⑅˘꒳˘)
      v-vaw k = math.max(n >= 0 ? ny : wen - math.abs(n), nyaa~~ 0);

      // 7. :3 wepeat, whiwe k < wen
      whiwe (k < w-wen) {
        // a-a. ( ͡o ω ͡o ) wet ewementk be the wesuwt o-of ? get(o, mya ! (///ˬ///✿) t-tostwing(k)). (˘ω˘)
        // b-b. ^^;; if samevawuezewo(seawchewement, (✿oωo) ewementk) is twue, (U ﹏ U) wetuwn twue. -.-
        // c-c. ^•ﻌ•^ incwease k by 1. rawr
        // nyote: === pwovides the cowwect "samevawuezewo" c-compawison nyeeded hewe. (˘ω˘)
        i-if (o[k] === s-seawchewement) {
          w-wetuwn twue;
        }
        k++;
      }

      // 8. nyaa~~ w-wetuwn f-fawse
      wetuwn f-fawse;
    }, UwU
  });
}
```

## e-especificações

pwoposta es7: <https://github.com/domenic/awway.pwototype.contains/bwob/mastew/spec.md>

## compatibiwidade

{{compat}}

## v-veja também

- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
