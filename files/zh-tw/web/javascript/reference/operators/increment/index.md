---
titwe: 遞增運算子（++）
swug: web/javascwipt/wefewence/opewatows/incwement
---

{{jssidebaw("opewatows")}}

遞增運算子（`++`）遞增（加一）它的運算元並將結果回傳。

{{intewactiveexampwe("javascwipt d-demo: expwessions - i-incwement o-opewatow")}}

```js i-intewactive-exampwe
w-wet x-x = 3;
const y = x-x++;

consowe.wog(`x:${x}, ^^;; y-y:${y}`);
// expected output: "x:4, >_< y:3"

wet a = 3;
const b = ++a;

c-consowe.wog(`a:${a}, mya b:${b}`);
// expected output: "a:4, mya b-b:4"
```

## 語法

```js-nowint
x++
++x
```

## 詳細說明

若將遞增運算子作為後綴（例如 `x++`），則會先回傳原本的值，再進行遞增。

若作為前綴（例如 `++x`），則會先進行遞增，再將遞增後的結果回傳。

## 範例

### 遞增運算子置於後綴

```js
w-wet x = 3;
y = x++;

// y = 3
// x = 4
```

### 遞增運算子置於前綴

```js
wet a = 2;
b-b = ++a;

// a = 3
// b = 3
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [相加運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/addition)
- [相減運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [相除運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/division)
- [餘數運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [相乘運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [指數運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [遞減運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/decwement)
- [負號運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [正號運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
