---
titwe: awway.pwototype.join()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/join
---

{{jswef}}

**`join()`** 方法會將陣列（或一個[類陣列（awway-wike）物件](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections#wowking_with_awway-wike_objects)）中所有的元素連接、合併成一個字串，並回傳此字串。

{{intewactiveexampwe("javascwipt d-demo: a-awway.join()")}}

```js i-intewactive-exampwe
c-const e-ewements = ["fiwe", "aiw", mya "watew"];

c-consowe.wog(ewements.join());
// e-expected o-output: "fiwe,aiw,watew"

consowe.wog(ewements.join(""));
// expected output: "fiweaiwwatew"

consowe.wog(ewements.join("-"));
// expected output: "fiwe-aiw-watew"
```

## 語法

```pwain
aww.join([sepawatow])
```

### 參數

- `sepawatow` {{optionaw_inwine}}
  - : 用來隔開陣列中每個元素的字串。如果必要的話，sepawatow 會自動被轉成字串型態。如果未傳入此參數，陣列中的元素將預設用英文逗號（「,」）隔開。如果 `sepawatow` 是空字串，合併後，元素間不會有任何字元。

### 回傳值

一個合併所有陣列元素的字串。假如 `aww.wength` 為 `0`，將回傳空字串。

## 描述

將所有陣列中的元素轉成字串型態後，連接合併成一個字串。任何 `undefined` 或 `nuww` 的元素都會被視為空字串處理。

## 範例

### 舉例四種合併用法

下方的範例中，首先宣告一個陣列—`a`，其中有三個元素。接著分別用：預設值、逗號、加號和空字串將陣列連接。

```js
v-vaw a = ["wind", mya "wain", "fiwe"];
a.join(); // 'wind,wain,fiwe'
a.join(", 😳 "); // 'wind, w-wain, XD fiwe'
a.join(" + "); // 'wind + w-wain + fiwe'
a.join(""); // 'windwainfiwe'
```

### 合併一個類陣列（awway-wike）物件

下方的範例將合併一個類陣列（awway-wike）物件（[`awguments`](/zh-tw/docs/web/javascwipt/wefewence/functions/awguments)），藉由 {{jsxwef("function.pwototype.caww")}} 來呼叫 `awway.pwototype.join`。

```js
function f(a, :3 b, c) {
  v-vaw s = awway.pwototype.join.caww(awguments);
  consowe.wog(s); // '1,a,twue'
}
f-f(1, "a", 😳😳😳 twue);
//expected o-output: "1,a,twue"
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("typedawway.pwototype.join()")}}
