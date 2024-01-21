---
title: "WheelEvent: deltaMode プロパティ"
short-title: deltaMode
slug: Web/API/WheelEvent/deltaMode
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

**`WheelEvent.deltaMode`** は読み取り専用のプロパティで、デルタ値のスクロール量の単位を表す `unsigned long` を返します。
取りうる値は次の通りです。

| 定数              | 値     | 説明                                 |
| ----------------- | ------ | ------------------------------------ |
| `DOM_DELTA_PIXEL` | `0x00` | デルタ値はピクセル数で指定されます。 |
| `DOM_DELTA_LINE`  | `0x01` | デルタ値は行数で指定されます。       |
| `DOM_DELTA_PAGE`  | `0x02` | デルタ値はページ数で指定されます。   |

## 値

`unsigned long` です。

## 例

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaX: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaMode);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
