---
title: MouseEvent.getModifierState()
slug: Web/API/MouseEvent/getModifierState
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("UI Events")}}

**`MouseEvent.getModifierState()`** メソッドは、指定された修飾キーの現在の状態を返します。修飾キーが有効（すなわち、修飾キーが押されているかロックされている）ならば `true`、そうでなければ `false` を返します。

詳しくは {{domxref("KeyboardEvent.getModifierState","KeyboardEvent.getModifierState()")}} を参照してください。

## 構文

```js-nolint
getModifierState(key)
```

### 引数

- `key`
  - : 修飾キーの値です。
    値は修飾キーまたは `"Accel"` {{deprecated_inline}} を表す {{domxref("KeyboardEvent.key")}} 値のいずれかである必要があります。
    これは大文字と小文字を区別します。

### 返値

論理値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("MouseEvent")}}
- {{domxref("KeyboardEvent.getModifierState")}}
