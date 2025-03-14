---
title: "HTMLScriptElement: blocking プロパティ"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`blocking`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、スクリプトを取得する際に特定の操作を実行しないことを示す文字列です。

これは {{HTMLElement("script")}} 要素の `blocking` 属性を反映しています。

## 値

文字列です。ブロックする操作を示す下記のブロックトークンのスペース区切りのリストでなければなりません。

- `render`
  - : 画面へのコンテンツの描画がブロックされます。

## 例

```html
<script id="el" type="text/javascript" async blocking="render"></script>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // 出力: "render"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
