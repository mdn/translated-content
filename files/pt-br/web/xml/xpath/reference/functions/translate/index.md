---
title: translate
slug: Web/XML/XPath/Reference/Functions/translate
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `translate` avalia uma string e um conjunto de caracteres para traduzir e retorna a string traduzida.

## Sintaxe

```plain
translate(string, abc, XYZ)
```

### Parâmetros

- `string`
  - : A string a ser avaliada.
- `abc`
  - : A string de caracteres que serão substituídos.
- `XYZ`
  - : A string de caracteres usada para substituição. O primeiro caractere em `XYZ` substituirá toda ocorrência do primeiro caractere em `abc` que aparecer em `string`.

### Valor de retorno

A string traduzida.

## Descrição

Para cada caractere em `string`, se `abc` contiver aquele caractere, ele é substituído pelo caractere no mesmo índice em `XYZ`. Se `abc` não contiver aquele caractere, ele é mantido como está.

- Se `abc` for mais longa que `XYZ`, então os caracteres extras no final de `abc` são mapeados para a string vazia (ou seja, são removidos da string de origem).
- Se `XYZ` contiver mais caracteres que `abc`, os caracteres extras são ignorados.
- Se um caractere aparecer várias vezes em `abc`, então a primeira ocorrência determina o caractere de substituição.

`translate()` é uma função de substituição caractere por caractere, não uma função de regexp ou substituição de string. As strings `abc` e `XYZ` representam _cifras de caracteres_, não substrings. Isso significa que se você encontrar qualquer um dos casos acima, pode estar usando o método incorretamente (exceto talvez ter um `abc` mais longo para remover certos caracteres).

Uma substituição como esta não produzirá `The quick red fox` como você poderia esperar; em vez disso, o resultado é `The quick red fdx`.

```xml example-bad
<xsl:value-of select="translate('The quick brown fox', 'brown', 'red')" />
```

## Exemplos

### Usando `translate()` para conversão de maiúsculas/minúsculas

XPath observa que a função translate não é uma solução suficiente para conversão de maiúsculas e minúsculas em todos os idiomas. Uma versão futura do XPath pode fornecer funções adicionais para conversão de maiúsculas e minúsculas.

No entanto, esta é a função mais próxima que temos atualmente para converter uma string para maiúsculas ou minúsculas.

```xml
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
```

Saída

```plain
THE QUICK BROWN FOX.
```

## Especificações

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-translate)

## Compatibilidade com Gecko

Compatível.
