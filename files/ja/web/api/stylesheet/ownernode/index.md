---
title: StyleSheet.ownerNode
slug: Web/API/StyleSheet/ownerNode
l10n:
  sourceCommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{APIRef("CSSOM")}}

**`ownerNode`** は {{domxref("StyleSheet")}} インターフェイスのプロパティで、このスタイルシートと文書内の関連付けを行うノードを返します。

これは通常、 HTML の [`<link>`](/ja/docs/Web/HTML/Reference/Elements/link) または [`<style>`](/ja/docs/Web/HTML/Reference/Elements/style) 要素ですが、 `<?xml-stylesheet ?>` の場合は[処理命令ノード](/ja/docs/Web/API/ProcessingInstruction)を返すこともあります。

## 値

{{domxref("Node")}} オブジェクトです。

## 例

```html
<html lang="en">
  <head>
    <link rel="stylesheet" href="example.css" />
  </head>
  <body>
    <button onclick="alert(document.styleSheets[0].ownerNode)">
      Show example.css's ownerNode
    </button>
  </body>
</html>
// Displays "object HTMLLinkElement"
```

## メモ

[`@import`](/ja/docs/Web/CSS/Reference/At-rules/@import) などを使用して、他のスタイルシートをインクルードするスタイルシートでは、このプロパティの値は `null` になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
