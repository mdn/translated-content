---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
tags:
  - API
  - 後方互換性
  - 非推奨
  - インターフェイス
  - Navigation Timing
  - Navigation Timing API
  - Optimization
  - Performance
  - Reference
  - Timing
  - legacy
browser-compat: api.PerformanceTiming
translation_of: Web/API/PerformanceTiming
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

> **Warning:** このインターフェイスは <a href="https://w3c.github.io/navigation-timing/#obsolete">Navigation Timing Level 2 仕様</a>では非推奨です。代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

**`PerformanceTiming`** インターフェイスは、下位互換性のために維持されている古いインターフェイスであり、現在のページの読み込み中および使用中に発生するさまざまなイベントに関するパフォーマンスタイミング情報を提供するプロパティを含みます。ページを記述する `PerformanceTiming` オブジェクトは {{domxref("Performance.timing", "window.performance.timing")}} プロパティを使用して取得します。

## プロパティ

_`PerformanceTiming` インターフェイスに継承したプロパティはありません。_

これらのプロパティはそれぞれ、ページの読み込みプロセスにおいて特定のポイントに到達した時刻を表します。 DOM イベントに対応しているものもあれば、特徴的なブラウザーの内部操作が行われた時刻を記述するものもあります。

それぞれの時刻は符号なし 64 ビット整数 (`unsigned long long`) として提供され、 UNIX 元期からのミリ秒単位でその時点を表しています。

これらのプロパティは、ナビゲーション処理中に発生する順番に並べられています。

