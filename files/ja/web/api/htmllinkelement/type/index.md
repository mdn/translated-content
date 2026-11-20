---
title: "HTMLLinkElement: type プロパティ"
short-title: type
slug: Web/API/HTMLLinkElement/type
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

**`type`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、リンク先リソースの {{glossary("MIME type", "MIME タイプ")}}を反映する文字列です。

このプロパティは、{{HTMLElement("link")}} 要素の `type` 属性を反映します。

## 値

文字列で、有効な MIME タイプ文字列である必要があります。

## 例

```html
<link
  id="el"
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

```js
const el = document.getElementById("el");
console.log(el.type); // 出力結果: "image/png"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
