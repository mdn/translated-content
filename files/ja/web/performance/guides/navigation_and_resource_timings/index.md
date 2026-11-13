---
title: ナビゲーションおよびリソースタイミング
slug: Web/Performance/Guides/Navigation_and_resource_timings
l10n:
  sourceCommit: 4a1d696e78d9aa0a3ca571cbc0aab9ba90258235
---

**ナビゲーションタイミング**は、ブラウザーによる文書ナビゲーションイベントを測定する指標です。**リソースタイミング**は、アプリケーションのリソースの読み込みに関する詳細なネットワークタイミングの測定値です。どちらも同じ読み取り専用のプロパティを提供しますが、ナビゲーションタイミングはメイン文書の時間を測定するのに対し、リソースタイミングはそのメイン文書内の呼び出されるすべての資産やリソース、およびリソースのリクエストされたリソースの時刻を提供します。

下記の一般的なパフォーマンス項目は非推奨です。パフォーマンス項目 API は、ナビゲーションやリソースの読み込みプロセスに沿った時刻を指定し、測定するために提供されます。非推奨ですが、ブラウザーのすべてで対応しています。

## パフォーマンスタイミング

リクエストされたページの読み込みパフォーマンスを測定する JavaScript API である[パフォーマンスタイミング API](/ja/docs/Web/API/PerformanceTiming) は非推奨ですが、すべてのブラウザーで対応しています。これは[パフォーマンスナビゲーションタイミング](/ja/docs/Web/API/PerformanceNavigationTiming) API に置き換えられています。

パフォーマンスタイミング API は、ページ読み込みプロセスの各ポイントにつ達したかを記述する読み取り専用の時刻をミリ秒 (ms) 単位で提供していました。下記画像に表示されているように、ナビゲーションプロセスは [`navigationStart`](/ja/docs/Web/API/PerformanceTiming/navigationStart), [`unloadEventStart`](/ja/docs/Web/API/PerformanceTiming/unloadEventStart), [`unloadEventEnd`](/ja/docs/Web/API/PerformanceTiming/unloadEventEnd), [`redirectStart`](/ja/docs/Web/API/PerformanceTiming/redirectStart), [`redirectEnd`](/ja/docs/Web/API/PerformanceTiming/redirectEnd), [`fetchStart`](/ja/docs/Web/API/PerformanceTiming/fetchStart), [`domainLookupStart`](/ja/docs/Web/API/PerformanceTiming/domainLookupStart), [`domainLookupEnd`](/ja/docs/Web/API/PerformanceTiming/domainLookupEnd), [`connectStart`](/ja/docs/Web/API/PerformanceTiming/connectStart), [`connectEnd`](/ja/docs/Web/API/PerformanceTiming/connectEnd), [`secureConnectionStart`](/ja/docs/Web/API/PerformanceTiming/secureConnectionStart), [`requestStart`](/ja/docs/Web/API/PerformanceTiming/requestStart), [`responseStart`](/ja/docs/Web/API/PerformanceTiming/responseStart), [`responseEnd`](/ja/docs/Web/API/PerformanceTiming/responseEnd), [`domLoading`](/ja/docs/Web/API/PerformanceTiming/domLoading), [`domInteractive`](/ja/docs/Web/API/PerformanceTiming/domInteractive), [`domContentLoadedEventStart`](/ja/docs/Web/API/PerformanceTiming/domContentLoadedEventStart), [`domContentLoadedEventEnd`](/ja/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd), [`domComplete`](/ja/docs/Web/API/PerformanceTiming/domComplete), [`loadEventStart`](/ja/docs/Web/API/PerformanceTiming/loadEventStart), [`loadEventEnd`](/ja/docs/Web/API/PerformanceTiming/loadEventEnd) から成ります。

![ナビゲーションタイミングイベント指標](screen_shot_2019-05-03_at_1.06.27_pm.png)

上記の指標と少しの計算で、[最初のバイトまでの時間](/ja/docs/Glossary/Time_to_first_byte)、ページ読み込み時間、 DNS 参照、安全な接続かどうかなど、多くの重要な指標を計算することができます。

