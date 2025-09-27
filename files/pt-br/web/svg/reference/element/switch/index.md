---
title: switch
slug: Web/SVG/Reference/Element/switch
original_slug: Web/SVG/Element/switch
---

{{SVGRef}}

O elemento `switch` avalia os atributos {{SVGAttr("requiredFeatures")}}, {{SVGAttr("requiredExtensions")}} e o {{SVGAttr("systemLanguage")}} diretamente nos seus elementos filhos em ordem e, em seguida, processa e renderiza o primeiro filho que possua este atributo definido como verdadeiro. Todos os outros serão ignorados e, portanto, não renderizados. Se o elemento filho é um elemento recipiente como o {{SVGElement("g")}}, então toda a subárvore será ou processada/renderizada ou ignorada/não renderizada.

Observe que os valores das propriedades `display` e `visibility` não possuem efeitos sob o processamento do elemento `switch`. Em particular, definindo `display` como `none` em um filho de um elemento `switch` não possuirá efeito sob o teste de verdadeiro/falso associado com o processamento de um elemento `switch`.

## Contexto de uso

{{svginfo}}

## Exemplo

## Atributos

### Atributos globais

- [Atributos de processamento condicional](/pt-BR/docs/Web/SVG/Attribute#conditionalproccessing) »
- [Atributos principais](/pt-BR/docs/Web/SVG/Attribute#core) »
- [Atributos de eventos gráficos](/pt-BR/docs/Web/SVG/Attribute#graphicalevent) »
- [Atributos de apresentação](/pt-BR/docs/Web/SVG/Attribute#presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Atributos específicos

- {{SVGAttr("allowReorder")}}

## Interface DOM

Este elemento implementa a interface do [`SVGSwitchElement`](/pt-BR/docs/Web/DOM/SVGSwitchElement).

## Compatibilidade com navegadores

{{Compat}}
