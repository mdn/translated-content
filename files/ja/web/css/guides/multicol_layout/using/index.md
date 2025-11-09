---
title: 段組みレイアウトの使用
slug: Web/CSS/Guides/Multicol_layout/Using
original_slug: Web/CSS/CSS_multicol_layout/Using_multicol_layouts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS 段組みレイアウトモジュール** で定義されるプロパティは、ブロックレイアウトモードを拡張して、テキストの段組みを定義しやすくするものです。行が長すぎると、文章が読みづらくなるものです。行末から次の行の先頭まで目を移動する距離が長すぎると、どの行を読んでいたか見失ってしまうことがあります。大きな画面でテキストを読む際に読みやすくするため、新聞のように、横に並んでいるテキストに段組みを指定して、テキストの幅を制限しましょう。

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

コンテンツが 2 段で表示されます。

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

段組みをしたブロックでは、コンテンツは必要に応じてある段から次の段に流れます。 HTML、 CSS、 DOM 機能はすべて段組みでの編集や印刷に対応しています。

### 一括指定の columns

{{cssxref("column-count")}} と {{cssxref("column-width")}} のどちらかを使用することができます。これらのプロパティの値は重複しないので、一括指定の {{cssxref("columns")}} を使うのがふつうは便利です。

## 例 3

この例では、CSS 宣言 `column-width: 12em` は `columns: 12em` に置き換えられています。

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

{{EmbedLiveSample("例 3", "100%")}}

## 例 4

CSS 宣言 の `column-count: 4` は `columns: 4` に置き換えられます。

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

## 例 5

`column-width: 8em` と `column-count: 12` の 2 つの CSS 宣言は、 `columns: 12 8em` で置き換えることができます。一括指定の `column-count` は、表示される段の最大数です。 `column-width` は、段ごとの最小幅です。

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

段間のギャップを既定の `1em` と想定すると、コンテナーの幅が `103ems` （12 段 \* 幅 `8em` + 7 `1em` のギャップ） より広い場合、12 段ができ、各列の幅は `8ems` 以上になります。コンテナーの幅が `103ems` 未満の場合は、12 段未満になります。コンテナーの幅が `17ems` 未満 （`8em` の段 + `8em` の段 + `1em` ギャップ） の場合は、コンテンツは段のギャップのない単一の列として表示されます。

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

## まとめ

CSS の段は、レスポンシブコンテンツが広いビューポートで表示されたときに、大きなテキストブロックを読みやすくするためのレイアウトプリミティブです。想像力豊かな開発者は、特に[コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)や自動高さバランス機能と組み合わせて、さまざまな用途を見つけることができるでしょう。
