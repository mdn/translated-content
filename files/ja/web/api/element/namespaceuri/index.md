---
title: Element.namespaceURI
slug: Web/API/Element/namespaceURI
tags:
  - API
  - DOM
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - プロパティ
  - リファレンス
browser-compat: api.Element.namespaceURI
translation_of: Web/API/Element/namespaceURI
original_slug: Web/API/Node/namespaceURI
---
{{APIRef("DOM")}}

**`Element.namespaceURI`** は読み取り専用のプロパティで、この要素の名前空間 URI を返します。この要素が名前空間に所属していない場合は `null` を返します。

## 構文

```js
namespace = element.namespaceURI
```

## 例

このスニペットでは、ある要素が {{domxref("Element.localName", "localName")}} と `namespaceURI` で調べます。この `namespaceURI` は XUL の名前空間を返し、 `localName` は "browser" を返すので、このノードは XUL の `<browser/>` と解釈されます。

```js
if (element.localName == "browser" &&
    element.namespaceURI == "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul") {
  // これは XUL browser です
}
```

## メモ

これは、スコープ内の名前空間宣言を調べて名前空間を検索した結果であり、計算値ではありません。ノードの名前空間 URI は、ノードの生成時に凍結されます。

Firefox 3.5 以前では、 HTML 文書中の HTML 要素の名前空間 URI は `null` です。それ以降のバージョンでは、 HTML5 に準拠し、 XHTML と同様に [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml) となります。

DOM Level 2 のメソッド [document.createElementNS](/en-US/docs/Web/API/Document/createElementNS) を用いると、指定した `namespaceURI` を持つ要素を作成することができる。

DOM はそれ自体で名前空間の検証を行ったり強制したりすることはありません。必要な検証を行うのは DOM アプリケーションに任されています。また、一度特定の要素に関連付けられた名前空間接頭辞は、変更することができないことに注意しましょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.localName")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.namespaceURI")}}
