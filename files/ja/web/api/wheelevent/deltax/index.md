---
title: "WheelEvent: deltaX プロパティ"
short-title: deltaX
slug: Web/API/WheelEvent/deltaX
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

**`WheelEvent.deltaX`** は読み取り専用のプロパティで、 {{domxref("WheelEvent.deltaMode")}} 単位での水平スクロール量を表す `double` です。

## 値

数値です。

## 例

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaX: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaX);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
