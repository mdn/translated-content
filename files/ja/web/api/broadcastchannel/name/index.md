---
title: BroadcastChannel.name
slug: Web/API/BroadcastChannel/name
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.name`** は読み取り専用のプロパティで、指定されたチャンネルをその名前で一意に識別する文字列を返します。 この名前は作成時に {{domxref("BroadcastChannel.BroadCastChannel", "BroadcastChannel()")}} コンストラクターに渡されるため、読み取り専用です。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
// チャンネルに接続
const bc = new BroadcastChannel("test_channel");

// その他の操作（postMessage など）

// チャンネル名をコンソールに記録します
console.log(bc.name); // "test_channel"

// 終了したら、チャンネルから切断します
bc.close();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("BroadcastChannel")}}: 所属するインターフェイス。
