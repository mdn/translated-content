---
title: "Keyboard: getLayoutMap() メソッド"
short-title: getLayoutMap()
slug: Web/API/Keyboard/getLayoutMap
l10n:
  sourceCommit: dfff3705a87cd7b40d99bd9c98ef0b5383ab4e62
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

**`getLayoutMap()`** は {{domxref("Keyboard")}} インターフェイスのメソッドで、特定の物理キーに関連付けられた文字列を取得するための関数を持つマップ風のオブジェクトである {{domxref('KeyboardLayoutMap')}} のインスタンスで解決するプロミス ({{jsxref('Promise')}}) を返します。

## 構文

```js-nolint
getLayoutMap()
```

### 引数

なし。

### 返値

{{domxref('KeyboardLayoutMap')}} のインスタンスで解決するプロミス ({{jsxref('Promise')}}) です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : 呼び出しが[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)によってブロックされた場合に発生します。

## 例

次の例は、英語の QWERTY キーボードの 'W' キーに対応するキーに関連付けられた、場所またはレイアウト固有の文字列を取得する方法を示しています。

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
