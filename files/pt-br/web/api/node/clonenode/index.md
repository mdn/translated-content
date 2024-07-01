---
title: Node.cloneNode()
slug: Web/API/Node/cloneNode
---

{{APIRef("DOM")}}

O método **`Node.cloneNode()`** duplica um elemento node (nó) da estrutura de um documento DOM. Ele retorna um clone do elemento para o qual foi invocado.

## Syntax

```
var dupNode = node.cloneNode(deep);
```

- _node_
  - : O elemento node (nó) a ser clonado 'duplicado'.
- _dupNode_
  - : O novo elemento node (nó) resultado da clonagem do elemento node.
- _deep {{optional_inline}} \[1]_
  - : true se os elementos filhos do nó que está sendo clonado devem ser clonados juntos, ou false para clonar apenas o nó específico dispensando, assim, qualquer elemento DOM filho. Veja os exemplos abaixo.

> **Nota:** Na especificação do DOM4 (implementado no Gecko 13.0), o argumento `deep` é opcional. Se omitido, por padrão, o método age como se o valor de deep fosse setado como true durante a sua execução. Para criação de clones superficiais, o argumento `deep` deve ser setado como `false`.
>
> Este comportamento foi alterado na última especificação. Se omitido o argumento deep, o método irá interpretar o valor de deep como se fosse false. Embora ele continue opcional, é recomendado que você sempre observe o argumento deep para fins de compatibilidade anterior e posterior. Com o Gecko 28.0), foi advertido aos desenvolvedores para não omitirem o argumento. Iniciado com o Gecko 29.0), um clone superficial é o padrão ao invés de um clone aprofundado.

## Exemplo

```js
<div id="paragrafos">
  <p>Texto parágrafo</p>
</div>;

//Obtém o elemento div
var div_p = document.getElementById("paragrafos");

//Obtém o primeiro filho do elemento div
var p = div_p.firstChild;

//Clona o elemento, no caso, um parágrafo
var p_clone = p.cloneNode(true);

//Adiciona o clone do elemento <p> ao elemento <div>
div_p.appendChild(p_clone);
```

## Notas

A clonagem de um elemento node copia todos os seus atributos e valores. Porém, não tem o mesmo comportamento em relação aos "event listeners".

O elmento node resultante da ação de clonagem não faz parte da estruturam DOM do documento até que ele seja adicionado utilizando o método appendChild() ou outro similar, conforme exemplo acima.

Se o argumento (deep) for setado como false, os nós filhos do elemento node clonado não serão clonados juntos, assim como os respectivos textos.

Se o argumento (deep) for setado como true, os nós filhos, toda a árvore DOM do elemento clonado, será clonada junto.

> **Aviso:** **Cuidado:** `cloneNode()` pode duplicar IDs em um documento.

Se o elemento node (nó) clonado tiver uma ID e o novo elemento node resultante da clonagem for ser inserido no mesmo documento, a ID de um dos nós deve ser alterada para que observem o princípio de unicidade. Em outras palavras, um mesmo documento não pode ter elementos com IDs iguais. Se for o caso de trabalhar com manipulação de elementos DOM através do atributo "name", tome cuidado em observá-lo.

Clonagem de node (nó) para um documento diferente, use o seguinte método: {{domxref("Document.importNode()")}}.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