すべての手順を完了するのにかかる時間を測定するのを支援するために、パフォーマンスタイミング API はナビゲーションの時刻の読み取り専用の測定値を提供します。アプリの時刻を表示し、キャプチャするには、次のように入力します。

```js
let time = window.performance.timing;
```

その結果を使用して、アプリのパフォーマンスを測定することができます。

![コンソールに window.performance.timing と入力すると、 PerformanceNavigationTiming インターフェイスのすべての時刻が表示されます。](navigatortiming.png)

順序は次の通りです。

<table>
  <thead>
    <tr>
      <th>パフォーマンスタイミング</th>
      <th>詳細</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{domxref("PerformanceTiming.navigationStart","navigationStart")}}
      </td>
      <td>
        アンロードのプロンプトが同じ閲覧コンテキスト内の前回の文書で終了したとき。前回の文書がない場合、この値は <code>PerformanceTiming.fetchStart</code> と同じになります。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.secureConnectionStart","secureConnectionStart")}}
      </td>
      <td>
        安全な接続のハンドシェイクを始めた時刻。そのような接続がリクエストされなかった場合、 <code>0</code> を返します。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.redirectStart","redirectStart")}}
      </td>
      <td>
        最初の HTTP リダイレクトが始まった時刻。リダイレクトがない場合、またはリダイレクトのオリジンが同じでない場合、返される値は <code>0</code> です。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.redirectEnd","redirectEnd")}}
      </td>
      <td>
        <p>
          最後の HTTP リダイレクトが完全に完了した時刻、つまり HTTP レスポンスの最後のバイトを受信した時刻です。リダイレクトがない場合、またはリダイレクトのオリジンが同じでない場合、返される値は <code>0</code> です。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.connectEnd","connectEnd")}}
      </td>
      <td>
        接続がネットワークで開かれた時刻。トランスポート層がエラーを報告し、接続確立が再度開始される場合は、最後の接続確立終了時刻が指定されます。持続的接続を使用している場合、値は <code>PerformanceTiming.fetchStart</code> と同じになります。接続は、安全な接続ハンドシェイク、または SOCKS 認証がすべて終了した時刻で開かれたものとみなされます。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.connectStart","connectStart")}}
      </td>
      <td>
        コネクションを開くためのリクエストがネットワークに送信された時刻。トランスポート層がエラーを報告し、接続確立が再度開始される場合は、最後の接続確立開始時刻が指定されます。持続的接続を使用している場合、値は <code>PerformanceTiming.fetchStart</code> と同じになります。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domainLookupEnd","domainLookupEnd")}}
      </td>
      <td>
        ドメイン検索が完了した時刻。持続的接続を使用している場合、または情報がキャッシュやローカルリソースに格納されている場合、値は <code>PerformanceTiming.fetchStart</code> と同じになります。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domainLookupStart","domainLookupStart")}}
      </td>
      <td>
        ドメイン検索を始めた時刻。持続的接続を使用している場合、または情報がキャッシュやローカルリソースに格納されている場合、値は <code>PerformanceTiming.fetchStart</code> と同じになります。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.fetchStart","fetchStart")}}
      </td>
      <td>
        ブラウザーが HTTP リクエストを使用して文書を取得する準備ができた時刻。
        この時刻は、アプリケーションキャッシュを調べる<em>前</em>です。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.requestStart","requestStart")}}
      </td>
      <td>
        ブラウザーが実際の文書を取得するリクエストをサーバーまたはキャッシュから送信した時刻。リクエストの開始後にトランスポートレイヤーが失敗し、接続が再開された場合、このプロパティには新しいリクエストに対応する時刻が設定されます。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.responseStart","responseStart")}}
      </td>
      <td>
        ブラウザーがレスポンスの最初のバイトを、サーバー、キャッシュ、ローカルリソースから受信した時刻。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.responseEnd","responseEnd")}}
      </td>
      <td>
        ブラウザーがレスポンスの最後のバイトを受信した時刻、または、サーバー、キャッシュ、またはローカルリソースから最初に発生した場合は接続が閉じられた時刻。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domLoading","domLoading")}}
      </td>
      <td>
        パーサーが作業を始めた時刻、つまり {{domxref('Document.readyState')}} が <code>'loading'</code> に変わり、対応する {{DOMxRef("Document.readystatechange_event", "readystatechange")}} イベントが発生した時刻。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.unloadEventStart","unloadEventStart")}}
      </td>
      <td>
        ウィンドウ内の前回の文書がアンロードを始めた時点を示す {{DOMxRef("Window.unload_event", "unload")}} イベントが発生した時刻。前回の文書がない場合、または前回の文書やリダイレクト先の文書が同じオリジンでない場合、返される値は <code>0</code> です。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.unloadEventEnd","unloadEventEnd")}}
      </td>
      <td>
        <code><a href="/ja/docs/Web/API/Window/unload_event">unload</a></code> イベントハンドラーが完了したとき。前回の文書がない場合、または前回の文書やリダイレクト先の文書が同じオリジンでない場合、返される値は <code>0</code> です。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domInteractive","domInteractive")}}
      </td>
      <td>
        パーサーがメイン文書での作業を完了し、 <a href="/ja/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> が <code>'interactive'</code> に変わり、対応する <code><a href="/ja/docs/Web/API/Document/readystatechange_event">readystatechange</a></code> イベントが発生した時刻。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domContentLoadedEventStart","domContentLoadedEventStart")}}
      </td>
      <td>
        パーサーが <code><a href="/ja/docs/Web/API/Document/DOMContentLoaded_event">DOMContentLoaded</a></code> イベントを送信する直前、つまり解釈直後に実行できるスクリプトがすべて実行された直後。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domContentLoadedEventEnd","domContentLoadedEventEnd")}}
      </td>
      <td>
        順番があろうとなかろうと、できるだけ早く実行する必要のあるスクリプトがすべて実行された直後。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domComplete","domComplete")}}
      </td>
      <td>
        パーサーがメイン文書での作業を完了した時点、すなわち <a href="/ja/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> が <code>'complete'</code> に変わり、対応する <code><a href="/ja/docs/Web/API/Document/readystatechange_event">readystatechange</a></code> イベントが発生した時点。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.loadEventStart","loadEventStart")}}
      </td>
      <td>
        <code><a href="/ja/docs/Web/API/Window/load_event">load</a></code>イベントが現在の文書に対して送信された時刻。このイベントがまだ送信されていない場合、<code>0</code>を返します。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.loadEventEnd","loadEventEnd")}}
      </td>
      <td>
        <code><a href="/ja/docs/Web/API/Window/load_event">load</a></code>　イベントハンドラーが終了した時刻、すなわち load イベントが完全に完了した時刻です。このイベントがまだ送信されていないか、まだ完了していない場合、<code>0</code> を返します。
      </td>
    </tr>
  </tbody>
