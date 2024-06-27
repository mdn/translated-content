---
title: "<footer>: フッター要素"
slug: Web/HTML/Element/footer
l10n:
  sourceCommit: dc1203a33cf26d9b9dfe919e32ecd00c0c365a3b
---

{{HTMLSidebar}}

**`<footer>`** は [HTML](/ja/docs/Web/HTML) の要素で、直近の[区分コンテンツ](/ja/docs/Web/HTML/Content_categories#区分コンテンツ)または[区分化ルート](/ja/docs/Web/HTML/Element/Heading_Elements#区分コンテンツのラベル付け)要素のフッターを表します。フッターには通常、そのセクションの著者に関する情報、関連文書へのリンク、著作権情報等を含めます。

{{EmbedInteractiveExample("pages/tabbed/footer.html", "tabbed-standard")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上のメモ

- セクションの著者や編集者の連絡先情報は、多くの場合 `<footer>` 要素内に {{HTMLElement("address")}} 要素として配置します。
- 区分コンテンツや区分化ルート要素の最も近い祖先が本体要素の場合、フッターはページ全体に適用されます。
- `<footer>` 要素は区分コンテンツではありません。つまり、この要素が新たな[アウトライン](/ja/docs/Web/HTML/Element/Heading_Elements)を生成することはありません。

## 例

```html
<body>
  <h3>FIFA World Cup top goalscorers</h3>
  <ol>
    <li>Miroslav Klose, 16</li>
    <li>Ronaldo Nazário, 15</li>
    <li>Gerd Müller, 14</li>
  </ol>

  <footer>
    <small>
      Copyright © 2023 Football History Archives. All Rights Reserved.
    </small>
  </footer>
</body>
```

```css
footer {
  text-align: center;
  padding: 5px;
  background-color: #abbaba;
  color: #000;
}
```

{{EmbedLiveSample('Examples')}}

## アクセシビリティの考慮

Safari 13 のリリース以前は、 `contentinfo` の[ランドマークロール](/ja/docs/Learn/Accessibility/WAI-ARIA_basics#道しるべランドマーク_signpostlandmark)が [VoiceOver](https://help.apple.com/voiceover/info/guide/) によって適切に公開されていませんでした。古い Safari ブラウザーに対応する必要がある場合は、 `role="contentinfo"` を `footer` 要素に追加して、ランドマークが適切に表示されるようにしてください。

- 関連記事: [WebKit Bugzilla: 146930 – AX: HTML native elements (header, footer, main, aside, nav) should work the same as ARIA landmarks, sometimes they don't](https://webkit.org/b/146930)

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>。ただし、子孫に他の <code>&#x3C;footer></code> や
        {{HTMLElement("header")}} がないもの。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始および終了タグは両方とも必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>を受け入れるすべての要素。ただし、
        {{HTMLElement("address")}}, {{HTMLElement("header")}},
        他の <code>&#x3C;footer></code> の子孫要素として配置してはならない。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/contentinfo_role">contentinfo</a>、ただし
        <a href="/ja/docs/Web/HTML/Element/article">article</a>,
        <a href="/ja/docs/Web/HTML/Element/aside">aside</a>,
        <a href="/ja/docs/Web/HTML/Element/main">main</a>,
        <a href="/ja/docs/Web/HTML/Element/nav">nav</a>,
        <a href="/ja/docs/Web/HTML/Element/section">section</a>
        のいずれかの要素、または
        <code>role=<a href="/ja/docs/Web/Accessibility/ARIA/Roles/article_role">article</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/complementary_role">complementary</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/main_role">main</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/navigation_role">navigation</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/region_role">region</a></code>
        がある要素の子である場合は <a href="/ja/docs/Web/Accessibility/ARIA/Roles/generic_role">generic</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
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

- 他のセクション関連要素: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Contentinfo ロール](/ja/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
