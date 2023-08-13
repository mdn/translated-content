---
title: CSS セレクターと XPath の比較
slug: Web/XPath/Comparison_with_CSS_selectors
---

{{XSLTRef}}

この記事では、ウェブ開発者が適材適所のツールを選択できるように、CSSセレクターとXPathの違いを説明することを目的としています。

| [XPath 機能](/ja/docs/Web/XPath)                                                                                                                                  | [相当する CSS](/ja/docs/Web/CSS/CSS_Selectors)                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`ancestor`](/ja/docs/Web/XPath/Axes/ancestor), [`parent`](/ja/docs/Web/XPath/Axes/parent) or [`preceding-sibling`](/ja/docs/Web/XPath/Axes/preceding-sibling) 軸 | {{CSSxRef(":has",":has()")}} セレクター {{experimental_inline}}                                                                   |
| [`attribute`](/ja/docs/Web/XPath/Axes/attribute) 軸                                                                                                               | [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)                                                                            |
| [`child`](/ja/docs/Web/XPath/Axes/child) 軸                                                                                                                       | [子結合子](/ja/docs/Web/CSS/Child_combinator)                                                                                     |
| [`descendant`](/ja/docs/Web/XPath/Axes/descendant) 軸                                                                                                             | [子孫結合子](/ja/docs/Web/CSS/Descendant_combinator)                                                                              |
| [`following-sibling`](/ja/docs/Web/XPath/Axes/following-sibling) 軸                                                                                               | [一般兄弟結合子](/ja/docs/Web/CSS/General_sibling_combinator)または[隣接兄弟結合子](/ja/docs/Web/CSS/Adjacent_sibling_combinator) |
| [`self`](/ja/docs/Web/XPath/Axes/self) 軸                                                                                                                         | {{CSSxRef(":scope")}} または {{CSSxRef(":host")}} セレクター＾                                                                    |

<section id="Quick_links">
  <ol>
    <li><strong><a href="/ja/docs/Web/XSLT">XSLT</a></strong></li>
    <li><strong><a href="/ja/docs/Web/EXSLT">EXSLT</a></strong></li>
    <li><strong><a href="/ja/docs/Web/XPath">XPath</a></strong></li>
    <li class="toggle">
      <details open>
        <summary>ガイド</summary>
        <ol>
          <li><a href="/ja/docs/Web/XPath/Comparison_with_CSS_selectors">CSS セレクターと XPath の比較</a>
          </li>
          <li><a href="/ja/docs/Web/XPath/Snippets">XPath スニペット</a></li>
        </ol>
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/ja/docs/Web/XPath/Axes">XPath 軸</a></summary>
        {{ListSubpagesForSidebar("/ja/docs/Web/XPath/Axes")}}
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/ja/docs/Web/XPath/Functions">XPath 関数</a></summary>
        {{ListSubpagesForSidebar("/ja/docs/Web/XPath/Functions")}}
      </details>
    </li>
  </ol>
</section>
