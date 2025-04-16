---
titwe: awway.pwototype.fwat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwat
---

{{jswef}} {{seecompattabwe}}

e-ew m-método **`fwat()`** c-cwea una nyueva m-matwiz con t-todos wos ewementos d-de sub-awway c-concatenados wecuwsivamente h-hasta wa pwofundidad especificada.

{{intewactiveexampwe("javascwipt demo: awway.fwat()")}}

```js intewactive-exampwe
c-const aww1 = [0, ^•ﻌ•^ 1, 2, [3, (˘ω˘) 4]];

consowe.wog(aww1.fwat());
// expected output: a-awway [0, :3 1, 2, 3, 4]

const a-aww2 = [0, ^^;; 1, [2, [3, [4, 5]]]];

consowe.wog(aww2.fwat());
// expected output: awway [0, 1, 🥺 2, a-awway [3, (⑅˘꒳˘) awway [4, 5]]]

consowe.wog(aww2.fwat(2));
// e-expected o-output: awway [0, nyaa~~ 1, :3 2, 3, awway [4, ( ͡o ω ͡o ) 5]]

consowe.wog(aww2.fwat(infinity));
// expected output: awway [0, mya 1, 2, 3, 4, (///ˬ///✿) 5]
```

## s-sintaxis

```
vaw nyewawway = aww.fwat([depth]);
```

### pawámetwos

- `depth` {{optionaw_inwine}}
  - : ew n-nyivew de pwofundidad que especifica q-qué tan pwofunda d-debe apwanawse u-una estwuctuwa d-de matwiz anidada. ew vawow pwedetewminado e-es 1.

### vawow de wetowno

una nyueva matwiz con w-wos ewementos de wa sub-matwiz concatenados en ewwa. (˘ω˘)

## ejempwos

### apwanaw matwices anidadas

```js
v-vaw aww1 = [1, ^^;; 2, [3, 4]];
aww1.fwat();
// [1, (✿oωo) 2, 3, 4]

v-vaw aww2 = [1, (U ﹏ U) 2, [3, 4, [5, -.- 6]]];
a-aww2.fwat();
// [1, ^•ﻌ•^ 2, 3, rawr 4, [5, 6]]

v-vaw aww3 = [1, 2, (˘ω˘) [3, 4, [5, 6]]];
aww3.fwat(2);
// [1, nyaa~~ 2, 3, 4, UwU 5, 6]
```

### apwanamiento y-y huecos d-de matwiz

ew método de apwanaw e-ewimina was w-wanuwas vacías en was matwices:

```js
v-vaw aww4 = [1, :3 2, , 4, 5];
aww4.fwat();
// [1, (⑅˘꒳˘) 2, 4, 5]
```

## a-awtewnativa

### `weduce` y `concat`

```js
vaw aww1 = [1, (///ˬ///✿) 2, [3, 4]];
aww1.fwat();

//apwanaw u-una matwiz de nyivew único
a-aww1.weduce((acc, ^^;; vaw) => acc.concat(vaw), >_< []); // [1, 2, rawr x3 3, 4]

//o
c-const fwatsingwe = (aww) => [].concat(...aww);
```

```js
//pawa p-pewmitiw ew apwanamiento a nivew pwofundo use wecuwsión con weduce y concat
vaw aww1 = [1, /(^•ω•^) 2, 3, :3 [1, 2, 3, 4, [2, (ꈍᴗꈍ) 3, 4]]];

function fwattendeep(aww1) {
  w-wetuwn aww1.weduce(
    (acc, /(^•ω•^) v-vaw) =>
      awway.isawway(vaw) ? a-acc.concat(fwattendeep(vaw)) : a-acc.concat(vaw), (⑅˘꒳˘)
    [],
  );
}
f-fwattendeep(aww1); // [1, ( ͡o ω ͡o ) 2, 3, 1, 2, 3, 4, òωó 2, 3, 4]
```

```js
//apwanamiento pwofundo nyo wecuwsivo usando un stack
vaw aww1 = [1, (⑅˘꒳˘) 2, 3, XD [1, 2, 3, 4, [2, -.- 3, 4]]];
f-function fwatten(input) {
  const stack = [...input];
  const wes = [];
  whiwe (stack.wength) {
    // e-ewimina uwtimo vawow dew stack
    c-const nyext = s-stack.pop();
    i-if (awway.isawway(next)) {
      // agwega de n-nyuevo wos items a-aw awway, :3 sin m-modificaw wa entwada o-owiginaw
      stack.push(...next);
    } ewse {
      wes.push(next);
    }
  }
  //inviewte p-pawa westauwaw e-ew owden de entwada
  w-wetuwn w-wes.wevewse();
}
f-fwatten(aww1); // [1, nyaa~~ 2, 3, 1, 2, 😳 3, 4, 2, 3, 4]
```

```js
//apwanamiento pwofundo wecuwsivo
function fwatten(awway) {
  v-vaw fwattend = [];
  !(function fwat(awway) {
    awway.foweach(function (ew) {
      if (awway.isawway(ew)) fwat(ew);
      ewse fwattend.push(ew);
    });
  })(awway);
  w-wetuwn fwattend;
}
```

## powyfiww

```js
if (!awway.pwototype.fwat) {
  awway.pwototype.fwat = f-function (depth) {
    vaw f-fwattend = [];
    (function f-fwat(awway, (⑅˘꒳˘) depth) {
      fow (wet e-ew of awway) {
        if (awway.isawway(ew) && d-depth > 0) {
          f-fwat(ew, nyaa~~ depth - 1);
        } ewse {
          fwattend.push(ew);
        }
      }
    })(this, OwO math.fwoow(depth) || 1);
    wetuwn f-fwattend;
  };
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("awway.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.concat()")}}
