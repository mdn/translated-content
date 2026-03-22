---
title: Posições
slug: Web/SVG/Tutorials/SVG_from_scratch/Positions
original_slug: Web/SVG/Tutorial/Positions
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Getting_Started", "Web/SVG/Tutorial/Basic_Shapes") }}

Neste artigo, examinamos como os Scalable Vector Graphics (SVG) representam as posições e tamanhos dos objetos dentro de um contexto de desenho, incluindo o sistema de coordenadas e o que significa uma medição de "pixel" em um contexto escalável.

## A Grade

Para todos os elementos, o SVG usa um sistema de coordenadas ou sistema **de grade** semelhante ao usado pelo [canvas](pt-BR/HTML/Canvas) (e por muitas outras rotinas de desenho de computador). Ou seja, o canto superior esquerdo do documento é considerado o ponto (0,0), ou ponto de origem. As posições são então medidas em pixels a partir do canto superior esquerdo, com a direção x positiva voltada para a direita e a direção y positiva voltada para baixo.

![](canvas_default_grid.png)

Observe que isso é um pouco diferente da maneira como você aprendeu a fazer gráficos quando criança (o eixo y é invertido). No entanto, esta é a mesma forma como os elementos em HTML são posicionados (por padrão, os documentos LTR são considerados não os documentos RTL que posicionam X da direita para a esquerda).

### Exemplo

O elemento

```html
<rect x="0" y="0" width="100" height="100" />
```

define um retângulo do canto superior esquerdo que se estende por 100px para a direita e 100px para a parte inferior.

### O que são "pixels"?

No caso mais básico, um pixel em um documento SVG é mapeado para um pixel no dispositivo de saída (ou seja, a tela). Mas o SVG não teria o "Escalável" no nome se não houvesse diversas possibilidades de mudar esse comportamento. Assim como os tamanhos de fonte absolutos e relativos em CSS, o SVG define unidades absolutas (aquelas com um identificador dimensional como "pt" ou "cm") e as chamadas unidades de usuário, que não possuem esse identificador e são números simples.

Sem especificações adicionais, uma unidade de usuário equivale a uma unidade de tela. Para alterar explicitamente esse comportamento, existem diversas possibilidades no SVG. Começamos com o `svg` elemento raiz:

```html
<svg width="100" height="100">…</svg>
```

O elemento acima define uma tela SVG simples com 100x100px. Uma unidade de usuário equivale a uma unidade de tela.

```html
<svg width="200" height="200" viewBox="0 0 100 100">…</svg>
```

Toda a tela SVG aqui tem 200px por 200px de tamanho. No entanto, o atributo `viewPort` define a parte dessa tela a ser exibida. Esses pixels de 200x200 exibem uma área que começa na unidade do usuário (0,0) e se estende por 100x100 unidades do usuário à direita e na parte inferior. Isso amplia efetivamente a área da unidade de 100x100 e amplia a imagem para o dobro do tamanho.

O mapeamento atual (para um único elemento ou para a imagem inteira) de unidades do usuário para unidades de tela é chamado de **sistema de coordenadas do usuário** . Além da escala, o sistema de coordenadas também pode ser girado, inclinado e invertido. O sistema de coordenadas do usuário padrão mapeia um pixel do usuário para um pixel do dispositivo. (No entanto, o dispositivo pode decidir o que entende como um pixel.) Os comprimentos no arquivo SVG com dimensões específicas, como "in" ou "cm", são então calculados de forma que apareçam 1:1 na imagem resultante. .

Uma citação da especificação SVG 1.1 ilustra isso:

> \[...] suponha que o agente do usuário possa determinar a partir de seu ambiente que "1px" corresponde a "0,2822222mm" (ou seja, 90dpi). Então, para todo o processamento de conteúdo SVG: [...] "1cm" é igual a "35,43307px" (e, portanto, 35,43307 unidades de usuário)

{{ PreviousNext("Web/SVG/Tutorial/Getting_Started", "Web/SVG/Tutorial/Basic_Shapes") }}
