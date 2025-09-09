---
title: XMLSerializer.serializeToString()
slug: Web/API/XMLSerializer/serializeToString
l10n:
  sourceCommit: 87a9f73c410c9b9e91300695c8aa4931367243fb
---

{{APIRef("DOM Parsing")}}

{{domxref("XMLSerializer")}} の **`serializeToString()`** メソッドは、指定された {{Glossary("DOM")}} ツリーを表す {{Glossary("XML")}} 形式の文字列を構築します。

## 構文

```js-nolint
serializeToString(rootNode)
```

### 引数

- `rootNode`
  - : XML 表現を構築する DOM ツリーまたはサブツリーのルートとして用いる {{domxref("Node")}} です。

### 返値

指定された DOM ツリーの XML 表現が入った文字列です。

### 例外

- {{jsxref("TypeError")}}
  - : 指定された `rootNode` が対応しているノード型でないとき投げられます。ルートノードは {{domxref("Node")}} または {{domxref("Attr")}} でなければなりません。
- `InvalidStateError` {{domxref("DOMException")}}
  - : ツリーが正常にシリアライズできなかったとき投げられます。おそらくコンテンツの XML シリアライズ対応に関する問題が原因です。
- `SyntaxError` {{domxref("DOMException")}}
  - : HTML のシリアライズを要求されたが、コンテンツが良い形式でないため成功しなかったとき投げられます。

## 使用法の注意点

### 対応しているノード型

指定するルートノードとその全ての子孫は、XML シリアライズのアルゴリズムに対応しているものでなければなりません、ルートノード自身は、{{domxref("Node")}} または {{domxref("Attr")}} のオブジェクトでなければなりません。

ルートノードの子孫では、`Node` と `Attr` に加えて以下の型も利用可能です。

- {{domxref("DocumentType")}}
- {{domxref("Document")}}
- {{domxref("DocumentFragment")}}
- {{domxref("Element")}}
- {{domxref("Comment")}}
- {{domxref("Text")}}
- {{domxref("ProcessingInstruction")}}
- {{domxref("Attr")}}

これ以外の型が見つかった場合、{{jsxref("TypeError")}} 例外が投げられます。

### 結果の XML に関する注意点

`serializeToString()` から出力される XML について、注意するべき点がいくつかあります。

- XML シリアライズにおいては、`Element` および `Attr` のノードの {{domxref("Element.namespaceURI", "namespaceURI")}} は常にそのままシリアライズされます。すなわち、指定されている {{domxref("Element.prefix", "prefix")}} やデフォルト名前空間は消されたり変更されたりする可能性があります。
- 結果の XML は HTML パーサーに対応しています。
- HTML 名前空間にある子ノードを持たない (すなわち、空タグを表している) 要素は、空要素タグ (`"<someelement/>"`) ではなく開始タグと終了タグ (`"<someelement></someelement>"`) を用いてシリアライズされます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XML のパースとシリアライズ](/ja/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- HTML にシリアライズする : {{domxref("Element.innerHTML")}} と
  {{domxref("Element.outerHTML")}}
- HTML や XML をパースして DOM ツリーを生成する : {{domxref("DOMParser")}}
