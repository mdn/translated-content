---
title: サーバー送信イベントの使用
slug: Web/API/Server-sent_events/Using_server-sent_events
tags:
  - 上級者
  - 通信
  - DOM
  - ガイド
  - SSE
  - Server Sent Events
  - サーバー送信イベント
  - messaging
translation_of: Web/API/Server-sent_events/Using_server-sent_events
---
{{DefaultAPISidebar("Server Sent Events")}}

[サーバー送信イベント](/ja/docs/Web/API/Server-sent_events) (Server-Sent Events) を使用するウェブアプリケーションの開発は簡単です。サーバー上でフロントエンドへイベントを流すために必要になるコードはわずかですが、クライアント側のコードは[ウェブソケット](/ja/docs/Web/API/WebSockets_API)で入ってくるイベントを扱う部分とほぼ同じ動作をします。これは単方向の接続ですので、クライアントからサーバーへイベントを送信することはできません。

## サーバからのイベントの受信

サーバー送信イベント API は {{domxref("EventSource")}} インターフェイスに含まれています。イベントを受け取るためにサーバへの接続を開始するには、新たな `EventSource` オブジェクトを作成し、イベントを生成するスクリプトの URI を指定します。例を挙げます。

```js
const evtSource = new EventSource("ssedemo.php");
```

イベントを生成するスクリプトが別のオリジンに存在する場合は、 新しい `EventSource` オブジェクトを作成し、 URI とオプション辞書の両方を指定する必要があります。例えば、クライアントスクリプトが `example.com` にある場合は次のようになります。

```js
const evtSource = new EventSource("//api.example.com/ssedemo.php", { withCredentials: true } );
```

イベントソースのインスタンスを起動したら、 {{domxref("EventSource.message_event", "message")}} イベントのハンドラーを取り付けて、サーバーからのメッセージを待ち受けすることができます。

```js
evtSource.onmessage = function(event) {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = "message: " + event.data;
  eventList.appendChild(newElement);
}
```

このコードは入力メッセージ（すなわち `event` フィールドを持たない、サーバーからの通知）を受信して、メッセージのテキストを文書の HTML にあるリストへ追加します。

`addEventListener()` を使用してイベントを待ち受けすることもできます。

```js
evtSource.addEventListener("ping", function(event) {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");
  const time = JSON.parse(event.data).time;
  newElement.textContent = "ping at " + time;
  eventList.appendChild(newElement);
});
```

前のコードと似ていますが、`event` フィールドに "ping" が設定されたメッセージがサーバーから送られたときに、自動的に呼び出されることが異なります。こちらは `data` フィールドの JSON を解釈して、情報を出力します。

