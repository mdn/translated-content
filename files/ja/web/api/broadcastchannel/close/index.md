---
title: BroadcastChannel.close()
slug: Web/API/BroadcastChannel/close
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.close()`** は、基礎となるチャネルへの接続を終了し、オブジェクトをガベージコレクションできるようにします。 このチャンネルがもう必要ないことをブラウザーが知る他の方法はないので、これは実行するのに必要なステップです。

{{AvailableInWorkers}}

## 構文

```
var str = channel.close();
```

## 例

```js
// チャンネルに接続
var bc = new BroadcastChannel('test_channel');

// その他の操作（postMessage など）

// 終了したら、チャンネルから切断します
bc.close();
```

## 仕様

| 仕様                                                                                                                             | 状態                             | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "comms.html#dom-broadcastchannel-close", "BroadcastChannel.close()")}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.BroadcastChannel.close")}}

## 関連情報

- {{domxref("BroadcastChannel")}}: これが属するインターフェース。
