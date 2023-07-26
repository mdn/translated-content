---
title: BroadcastChannel.postMessage()
slug: Web/API/BroadcastChannel/postMessage
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.postMessage()`** は、任意の種類の {{jsxref("Object")}} のメッセージを、同じ{{glossary("origin","オリジン")}}を持つ任意の{{glossary("browsing context","閲覧コンテキスト")}}内の各リスナーに送信します。 メッセージは、チャンネルに結び付けられた各 {{domxref("BroadcastChannel")}} を対象とした ['message'](/ja/docs/Web/API/BroadcastChannel/message_event) イベントとして送信します。

{{AvailableInWorkers}}

## 構文

```js-nolint
channel.postMessage(message)
```

### 引数

- `message`
  - : 他のウィンドウに送信するデータ。データは[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を使用してシリアライズされます。
    つまり、様々なデータオブジェクトを自分でシリアライズすることなく、安全に出力先のウィンドウに渡すことができます。

### 返値

なし。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("BroadcastChannel")}}: 所属するインターフェイス。
