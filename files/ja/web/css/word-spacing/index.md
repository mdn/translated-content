---
title: word-spacing
slug: Web/CSS/word-spacing
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
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

/* グローバル値 */
word-spacing: inherit;
word-spacing: initial;
word-spacing: revert;
word-spacing: revert-layer;
word-spacing: unset;
```

### 値

- `normal`
  - : 現在のフォントやブラウザー―で定義された普通の単語の間隔です。
- {{cssxref("length")}}
  - : フォントによって定義された単語の間隔に追加する間隔を定義します。

## アクセシビリティ

`word-spacing` 値を大きな生または負の値にすると、スタイル設定が適用された文が読みにくくなります。とても大きな正の値でスタイル設定されたテキストでは、単語が離れすぎてしまい、文として現れなくなります。大きな負の値でスタイル設定されたテキストでは、単語が互いに重なり合い、各単語の始めと終わりが認識できなくなります。

読みやすい `word-spacing` は、フォントファミリーごとに文字幅が異なるため、案件ごとに決定する必要があります。 すべてのフォントファミリーで読みやすさを自動的に保証する値は存在しません。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 例

### HTML

```html
<div id="mozdiv1">Lorem ipsum dolor sit amet.</div>
<div id="mozdiv2">Lorem ipsum dolor sit amet.</div>
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
