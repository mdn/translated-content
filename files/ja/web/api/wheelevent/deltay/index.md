---
title: "WheelEvent: deltaY プロパティ"
short-title: deltaY
slug: Web/API/WheelEvent/deltaY
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

**`WheelEvent.deltaY`** は読み取り専用のプロパティで、 {{domxref("WheelEvent.deltaMode")}} 単位での垂直スクロール量を表す `double` です。

## 値

数値です。

## 例

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaY: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaY);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
