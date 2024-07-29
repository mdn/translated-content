---
title: StaticRange
slug: Web/API/StaticRange
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("DOM")}}

[DOM](/ja/docs/Web/API/Document_Object_Model) の **`StaticRange`** インターフェイスは {{domxref("AbstractRange")}} を拡張し、 DOM ツリー内で発生した変更を反映しない、 DOM 内のコンテンツの範囲を指定するメソッドを提供します。

このインターフェイスは `AbstractRange` と同じプロパティとメソッドの集合を提供します。

`AbstractRange` と `StaticRange` は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)からは利用できません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("StaticRange.StaticRange", "StaticRange()")}}
  - : プロパティの既定値を指定したオブジェクトを指定して、新しい `StaticRange` オブジェクトを作成します。

## インスタンスプロパティ

_以下のプロパティは親インターフェイスである {{domxref("AbstractRange")}} から継承しています。_

- {{domxref("StaticRange.collapsed")}} {{ReadOnlyInline}}
  - : 論理値で、範囲が折りたたまれている場合は `true` となります。折りたたまれた範囲とは、開始位置と末尾位置が同じで、 0 文字の長さの範囲です。
- {{domxref("StaticRange.endContainer", "endContainer")}} {{ReadOnlyInline}}
  - : `endOffset` プロパティで指定された範囲の末尾がある場所の {{domxref("Node")}} オブジェクトです。
- {{domxref("StaticRange.endOffset")}} {{ReadOnlyInline}}
  - : ノードの内容の先頭から、この範囲オブジェクトで表す範囲の先頭までのオフセットを文字数で表した整数値です。この値は `endContainer` ノードの長さよりも小さくなければなりません。
- {{domxref("StaticRange.startContainer")}} {{ReadOnlyInline}}
  - : `startOffset` プロパティで指定された範囲の先頭がある場所の {{domxref("Node")}} オブジェクトです。
- {{domxref("StaticRange.startOffset")}} {{ReadOnlyInline}}
  - : ノードの内容の先頭から、範囲オブジェクトが参照する内容の先頭の文字までのオフセットを文字数で表した整数値です。この値は `startContainer` で示すノードの長さよりも小さくなければなりません。

## 使用上のメモ

DOM 範囲は文書内のコンテンツの範囲を指定します。あるノード（または要素）の内部で始まり、別のノード（または要素）の内部で終わる可能性があります。 {{domxref("Range")}} とは異なり、 `StaticRange` はその時点で固定された範囲を表します。文書が変更されても、変更されずに同じ範囲を維持しようとします。DOM に何らかの変更が加えられた場合、 `StaticRange` で指定した範囲に格納する実際のデータは変更される可能性があります。これにより、{{Glossary("user agent", "ユーザーエージェント")}}は、ウェブアプリケーションやウェブサイトがライブ更新される範囲を必要としない場合、不必要な多くの作業を避けることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- ライブで更新される DOM 内のコンテンツ範囲: {{domxref("Range")}}
- {{domxref("AbstractRange")}}: すべての範囲が派生する抽象インターフェイス
