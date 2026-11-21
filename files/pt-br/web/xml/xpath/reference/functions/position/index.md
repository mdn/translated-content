---
title: position
slug: Web/XML/XPath/Reference/Functions/position
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `position` retorna um número igual à posição do contexto a partir do contexto de avaliação da expressão.

## Sintaxe

```plain
position()
```

### Valor de retorno

Um inteiro igual à posição do contexto a partir do contexto de avaliação da expressão.

## Descrição

- Note que a posição de um nó em um contexto não é baseada em zero. O primeiro nó tem a posição 1.

- O contexto é determinado pelo restante do caminho.

  ```xml
  <xsl:template match="//a[position() = 5]">
    <!-- este template corresponde ao quinto elemento a
            em qualquer lugar do documento. -->
  </xsl:template>
  ```

  ```xml
  <xsl:template match="//div[@class='foo']/bar[position() = 1]">
    <!-- este template corresponde ao primeiro elemento bar que é
        filho de um elemento div com um atributo class igual a "foo" -->
  </xsl:template>
  ```

## Especificações

[XPath 1.0 4.1](https://www.w3.org/TR/xpath-10/#function-position)

## Compatibilidade com Gecko

Compatível.
