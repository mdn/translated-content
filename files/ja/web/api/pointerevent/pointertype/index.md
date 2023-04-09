---
title: PointerEvent.pointerType
slug: Web/API/PointerEvent/pointerType
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{ APIRef("Pointer Events") }}

**`pointerType`** は {{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティで、特定のポインターイベントを引き起こした機器の種類（マウス、ペン、またはタッチ）を示します。

## 値

このイベントのポインターの種類です。対応している値は以下の文字列です。

- `"mouse"`
  - : このイベントはマウス機器によって生成されました。
- `"pen"`
  - : このイベントはペン機器またはスタイラス機器によって生成されました。
- `"touch"`
  - : このイベントは指などのタッチによって生成されました。

機器の種類がブラウザーで検出できない場合、値は空の文字列 (`""`) になります。 ブラウザーが上記以外のポインター機器の種類に対応している場合は、他の種類の機器と名前が競合しないように、値に *ベンダー接頭辞* をつける必要があります。

## 例

この例は、`pointerType` プロパティの値を使用して適切なポインターの種類の処理関数を呼び出す方法を示しています。

```js
  targetElement.addEventListener(
  "pointerdown",
  (event) => {
    // 適切なポインターの種類のハンドラーを呼び出す
    switch (event.pointerType) {
      case "mouse":
        process_pointer_mouse(event);
        break;
      case "pen":
        process_pointer_pen(event);
        break;
      case "touch":
        process_pointer_touch(event);
        break;
      default:
        console.log(`pointerType ${event.pointerType} には対応していません`);
    }
  },
  false
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
