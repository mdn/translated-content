---
title: "HTMLAreaElement: protocol プロパティ"
short-title: protocol
slug: Web/API/HTMLAreaElement/protocol
l10n:
  sourceCommit: 82acf2a065dc00a1bd0cbf5e73de696e1bedee91
---

{{ApiRef("HTML DOM")}}

**`protocol`** は {{domxref("HTMLAreaElement")}} インターフェイスのプロパティで、この `<area>` 要素の `href` のプロトコルまたはスキームが、最後の `":"` まで入った文字列です。

このプロパティを設定して、 URL のプロトコルを変更することができます。 `":"` が指定されていない場合は、指定された文字列の最後に追加されます。指定されたスキームは、 URL の残りの部分と互換性がある必要があります。

詳細については、 {{domxref("URL.protocol")}} を参照してください。

## 値

文字列です。

## 例

### エリアのリンクのプロトコルを取得

```js
// <area id="myArea" href="https://developer.mozilla.org/ja/HTMLAreaElement"> 要素が文書にあったとします。
const area = document.getElementById("myArea");
area.protocol; // 'https:' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
