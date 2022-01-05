---
title: ':focus'
slug: 'Web/CSS/:focus'
tags:
  - ':focus'
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.focus
translation_of: 'Web/CSS/:focus'
---
{{CSSRef}}

**`:focus`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、フォーカスを持っている (フォームの input のような) 要素を表します。普通はユーザーが要素をクリックやタップをしたり、キーボードの <kbd>Tab</kbd> キーで選択したりしたときです。

```css
/* フォーカスを持つ <input> 要素を選択 */
input:focus {
  color: red;
}
```

> **Note:** この擬似クラスはフォーカスを持つ要素に対してのみ適用されます。フォーカスを持つ要素を*含む*要素を選択したい場合は、{{CSSxRef(":focus-within")}} を使用してください。

## 構文

{{CSSSyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<div><input class="red-input" value="フォーカスで赤くなります。"></div>
<div><input class="blue-input" value="フォーカスで青くなります。"></div>
```

### CSS

```css
.red-input:focus {
  background: yellow;
  color: red;
}

.blue-input:focus {
  background: yellow;
  color: blue;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## アクセシビリティの考慮

視覚的なフォーカスインジケーターが、弱視の人々からも見えるように確認してください。これは外光が明るい場所 (太陽の下の屋外など) で画面を使用するすべての人にも利益になります。 [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) は、視覚的なフォーカスインジケーターを少なくとも 3:1 にすることを要求しています。

- Accessible Visual Focus Indicators: [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

[WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) を満たすフォーカスの輪郭線で置き換えることなしに、フォーカスの輪郭線 (視覚的なフォーカスインジケーター) を削除しないでください。

- Quick Tip: [Never remove CSS outlines](https://a11yproject.com/posts/never-remove-css-outlines/)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
