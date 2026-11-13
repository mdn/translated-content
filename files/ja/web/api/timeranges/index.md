---
title: TimeRanges
slug: Web/API/TimeRanges
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("HTML DOM")}}

{{HTMLElement("audio")}} 要素や {{HTMLElement("video")}} 要素で使用するためにメディアをロードするとき、**`TimeRanges`** インターフェイスは、メディアのどの部分がバッファリングされたかを追跡する目的で、一連の時間範囲を表すために使用します。

`TimeRanges` オブジェクトには、1 つ以上の時間範囲が含まれ、それぞれが開始時間と終了時間のオフセットで指定されます。 各時間範囲を参照するには、`start()` メソッドおよび `end()` メソッドを使用して、取得する時間範囲のインデックス番号を渡します。

## 正規化された TimeRanges オブジェクト

{{domxref("HTMLMediaElement")}} オブジェクトのいくつかのメンバーは、**正規化された TimeRanges オブジェクト** を返します。[仕様書の説明](https://html.spec.whatwg.org/multipage/media.html#normalised-timeranges-object)では、このオブジェクトは以下の特徴を保有します。

_このオブジェクト内の範囲は順序付けられており、重複せず、隣接する範囲は重ならない（隣接する範囲は 1 つのより大きな範囲に統合される）。範囲は空である場合もあり（単一の時点のみを参照する場合もある）。_

## インスタンスプロパティ

- {{domxref("TimeRanges.length")}} {{ReadOnlyInline}}
  - : 時間範囲オブジェクトによって表される時間範囲の数を `unsigned long` 型で返します。

## インスタンスメソッド

- {{domxref("TimeRanges.start()")}}
  - : 指定されたインデックスを持つ範囲の開始時間を返します。
- {{domxref("TimeRanges.end()")}}
  - : 指定された範囲の終了時間を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
