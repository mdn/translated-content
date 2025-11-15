---
title: "<nav>: ナビゲーションセクション要素"
slug: Web/HTML/Reference/Elements/nav
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

**`<nav>`** は [HTML](/ja/docs/Web/HTML) の要素で、現在の文書内の他の部分や他の文書へのナビゲーションリンクを提供するためのセクションを表します。ナビゲーションセクションの一般的な例としてメニュー、目次、索引などがあります。

{{InteractiveExample("HTML デモ: &lt;nav&gt;", "tabbed-standard")}}

```html-nolint interactive-example
<nav class="crumbs">
  <ol>
    <li class="crumb"><a href="#">Bikes</a></li>
    <li class="crumb"><a href="#">BMX</a></li>
    <li class="crumb">Jump Bike 3000</li>
  </ol>
</nav>

<h1>Jump Bike 3000</h1>
<p>
  この BMX バイクは、プロの世界へ踏み出す確かな一歩だ。見た目も乗り心地も本格的で、スキルを磨くために設計されている。
</p>
```

```css interactive-example
nav {
  border-bottom: 1px solid black;
}

.crumbs ol {
  list-style-type: none;
  padding-left: 0;
}

.crumb {
  display: inline-block;
}

.crumb a::after {
  display: inline-block;
  color: black;
  content: ">";
  font-size: 80%;
  font-weight: bold;
  padding: 0 3px;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 使用上の注意

- すべてのリンクを `<nav>` 要素に入れる必要はありません。`<nav>` はナビゲーションリンクの主要なブロックのみに用います。{{HTMLElement("footer")}} にもよくリンクのリストが設置されますが、`<nav>` 要素の中に入れる必要はありません。
- `<nav>` 要素は文書内に複数置くことができます。例えば、サイトナビゲーションを一つ、ページ内ナビゲーションを一つなどです。このような場合、アクセシビリティを強化するために、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用することができます。[例](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements#区分コンテンツのラベル付け)をご覧ください。
- スクリーンリーダーのような障碍者向けのユーザーエージェントは、この要素を使用してナビゲーション用のコンテンツを初期読み上げから省略するかを判断するために使用することがあります。

## 例

この例では、`<nav>` ブロックを使用して、リンクの番号なしリスト ({{HTMLElement("ul")}}) を囲んでいます。適切な CSS によってサイドバーやナビゲーションバー、ドロップダウンメニューなどにすることができます。

```html live-sample___unordered-list
<nav class="menu">
  <ul>
    <li><a href="#">ホーム</a></li>
    <li><a href="#">概要</a></li>
    <li><a href="#">お問い合わせ</a></li>
  </ul>
</nav>
```

{{EmbedLiveSample('unordered-list')}}

`nav` 要素の意味づけはリンクを提供することです。しかし、`nav` 要素はリストを格納する必要はなく、他の種類のコンテンツを格納することもできます。このナビゲーションブロックでは、リンクは散文で指定されています。

```html-nolint live-sample___prose
<nav>
  <h2>ナビゲーション</h2>
  <p>
    あなたは私のホームページにいます。北には<a href="/blog">私のブログ</a>があり、そこから戦いの音が聞こえてきます。東には大きな山が見え、その山には多くの<a href="/school">学校のレポート</a>が散らばっています。
    この山のはるか上の方で、私らしき小さな人影が見えます。必死に<a href="/school/thesis">論文</a>を書きなぐっています。
  </p>
  <p>
    西側にはいくつかの出口があります。楽しそうな出口の一つは<a href="https://games.example.com/">「ゲーム」</a>と表示されています。もう一つ、面白くなさそうな出口は <a href="https://isp.example.net/">ISP™</a> と表示されています。
  </p>
  <p>
    南には暗く湿った<a href="/about">連絡先ページ</a>が広がっています。
    使われなくなった入口は蜘蛛の巣で覆われており、ある時ページからネズミが素早く駆け出していきます。
  </p>
</nav>
```

{{EmbedLiveSample('prose')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#区分コンテンツ"
          >区分コンテンツ</a
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role"
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
- [HTML 文書のセクションとアウトライン](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA: Navigation ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
