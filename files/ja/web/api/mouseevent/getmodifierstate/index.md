---
title: MouseEvent.getModifierState()
slug: Web/API/MouseEvent/getModifierState
tags:
  - API
  - DOM
  - DOM イベント
  - メソッド
  - MouseEvent
  - リファレンス
  - getModifierState
browser-compat: api.MouseEvent.getModifierState
---
{{APIRef("DOM Events")}}

**`MouseEvent.getModifierState()`** メソッドは、指定された修飾キーの現在の状態を返します。修飾キーが有効（すなわち、修飾キーが押されているかロックされている）ならば `true`、そうでなければ `false` を返します。

詳しくは {{domxref("KeyboardEvent.getModifierState","KeyboardEvent.getModifierState()")}} を参照してください。

## 構文

```js
getModifierState(keyArg)
```

### 返値

論理値です。

### Parameters

- _`keyArg`_
  - : A modifier key value.
    The value must be one of the {{domxref("KeyboardEvent.key")}} values which represent modifier keys or `"Accel"`{{deprecated_inline}}.
    This is case-sensitive.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- The {{domxref("MouseEvent")}} this method belongs to.
- {{domxref("KeyboardEvent.getModifierState")}}
