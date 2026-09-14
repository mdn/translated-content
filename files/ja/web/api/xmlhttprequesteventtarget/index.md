---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequestEventTarget` インターフェイスは、 {{domxref("XMLHttpRequest")}} と {{domxref("XMLHttpRequestUpload")}} で共有されるイベントハンドラーを示します。

`XMLHttpRequestEventTarget` を直接使用することはありません。サブクラスで操作してください。

## イベント

次のイベントは、{{domxref("XMLHttpRequest")}} および {{domxref("XMLHttpRequestUpload")}} で利用できます。

- {{domxref("XMLHttpRequestEventTarget/abort_event", "abort")}}
  - : 例えばプログラムが {{domxref("XMLHttpRequest.abort()")}} を呼び出した時など、リクエストが中断されたときに発生します。
    `onabort` イベントハンドラープロパティを通して利用することもできます。
- {{domxref("XMLHttpRequestEventTarget/error_event", "error")}}
  - : リクエストでエラーが発生したときに発生します。
    `onerror` イベントハンドラープロパティを通して利用することもできます。
- {{domxref("XMLHttpRequestEventTarget/load_event", "load")}}
  - : リクエストのトランザクションが成功裏に完了したときに発生します。
    `onload` イベントハンドラープロパティを通して利用することもできます。
- {{domxref("XMLHttpRequestEventTarget/loadend_event", "loadend")}}
  - : リクエストが完了したときに、成功した場合（{{domxref("XMLHttpRequestEventTarget/load_event", "load")}} の後）、成功しなかった場合（{{domxref("XMLHttpRequestEventTarget/abort_event", "abort")}} または {{domxref("XMLHttpRequestEventTarget/error_event", "error")}} の後で）、どちらでも発生します。
    `onloadend` イベントハンドラープロパティを通して利用することもできます。
- {{domxref("XMLHttpRequestEventTarget/loadstart_event", "loadstart")}}
  - : リクエストがデータを読み込み始めたときに発生します。
    `onloadstart` イベントハンドラープロパティを通して利用することもできます。
- {{domxref("XMLHttpRequestEventTarget/progress_event", "progress")}}
  - : リクエストがもっとデータを受信した際に定期的に発生します。
    `onprogress` イベントハンドラープロパティを通して利用することもできます。
- {{domxref("XMLHttpRequestEventTarget/timeout_event", "timeout")}}
  - : プリセット時間が過ぎたために進行が終了したときに発生します。
    `ontimeout` イベントハンドラープロパティを通して利用することもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLHttpRequestUpload")}}
