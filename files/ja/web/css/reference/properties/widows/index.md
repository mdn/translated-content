---
title: widows
slug: Web/CSS/Reference/Properties/widows
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`widows`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[ページ](/ja/docs/Web/CSS/Guides/Paged_media)、領域、[段](/ja/docs/Web/CSS/Guides/Multicol_layout)の先頭に表示されるブロックコンテナーの最小行数を設定します。

組版において、ウィドウ (_widow_) とは（段落が前のページから続いている場合に）段落の最後の行がページの先頭に単独で現れることです。

## 構文

```css
/* <integer> 値 */
widows: 2;
widows: 3;

/* グローバル値 */
widows: inherit;
widows: initial;
widows: revert;
widows: revert-layer;
widows: unset;
```

### 値

- {{cssxref("&lt;integer&gt;")}}
  - : 断片の先頭において、断片の分割の直後に単独で残ることができる最小行数です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 段のウィドウの制御

#### HTML

```html-nolint
<div>
  <p>これは幾らかのテキストを含む最初の段落です。</p>
  <p>
    これは最初の段落よりも多くのテキストを含む第二の段落です。これは widows がどの様に動作するのかを示すために用います。
  </p>
  <p>
    これは第三の段落です。これは最初の段落よりも少しだけ長いテキストを含んでいます。
  </p>
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
- [ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)
