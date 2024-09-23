---
title: PerformanceMark
slug: Web/API/PerformanceMark
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceMark`** は {{domxref("PerformanceEntry")}} オブジェクトのうち {{domxref("PerformanceEntry.entryType","entryType")}} が "`mark`" を持つインターフェイスです。

この型の項目は、通常、{{domxref("Performance.mark","performance.mark()")}} を呼んで名前付き {{domxref("DOMHighResTimeStamp")}}（マーク）をブラウザーのパフォーマンスタイムラインに追加することで作成されます。 ブラウザーのパフォーマンスタイムラインに追加されないパフォーマンスマークを作成するには、コンストラクターを使用してください。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("PerformanceMark.PerformanceMark", "PerformanceMark()")}}
  - : ブラウザーのパフォーマンスタイムラインに追加しない新しい `PerformanceMark` オブジェクトを作成します。

## インスタンスプロパティ

このインターフェイスは、以下のようにプロパティを修飾/制約することで以下の {{domxref("PerformanceEntry")}} プロパティを拡張します。

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : "`mark`" を返します。
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : マークが{{domxref("Performance.mark()","performance.mark()")}} を呼び出して作成されたときに付けられた名前を返します。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : {{domxref("Performance.mark()","performance.mark()")}} が呼び出されたときに {{domxref("DOMHighResTimeStamp")}} を返します。
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : "`0`" を返します（マークには期間がありません。）

このインターフェイスは、以下のプロパティにも対応しています。

- {{domxref("PerformanceMark.detail")}} {{ReadOnlyInline}}
  - : 任意のメタデータを返します。このメタデータは、マークに記載されたもので、構築時に指定されたものです。

## インスタンスメソッド

このインターフェイスにメソッドはありません。

## 例

[ユーザータイミング API の使用](/ja/docs/Web/API/Performance_API/User_timing)の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ユーザータイミング（概要）](/ja/docs/Web/API/Performance_API/User_timing)
- [ユーザータイミング API の使用](/ja/docs/Web/API/Performance_API/User_timing)
