---
title: text-emphasis-style
slug: Web/CSS/text-emphasis-style
tags:
  - CSS
  - CSS プロパティ
  - CSS テキスト装飾
  - Reference
  - recipe:css-property
browser-compat: css.properties.text-emphasis-style
translation_of: Web/CSS/text-emphasis-style
---
{{CSSRef}}

**`text-emphasis-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、圏点の表示を設定します。設定やリセットに一括指定の {{cssxref("text-emphasis")}} を使用することもできます。

```css
/* 初期値 */
text-emphasis-style: none; /* 圏点なし */

/* <string> 値 */
text-emphasis-style: 'x';
text-emphasis-style: '点';
text-emphasis-style: '\25B2';
text-emphasis-style: '*';
text-emphasis-style: 'foo'; /* 使用するべきではない。計算されるか 'f' のみが表示される */

/* キーワード値 */
text-emphasis-style: filled;
text-emphasis-style: open;
text-emphasis-style: dot;
text-emphasis-style: circle;
text-emphasis-style: double-circle;
text-emphasis-style: triangle;
text-emphasis-style: filled sesame;
text-emphasis-style: open sesame;

/* グローバル値 */
text-emphasis-style: inherit;
text-emphasis-style: initial;
text-emphasis-style: revert;
text-emphasis-style: unset;
```

## 構文

### 値

- `none`
  - : 圏点なし。
- `filled`
  - : 図形は単色で塗りつぶされます。 `filled` も `open` も指定されない場合は、これが既定値です。
- `open`
  - : 図形は中抜きになります。
- `dot`
  - : 記号として小さな円を表示します。 filled dot は `'•'` (`U+2022`)、 open dot は `'◦'` (`U+25E6`) です。
- `circle`
  - : 記号として大きな円を表示します。 filled circle は `'●'` (`U+25CF`)、 open circle は `'○'` (`U+25CB`) です。
- `double-circle`
  - : 記号として二重丸を表示します。 filled double-circle は `'◉'` (`U+25C9`)、 open double-circle は `'◎'` (`U+25CE`) です。
- `triangle`
  - : 記号として三角形を表示します。 filled triangle は `'▲'` (`U+25B2`)、 open triangle は `'△'` (`U+25B3`) です。
- `sesame`
  - : 記号としてゴマを表示します。 filled sesame は `'﹅'` (`U+FE45`)、 open sesame は `'﹆'` (`U+FE46`) です。
- `<string>`
  - : 記号として文字列を表示します。`<string>` には 1 *文字*を超える文字列を指定しないでください。ユーザーエージェントは、2 文字以上の書記素クラスターから構成される文字列を短縮したり無視したりする可能性があります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## Examples

### 基本的な例

```css
h2 {
  -webkit-text-emphasis-style: sesame;
  text-emphasis-style: sesame;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連プロパティ: {{cssxref('text-emphasis-color')}}, {{cssxref('text-emphasis')}}
- 圏点の位置の定義を可能にする {{cssxref('text-emphasis-position')}} プロパティ
