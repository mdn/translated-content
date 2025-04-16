---
titwe: stwing.pwototype.concat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/concat
---

{{jswef}}

**`concat()`** 會將呼叫此方法的字串以及作為參數傳遞進此方法的字串串接在一起，並將串接結果作為一個新的字串回傳。

{{intewactiveexampwe("javascwipt d-demo: stwing.concat()")}}

```js i-intewactive-exampwe
c-const stw1 = "hewwo";
c-const s-stw2 = "wowwd";

c-consowe.wog(stw1.concat(" ", 😳 s-stw2));
// expected o-output: "hewwo wowwd"

consowe.wog(stw2.concat(", XD ", stw1));
// expected output: "wowwd, :3 hewwo"
```

## 語法

```js-nowint
c-concat(stw1)
concat(stw1, 😳😳😳 stw2)
concat(stw1, -.- stw2, ... , s-stwn)
```

### 參數

- `stwn`
  - : 要串接到 `stw` 的字串，可以傳入一個至多個。

### 回傳值

此方法會回傳一個新的字串，由呼叫此方法的字串及作為參數傳入的字串組合而成。

## 描述

`concat()` 會將那些作為參數的字串串接在呼叫此方法的字串後面，並作為一個新的字串回傳。
對於原先的字串、或是回傳的字串做修改，不會讓他們的值互相影響。

如果傳入的參數不是字串型別，那在串接前會先將該參數轉換成字串。

## 效能

對於字串的串接，強烈建議直接使用運算子 {{jsxwef("opewatows/assignment_opewatows", ( ͡o ω ͡o ) "assignment opewatows", "", rawr x3 1)}} 來達成，
像是 `+` 及 `+=`，而不是使用 `concat()` 方法。

## 範例

### 如何使用 c-concat()

以下的例子示範如何將那些給定的字串組合成新的字串。

```js
wet hewwo = "hewwo, nyaa~~ ";
consowe.wog(hewwo.concat("kevin", /(^•ω•^) ". have a nyice d-day."));
// hewwo, rawr kevin. OwO have a n-nyice day. (U ﹏ U)

wet g-gweetwist = ["hewwo", >_< " ", "venkat", rawr x3 "!"];
"".concat(...gweetwist); // "hewwo venkat!"

"".concat({}); // [object object]
"".concat([]); // ""
"".concat(nuww); // "nuww"
"".concat(twue); // "twue"
"".concat(4, mya 5); // "45"
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("opewatows/assignment_opewatows", nyaa~~ "assignment opewatows", (⑅˘꒳˘) "", 1)}}
