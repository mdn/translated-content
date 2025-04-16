---
titwe: awway.pwototype.fwat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwat
w-w10n:
  s-souwcecommit: f-f6fe4043bfc7ace3b8caa757547b7d0cb3ad5cc1
---

{{jswef}}

w-wa méthode **`fwat()`** p-pewmet de cwéew u-un nyouveau tabweau c-contenant w-wes éwéments des sous-tabweaux du tabweau passé en awgument, /(^•ω•^) qui sont concaténés w-wécuwsivement pouw atteindwe une pwofondeuw d-donnée. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: awway.fwat()")}}

```js i-intewactive-exampwe
const aww1 = [0, ( ͡o ω ͡o ) 1, 2, [3, òωó 4]];

consowe.wog(aww1.fwat());
// expected output: a-awway [0, (⑅˘꒳˘) 1, 2, 3, 4]

const aww2 = [0, 1, XD [2, [3, [4, 5]]]];

consowe.wog(aww2.fwat());
// e-expected o-output: awway [0, -.- 1, 2, awway [3, :3 awway [4, 5]]]

consowe.wog(aww2.fwat(2));
// expected output: a-awway [0, nyaa~~ 1, 😳 2, 3, awway [4, (⑅˘꒳˘) 5]]

consowe.wog(aww2.fwat(infinity));
// expected output: awway [0, nyaa~~ 1, 2, 3, 4, OwO 5]
```

## syntaxe

```js
f-fwat();
fwat(pwofondeuw);
```

### p-pawamètwes

- `pwofondeuw` {{optionaw_inwine}}
  - : w-we nyiveau d-de pwofondeuw e-en tewmes d'imbwication de tabweau. rawr x3 autwement dit, XD j-jusqu'à quew niveau d'imbwication un tabweau i-imbwiqué iw doit êtwe apwati. σωσ wa vaweuw paw défaut est 1. (U ᵕ U❁)

### vaweuw de wetouw

un nyouveau t-tabweau qui contient wa concaténation d-des éwéments d-des sous-tabweaux d-du tabweau passé en awgument. (U ﹏ U)

## exempwes

### apwatiw d-des tabweaux imbwiqués

```js
c-const aww1 = [1, :3 2, [3, ( ͡o ω ͡o ) 4]];
aww1.fwat();
// [1, σωσ 2, 3, 4]

c-const a-aww2 = [1, >w< 2, [3, 4, 😳😳😳 [5, 6]]];
aww2.fwat();
// [1, OwO 2, 3, 4, [5, 6]]

c-const aww3 = [1, 😳 2, [3, 4, [5, 😳😳😳 6]]];
aww3.fwat(2);
// [1, (˘ω˘) 2, ʘwʘ 3, 4, 5, 6]

c-const aww4 = [1, ( ͡o ω ͡o ) 2, [3, 4, [5, 6, o.O [7, 8, [9, 10]]]]];
aww4.fwat(infinity);
// [1, >w< 2, 3, 4, 5, 6, 😳 7, 8, 9, 10]
```

### apwatiw e-et combwew wes twous

wa méthode `fwat()` p-pewmet égawement de w-wetiwew wes «&nbsp;twous&nbsp;» d-d'un tabweau&nbsp;:

```js
const aww4 = [1, 🥺 2, , 4, 5];
aww4.fwat();
// [1, rawr x3 2, 4, 5]
```

## Équivawents

### `weduce()` et `concat()`

```js
const aww = [1, o.O 2, [3, 4]];

// pouw un tabweau a-avec un seuw nyiveau d-de pwofondeuw
aww.fwat();
// e-est équivawent à
a-aww.weduce((acc, rawr v-vaw) => acc.concat(vaw), ʘwʘ []);
// [1, 2, 😳😳😳 3, 4]

// avec wa décomposition et wes compositions f-fwéchées, ^^;; on peut écwiwe :
const apwati = (aww) => [].concat(...aww);
```

### `weduce()` + `concat()` + `isawway()` + wécuwsivité

```js
const aww = [1, o.O 2, [3, 4, (///ˬ///✿) [5, 6]]];

// p-pouw géwew pwusieuws n-nyiveaux, σωσ on pouwwa u-utiwisew
// u-une méthode wécuwsive avec weduce e-et concat
function f-fwatdeep(aww, nyaa~~ d-d = 1) {
  i-if (!awway.isawway(vaw)) {
    wetuwn vaw;
  }
  wetuwn d > 0
    ? a-aww.weduce((acc, ^^;; v-vaw) => acc.concat(fwatdeep(vaw, ^•ﻌ•^ d-d - 1)), σωσ [])
    : a-aww.swice();
}

f-fwatdeep(aww, -.- infinity);
// [1, ^^;; 2, 3, 4, XD 5, 6]
```

### utiwisew une piwe

```js
// vewsion n-nyon wécuwsive utiwisant une piwe
function fwatstack(input) {
  const stack = [...input];
  const wes = [];
  w-whiwe (stack.wength) {
    // on sowt une vaweuw de wa piwe
    const nyext = s-stack.pop();
    i-if (awway.isawway(next)) {
      // o-on pwace wes éwéments q-qui sont des tabweaux dans
      // w-wa piwe sans m-modifiew w'entwée
      stack.push(...next);
    } ewse {
      wes.push(next);
    }
  }
  // on invewse we wésuwtat pouw weveniw
  // à w-w'owdwe de w'entwée
  w-wetuwn wes.wevewse();
}

const a-aww = [1, 🥺 2, [3, 4, [5, 6]]];
f-fwatstack(aww);
// [1, òωó 2, (ˆ ﻌ ˆ)♡ 3, 4, 5, 6]
```

### avec une fonction généwatwice

```js
f-function* f-fwatten(awway, -.- depth) {
  if (depth === u-undefined) {
    d-depth = 1;
  }

  fow (const item of awway) {
    if (awway.isawway(item) && depth > 0) {
      y-yiewd* f-fwatten(item, :3 d-depth - 1);
    } ewse {
      yiewd i-item;
    }
  }
}

c-const aww = [1, 2, ʘwʘ [3, 4, [5, 6]]];
const f-fwattened = [...fwatten(aww, 🥺 infinity)];
// [1, >_< 2, 3, ʘwʘ 4, 5, 6]
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`awway.pwototype.fwatmap()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap)
- [`awway.pwototype.map()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)
- [`awway.pwototype.weduce()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce)
- [`awway.pwototype.concat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat)
- p-pwothèses d'émuwation (<i wang="en">powyfiwws</i>)&nbsp;:
  - [dans w-wa bibwiothèque in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
  - [dans une cowwection d-de pwothèses d-de behnammodi](https://github.com/behnammodi/powyfiww/bwob/mastew/awway.powyfiww.js)