> **Warning:** **HTTP/2 上で使用されていない**場合、 SSE は開くことができる接続の最大数に制限を受けます。この制限は*ブラウザー単位*で設定されており、非常に小さい数 (6) に設定されているため、複数のタブを開くと特に痛みを伴う場合があります。この問題は、 [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=275955) と [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=906896) で「修正予定なし」と示されています。この制限はブラウザー + ドメインごとに設定されており、`www.example1.com` への SSE 接続をすべてのタブで 6 つ、 `www.example2.com` への SSE 接続をさらに 6 つ開くことができることを意味します（[Stackoverflow](https://stackoverflow.com/a/5326159/1905229) によれば）。 HTTP/2 を使用する場合、同時に使用することができる *HTTP ストリーム*の最大数は、サーバーとクライアントの間で交渉が行われます（既定値は 100 です）。

## サーバからのイベントの送信

イベントを送信するサーバー側のスクリプトは、 MIME タイプ `text/event-stream` で応答する必要があります。個々の通知は、 2 つの改行で終わるテキストのブロックとして送信されます。イベントストリームの形式について、詳しくは[イベントストリーム形式](#イベントストリーム形式)をご覧ください。

この例で使用している {{Glossary("PHP")}} は次の通りです。

```php
date_default_timezone_set("America/New_York");
header("Cache-Control: no-store");
header("Content-Type: text/event-stream");

$counter = rand(1, 10);
while (true) {
  // "ping" イベントを毎秒送信

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // シンプルなメッセージをランダムな間隔で送信

  $counter--;

  if (!$counter) {
    echo 'data: This is a message at time ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  ob_end_flush();
  flush();

  // クライアントが接続を中止したら（ページを閉じたら）ループから抜ける

  if ( connection_aborted() ) break;

  sleep(1);
}
```

上記のコードは、イベント種別が "ping" のイベントを毎秒生成します。それぞれのイベントのデータは、 JSON オブジェクトで、イベントが生成された時刻を ISO 8601 形式のタイムスタンプで表します。またランダムな間隔で、単純なメッセージ（イベント種別なし）を送信します。
ループは接続状態にかかわらず実行し続けられますので、接続が閉じられたとき（例えばクライアントがページを閉じたとき）にループから脱出するためのチェックが含まれています。

> **Note:** この記事にあるコードを使用した完全な例が GitHub にあります。 [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/master/server-sent-events) を参照してください。

## エラー処理

問題が発生した場合（ネットワークのタイムアウトや[アクセス制御](/ja/docs/Web/HTTP/CORS)に関する問題など）は、エラーイベントが生成されます。これをプログラムで処理するには、 `onerror` コールバックを `EventSource` に実装してください。

```js
evtSource.onerror = function(err) {
  console.error("EventSource failed:", err);
};
```

## イベントストリームを閉じる

既定では、クライアントとサーバーの間の接続を閉じると、接続が再起動します。接続は `.close()` メソッドで終了します。

```js
evtSource.close();
```

## イベントストリームの形式

イベントストリームは単純なテキストデータのストリームで、 [UTF-8](/ja/docs/Glossary/UTF-8) でエンコードされていなければなりません。イベントストリームのメッセージは、 2 つの改行文字で区切られます。行の先頭の文字がコロンであった場合はコメントとみなされ、無視されます。

> **Note:** コメント行を使用して、接続がタイムアウトになることを防ぐことができます。サーバーは接続を維持するために、定期的にコメントを送信することがあります。

それぞれのメッセージは、そのメッセージのフィールドを列挙した 1 行以上のテキストで構成されています。各フィールドは、フィールド名、コロン、そのフィールドの値のテキストデータで表現されます。

### フィールド

受信した各メッセージには、以下のフィールドの組み合わせが、 1 行 1 つで現れます。

- `event`
  - : 記述されるイベントの種別を識別する文字列です。指定された場合、イベントはブラウザー内で、指定されたイベント名のイベントリスナーへ送られます。ウェブサイトのソースコードで名前付きイベントを待ち受けするには `addEventListener()` を使用してください。メッセージにイベント名が指定されなかった場合は、 `onmessage` ハンドラーが呼び出されます。
- `data`
  - : メッセージのデータフィールドです。 `EventSource` が `data:` で始まる、複数の連続した行を受け取ったときは、[それらを連結して](http://www.w3.org/TR/eventsource/#dispatchMessage)各項目の間に改行文字を挿入します。末尾の改行は取り除かれます。
- `id`
  - : [`EventSource`](/ja/docs/Server-sent_events/EventSource) オブジェクトの最後のイベント ID の値に設定するイベント ID です。
- `retry`
  - : 再接続時間です。サーバーへの接続が切れた場合、ブラウザーは指定した時間だけ待ってから再接続を試みます。これは整数値でなければならず、再接続時間をミリ秒単位で指定します。整数値以外が指定された場合は、このフィールドは無視されます。

他のフィールド名は、すべて無視されます。

> **Note:** 行にコロンが含まれない場合は行全体がフィールド名とし、値は空文字列として扱います。

### 例

#### データのみのメッセージ

以下の例では、3 つのメッセージが送信されています。最初のメッセージはコロン文字から始まっているため、コメントです。前述したように、コメントはメッセージが定期的に送信されない可能性がある場合のキープアライブとして利用できます。

2 番目のメッセージには data フィールドがあり、その値は "some text" です。 3 番目のメッセージは data フィールドで、値は "another message\nwith two lines" です。値に改行文字があることに注意してください。

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### 名前付きイベント

こちらの例では、名前付きイベントをいくつか送信しています。それぞれのイベントではイベント名が `event` フィールドで指定されており、また `data` フィールドではクライアントでの処理に必要なデータを含む、適切な JSON 文字列の値が指定されています。もちろん、 `data` フィールドには任意の文字列データを入れることができます。 JSON である必要はありません。

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
```

#### 組み合わせ

名前なしのメッセージや種類の付いたイベントだけを使用しなければならない訳ではありません。これらを単一のイベントストリーム内で混用することができます。

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Here's a system message of some kind that will get used
data: to accomplish some task.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

## ブラウザーの互換性

### `EventSource`

{{Compat("api.EventSource")}}
