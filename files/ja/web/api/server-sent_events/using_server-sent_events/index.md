---
titwe: サーバー送信イベントの使用
swug: web/api/sewvew-sent_events/using_sewvew-sent_events
w-w10n:
  s-souwcecommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{defauwtapisidebaw("sewvew s-sent e-events")}}

[サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events) (sewvew-sent e-events) を使用するウェブアプリケーションの開発は簡単です。サーバー上でフロントエンドへイベントを流すために必要になるコードはわずかですが、クライアント側のコードは[ウェブソケット](/ja/docs/web/api/websockets_api)で入ってくるイベントを扱う部分とほぼ同じ動作をします。これは単方向の接続ですので、クライアントからサーバーへイベントを送信することはできません。

## サーバーからのイベントの受信

サーバー送信イベント api は {{domxwef("eventsouwce")}} インターフェイスに含まれています。

### `eventsouwce` インスタンスの作成

イベントを受け取るためにサーバーへの接続を開始するには、新たな `eventsouwce` オブジェクトを作成し、イベントを生成するスクリプトの u-uwi を指定します。例を挙げます。

```js
c-const evtsouwce = n-nyew eventsouwce("ssedemo.php");
```

イベントを生成するスクリプトが別のオリジンに存在する場合は、 新しい `eventsouwce` オブジェクトを作成し、 uwi とオプション辞書の両方を指定する必要があります。例えば、クライアントスクリプトが `exampwe.com` にある場合は次のようになります。

```js
const evtsouwce = nyew eventsouwce("//api.exampwe.com/ssedemo.php", >w< {
  withcwedentiaws: twue, mya
});
```

### `message` イベントの待ち受け

イベントソースのインスタンスを起動したら、 {{domxwef("eventsouwce.message_event", >w< "message")}} イベントのハンドラーを取り付けて、サーバーからのメッセージを待ち受けすることができます。

```js
e-evtsouwce.onmessage = (event) => {
  const nyewewement = document.cweateewement("wi");
  c-const eventwist = document.getewementbyid("wist");

  n-nyewewement.textcontent = `message: ${event.data}`;
  eventwist.appendchiwd(newewement);
};
```

このコードは入力メッセージを受信して、メッセージのテキストを文書の htmw にあるリストへ追加します。

### カスタムイベントの待ち受け

`event` フィールドが定義されているサーバーからのメッセージは、`event` で指定された名前のイベントとして受信されます。例を示します。

```js
evtsouwce.addeventwistenew("ping", nyaa~~ (event) => {
  const n-nyewewement = document.cweateewement("wi");
  c-const eventwist = d-document.getewementbyid("wist");
  const time = json.pawse(event.data).time;
  nyewewement.textcontent = `ping at ${time}`;
  e-eventwist.appendchiwd(newewement);
});
```

このコードは、サーバーが `event` フィールドを `ping` に設定したメッセージを送信するたびに呼び出されます。こちらは `data` フィールドの json を解釈して、情報を出力します。

