---
title: Node.insertBefore
slug: Web/API/Node/insertBefore
---

{{ApiRef("DOM")}}

O método **`Node.insertBefore()`** insere um nó antes do nó de referência como um filho de um nó pai especificado. Se o filho especificado for uma referência a um nó existente no documento, `insertBefore()` o moverá de sua posição atual para a nova posição (não há necessidade de remover o nó de seu nó pai antes de anexá-lo a outro nó).

Isso significa que um nó não pode estar em dois pontos do documento simultaneamente. Portanto, se o nó já tiver um pai, o nó será removido pela primeira vez e inserido na nova posição. O {{domxref("Node.cloneNode()")}} pode ser usado para fazer uma cópia do nó antes de anexá-lo ao novo pai. Note que as cópias feitas com `cloneNode()` não serão automaticamente mantidas em sincronia.

Se o nó de referência for `null`, o nó especificado será incluído no final da lista de filhos do nó pai especificado.

Se o filho especificado for um {{domxref("DocumentFragment")}}, todo o conteúdo do `DocumentFragment` será movido para a lista de filhos do nó pai especificado.

## Sintaxe

```
var elementoInserido = elementoPai.insertBefore(novoElemento, elementoDeReferencia);
```

- `elementoInserido` O nó sendo inserido, que é `novoElemento`
- `elementoPai` Pai do nó recentemente inserido.
- `novoElemento` O nó a ser inserido.
- `elementoDeReferencia` O nó antes do qual o `novoElemento` será inserido.

Se _elementoDeReferencia_ for `null`, _novoElemento_ será inserido no fim da lista de nós filhos.

> **Nota:** `elementoDeReferencia` não é um parâmetro opcional - você deve passar explicitamente um `Node` ou `null`. Deixar de fornecer ou passar valores inválidos pode [ter comportamento diferente](https://code.google.com/p/chromium/issues/detail?id=419780) em diferentes versões de navegadores.

### Return value

O valor retornado é o filho incluído, exceto quando `newNode` é um {{domxref("DocumentFragment")}}, caso em que o {{domxref("DocumentFragment")}} vazio é retornado.

## Exemplo

```html
<div id="elementoPai">
  <span id="elementoFilho">foo bar</span>
</div>

<script>
  // Cria um novo elemento <span> vazio
  var sp1 = document.createElement("span");

  // Guarda a referência do elemento atraś do qual nos queremos inserir o novo elemento
  var sp2 = document.getElementById("elementoFilho");
  // Guarda a referência do elemento pai
  var divPai = sp2.parentNode;

  // Insere o novo elemento no DOM antes de sp2
  divPai.insertBefore(sp1, sp2);
</script>
```

Não existe um método `insertAfter`. Mas ele pode ser emulado combinando o método `insertBefore` com [`nextSibling`](/pt-BR/docs/DOM/Node.nextSibling).

No exemplo anterior, `sp1` poderia ser inserido após `sp2` desta forma:

```
divPai.insertBefore(sp1, sp2.nextSibling);
```

Se `sp2` não possuir um próximo nó, significa que ele deve ser o último filho — `sp2.nextSibling` retorna `null`, e `sp1` é inserido ao fim da da lista de nós filhos (logo após sp2).

## Exemplo 2

Inserir um elemento antes do primeiro nó filho, usando a propriedade [firstChild](/pt-BR/docs/DOM/Node.firstChild).

```js
// Guarda a referêncis do elemento no quela nóe queremos inserir o novo nó
var elementoPai = document.getElementById("elementoPai");
// Guarda a referência do primeiro filho
var primeiroFilho = elementoPai.firstChild;

// Cria um novo elemento
var novoElemento = document.createElement("div");

// Insere o novo elemento antes do primeiro filho
elementoPai.insertBefore(novoElemento, primeiroFilho);
```

Quando o elemento não possui o primeiro filho, então `firstChild` é `null`. O elemento ainda será inserido no pai, mas após o último filho. Pois se o elemento pai não possui primeiro filho, ele também não possui o último filho. Conseqüentemente, o novo elemento será o único elemento após a inserção.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
