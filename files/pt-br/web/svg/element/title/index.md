---
title: title
slug: Web/SVG/Element/title
---

{{SVGRef}}

Cada elemento recipiente ou elemento gráfico em um desenho SVG pode fornecer uma descrição de `title`, onde esta descrição é de apenas texto. Quando o atual fragmento do documento SVG é renderizado em aparelhos audiovisuais, o elemento `title` não é renderizado como parte do gráfico. Entretanto, alguns agentes de usuários poderão, por exemplo, exibir o elemento `title` como uma dica. Apresentações alternativas são possíveis, tanto visual quanto auditiva, que exibem o elemento `title` mas não mostram o elemento `path` ou outros elementos gráficos. O elemento `title` geralmente aumenta a acessibilidade de documentos SVG.

Geralmente o elemento `title` deve ser o primeiro elemento filho de seu pai. Observe que estas implementações que utilizam o `title` para exibir uma dica, muitas vezes só o farão se o `title` for o primeiro elemento filho de seu pai.

## Contexto de uso

{{svginfo}}

## Exemplo

O seguinte trecho de código demonstra a utilização da tag SVG `<title>`.

```xml
<svg width="500" height="300" xmlns="https://www.w3.org/2000/svg">
  <g>
    <title>Exemplo Demonstrativo de Título SVG</title>
    <rect x="10" y="10" width="200" height="50"
    style="fill:none; stroke:blue; stroke-width:1px"/>
  </g>
</svg>
```

## Atributos

### Atributos globais

- [Atributos principais](/pt-BR/docs/SVG/Attribute#core) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}

### Atributos específicos

_Não existem atributos específicos._

## Interface DOM

Este elemento implementa a interface do [`SVGTitleElement`](/pt-BR/docs/DOM/SVGTitleElement).

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{ SVGElement("desc") }}
