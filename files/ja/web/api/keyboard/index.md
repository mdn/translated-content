---
title: Keyboard
slug: Web/API/Keyboard
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

**`Keyboard`** は[キーボード API](/ja/docs/Web/API/Keyboard_API) のインターフェイスで、キーボードレイアウトマップを取得し、物理キーボードからのキー押下のキャプチャを切り替える関数を提供します。
有効なコード値のリストは [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) 仕様にあります。

{{InheritanceDiagram}}

## インスタンスプロパティ

なし。

## インスタンスメソッド

- {{domxref('Keyboard.getLayoutMap()')}} {{experimental_inline}}
  - : 特定の物理キーに関連付けられた文字列を取得するための関数を持つ、マップ風のオブジェクトである {{domxref('KeyboardLayoutMap')}} のインスタンスに解決するプロミス ({{jsxref('Promise')}}) を返します。
- {{domxref('Keyboard.lock()')}} {{experimental_inline}}
  - : 物理キーボード上の任意のキーまたはすべてのキーのキー押下のキャプチャを有効にした後、 {{jsxref('Promise')}} を返します。
- {{domxref('Keyboard.unlock()')}} {{experimental_inline}}
  - : `lock()`メソッドでキャプチャしたすべてのキーのロックを解除し、同期的に返します。

## 例

次の例は、英語の QWERTY キーボードの 'W' キーに対応するキーに関連付けられた、場所またはレイアウト固有の文字列を取得する方法を示しています。

```js
if (navigator.keyboard) {
  const keyboard = navigator.keyboard;
  keyboard.getLayoutMap().then((keyboardLayoutMap) => {
    const upKey = keyboardLayoutMap.get("KeyW");
    window.alert(`Press ${upKey} to move up.`);
  });
} else {
  // Do something else.
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
