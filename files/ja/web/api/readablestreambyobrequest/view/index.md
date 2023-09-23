---
title: "ReadableStreamBYOBRequest: view プロパティ"
short-title: view
slug: Web/API/ReadableStreamBYOBRequest/view
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Streams")}}

**`view`** は {{domxref("ReadableStreamBYOBRequest")}} インターフェイスのゲッタープロパティで、現在のビューを返します。

## 値

コントローラーが生成したデータを書き込む出力先領域を表す[型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)です。

{{domxref("ReadableStreamBYOBRequest.respond()")}} または {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}} の呼び出しによって、すでにリクエストが応答されていた場合は `null` になります。

## 例

{{domxref("ReadableStreamBYOBRequest")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
