---
title: リソースタイミング
slug: Web/API/Performance_API/Resource_timing
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{DefaultAPISidebar("Performance API")}}

リソースタイミングはパフォーマンス API の一部であり、アプリケーションのリソースを読み込む際のネットワークタイミングの詳細データの取得と分析を可能にします。アプリケーションはタイミング指標を使用することで、例えば、{{domxref("Window/fetch", "fetch()")}} API を使用するなどして、JavaScript から明示的に、またはページ読み込みの一部として暗黙的に、特定のリソース（画像やスクリプトなど）を読み込むのにかかる時間を特定することができます。

文書上のすべてのリソースは、{{domxref("PerformanceResourceTiming")}}（{{domxref("PerformanceEntry")}} インターフェイスを拡張したもの）の項目のうち、{{domxref("PerformanceEntry.entryType","entryType")}} が `"resource"` であるもので表されます。

それぞれの `PerformanceResourceTiming` 項目には、リソース読み込みのタイムラインが記録され、リダイレクトの開始と終了時間、DNS ルックアップの開始と終了時間、リクエストの開始、応答の開始と終了時間など、ネットワークイベントの{{domxref("DOMHighResTimeStamp","高解像度タイムスタンプ", "", 1)}}が記載されます。タイムスタンプの他にも、リソースに関する情報が指定されたプロパティが記載されます。例えば、取得したリソースのサイズや、フェッチを開始したリソースの種類などです。

## リソース読み込みタイムスタンプ

