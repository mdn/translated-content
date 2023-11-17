---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Math.LOG10E`** は静的データプロパティで、 10 を底とした [e](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E) の対数、約 0.434 を表します。

{{EmbedInteractiveExample("pages/js/math-log10e.html", "shorter")}}

## 値

<math display="block"><semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙾𝙶𝟷𝟶𝙴</mi><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi mathvariant="normal">e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log\_{10}(\mathrm{e}) \approx 0.434</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## 解説

`LOG10E` は `Math` オブジェクトの静的プロパティなので、自分で作成した `Math` オブジェクトのプロパティとして使用するのではなく、常に `Math.LOG10E` として使用するようにしてください（`Math` はコンストラクターではありません）。

## 例

### Math.LOG10E の使用

以下の関数は、10 を底とした e の対数を返します。

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
