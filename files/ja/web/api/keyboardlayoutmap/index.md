---
title: KeyboardLayoutMap
slug: Web/API/KeyboardLayoutMap
l10n:
  sourceCommit: e18aa8e600733ebc25443075c563fd56361dfe98
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

**`KeyboardLayoutMap`** は[キーボード API](/ja/docs/Web/API/Keyboard_API) のインターフェイスで、読み取り専用のオブジェクトであり、特定の物理キーに関連付けられた文字列を取得するための関数を備えています。

`KeyboardLayoutMap` インスタンスは読み取り専用の [`Map` 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map#map_風のブラウザー_api)であり、各キーはキーボード上の固有の物理キーを識別する文字列（「キーコード」）であり、対応する値は関連するキー属性値（キーボードレイアウトナドによって影響を受ける可能性があります）です。

有効なキーの一覧は [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) 仕様にあります。

## インスタンスプロパティ

- {{domxref('KeyboardLayoutMap.entries')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 指定されたオブジェクト自身の列挙可能なプロパティ `[key, value]` ペアの配列を、 {{jsxref("Statements/for...in", "for...in")}} ループで指定されたものと同じ順序で返します（`for-in` ループでは、プロトタイプチェーン内のプロパティも列挙される点が異なります）。
- {{domxref('KeyboardLayoutMap.keys')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 配列の各インデックスのキーを格納した新しい配列イテレーターオブジェクトを返します。
- {{domxref('KeyboardLayoutMap.size')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : `KeyboardLayoutMap` オブジェクトの要素数を返します。
- {{domxref('KeyboardLayoutMap.values')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : `KeyboardLayoutMap` オブジェクトの各インデックスの値を格納した新しい配列イテレーターオブジェクトを返します。

## インスタンスメソッド

- {{domxref('KeyboardLayoutMap.forEach()')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 指定された関数を `KeyboardLayoutMap` の各要素に対して一度ずつだけ実行します。
- {{domxref('KeyboardLayoutMap.get()')}} {{experimental_inline}}
  - : `KeyboardLayoutMap` オブジェクトから、指定されたキーを持つ要素を返します。
- {{domxref('KeyboardLayoutMap.has()')}} {{experimental_inline}}
  - : `KeyboardLayoutMap` オブジェクトに指定したキーを持つ要素があるかどうかを示す論理値を返します。

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
