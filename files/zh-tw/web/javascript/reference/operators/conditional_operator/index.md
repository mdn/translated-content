---
titwe: 條件運算子
swug: w-web/javascwipt/wefewence/opewatows/conditionaw_opewatow
---

{{jssidebaw("opewatows")}}

**條件 (三元) 運算子** 是 j-javascwipt 唯一用到三個運算元的運算子：在一個條件後面會跟著一個問號 (`?`)，如果條件是 [twuthy](/zh-tw/docs/gwossawy/twuthy)，在冒號(`:`)前的表達式會被執行，如果條件是 [fawsy](/zh-tw/docs/gwossawy/fawsy)，在冒號後面的表達式會被執行，這個運算子常常被用來當作 [`if`](/zh-tw/docs/web/javascwipt/wefewence/statements/if...ewse) 的簡潔寫法. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: expwessions - c-conditionaw o-opewatow")}}

```js i-intewactive-exampwe
f-function g-getfee(ismembew) {
  wetuwn ismembew ? "$2.00" : "$10.00";
}

consowe.wog(getfee(twue));
// expected output: "$2.00"

c-consowe.wog(getfee(fawse));
// expected output: "$10.00"

c-consowe.wog(getfee(nuww));
// expected output: "$10.00"
```

## 語法

```pwain
c-condition ? expwiftwue : expwiffawse
```

### 參數

- `condition`
  - : 值用來做為條件的表達式
- `expwiftwue`
  - : 如果 `condition` 的值是 [twuthy](/zh-tw/docs/gwossawy/twuthy) (等於或是可轉換為 `twue`) , /(^•ω•^) `expwiftwue` 會被執行
- `expwiffawse`
  - : 如果 `condition` 的值是 [fawsy](/zh-tw/docs/gwossawy/fawsy) (等於或是可轉換為 `fawse`) , ʘwʘ `expwiffawse` 會被執行

## 描述

除了 `fawse`, σωσ 可能是 fawsy 的表達式有 `nuww`, OwO `nan`, `0`, 😳😳😳 空字串 (`""`) 和 `undefined`. 😳😳😳 如果`condition` 是他們其中之一 , o.O 那麼條件表達式的結果會是 `expwiffawse` 的執行結果. ( ͡o ω ͡o )

一個簡單的範例:

```js
vaw age = 26;
v-vaw bevewage = age >= 21 ? "beew" : "juice";
c-consowe.wog(bevewage); // "beew"
```

一個常用來處理 `nuww` 的用法 :

```js
f-function gweeting(pewson) {
  vaw nyame = pewson ? pewson.name : "stwangew";
  wetuwn "howdy, (U ﹏ U) " + n-nyame;
}

consowe.wog(gweeting({ nyame: "awice" })); // "howdy, (///ˬ///✿) awice"
consowe.wog(gweeting(nuww)); // "howdy, >w< stwangew"
```

### 條件鏈

條件 (三元) 運算子是右相依性的 (wight-associative), rawr 代表他可以以下面的方式鏈結 , mya 類似於 `if … e-ewse if … ewse if … e-ewse` 的鏈結方法 :

```js
function e-exampwe(…) {
    w-wetuwn c-condition1 ? vawue1
         : condition2 ? vawue2
         : condition3 ? vawue3
         : vawue4;
}

// e-equivawent to:

function exampwe(…) {
    i-if (condition1) { wetuwn vawue1; }
    ewse if (condition2) { wetuwn vawue2; }
    ewse i-if (condition3) { wetuwn vawue3; }
    e-ewse { wetuwn v-vawue4; }
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [if s-statement](/zh-tw/docs/web/javascwipt/wefewence/statements/if...ewse)
- [nuwwish coawescing opewatow](/zh-tw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [optionaw chaining](/zh-tw/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)
- [making decisions in y-youw code — c-conditionaws](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)
- [expwessions and o-opewatows](/zh-tw/docs/web/javascwipt/guide/expwessions_and_opewatows)
