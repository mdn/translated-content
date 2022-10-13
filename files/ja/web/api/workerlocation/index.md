---
title: WorkerLocation
slug: Web/API/WorkerLocation
---

{{APIRef("Web Workers API")}}

The **`WorkerLocation`** インタフェースは、{{domxref("Worker")}} で実行されているスクリプトの絶対的な場所を表します。それぞれの Worker はこのインタフェースを持つオブジェクトを持っており、{{domxref("WorkerGlobalScope.location")}} 属性からアクセスできます。なおこの属性は、`self.location` で参照できます。

このインタフェースは、ワーカーコンテキストでのみ利用できます。

## 属性

_`WorkerLocation` インタフェースには、{{domxref("URLUtilsReadOnly")}} インタフェースで定義されたもの以外に、継承した属性はありません。_

- {{domxref("URLUtilsReadOnly.href")}} {{readOnlyInline}}
  - : その {{domxref("Worker")}} で実行中のスクリプトの絶対 URL を表す {{domxref("DOMString")}} です。
- {{domxref("URLUtilsReadOnly.protocol")}} {{readOnlyInline}}
  - : その {{domxref("Worker")}} で実行中のスクリプトの絶対 URL のスキーマ部分を表す {{domxref("DOMString")}} です。なお末尾に `':'`を含みます。
- {{domxref("URLUtilsReadOnly.host")}} {{readOnlyInline}}
  - : その {{domxref("Worker")}} で実行中のスクリプトの絶対 URL のうち、ホスト部分を表す {{domxref("DOMString")}} です。 `':'`とポート番号を含みます。
- {{domxref("URLUtilsReadOnly.hostname")}} {{readOnlyInline}}
  - : その {{domxref("Worker")}} で実行中のスクリプトの絶対 URL のうち、ホスト名を表す {{domxref("DOMString")}} です。
- {{domxref("URLUtilsReadOnly.origin")}} {{readOnlyInline}}
  - : その {{domxref("Worker")}} で実行中のスクリプトのオリジンをカノニカル形式で表した　{{domxref("DOMString")}} です。
- {{domxref("URLUtilsReadOnly.port")}} {{readOnlyInline}}
  - : その {{domxref("Worker")}} で実行中のスクリプトの絶対 URL のうち、ポート番号部分を表す {{domxref("DOMString")}} です。
- {{domxref("URLUtilsReadOnly.pathname")}} {{readOnlyInline}}
  - : その {{domxref("Worker")}} で実行中のスクリプトの絶対 URL のうち、パス部分を表す {{domxref("DOMString")}} です。`'/'` で始まります。
- {{domxref("URLUtilsReadOnly.search")}} {{readOnlyInline}}
  - : その {{domxref("Worker")}} で実行中のスクリプトの絶対 URL のうち、パラメーター部分を表す {{domxref("DOMString")}} です。 `'?'` で始まります。
- {{domxref("URLUtilsReadOnly.hash")}} {{readOnlyInline}}
  - : その {{domxref("Worker")}} で実行中のスクリプトの絶対 URL のうち、フラグメント ID を表す {{domxref("DOMString")}} です。 `'#'` で始まります。

## メソッド

_`WorkerLocation` インタフェースには、{{domxref("URLUtilsReadOnly")}} インタフェースで定義されたもの以外に、継承したメソッドはありません。_

- {{domxref("URLUtilsReadOnly.toString()")}}
  - : {{domxref("URLUtilsReadOnly.href")}} と同じく、その {{domxref("Worker")}} で実行中のスクリプトの絶対 URL を {{domxref("DOMString")}} として返します。

## 仕様

| 仕様                                                                                 | 状態                             | コメント |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#workerlocation', 'WorkerLocation')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザ互換性

{{Compat("api.WorkerLocation")}}

## 関連情報

- Other Worker-related interfaces: {{domxref("Worker")}}, {{domxref("WorkerNavigator")}}, and {{domxref("WorkerGlobalScope")}}.
- [Using web workers](/ja/docs/Web/Guide/Performance/Using_web_workers)
