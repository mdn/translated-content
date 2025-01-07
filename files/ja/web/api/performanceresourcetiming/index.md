---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: 9a35e1c5480419efc4cd7bcfd856ff64cdfb5b54
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceResourceTiming`** インターフェイスは、アプリケーションのリソースの読み込みに関する詳細なネットワークタイミングデータの取得と分析を可能にします。アプリケーションはタイミングメトリックを使用して、{{domxref("XMLHttpRequest")}}、{{SVGElement("SVG","SVG 要素")}}、画像、スクリプトなどの特定のリソースを取得するのにかかる時間を判断できます。

## 解説

このインターフェイスのプロパティは、リダイレクトの開始時刻と終了時刻、フェッチの開始時刻、DNS ルックアップの開始時刻と終了時刻、レスポンスの開始時刻と終了時刻などのネットワークイベントに対する高解像度タイムスタンプを含むリソース読み込みタイムラインを作成します。さらに、このインターフェイスは、取得したリソースのサイズや取得を開始したリソースの種類に関するデータを提供する他のプロパティを使用して {{domxref("PerformanceEntry")}} を拡張します。

{{InheritanceDiagram}}

### 一般的なリソースタイミングメトリクス

このインターフェイスのプロパティを使用すると、特定のリソースタイミングメトリックスを計算することができます。一般的な使用される用途は次のとおりです。

- TCP ハンドシェイク時間の計測 (`connectEnd` - `connectStart`)
- DNS ルックアップ時間の計測 (`domainLookupEnd` - `domainLookupStart`)
- リダイレクト時間の計測 (`redirectEnd` - `redirectStart`)
- リクエスト時間の計測 (`responseStart` - `requestStart`)
- TLS ネゴシエーション時間の計測 (`requestStart` - `secureConnectionStart`)
- フェッチ時間の計測（リダイレクトなし） (`responseEnd` - `fetchStart`)
- サービスワーカー処理時間の計測 (`fetchStart` - `workerStart`)
- コンテンツが圧縮されていたかのチェック (`decodedBodySize` が `encodedBodySize` と同じにならない)
- ローカルキャッシュがヒットしたかどうかのチェック (`transferSize` が `0` になる)
- 最新の高速プロトコルが使用されているかどうかのチェック (`nextHopProtocol` が HTTP/2 または HTTP/3)
- リソースがレンダーブロッキングであることのチェック (`renderBlockingStatus`)

## インスタンスプロパティ

### `PerformanceEntry` からの継承

このインターフェイスは、以下のように修飾し制約することによって、リソースパフォーマンス項目型の {{domxref("PerformanceEntry")}} プロパティを拡張します。

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp","timestamp")}} プロパティで {{domxref("PerformanceResourceTiming.responseEnd","responseEnd")}} と {{domxref("PerformanceEntry.startTime","startTime")}} の差を返します。
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : `"resource"` を返します。
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : このリソースの URL を返します。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : リソースのフェッチを始めた時刻の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。この値は {{domxref("PerformanceResourceTiming.fetchStart")}} と等価です。

### タイムスタンプ

このインターフェイスは、以下のタイムスタンププロパティに対応しています。図に示すように、リソースのフェッチに記録される順番で掲載されています。アルファベット順の一覧は、左のナビゲーションに掲載されています。

![リソースのフェッチに記録された順にタイムスタンプを掲載しているタイムスタンプ図](timestamp-diagram.svg)

- {{domxref('PerformanceResourceTiming.redirectStart')}} {{ReadOnlyInline}}
  - : リダイレクトを開始するフェッチの開始時刻を表す {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref('PerformanceResourceTiming.redirectEnd')}} {{ReadOnlyInline}}
  - : 最後のリダイレクトのレスポンスの最後のバイトを受信した直後の {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref('PerformanceResourceTiming.workerStart')}} {{ReadOnlyInline}}
  - : サービスワーカースレッドが既に実行されている場合は {{domxref("FetchEvent")}} を配信する直前、実行されていない場合はサービスワーカースレッドを始める直前の {{domxref("DOMHighResTimeStamp")}} を返します。リソースがサービスワーカーに介入されない場合、このプロパティは常に 0 を返します。
- {{domxref('PerformanceResourceTiming.fetchStart')}} {{ReadOnlyInline}}
  - : ブラウザーがリソースのフェッチを始める直前の {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref('PerformanceResourceTiming.domainLookupStart')}} {{ReadOnlyInline}}
  - : ブラウザーがリソースのドメイン名検索を始める直前の {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref('PerformanceResourceTiming.domainLookupEnd')}} {{ReadOnlyInline}}
  - : ブラウザーがリソースのドメイン名検索を完了した直後の時刻を表す {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref('PerformanceResourceTiming.connectStart')}} {{ReadOnlyInline}}
  - : ブラウザーがリソースを取得するためにサーバーとの接続を始める直前の {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref('PerformanceResourceTiming.secureConnectionStart')}} {{ReadOnlyInline}}
  - : ブラウザーが現在の接続を保護するためにハンドシェイク処理を開始する直前の {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref('PerformanceResourceTiming.connectEnd')}} {{ReadOnlyInline}}
  - : ブラウザーがリソースを取得するためにサーバーとの接続を完了した直後の {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref('PerformanceResourceTiming.requestStart')}} {{ReadOnlyInline}}
  - : ブラウザーがサーバーからリソースのリクエストを始める直前の {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref('PerformanceResourceTiming.responseStart')}} {{ReadOnlyInline}}
  - : ブラウザーがサーバーからレスポンスの最初のバイトを受け取った直後の {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref('PerformanceResourceTiming.responseEnd')}} {{ReadOnlyInline}}
  - : ブラウザーがリソースの最後のバイトを受信した直後、またはトランスポート接続が閉じられる直前の、どちらか早い方の {{domxref("DOMHighResTimeStamp")}} です。

### 追加のリソース情報

さらに、このインターフェイスは、リソースに関するより詳細な情報を含む以下のプロパティを公開します。

- {{domxref('PerformanceResourceTiming.decodedBodySize')}} {{ReadOnlyInline}}
  - : メッセージ本体のフェッチ（HTTPまたはキャッシュ）から受け取ったサイズ（オクテット単位）を表す数値で、適用されたコンテンツエンコーディングを削除した後の値です。
- {{domxref('PerformanceResourceTiming.encodedBodySize')}} {{ReadOnlyInline}}
  - : フェッチ（HTTP またはキャッシュ）から受け取ったペイロード本体のサイズ（オクテット単位）を表す数値で、適用されたコンテンツエンコーディングを削除する前のものです。
- {{domxref('PerformanceResourceTiming.initiatorType')}} {{ReadOnlyInline}}
  - : 文字列で、パフォーマンス項目を開始したウェブプラットフォーム機能を表します。
- {{domxref('PerformanceResourceTiming.nextHopProtocol')}} {{ReadOnlyInline}}
  - : 文字列で、 [ALPN プロトコル ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) によって識別される、リソースを取得するために使用されたネットワークプロトコルを表します。
- {{domxref('PerformanceResourceTiming.renderBlockingStatus')}} {{ReadOnlyInline}}
  - : レンダーブロッキングの状態を表す文字列。"`blocking`" または "`non-blocking`" のどちらかです。
- {{domxref('PerformanceResourceTiming.responseStatus')}} {{experimental_inline}} {{ReadOnlyInline}}
  - : リソースのフェッチ時に返される HTTP レスポンスステータスコードを表す数値です。
- {{domxref('PerformanceResourceTiming.transferSize')}} {{ReadOnlyInline}}
  - : フェッチされたリソースのサイズ （オクテット単位）を表す数値。このサイズには、レスポンスヘッダーフィールドとレスポンスのペイロード本体が含まれます。
- {{domxref('PerformanceResourceTiming.serverTiming')}} {{ReadOnlyInline}}
  - : サーバーのタイミングメトリクスを格納した {{domxref("PerformanceServerTiming")}} 項目の配列です。

## インスタンスメソッド

- {{domxref("PerformanceResourceTiming.toJSON()")}}
  - : この `PerformanceResourceTiming` オブジェクトの JSON 表現を返します。

## 例

### リソースのタイミング情報のログ出力

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(entry);
});
```

## セキュリティ要件

### オリジン間のタイミング情報

リソースタイミングプロパティの多くは、リソースがオリジン間リクエストであった場合に `0` または空文字列を返すよう制約されています。オリジン間のタイミング情報を見るためには、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` にタイミングリソースを見ることを許可するには、オリジン間リソースで次のものを送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [リソースタイミング（概要）](/ja/docs/Web/API/Performance_API/Resource_timing)
- [リソースタイミング API の使用](/ja/docs/Web/API/Performance_API/Resource_timing)
