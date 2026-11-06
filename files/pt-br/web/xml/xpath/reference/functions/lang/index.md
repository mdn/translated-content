---
title: lang
slug: Web/XML/XPath/Reference/Functions/lang
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `lang` determina se o nó de contexto corresponde ao idioma fornecido e retorna o valor booleano verdadeiro ou falso.

## Sintaxe

```plain
lang(string )
```

### Parâmetros

- `string`
  - : O código de idioma ou código de localização (idioma e país) a ser correspondido.

### Valor de retorno

`true` se o nó de contexto corresponder ao idioma fornecido. Caso contrário, `false`.

## Descrição

- O idioma de um nó é determinado pelo seu atributo `xml:lang`. Se o nó atual não tiver um atributo `xml:lang`, então o valor do atributo `xml:lang` do ancestral mais próximo que tiver um atributo `xml:lang` determinará o idioma do nó atual. Se o idioma não puder ser determinado (nenhum ancestral tem um atributo `xml:lang`), esta função retornará false.

- Se a `string` fornecida não especificar um código de país, esta função corresponderá a nós desse idioma com qualquer código de país. O inverso não é verdadeiro.

Dado este fragmento de XML:

```xml
<p xml:lang="en">I went up a floor.</p>
<p xml:lang="en-GB">I took the lift.</p>
<p xml:lang="en-US">I rode the elevator.</p>
```

E esta parte de um template XSL:

```xml
<xsl:value-of select="count(//p[lang('en')])" />
<xsl:value-of select="count(//p[lang('en-GB')])" />
<xsl:value-of select="count(//p[lang('en-US')])" />
<xsl:value-of select="count(//p[lang('de')])" />
```

A saída pode ser:

```plain
3
1
1
0
```

## Especificações

[XPath 1.0 4.3](https://www.w3.org/TR/xpath-10/#function-lang)

## Compatibilidade com Gecko

Compatível.
