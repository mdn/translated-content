---
title: Propriedades shorthand
slug: Web/CSS/Shorthand_properties
---

## Definição

_Propriedades shorthand (tradução literal: Propriedades abreviadas) são propriedades de CSS que deixam você setar os valores de outras propriedades de CSS simultaneamente. Usando shorthand property, um desenvolvedor web pode escrever folhas de estilo mais concisas e legíveis,economizando tempo e energia._

A especificação CSS define como shorthand properties, o grupo de propriedades com o mesmo tema. Ex: a propriedade CSS {{cssxref("background")}} é uma propriedade shorthand que é capaz de definir o valor de {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}}, e {{cssxref("background-position")}}. Assim também,como as propriedades comuns e relacionadas a fonte podem ser definidas e usadas com o shorthand {{cssxref("font")}},e os diferentes margins em volta de um box podem ser definidas com o shorthand {{cssxref("margin")}}.

## Casos específicos

Mesmo sendo convenientes para se usar, existem alguns casos que precisam ser analisados antes de usar:

1. Um valor que não especificado é setado seu valor inicial. Isso parece uma anedota, mas realmente significa que sobrescreve valores previamente setados. Por exemplo:

   ```css
   background-color: red;
   background: url(images/bg.gif) no-repeat top right;
   ```

   não irá setar a cor do background para vermelho, mas para {{cssxref("background-color")}}'s padrão, transparente, como a segunda regra tem precedência.

2. Apenas propriedades individuais são herdadas. Como valores que faltam são substituidos pelo seu valor inicial, é impossivel herdar valores individuais os omitindo. O valor `inherit` pode ser aplicado a uma propriedade, mas num total e não como uma palavra-chave para um valor ou outro. Isso significa que a unica forma de um valor específico ser herdado é usando a propriedade em longhand com o valor `inherit`.
3. Propriedades shorthand tentam não forçar uma ordem específica para os valores das propriedades que elas substituem. Isso funciona bem quando essas propriedades usam valores de diferentes tipos, como a ordem não tem importância, isso funciona bem quando essas propriedades usam valores de diferentes tipos, como a ordem não tem importância, mas isso não funciona tão facilmente quando várias propriedades podem ter valores idênticos. O tratamento destes casos está agrupado em várias categorias:

   1. Propriedades shorthand que lidam com valores da borda de um box, como {{cssxref("border-style")}}, {{cssxref("margin")}} or {{cssxref("padding")}}, sempre usam um consistente 1-para-4 valor de sintaxe representando essas bordas:

      | ![border1.png](/files/3646/border1.png) | _A sintaxe de um valor_: `border-width: 1em` — O valor único representa todas as bordas                                                                                                                                                                                                                                                      |
      | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | ![border2.png](/files/3647/border2.png) | _As sintaxes de dois valores_: `border-width: 1em 2em` — O primeiro valor representa a vertical, isto é, as bordas superior e inferior, a segunda as horizontais, que é a esquerda e a direita.                                                                                                                                              |
      | ![border3.png](/files/3648/border3.png) | _As sintaxes de três valores_: `border-width: 1em 2em 3em` — O primeiro valor representa a borda superior, a segunda, a horizontal, que é esquerda e direita, e o terceiro valor a borda inferior                                                                                                                                            |
      | ![border4.png](/files/3649/border4.png) | _As sintaxes de quatro valores_: `border-width: 1em 2em 3em 4em` — Os quatro valores representam as margens superior, direita, inferior e esquerda, respectivamente, sempre nessa ordem, que é no sentido horário começando pelo topo (a letra inicial de Top-Right-Bottom-Left corresponde à ordem da consoante da palavra _trouble_: TRBL) |

   2. Também parecido, shorthand que lidam com os cantos de um box {{cssxref("border-radius")}}, sempre usam 1-para-4-valor de sintaxe representando esses cantos:

      | ![corner1.png](/files/3650/corner1.png) | _A sintaxe de um valor_: `border-radius: 1em` — O valor único representa todos os cantos                                                                                                                                                                                                  |
      | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | ![corner2.png](/files/3651/corner2.png) | _As sintaxes de dois valores_: `border-radius: 1em 2em` — O primeiro valor representa o canto superior esquerdo e inferior direito, o segundo o superior direito e inferior esquerdo                                                                                                      |
      | ![corner3.png](/files/3652/corner3.png) | _As sintaxes de três valores_: `border-radius: 1em 2em 3em` — O primeiro valor representa o canto superior esquerdo, o segundo o canto superior direito eo inferior esquerdo e o terceiro o canto inferior direito                                                                        |
      | ![corner4.png](/files/3653/corner4.png) | _As sintaxes de quatro valores_: `border-radius: 1em 2em 3em 4em` — Os quatro valores representam os cantos superior esquerdo, superior direito, inferior direito e inferior esquerdo respectivamente, sempre nessa ordem, que é no sentido horário começando no canto superior esquerdo. |

## Propriedades de background

Um background com as seguintes declarações:

```
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: top right;
```

Pode ser resumido em uma unica declaração:

```
background: #000 url(images/bg.gif) no-repeat top right;
```

(A forma shorthand é o equivalente as propriedades longhand acima, mais `background-attachment: scroll`, em CSS3, algumas propriedades adicionais.)

## Propriedades de fonte

As seguintes declarações:

```
font-style: italic;
font-weight: bold;
font-size: .8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

Podem ser resumidas a:

```
font: italic bold .8em/1.2 Arial, sans-serif;
```

Essa declaração shorthand é o equivalente as declarações longhand acima, mais `font-variant: normal` e `font-size-adjust: none` (CSS2.0 / CSS3), `font-stretch: normal` (CSS3).

## Propriedades de borda

Com a borda, o width (largura), color (cor), podem ser simplificados em uma declaração. Por exemplo,

```
border-width: 1px;
border-style: solid;
border-color: #000;
```

Podem ser escritas como

```
border: 1px solid #000;
```

## Propriedades de margin e padding

As versões shorthand de margin e padding funcionam da mesma maneira. As seguintes declarações CSS:

```
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

são as mesmas da seguinte declaração (note que os valores estão em ordem horária: top, right, bottom e left(TRBL, mesmas consoantes de TRBL "trouble"))

```
margin: 10px 5px 10px 5px;
```

## Veja também

- [CSS Reference](/pt-BR/docs/CSS/CSS_Reference)
- Propriedades shorthand : {{cssxref("background")}}, {{cssxref("font")}}, {{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, {{cssxref("border-left")}}, {{cssxref("border-width")}}, {{cssxref("border-color")}}, {{cssxref("border-style")}}, {{cssxref("transition")}}, {{cssxref("animation")}}, {{cssxref("transform")}}, {{cssxref("padding")}}, {{cssxref("list-style")}}, {{cssxref("border-radius")}}.
