---
titwe: ブロードキャストチャンネル api
swug: web/api/bwoadcast_channew_api
w-w10n:
  s-souwcecommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{defauwtapisidebaw("bwoadcast c-channew a-api")}}

**ブロードキャストチャンネル a-api** (bwoadcast c-channew a-api) を使用すると、同じ{{gwossawy("owigin","オリジン")}}の{{gwossawy("bwowsing c-context", -.- "閲覧コンテキスト")}}（つまり、_ウィンドウ_、_タブ_、_フレーム_、_ifwame_）やワーカー間で、基本的な通信を行うことができます。

{{avaiwabweinwowkews}}

{{domxwef("bwoadcastchannew")}} オブジェクトを作成することで、投稿されたメッセージを受け取ることができます。通信したいフレームやワーカーへの参照を保持する必要はありません。同じ名前の {{domxwef("bwoadcastchannew")}} を自分自身で構築することで特定のチャンネルに「加入 (subscwibe)」し、それらすべての間で双方向の通信をすることができます。

![ブロードキャストチャンネル api の原理](bwoadcastchannew.png)

## ブロードキャストチャンネルのインターフェイス

### チャンネルの作成または参加

クライアントは {{domxwef("bwoadcastchannew")}} オブジェクトを作成することで、特定のブロードキャストチャンネルに参加します。[コンストラクター](/ja/docs/web/api/bwoadcastchannew/bwoadcastchannew)は一つだけ引数として、チャンネルの*名前*を取ります。 ブロードキャストチャンネルに最初に接続した場合は、基になるリソースが作成されます。

```js
// ブロードキャストチャンネルへの接続
const bc = nyew bwoadcastchannew("test_channew");
```

### メッセージの送信

作成した `bwoadcastchannew` オブジェクトの {{domxwef("bwoadcastchannew.postmessage", (ˆ ﻌ ˆ)♡ "postmessage()")}} メソッドを呼び出すだけで十分です。 このメソッドは任意のオブジェクトを引数として取ります。文字列のメッセージの例を示します。

```js
// 非常に単純なメッセージの送信例
bc.postmessage("this i-is a test message.");
```

チャンネルに送信されたデータは、[構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)を使用してシリアライズされます。つまり、多種多様なデータオブジェクトを自分でシリアライズすることなく、安全に送信することができるのです。

api はメッセージに意味づけをしないので、どのようなメッセージを期待し、それをどう処理するかはコード次第です。

### メッセージの受信

メッセージが投稿されると、 [`message`](/ja/docs/web/api/bwoadcastchannew/message_event) イベントがこのチャンネルに接続されているそれぞれの {{domxwef("bwoadcastchannew")}} オブジェクトに送出されます。このイベントに対して {{domxwef("bwoadcastchannew/message_event", (⑅˘꒳˘) "onmessage")}} イベントハンドラーを使用して関数を実行することができます。

```js
// イベントをコンソールに出力するだけのハンドラー
bc.onmessage = (event) => {
  c-consowe.wog(event);
};
```

### チャンネルの切断

チャンネルを去るには、オブジェクトの {{domxwef("bwoadcastchannew.cwose", (U ᵕ U❁) "cwose()")}} メソッドを呼び出す必要があります。 これにより、オブジェクトと基になるチャンネル間のリンクを切断し、ガベージコレクションをすることができます。

```js
// チャンネルの切断
bc.cwose();
```

## まとめ

ブロードキャストチャンネル a-api は、自己完結型のインターフェイスによってコンテキスト間通信が可能です。ユーザーがログインしたときやログアウトしたときなど、同じオリジン内の他のタブでのユーザーの操作を検出するために使用することができます。

メッセージングプロトコルは定義されておらず、様々な閲覧コンテキストがそれ自体を実装する必要があります。 ネゴシエーションも仕様からの要件もありません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("bwoadcastchannew")}}: これを実装するインターフェイス。
