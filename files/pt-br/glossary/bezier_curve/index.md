---
title: Curva de Bézier
slug: Glossary/Bezier_curve
---

Uma **Curva de Bézier** (pronunciada \[bezje]) é uma curva descrita matematicamente usada em computação gráfica e animação. Em imagens vetoriais, elas são usadas para modelar curvas suaves que podem ser dimensionadas indefinidamente. 

A curva é definida por um conjunto de pontos de controle com um mínimo de dois. Gráficos e animações relacionados à Web usam Cubic Béziers, que são curvas com quatro pontos de controle P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.

Para traçar a curva, são traçadas duas linhas imaginárias, uma de P<sub>0</sub> a P<sub>1</sub> e outra de P<sub>1</sub> a P<sub>2</sub> . Os pontos finais das linhas são então movidos de forma constante para o próximo ponto. Uma terceira linha imaginária é desenhada com seu ponto inicial movendo-se firmemente na primeira linha auxiliar e o ponto final na segunda linha auxiliar. Nesta linha imaginária é desenhado um ponto desde o seu ponto inicial movendo-se continuamente até ao seu ponto final. A curva que este ponto descreve é ​​a Curva de Bézier. Aqui está uma ilustração animada demonstrando a criação da curva: 

![Drawing a Bázier curve](bézier_2_big.gif)

## See also

- [Curva de Bézier](https://pt.wikipedia.org/wiki/B%C3%A9zier_curve) na Wikipedia
- [Funções de temporização Cubic Bézier em CSS ](/pt-BR/docs/Web/CSS/easing-function#using_the_cubic-bezier_function)
- {{SVGAttr("keySplines")}} SVG attribute
