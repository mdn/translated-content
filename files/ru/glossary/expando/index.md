---
title: Expando
slug: Glossary/Expando
translation_of: Glossary/Expando
original_slug: Глоссарий/Expando
---
<p>Expando-свойства — это свойства, добавленные в узлы {{glossary("DOM")}} с помощью {{glossary("JavaScript")}}, когда эти свойства не являются частью DOM-спецификации {{glossary("object","объекта")}}:</p>

<pre class="brush: js">window.document.foo = 5; // foo — это expando</pre>

<p>Термин может быть применён к свойствам, добавленным к объекту без учёта его изначального предназначения, например, когда свойства с не числовым именем добавлены к {{glossary("Array","массиву")}}.</p>
