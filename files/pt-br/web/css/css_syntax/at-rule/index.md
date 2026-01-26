---
title: Regra At
slug: Web/CSS/CSS_syntax/At-rule
original_slug: Web/CSS/At-rule
---

Uma **regra at (at-rule)** é uma [CSS statement](/pt-BR/docs/CSS/Syntax#css_statements) iniciando com um caractere arroba, '`@`' (`U+0040 ARROBA COMERCIAL`), seguido por um indetificador e terminando no primeiro ponto e vírgula', `;`' (`U+003B SEMICOLON`), fora de um [bloco](/pt-BR/docs/CSS/Syntax#css_declarations), ou no fim do primeiro [Bloco CSS](/pt-BR/docs/CSS/Syntax#css_declarations).

Existem muitas regras at, criadas por seu identificador, cada um com uma sintaxe diferente:

- {{ cssxref("@charset") }}, definindo o conjunto de caracteres (codificação) usado pela folha de estilos.
- {{ cssxref("@import") }}, informando o motor CSS para incluir uma folha de estilos externa.
- {{ cssxref("@namespace") }}, informando ao motor CSS que todo o conteúdo deve ser considerado prefixado com um namespace XML.
- Regras at aninhadas, um subconjunto de regras aninhadas que pode ser usado não somente como uma regra de uma folha de estilos, mas também dentro de um grupo de regras condicional:
  - {{ cssxref("@media") }}, um grupo de regras condicional que é aplicado ao conteúdo caso o dispositivo de exibição cumpra com a condição de mídia definida.
  - {{ cssxref("@font-face") }}, descrevendo o aspecto de uma fonte externa que deve ser baixada. {{ experimental_inline() }}
  - {{ cssxref("@document") }}, um grupo de regras condicional que é aplicado ao conteúdo caso o documento cumpra com os critério definidos. {{ experimental_inline() }}
  - {{ cssxref("@supports") }}, um grupo de regras condicional que é aplicado caso o navegador cumpra com os critérios definidos. {{ experimental_inline() }}

## Grupos condicionais de regras

Assim como valores de propriedades, cada regra at possui uma sintaxe diferente; várias delas, entretanto, podem ser agrupadas em uma categoria especial, os **grupos condicionais de regras**. Essas regras compartilham uma sintaxe em comum. Cada uma delas inclui _regras aninhadas_, que são _conjuntos de regras_ ou _regras at aninhadas_. Todas elas transmitem um significado semântico em comum: todas indicam uma condição (de um tipo diferente) para que as regras sejam aplicadas.

Grupos condicionais de regras são definidos pelo CSS3 e são:

- {{ cssxref("@media") }},
- {{ cssxref("@document") }},
- {{ cssxref("@supports") }}.

Cada uma delas sendo também uma regra aninhada, pode haver uma quantidade indeterminada de aninhamentos.
