---
title: "BroadcastChannel: postMessage() メソッド"
short-title: postMessage()
slug: Web/API/BroadcastChannel/postMessage
l10n:
  sourceCommit: 079b166268e5a1353e4244133f5883a3f530228f
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

**`postMessage()`** は {{domxref("BroadcastChannel")}} インターフェイスのメソッドで、任意の種類の {{jsxref("Object")}} のメッセージを、同じ{{glossary("origin","オリジン")}}を持つ任意の{{glossary("browsing context","閲覧コンテキスト")}}内の各リスナーに送信します。 メッセージは、チャンネルに結び付けられた各 {{domxref("BroadcastChannel")}} を対象とした {{domxref("BroadcastChannel/message_event", "message")}} イベントとして送信されます。

## 構文

```js-nolint
postMessage(message)
```

### 引数

- `message`
  - : 他のウィンドウに送信するデータ。データは[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を使用してシリアライズされます。
    つまり、様々なデータオブジェクトを自分でシリアライズすることなく、安全に出力先のウィンドウに渡すことができます。

    > [!NOTE]
    > 相互にメッセージを送信できる実行コンテキストは、同じ[エージェントクラスター](/ja/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing)に属していない場合があり、そのためメモリーを共有できません。{{jsxref("SharedArrayBuffer")}} オブジェクト、またはそれをバックエンドとするバッファービューは、エージェントクラスター間で送信できません。送信しようとすると、受信側で `DataCloneError` {{domxref("DOMException")}}を含む {{domxref("BroadcastChannel/messageerror_event", "messageerror")}} イベントが発生します。

### 返値

なし。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("BroadcastChannel")}} が既に閉じられている場合に発生します。
- `DataCloneError` {{domxref("DOMException")}}
  - : 入力データの一部がシリアライズできない場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("BroadcastChannel")}}: 所属するインターフェイス。
