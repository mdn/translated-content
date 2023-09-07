---
title: <bdi>
slug: Web/HTML/Element/bdi
---

## Resumo

O HTML \<bdi>elemento (ou elemento de isolamento de Bi-direcional) isola um trechode texto que pode ser formatado em uma direção diferente de outro texto fora dela.

Este elemento é útil ao incorporar o texto com uma direção desconhecida, de um banco de dados por exemplo, no interior do texto com uma direção fixa.

Apesar do mesmo efeito visual pode ser alcançado usando a regra de CSS{{cssxref("unicode-bidi")}}: isolar um {{HTMLElement("span")}} ou outro elemento de formatação de texto, o significado semântico só é transportado pelo elemento de\<bdi>. Especialmente, os navegadores podem ignorar estilos CSS. Nesse caso, o texto seria ainda corretamente exibido usando o elemento HTML, mas se tornará lixo quando usando o estilo CSS para transmitir semântica.

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_ [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content), palpable content.
- _Permitted content_[Phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLElement")}}

## Atributos

Como todos os outros elementos do HTML, este elemento tem os atributos globais, com uma pequena diferença de semântica: o atributo dir não é herdado. Se não definido, o valor padrão é o auto que deixa o navegador decidir a direção com base no conteúdo do elemento.

## Exemplo

```html
<p dir="ltr">
  Esta palavra arábica <bdi>ARABIC_PLACEHOLDER</bdi> é automaticamente voltada
  da direita
</p>
```

## Especificações

| Specification                                                                           | Status                   | Comment |
| --------------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-bdi-element', '&lt;bdi&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'the-bdi-element.html#the-bdi-element', '&lt;bdi&gt;')}}        | {{Spec2('HTML5 W3C')}}   |         |

## Compatibilidade com navegadores

{{Compat("html.elements.bdi")}}

## Veja Também

- Related HTML element: {{HTMLElement("bdo")}}
- Related HTML properties: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}

{{HTMLSidebar}}
