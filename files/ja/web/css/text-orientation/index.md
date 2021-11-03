---
title: text-orientation
slug: Web/CSS/text-orientation
tags:
  - CSS
  - CSS プロパティ
  - CSS Writing Modes
  - Reference
  - recipe:css-property
  - 日本語処理
browser-compat: css.properties.text-orientation
translation_of: Web/CSS/text-orientation
---
{{CSSRef}}

**`text-orientation`** は [CSS](/ja/docs/Web/CSS) のプロパティで、行内のテキストの向きを設定します。このプロパティは縦書きのテキスト ({{cssxref("writing-mode")}} が `horizontal-tb` 以外の場合) でのみ効果があります。これは縦書きを使用する言語の表示を制御したり、縦書きの表見出しを作成したりするのに有用です。

{{EmbedInteractiveExample("pages/css/text-orientation.html")}}

## 構文

```css
/* キーワード値 */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* グローバル値 */
text-orientation: inherit;
text-orientation: initial;
text-orientation: initial;
text-orientation: unset;
```

`text-orientation` プロパティは、以下のリストから単一のキーワードとして指定されます。

### 値

- `mixed`
  - : 横書き用の文字を右に 90° 回転させ、縦書き用の文字は自然に配置します。既定値です。
- `upright`
  - : 横書き用の文字を、縦書き用の字形と同様に自然に (正立で) 配置します。なお、このキーワードはすべての文字を左書きと見なします。 {{cssxref("direction")}} の使用値は `ltr` に強制されます。
- `sideways`
  - : 全行を横書きで書いて 90° 回転したように配置します。
- `sideways-right`
  - : `sideways` の別名です。これは互換性のために維持されています。
- `use-glyph-orientation`
  - : SVG 要素上で、非推奨の SVG プロパティ `glyph-orientation-vertical` と `glyph-orientation-horizontal` の値を使用します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<p>Lorem ipsum dolet semper quisquam.</p>
```

### CSS

```css
p {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の縦書きに関連する CSS プロパティ: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, {{cssxref("unicode-bidi")}}
- [CSS 論理的プロパティ](/ja/docs/Web/CSS/CSS_Logical_Properties)
- [縦書きテキストのスタイル付け (中国語、日本語、韓国語、モンゴル語)](https://www.w3.org/International/articles/vertical-text/)
- 広範なブラウザーの対応状況のテスト結果: <https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation>
