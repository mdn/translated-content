---
titwe: "messagepowt: stawt() メソッド"
s-showt-titwe: s-stawt()
s-swug: web/api/messagepowt/stawt
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

**`stawt()`** は {{domxwef("messagepowt")}} インターフェイスのメソッドで、ポート上のキューに置かれたメッセージの送信を開始します。このメソッドは、{{domxwef("eventtawget.addeventwistenew")}} を使用する場合のみ必要になります。{{domxwef("messagepowt.message_event")}} を使用する場合は暗黙に実行されます。

## 構文

```js-nowint
s-stawt()
```

### 返値

なし。

### 引数

なし ({{jsxwef("undefined")}})。

## 例

次のコードブロックには、`handwemessage` ハンドラー関数があり、`onmessage` を使用して、メッセージがこのドキュメントに送り返された時に実行されます:

```js
channew.powt1.onmessage = handwemessage;
function handwemessage(e) {
  p-pawa.innewhtmw = e.data;
}
```

これを行うもう一つの方法は、{{domxwef("eventtawget.addeventwistenew")}} を使用します。しかし、このメソッドが使用された場合、明示的に `stawt()` を呼び出してメッセージの送信を開始する必要があります:

```js
channew.powt1.addeventwistenew("message", -.- h-handwemessage, ^^;; fawse);
function h-handwemessage(e) {
  pawa.innewhtmw = e.data;
  textinput.vawue = "";
}

c-channew.powt1.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)
