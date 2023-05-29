---
title: BroadcastChannel.close()
slug: Web/API/BroadcastChannel/close
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.close()`** は、基礎となるチャンネルへの接続を終了し、オブジェクトをガベージコレクションできるようにします。 このチャンネルがもう必要ないことをブラウザーが知る他の方法はないので、これは実行するのに必要なステップです。

{{AvailableInWorkers}}

## 構文

```js-nolint
channel.close()
```

## 例

```js
// チャンネルに接続
const bc = new BroadcastChannel("test_channel");

// その他の操作（postMessage など）

// 終了したら、チャンネルから切断します
bc.close();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("BroadcastChannel")}}: 所属するインターフェイス。
