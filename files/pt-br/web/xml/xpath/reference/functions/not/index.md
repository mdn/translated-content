---
title: not
slug: Web/XML/XPath/Reference/Functions/not
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `not` avalia uma expressão booleana e retorna o valor oposto.

## Sintaxe

```plain
not( expression )
```

### Parâmetros

- `expression`
  - : A expressão é avaliada exatamente como se fosse passada como argumento para a função [boolean()](/pt-BR/docs/Web/XML/XPath/Reference/Functions/boolean).

### Valor de retorno

True para uma expressão que é avaliada como false; false para uma expressão que é avaliada como true.

## Descrição

- Esta função deve se comportar de forma semelhante à função [boolean()](/pt-BR/docs/Web/XML/XPath/Reference/Functions/boolean), exceto que retorna o valor oposto.
- Você pode testar se um elemento não tem algum atributo.

  ```xml
  <xsl:for-each match="//a[not(@name and @name = 'badname')]">
    <!-- itera sobre qualquer elemento <a> no documento que
          não tem o atributo 'name' de forma alguma, ou tem um,
          mas cujo valor não é "badname". -->
  </xsl:template>
  ```

## Especificações

[XPath 1.0 4.3](https://www.w3.org/TR/xpath-10/#function-not)

## Compatibilidade com Gecko

Compatível.
