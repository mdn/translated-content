---
title: "Element: namespaceURI プロパティ"
short-title: namespaceURI
slug: Web/API/Element/namespaceURI
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.namespaceURI`** は読み取り専用のプロパティで、この要素の名前空間 URI を返します。この要素が名前空間に所属していない場合は `null` を返します。

## 値

文字列、または `null` です。

## 例

このスニペットでは、ある要素の {{domxref("Element.localName", "localName")}} と `namespaceURI` を調べます。この `namespaceURI` は XUL の名前空間を返し、`localName` は "browser" を返すので、このノードは XUL の `<browser/>` と解釈されます。

```js
if (
  element.localName === "browser" &&
  element.namespaceURI ===
    "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
) {
  // これは XUL browser です
}
```

## メモ

これは、スコープ内の名前空間宣言を調べて名前空間を検索した結果であり、計算値ではありません。ノードの名前空間 URI は、ノードの生成時に凍結されます。

HTML 文書中の HTML 要素の名前空間 URI は、XHTML と同様に [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml) となります。

指定された `namespaceURI` を持つ要素を生成する場合は、[document.createElementNS()](/ja/docs/Web/API/Document/createElementNS) を用いることで実現できます。

DOM はそれ自体で名前空間の検証を行ったり強制したりすることはありません。必要な検証を行う作業は DOM アプリケーションに任されています。また、一度特定の要素に関連付けられた名前空間接頭辞は、変更することができないことに注意しましょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.localName")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.namespaceURI")}}
