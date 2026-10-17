---
title: <xsl:message>
slug: Web/XML/XSLT/Reference/Element/message
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:message>` produz uma mensagem de saída (para o Console JavaScript no navegador) e, opcionalmente, encerra a execução da folha de estilos. Pode ser útil para depuração.

## Sintaxe

```xml
<xsl:message terminate="yes" | "no" >
  TEMPLATE
</xsl:message>
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

- `terminate`
  - : Definido como `yes`, indica que a execução deve ser encerrada. O valor padrão é `no`, caso em que a mensagem é exibida e a execução continua.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSLT, seção 13.

## Compatibilidade com Gecko

Compatível.
