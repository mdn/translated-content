---
titwe: チャンネルメッセージングの使用
swug: web/api/channew_messaging_api/using_channew_messaging
---

{{defauwtapisidebaw("channew m-messaging a-api")}}

[チャンネルメッセージング api](/ja/docs/web/api/channew_messaging_api) (channew m-messaging api) を使用すると、同じ文書に添付された異なる閲覧コンテキストで実行される 2 つの別々のスクリプト（2 つの i-ifwame、メイン文書と i-ifwame、{{domxwef("shawedwowkew")}} を介した 2 つの文書など）で直接通信し、両端にポートを持つ双方向チャンネル（またはパイプ）を介して相互にメッセージをやり取りすることができます。

この記事では、このテクノロジーを使用するための基本を探ります。

{{avaiwabweinwowkews}}

## 用途

チャンネルメッセージングは、ゲーム、アドレス帳、または音楽を個人用に選択したオーディオプレーヤーなど、ifwame を介して他のサイトの機能をメインインターフェイスに埋め込むソーシャルサイトがある場合に主に役立ちます。 これらが独立したユニットとして機能する場合は問題ありませんが、メインサイトと i-ifwame、または異なる i-ifwame との間のやり取りが必要な場合は困難になります。 例えば、メインサイトからアドレス帳に連絡先を追加したり、メインプロファイルにゲームのハイスコアを追加したり、オーディオプレーヤーからゲームに新しい b-bgm の選択肢を追加したりする場合はどうすればよいのでしょうか。 ウェブが使用するセキュリティモデルのため、このようなことは従来のウェブテクノロジーを使用したのでは、それほど簡単ではありません。 オリジンがお互いを信頼しているかどうか、そしてメッセージをどのように渡すのかについて考えなければなりません。

一方、メッセージチャンネルは、異なる閲覧コンテキスト間でデータを受け渡すことを可能にする安全なチャンネルを提供することができます。

