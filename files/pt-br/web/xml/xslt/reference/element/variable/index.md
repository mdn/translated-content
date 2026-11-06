---
title: <xsl:variable>
slug: Web/XML/XSLT/Reference/Element/variable
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:variable>` declara uma variável global ou local em uma folha de estilos e atribui-lhe um valor. Como o XSLT não permite efeitos colaterais, uma vez que o valor da variável foi estabelecido, ele permanece o mesmo até que a variável saia do escopo.

## Sintaxe

```xml
<xsl:variable name=NAME select=EXPRESSION >
  TEMPLATE
</xsl:variable>
```

### Atributos obrigatórios

- `name`
  - : Dá um nome à variável.

### Atributos opcionais

- `select`
  - : Define o valor da variável por meio de uma expressão XPath. Se o elemento contiver um template, este atributo é ignorado.

### Tipo

Nível superior ou instrução. Se ocorrer como elemento de nível superior, a variável tem escopo global e pode ser acessada em todo o documento. Se ocorrer dentro de um template, a variável tem escopo local, acessível apenas dentro do template em que aparece.

## Especificações

XSLT, seção 11.

## Compatibilidade com Gecko

Compatível.
