---
title: チャンネルメッセージングの使用
slug: Web/API/Channel_Messaging_API/Using_channel_messaging
tags:
  - API
  - チャンネルメッセージング
  - HTML5
  - MessageChannel
  - MessagePort
  - チュートリアル
translation_of: Web/API/Channel_Messaging_API/Using_channel_messaging
---
{{DefaultAPISidebar("Channel Messaging API")}}

[チャンネルメッセージング API](/ja/docs/Web/API/Channel_Messaging_API) (Channel Messaging API) を使用すると、同じ文書に添付された異なる閲覧コンテキストで実行される 2 つの別々のスクリプト（2 つの IFrame、メイン文書と IFrame、{{domxref("SharedWorker")}} を介した 2 つの文書など）で直接通信し、両端にポートを持つ双方向チャンネル（またはパイプ）を介して相互にメッセージをやり取りすることができます。

この記事では、このテクノロジーを使用するための基本を探ります。

{{AvailableInWorkers}}

## 用途

チャンネルメッセージングは​​、ゲーム、アドレス帳、または音楽を個人用に選択したオーディオプレーヤーなど、IFrame を介して他のサイトの機能をメインインターフェイスに埋め込むソーシャルサイトがある場合に主に役立ちます。 これらが独立したユニットとして機能する場合は問題ありませんが、メインサイトと IFrame、または異なる IFrame との間のやり取りが必要な場合は困難になります。 例えば、メインサイトからアドレス帳に連絡先を追加したり、メインプロファイルにゲームのハイスコアを追加したり、オーディオプレーヤーからゲームに新しい BGM の選択肢を追加したりする場合はどうすればよいのでしょうか。 ウェブが使用するセキュリティモデルのため、このようなことは従来のウェブテクノロジーを使用したのでは、それほど簡単ではありません。 オリジンがお互いを信頼しているかどうか、そしてメッセージをどのように渡すのかについて考えなければなりません。

一方、メッセージチャンネルは、異なる閲覧コンテキスト間でデータを受け渡すことを可能にする安全なチャンネルを提供することができます。

