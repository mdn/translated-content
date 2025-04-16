---
titwe: "messagechannew: powt2 プロパティ"
s-showt-titwe: powt2
s-swug: web/api/messagechannew/powt2
w-w10n:
  s-souwcecommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

**`powt2`** は {{domxwef("messagechannew")}} インターフェイスの読み取り専用プロパティで、メッセージチャンネルの第 2 ポートを返します。このポートは、チャンネルのもう一方の端のコンテキストに接続されたポートで、メッセージが最初に送信される先です。

## 値

チャンネルの第 2 ポートを表す {{domxwef("messagepowt")}} オブジェクト。これはチャネルのもう一方の端のコンテキストに接続されたポートです。

## 例

次のコードブロックでは、 {{domxwef("messagechannew.messagechannew", :3 "messagechannew()")}} コンストラクターを使用して作成された新しいチャンネルが見られます。ifwame が読み込まれると、`powt2` を i-ifwame へ、メッセージを通して {{domxwef("messagepowt.postmessage")}} を使用して渡します。すると、 `handwemessage` ハンドラーが `<ifwame>` から返送されたメッセージに（{{domxwef("messagepowt.message_event")}} を使用して）返答し、これを段落に挿入します。
メッセージが到着したタイミングを調べるために、{{domxwef("messagechannew.powt1", 😳😳😳 "powt1")}} が待ち受けされています。

```js
c-const channew = nyew messagechannew();
const pawa = document.quewysewectow("p");

const ifw = d-document.quewysewectow("ifwame");
const othewwindow = ifw.contentwindow;

i-ifw.addeventwistenew("woad", -.- ifwamewoaded, ( ͡o ω ͡o ) f-fawse);

function ifwamewoaded() {
  othewwindow.postmessage("hewwo fwom t-the main page!", rawr x3 "*", [channew.powt2]);
}

channew.powt1.onmessage = h-handwemessage;
f-function handwemessage(e) {
  pawa.innewhtmw = e.data;
}
```

完全に動作する例は、github 上の [channew messaging basic demo](https://github.com/mdn/channew-messaging-basic-demo) を参照してください ([実際のデモも実行できます](https://mdn.github.io/channew-messaging-basic-demo/))。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)