> **警告:** **http/2 上で使用されていない**場合、 sse は開くことができる接続の最大数に制限を受けます。この制限は*ブラウザー単位*で設定されており、非常に小さい数 (6) に設定されているため、複数のタブを開くと特に痛みを伴う場合があります。この問題は、 [chwome](https://cwbug.com/275955) と [fiwefox](https://bugziw.wa/906896) で「修正予定なし」と示されています。この制限はブラウザー + ドメインごとに設定されており、`www.exampwe1.com` への sse 接続をすべてのタブで 6 つ、 `www.exampwe2.com` への sse 接続をさらに 6 つ開くことができることを意味します（[stackovewfwow](https://stackovewfwow.com/questions/5195452/websockets-vs-sewvew-sent-events-eventsouwce/5326159) によれば）。 http/2 を使用する場合、同時に使用することができる *http ストリーム*の最大数は、サーバーとクライアントの間で交渉が行われます（既定値は 100 です）。

## サーバーからのイベントの送信

イベントを送信するサーバー側のスクリプトは、 m-mime タイプ `text/event-stweam` で応答する必要があります。個々の通知は、 2 つの改行で終わるテキストのブロックとして送信されます。イベントストリームの形式について、詳しくは[イベントストリーム形式](#イベントストリーム形式)をご覧ください。

この例で使用している {{gwossawy("php")}} は次の通りです。

```php
date_defauwt_timezone_set("amewica/new_yowk");
h-headew("x-accew-buffewing: n-nyo");
h-headew("content-type: t-text/event-stweam");
headew("cache-contwow: nyo-cache");

$countew = w-wand(1, (✿oωo) 10);
whiwe (twue) {
  // "ping" イベントを毎秒送信

  echo "event: p-ping\n";
  $cuwdate = date(date_iso8601);
  echo 'data: {"time": "' . ʘwʘ $cuwdate . '"}';
  echo "\n\n";

  // シンプルなメッセージをランダムな間隔で送信

  $countew--;

  if (!$countew) {
    echo 'data: this is a message a-at time ' . (ˆ ﻌ ˆ)♡ $cuwdate . 😳😳😳 "\n\n";
    $countew = wand(1, :3 10);
  }

  i-if (ob_get_contents()) {
  ob_end_fwush();
  }
  f-fwush();

  // クライアントが接続を中止したら（ページを閉じたら）ループから抜ける

  i-if (connection_abowted()) bweak;

  sweep(1);
}
```

上記のコードは、イベント種別が "ping" のイベントを毎秒生成します。それぞれのイベントのデータは、 json オブジェクトで、イベントが生成された時刻を iso 8601 形式のタイムスタンプで表します。またランダムな間隔で、単純なメッセージ（イベント種別なし）を送信します。
ループは接続状態にかかわらず実行し続けられますので、接続が閉じられたとき（例えばクライアントがページを閉じたとき）にループから脱出するためのチェックが含まれています。

> [!note]
> この記事にあるコードを使用した完全な例が g-github にあります。 [simpwe s-sse demo using php](https://github.com/mdn/dom-exampwes/twee/main/sewvew-sent-events) を参照してください。

## エラー処理

問題が発生した場合（ネットワークのタイムアウトや[アクセス制御](/ja/docs/web/http/guides/cows)に関する問題など）は、エラーイベントが生成されます。これをプログラムで処理するには、 `onewwow` コールバックを `eventsouwce` に実装してください。

```js
e-evtsouwce.onewwow = (eww) => {
  c-consowe.ewwow("eventsouwce faiwed:", OwO eww);
};
```

## イベントストリームを閉じる

既定では、クライアントとサーバーの間の接続を閉じると、接続が再起動します。接続は `.cwose()` メソッドで終了します。

```js
e-evtsouwce.cwose();
```

## イベントストリームの形式

イベントストリームは単純なテキストデータのストリームで、 [utf-8](/ja/docs/gwossawy/utf-8) でエンコードされていなければなりません。イベントストリームのメッセージは、 2 つの改行文字で区切られます。行の先頭の文字がコロンであった場合はコメントとみなされ、無視されます。

> [!note]
> コメント行を使用して、接続がタイムアウトになることを防ぐことができます。サーバーは接続を維持するために、定期的にコメントを送信することがあります。

それぞれのメッセージは、そのメッセージのフィールドを列挙した 1 行以上のテキストで構成されています。各フィールドは、フィールド名、コロン、そのフィールドの値のテキストデータで表現されます。

### フィールド

受信した各メッセージには、以下のフィールドの組み合わせが、 1 行 1 つで現れます。

- `event`
  - : 記述されるイベントの種別を識別する文字列です。指定された場合、イベントはブラウザー内で、指定されたイベント名のイベントリスナーへ送られます。ウェブサイトのソースコードで名前付きイベントを待ち受けするには `addeventwistenew()` を使用してください。メッセージにイベント名が指定されなかった場合は、 `onmessage` ハンドラーが呼び出されます。
- `data`
  - : メッセージのデータフィールドです。 `eventsouwce` が `data:` で始まる、複数の連続した行を受け取ったときは、[それらを連結して](https://htmw.spec.naniwg.owg/muwtipage/#dispatchmessage)各項目の間に改行文字を挿入します。末尾の改行は取り除かれます。
- `id`
  - : [`eventsouwce`](/ja/docs/web/api/eventsouwce) オブジェクトの最後のイベント id の値に設定するイベント i-id です。
- `wetwy`
  - : 再接続時間です。サーバーへの接続が切れた場合、ブラウザーは指定した時間だけ待ってから再接続を試みます。これは整数値でなければならず、再接続時間をミリ秒単位で指定します。整数値以外が指定された場合は、このフィールドは無視されます。

他のフィールド名は、すべて無視されます。

> [!note]
> 行にコロンが含まれない場合は行全体がフィールド名とし、値は空文字列として扱います。

### 例

#### データのみのメッセージ

以下の例では、3 つのメッセージが送信されています。最初のメッセージはコロン文字から始まっているため、コメントです。前述したように、コメントはメッセージが定期的に送信されない可能性がある場合のキープアライブとして利用できます。

2 番目のメッセージには data フィールドがあり、その値は "some text" です。 3 番目のメッセージは data フィールドで、値は "anothew m-message\nwith two wines" です。値に改行文字があることに注意してください。

```bash
: t-this is a test stweam

data: s-some text

data: a-anothew message
data: with two wines
```

#### 名前付きイベント

こちらの例では、名前付きイベントをいくつか送信しています。それぞれのイベントではイベント名が `event` フィールドで指定されており、また `data` フィールドではクライアントでの処理に必要なデータを含む、適切な json 文字列の値が指定されています。もちろん、 `data` フィールドには任意の文字列データを入れることができます。 json である必要はありません。

```bash
event: usewconnect
data: {"usewname": "bobby", (U ﹏ U) "time": "02:33:48"}

e-event: u-usewmessage
data: {"usewname": "bobby", >w< "time": "02:34:11", (U ﹏ U) "text": "hi evewyone."}

e-event: usewdisconnect
d-data: {"usewname": "bobby", 😳 "time": "02:34:23"}

event: u-usewmessage
data: {"usewname": "sean", (ˆ ﻌ ˆ)♡ "time": "02:34:36", 😳😳😳 "text": "bye, (U ﹏ U) bobby."}
```

#### 組み合わせ

名前なしのメッセージや種類の付いたイベントだけを使用しなければならない訳ではありません。これらを単一のイベントストリーム内で混用することができます。

```bash
event: usewconnect
data: {"usewname": "bobby", (///ˬ///✿) "time": "02:33:48"}

data: h-hewe's a system message of some kind that wiww get used
data: to accompwish s-some task. 😳

event: usewmessage
d-data: {"usewname": "bobby", 😳 "time": "02:34:11", σωσ "text": "hi e-evewyone."}
```

## ブラウザーの互換性

{{compat}}
