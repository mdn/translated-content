---
title: "MouseEvent: getModifierState() メソッド"
short-title: getModifierState()
slug: Web/API/MouseEvent/getModifierState
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
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
    値は修飾キーを表す {{domxref("KeyboardEvent.key")}} 値のいずれか、または `"Accel"` {{deprecated_inline}} である必要があります。
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
