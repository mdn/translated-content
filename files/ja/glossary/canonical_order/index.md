---
title: Canonical order (正規順序)
slug: Glossary/Canonical_order
---

{{GlossarySidebar}}

CSS では、正規順序は、別々の値を指定（または{{Glossary("parse", "解析")}}）すべき順序、または CSS のプロパティ値の一部として{{Glossary("serialization", "シリアライズ")}}される順序を参照するために使用されます。 これはプロパティの形式的{{Glossary("syntax","構文")}}によって定義され、通常、長い表現（longhand）の値を単一の一括指定（shorthand）の値の一部として指定する順序を指します。

たとえば、{{cssxref("background")}} の一括指定のプロパティー値は、いくつかの `background-*` の長い表現のプロパティーで構成されています。 これらの長い表現の値の正規順序は、次のように定義されます。

1. {{cssxref("background-image")}}
2. {{cssxref("background-position")}}
3. {{cssxref("background-size")}}
4. {{cssxref("background-repeat")}}
5. {{cssxref("background-attachment")}}
6. {{cssxref("background-origin")}}
7. {{cssxref("background-clip")}}
8. {{cssxref("background-color")}}

さらに、その構文は、{{cssxref("background-size")}} の値が与えられている場合、{{cssxref("background-position")}} の値の**直後**にスラッシュで区切って指定**しなければならない**ことを定義しています。 他の値は任意の順序で現れることができます。

## より詳しく知る

- [CSS のプロパティに関して、「正規順序」とは何を意味しますか？](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties) は、Stack Overflow において、有用なさらなる議論を提供します。（英語）
- MDN の [CSS の値に使用される形式的構文の説明](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
