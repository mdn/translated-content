---
title: <absolute-size>
slug: Web/CSS/absolute-size
l10n:
  sourceCommit: 2077d0702d038c9ccc743a53d8ad1c0c21fef5be
---

{{CSSRef}}

**`<absolute-size>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、絶対サイズキーワードを記述します。このデータ型は {{cssxref("font")}} の一括指定と {{cssxref("font-size")}} プロパティで使用します。

フォントサイズのキーワードは、 HTML の非推奨の `size` 属性に対応します。下記の [HTML size 属性](#html_の_size_属性)の節を参照してください。

## 構文

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### 値

`<absolute-size>` データ型は、下記の一覧から選んだキーワード値を使って定義します。

- `xx-small`

  - : 絶対サイズ `medium` の 60% のサイズです。非推奨の `size="1"` に対応します。

- `x-small`

  - : 絶対サイズ `medium` の 75% のサイズです。

- `small`

  - : 絶対サイズ `medium` の 89% のサイズです。非推奨の `size="2"` に対応します。

- `medium`

  - : ユーザーの推奨フォントサイズです。この値は中央の値として参照されます。 `size="3"` に対応します。

- `large`

  - : `medium` よりも 20% 大きな絶対サイズです。非推奨の `size="4"` に対応します。

- `x-large`

  - : `medium` よりも 50% 大きな絶対サイズです。非推奨の `size="5"` に対応します。

- `xx-large`

  - : `medium` の 2 倍の大きさの絶対サイズです。非推奨の `size="6"` に対応します。

- `xxx-large`
  - : `medium` の 3 倍の大きさの絶対サイズです。非推奨の `size="7"` に対応します。

## 解説

それぞれの `<absolute-size>` キーワードの値は、`medium` サイズや端末の解像度などの個々の端末の特性に相対したサイズになります。ユーザーエージェントは各フォントのフォントサイズの表を保持しており、 `<absolute-size>` キーワードがインデックスになっています。

CSS1 (1996) では、隣接するキーワード値のインデックス間の拡大率は 1.5 でしたが、これは大きすぎました。 CSS2 (1998) では、隣接するキーワード値インデックス間の拡大率は 1.2 になりましたが、これは小さな値において課題が残りました。隣接する絶対的な大きさのキーワード間を単一の固定比率にすることは問題があることが分かったので、固定比率の推奨はなくなりました。読み取り可能な唯一の推奨は、最小のフォントサイズが `9px` を下回らないことです。

以下の表は、それぞれの `<absolute-size>` キーワード値における拡大係数、[`<h1>` から `<h6>`](/ja/docs/Web/HTML/Element/Heading_Elements) の見出しとの対応、非推奨の [HTML の `size` 属性](#html_の_size_属性)との対応を挙げています。

| `<absolute-size>`   | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| ------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| 拡大率              | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML の見出し       | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML の `size` 属性 | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML の size 属性

HTML でフォントのサイズを設定する `size` 属性は非推奨です。属性値は `1` から `7` までの整数または相対値でした。相対値の場合は、整数の前に `+` または `-` をつけたもので、それぞれフォントサイズを大きくしたり小さくしたりするものでした。 `+1` の値は `size` を 1 つ大きくする意味、 `-2` は 2 つ小さくする意味で、計算値は最小で `1`、最大で `7` となります。

## 例

### キーワード値の比較

```html live-sample___comparing_the_keyword_values
<ul>
  <li class="xx-small">font-size: xx-small;</li>
  <li class="x-small">font-size: x-small;</li>
  <li class="small">font-size: small;</li>
  <li class="medium">font-size: medium;</li>
  <li class="large">font-size: large;</li>
  <li class="x-large">font-size: x-large;</li>
  <li class="xx-large">font-size: xx-large;</li>
  <li class="xxx-large">font-size: xxx-large;</li>
</ul>
```

```css live-sample___comparing_the_keyword_values
li {
  margin-bottom: 0.3em;
}
.xx-small {
  font-size: xx-small;
}
.x-small {
  font-size: x-small;
}
.small {
  font-size: small;
}
.medium {
  font-size: medium;
}
.large {
  font-size: large;
}
.x-large {
  font-size: x-large;
}
.xx-large {
  font-size: xx-large;
}
.xxx-large {
  font-size: xxx-large;
}
```

#### 結果

{{EmbedLiveSample('Comparing the keyword values', '100%', 400)}}

## 仕様書

{{Specifications}}

## 関連情報

- CSS の {{cssxref("relative-size")}} データ型
- CSS の {{cssxref("font")}} および {{cssxref("font-size")}} プロパティ
- [CSS フォント](/ja/docs/Web/CSS/CSS_fonts)モジュール
