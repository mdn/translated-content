---
title: <xsl:value-of>
slug: Web/XML/XSLT/Reference/Element/value-of
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:value-of>` avalia uma expressão XPath, converte-a em uma string e escreve essa string na árvore de resultado.

## Sintaxe

```xml
<xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  />
```

### Atributos obrigatórios

- `select`
  - : Especifica a expressão XPath a ser avaliada e escrita na árvore de saída.

### Atributos opcionais

- `disable-output-escaping` (O Netscape não serializa o resultado da transformação — a "saída" abaixo — portanto este atributo é essencialmente irrelevante em contexto. Para exibir entidades HTML, use valores numéricos, por ex., `&#160` para `&nbsp`)
  - : Especifica se os caracteres especiais devem ser escapados ao serem escritos na saída. Os valores disponíveis são `yes` ou `no`. Se `yes` for definido, por exemplo, o caractere > é exibido como `>`, e não como `&gt`.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSLT, seção 7.6.1.

## Compatibilidade com Gecko

Compatível, exceto conforme indicado acima.
