---
title: SVGAElement.target
slug: Web/API/SVGAElement/target
tags:
  - Imagem vetorial
  - Vetores
translation_of: Web/API/SVGAElement/target
translation_of_original: Web/API/SVGAElement/SVGAlement.target
original_slug: Web/API/SVGAElement/SVGAlement.target
---
{{APIRef("SVGAElement")}}

O **`SVGAElement.target`** propriedade somente ler de {{domxref("SVGAElement")}} retorna um objeto {{domxref("SVGAnimatedString")}} que especifica a porção de um alvo sendo ele "window", "frame" ou "pane" no qual um documento será aberto quando o link for acionado.

Esta propriedade é usada quando existem dois ou mais possiveis alvos(destinos) para o documento, por exemplo, quando o documento pai é um arquivo .html ou .xhtml com varias telas (multi-frame).

## Sintaxe

```
myLink.target = 'value';
```

### Valor

Um {{domxref("SVGAnimatedString")}} indica o destino final do recurso que abre o documento assim que o link é acionado.

Valores para {{domxref("target")}} você pode ver [aqui](https://www.w3.org/TR/2011/REC-SVG11-20110816/linking.html#AElementTargetAttribute).

## Exemplo

O código é foi retirado de ["SVGAElement example code"](/pt-BR/docs/Web/API/SVGAElement#Example)

```js
...
var linkRef = document.querySelector('a');
linkRef.target ='_blank';
...
```

## Especificações

| Specification                                                                            | Status                   | Comment |
| ---------------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('SVG1.1', 'text.html#InterfaceSVGAElement', 'target')}} | {{Spec2('SVG1.1')}} |         |

## Compatibilidade com o navegador

{{Compat("api.SVGAElement.target")}}

## Veja também

- {{ SVGAttr("target") }}
