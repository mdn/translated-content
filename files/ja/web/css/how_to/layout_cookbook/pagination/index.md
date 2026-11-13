---
title: ページ切り替え
slug: Web/CSS/How_to/Layout_cookbook/Pagination
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

この料理帳のパターンは、ページ切り替え (pagination) を表示するために使用されるナビゲーションのパターンを示し、ユーザーは検索結果などのコンテンツのページ間を移動できます。

![ページ切り替えリスト内のページのセットへのリンク](pagination.png)

## 要件

スクリーンリーダーを使用している人がページ切り替えであることを理解できるようにするために、項目を {{htmlelement("nav")}} 要素内のリストとしてマークアップし、CSS を使用してレイアウトを視覚的に 1 行で表示します。

通常、ページ切り替えのコンポーネントはコンテンツの下側にあり、水平方向の中央に配置されます。

## レシピ

以下のコードブロックの "Play" をクリックすると、この例を MDN Playground で開きます。

```html live-sample___pagination-example
<nav aria-label="pagination">
  <ul class="pagination">
    <li>
      <a href="">
        <span aria-hidden="true">&laquo;</span>
        <span class="visuallyhidden">前のページ</span>
      </a>
    </li>
    <li>
      <a href=""><span class="visuallyhidden">ページ </span>1</a>
    </li>
    <li>
      <a href="" aria-current="page">
        <span class="visuallyhidden">ページ </span>2
      </a>
    </li>
    <li>
      <a href=""> <span class="visuallyhidden">ページ </span>3 </a>
    </li>
    <li>
      <a href=""> <span class="visuallyhidden">ページ </span>4 </a>
    </li>
    <li>
      <a href="">
        <span class="visuallyhidden">後のページ</span
        ><span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

```css live-sample___pagination-example
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

nav {
  border-top: 1px solid #eeeeee;
  margin-top: 1em;
  padding-top: 0.5em;
  font: 1.2em sans-serif;

  display: flex;
  justify-content: center;
}

.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.pagination li {
  margin: 0 1px;
}

.pagination a {
  display: block;
  padding: 0.5em 1em;
  border: 1px solid #999999;
  border-radius: 0.2em;
  text-decoration: none;
}

.pagination a[aria-current="page"] {
  background-color: #333333;
  color: white;
}
```

{{EmbedLiveSample("pagination-example")}}

## 選択したもの

このパターンは、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用してレイアウトされています — 一方のフレックスコンテナーは別のフレックスコンテナーの中にネストされています。 {{htmlelement("nav")}} 要素は、{{cssxref("justify-content")}} プロパティを使用してリストを中央に配置できるように、フレックスコンテナーとして指定されています。

リストそのものもフレックスコンテナーとなって、アイテムを一列に並べます。アイテムの空間を空けるには、フレックスアイテムに {{cssxref("margin")}} を使用するか、フレックスコンテナーに {{cssxref("gap")}} を追加するかしてください。

```css
.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2px;
}
```

## アクセシビリティの考慮

スクリーンリーダーを使用している人が、このナビゲーションが何をするのか、そしてリンクをクリックしたときにどこに行くのかを確実に理解できるようにしたいです。 これを手助けするために、 [`aria-label="pagination"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を `<nav>` 要素に追加しました。

スクリーンリーダーによって読み取られるが視覚的に隠されている追加のコンテンツを追加し、ページング矢印に [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) 属性を設定しました。

このドキュメントの最後にある「関連情報」の節には、関連するアクセシビリティのトピックへのリンクがあります。

## 関連情報

- {{Cssxref("justify-content")}}、{{Cssxref("gap")}}
- [ARIA を知る: 'Hidden' 対 'None'](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html)<sup>（英語）</sup> (2018)
- [スクリーンリーダーのユーザーには見えないコンテンツ](https://webaim.org/techniques/css/invisiblecontent/#techniques)<sup>（英語）</sup> (2020)
- [アクセシビリティを意識した CSS の書き方](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939)<sup>（英語）</sup> (2017)（[日本語訳](https://frasco.io/writing-css-with-accessibility-in-mind-4fc82b26aecb)）
- [アクセシビリティ（a11y）スタイルガイド: ページ切り替え](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)<sup>（英語）</sup>
