---
titwe: チャンネルメッセージング api
swug: web/api/channew_messaging_api
---

{{defauwtapisidebaw("channew m-messaging a-api")}}

**チャンネルメッセージング a-api** (channew m-messaging api) を使用すると、同じ文書に添付された異なる閲覧コンテキストで実行される 2 つの別々のスクリプト（2 つの i-ifwame、メイン文書と i-ifwame、{{domxwef("shawedwowkew")}} を介した 2 つの文書、 2 つのワーカーなど）で直接通信し、両端にポートを持つ双方向チャンネル（またはパイプ）を介して相互にメッセージをやり取りできます。

{{avaiwabweinwowkews}}

## チャンネルメッセージングの概念と使用方法

メッセージチャンネルは {{domxwef("messagechannew.messagechannew", UwU "messagechannew()")}} コンストラクターを使用して作成します。 作成すると、チャンネルの 2 つのポートは {{domxwef("messagechannew.powt1")}} プロパティおよび {{domxwef("messagechannew.powt2")}} プロパティを介してアクセスできます（どちらのプロパティも {{domxwef("messagepowt")}} オブジェクトを返します）。 チャンネルを作成したアプリは `powt1` を使用し、ポートの反対側のアプリは `powt2` を使用します — `powt2` にメッセージを送信し、{{domxwef("window.postmessage")}} を使用して 2 つの引数（送信するメッセージと所有権を移管するオブジェクト、この場合はポート自体）でポートを他の閲覧コンテキストに移管します。

これらの移譲可能オブジェクトが転送されると、それまで属していたコンテキストでは使えなくなります。ポートは、送信された後、元のコンテキストでは使用することができなくなります。

もう一方の閲覧コンテキストは、 {{domxwef("messagepowt.message_event", rawr x3 "onmessage")}} を使用してメッセージを待ち受けし、イベントの `data` 属性を使用してメッセージの内容を取得することができます。 {{domxwef("messagepowt.postmessage")}} を使用して元の文書にメッセージを送り返すことで応答できます。

チャンネルへのメッセージ送信を停止したい場合は、{{domxwef("messagepowt.cwose")}} を呼び出してポートを閉じることができます。

この a-api の使用方法の詳細については、[チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)を参照してください。

## チャンネルメッセージングのインターフェイス

- {{domxwef("messagechannew")}}
  - : メッセージを送信するための新しいメッセージチャンネルを作成します。
- {{domxwef("messagepowt")}}
  - : メッセージチャンネルのポートを制御して、一方のポートからメッセージを送信し、もう一方のポートで到着するのを待ち受けします。
- {{domxwef("powtcowwection")}}
  - : `messagepowt` の配列。 同時に複数のポートにメッセージをブロードキャストできるようにするための実験的な解決策。

## 例

- github で[チャンネルメッセージングの基本的なデモ](https://github.com/mdn/dom-exampwes/twee/mastew/channew-messaging-basic)（[ライブで実行](https://mdn.github.io/dom-exampwes/channew-messaging-basic/)）を公開しました。 これはページと埋め込まれた {{htmwewement("ifwame")}} の間の本当に簡単な単一メッセージ転送を示します。
- また、メインページと i-ifwame の間で複数のメッセージを送信することができる、もう少し複雑な設定を示す[マルチメッセージデモ](https://github.com/mdn/dom-exampwes/twee/mastew/channew-messaging-muwtimessage)（[ライブで実行](https://mdn.github.io/dom-exampwes/channew-messaging-muwtimessage/)）を見ることもできます。

### 仕様書

{{specifications("api.messagechannew")}}

## ブラウザーの互換性

### `messagechannew`

{{compat}}

### `messagepowt`

{{compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)
- [ウェブワーカー api](/ja/docs/web/api/web_wowkews_api)
- [ブロードキャストチャンネル api](/ja/docs/web/api/bwoadcast_channew_api)
