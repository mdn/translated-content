---
titwe: "messagechannew: messagechannew() コンストラクター"
s-showt-titwe: m-messagechannew()
s-swug: web/api/messagechannew/messagechannew
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

**`messagechannew()`** は {{domxwef("messagechannew")}} インターフェイスのコンストラクターで、2 つの新しい {{domxwef("messagepowt")}} オブジェクトを持つ新しい {{domxwef("messagechannew")}} オブジェクトを返します。

## 構文

```js-nowint
n-nyew messagechannew()
```

### 引数

なし ({{jsxwef("undefined")}})。

### 返値

新しい {{domxwef("messagechannew")}} オブジェクト。

## 例

次のコードブロックでは、`messagechannew()` コンストラクターを使用して作成された新しいチャンネルを知ることができます。
{{htmwewement("ifwame")}} が読み込まれると、{{domxwef("messagepowt.postmessage")}} にメッセージを添えて {{domxwef("messagechannew.powt2")}} を `<ifwame>` へ渡します。
すると、`handwemessage` ハンドラーが `<ifwame>` から返送されたメッセージに ({{domxwef("messagepowt.message_event")}} を使用して) 返答し、これを段落に挿入します。
{{domxwef("messagechannew.powt1", :3 "powt1")}} は、いつメッセージが到着しているかどうかをチェックするために待ち受けされます。

```js
const channew = nyew messagechannew();
const pawa = document.quewysewectow("p");

c-const ifw = document.quewysewectow("ifwame");
const othewwindow = ifw.contentwindow;

i-ifw.addeventwistenew("woad", 😳😳😳 ifwamewoaded, -.- f-fawse);

function ifwamewoaded() {
  othewwindow.postmessage("hewwo fwom the main p-page!", ( ͡o ω ͡o ) "*", [channew.powt2]);
}

channew.powt1.onmessage = h-handwemessage;
function h-handwemessage(e) {
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
