---
title: 分割ナビゲーション
slug: Web/CSS/How_to/Layout_cookbook/Split_navigation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**分割ナビゲーション**とは、1 つまたは複数の要素が、他のナビゲーションアイテムから分離されているナビゲーションパターンのことです。

![2 つのグループに分けられたアイテム。](split-navigation.png)

## 要件

よくあるナビゲーションのパターンとして、ある要素を他の要素から離すというものがあります。フレックスボックスを使用すると、アイテムを 2 つに分けて別々のフレックスコンテナーに入れることなく、これを実現することができます。

## レシピ

以下のコードブロックの "Play" をクリックすると、この例を MDN Playground で開きます。

```html live-sample___split-navigation-example
<nav>
  <ul class="main-nav">
    <li><a href="">About</a></li>
    <li><a href="">Products</a></li>
    <li><a href="">Our Team</a></li>
    <li class="push"><a href="">Contact</a></li>
  </ul>
</nav>
```

```css live-sample___split-navigation-example
.main-nav {
  margin: 0;
  padding: 0;
  list-style: none;
  font: 1.2em sans-serif;

  display: flex;
}

.main-nav a {
  padding: 0.5em 1em;
  display: block;
}

.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("split-navigation-example")}}

## 選択したもの

このパターンは、自動マージンとフレックスボックスを組み合わせてアイテムを分割します。

マージンを auto にすると、適用される方向に利用可能なすべての空間を吸収します。 これは、 auto マージンを使ってブロックを中央に配置するのと同じ方法です。ブロックの両側にすべての空間を取ろうとするので、ブロックが中央に押し込まれます。

この場合、 auto の左マージンは利用可能な空間をすべて占め、アイテムを右に押します。リスト内の任意のアイテムにクラス `push` を適用することができます。

## 関連情報

- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)
- {{cssxref("display")}} プロパティ
- {{cssxref("margin")}} プロパティ
