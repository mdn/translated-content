---
title: Expando
slug: Glossary/Expando
---

{{GlossarySidebar}}

expando プロパティは、 {{glossary("JavaScript")}} によって {{glossary("DOM")}} ノードに追加されたプロパティであり、 DOM {{glossary("object","オブジェクト")}}の仕様書に含まれていないものです。

```js
window.document.foo = 5; // foo は expando
```

この用語はオブジェクトの本来の目的以外に追加されたプロパティにも適用されます。例えば、{{glossary("Array", "配列")}}に追加された非数値型の名前つきプロパティなどにも用います。
