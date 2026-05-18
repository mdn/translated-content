---
title: <xsl:text>
slug: Web/XML/XSLT/Reference/Element/text
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:text>` escreve texto literal na árvore de saída. Pode conter `#PCDATA`, texto literal e referências de entidade.

## Sintaxe

```xml
<xsl:text disable-output-escaping="yes" | "no">
  TEXT
</xsl:text>
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

- `disable-output-escaping`
  - : Especifica se os caracteres especiais devem ser escapados ao serem escritos na saída. Os valores disponíveis são `yes` ou `no`. Se `yes` for definido, por exemplo, o caractere `>` é exibido como `>`, e não como `&gt;`.

    > [!NOTE]
    > Navegadores mais antigos podem não serializar o resultado da transformação (a "saída" abaixo), tornando este atributo irrelevante nesses contextos. Para exibir entidades HTML, use valores numéricos, por ex., `&#160;` para `&nbsp;`.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSLT, seção 7.2

## Compatibilidade com Gecko

Compatível conforme indicado.