</table>

### タイミングの計算

これらの値を使用して、関心のある固有のタイミングを測定することができます。

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
const tcp = time.connectEnd - time.connectStart;
const tls = time.requestStart - time.secureConnectionStart;
```

### 最初のバイトまでの時間

[最初のバイトまでの時間](/ja/docs/Glossary/Time_to_first_byte) は、 `navigationStart` （ナビゲーションの開始）から `responseStart` （レスポンスデータの最初のバイトを受信）までの時間であり、 `performanceTiming` API で利用可能です。

```js
const ttfb = time.responseStart - time.navigationStart;
```

### ページ読み込み時間

[ページ読み込み時間](/ja/docs/Glossary/Page_load_time) は `navigationStart` から現在の文書の load イベントが始まるまでの時間です。これらはパフォーマンスタイミング API でのみ利用可能です。

```js
let pageloadtime = time.loadEventStart - time.navigationStart;
```

### DNS 参照時間

DNS 参照時間は、 [`domainLookupStart`](/ja/docs/Web/API/PerformanceResourceTiming/domainLookupStart) と [`domainLookupEnd`](/ja/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) の間の時間です。これらは `performanceTiming` と `performanceNavigationTiming` API の両方で利用可能です。

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
```

### TCP

[TCP](/ja/docs/Glossary/TCP) のハンドシェイクにかかる時間は、接続を始めてから終わるまでの時間です。

