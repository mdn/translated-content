---
title: <footer>
slug: Web/HTML/Element/footer
---

{{HTMLSidebar}}

**HTML の `<footer>` 要素**は、直近の[区分コンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#区分コンテンツ)または[区分化ルート](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Sectioning_root)要素のフッターを表します。フッターには通常、そのセクションの著作者に関する情報、関連文書へのリンク、著作権情報等を含めます。

{{EmbedInteractiveExample("pages/tabbed/footer.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >。但し、他の <code>&#x3C;footer></code> や
        {{HTMLElement("header")}} の子孫がないもの。
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
        >を受け入れるすべての要素。ただし、
        {{HTMLElement("address")}}, {{HTMLElement("header")}},
        他の <code>&#x3C;footer></code> の子孫要素として配置してはならない。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role"
          >contentinfo</a
        >、ただし <a href="/ja/docs/Web/HTML/Element/article">article</a>,
        <a href="/ja/docs/Web/HTML/Element/aside">aside</a>,
        <a href="/ja/docs/Web/HTML/Element/main">main</a>,
        <a href="/ja/docs/Web/HTML/Element/nav">nav</a>,
        <a href="/ja/docs/Web/HTML/Element/section">section</a>
        のいずれかの要素、または
        <code
          >role=<a href="/ja/docs/Web/Accessibility/ARIA/Roles/Article_Role"
            >article</a
          ></code
        >,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
          >complementary</a
        >, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/Main_role">main</a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/Navigation_Role"
          >navigation</a
        >,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/Region_role">region</a>
        がある要素の子である場合は<a
          href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上のメモ

- セクションの著作者や編集者の連絡先情報は、多くの場合 `<footer>` 要素内に {{HTMLElement("address")}} 要素として配置します。
- `<footer>` 要素は区分コンテンツではありません。つまり、この要素が新たな[アウトライン](/ja/docs/Sections_and_Outlines_of_an_HTML5_document)を生成することはありません。

## 例

```html
<footer>
  Some copyright info or perhaps some author
  info for an &lt;article&gt;?
</footer>
```

## アクセシビリティの考慮

Safari 13 のリリース以前は、 `contentinfo` の[ランドマークロール](/ja/docs/Learn/Accessibility/WAI-ARIA_basics#SignpostsLandmarks)が [VoiceOver](https://help.apple.com/voiceover/info/guide/) によって適切に公開されていませんでした。古い Safari ブラウザーに対応する必要がある場合は、 `role="contentinfo"` を `footer` 要素に追加して、ランドマークが適切に表示されるようにしてください。

- 関連記事: [WebKit Bugzilla: 146930 – AX: HTML native elements (header, footer, main, aside, nav) should work the same as ARIA landmarks, sometimes they don't](https://bugs.webkit.org/show_bug.cgi?id=146930)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.footer")}}

## 関連情報

- 他のセクション関連要素: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ARIA: Contentinfo ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role)
