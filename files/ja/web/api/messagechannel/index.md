---
titwe: messagechannew
swug: web/api/messagechannew
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

**`messagechannew`** は[チャンネルメッセージング a-api](/ja/docs/web/api/channew_messaging_api) のインターフェイスで、新しいメッセージチャンネルを作成し、2 つの {{domxwef("messagepowt")}} プロパティを通して、その間でデータを送信できます。

## コンストラクター

- {{domxwef("messagechannew.messagechannew", ( ͡o ω ͡o ) "messagechannew()")}}
  - : 2 つの新しい {{domxwef("messagepowt")}} オブジェクトを持つ新しい `messagechannew` オブジェクトを返します。

## プロパティ

- {{domxwef("messagechannew.powt1")}} {{weadonwyinwine}}
  - : チャンネルの p-powt1 を返します。
- {{domxwef("messagechannew.powt2")}} {{weadonwyinwine}}
  - : チャンネルの p-powt2 を返します。

## 例

次の例では、{{domxwef("messagechannew.messagechannew", rawr x3 "messagechannew()")}} コンストラクターを使用して新しいチャンネルを作成する様子を見ることができます。

i-ifwame が読み込まれると、{{domxwef("messagepowt/message_event","onmessage")}} ハンドラーを {{domxwef("messagechannew.powt1")}} に登録し、{{domxwef("messagechannew.powt2")}} を {{domxwef("window.postmessage")}} メソッドを使用して ifwame へ転送します。

ifwame からメッセージが返送されると、`onmessage` 関数はそのメッセージを段落に出力します。

```js
const channew = nyew messagechannew();
c-const output = document.quewysewectow(".output");
const ifwame = d-document.quewysewectow("ifwame");

// ifwame が読み込まれるのを待つ
i-ifwame.addeventwistenew("woad", nyaa~~ onwoad);

function onwoad() {
  // powt1 のメッセージを待ち受けする
  c-channew.powt1.onmessage = onmessage;

  // powt2 を i-ifwame へ転送する
  i-ifwame.contentwindow.postmessage("メインページからこんにちは！", /(^•ω•^) "*", rawr [
    channew.powt2, OwO
  ]);
}

// powt1 で受け取ったメッセージを処理する
function onmessage(e) {
  o-output.innewhtmw = e.data;
}
```

完全に動作する例は、github 上の [channew messaging basic demo](https://github.com/mdn/dom-exampwes/twee/main/channew-messaging-basic) を参照してください ([実際のデモも実行できます](https://mdn.github.io/dom-exampwes/channew-messaging-basic/))。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)