```js
const tcp = time.connectEnd - time.connectStart;
```

### TLS ネゴシエーション

[`secureConnectionStart`](/ja/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) は利用できない場合は `undefined`、 [HTTPS](/ja/docs/Glossary/HTTPS) を用いない場合は `0`、利用可能で使用した場合はタイムスタンプになります。言い換えれば、安全な接続を使用した場合、 `secureConnectionStart` は[真値](/ja/docs/Glossary/Truthy)になり、 `secureConnectionStart` から `requestStart` までの時間は 0 より大きくなります。

```js
const tls = time.requestStart - time.secureConnectionStart;
```

## パフォーマンス項目 API

上記の一般的なパフォーマンスタイミングは非推奨ですが、完全に対応しています。[パフォーマンス項目 API](/ja/docs/Web/API/PerformanceEntry) が登場し、ナビゲーションやリソースの読み込みプロセスに沿って時刻を指定したり計測したりすることができるようになりました。マークを作成することもできます。

```js
performance.getEntriesByType("navigation").forEach((navigation) => {
  console.dir(navigation);
});

performance.getEntriesByType("resource").forEach((resource) => {
  console.dir(resource);
});

performance.getEntriesByType("mark").forEach((mark) => {
  console.dir(mark);
});

performance.getEntriesByType("measure").forEach((measure) => {
  console.dir(measure);
});

performance.getEntriesByType("paint").forEach((paint) => {
  console.dir(paint);
});

performance.getEntriesByType("frame").forEach((frame) => {
  console.dir(frame);
});
```

対応しているブラウザーでは、 `performance.getEntriesByType('paint')` を使用して、 `first-paint` と `first-contentful-paint` の測定値を問い合わせることができます。 `performance.getEntriesByType('navigation')` と `performance.getEntriesByType('resource')` を使用して、それぞれナビゲーションとリソースの時刻を問い合わせます。

## ナビゲーションタイミング

ユーザーがウェブサイトやアプリケーションをリクエストすると、[ブラウザーに表示するために](/ja/docs/Web/Performance/Guides/How_browsers_work)、ユーザーエージェントは {{glossary('DNS')}} 参照、 {{glossary('TCP handshake', 'TCP ハンドシェイク')}}、 TLS ネゴシエーションを含む一連の手順を経て、ユーザーエージェントが実際のリクエストを行い、サーバーがリクエストされた資産を返します。その後、ブラウザーは受け取ったコンテンツを解釈し、DOM、CSSOM、アクセシビリティ、レンダリングツリーを構築し、最終的にページをレンダリングします。ユーザーエージェントが文書の解釈をやめると、ユーザーエージェントは文書の準備状態を _interactive_ に設定します。解釈する必要のある遅延スクリプトがある場合は、それを実行し、[DOMContentLoaded](/ja/docs/Web/API/Document/DOMContentLoaded_event) を発行します。これで文書は読み込み後のタスクを処理できるようになり、この時点で文書は完全に読み込まれたとみなされます。

```js
const navigationTimings = performance.getEntriesByType("navigation");
```

`performance.getEntriesByType('navigation')` は、 navigation 型の [PerformanceEntry](/ja/docs/Web/API/PerformanceEntry) オブジェクトの配列を返します。

![performance.getEntriesByType('navigation'); がこの文書のコンソールに入力されたときの結果。](perfgentrybytypenavigation.png)

このようなタイミングから、多くのことを得ることができます。上の画像では、 _name_ プロパティを通して、時刻を計測しているファイルがこの文書化であることがわかります。 この説明の残りの部分では、以下の変数を使用します。

```js
const timing = performance.getEntriesByType("navigation")[0];
```

### プロトコル

次の問い合わせを使用することで、プロトコルをチェックすることができます。

```js
const protocol = timing.nextHopProtocol;
```

リソースを読み取るために使用したネットワークプロトコルを返します。この場合は `http/2` のために `h2` を返します。

### 圧縮

圧縮率を取得するには、 transferSize を decodedBodySize で割り、それを 100% から引きます。 74% 以上が節約されたことが分かります。

