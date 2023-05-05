---
title: ブロードキャストチャンネル API
slug: Web/API/Broadcast_Channel_API
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{DefaultAPISidebar("Broadcast Channel API")}}

**ブロードキャストチャンネル API** (Broadcast Channel API) を使用すると、同じ{{glossary("origin","オリジン")}}の{{glossary("browsing context", "閲覧コンテキスト")}}（つまり、_ウィンドウ_、_タブ_、_フレーム_、_iframe_）やワーカー間で、基本的な通信を行うことができます。

{{AvailableInWorkers}}

{{domxref("BroadcastChannel")}} オブジェクトを作成することで、投稿されたメッセージを受け取ることができます。通信したいフレームやワーカーへの参照を保持する必要はありません。同じ名前の {{domxref("BroadcastChannel")}} を自分自身で構築することで特定のチャンネルに「加入 (subscribe)」し、それらすべての間で双方向の通信をすることができます。

![ブロードキャストチャンネル API の原理](broadcastchannel.png)

## ブロードキャストチャンネルのインターフェイス

### チャンネルの作成または参加

クライアントは {{domxref("BroadcastChannel")}} オブジェクトを作成することで、特定のブロードキャストチャンネルに参加します。[コンストラクター](/ja/docs/Web/API/BroadcastChannel/BroadcastChannel)は一つだけ引数として、チャンネルの*名前*を取ります。 ブロードキャストチャンネルに最初に接続した場合は、基になるリソースが作成されます。

```js
// ブロードキャストチャンネルへの接続
const bc = new BroadcastChannel("test_channel");
```

### メッセージの送信

作成した `BroadcastChannel` オブジェクトの {{domxref("BroadcastChannel.postMessage", "postMessage()")}} メソッドを呼び出すだけで十分です。 このメソッドは任意のオブジェクトを引数として取ります。文字列のメッセージの例を示します。

```js
// 非常に単純なメッセージの送信例
bc.postMessage("This is a test message.");
```

チャンネルに送信されたデータは、[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を使用してシリアライズされます。つまり、多種多様なデータオブジェクトを自分でシリアライズすることなく、安全に送信することができるのです。

API はメッセージに意味づけをしないので、どのようなメッセージを期待し、それをどう処理するかはコード次第です。

### メッセージの受信

メッセージが投稿されると、 [`message`](/ja/docs/Web/API/BroadcastChannel/message_event) イベントがこのチャンネルに接続されているそれぞれの {{domxref("BroadcastChannel")}} オブジェクトに送出されます。このイベントに対して {{domxref("BroadcastChannel/message_event", "onmessage")}} イベントハンドラーを使用して関数を実行することができます。

```js
// イベントをコンソールに出力するだけのハンドラー
bc.onmessage = (event) => {
  console.log(event);
};
```

### チャンネルの切断

チャンネルを去るには、オブジェクトの {{domxref("BroadcastChannel.close", "close()")}} メソッドを呼び出す必要があります。 これにより、オブジェクトと基になるチャンネル間のリンクを切断し、ガベージコレクションをすることができます。

```js
// チャンネルの切断
bc.close();
```

## まとめ

ブロードキャストチャンネル API は、自己完結型のインターフェイスによってコンテキスト間通信が可能です。ユーザーがログインしたときやログアウトしたときなど、同じオリジン内の他のタブでのユーザーの操作を検出するために使用することができます。

メッセージングプロトコルは定義されておらず、様々な閲覧コンテキストがそれ自体を実装する必要があります。 ネゴシエーションも仕様からの要件もありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("BroadcastChannel")}}: これを実装するインターフェイス。
