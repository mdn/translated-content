---
title: Sintaxe
slug: Web/CSS/Syntax
---

O Objetivo básico da linguagem de folhas de estilo em cascata ([CSS](/pt-BR/CSS)) é permitir que um motor do navegador pinte elementos na página com características específicas como cores, posições, ou decorações. A sintaxe _CSS_ reflete estes objetivos e seus blocos de contrução básicos são:

- A **propriedade** é um identificador que possui um nome legível, que define o que será considerado ou editado;
- O **valor** descreve como o recurso será tratado pelo motor. Cada propriedade possui um conjunto de valores válidos, definida por uma gramática formal, bem como um significado semântico, implementado para o motor do navegador.

## Declarações do CSS

A definição de propriedades CSS para um valor específico é a função principal da linguagem CSS. A propriedade e valor são chamados de **declaração**, e qualquer motor do CSS calcula quais declarações serão aplicadas para todos um único elemento da página em ordem adequadamente, a fim de exibí-lo com o estilo correto.

Tanto as propriedades como os valores são case-sensitive no CSS. Os pares se separam por dois pontos, '`:`' (`U+003A COLON`), e espaços em branco antes, entre e depois de propriedades e valores, porém os espaços dentro da declaração são ignorados.

![css syntax - declaration.png](/@api/deki/files/6164/=css_syntax_-_declaration.png)

Existem mais de [100 propriedades diferentes](/pt-BR/CSS/CSS_Reference) no CSS e um número quase infinito de diferentes valores. Nem todos os pares de propriedades e valores são permitidos em cada propriedade define o que são valores válidos. Quando um valor não é válido para uma determinada propriedade, a declaração é considerada inválida e é totalmente ignorada pelo motor do CSS.

## Blocos de declaração CSS

Declarações são agrupadas em **blocos**, que estão delimitados na estrutura com uma chave de abertura, '`{`' (`U+007B LEFT CURLY BRACKET`), e fechadas com outra, '`}`' (`U+007D RIGHT CURLY BRACKET`). Os blocos as vezes podem estar aninhados, a abertura e fechamento de chaves no bloco CSS deve ser realizada.

![css syntax - block.png](/@api/deki/files/6165/=css_syntax_-_block.png)

Esses blocos são chamados de **blocos de declaração** e as declarações dentro deles são separadas por, '`;`' (`U+003B SEMICOLON`). Um bloco de declaração pode não conter nenhuma declaração. Espaços em branco em volta das declarações não são consideradas. Não é necessário que a última declaração possua ponto e vírgula, apesar de ser considerada uma boa prática pois previne o esquecimento de acrescê-la quando for necessário aumentar o bloco.

![css syntax - declarations block.png](/@api/deki/files/6166/=css_syntax_-_declarations_block.png)

> **Nota:** O conteúdo de um bloco de declaração, que é uma lista separada por pontos e vírgulas, sem as chaves, pode ser posto dentro da tag HTML [`style`](/pt-BR/HTML/Global_attributes#attr-style).

## Regras CSS

Se as folhas de estilo pudessem apenas aplicar uma declaração para cada elemento de uma página da web, eles seriam bem limitados. O principal objetivo é aplicar diferentes declarações a diferentes partes do documento.

O CSS associa as condições com os blocos de declaração. Cada bloco (válido) é precedido por um ou mais seletores, separados por vírgula, que são condições selecionando alguns elementos da página. O grupo de seletores é chamado de regra.![css syntax - ruleset.png](/@api/deki/files/6167/=css_syntax_-_ruleset.png)

Um elemento pode ser modificado por diversos seletores, e por isso por diversas regras que potencialmente podem conter diversas propriedades, com diferentes valores, o CSS padrão define aquele que possui a precedência e que será aplicado: esse é o tal algoritmo em [cascata](/pt-BR/docs/Web/CSS/Getting_Started/Cascading_and_inheritance).

> **Nota:** É importante perceber que quando uma regra é caracterizada por um grupo de seletores que são algum tipo de atalho com cada um sendo um simples seletor isso não se aplica a validade da regra por si só.
>
> Isso leva a uma importante consequência: se apenas um dos seletores for inválido, como usar uma pseudo-classe ou pseudo-elemento desconhecido, todo o _seletor_ é inválido e por isso toda a regra é ignorada (invalidada também).

## CSS statements

Rulesets are the main building blocks of a style sheet, which often consists of only a big list of them. But there is other information that a Web author wants to convey in the style sheet, like the character set, other external style sheets to import, font face or list counter descriptions and many more. It will use other and specific kinds of statements to do that.

A **statement** is a building block that begins with any non-space characters and ends at the first closing brace or semi-colon (outside a string, non-escaped and not included into another {}, () or \[] pair).

![css syntax - statements Venn diag.png](/@api/deki/files/6168/=css_syntax_-_statements_Venn_diag.png)

There are different kinds of statements:

- **Rulesets** (or _rules_) that, as seen, associate a collection of CSS declarations to a condition described by a selector.
- **At-rules** that start with an at sign, '`@`' (`U+0040 COMMERCIAL AT`), followed by an identifier and then continuing up the end of the statement, that is up to the next semi-colon (;) outside of a block, or the end of the next block. Each type of [at-rules](/pt-BR/CSS/At-rule), defined by the identifier, may have its own internal syntax, and semantics of course. They are used to convey meta-data information (like {{ cssxref("@charset") }} or {{ cssxref("@import") }}), conditional information (like {{ cssxref("@media") }} or {{ cssxref("@document") }}), or descriptive information (like {{ cssxref("@font-face") }}).

Any statement which isn't a rule or an at-rule is invalid and ignored.

There is another group of statements, the **nested statements**, these are statements that can be used in a specific subset of at-rules, the _conditional group rules_. These statements only apply if a specific condition is matched: the `@media` at-rule content is applied only if the device on which runs the browser matches the expressed condition; the `@document` at-rule content is applied only if the current page matches some conditions, and so on. In CSS1 and CSS2.1, only _rulesets_ could be used inside a conditional group rules. That was very restrictive and this restriction was lifted in [_CSS Conditionals Level 3_](/pt-BR/CSS/CSS3#Conditionals). Now, though it still is experimental and not support by every browser, a conditional group rules can contain a wider range of content, rulesets but also some, but not all, at-rules.
