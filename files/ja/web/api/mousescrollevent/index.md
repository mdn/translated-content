---
title: MouseScrollEvent
slug: Web/API/MouseScrollEvent
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{APIRef("UI Events")}}{{ Non-standard_Header }}{{Deprecated_Header}}

**`MouseScrollEvent`** インターフェイスは、ユーザーがマウスホイールや同様の入力デバイスを動かすことによって発生するイベントを表します。

> [!WARNING]
> wheel イベントにはこのインターフェイスを使用しないでください。
>
> `MouseWheelEvent` と同様、このインターフェイスは非標準であり、非推奨です。 Gecko ベースのブラウザーでのみ使用されていました。代わりに、標準の _{{domxref("WheelEvent")}}_ を使用してください。

## メソッド概要

```webidl
void initMouseScrollEvent(
  in DOMString typeArg,
  in boolean canBubbleArg,
  in boolean cancelableArg,
  in nsIDOMAbstractView viewArg,
  in long detailArg,
  in long screenXArg,
  in long screenYArg,
  in long clientXArg,
  in long clientYArg,
  in boolean ctrlKeyArg,
  in boolean altKeyArg,
  in boolean shiftKeyArg,
  in boolean metaKeyArg,
  in unsigned short buttonArg,
  in nsIDOMEventTarget relatedTargetArg,
  in long axis);
```

## 属性

| 属性                      | 型     | 説明                       |
| ------------------------- | ------ | -------------------------- |
| `axis` {{ReadOnlyInline}} | `long` | スクロール方向を示します。 |

## 定数

### デルタモード

| 定数              | 値     | 説明                                               |
| ----------------- | ------ | -------------------------------------------------- |
| `HORIZONTAL_AXIS` | `0x01` | このイベントは、水平ホイール操作によって発生した。 |
| `VERTICAL_AXIS`   | `0x02` | このイベントは、垂直ホイール操作によって発生した。 |

## インスタンスメソッド

- `initMouseScrollEvent()`
  - : `nsIDOMMouseScrollEvent::initMouseScrollEvent()` を参照。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `DOMMouseScroll`
- `MozMousePixelScroll`
- 標準化されたマウスホイールイベントオブジェクト: {{ domxref("WheelEvent") }}
