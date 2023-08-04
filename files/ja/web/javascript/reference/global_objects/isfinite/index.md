---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
---

{{jsSidebar("Objects")}}

グローバル関数 **`isFinite()`** は渡された値が有限数かどうかを判定します。必要に応じて、引数はまず数値へと変換されます。

{{EmbedInteractiveExample("pages/js/globalprops-isfinite.html")}}

## 構文

```
isFinite(testValue)
```

### 引数

- `testValue`
  - : 有限性の評価を行いたい値。

### 返値

正または負の {{jsxref("Infinity")}} か {{jsxref("NaN")}} か {{jsxref("undefined")}} の場合は **`false`** です。それ以外の場合は **`true`** です。

## 解説

`isFinite` はグローバルオブジェクトの関数プロパティです。

この関数を使用すると、ある数値が有限数かどうかを判定できます。 `isFinite` 関数はその引数内の数値を調査します。この関数は、引数が `NaN`、正の無限大、負の無限大のいずれかの場合に `false` を返し、それ以外は `true` を返します。

## 例

### isFinite の使用

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

isFinite(null); // true が返される、より堅牢性の高い
// Number.isFinite(null) では false となる

isFinite("0"); // true が返される、より堅牢性の高い
// Number.isFinite("0") では false となる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.isFinite")}}

## 関連情報

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
