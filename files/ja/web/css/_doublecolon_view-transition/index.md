---
title: ::view-transition
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: 1a27ade8c981c8a98c8fac9881b362e881a4d236
---

{{CSSRef}}{{SeeCompatTable}}

**`::view-transition`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、[ビュー遷移](/ja/docs/Web/API/View_Transition_API)のオーバーレイのルートを表します。これはすべてのビュー遷移を含み、他のすべてのページコンテンツの最上位の上に位置します。

ビュー遷移の間、 `::view-transition` は[ビュー遷移のプロセス](/ja/docs/Web/API/View_Transition_API/Using#ビュー遷移のプロセス)で説明されているように、関連する擬似要素ツリーに含まれます。これはこのツリーの最上位ノードであり、 1 つ以上の {{cssxref("::view-transition-group")}} を子として持ちます。

`::view-transition` は UA スタイルシートでは以下の既定値が指定されています。

```css
html::view-transition {
  position: fixed;
  inset: 0;
}
```

すべての {{cssxref("::view-transition-group")}} 擬似要素は、ビュー遷移ルートに対して相対的に配置されます。

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

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
