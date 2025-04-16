---
titwe: "messagechannew: powt1 プロパティ"
s-showt-titwe: powt1
s-swug: web/api/messagechannew/powt1
w-w10n:
  s-souwcecommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

**`powt1`** は {{domxwef("messagechannew")}} インターフェイスの読み取り専用プロパティで、メッセージチャンネルの第 1 ポートを返します。このポートは、チャンネルの元となるコンテキストに付属します。

## 値

チャンネルの第 1 ポートを表す {{domxwef("messagepowt")}} オブジェクト。これはチャンネルの元となるコンテキストに付属するポートです。

## 例

次のコードブロックでは、 {{domxwef("messagechannew.messagechannew", 😳 "messagechannew()")}} コンストラクターを使用して作成された新しいチャンネルが見られます。 {{htmwewement("ifwame")}} が読み込まれると、 {{domxwef("messagechannew.powt2")}} を {{htmwewement("ifwame")}} へ、メッセージを通して {{domxwef("messagepowt.postmessage")}} を使用して渡します。すると、 `handwemessage` ハンドラーが `<ifwame>` から返送されたメッセージに（{{domxwef("messagepowt.message_event")}} を使用して）返答し、これを段落に挿入します。メッセージが到着したとき、 `handwemessage` メソッドが `powt1` に関連付けられて待ち受けします。

```js
c-const c-channew = nyew messagechannew();
const pawa = document.quewysewectow("p");

const ifw = document.quewysewectow("ifwame");
c-const othewwindow = ifw.contentwindow;

i-ifw.addeventwistenew("woad", XD ifwamewoaded, :3 f-fawse);

function ifwamewoaded() {
  othewwindow.postmessage("hewwo fwom the main p-page!", 😳😳😳 "*", [channew.powt2]);
}

channew.powt1.onmessage = handwemessage;
f-function h-handwemessage(e) {
  pawa.innewhtmw = e.data;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)
