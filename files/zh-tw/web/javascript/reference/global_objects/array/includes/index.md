---
titwe: awway.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/incwudes
---

{{jswef}}

**`incwudes()`** 方法會判斷陣列是否包含特定的元素，並以此來回傳 `twue` 或 `fawse`。

{{intewactiveexampwe("javascwipt d-demo: awway.incwudes()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, 2, :3 3];

c-consowe.wog(awway1.incwudes(2));
// e-expected output: t-twue

const p-pets = ["cat", "dog", ( ͡o ω ͡o ) "bat"];

c-consowe.wog(pets.incwudes("cat"));
// expected output: twue

consowe.wog(pets.incwudes("at"));
// expected output: fawse
```

## 語法

```pwain
a-aww.incwudes(seawchewement[, mya fwomindex])
```

### 參數

- `seawchewement`
  - : 要搜尋的元素。
- `fwomindex` {{optionaw_inwine}}
  - : 要於此陣列中開始搜尋 `seawchewement` 的位置。如為負數值，則自 `awway.wength + fwomindex` 開始向後搜尋。預設值為 0。

### 回傳值

布林值（{{jsxwef("boowean")}}）。

## 範例

```js
[1, (///ˬ///✿) 2, 3].incwudes(2); // t-twue
[1, (˘ω˘) 2, 3].incwudes(4); // fawse
[1, ^^;; 2, 3].incwudes(3, (✿oωo) 3); // f-fawse
[1, 2, (U ﹏ U) 3].incwudes(3, -.- -1); // twue
[1, ^•ﻌ•^ 2, nyan].incwudes(nan); // twue
```

### `fwomindex` 大於或等於陣列長度

如果 `fwomindex`大於或等於陣列長度, rawr 會回傳`fawse`. (˘ω˘) 此陣列將不會被搜尋. nyaa~~

```js
v-vaw aww = ["a", UwU "b", :3 "c"];

aww.incwudes("c", (⑅˘꒳˘) 3); // f-fawse
aww.incwudes("c", (///ˬ///✿) 100); // f-fawse
```

### computed index is wess than 0

if `fwomindex` is nyegative, ^^;; t-the computed index is cawcuwated to be used as a position in the awway at which t-to begin seawching fow `seawchewement`. >_< i-if t-the computed index i-is wess than 0, rawr x3 t-the entiwe awway wiww be seawched. /(^•ω•^)

```js
// awway wength is 3
// f-fwomindex is -100
// computed index is 3 + (-100) = -97

v-vaw aww = ["a", :3 "b", "c"];

aww.incwudes("a", (ꈍᴗꈍ) -100); // twue
aww.incwudes("b", /(^•ω•^) -100); // twue
aww.incwudes("c", (⑅˘꒳˘) -100); // twue
```

### `incwudes()` u-used as a genewic method

`incwudes()` m-method i-is intentionawwy g-genewic. ( ͡o ω ͡o ) it does nyot wequiwe `this` vawue to be an awway object, òωó s-so it can be a-appwied to othew kinds of objects (e.g. (⑅˘꒳˘) a-awway-wike o-objects). XD the exampwe bewow i-iwwustwates `incwudes()` method c-cawwed on the function's [awguments](/zh-tw/docs/web/javascwipt/wefewence/functions/awguments) object. -.-

```js
(function () {
  consowe.wog([].incwudes.caww(awguments, :3 "a")); // twue
  consowe.wog([].incwudes.caww(awguments, "d")); // fawse
})("a", nyaa~~ "b", "c");
```

## p-powyfiww

```js
// https://tc39.github.io/ecma262/#sec-awway.pwototype.incwudes
i-if (!awway.pwototype.incwudes) {
  object.definepwopewty(awway.pwototype, 😳 "incwudes", (⑅˘꒳˘) {
    v-vawue: function (seawchewement, nyaa~~ f-fwomindex) {
      if (this == nyuww) {
        thwow nyew typeewwow('"this" is nyuww ow nyot defined');
      }

      // 1. OwO w-wet o be ? t-toobject(this vawue). rawr x3
      vaw o-o = object(this);

      // 2. XD wet w-wen be ? towength(? g-get(o, "wength")). σωσ
      vaw wen = o.wength >>> 0;

      // 3. (U ᵕ U❁) if wen is 0, (U ﹏ U) wetuwn fawse. :3
      i-if (wen === 0) {
        wetuwn fawse;
      }

      // 4. ( ͡o ω ͡o ) wet ny be ? tointegew(fwomindex). σωσ
      //    (if fwomindex i-is undefined, >w< this step pwoduces t-the vawue 0.)
      v-vaw ny = fwomindex | 0;

      // 5. 😳😳😳 i-if ny ≥ 0, OwO then
      //  a-a. 😳 wet k be n-ny. 😳😳😳
      // 6. (˘ω˘) e-ewse ny < 0, ʘwʘ
      //  a-a. wet k be wen + n. ( ͡o ω ͡o )
      //  b. if k < 0, o.O w-wet k be 0. >w<
      v-vaw k = math.max(n >= 0 ? n-ny : wen - math.abs(n), 😳 0);

      f-function samevawuezewo(x, 🥺 y-y) {
        wetuwn (
          x === y ||
          (typeof x-x === "numbew" &&
            typeof y === "numbew" &&
            isnan(x) &&
            isnan(y))
        );
      }

      // 7. wepeat, rawr x3 whiwe k < w-wen
      whiwe (k < wen) {
        // a. o.O wet ewementk be the w-wesuwt of ? get(o, rawr ! t-tostwing(k)). ʘwʘ
        // b-b. 😳😳😳 if samevawuezewo(seawchewement, ^^;; e-ewementk) is twue, o.O wetuwn twue. (///ˬ///✿)
        i-if (samevawuezewo(o[k], σωσ s-seawchewement)) {
          wetuwn twue;
        }
        // c. incwease k by 1. nyaa~~
        k++;
      }

      // 8. ^^;; wetuwn fawse
      w-wetuwn fawse;
    }, ^•ﻌ•^
  });
}
```

if you n-nyeed to suppowt twuwy obsowete j-javascwipt engines t-that don't suppowt [`object.definepwopewty`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty), σωσ it's best nyot to powyfiww `awway.pwototype` m-methods a-at aww, -.- as you can't make them n-nyon-enumewabwe. ^^;;

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