```js
const compressionSavings = 1 - timing.transferSize / timing.decodedBodySize;
```

次のもので計算できます。

```js
const compressionSavings = 1 - timing.encodedBodySize / timing.decodedBodySize;
```

ただし、 `transferSize` にはオーバーヘッドのバイトが含まれます。

比較のためにネットワークタブを見てみると、非圧縮で 87.24KB のサイズのファイルを 22.04KB で転送しています。

![ネットワークタブを介して転送されたバイトとサイズの表示](bytesdownloaded.png)

これらの数値で計算すると、`1 - (22.04 / 87.24) = 0.747` という同じ結果が取得されます。ナビゲーションタイミングは、プログラムで転送のサイズと帯域幅の節約を調べる方法を提供します。

これはこの単一の文書のサイズです。つまり、このリソースだけのサイズであり、すべてのリソースを合わせたサイズではないことに注意してください。しかし、所要時間、読み込むイベント、DOM 関連の時刻は、この単一の資産ではなく、ナビゲーション全体に関係しています。クライアント側のウェブアプリケーションは、転送サイズが 10000 以下、デコードする本体サイズが 30000 以下では、これよりも高速に見えるかもしれませんが、JavaScript や CSS、メディア資産が肥大化していないことを意味しているわけではありません。圧縮率を調べることは重要ですが、 DOMContentLoaded イベントが終わってから DOM が完了するまでの時間や期間も確実に調べてください。メインスレッドで JavaScript を長時間実行すると、ユーザーインターフェイスが応答しなくなる可能性があるからです。

### リクエスト時間

APIは、あなたが望むかもしれないすべての測定を提供するわけではありません。例えば、リクエストにかかった時間は？答えを得るために、ある測定値を使用することができます。

レスポンスタイムを測定するには、レスポンス開始時刻からリクエスト開始時刻を引きます。リクエスト開始時刻は、ユーザーエージェントがサーバー、関連するアプリケーションキャッシュ、またはローカルリソースからリソースのリクエストを始める直前の時刻です。レスポンス開始時刻は、ユーザーエージェントの HTTP パーサーが、関連するアプリケーションキャッシュから、あるいはローカルリソースから、あるいはサーバーから、レスポンスの最初のバイトを受信した直後の時刻です。

```js
const request = timing.responseStart - timing.requestStart;
```

### load イベントの所要時間

現在の文書の load イベントが発生する直前から、現在の文書の load イベントが完全に終了した時刻までのタイムスタンプを引くことで、 load イベントの所要時間を測定することができます。

```js
const load = timing.loadEventEnd - timing.loadEventStart;
```

### DOMContentLoaded イベント

DOMContentLoaded イベントの所要時間は、ユーザーエージェントが DOMContentLoaded イベントを発行する直前の時刻値から、イベントが完全に終了した直後の時刻値を引くことによって測定されます。これを 50ms またはそれ以上に保つことで、確実にレスポンスの良いユーザーインターフェイスを保証することに役立ちます。

```js
const DOMContentLoaded =
  timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
```

### 所要時間

所要時間があります。所要時間は [PerformanceNavigationTiming.loadEventEnd](/ja/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) プロパティと [PerformanceEntry.startTime](/ja/docs/Web/API/PerformanceEntry/startTime) プロパティの差です。

PerformanceNavigationTiming インターフェイスは、`navigate`、`reload`、`back_forward`、`prerender` を返すことで、計測しているナビゲーションの種類に関する情報も提供します。

## リソースタイミング

ナビゲーションタイミングはメインページ（一般に、他のすべての資産がリクエストされた HTML ファイル）のパフォーマンスを測定するのに対し、リソースのタイミングは個々のリソース（メインページから呼び出される資産、およびそれらのリソースがリクエストする資産）のタイミングを測定します。測定の多くは似ています。 DNS 参照、 TCP ハンドシェイク、安全な接続の開始はドメインごとに 1 回ずつ行われます。

![リソースの時刻の図](resourcetiming-timestamps.jpg)

主な用途は、それぞれのリソースを見ていくことです。

## 関連情報

- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}},
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformancePaintTiming")}}
