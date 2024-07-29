---
title: "::view-transition"
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: 1a27ade8c981c8a98c8fac9881b362e881a4d236
---

{{CSSRef}}{{SeeCompatTable}}

**`::view-transition`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、[ビュートランジション](/ja/docs/Web/API/View_Transitions_API)のオーバーレイのルートを表します。これはすべてのビュートランジションを含み、他のすべてのページコンテンツの最上位の上に位置します。

ビュートランジションの間、 `::view-transition` は[ビュートランジションのプロセス](/ja/docs/Web/API/View_Transitions_API#the_view_transition_process)で説明されているように、関連する擬似要素ツリーに含まれます。これはこのツリーの最上位ノードであり、 1 つ以上の {{cssxref("::view-transition-group")}} を子として持ちます。

`::view-transition` は UA スタイルシートでは以下の既定値が指定されています。

```css
html::view-transition {
  position: fixed;
  inset: 0;
}
```

すべての {{cssxref("::view-transition-group")}} 擬似要素は、ビュートランジションルートに対して相対的に配置されます。

## 構文

```css
::view-transition {
  /* ... */
}
```

## 例

```css
::view-transition {
  background-color: rgba(0, 0, 0, 0.25);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュートランジション API](/ja/docs/Web/API/View_Transitions_API)
- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
