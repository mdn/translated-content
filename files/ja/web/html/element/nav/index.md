---
title: "<nav>: ナビゲーションセクション要素"
slug: Web/HTML/Element/nav
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{HTMLSidebar}}

**`<nav>`** は [HTML](/ja/docs/Web/HTML) の要素で、現在の文書内の他の部分や他の文書へのナビゲーションリンクを提供するためのセクションを表します。ナビゲーションセクションの一般的な例としてメニュー、目次、索引などがあります。

{{EmbedInteractiveExample("pages/tabbed/nav.html", "tabbed-standard")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上の注意

- すべてのリンクを `<nav>` 要素に入れる必要はありません。`<nav>` はナビゲーションリンクの主要なブロックのみに用います。{{HTMLElement("footer")}} にもよくリンクのリストが設置されますが、{{HTMLElement("nav")}} 要素の中に入れる必要はありません。
- {{HTMLElement("nav")}} 要素は文書内に複数設定することができます。例えば、サイトナビゲーションを一つ、ページ内ナビゲーションを一つなどです。このような場合、アクセシビリティを強化するために、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) を使用することができます。[例](/ja/docs/Web/HTML/Element/Heading_Elements#labeling_section_content)をご覧ください。
- スクリーンリーダーのような障碍者向けのユーザーエージェントは、この要素を使用してナビゲーション用のコンテンツを初期読み上げから省略するかを判断するために使用することがあります。

## 例

この例では、`<nav>` ブロックを使用して、リンクの番号なしリスト ({{HTMLElement("ul")}}) を囲んでいます。適切な CSS によってサイドバー、ナビゲーションバー、あるいはドロップダウンメニューにすることができます。

```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

`nav` 要素の意味づけはリンクを提供することです。しかし、`nav` 要素はリストを格納する必要はなく、他の種類のコンテンツを格納することもできます。このナビゲーションブロックでは、リンクは散文で指定されています。

```html
<nav>
  <h2>Navigation</h2>
  <p>
    You are on my home page. To the north lies <a href="/blog">my blog</a>, from
    whence the sounds of battle can be heard. To the east you can see a large
    mountain, upon which many <a href="/school">school papers</a> are littered.
    Far up this mountain you can spy a little figure who appears to be me,
    desperately scribbling a <a href="/school/thesis">thesis</a>.
  </p>
  <p>
    To the west are several exits. One fun-looking exit is labeled
    <a href="https://games.example.com/">"games"</a>. Another more
    boring-looking exit is labeled <a href="https://isp.example.net/">ISP™</a>.
  </p>
  <p>
    To the south lies a dark and dank <a href="/about">contacts page</a>.
    Cobwebs cover its disused entrance, and at one point you see a rat run
    quickly out of the page.
  </p>
</nav>
```

### 結果

{{EmbedLiveSample('Examples')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Content_categories#区分コンテンツ"
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
      <td>なし。開始タグと終了タグの両方が必須です。</td>
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
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/navigation_role"
            >navigation</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のセクション関連要素: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [HTML 文書のセクションとアウトライン](/ja/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Navigation ロール](/ja/docs/Web/Accessibility/ARIA/Roles/navigation_role)
