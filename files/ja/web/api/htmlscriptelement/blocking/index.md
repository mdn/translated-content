---
title: "HTMLScriptElement: blocking プロパティ"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: 752996f4695156431af4e19feb0542a4d372ce1e
---

{{APIRef("HTML DOM")}}

**`blocking`** は {{domxref("HTMLScriptElement")}} インターフェイスの読み取り専用プロパティで、外部リソースの取得時にブロックされるべき操作が含まれている、生きた {{domxref("DOMTokenList")}} オブジェクトを返します。これは、{{HTMLElement("script")}} 要素の [`blocking`](/ja/docs/Web/HTML/Reference/Elements/script#blocking) コンテンツ属性を反映しています。

## 値

生きた {{domxref("DOMTokenList")}} オブジェクトです。

`blocking` プロパティ自体は、`DOMTokenList` オブジェクトを置き換えることができないという意味で読み取り専用ですが、`blocking` プロパティに値を直接代入することは可能です。これは、その {{domxref("DOMTokenList/value", "value")}} プロパティに値を代入することと同等です。同時に、{{domxref("DOMTokenList/add", "add()")}}、{{domxref("DOMTokenList/remove", "remove()")}}、 {{domxref("DOMTokenList/replace", "replace()")}}、{{domxref("DOMTokenList/toggle", "toggle()")}} メソッドを使用して `DOMTokenList` オブジェクトを変更することもできます。

## 例

```html
<script id="el" async blocking="render"></script>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // 出力: DOMTokenList ["render"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
