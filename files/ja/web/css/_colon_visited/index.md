---
title: ':visited'
slug: Web/CSS/:visited
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
translation_of: Web/CSS/:visited
---
{{CSSRef}}

**`:visited`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、ユーザーがすでに訪問したリンクを表します。プライバシー上の理由から、このセレクターを使用して変更できるスタイルはとても限定されています。

```css
/* 訪問済みの <a> をすべて選択 */
a:visited {
  color: green;
}
```

`:visited` 擬似クラスによって定義されたスタイルは、少なくとも同等の仕様を持つリンク関連の擬似クラス ({{cssxref(":link")}}, {{cssxref(":hover")}}, {{cssxref(":active")}}) によって上書きされます。適切にリンクにスタイルを適用するには、 `:visited` ルールを `:link` ルールの後、 `:hover` および `:active` ルールの前に置いてください。 _LVHA 順_、 `:link` — `:visited` — `:hover` — `:active` と定義されています。

## スタイル適用の制約

プライバシー上の理由から、ブラウザ―はこの擬似クラスを使って適用できるスタイルに厳しい制限をかけています。使い方は以下の通りです。

- 利用できる CSS プロパティは、 {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }}, {{ cssxref("text-emphasis-color") }} です。
- 利用できる SVG 属性は {{SVGAttr("fill")}} と {{SVGAttr("stroke")}} です。
- 利用できるスタイルでもアルファチャンネルは無視されます。アルファチャンネルは要素の `:visited` 状態ではないものが代わりに使用されますが、アルファチャンネルが `0` であった場合は、 `:visited` で設定されたスタイルセットは全体的に無視されます。
- これらのスタイルはエンドユーザーに対する表示色を変更できるようになっていますが、 {{domxref("window.getComputedStyle")}} メソッドは嘘をつき、 `:visited` 状態ではない色の値を返します。
- [`<link>`](/ja/docs/Web/HTML/Element/link) 要素は `:visited` に一致することはありません。

> **Note:** これらの制限とその理由については、[プライバシーと :visited セレクター](/ja/docs/CSS/Privacy_and_the_:visited_selector)を参照してください。

## 構文

{{csssyntax}}

## 例

色を持っていないか透過のプロパティは、 `:visited` で変更することができません。この擬似クラスで設定するプロパティについては、ブラウザーが持っている既定値は `color` と `column-rule-color` だけでしょう。そのため、他のプロパティを変更したい場合は、 `:visited` セレクターの外で基本的な値を設定する必要があります。

### HTML

```html
<a href="#test-visited-link">このリンクを訪問しましたか？</a><br>
<a href="">このリンクはすでに訪問済みです。</a>
```

### CSS

```css
a {
  /* 該当するプロパティに不透過の既定値を設定することで、
     :visited 状態のスタイルを定義できるようにします */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プライバシーと :visited セレクター](/ja/docs/Web/CSS/Privacy_and_the_:visited_selector)
- リンク関連の擬似クラス: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
