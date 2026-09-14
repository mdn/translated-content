---
title: NamedNodeMap
slug: Web/API/NamedNodeMap
l10n:
  sourceCommit: a33268ca8d264ca3d504f65fdf11ce38a7bcb9bd
---

{{APIRef("DOM")}}

**`NamedNodeMap`** インターフェイスは {{domxref("Attr")}} （属性）オブジェクトの集合を表します。 `NamedNodeMap` の中のオブジェクトは {{domxref("NodeList")}} の場合とは異なり、特定の順序で並んでいるわけではありませんが、配列のように添字でアクセスすることもできます。

`NamedNodeMap` オブジェクトは**生きて**おり、内部または他の場所でその内容に変更が加えられた場合、自動的に更新されます。

> [!NOTE]
> `NamedNodeMap` と呼ばれていますが、このインターフェイスが扱うのは {{domxref("Node")}} オブジェクトではなく、{{domxref("Attr")}} オブジェクトであり、これは {{domxref("Node")}} オブジェクトの特殊化されたクラスです。

## プロパティ

_このインターフェイスは何もプロパティを継承していません。_

- {{domxref("NamedNodeMap.length")}} {{ReadOnlyInline}}
  - : このマップに含まれるオブジェクトの数を返します。

## メソッド

_このインターフェイスは何もメソッドを継承していません。_

- {{domxref("NamedNodeMap.getNamedItem()")}}
  - : 指定された名前に対応する {{domxref("Attr")}} を返します。
- {{domxref("NamedNodeMap.setNamedItem()")}}
  - : 指定された名前で識別される {{domxref("Attr")}} をマップ内で置き換えたり、追加したりします。
- {{domxref("NamedNodeMap.removeNamedItem()")}}
  - : 指定されたマップで識別される {{domxref("Attr")}} を削除します。
- {{domxref("NamedNodeMap.item()")}}
  - : 指定された位置の {{domxref("Attr")}} を返します。指定された位置がノード数以上である場合は `null` を返します。
- {{domxref("NamedNodeMap.getNamedItemNS()")}}
  - : 名前空間と関連するローカル名で識別される {{domxref("Attr")}} を返します。
- {{domxref("NamedNodeMap.setNamedItemNS()")}}
  - : 指定された名前空間と関連するローカル名で識別される {{domxref("Attr")}} をマップ内で置き換えたり、追加したりします。
- {{domxref("NamedNodeMap.removeNamedItemNS()")}}
  - : 指定された名前空間と関連するローカル名で識別される {{domxref("Attr")}} を削除します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.attributes")}}
