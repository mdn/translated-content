---
title: Eixos
slug: Web/XML/XPath/Reference/Axes
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Existem treze eixos diferentes na especificação [XPath](/pt-BR/docs/Web/XML/XPath). Um eixo representa um relacionamento com o nó de contexto e é usado para localizar nós relativos a esse nó na árvore.

Para mais informações sobre como usar expressões XPath, consulte o guia [Transformando XML com XSLT](/pt-BR/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT). Veja também a [seção 'axes' na especificação xpath](https://www.w3.org/TR/xpath-3/#axes).

- `ancestor`
  - : Indica todos os ancestrais do nó de contexto, começando pelo nó pai e percorrendo até o nó raiz.
- `ancestor-or-self`
  - : Indica o nó de contexto e todos os seus ancestrais, incluindo o nó raiz.
- `attribute`
  - : Indica os atributos do nó de contexto. Somente elementos têm atributos. Este eixo pode ser abreviado com o sinal de arroba (`@`).
- `child`
  - : Indica os filhos do nó de contexto. Se uma expressão XPath não especificar um eixo, este é entendido por padrão. Como apenas o nó raiz ou nós de elemento têm filhos, qualquer outro uso não selecionará nada.
- `descendant`
  - : Indica todos os filhos do nó de contexto, e todos os seus filhos, e assim por diante. Nós de atributo e namespace **não** são incluídos — o `parent` de um nó `attribute` é um nó de elemento, mas nós `attribute` não são filhos de seus pais.
- `descendant-or-self`
  - : Indica o nó de contexto e todos os seus descendentes. Nós de atributo e namespace **não** são incluídos — o `parent` de um nó `attribute` é um nó de elemento, mas nós `attribute` não são filhos de seus pais.
- `following`
  - : Indica todos os nós que aparecem após o nó de contexto, exceto quaisquer nós `descendant`, `attribute` e `namespace`.
- `following-sibling`
  - : Indica todos os nós que têm o mesmo pai que o nó de contexto e aparecem após o nó de contexto no documento fonte.
- `namespace` _(não suportado)_
  - : Indica todos os nós que estão no escopo do nó de contexto. Neste caso, o nó de contexto deve ser um nó de elemento.
- `parent`
  - : Indica o único nó que é pai do nó de contexto. Pode ser abreviado como dois pontos (`..`).
- `preceding`
  - : Indica todos os nós que precedem o nó de contexto no documento, exceto quaisquer nós `ancestor`, `attribute` e `namespace`.
- `preceding-sibling`
  - : Indica todos os nós que têm o mesmo pai que o nó de contexto e aparecem antes do nó de contexto no documento fonte.
- `self`
  - : Indica o próprio nó de contexto. Pode ser abreviado como um único ponto (`.`).
