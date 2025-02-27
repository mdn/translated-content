---
title: "HTMLScriptElement: text プロパティ"
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: 59873ba98645df59048c642f72237f31327a6c3b
---

{{APIRef("HTML DOM")}}

**`text`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、{{HTMLElement("script")}} 要素内のテキストコンテンツを反映する文字列です。これは {{domxref("Node.textContent")}} プロパティと同じ方法で動作します。

これは {{HTMLElement("script")}} 要素の `text` 属性を反映したものです。

## 値

文字列です。

## 例

```html
<script id="el" type="text/javascript">
  const num = 10;
  console.log(num);
</script>
```

```js
const el = document.getElementById("el");
console.log(el.text); // 出力: "\n  const num = 10;\n  console.log(num);\n"
console.log(el.textContent); // 出力: "\n  const num = 10;\n  console.log(num);\n"

el.text = "console.log(10);";
console.log(el.text); // 出力: "console.log(10);"
console.log(el.textContent); // 出力: "console.log(10);"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
