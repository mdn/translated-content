---
title: Gamepad.timestamp
slug: Web/API/Gamepad/timestamp
---

{{APIRef("Gamepad API")}}

{{domxref("Gamepad")}} インターフェイスの **`Gamepad.timestamp`** プロパティは、このゲームパッドのデータが最後に更新された時刻を表す {{domxref("DOMHighResTimeStamp")}} を返します。

このプロパティの背景にある考え方は、ハードウェアにより `axes` や `button` のデータが更新されたかどうかを開発者が判断できるようにすることです。このプロパティの値は `{{domxref("PerformanceTiming")}}` インターフェイスの `navigationStart` 属性との相対的な値になります。値は単調増加しています。つまり、新しい値は常に古い値以上であるため、新旧の値を比較することでデータの更新を判断できます。

> **メモ:** このプロパティは現在サポートされていない環境があります。

## 構文

```
readonly    attribute DOMHighResTimeStamp timestamp;
```

## 例

```js
var gp = navigator.getGamepads()[0];
console.log(gp.timestamp);
```

## 値

{{domxref("DOMHighResTimeStamp")}} 。

## 仕様書

| 仕様                                                                                         | 状態                         | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Gamepad", "#dom-gamepad-timestamp", "Gamepad.timestamp")}} | {{Spec2("Gamepad")}} | 初版     |

## ブラウザーの互換性

{{Compat("api.Gamepad.timestamp")}}

## 関連情報

[ゲームパッド API の使用](/ja/docs/Web/Guide/API/Gamepad)
