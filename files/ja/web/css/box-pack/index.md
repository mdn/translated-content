---
title: box-pack
slug: Web/CSS/box-pack
tags:
  - CSS
  - CSS プロパティ
  - 標準外
  - リファレンス
  - box-pack
  - recipe:css-property
browser-compat: css.properties.box-pack
translation_of: Web/CSS/box-pack
---
{{CSSRef}}{{Non-standard_header}}

> **Warning:** これはもともと CSS Flexible Box Layout Module の草稿のプロパティでしたが、より新しい標準に置き換えられました。現在の標準についての情報は[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)を参照してください。

**`-moz-box-pack`** および **`-webkit-box-pack`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 `-moz-box` または `-webkit-box` がどのようにレイアウトの方向に内容をまとめるかを指定します。この効果はボックス内に空間がある場合のみ見ることができます。

```css
/* キーワード値 */
box-pack: start;
box-pack: center;
box-pack: end;
box-pack: justify;

/* グローバル値 */
box-pack: inherit;
box-pack: initial;
box-pack: unset;
```

レイアウトの方向は要素の方向、 horizontal または vertical に依存します。

## 構文

`box-pack` プロパティは、以下に列挙されたキーワード値のうちの一つで指定します。

### 値

- `start`
  - : ボックスは内容を先頭にまとめ、残りの空間を末尾に残します。
- `center`
  - : ボックスは内容を中央にまとめ、残りの空間を先頭と末尾に均等に分配します。
- `end`
  - : ボックスは内容を末尾にまとめ、残りの空間を先頭に残します。
- `justify`
  - : 空間はそれぞれの子の間に均等に配分され、最初の子の前と最後の子の後には空間が配置されません。子が一つだけであれば、値が `start` であるのと同様に扱われます。

## メモ

ボックスの向きや方向によって、まとめる際に指定するボックスの端は異なります。

- 水平方向の要素の場合、_start_ は上端になります。
- 垂直方向の要素の場合、_start_ は左端になります。

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th><strong>Normal</strong></th>
      <th><strong>Reverse</strong></th>
    </tr>
    <tr>
      <th><strong>Horizontal</strong></th>
      <td>left</td>
      <td>right</td>
    </tr>
    <tr>
      <th><strong>Vertical</strong></th>
      <td>top</td>
      <td>bottom</td>
    </tr>
  </tbody>
</table>

start と反対の端は _end_ で表されます。

まとめ方が要素の `pack` 属性を使用して設定されていた場合は、スタイルは無視されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

## box-pack の例

```css
div.example {
  border-style: solid;

  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  /* このボックスを子よりも高くし、
     box-pack のための余裕を作る */
  height: 300px;
  /* このボックスを、水平方向に中央揃えされた
     内容を表示するのに十分な幅にする */
  width: 300px;

  /* 子を垂直方向に並べる */
  -moz-box-orient: vertical; /* Mozilla */
  -webkit-box-orient: vertical; /* WebKit */

  /* 子をこのボックスの水平方向に中央揃えする */
  -moz-box-align: center; /* Mozilla */
  -webkit-box-align: center; /* WebKit */

  /* 子をこのボックスの下にまとめる */
  -moz-box-pack: end;             /* Mozilla */
  -webkit-box-pack: end;          /* WebKit */
}

div.example p {
  /* 子を親より狭くして、
     box-align のための余裕を作る */
  width: 200px;
}
```

```html
<div class="example">
  <p>I will be second from the bottom of div.example, centered horizontally.</p>
  <p>I will be on the bottom of div.example, centered horizontally.</p>
</div>
```

{{EmbedLiveSample('Examples', 310, 310)}}

## 仕様書

標準仕様には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-align")}}
