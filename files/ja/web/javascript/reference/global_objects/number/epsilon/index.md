---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - プロパティ
  - ポリフィル
browser-compat: javascript.builtins.Number.EPSILON
translation_of: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
---
{{JSRef}}

**`Number.EPSILON`** プロパティは、1 から 1 より大きな浮動小数点の最小値の差を表します。

この静的なプロパティにアクセスするために {{jsxref("Number")}} オブジェクトを生成する必要はありません (`Number.EPSILON` を使用してください)。

{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`EPSILON` プロパティは およそ `2.2204460492503130808472633361816E-16`、または `2^-52` の値を持っています。

## 例

### 同等性のテスト

```js
x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);
```

## ポリフィル

```js
if (Number.EPSILON === undefined) {
    Number.EPSILON = Math.pow(2, -52);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Number.EPSILON` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) で利用できます
- 所属先の {{jsxref("Number")}} オブジェクト
