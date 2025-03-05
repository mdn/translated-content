---
title: <relative-size>
slug: Web/CSS/relative-size
l10n:
  sourceCommit: e97c79b17d685c08bef41ffc0b6c2f9e5ddc42f4
---

{{CSSRef}}

**`<relative-size>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、相対サイズのキーワードを記述します。 `<relative-size>` キーワードは、親要素の計算サイズからの相対サイズを定義します。このデータ型は {{cssxref("font")}} の一括指定と {{cssxref("font-size")}} プロパティで使用します。

## 構文

```plain
<relative-size> = smaller | larger
```

### 値

データ型 `<relative-size>` は下記の一覧からキーワード値を選んで定義します。

- `smaller`

  - : 継承サイズより一回り小さい相対サイズ。

- `larger`

  - : 継承サイズより一回り大きい相対サイズ。

## 解説

`<relative-size>` キーワードは要素の現在のサイズからの相対サイズです。継承サイズが {{cssxref("absolute-size")}} キーワードを使用して定義されている場合、 `<relative-size>` 値は [`<absolute-size>` 表](/ja/docs/Web/CSS/absolute-size#解説)の隣接サイズと等しくなります。それ以外の場合、相対的なサイズの増減は 120% から 150% の間になります。

## 例

### キーワード値の比較

```html live-sample___comparing_the_keyword_values
<ul>
  <li class="smaller">font-size: smaller;</li>
  <li>font-size が指定されていない</li>
  <li class="larger">font-size: larger;</li>
</ul>
```

```css live-sample___comparing_the_keyword_values
li {
  margin-bottom: 0.3em;
}
.smaller {
  font-size: smaller;
}
.larger {
  font-size: larger;
}
```

#### 結果

{{EmbedLiveSample('Comparing the keyword values', '100%', 100)}}

## 仕様書

{{Specifications}}

## 関連情報

- CSS の {{cssxref("absolute-size")}} データ型
- CSS の {{cssxref("font")}} および {{cssxref("font-size")}} プロパティ
- [CSS フォント](/ja/docs/Web/CSS/CSS_fonts)モジュール
