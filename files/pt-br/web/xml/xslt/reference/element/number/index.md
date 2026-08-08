---
title: <xsl:number>
slug: Web/XML/XSLT/Reference/Element/number
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:number>` conta itens sequencialmente. Também pode ser usado para formatar rapidamente um número.

## Sintaxe

```xml
<xsl:number
  count=EXPRESSION
  level="single" | "multiple" | "any"
  from=EXPRESSION
  value=EXPRESSION
  format=FORMAT-STRING
  lang=XML:LANG-CODE
  letter-value="alphabetic" | "traditional"
  grouping-separator=CHARACTER
  grouping-size=NUMBER  />
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

- `count`
  - : Especifica o que na árvore de origem deve ser numerado sequencialmente. Usa uma expressão XPath.
- `level`
  - : Define como os níveis da árvore de origem devem ser considerados na geração de números sequenciais. Possui três valores válidos: `single`, `multiple` e `any`. O valor padrão é `single`:
    - `single`
      - : Numera nós irmãos sequencialmente, como os itens em uma lista. O processador vai até o primeiro nó no eixo [`ancestor-or-self`](/pt-BR/docs/Web/XML/XPath/Reference/Axes#ancestor-or-self) que corresponde ao atributo `count` e, em seguida, conta esse nó mais todos os seus irmãos anteriores (parando quando encontra uma correspondência com o atributo `from`, se houver) que também correspondem ao atributo `count`. Se nenhuma correspondência for encontrada, a sequência será uma lista vazia.
    - `multiple`
      - : Numera nós como uma sequência composta que reflete a posição hierárquica do nó, por ex., 1.2.2.5. (O formato aninhado pode ser especificado com o atributo `format`, por ex., A.1.1). O processador examina todos os [`ancestors`](/pt-BR/docs/Web/XML/XPath/Reference/Axes#ancestor) do nó atual e o próprio nó atual, parando quando encontra uma correspondência para o atributo `from`, se houver. Para cada nó nesta lista que corresponde ao atributo `count`, o processador conta quantos irmãos anteriores correspondentes ele possui e adiciona um para o próprio nó. Se nenhuma correspondência for encontrada, a sequência será uma lista vazia.
    - `any` (Não suportado no momento.)
      - : Numera todos os nós correspondentes, independentemente do nível, sequencialmente. Os eixos [`ancestor`](/pt-BR/docs/Web/XML/XPath/Reference/Axes#ancestor), [`self`](/pt-BR/docs/Web/XML/XPath/Reference/Axes#self) e [`preceding`](/pt-BR/docs/Web/XML/XPath/Reference/Axes#preceding) são todos considerados. O processador começa no nó atual e avança em ordem inversa de documento, parando se encontrar uma correspondência com qualquer atributo `from`. Se nenhuma correspondência com o atributo `count` for encontrada, a sequência será uma lista vazia. Este nível não é suportado no momento.

- `from`
  - : Especifica onde a numeração deve começar ou recomeçar. A sequência começa com o primeiro descendente do nó que corresponde ao atributo `from`.
- `value`
  - : Aplica um formato especificado a um número. Esta é uma maneira rápida de formatar um número fornecido pelo usuário (em oposição a um número de sequência de nó) em qualquer um dos formatos padrão de `<xsl:number>`.
- `format`
  - : Define o formato do número gerado:
    - `format="1"`
      - : `1 2 3 . . .` (Este é o único formato suportado no momento)
    - `format="01"`
      - : `01 02 03 . . . 09 10 11 . . .`
    - `format="a"`
      - : `a b c . . .y z aa ab . . .`
    - `format="A"`
      - : `A B C . . . Y Z AA AB . . .`
    - `format="i"`
      - : `i ii iii iv v . . .`
    - `format="I"`
      - : `I II III IV V . . .`

- `lang` (Não suportado no momento.)
  - : Especifica qual alfabeto do idioma deve ser usado em formatos de numeração baseados em letras.
- `letter-value`
  - : Desambigua entre sequências de numeração que usam letras. Algumas linguagens têm mais de um sistema de numeração que usa letras. Se ambos os sistemas começam com o mesmo token, pode surgir ambiguidade. Este atributo pode ter o valor `alphabetic` ou `traditional`. O padrão é `alphabetic`.
- `grouping-separator`
  - : Especifica qual caractere deve ser usado como separador de grupo (por ex., milhares). O padrão é a vírgula (`,`).
- `grouping-size`
  - : Indica o número de dígitos que compõem um grupo numérico. O valor padrão é `3`.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSLT, seção 7.7

## Compatibilidade com Gecko

Suporte parcial. Veja os comentários acima.
