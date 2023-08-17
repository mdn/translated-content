---
title: ":focus-visible"
slug: Web/CSS/:focus-visible
---

{{CSSRef}}

**`:focus-visible`** 擬似クラスは、要素が {{CSSxRef(":focus")}} 擬似クラスに一致している時で、{{glossary("User Agent", "ユーザーエージェント")}}が要素にフォーカスを明示するべきであると推測的に判断した場合に適用されます (多くのブラウザーではこの場合、既定で「フォーカスリング」を表示します)。

このセレクターは、ユーザーの入力方法 (マウスなのかキーボードなのか) によって異なるフォーカス表示を提供したい場合に便利です。

## 構文

```
:focus-visible
```

## 例

<h3 id="Basic_example">基本的な例</h3>

この例では、`:focus-visible` セレクターはユーザーエージェントの動作を使用して照合するタイミングを判断します。マウスでそれぞれのコントロールをクリックしたときと、キーボードを使用してタブ移動したときとで、何が起こるかを比較してみてください。なお、`:focus` でスタイル付けされた要素との動作の違いに注意してください。

```html
<input value="既定のスタイル" /><br />
<button>既定のスタイル</button><br />
<input class="focus-only" value=":focus のみ" /><br />
<button class="focus-only">:focus のみ</button><br />
<input class="focus-visible-only" value=":focus-visible のみ" /><br />
<button class="focus-visible-only">:focus-visible のみ</button>
```

```css
input,
button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
```

{{EmbedLiveSample("Basic_example", "100%", 300)}}

<h3 id="Selectively_showing_the_focus_indicator">フォーカスインジケーターの選択的な表示</h3>

カスタムコントロール、例えばカスタム要素のボタンなどは、`:focus-visible` を使用してキーボードフォーカスに対してのみフォーカスインジケーターを選択的に適用することができます。これは{{htmlelement("button")}} のようなコントロールのネイティブのフォーカスの動作に一致します。

```html
<custom-button tabindex="0" role="button">クリックしてください</custom-button>
```

```css
custom-button {
  display: inline-block;
  margin: 10px;
}

custom-button:focus {
  /* Provide a fallback style for browsers
     that don't support :focus-visible */
  outline: 2px solid red;
  background: lightgrey;
}

custom-button:focus:not(:focus-visible) {
  /* Remove the focus indicator on mouse-focus for browsers
     that do support :focus-visible */
  background: transparent;
}

custom-button:focus-visible {
  /* Draw a very noticeable focus style for
     keyboard-focus on browsers that do support
     :focus-visible */
  outline: 4px dashed darkorange;
  background: transparent;
}
```

{{EmbedLiveSample("Selectively_showing_the_focus_indicator", "100%", 60)}}

## ポリフィル

`:focus-visible` のポリフィルとして [focus-visible.js](https://github.com/WICG/focus-visible) を使用することができます。

## アクセシビリティの考慮

### 弱視

視覚的なフォーカスインジケーターが、弱視の人々からも見えるように確認してください。これは外光が明るい場所 (太陽の下の屋外など) で画面を使用するすべての人にも利益になります。 [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) は、視覚的なフォーカスインジケーターを少なくとも 3:1 にすることを要求しています。

- アクセシブルな視覚的フォーカスインジケーター: [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### 認知障碍

複数の入力形式を混在させている場合、フォーカスインジケーターが表示されたり消えたりする理由は明らかではないかもしれません。認知機能に不安のあるユーザーや、技術的な知識が乏しいユーザーにとって、対話的要素の動作が一貫していないと、混乱を招く可能性があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
