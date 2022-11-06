---
title: Gamepad.mapping
slug: Web/API/Gamepad/mapping
---

{{APIRef("Gamepad API")}}

{{domxref("Gamepad")}} インターフェイスの **`Gamepad.mapping`** プロパティは、ブラウザーがデバイスのコントロールを既知のレイアウトに再マップしたかどうかを示す文字列を返します。

現在、サポートされている既知のレイアウトは 1 つだけです – [標準のゲームパッド](https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html#remapping)。ブラウザーがデバイス上のコントロールをそのレイアウトにマッピングできる場合、 `mapping` プロパティは文字列 `standard` に設定されます。

## 構文

```
readonly    attribute DOMString           mapping;
```

## 例

```js
var gp = navigator.getGamepads()[0];
console.log(gp.mapping);
```

## 値

{{domxref("string")}} 。

## 仕様書

| 仕様                                                                                     | ステータス                   | 備考               |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName("Gamepad", "#dom-gamepad-mapping", "Gamepad.mapping")}} | {{Spec2("Gamepad")}} | Initial definition |

## ブラウザーの互換性

{{Compat("api.Gamepad.mapping")}}

## 関連情報

[Using the Gamepad API](/ja/docs/Web/Guide/API/Gamepad)
