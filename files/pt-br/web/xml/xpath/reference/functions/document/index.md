---
title: document
slug: Web/XML/XPath/Reference/Functions/document
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `document` encontra um conjunto de nós em um documento externo, ou múltiplos documentos externos, e retorna o conjunto de nós resultante.

## Sintaxe

```plain
document( URI [,node-set] )
```

### Parâmetros

- `URI`
  - : Uma URI absoluta ou relativa do documento a ser recuperado. A URI também pode incluir um identificador de fragmento.
- `node-set` (opcional)
  - : Uma expressão que aponta para um conjunto de nós no documento externo que deve ser retornado.

### Valor de retorno

Um conjunto de nós.

## Descrição

- Se a URI contiver um identificador de fragmento e esse fragmento puder ser identificado no documento externo, esse fragmento será tratado como a raiz na expressão do argumento `node-set`. Se o argumento `node-set` for omitido, o fragmento inteiro será retornado.
- Se o argumento `URI` for um conjunto de nós e o segundo argumento estiver presente, cada nó do conjunto de nós será avaliado como uma URI separada, e o conjunto de nós retornado será como se a função `document` tivesse sido chamada várias vezes (cada vez com o mesmo segundo argumento conforme fornecido na chamada de função) e os conjuntos de nós resultantes tivessem sido concatenados em um único conjunto de nós.
- Outras condições específicas existem com comportamentos especificados. Consulte a documentação do XSLT 1.0 para detalhes.
- Como a URI é relativa ao documento XSL, `document("")` retornaria o nó raiz do documento atual.

Esta função é uma adição específica do XSLT ao XPath. Não faz parte da biblioteca de funções XPath principal.

## Especificações

[XSLT 1.0 12.1](https://www.w3.org/TR/xslt-10/#function-document)

## Compatibilidade com Gecko

Suportado.
