---
title: Canonical order (正規順序)
slug: Glossary/Canonical_order
tags:
  - Canonical order
  - CodingScripting
  - Glossary
translation_of: Glossary/Canonical_order
---
<p>CSS では、正規順序は、別々の値を指定（または{{Glossary("parse", "解析")}}）すべき順序、または CSS のプロパティ値の一部として{{Glossary("serialization", "シリアライズ")}}される順序を参照するために使用されます。 これはプロパティの形式的{{Glossary("syntax","構文")}}によって定義され、通常、長い表現（longhand）の値を単一の一括指定（shorthand）の値の一部として指定する順序を指します。</p>

<p>たとえば、{{cssxref("background")}} の一括指定のプロパティー値は、いくつかの <code>background-*</code> の長い表現のプロパティーで構成されています。 これらの長い表現の値の正規順序は、次のように定義されます。</p>

<ol>
 <li>{{cssxref("background-image")}}</li>
 <li>{{cssxref("background-position")}}</li>
 <li>{{cssxref("background-size")}}</li>
 <li>{{cssxref("background-repeat")}}</li>
 <li>{{cssxref("background-attachment")}}</li>
 <li>{{cssxref("background-origin")}}</li>
 <li>{{cssxref("background-clip")}}</li>
 <li>{{cssxref("background-color")}}</li>
</ol>

<p>さらに、その構文は、{{cssxref("background-size")}} の値が与えられている場合、{{cssxref("background-position")}} の値の<strong>直後</strong>にスラッシュで区切って指定<strong>しなければならない</strong>ことを定義しています。 他の値は任意の順序で現れることができます。</p>

<h2 id="Learn_more" name="Learn_more">より詳しく知る</h2>

<ul>
 <li><a href="https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties">CSS のプロパティに関して、「正規順序」とは何を意味しますか？</a> は、Stack Overflow において、有用なさらなる議論を提供します。（英語）</li>
 <li>MDN の <a href="/ja/docs/Web/CSS/Value_definition_syntax">CSS の値に使用される形式的構文の説明</a></li>
</ul>
