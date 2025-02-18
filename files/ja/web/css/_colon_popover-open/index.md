---
title: :popover-open
slug: Web/CSS/:popover-open
l10n:
  sourceCommit: 83e726344918789d680b8dfee1af5afe8f208f1d
---

{{CSSRef}}{{SeeCompatTable}}

**`:popover-open`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、{{domxref("Popover API", "ポップオーバー", "", "nocode")}}要素（すなわち [`popover` 属性](/ja/docs/Web/HTML/Global_attributes/popover)のあるもの）が表示中の状態であることを表します。これを使用して、ポップオーバー要素が表示中の場合だけスタイルを適用することができます。

## 構文

```css
:popover-open {
  /* ... */
}
```

## 例

既定では、ポップオーバーはビューポートの中央に現れます。既定のスタイルでは、UA スタイルシートでこのように実現されています。

```css
[popover] {
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: solid;
  padding: 0.25em;
  overflow: auto;
  color: CanvasText;
  background-color: Canvas;
}
```

既定値のスタイルを上書きして、ビューポートの他の場所にポップオーバーが現れるようにするには、上記のスタイルを次のように上書きする必要があります。

```css
:popover-open {
  width: 200px;
  height: 100px;
  position: absolute;
  inset: unset;
  bottom: 5px;
  right: 5px;
  margin: 0;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
