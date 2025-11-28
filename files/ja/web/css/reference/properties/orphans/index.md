---
title: orphans
slug: Web/CSS/Reference/Properties/orphans
original_slug: Web/CSS/orphans
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

**`orphans`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[ページ](/ja/docs/Web/CSS/Guides/Paged_media)、領域、[段](/ja/docs/Web/CSS/Guides/Multicol_layout)の*最下部*に表示されるブロックコンテナーの最小行数を設定します。

組版において、オルファン (_orphan_) とは段落の最初の行がページの末尾に単独で現れることです。 (段落は次のページへ続きます。)

## 構文

```css
/* <integer> 値 */
orphans: 2;
orphans: 3;

/* グローバル値 */
orphans: inherit;
orphans: initial;
orphans: revert;
orphans: revert-layer;
orphans: unset;
```

### 値

- {{cssxref("&lt;integer&gt;")}}
  - : 区切りの前の新しい断片の末尾に残すことができる最小行数です。値は正の数である必要があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### オルファンを 3 行の大きさに設定

#### HTML

```html-nolint
<div>
  <p>これは幾らかのテキストを含む最初の段落です。</p>
  <p>
    これは最初の段落よりも多くのテキストを含む第二の段落です。これは orphans がどの様に動作するのかを示すために用います。
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
  height: 150px;
  columns: 3;
  orphans: 3;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### 結果

{{EmbedLiveSample("Setting_a_minimum_orphan_size_of_three_lines", 380, 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("widows")}}
- [ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)
