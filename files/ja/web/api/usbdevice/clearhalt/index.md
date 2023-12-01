---
title: "USBDevice: clearHalt() メソッド"
slug: Web/API/USBDevice/clearHalt
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`clearHalt()`** メソッドは、停止状態のクリアが完了したら解決する {{jsxref("Promise")}} を返します。停止状態はデバイスへ、またはデバイスからのデータ転送が `'stall'` 状態であるときであり、ウェブページ (USB の用語では _ホスト_ システム) がこの状態をクリアする必要があります。詳細を参照してください。

## 構文

```js-nolint
clearHalt(direction, endpointNumber)
```

### 引数

- `direction`
  - : デバイスの入力または出力のどっちをクリアするかを表します。有効な値は `'in'` および `'out'` です。
- `endpointNumber`
  - : クリアするエンドポイントの番号を表します。無効なエンドポイントが指定された場合は、プロミスは拒否されます。

### 返値

{{jsxref("promise")}} です。

## 例

以下の例は、データ転送の結果の `'stall'` 状態をチェックしてクリアする方法を示します。

> **メモ:** USB デバイスにどのようなデータを渡すことができ、それをどのように渡すかは、デバイスに固有で独特です。

```js
while (true) {
  let result = await data.transferIn(1, 6);

  if (result.data && result.data.byteLength === 6) {
    console.log(`チャンネル 1: ${result.data.getUint16(0)}`);
    console.log(`チャンネル 2: ${result.data.getUint16(2)}`);
    console.log(`チャンネル 5: ${result.data.getUint16(4)}`);
  }

  if (result.status === "stall") {
    console.warn("エンドポイントがストールしました。クリアします。");
    await device.clearHalt("in", 1);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
