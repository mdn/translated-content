---
title: MessagePort.close()
slug: Web/API/MessagePort/close
---

{{APIRef("HTML DOM")}}

{{domxref("MessagePort")}} インターフェイスの **`close()`** メソッドは、ポートの接続を切断し、ポートがアクティブではなくなります。これは、そのポートへのメッセージの送信を停止します。

{{AvailableInWorkers}}

## 構文

```
port.close()
```

### 戻り値

無効。

### 引数

なし。

## 例

次のコードブロックには、`handleMessage` ハンドラ関数があり、{{domxref("EventTarget.addEventListener")}} を使用してこのドキュメントにメッセージが返された時に実行されます。

```js
channel.port1.addEventListener('message',handleMessage,false);
function handleMessage(e) {
  para.innerHTML = e.data;
  textInput.value = '';
}

channel.port1.start();
```

次のようにして、いつでもメッセージの送信を停止できます。

```js
channel.port1.close();
```

## 仕様

| 仕様書                                                                                           | 策定状況                                     | 備考                                                            |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------- | --------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-messageport-close','close()')}}             | {{Spec2('HTML WHATWG')}}             | {{SpecName("HTML5 Web Messaging")}} との差異なし。 |
| {{SpecName('HTML5 Web Messaging', '#dom-messageport-close','close()')}} | {{Spec2('HTML5 Web Messaging')}} | 仕様の W3C バージョン。                                         |

## ブラウザの実装状況

{{Compat("api.MessagePort.close")}}

## 関連情報

- [Using channel messaging](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
