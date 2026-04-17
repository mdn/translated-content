---
title: :active-view-transition
slug: Web/CSS/Reference/Selectors/:active-view-transition
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`:active-view-transition`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、[ビュー遷移](/ja/docs/Web/API/View_Transition_API#concepts_and_usage)が進行中（_アクティブ_）であるときに文書のルート要素に一致し、遷移が完了すると一致しなくなります。

## 構文

```css
:root:active-view-transition ... {
  /* ... */
}
```

## 例

### アクティブなビュー遷移のスタイル設定

この例は、`startViewTransition` ページの[基本的なビュー遷移の例](/ja/docs/Web/API/Document/startViewTransition#basic_usage)を拡張したものです。

```html
<main>
  <section class="color">
    <h2>色が変化中</h2>
  </section>
  <button id="change-color">色を変更</button>
</main>
```

`<h2>` 要素は、初期状態では `display: none` というスタイルが設定されていますが、`:active-view-transition` 擬似クラスによって上書きされ、`<h2>` のスタイルが `display: block` に設定されます。
ビュー遷移が行われている間、`visibility: hidden` を使用してボタンが非表示になります。

```css hidden
html {
  --bg: indigo;
}
main {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
section {
  background-color: var(--bg);
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
::view-transition-group(root) {
  animation-duration: 2s;
}
```

```css
h2 {
  display: none;
  color: white;
}
:root:active-view-transition h2 {
  display: block;
}
:root:active-view-transition button {
  visibility: hidden;
}
```

```js hidden
const colors = ["darkred", "darkslateblue", "darkgreen"];
const colBlock = document.querySelector(".color");
let count = 0;
const updateColour = () => {
  colBlock.style = `--bg: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};
const changeColor = () => {
  if (!document.startViewTransition) {
    updateColour();
    return;
  }
  const transition = document.startViewTransition(() => {
    updateColour();
  });
};
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor);
changeColorButton.addEventListener("keypress", changeColor);
```

{{EmbedLiveSample('showing_view_transition_is_running', '100%', '120')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":active-view-transition-type()")}} 擬似クラス
- [`startViewTransition()`](/ja/docs/Web/API/Document/startViewTransition) メソッド
- {{domxref("Document.activeViewTransition")}}
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)
- [ビュー遷移型の使用](/ja/docs/Web/API/View_Transition_API/Using_types)
