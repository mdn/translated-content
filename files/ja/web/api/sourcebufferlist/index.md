---
title: SourceBufferList
slug: Web/API/SourceBufferList
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

**`SourceBufferList`** インターフェイスは、複数の {{domxref("SourceBuffer")}} オブジェクトの単純なコンテナリストを表します。

特定の `MediaSource` に追加された `SourceBuffer` を含むソースバッファのリストは、{{domxref("MediaSource.sourceBuffers")}} プロパティを使用して取得できます。 個々のソースバッファは、配列演算子（つまり `[]`）または {{jsxref("Array.forEach", "forEach()")}} などの関数を使用してアクセスできます。

{{InheritanceDiagram}}

## プロパティ

- {{domxref("SourceBufferList.length")}} {{readonlyInline}}
  - : リスト内の {{domxref("SourceBuffer")}} オブジェクトの数を返します。

### イベントハンドラ

- {{domxref("SourceBufferList.onaddsourcebuffer")}}
  - : `addsourcebuffer` イベントのイベントハンドラ。
- {{domxref("SourceBufferList.onremovesourcebuffer")}}
  - : `removesourcebuffer` イベントのイベントハンドラ。

## メソッド

_親インターフェイスである {{domxref("EventTarget")}} からメソッドを継承します。_

- [`SourceBufferList`: indexed property getter](/ja/docs/Web/API/SourceBufferList)
  - : このゲッターにより、リスト内の `SourceBuffer` オブジェクトに配列演算子（つまり `[]`）でアクセスできます。

## 例

未定

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
