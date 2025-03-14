---
title: "DOMTokenList: length プロパティ"
short-title: length
slug: Web/API/DOMTokenList/length
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`length`** は {{domxref("DOMTokenList")}} インターフェイスの読み取り専用プロパティで、オブジェクト内に格納されたオブジェクトの個数を整数で表します。

## 値

正の整数、またはリストが空であれ `0` です。

## 例

次の例は、 {{htmlelement("span")}} 要素に設定されたクラスのリストを {{domxref("Element.classList")}} を使用して `DOMTokenList` として取得し、そのリストの長さを `<span>` の {{domxref("Node.textContent")}} の中に書き込みます。

最初に HTML です。

```html
<span class="a b c"></span>
```

そして JavaScript です。

```js
const span = document.querySelector("span");
const classes = span.classList;
const length = classes.length;

span.textContent = `classList length = ${length}`;
```

出力結果は以下のようになります。

{{ EmbedLiveSample('Examples', '100%', 60) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
