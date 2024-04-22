---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

`XMLHttpRequestEventTarget` インターフェイスは、 {{domxref("XMLHttpRequest")}} と {{domxref("XMLHttpRequestUpload")}} で共有されるイベントハンドラーを示します。

`XMLHttpRequestEventTarget` を直接使用することはありません。サブクラスで操作してください。

## `XMLHttpRequest` への継承

{{InheritanceDiagram("XMLHttpRequest")}}

以下のイベントが {{domxref("XMLHttpRequest")}} で利用できます。

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
- {{domxref("XMLHttpRequest/error_event", "error")}}
- {{domxref("XMLHttpRequest/load_event", "load")}}
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
- {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}

## `XMLHttpRequestUpload` への継承

{{InheritanceDiagram("XMLHttpRequestUpload")}}

以下のイベントが {{domxref("XMLHttpRequestUpload")}} で利用できます。

- {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}
- {{domxref("XMLHttpRequestUpload/error_event", "error")}}
- {{domxref("XMLHttpRequestUpload/load_event", "load")}}
- {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}
- {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}
- {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}
- {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLHttpRequestUpload")}}
