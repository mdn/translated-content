---
title: word-spacing
slug: Web/CSS/word-spacing
tags:
  - CSS
  - CSS プロパティ
  - CSS テキスト
  - Reference
  - recipe:css-property
browser-compat: css.properties.word-spacing
translation_of: Web/CSS/word-spacing
---
{{CSSRef}}

**`word-spacing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、タグや単語の間隔に関する挙動を指定します。

{{EmbedInteractiveExample("pages/css/word-spacing.html")}}

## 構文

```css
/* キーワード値 */
word-spacing: normal;

/* <length> 値 */
word-spacing: 3px;
word-spacing: 0.3em;

/* <percentage> 値 */
word-spacing: 50%;
word-spacing: 200%;

/* グローバル値 */
word-spacing: inherit;
word-spacing: initial;
word-spacing: revert;
word-spacing: unset;
```

### 値

- `normal`
  - : 現在のフォントやブラウザ―で定義された普通の単語の間隔です。
- {{cssxref("length")}}
  - : フォントによって定義された単語の間隔に追加する間隔を定義します。
- {{cssxref("percentage")}}
  - : 文字の advance width を基準とした追加する間隔の量をパーセント値で指定します。

<h2 id="Examples">例</h2>

### HTML

```html
<div id="mozdiv1">Here are many words...</div>
<div id="mozdiv2">...and many more!</div>
```

### CSS

```css
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

{{ EmbedLiveSample('Examples') }}

## アクセシビリティの考慮

`word-spacing` で大きな正の値や負の値を設定すると、スタイルが適用される文が読めなくなります。テキストをとても大きな正の値でスタイル付けすると、単語間が離れすぎて文として表示されなくなります。大きな負の数でスタイル付けすると、それぞれの単語の先頭と末尾が互いに重複して、理解できなくなります。

フォントファミリーによって文字の幅が異なるため、読みやすい `word-spacing` は場面によって検討する必要があります。すべてのフォントファミリーで自動的に読みやすさを調整する単一の値はありません。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("letter-spacing")}}