![文書内のタイムスタンプが、取得した順番に列挙されているタイムスタンプ図](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
図 1 リソース読み込みタイムスタンプ（[引用元](https://w3c.github.io/resource-timing/#attribute-descriptions)）

アプリケーションは、リソースを読み込む際に使用するさまざまな段階のタイムスタンプを取得することができます。この API が提供するタイムスタンプは以下の通りです。

1. {{domxref("PerformanceEntry.startTime","startTime")}}: リソース読み込み処理を開始した直前のタイムスタンプ。
2. {{domxref("PerformanceResourceTiming.redirectStart","redirectStart")}}: リダイレクトを開始したフェッチのタイムスタンプ。
3. {{domxref("PerformanceResourceTiming.redirectEnd","redirectEnd")}}: 最後のリダイレクトに対するレスポンスの最後のバイトを受信した直後のタイムスタンプ。
4. {{domxref('PerformanceResourceTiming.workerStart','workerStart')}}: サービスワーカーのスレッドを起動した直前のタイムスタンプ。
5. {{domxref("PerformanceResourceTiming.fetchStart","fetchStart")}}: ブラウザーがリソースの取得を始める直前のタイムスタンプ。
6. {{domxref("PerformanceResourceTiming.domainLookupStart","domainLookupStart")}}: ブラウザーがリソースのドメイン名検索を始める直前のタイムスタンプ。
7. {{domxref("PerformanceResourceTiming.domainLookupEnd","domainLookupEnd")}}: ブラウザーがリソースのドメイン名検索を完了した直後のタイムスタンプ。
8. {{domxref('PerformanceResourceTiming.connectStart','connectStart')}}: ユーザーエージェントがリソースを取得するためにサーバーへの接続を確立し始める直前のタイムスタンプ。
9. {{domxref('PerformanceResourceTiming.secureConnectionStart','secureConnectionStart')}}: リソースが安全な接続で読み込まれた場合、ブラウザーが現在の接続を安全にするためにハンドシェイクプロセスを開始した直前のタイムスタンプ。
10. {{domxref('PerformanceResourceTiming.connectEnd','connectEnd')}}: ブラウザーがサーバーへの接続を完了してリソースを取得した直後のタイムスタンプ。
11. {{domxref('PerformanceResourceTiming.requestStart','requestStart')}}: ブラウザーがサーバー、キャッシュ、ローカルリソースからリソースをリクエストし始める直前の時点のタイムスタンプ。
12. {{domxref('PerformanceResourceTiming.responseStart','responseStart')}}: ブラウザーがサーバー、キャッシュ、ローカルリソースからレスポンスの最初のバイトを受信した直後のタイムスタンプ。
13. {{domxref('PerformanceResourceTiming.responseEnd','responseEnd')}}: ブラウザーがリソースの最後のバイトを受信した直後、またはトランスポート接続が閉じられた直前にタイムスタンプが記録されます。どちらが最初のイベントになるかは決まっていません。

## リソースサイズ

{{domxref("PerformanceResourceTiming")}} インターフェイスには、リソースのサイズデータを取得するために使用できる 3 つのプロパティがあります。{{domxref('PerformanceResourceTiming.transferSize','transferSize')}} プロパティは、取得したリソースのサイズをバイト単位で返します。このサイズには、レスポンスヘッダーフィールドに加え、レスポンス内容本体も含みます。

{{domxref('PerformanceResourceTiming.encodedBodySize','encodedBodySize')}} プロパティは、適用されたコンテンツエンコーディングが除去される**前**の、HTTP またはキャッシュから取得した内容本体のサイズをオクテット単位でを返します。{{domxref('PerformanceResourceTiming.decodedBodySize','decodedBodySize')}} は、適用されたコンテンツエンコーディングが除去された**後**の、HTTP またはキャッシュから取得したメッセージ本体のサイズをオクテット単位で返します。

## その他のプロパティ

{{domxref("PerformanceResourceTiming")}} インターフェイスは、[追加のリソース情報](/ja/docs/Web/API/PerformanceResourceTiming#追加のリソース情報)を提供します。プロパティの全リストについては、リファレンスドキュメントを参照してください。

## よくあるリソースタイミング指標

`PerformanceResourceTiming` 項目が提供する情報は、以下のような計算によく使用されます。

- TCP ハンドシェイク時間の測定 (`connectEnd` - `connectStart`)
- DNS ルックアップ時間の測定 (`domainLookupEnd` - `domainLookupStart`)
- リダイレクト時間の測定 (`redirectEnd` - `redirectStart`)
- リクエスト時間の測定 (`responseStart` - `requestStart`)
- TLS ネゴシエーション時間の測定 (`requestStart` - `secureConnectionStart`)
- フェッチに要する時間（リダイレクトなし）の測定 (`responseEnd` - `fetchStart`)
- サービスワーカーの処理時間の測定 (`fetchStart` - `workerStart`)
- コンテンツが圧縮されているかどうかの確認 (`decodedBodySize` が `encodedBodySize` ではない)
- ローカルキャッシュがヒットしたかどうかの確認 (`transferSize` が `0` である)
- 最新の高速プロトコルが使用されているかどうかの確認 (`nextHopProtocol` が HTTP/2 または HTTP/3)
- 正しいリソースがレンダリングをブロックしているかどうかの確認 (`renderBlockingStatus`)

{{domxref("PerformanceResourceTiming")}} のリファレンスページには、これらすべての指標を測定するためのサンプルコードが格納されています。 通常、これらの指標を測定するためのコードは、例えば以下のようなものです。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.responseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Request time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

## オリジン間のタイミング情報

{{Glossary("CORS")}} が有効な場合、サーバーのアクセスポリシーがこれらの値の共有を許可しない限り、タイミングプロパティの値の多くはゼロとして返されます。このため、リソースを指定されたサーバーは、制限付きのタイムスタンプ値を取得することが許可されたオリジンの値を指定した、HTTP の {{httpheader("Timing-Allow-Origin")}} レスポンスヘッダーを送信する必要があります。

ウェブページ自体のオリジン以外からリソースを読み込む際に、既定では 0 を返すプロパティとあしては、`redirectStart`、`redirectEnd`、`domainLookupStart`、`domainLookupEnd`、`connectStart`、`connectEnd`、`secureConnectionStart`、`requestStart`、`responseStart` があります。

例えば、`https://developer.mozilla.org` がリソースのタイミング情報を確認できるようにするには、オリジン間リソースが送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## リソースバッファーサイズの管理

ウェブサイトまたはアプリケーションで 250 以上のリソースを取得し、250 以上の {{domxref("PerformanceResourceTiming")}} 項目を記録したい場合は、リソースタイミングバッファーのサイズを大きくする必要があります。

ブラウザーのパフォーマンスリソースデータバッファーのサイズを設定するには、{{domxref("Performance.setResourceTimingBufferSize()")}} メソッドを使用し、ブラウザーのパフォーマンスリソースデータバッファーをクリアするには、{{domxref("Performance.clearResourceTimings()")}} メソッドを使用します。

ブラウザーのリソースタイミングバッファーが満杯になったことを通知してもらうには、 {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}} イベントを待ち受けしてください。

次の呼び出しでは、ブラウザーのパフォーマンスタイムラインに 500 件の `"resource"` パフォーマンス項目が追加されます。

```js
performance.setResourceTimingBufferSize(500);
```

詳しくは、[バッファーサイズの管理](/ja/docs/Web/API/Performance_API/Performance_data#managing_buffer_sizes)も参照してください。

## 関連情報

- {{domxref("PerformanceResourceTiming")}}
- {{httpheader("Timing-Allow-Origin")}}
- {{domxref("Performance.setResourceTimingBufferSize()")}}
- {{domxref("Performance.clearResourceTimings()")}}
