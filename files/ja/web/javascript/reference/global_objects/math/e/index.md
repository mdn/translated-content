---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/E
---
{{JSRef}}

**`Math.E`** プロパティは自然対数の底 (e)、約 2.718 を表します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2.718</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-e.html")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`E` は `Math` オブジェクトの静的プロパティなので、 `Math` オブジェクトを生成してプロパティとして使用するのではなく、常に `Math.E` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.E の使用

以下の関数は、e を返します。

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## 仕様書

| 仕様書                                                           |
| ---------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-math.e', 'Math.E')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.E")}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