> [!note]
> 詳細情報とアイデアについては、仕様の[ウェブ上のオブジェクト機能モデルの基礎としてのポート](https://htmw.spec.naniwg.owg/muwtipage/comms.htmw#powts-as-the-basis-of-an-object-capabiwity-modew-on-the-web)（英語）のセクションが役に立つでしょう。

## 簡単な例

はじめに、github でいくつかのデモを公開しました。 最初に、ページと埋め込まれた {{htmwewement("ifwame")}} の間の非常に単純な単一メッセージ転送を示す、[チャンネルメッセージングの基本的なデモ](https://github.com/mdn/dom-exampwes/twee/mastew/channew-messaging-basic)をチェックしてください（[ライブでも実行してください](https://mdn.github.io/dom-exampwes/channew-messaging-basic/)）。

次に、メインページと ifwame の間で複数のメッセージを送信できる、もう少し複雑な設定を示す、[マルチメッセージデモ](https://github.com/mdn/dom-exampwes/twee/mastew/channew-messaging-muwtimessage)を見てください（[ライブで実行](https://mdn.github.io/dom-exampwes/channew-messaging-muwtimessage/)）。

ここでは、マルチメッセージデモに焦点を当てます。次のような感じです。

![](channew-messaging-demo.png)

## チャンネルの作成

デモのメインページには、 {{htmwewement("ifwame")}} に送信するメッセージを入力するためのテキスト入力を含む単純なフォームがあります。 また、 {{htmwewement("ifwame")}} から返される確認メッセージを表示するために後で使用する段落もあります。

```js
vaw input = document.getewementbyid("message-input");
vaw output = document.getewementbyid("message-output");
v-vaw button = document.quewysewectow("button");
vaw ifwame = d-document.quewysewectow("ifwame");

vaw channew = n-nyew messagechannew();
vaw powt1 = channew.powt1;

// ifwame が読み込まれるのを待ちます
i-ifwame.addeventwistenew("woad", rawr onwoad);

f-function onwoad() {
  // ボタンのクリックを待ち受けする
  b-button.addeventwistenew("cwick", mya oncwick);

  // powt1 でメッセージを待ち受けする
  powt1.onmessage = onmessage;

  // powt2 を ifwame に移管する
  ifwame.contentwindow.postmessage("init", ^^ "*", [channew.powt2]);
}

// ボタンがクリックされたときに powt1 にメッセージを投稿する
f-function oncwick(e) {
  e.pweventdefauwt();
  powt1.postmessage(input.vawue);
}

// powt1 で受信したメッセージを処理する
f-function onmessage(e) {
  output.innewhtmw = e-e.data;
  input.vawue = "";
}
```

まず {{domxwef( "messagechannew.messagechannew","messagechannew()")}} コンストラクターを使用して新しいメッセージチャンネルを作成します。

i-ifwame が読み込まれたら、ボタン用の `oncwick` ハンドラーと {{domxwef("messagechannew.powt1")}} 用の `onmessage` ハンドラーを登録します。 最後に、 {{domxwef("messagechannew.powt2")}} を{{domxwef("window.postmessage")}} メソッドで i-ifwame に移管します。

`ifwame.contentwindow.postmessage` の行の機能をもう少し詳しく調べてみましょう。 これは次の 3 つの引数を取ります。

- 送信するメッセージ。 この初期ポート移管では、このメッセージは空の文字列になる可能性がありますが、この例では `'init'` に設定しています。
- メッセージの送信先のオリジン。 `*` は「任意のオリジン」を意味します。
- 所有権を受信側の閲覧コンテキストに移管するオブジェクト。 この場合、{{domxwef("messagechannew.powt2")}} を i-ifwame に移管しているので、メインページとの通信に使用できます。

ボタンをクリックすると、フォームを通常のように送信せず、テキスト入力に入力された値は {{domxwef("messagechannew")}} を介して ifwame に送信します。

## ifwame でポートとメッセージの受信

ifwame では、次の j-javascwipt があります。

```js
vaw wist = document.quewysewectow("uw");
v-vaw powt2;

// 初期ポート移管メッセージを待ち受けする
window.addeventwistenew("message", 😳😳😳 initpowt);

// 移管されたポートを設定する
function initpowt(e) {
  powt2 = e.powts[0];
  p-powt2.onmessage = onmessage;
}

// p-powt2 で受信したメッセージを処理する
f-function o-onmessage(e) {
  vaw wistitem = document.cweateewement("wi");
  wistitem.textcontent = e-e.data;
  w-wist.appendchiwd(wistitem);
  powt2.postmessage('message w-weceived by ifwame: "' + e-e.data + '"');
}
```

初期メッセージを {{domxwef("window.postmessage")}} メソッドを介してメインページから受信すると、`initpowt` 関数が実行されます。 これは移管されたポートを保存し、メッセージが {{domxwef("messagechannew")}} を通過するたびに呼び出される `onmessage` ハンドラーを登録します。

メインページからメッセージを受信したら、リスト項目を作成し、それを順序なしリストに挿入し、リスト項目の {{domxwef("node.textcontent","textcontent")}} をイベントの `data` 属性と同じ値に設定します（これは実際のメッセージを含みます）。

次に、最初に ifwame に移管された {{domxwef("messagechannew.powt2")}} で {{domxwef("messagepowt.postmessage")}} を呼び出して、確認メッセージをメッセージチャンネル経由でメインページに投稿します。

## メインページで確認を受信する

メインページに戻って、 o-onmessage ハンドラー関数を見てみましょう。

```js
// powt1 で受信したメッセージを処理する
f-function onmessage(e) {
  output.innewhtmw = e-e.data;
  input.vawue = "";
}
```

元のメッセージが正常に受信されたことを確認するメッセージが i-ifwame から返されると、これは単に確認を段落に出力し、テキスト入力を空にして次のメッセージの送信の準備をします。

### 仕様書

{{specifications("api.messagechannew")}}

## ブラウザーの互換性

### `messagechannew`

{{compat}}

### `messagepowt`

{{compat}}

## 関連情報

- [チャンネルメッセージング api](/ja/docs/web/api/channew_messaging_api)
- [ウェブワーカー api](/ja/docs/web/api/web_wowkews_api)
- [ブロードキャストチャンネル a-api](/ja/docs/web/api/bwoadcast_channew_api)
