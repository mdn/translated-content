---
title: BroadcastChannel.name
slug: Web/API/BroadcastChannel/name
---

{{APIRef("BroadCastChannel API")}}

読み取り専用の **`BroadcastChannel.name`** プロパティは、指定されたチャンネルをその名前で一意に識別する {{domxref("DOMString")}} を返します。 この名前は作成時に {{domxref("BroadcastChannel.BroadCastChannel", "BroadcastChannel()")}} コンストラクタに渡されるため、読み取り専用です。

{{AvailableInWorkers}}

## 構文

```
var str = channel.name;
```

## 例

```js
// チャンネルに接続
var bc = new BroadcastChannel('test_channel');

// その他の操作（postMessage など）

// チャンネル名をコンソールに記録します
console.log(bc.name); // "test_channel"

// 終了したら、チャンネルから切断します
bc.close();
```

## 仕様

| 仕様                                                                                                                         | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "comms.html#dom-broadcastchannel-name", "BroadcastChannel.name")}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.BroadcastChannel.name")}}

## 関連情報

- {{domxref("BroadcastChannel")}}: これが属するインターフェース。
