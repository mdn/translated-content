---
title: StaticRange
slug: Web/API/StaticRange
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

[DOM](/ja/docs/Web/API/Document_Object_Model) の **`StaticRange`** インターフェイスは {{domxref("AbstractRange")}} を拡張し、 DOM ツリー内で発生した変更を反映しない、 DOM 内のコンテンツの範囲を指定するメソッドを提供します。

このインターフェイスは `AbstractRange` と同じプロパティとメソッドの集合を提供します。

`AbstractRange` と `StaticRange` は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)からは利用できません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("StaticRange.StaticRange", "StaticRange()")}}
  - : プロパティのデフォルト値を指定するオプションから、新しい `StaticRange` オブジェクトを作成します。

## インスタンスプロパティ

_親インターフェイスである {{domxref("AbstractRange")}} から継承したプロパティがあります。_

## 使用上のメモ

DOM 範囲は文書内のコンテンツの範囲を指定します。あるノード（または要素）の内部で始まり、別のノード（または要素）の内部で終わる可能性があります。 {{domxref("Range")}} とは異なり、 `StaticRange` はその時点で固定された範囲を表します。文書が変更されても、変更されずに同じ範囲を維持しようとします。DOM に何らかの変更が加えられた場合、 `StaticRange` で指定した範囲に格納する実際のデータは変更される可能性があります。これにより、{{Glossary("user agent", "ユーザーエージェント")}}は、ウェブアプリケーションやウェブサイトがライブ更新される範囲を必要としない場合、不必要な多くの作業を避けることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- ライブで更新される DOM 内のコンテンツ範囲: {{domxref("Range")}}
- {{domxref("AbstractRange")}}: すべての範囲が派生する抽象インターフェイス
