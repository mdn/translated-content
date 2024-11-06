---
title: "StaticRange: StaticRange() コンストラクター"
short-title: StaticRange()
slug: Web/API/StaticRange/StaticRange
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("DOM")}}

**`StaticRange()`** コンストラクターは、 DOM 内のコンテンツの範囲を表す新しい {{domxref("StaticRange")}} オブジェクトを作成します。

このコンストラクターは、範囲の開始位置と終了位置を示すプロパティと、範囲が**折りたたまれている**（つまり空である）かどうかを示す論理値を含みます。

## 構文

```js-nolint
new StaticRange(rangeSpec)
```

### 引数

- `rangeSpec`

  - : 要求される `rangeSpec` 引数は、以下の 4 つのプロパティを格納したオブジェクトです。

    - `startContainer`
      - : 範囲の始点がある {{domxref("Node")}} です。
    - `startOffset`
      - : 範囲の最初の文字が見つかる開始ノード内のオフセットです。
    - `endContainer`
      - : 範囲の終点がある `Node` です。
    - `endOffset`
      - : `endOffset` で示される、ノード内で範囲内の最後の文字がある位置のオフセットです。

### 返値

`rangeSpec` オブジェクトで指定された値で初期化された新しい `StaticRange` オブジェクト。

### 例外

- `InvalidNodeTypeError`
  - : `startContainer` と `endContainer` のどちらか、または両方が範囲を含めることができないノード種別である場合に {{domxref("DOMException")}} が発生します。これらのノード種別は `Node.DOCUMENT_TYPE_NODE` （例えば、HTMLの `doctype` プリアンブルを使用して識別された {{Glossary("Doctype", "DTD")}} から派生した {{domxref("DocumentType")}} ノードを表します）と DOM 上の要素の属性を記述する {{domxref("Attr")}} ノードです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
