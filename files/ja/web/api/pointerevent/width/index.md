---
title: "PointerEvent: width プロパティ"
short-title: width
slug: Web/API/PointerEvent/width
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Pointer Events") }}

**`width`** は {{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティで、CSS ピクセルで測定された、x 軸に沿ったポインターの接触形状の幅を表します。 ポインター機器のソース（指など）に応じて、特定のポインターに対して、各イベントは異なる値を生成することがあります。

入力ハードウェアが接触形状をブラウザーに報告できない場合、幅の既定値は `1` です。

## 値

このイベントの接触領域の幅（CSS ピクセル単位）。

## 例

この例では、{{domxref("PointerEvent")}} インターフェイスの `width` プロパティと {{domxref("PointerEvent.height","height")}} プロパティを使用して接触面積を計算する方法を示します。

```js
target.addEventListener(
  "pointerdown",
  (ev) => {
    // 接触面積を計算する
    const area = ev.width * ev.height;
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
