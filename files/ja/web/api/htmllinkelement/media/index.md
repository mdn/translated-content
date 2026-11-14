---
title: "HTMLLinkElement: media プロパティ"
short-title: media
slug: Web/API/HTMLLinkElement/media
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

**`media`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、リソースが適用される 1 つ以上のメディア形式のリストを表す文字列です。

{{HTMLElement("link")}} 要素の `media` 属性を反映します。

## 値

文字列です。

## 例

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  media="screen and (width >= 600px)"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.media); // 出力結果: "screen and (width >= 600px)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
