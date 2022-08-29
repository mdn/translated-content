---
title: CharacterData
slug: Web/API/CharacterData
tags:
  - インターフェイス
  - リファレンス
browser-compat: api.CharacterData
translation_of: Web/API/CharacterData
---
{{APIRef("DOM")}}

**`CharacterData`** 抽象インターフェイスは、文字を包含する {{domxref("Node")}} オブジェクトを表します。これは抽象インターフェイスであり、 `CharacterData` 型のオブジェクトは存在しません。抽象ではない {{domxref("Text")}}、{{domxref("Comment")}}、{{domxref("CDATASection")}}、{{domxref("ProcessingInstruction")}} といったインターフェイスによって実装されています。

{{InheritanceDiagram}}

## プロパティ

_親インターフェイスである {{domxref("Node")}} および {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("CharacterData.data")}}
  - : 当該オブジェクトが包含するテキストデータを表す文字列です。
- {{domxref("CharacterData.length")}} {{readonlyInline}}
  - : `CharacterData.data` が持つ文字列のサイズを表す数値を返します。
- {{domxref("CharacterData.nextElementSibling")}} {{readonlyInline}}
  - : 親要素の子のリストで、指定した要素の*直後*の兄弟である {{domxref("Element")}} を返します。
- {{domxref("CharacterData.previousElementSibling")}} {{readonlyInline}}
  - : 親要素の子のリストで、指定した要素の*直前*の兄弟である {{domxref("Element")}} を返します。

## メソッド

_親インターフェイスである {{domxref("Node")}} および {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("CharacterData.after()")}}
  - : 一連の {{domxref("Node")}} オブジェクトまたは文字列を、この `CharacterData` の親ノードの子リストの中、この `CharacterData` オブジェクトの直後に挿入します。
- {{domxref("CharacterData.appendData()")}}
  - : 指定した文字列を `CharacterData.data` の文字列に追加します。このメソッドから戻ると、 `data` には結合した文字列になります。
- {{domxref("CharacterData.before()")}}
  - : 一連の {{domxref("Node")}} オブジェクトまたは文字列を、この `CharacterData` の親ノードの子リストの中、この `CharacterData` オブジェクトの直前に挿入します。
- {{domxref("CharacterData.deleteData()")}}
  - : `CharacterData.data` の文字列の指定したオフセット位置から、指定した数の文字を削除します。このメソッドから戻ると、 `data` には短縮された文字列になります。
- {{domxref("CharacterData.insertData()")}}
  - : `CharacterData.data` の文字列の指定したオフセット位置に、指定した文字を挿入します。このメソッドから戻ると、 `data` には変更された文字列になります。
- {{domxref("CharacterData.remove()")}}
  - : 親要素の子のリストから、オブジェクトを削除します。
- {{domxref("CharacterData.replaceData()")}}
  - : 指定したオフセット位置から指定した量の文字列を、指定した文字列に置き換えます。このメソッドから戻ると、 `data` には変更された文字列になります。
- {{DOMxRef("CharacterData.replaceWith()")}}
  - : 親ノードの子リストの文字を {{domxref("Node")}} オブジェクトまたは文字列の集合で置き換えます。
- {{domxref("CharacterData.substringData()")}}
  - : 指定された長さの `CharacterData.data` の部分を含む、指定されたオフセットから始まる文字列を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM 概要ページ](/en-US/docs/Web/API/Document_Object_Model).
- このインターフェイスを実装している具象インターフェイス: {{domxref("Text")}}, {{domxref("CDATASection")}}, {{domxref("ProcessingInstruction")}}, {{domxref("Comment")}}