- {{domxref("PerformanceTiming.navigationStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : アンロードのプロンプトが、同じ閲覧コンテキスト内の前の文書で終了した時刻。前の文書が存在しない場合、この値は `PerformanceTiming.fetchStart` と同じになります。
- {{domxref("PerformanceTiming.unloadEventStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : イベント {{domxref("Window/unload_event", "unload")}} が発生したとき、ウィンドウ内の前の文書がアンロードを開始した時刻を示す。前の文書が存在しない場合、または前の文書や必要なリダイレクトが同じオリジンでない場合、返される値は `0` です。
- {{domxref("PerformanceTiming.unloadEventEnd")}} {{readonlyInline}} {{deprecated_inline}}
  - : domxref("Window/unload_event", "unload")}} イベントハンドラーが終了した時刻。前の文書が存在しない場合、または前の文書や必要なリダイレクトのいずれかが同じオリジンでない場合、返される値は `0` である。
- {{domxref("PerformanceTiming.redirectStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : 最初の HTTP リダイレクトが開始された時刻。リダイレクトがない場合、あるいはリダイレクトのひとつが同じオリジンでない場合、返される値は `0` になります。
- {{domxref("PerformanceTiming.redirectEnd")}} {{readonlyInline}} {{deprecated_inline}}
  - : 最後の HTTP リダイレクトが完了した時刻、すなわち HTTP レスポンスの最後のバイトを受信した時刻です。リダイレクトがない場合、あるいはリダイレクトに同一オリジンでないものが含まれている場合、返される値は `0` になります。
- {{domxref("PerformanceTiming.fetchStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : ブラウザーが HTTP リクエストを使用して文書を取得する準備ができた時刻。この時点は、アプリケーションのキャッシュがチェックされる*前*です。
- {{domxref("PerformanceTiming.domainLookupStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : ドメイン検索を開始した時刻。持続的な接続を使用している場合、または情報がキャッシュやローカルリソースに保存されている場合、この値は `PerformanceTiming.fetchStart` と同じになります。
- {{domxref("PerformanceTiming.domainLookupEnd")}} {{readonlyInline}} {{deprecated_inline}}
  - : ドメイン検索が終了した時刻。持続的な接続を使用している場合、または情報がキャッシュやローカルリソースに保存されている場合、この値は `PerformanceTiming.fetchStart` と同じになります。
- {{domxref("PerformanceTiming.connectStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : 接続を開く要求をネットワークに送信した時刻。トランスポート層がエラーを報告し、接続確立が再び開始された場合、最後の接続確立開始時刻が与えられます。持続的な接続を使用している場合、この値は `PerformanceTiming.fetchStart` と同じになります。
- {{domxref("PerformanceTiming.connectEnd")}} {{readonlyInline}} {{deprecated_inline}}
  - : 接続がネットワークで開いた時刻。トランスポート層がエラーを報告し、接続の確立が再び開始された場合、最後の接続の確立に終了した時刻が与えられます。持続的な接続を使用している場合、この値は `PerformanceTiming.fetchStart` と同じになります。すべての安全な接続ハンドシェイク、または SOCKS 認証が終了すると、接続が開かれたとみなされます。
- {{domxref("PerformanceTiming.secureConnectionStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : 安全な接続のハンドシェイクが開始された時刻。そのような接続が要求されていない場合は、 `0` を返します。
- {{domxref("PerformanceTiming.requestStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : ブラウザーが実際の文書を取得するために、サーバーまたはキャッシュからリクエストを送信した時刻。リクエスト開始後にトランスポート層に障害が発生し、接続が再開された場合は、このプロパティには新たなリクエストに対応する時刻が設定されます。
- {{domxref("PerformanceTiming.responseStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : ブラウザーがレスポンスの最初のバイトを受信した時刻。サーバーからキャッシュ、またはローカルリソースから受信した時刻。
- {{domxref("PerformanceTiming.responseEnd")}} {{readonlyInline}} {{deprecated_inline}}
  - : ブラウザーがサーバー、キャッシュ、ローカルリソースからレスポンスの最後のバイトを受信した時刻、またはこれが最初に発生した場合は接続が閉じられた時刻。
- {{domxref("PerformanceTiming.domLoading")}} {{readonlyInline}} {{deprecated_inline}}
  - : パーサーが処理を開始し、その {{domxref("Document.readyState")}} が `'loading'` に変わり、対応する {{domxref("Document/readystatechange_event", "readystatechange")}} イベントが発行された時刻。
- {{domxref("PerformanceTiming.domInteractive")}} {{readonlyInline}} {{deprecated_inline}}
  - : パーサーがメイン文書の処理を終了し、その {{domxref("Document.readyState")}} が `'interactive'` に変わり、対応する {{domxref("Document/readystatechange_event", "readystatechange")}} イベントが発行された時刻。
- {{domxref("PerformanceTiming.domContentLoadedEventStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : パーサーが {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベントを送信する直前、つまり解釈処理直後に実行する必要があるすべてのスクリプトの実行が完了した時刻。
- {{domxref("PerformanceTiming.domContentLoadedEventEnd")}} {{readonlyInline}} {{deprecated_inline}}
  - : 一刻も早く実行する必要のあるスクリプトが、順不同にかかわらず、すべて実行が完了した時刻。
- {{domxref("PerformanceTiming.domComplete")}} {{readonlyInline}} {{deprecated_inline}}
  - : パーサーがメイン文書の処理を終了し、その {{domxref("Document.readyState")}} が `'complete' ` に変わり、対応する {{domxref("Document/readystatechange_event", "readystatechange")}} イベントが発行された時刻。
- {{domxref("PerformanceTiming.loadEventStart")}} {{readonlyInline}} {{deprecated_inline}}
  - : 現在の文書に対して {{domxref("Window/load_event", "load")}} イベントが送信された時刻。このイベントがまだ送信されていない場合は、 `0` を返します。
- {{domxref("PerformanceTiming.loadEventEnd")}} {{readonlyInline}} {{deprecated_inline}}
  - : {{domxref("Window/load_event", "load")}} イベントハンドラーが終了した時刻、すなわち load イベントが完了した時刻です。このイベントがまだ送信されていない場合、またはまだ完了していない場合、 `0` を返します。

## メソッド

_`PerformanceTiming` インターフェイスに継承したメソッドはありません。_

- {{deprecated_inline}} {{domxref("PerformanceTiming.toJSON()")}} {{non-Standard_Inline}}
  - : [JSON オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) で、この `PerformanceTiming` オブジェクトを表します。

## 仕様書

[Navigation Timing 仕様書](https://w3c.github.io/navigation-timing/#obsolete) がこの機能を非推奨としたため、この機能は標準化される予定はありません。
代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このオブジェクトを生成する {{domxref("Performance.timing")}} プロパティ
