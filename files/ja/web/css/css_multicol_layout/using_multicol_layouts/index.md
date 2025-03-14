---
title: 段組みレイアウトの使用
slug: Web/CSS/CSS_multicol_layout/Using_multicol_layouts
---

{{CSSRef}}

CSS の**段組みレイアウト** (Multi-column Layout) は、*ブロックレイアウトモード*を拡張して、文章の段組みを定義しやすくするものです。行が長すぎると、文章が読みづらくなるものです。行末から次の行の先頭まで目を移動する距離が長すぎると、どの行を読んでいたか見失ってしまうことがあります。したがって、大きな画面を最大限に活用するためには、新聞のように幅が狭い段を並べた方が適切です。

残念ながら、 CSS と HTML では位置を指定してで段を区切ったり、文章に許されるマークアップを厳重に制限したり、大げさなスクリプトを使用したりしなければ実現できません。この制限は、従来のブロックレイアウトモードを拡張する新しい CSS プロパティを追加することで解決します。

## 段組みの使用

### 段の数と幅

2 つの CSS プロパティ、 {{cssxref("column-count")}} と {{cssxref("column-width")}} で、段組みをするかどうか、段数をいくつにするかを制御します。

`column-count` プロパティで、段数を特定の数に設定します。例えば以下のようにします。

## 例 1

### HTML

```html
<div id="col">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </p>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur.
  </p>
  <p>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.
  </p>
</div>
```

### CSS

```css
#col {
  column-count: 2;
}
```

### 結果

内容が（段組み対応のブラウザーを使用していれば）2 段で表示されます。

{{EmbedLiveSample("Example_1", "100%")}}

`column-width` プロパティは最小限ほしい段の幅を設定します。 `column-count` の値が一緒に設定されていない場合は、ブラウザーは有効な幅に収まるできるだけ多くの段を自動的に作成します。

## 例 2

### HTML

```html
<div id="wid">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#wid {
  column-width: 100px;
}
```

### 結果

{{EmbedLiveSample("Example_2", "100%")}}

より厳密な詳細については、 [CSS3 仕様書](https://www.w3.org/TR/css-multicol-1/)で説明されています。

段組みをしたブロックでは、コンテンツは必要に応じてある段から次の段に流れます。 HTML、 CSS、 DOM 機能はすべて段組みでの編集や印刷に対応しています。

### 一括指定の columns

たいていの場合、ウェブデザイナーは {{cssxref("column-count")}} と {{cssxref("column-width")}} の 2 つのうち 1 つを使用します。これらのプロパティの値は重複しないので、一括指定の {{cssxref("columns")}} を使うのがふつうは便利です。例えば以下のようにします。

CSS 宣言の `column-width: 12em` は `columns: 12em` に置き換えることができます。

## 例 3

### HTML

```html
<div id="col_short">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#col_short {
  columns: 12em;
}
```

### 結果

{{EmbedLiveSample("Example_3", "100%")}}

CSS 宣言 の `column-count: 4` は `columns: 4` に置き換えられます。

## 例 4

### HTML

```html
<div id="columns_4">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#columns_4 {
  columns: 4;
}
```

### 結果

{{EmbedLiveSample("Example_4", "100%")}}

`column-width: 8em` と `column-count: 12` の 2 つの CSS 宣言は、 `columns: 12 8em` で置き換えることができます。

## 例 5

### HTML

```html
<div id="columns_12">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#columns_12 {
  columns: 12 8em;
}
```

### 結果

{{EmbedLiveSample("Example_5", "100%")}}

### 高さの均衡

CSS の段組みでは、段の高さが揃っていなければならないとされています。つまり、ブラウザーは自動的に段の高さの最大値を設定し、各段のコンテンツの高さはおよそ同じになります。 Firefox はこれを行っています。

しかし、場合によっては段の高さの最大値を明示的に設定し、コンテンツを最初の段から配置して必要に応じていくつもの段を作成し、右に流れることができるようにすることが有用であることもあります。従って、段組みブロックに CSS の {{cssxref("height")}} または {{cssxref("max-height")}} プロパティを設定することで高さを制限すると、それぞれの段は新しい段を追加する前にその高さまで伸びていきます。このモードはレイアウトではるかに効率的です。

### 段間

段と段の間には隙間があります。推奨される既定値は `1em` です。この寸法は段組みブロックに {{cssxref("column-gap")}} プロパティを適用することで変更することができます。

## 例 6

### HTML

```html
<div id="column_gap">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#column_gap {
  column-count: 5;
  column-gap: 2em;
}
```

### 結果

{{EmbedLiveSample("Example_6", "100%")}}

## グレイスフルデグラデーション

段組みのプロパティは、段組みに対応していないブラウザーでは単に無視されます。従って、そのようなブラウザーでは一列で表示し、対応しているブラウザーでは段組みを行うというレイアウトが比較的簡単に作成できます。

## まとめ

CSS の段組みは、ウェブ開発者が画面の資産を最大限に活用できるようにするためのレイアウト方法です。想像的な開発者は、特に自動的に高さを調整する機能を利用して、様々な利用方法を見つけるでしょう。
