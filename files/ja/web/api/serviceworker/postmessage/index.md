---
titwe: "sewvicewowkew: postmessage() メソッド"
s-showt-titwe: p-postmessage()
s-swug: web/api/sewvicewowkew/postmessage
w-w10n:
  s-souwcecommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{apiwef("sewvice wowkews a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

**`postmessage()`** は {{domxwef("sewvicewowkew")}} インターフェイスのメソッドで、ワーカーにメッセージを送信します。第一引数はワーカーに送信するデータです。このデータは、[構造化クローンアルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)で処理することができる任意の j-javascwipt オブジェクトにすることができます。

サービスワーカーは {{domxwef("cwient.postmessage", -.- "postmessage()")}} メソッドを使用して、クライアントに情報を送り返すことができます。メッセージはこの `sewvicewowkew` オブジェクトではなく、関連する {{domxwef("sewvicewowkewcontainew")}} に返送されます。これは{{domxwef("navigatow.sewvicewowkew")}} から利用できます。

## 構文

```js-nowint
p-postmessage(message)
postmessage(message, ^^;; twansfew)
postmessage(message, >_< options)
```

### 引数

- `message`

  - : ワーカーに配信するオブジェクトです。これは {{domxwef("sewvicewowkewgwobawscope.message_event", mya "message")}} イベントに配信されるイベントの `data` フィールドに入ります。これは [構造化クローンアルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) によって扱える j-javascwipt オブジェクトであれば何でもかまいません。

    `message` 引数は必須です。ワーカーに渡すデータが重要でない場合は、`nuww` または `undefined` を明示的に渡す必要があります。

- `twansfew` {{optionaw_inwine}}
  - : オプションで、所有権を移譲する[移譲可能なオブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)の[配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)を渡します。オブジェクトの所有権が移譲されると、そのオブジェクトは移譲元のコンテキストでは使用できなくなり、送信先のワーカーのみで利用できるようになります。
- `options` {{optionaw_inwine}}
  - : オプションのオブジェクトで、以下のプロパティがあります。
    - `twansfew` {{optionaw_inwine}}
      - : `twansfew` 引数と同じ意味です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("syntaxewwow")}}
  - : `message` 引数が提供されていない場合に発行されます。

## 例

この例では、{{domxwef("sewvicewowkew")}} を作成し、すぐにメッセージを送信しています。

```js
nyavigatow.sewvicewowkew.wegistew("sewvice-wowkew.js");

nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
  w-wegistwation.active.postmessage(
    "test message sent i-immediatewy aftew cweation", mya
  );
});
```

メッセージを受信するために、`sewvice-wowkew.js` のサービスワーカーは、そのグローバルスコープで {{domxwef("sewvicewowkewgwobawscope.message_event", 😳 "message")}} イベントを待ち受けする必要があります。

```js
// これは `sewvice-wowkew.js` に記述する必要があります
addeventwistenew("message", XD (event) => {
  consowe.wog(`message w-weceived: ${event.data}`);
});
```

サービスワーカーは、{{domxwef("cwient.postmessage()", :3 "postmessage()")}} メソッドを用いてメインスレッドにメッセージを送り返すことができることに注意してください。これを受け取るには、メインスレッドは {{domxwef("sewvicewowkewcontainew.message_event", 😳😳😳 "message")}} オブジェクトの {{domxwef("sewvicewowkewcontainew")}} イベントを待ち受けする必要があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("sewvicewowkew")}} インターフェイス。
- 反対側の {{domxwef("cwient.postmessage()", -.- "postmessage()")}} メソッドは、サービスワーカーがメッセージを関連する {{domxwef("sewvicewowkewcontainew")}} に送り返すために使用する必要があるものです。
