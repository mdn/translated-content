---
title: "KeyboardLayoutMap: get() メソッド"
short-title: get()
slug: Web/API/KeyboardLayoutMap/get
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

**`get()`** は {{domxref('KeyboardLayoutMap')}} インターフェイスのメソッドで、指定されたキーの要素を返します。

有効なキーの一覧は [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) 仕様にあります。

## 構文

```js-nolint
get(key)
```

### 引数

- `key`
  - : マップから返す項目のキーです。

### 返値

指定したキーの値です。

## 例

次の例は、英語の QWERTY キーボードの 'W' キーに対応する場所またはレイアウトに依存した文字列を取得する方法を示しています。

```js
const keyboard = navigator.keyboard;
keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  const upKey = keyboardLayoutMap.get("KeyW");
  window.alert(`Press ${upKey} to move up.`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