> **Note:** 詳細情報とアイデアについては、仕様の[ウェブ上のオブジェクト機能モデルの基礎としてのポート](https://html.spec.whatwg.org/multipage/comms.html#ports-as-the-basis-of-an-object-capability-model-on-the-web)（英語）のセクションが役に立つでしょう。

## 簡単な例

はじめに、Github でいくつかのデモを公開しました。 最初に、ページと埋め込まれた {{htmlelement("iframe")}} の間の非常に単純な単一メッセージ転送を示す、[チャンネルメッセージングの基本的なデモ](https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic)をチェックしてください（[ライブでも実行してください](https://mdn.github.io/dom-examples/channel-messaging-basic/)）。

次に、メインページと IFrame の間で複数のメッセージを送信できる、もう少し複雑な設定を示す、[マルチメッセージデモ](https://github.com/mdn/dom-examples/tree/master/channel-messaging-multimessage)を見てください（[ライブで実行](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)）。

ここでは、マルチメッセージデモに焦点を当てます。次のような感じです。

![](channel-messaging-demo.png)

## チャンネルの作成

デモのメインページには、 {{htmlelement("iframe")}} に送信するメッセージを入力するためのテキスト入力を含む単純なフォームがあります。 また、 {{htmlelement("iframe")}} から返される確認メッセージを表示するために後で使用する段落もあります。

```js
var input = document.getElementById('message-input');
var output = document.getElementById('message-output');
var button = document.querySelector('button');
var iframe = document.querySelector('iframe');

var channel = new MessageChannel();
var port1 = channel.port1;

// iframe が読み込まれるのを待ちます
iframe.addEventListener("load", onLoad);

function onLoad() {
  // ボタンのクリックを待ち受けする
  button.addEventListener('click', onClick);

  // port1 でメッセージを待ち受けする
  port1.onmessage = onMessage;

  // port2 を iframe に移管する
  iframe.contentWindow.postMessage('init', '*', [channel.port2]);
}

// ボタンがクリックされたときに port1 にメッセージを投稿する
function onClick(e) {
  e.preventDefault();
  port1.postMessage(input.value);
}

// port1 で受信したメッセージを処理する
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = '';
}
```

まず {{domxref( "MessageChannel.MessageChannel","MessageChannel()")}} コンストラクターを使用して新しいメッセージチャンネルを作成します。

IFrame が読み込まれたら、ボタン用の `onclick` ハンドラーと {{domxref("MessageChannel.port1")}} 用の `onmessage` ハンドラーを登録します。 最後に、 {{domxref("MessageChannel.port2")}} を{{domxref("window.postMessage")}} メソッドで IFrame に移管します。

`iframe.contentWindow.postMessage` の行の機能をもう少し詳しく調べてみましょう。 これは次の 3 つの引数を取ります。

- 送信するメッセージ。 この初期ポート移管では、このメッセージは空の文字列になる可能性がありますが、この例では `'init'` に設定しています。
- メッセージの送信先のオリジン。 `*` は「任意のオリジン」を意味します。
- 所有権を受信側の閲覧コンテキストに移管するオブジェクト。 この場合、{{domxref("MessageChannel.port2")}} を IFrame に移管しているので、メインページとの通信に使用できます。

ボタンをクリックすると、フォームを通常のように送信せず、テキスト入力に入力された値は {{domxref("MessageChannel")}} を介して IFrame に送信します。

## IFrame でポートとメッセージの受信

IFrame では、次の JavaScript があります。

```js
var list = document.querySelector('ul');
var port2;

// 初期ポート移管メッセージを待ち受けする
window.addEventListener('message', initPort);

// 移管されたポートを設定する
function initPort(e) {
  port2 = e.ports[0];
  port2.onmessage = onMessage;
}

// port2 で受信したメッセージを処理する
function onMessage(e) {
  var listItem = document.createElement('li');
  listItem.textContent = e.data;
  list.appendChild(listItem);
  port2.postMessage('Message received by IFrame: "' + e.data + '"');
}
```

初期メッセージを {{domxref("window.postMessage")}} メソッドを介してメインページから受信すると、`initPort` 関数が実行されます。 これは移管されたポートを保存し、メッセージが {{domxref("MessageChannel")}} を通過するたびに呼び出される `onmessage` ハンドラーを登録します。

メインページからメッセージを受信したら、リスト項目を作成し、それを順序なしリストに挿入し、リスト項目の {{domxref("Node.textContent","textContent")}} をイベントの `data` 属性と同じ値に設定します（これは実際のメッセージを含みます）。

次に、最初に IFrame に移管された {{domxref("MessageChannel.port2")}} で {{domxref("MessagePort.postMessage")}} を呼び出して、確認メッセージをメッセージチャンネル経由でメインページに投稿します。

## メインページで確認を受信する

メインページに戻って、 onmessage ハンドラー関数を見てみましょう。

```js
// port1 で受信したメッセージを処理する
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = '';
}
```

元のメッセージが正常に受信されたことを確認するメッセージが IFrame から返されると、これは単に確認を段落に出力し、テキスト入力を空にして次のメッセージの送信の準備をします。

### 仕様書

{{Specifications("api.MessageChannel")}}

## ブラウザーの互換性

### `MessageChannel`

{{Compat("api.MessageChannel", 0)}}

### `MessagePort`

{{Compat("api.MessagePort", 0)}}

## 関連情報

- [チャンネルメッセージング API](/ja/docs/Web/API/Channel_Messaging_API)
- [ウェブワーカー API](/ja/docs/Web/API/Web_Workers_API)
- [ブロードキャストチャンネル API](/ja/docs/Web/API/Broadcast_Channel_API)
