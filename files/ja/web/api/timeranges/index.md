---
title: TimeRanges
slug: Web/API/TimeRanges
---

{{APIRef("DOM")}}

**`TimeRanges`** インターフェイスは、主に {{HTMLElement("audio")}} 要素と {{HTMLElement("video")}} 要素で使用するためにメディアをロードするときにメディアのどの部分がバッファリングされたかを追跡する目的で、一連の時間範囲を表すために使用します。

`TimeRanges` オブジェクトには、1 つ以上の時間範囲が含まれ、それぞれが開始時間と終了時間のオフセットで指定されます。 各時間範囲を参照するには、`start()` メソッドおよび `end()` メソッドを使用して、取得する時間範囲のインデックス番号を渡します。

「[正規化された TimeRanges オブジェクト](https://www.w3.org/TR/html52/semantics-embedded-content.html#normalized-timeranges-object)（英語）」という用語は、そのようなオブジェクトの範囲が順序付けられ、重なり合わず、空ではなく、触れていないことを示します（隣接する範囲は 1 つの大きな範囲に折り畳まれます）。

## プロパティ

- {{domxref("TimeRanges.length")}} {{ReadOnlyInline}}
  - : 時間範囲オブジェクトによって表される時間範囲の数を `unsigned long` 型で返します。

## メソッド

- {{domxref("TimeRanges.start()")}}
  - : 指定されたインデックスを持つ範囲の開始時間を返します。
- {{domxref("TimeRanges.end()")}}
  - : 指定された範囲の終了時間を返します。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
