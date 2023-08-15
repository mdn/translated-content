---
title: Falsy
slug: Glossary/Falsy
---

Um valor **falsy** é um valor que se traduz em falso quando avaliado em um contexto {{Glossary("Boolean")}}.

{{Glossary("JavaScript")}} usa tipo {{Glossary("Type_Conversion", "coercion")}} em contextos booleanos.

Exemplos de valores _falsy_ em JavaScript (que se traduzirá em false e assim _ignorar_ o bloco `if`):

```js
if (false) {
  // Not reachable
}

if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}
if (document.all) {
  // [1], not reachable
}
```

\[1] `document.all` tem sido utilizado para a detecção do navegador no passado e a especificação [HTML define uma violação intencional](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) do padrão ECMAScript aqui para manter a compatibilidade com código legado (`if (document.all) { // Internet Explorer code here }` ou usando `document.all` sem verificar sua presença em primeiro lugar: `document.all.foo`).

## Aprender mais

- {{Glossary("Truthy")}}
- {{Glossary("Type_Conversion", "Coercion")}}
- {{Glossary("Boolean")}}
