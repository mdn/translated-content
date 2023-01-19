---
title: Gamepad.timestamp
slug: Web/API/Gamepad/timestamp
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Gamepad API")}}

**`Gamepad.timestamp`** は {{domxref("Gamepad")}} インターフェイスのプロパティで、このゲームパッドのデータが最後に更新された時刻を表す {{domxref("DOMHighResTimeStamp")}} を返します。

このプロパティの背景にある考え方は、ハードウェアにより `axes` や `button` のデータが更新されたかどうかを開発者が判断できるようにすることです。このプロパティの値は `{{domxref("PerformanceTiming")}}` インターフェイスの `navigationStart` 属性との相対的な値になります。値は単調増加しています。つまり、新しい値は常に古い値以上であるため、新旧の値を比較することでデータの更新を判断できます。

> **メモ:** このプロパティは、現在、どこでも対応しているわけではありません。

## 値

{{domxref("DOMHighResTimeStamp")}} オブジェクトです。

## 例

```js
const gp = navigator.getGamepads()[0];
console.log(gp.timestamp);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
