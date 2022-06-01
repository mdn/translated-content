---
title: widows
slug: Web/CSS/widows
tags:
  - CSS
  - CSS 断片化
  - CSS 段組みレイアウト
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.widows
translation_of: Web/CSS/widows
---
{{CSSRef}}

**`widows`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[ページ](/ja/docs/Web/CSS/Paged_Media)、領域、[段](/ja/docs/Web/CSS/CSS_Columns)の*先頭*に表示されるブロックコンテナーの最小行数を設定します。</p>

```css
/* <integer> 値 */
widows: 2;
widows: 3;

/* グローバル値 */
widows: inherit;
widows: initial;
widows: revert;
widows: unset;
```

組版において、ウィドウ (_widow_) とは (段落が前のページから続いている場合に) 段落の最後の行がページの先頭に単独で現れることです。

{{cssinfo}}

## 構文

### 値

- {{cssxref("&lt;integer&gt;")}}
  - : 区切りの後の新しい断片の先頭に残すことができる最小行数です。値は正の数である必要があります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

<h3 id="Controlling_column_widows">段のウィドウの制御</h3>

#### HTML

```html
<div>
  これは幾らかのテキストを含む最初の段落です。
  これは最初の段落よりも多くのテキストを含む第二の段落です。これはウィドウがどの様に動作するのかを示すために用います。
  これは第三の段落です。これは最初の段落よりも少しだけ長いテキストを含んでいます。
</div>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  columns: 3;
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### 結果

{{EmbedLiveSample("Controlling_column_widows", 400, 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("orphans")}}
- [ページ付きメディア](/ja/docs/Web/CSS/Paged_Media)
