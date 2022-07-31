---
title: letter-spacing
slug: Web/CSS/letter-spacing
tags:
  - CSS
  - CSS Property
  - CSS テキスト
  - Reference
  - SVG
  - recipe:css-property
browser-compat: css.properties.letter-spacing
---
{{CSSRef}}

**`letter-spacing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストの水平方向の字間のスペースに関する挙動を設定します。この値はテキストを描画する際に文字間の自然な空間に追加されます。 `letter-spacing` が正の値であった場合は、文字と文字の間が開き、 `letter-spacing` が負の値であった場合は、文字と文字が互いに近づきます。

{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}

## 構文

```css
/* キーワード値 */
letter-spacing: normal;

/* &lt;length&gt; 値 */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;

/* グローバル値 */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

### 値

- `normal`
  - : 現在のフォントでの通常の字間になります。 `0` の値とは異なり、この値は{{glossary("user agent", "ユーザーエージェント")}}が文字列を両端揃えするために字間を変えることを許可します。
- {{cssxref("&lt;length&gt;")}}
  - : 既定の字間に*加える*字間のスペースを指定します。負の値も指定可能ですが、実装に依存した制限があるかもしれません。ユーザーエージェントは文字列を両端揃えするために、字間スペースをさらに増減させることはありません。

## アクセシビリティの考慮

正と負のどちらでも、大きすぎる値を `letter-spacing` に指定すると読みづらくなってしまいます。正の値として大きすぎる場合、文字と文字が離れすぎるせいでひとつの単語ではなくバラバラの文字に見えてしまいます。負の値として大きすぎる場合、文字と文字が重なり合うために何が書いてあるのか分からなくなってしまいます。

フォントの文字幅は種類ごとに異なるため、読みやすい letter-spacing もそれぞれ異なります。すべてのフォントで読みやすさを提供してくれる単一の設定値というものはありません。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 国際化の考慮

書き言葉の中には、字間のスペースを適用してはいけないものがあります。例えば、アラビア文字を使用する言語では、次の例のように、つながった文字が視覚的につながったままであることが求められます。字間スペースを適用すると、テキストが壊れたように見えてしまいます。

> <p lang="ar" dir="rtl">شسيبتنمك</p>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_letter_spacing">字間の設定</h3>

#### HTML

```html
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>
```

#### CSS

```css
.normal   { letter-spacing: normal; }
.em-wide  { letter-spacing: 0.4em; }
.em-wider { letter-spacing: 1em; }
.em-tight { letter-spacing: -0.05em; }
.px-wide  { letter-spacing: 6px; }
```

#### 結果

{{ EmbedLiveSample('Setting_letter_spacing', 440, 185) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-kerning")}}
