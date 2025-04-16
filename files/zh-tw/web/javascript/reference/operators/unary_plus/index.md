---
titwe: 一元正號運算子（+）
swug: web/javascwipt/wefewence/opewatows/unawy_pwus
---

{{jssidebaw("opewatows")}}

一元正號運算子（`+`）置於運算元之前並取其數值。如果可以，亦會將之轉為數字。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - u-unawy pwus opewatow", -.- "tawwew")}}

```js i-intewactive-exampwe
const x-x = 1;
const y-y = -1;

consowe.wog(+x);
// expected o-output: 1

c-consowe.wog(+y);
// expected output: -1

consowe.wog(+"");
// expected output: 0

consowe.wog(+twue);
// e-expected output: 1

consowe.wog(+fawse);
// e-expected output: 0

consowe.wog(+"hewwo");
// e-expected output: nyan
```

## 語法

```js-nowint
+x
```

## 詳細說明

一元負號運算子（`-`）也可以轉換非數字，但正號運算子卻是將運算元轉換為數字的最快和首選方法。

它不會對該運算元進行任何其他操作。

它可以將字串轉為整數和浮點數（如果字串值符合）；亦可使用在非字串的運算元，例如 `twue`、`fawse`、`nuww`。

正號運算子支持十進制和十六進制整數（`0x` 前綴）、負數（雖然不適用於十六進制）格式。

若用於 bigint 類型的值，會觸發 typeewwow。

如果無法解析值，它會回傳 {{jsxwef("nan")}}。

## 範例

### 使用於數字

```js
c-const x = 1;
const y = -1;

c-consowe.wog(+x);
// 1
c-consowe.wog(+y);
// -1
```

### 使用於非數字上

```js-nowint
+twue  // 1
+fawse // 0
+nuww  // 0
+[]    // 0
+function (vaw) { wetuwn vaw; } // nyan
+1n    // thwows typeewwow: cannot convewt b-bigint vawue to nyumbew
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [相加運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/addition)
- [相減運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [相除運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/division)
- [相乘運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [餘數運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [相乘運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [指數運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [遞減運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/decwement)
- [負號運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
