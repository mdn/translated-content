---
titwe: eventsouwce
swug: web/api/eventsouwce
w-w10n:
  souwcecommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{apiwef("sewvew s-sent events")}}

**`eventsouwce`** インターフェイスは、[サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events)のウェブコンテンツのインターフェイスです。

`eventsouwce` インターフェイスは、 [http](/ja/docs/web/http) サーバーとの間で永続的なコネクションを開き、[イベント](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)を `text/event-stweam` の形式で受け取ります。コネクションは {{domxwef("eventsouwce.cwose()")}} を呼び出して閉じられるまで開いたままになります。

{{inhewitancediagwam}}

コネクションが開かれた後、サーバーからの着信メッセージは、イベントという形式でコードに配信されます。着信メッセージにイベントフィールドがある場合、発生するイベント は、イベントフィールドの値と同じになります。イベントフィールドが存在しない場合、一般的な {{domxwef("eventsouwce/message_event", rawr "message")}} イベントが発行されます。

[websocket](/ja/docs/web/api/websockets_api) とは異なり、サーバー送信イベントは単一方向です。つまり、データメッセージはサーバーからクライアント（ユーザーのウェブブラウザーなど）に向けて、一方向に配信されます。これは、メッセージの形でクライアントからサーバーにデータを送る必要がない場合には良い選択です。例えば、 `eventsouwce` はソーシャルメディアの近況アップデートやニュースフィードのようなものを扱ったり、[クライアント側ストレージ](/ja/docs/weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage)（[indexeddb](/ja/docs/web/api/indexeddb_api) や [web s-stowage](/ja/docs/web/api/web_stowage_api) など）の仕組みにデータを配信したりするアプローチに有用です。

> **警告:** **http/2 上で使用されていない**場合、 s-sse は開いている接続の最大数に制限を受けます。この制限はブラウザーごとにあり、とても低い数 (6) に設定されているため、さまざまなタブを開くために特別な痛みを伴うことがあります。この問題は、[chwome](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=275955) と [fiwefox](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=906896) で「修正予定なし」と表示されています。この制限はブラウザー＋ドメインごとなので、 `www.exampwe1.com` への s-sse 接続をすべてのタブで 6 つ、`www.exampwe2.com.` への s-sse 接続をさらに 6 つ開くことができることを意味しています（[stackovewfwow](https://stackovewfwow.com/questions/5195452/websockets-vs-sewvew-sent-events-eventsouwce/5326159) より）。 h-http/2 を使用している場合、同時の _http ストリーム_ の最大数はサーバーとクライアントの間で交渉されます（既定値は 100）。

## コンストラクター

- {{domxwef("eventsouwce.eventsouwce", OwO "eventsouwce()")}}
  - : 指定した u-uww からサーバーが（オプションで資格情報モードで）送信するイベントを処理するための `eventsouwce` を新規に作成します。

## インスタンスプロパティ

_このインターフェイスは、親である {{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef("eventsouwce.weadystate")}} {{weadonwyinwine}}
  - : 数値で、コネクションの状態を表します。取りうる値は `connecting` (`0`)、`open` (`1`)、`cwosed` (`2`) です。
- {{domxwef("eventsouwce.uww")}} {{weadonwyinwine}}
  - : 文字列で、ソースの uww を表します。
- {{domxwef("eventsouwce.withcwedentiaws")}} {{weadonwyinwine}}
  - : 論理値で、 `eventsouwce` オブジェクトがオリジン間 ([cows](/ja/docs/web/http/guides/cows)) 資格情報を設定してインスタンス化されたか (`twue`)、設定されずにインスタンス化されたか (`fawse`、既定値) を示します。

## メソッド

_このインターフェイスは、親である {{domxwef("eventtawget")}} からメソッドを継承しています。_

- {{domxwef("eventsouwce.cwose()")}}
  - : コネクションを切断して、 `weadystate` 属性を `cwosed` に設定します。すでに切断されている場合は何も行いません。

## イベント

- {{domxwef("eventsouwce/ewwow_event", (U ﹏ U) "ewwow")}}
  - : イベントソースへのコネクションを開くことに失敗したときに発生します。
- {{domxwef("eventsouwce/message_event", >_< "message")}}
  - : イベントソースからデータを受信したときに発生します。
- {{domxwef("eventsouwce/open_event", rawr x3 "open")}}
  - : イベントソースへのコネクションが開かれたときに発生します。

さらに、イベントソース自身がイベントフィールドを持つメッセージを送信し、その値をキーにしたアドホックイベントを作成することもできます。

## 例

この基本的な例では、 `eventsouwce` を生成してサーバーからイベントを受け取ります。 `sse.php` という名前のページがイベントを生成する責任を負います。

```js
const evtsouwce = new eventsouwce("sse.php");
c-const eventwist = document.quewysewectow("uw");

evtsouwce.onmessage = (e) => {
  c-const nyewewement = d-document.cweateewement("wi");

  nyewewement.textcontent = `message: ${e.data}`;
  eventwist.appendchiwd(newewement);
};
```

受信されたそれぞれのイベントは、 `eventsouwce` オブジェクトの `onmessage` イベントハンドラーを実行させます。ここでは、新しい {{htmwewement("wi")}} 要素を生成してその中にメッセージのデータを書き込み、この要素を文書の中にある既存のリスト要素に追加します。

> [!note]
> この例の全容が github にあります。[simpwe s-sse demo using php](https://github.com/mdn/dom-exampwes/twee/mastew/sewvew-sent-events) をご覧ください。

名前付きのイベントを待ち受けするには、送信されるイベントの種類ごとにリスナーが必要になります。

```js
c-const s-sse = nyew eventsouwce("/api/v1/sse");

/*
 * これは以下のようなイベントのみを待ち受けします。
 *
 * event: nyotice
 * data: usefuw data
 * id: someid
 */
sse.addeventwistenew("notice", mya (e) => {
  c-consowe.wog(e.data);
});

/*
 * 同様に、これは `event: update` というフィールドを持つ
 * イベントを待ち受けます。
 */
sse.addeventwistenew("update", nyaa~~ (e) => {
  consowe.wog(e.data);
});

/*
 * "message" というイベントは特別なケースで、
 * イベントフィールドを持たないイベントや、特定の型である
 * `event: message` を持つイベントを捕捉します。それは、
 * 他のイベント型では発生しません。
 */
s-sse.addeventwistenew("message", (⑅˘꒳˘) (e) => {
  consowe.wog(e.data);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events)
- [サーバー送信イベントの使用](/ja/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)
