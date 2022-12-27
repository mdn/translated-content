---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
---

{{APIRef("XMLHttpRequest")}}

`XMLHttpRequestEventTarget` は、{{ domxref("XMLHttpRequest")}} のイベントを処理するオブジェクトに実装できるイベントハンドラーを記述するインターフェイスです。

{{InheritanceDiagram}}

## プロパティ

- {{ domxref("XMLHttpRequestEventTarget.onabort") }}
  - : リクエストが中止され、{{event('abort')}} イベントがこのオブジェクトによって受信されたときに呼び出す関数が含まれています。
- {{ domxref("XMLHttpRequestEventTarget.onerror") }}
  - : リクエストでエラーが発生し、このオブジェクトが {{event('error')}} イベントを受信したときに呼び出す関数が含まれています。
- {{ domxref("XMLHttpRequestEventTarget.onload") }}
  - : コンテンツのフェッチに成功した後に HTTP リクエストが返され、このオブジェクトが {{event('load')}} イベントを受信したときに呼び出す関数が含まれています。
- {{ domxref("XMLHttpRequestEventTarget.onloadstart") }}
  - : HTTP リクエストが最初にデータの読み込みを開始し、{{event('loadstart')}} イベントがこのオブジェクトによって受信されたときに呼び出される関数が含まれています。
- {{ domxref("XMLHttpRequestEventTarget.onprogress") }}
  - : リクエストの進行状況に関する情報とともに定期的に呼び出される関数が含まれ、{{event('progress')}} イベントがこのオブジェクトによって受信されます。
- {{ domxref("XMLHttpRequestEventTarget.ontimeout") }}
  - : イベントがタイムアウトし、{{event("timeout")}} イベントがこのオブジェクトによって受信された場合に呼び出される関数が含まれています。これは、`XMLHttpRequest` オブジェクトの `timeout` 属性の値を設定することによってタイムアウトが以前に確立されている場合にのみ発生します。
- {{ domxref("XMLHttpRequestEventTarget.onloadend") }}
  - : リクエストが失敗し、{{event('loadend')}} イベントがこのオブジェクトによって受信された場合でも、ロードが完了したときに呼び出される関数が含まれています。

## 仕様書

| 仕様書                                   | 状態                                 | 備考                   |
| ---------------------------------------- | ------------------------------------ | ---------------------- |
| {{SpecName('XMLHttpRequest')}} | {{Spec2('XMLHttpRequest')}} | WHATWG living standard |

## ブラウザーの互換性

{{Compat("api.XMLHttpRequestEventTarget")}}

## 関連情報

- {{ domxref("XMLHttpRequest") }}
- [Using XMLHttpRequest](/DOM/XMLHttpRequest/Using_XMLHttpRequest)
