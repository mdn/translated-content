---
title: "<nav>: ナビゲーションセクション要素"
slug: Web/HTML/Element/nav
---

{{HTMLSidebar}}

**HTML の `<nav>` 要素**は、現在の文書内の他の部分や他の文書へのナビゲーションリンクを提供するためのセクションを表します。ナビゲーションセクションの一般的な例としてメニュー、目次、索引などがあります。

{{EmbedInteractiveExample("pages/tabbed/nav.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#区分コンテンツ"
          >区分コンテンツ</a
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上の注意

- すべてのリンクを `<nav>` 要素に入れる必要はありません。 `<nav>` はナビゲーションリンクの主要なブロックのみに用います。 {{HTMLElement("footer")}} にもよくリンクのリストが設置されますが、 {{HTMLElement("nav")}} 要素の中に入れる必要はありません。
- {{HTMLElement("nav")}} 要素は文書内に複数設定することができます。例えば、サイトナビゲーションを一つ、ページ内ナビゲーションを一つなどです。このような場合、アクセシビリティを強化するために、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) を使用することができます。[例](/ja/docs/Web/HTML/Element/Heading_Elements#Labeling_section_content)をご覧ください。
- スクリーンリーダーのような障碍者向けのユーザーエージェントは、この要素を使用してナビゲーション用のコンテンツを初期読み上げから省略するかを判断するために使用することがあります。

## 例

この例では、リンクの番号なしリスト ({{HTMLElement("ul")}}) を包含するために `<nav>` ブロックを使用します。適切な CSS によってサイドバー、ナビゲーションバー、あるいはドロップダウンメニューにすることができます。

```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.nav")}}

## 関連情報

- 他のセクション関連要素: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [HTML5 文書のセクションとアウトライン](/ja/docs/Sections_and_Outlines_of_an_HTML5_document)
- [ARIA: Navigation ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Navigation_Role)
