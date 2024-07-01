---
title: Understanding CSS z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
---

Normalmente páginas HTML podem ser consideradas bi-dimensionais, pois texto, imagens e outros elementos podem ser dispostos na página sem sobreposição. Há apenas um fluxo de renderização e todos os elementos sabem do espaço ocupado por outros. O atributo {{cssxref("z-index")}} lhe permite ajustar a ordem de sobreposição dos objetos ao renderizar o conteúdo.

> _Em CSS 2.1, cada caixa tem uma posição nas três dimensões. Em adição às suas posições na horizontal e vertical, caixas ficam no "eixo-z" e são formatadas uma em cima da outra. Posições no Eixo-Z são particularmente relevantes quando caixas se sobrepõem visualmente._

(from [CSS 2.1 Section 9.9.1 - Layered presentation](https://www.w3.org/TR/CSS21/visuren.html#z-index))

Isso significa que as regras de CSS te permitem posicionar caixas em camadas em adição ao _render_ normal da camada (level 0). A posição Z de cada camada é expressa como um inteiro representando a ordem da pilha para renderização. Números maiores significam que são mais próximos do observador. A posição Z pode ser controlada pela propriedade CSS {{ cssxref("z-index")}}.

Usar z-index aparenta ser extremamente fácil: uma única propriedade, endereçada a um único número inteiro, com um comportamento fácil-de-entender. No entanto, quando o z-index é aplicado para a hierarquia complexa dos elementos de HTML, seu comportamento pode ser difícil de entender ou até imprevisível. Isso é devido às complexas regras de _stacking_. Uma sessão dedicada foi reservada na especificação do CSS [CSS-2.1 Appendix E](https://www.w3.org/TR/CSS21/zindex.html) para explicar melhor essas regras.

Esse artigo tentará explicar essas regras, com algumas simplificações e vários exemplos.

1. [Stacking without z-index](/pt-BR/CSS/Understanding_z-index/Stacking_without_z-index) : Regras padrões de empilhamento
2. [Stacking and float](/pt-BR/CSS/Understanding_z-index/Stacking_and_float) : Como lidar com elementos que usam _float_
3. [Adding z-index](/pt-BR/CSS/Understanding_z-index/Adding_z-index) : Usando index-z para mudar o empilhamento padrão
4. [The stacking context](/pt-BR/CSS/Understanding_z-index/The_stacking_context) : Notas sobre contexto do empilhamento
5. [Stacking context example 1](/pt-BR/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarquia, z-index no último _level_
6. [Stacking context example 2](/pt-BR/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarquia, z-index em todos os _levels_
7. [Stacking context example 3](/pt-BR/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarquia, z-index no segundo _level_

_Note of the author: Thanks to Wladimir Palant and Rod Whiteley for the review\._

### Original Document Information

- Author(s): Paolo Lombardi
- This article is the English translation of an article I wrote in Italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
