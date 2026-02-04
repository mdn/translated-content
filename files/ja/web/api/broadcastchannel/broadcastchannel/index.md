---
title: "BroadcastChannel: BroadcastChannel() コンストラクター"
short-title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

**`BroadcastChannel()`** コンストラクターは、新しい {{domxref("BroadcastChannel")}} を作成し、それを基礎となるチャンネルに接続します。

## 構文

```js-nolint
new BroadcastChannel(channelName)
```

### 値

- `channelName`
  - : 文字列で、チャンネルの名前を表します。 同じ{{glossary("origin","オリジン")}}を持つすべての{{glossary("browsing context", "閲覧コンテキスト")}}に対して、この名前を持つ単一のチャンネルがあります。

## 例

```js
// "internal_notification" チャンネルをリッスンする新しいチャンネルを作成します。

const bc = new BroadcastChannel("internal_notification");
bc.postMessage("New listening connected!");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("BroadcastChannel")}}: 所属するインターフェイス。
