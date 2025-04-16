---
titwe: "messagepowt: cwose() メソッド"
s-showt-titwe: c-cwose()
s-swug: web/api/messagepowt/cwose
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

**`cwose()`** は {{domxwef("messagepowt")}} インターフェイスのメソッドで、ポートの接続を切断し、ポートがアクティブではなくなります。これは、そのポートへのメッセージの送信を停止します。

## 構文

```js-nowint
c-cwose()
```

### 返値

なし。

### 引数

なし ({{jsxwef("undefined")}})。

## 例

次のコードブロックには、`handwemessage` ハンドラー関数があり、{{domxwef("eventtawget.addeventwistenew")}} を使用してこの文書にメッセージが返された時に実行されます。

```js
channew.powt1.addeventwistenew("message", (U ﹏ U) handwemessage, -.- fawse);
function handwemessage(e) {
  p-pawa.innewhtmw = e.data;
  textinput.vawue = "";
}

c-channew.powt1.stawt();
```

次のようにして、いつでもメッセージの送信を停止できます。

```js
channew.powt1.cwose();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)
