---
title: CSS `:fullscreen` 擬似クラス
short-title: :fullscreen
slug: Web/CSS/Reference/Selectors/:fullscreen
l10n:
  sourceCommit: 8fa3309a76fe8dc4cf5e8eed97ef596a91513fbd
---

**`:fullscreen`** は [CSS](/ja/docs/Web/CSS) の [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、現在全画面モードにあるすべての要素に一致します。複数の要素が全画面モードにある場合は、それらすべてを選択します。

## 構文

```css
:fullscreen {
  /* ... */
}
```

## 使用上のメモ

`:fullscreen` 擬似クラスにより、要素が全画面と従来の表示の間を行き来した場合に、コンテンツの寸法、スタイル、レイアウトをスタイルシートで自動的に調整することができます。

## 例

### 全画面要素のスタイル設定

この例では、文書が全画面モードであるかどうかによってボタンの色が変化します。これは JavaScript でスタイルの変更を適用せずに行われます。

```html-nolint
<div class="element">
  <h1><code>:fullscreen</code> 擬似クラスのデモ</h1>

  <p>
    このデモでは、<code>:fullscreen</code> 擬似クラスを使用して、<code>.element</code> の div の背景色を自動的に変更しています。
  </p>

  <p>
    通常、背景色は薄い黄色です。全画面モードでは、背景色は薄いピンクになります。
  </p>

  <button class="toggle">全画面切り替え</button>
</div>
```

`:fullscreen` 擬似クラスは、`<div>` が全画面モードのときに、その {{cssxref("background-color")}} を上書きするために使用されます。

```css
.element {
  background-color: lightyellow;
}

.element:fullscreen {
  background-color: lightpink;
}
```

文書が全画面モードになっている場合、代わりに次の CSS が適用され、背景色に淡い赤の影を設定します。

```js
document.querySelector(".toggle").addEventListener("click", (event) => {
  if (document.fullscreenElement) {
    // 全画面要素がある場合は、全画面モードを終了する
    document.exitFullscreen();
    return;
  }
  // .element の div を全画面表示にする
  document.querySelector(".element").requestFullscreen();
});
```

```css hidden
.element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  padding: 1.2em;
}
```

{{EmbedLiveSample("Styling a fullscreen element", "", "300", "", "", "", "fullscreen")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::backdrop")}}
- {{cssxref(":xr-overlay")}}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
- [Fullscreen API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- DOM API: {{ domxref("Element.requestFullscreen()") }}, {{ domxref("Document.exitFullscreen()") }}, {{ domxref("Document.fullscreenElement") }}
- [`allowfullscreen`](/ja/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) 属性
