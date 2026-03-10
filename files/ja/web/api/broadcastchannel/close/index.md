---
title: "BroadcastChannel: close() メソッド"
short-title: close()
slug: Web/API/BroadcastChannel/close
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

**`close()`** は {{domxref("BroadcastChannel")}} インターフェイスのメソッドで、基礎となるチャンネルへの接続を終了し、オブジェクトをガベージコレクションできるようにします。 このチャンネルがもう必要ないことをブラウザーが知る他の方法はないので、これを行うのに必要なステップです。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

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
