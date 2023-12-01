---
title: ":fullscreen"
slug: Web/CSS/:fullscreen
---

{{CSSRef}}

**`:fullscreen`** は [CSS](/ja/docs/Web/CSS) の [擬似クラス](/ja/docs/CSS/Pseudo-classes)で、現在全画面モードにあるすべての要素に一致します。複数の要素が全画面モードにある場合は、それらすべてを選択します。

## 構文

```
:fullscreen
```

## 使用上のメモ

`:fullscreen` 擬似クラスにより、要素が全画面と従来の表示の間を行き来した場合に、コンテンツの寸法、スタイル、レイアウトをスタイルシートで自動的に調整することができます。

## 例

この例では、文書が全画面モードであるかどうかによってボタンの色が変化します。これは JavaScript でスタイルの変更を適用せずに行われます。

### HTML

ページの HTML は次のようなものです。

```html
<h1>MDN Web Docs Demo: :fullscreen pseudo-class</h1>

<p>
  This demo uses the <code>:fullscreen</code> pseudo-class to automatically
  change the style of a button used to toggle full-screen mode on and off,
  entirely using CSS.
</p>

<button id="fs-toggle">Toggle Fullscreen</button>
```

`"fs-toggle"` の ID を持った {{HTMLElement("button")}} が、文書が全画面モードであるかどうかによって淡い赤と淡い緑の間で変化します。

### CSS

魔法は CSS で起こります。ここでは二つの規則があります。最初のものは要素が全画面状態でない場合に「Toggle Full-screen Mode」ボタンの色の背景を設定します。鍵になるのは `:not(:fullscreen)` を使用していることで、 `:fullscreen` 擬似クラスが適用されない要素を探します。

```css
#fs-toggle:not(:fullscreen) {
  background-color: #afa;
}
```

文書が全画面モードになっている場合、代わりに次の CSS が適用され、背景色に淡い赤の影を設定します。

```css
#fs-toggle:fullscreen {
  background-color: #faa;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref(":not")}}
- {{cssxref("::backdrop")}}
- DOM API: {{ domxref("Element.requestFullscreen()") }}, {{ domxref("Document.exitFullscreen()") }}, {{ domxref("Document.fullscreenElement") }}
- [`allowfullscreen`](/ja/docs/Web/HTML/Element/iframe#allowfullscreen) 属性
