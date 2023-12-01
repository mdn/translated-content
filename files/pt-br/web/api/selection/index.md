---
title: Seleção
slug: Web/API/Selection
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

Um objeto **`Selection`** representa um intervalo do texto selecionado pelo usuário ou a posição atual do cursor. Para obter o objeto Selection para inspecionar ou modificar, use {{DOMxRef("Window.getSelection()")}}.

O usuário pode fazer a seleção da esquerda para a direita (na orientação do documento) ou da direita para a esquerta (orientação inversa do documento). O atributo **anchor (âncora)** é onde o usuário iniciou a seleção e o atributo **focus (foco)** é onde o usuário terminou a seleção. Se você fizer a seleção utilizando um mouse no desktop, o _anchor_ é definido onde você pressionou o botão do mouse e o _focus_ é definido onde você soltou o botão do mouse. _Anchor_ e _focus_ não devem ser confundidos com a posição inicial e final da seleção, pois o _anchor_ pode ser definido antes do _focus_ ou vice versa, dependendo da direção em que você fez sua seleção.

## Propriedades

- {{DOMxRef("Selection.anchorNode")}}{{ReadOnlyInline}}
  - : Retorna o {{DOMxRef("Node")}} onde a seleção começou.
- {{DOMxRef("Selection.anchorOffset")}}{{ReadOnlyInline}}
  - : Retorna um número representando o deslocamento do anchor dentro do elemento Se o elemento for do tipo text node, o número retornado será o número de caracteres no elemento que precedem o anchor (clique inicial da seleção). Se o elemento for do tipo element (qualquer tag html que não seja text node), o número retornado será o número de nós filhos do elemento que precedem o anchor.
- {{DOMxRef("Selection.focusNode")}}{{ReadOnlyInline}}
  - : Retorna o {{DOMxRef("Node")}} onde a seleção termina.
- {{DOMxRef("Selection.focusOffset")}}{{ReadOnlyInline}}
  - : Retorna um número representando o deslocamento do focus dentro do elemento Se o elemento for do tipo text node, o número retornado será o número de caracteres no elemento que precedem o focus (posição onde o mouse foi solto). Se o elemento for do tipo element (qualquer tag html que não seja text node), o número retornado será o número de nós filhos do elemento que precedem o focus.
- {{DOMxRef("Selection.isCollapsed")}}{{ReadOnlyInline}}
  - : Retorna um valor booleano indicando se o início e o final da seleção são a mesma posição, ou seja, começou e terminou no mesmo lugar.
- {{DOMxRef("Selection.rangeCount")}}{{ReadOnlyInline}}
  - : Retorna no número de intervalos da seleção.
- {{DOMxRef("Selection.type")}}{{ReadOnlyInline}}
  - : Retorna um {{DOMxRef("DOMString")}} descrevento o tipo da seleção atual.

## Métodos

- {{DOMxRef("Selection.addRange()")}}
  - : Um objeto {{DOMxRef("Range")}} que será adicionado na seleção.
- {{DOMxRef("Selection.collapse()")}}
  - : Colapsa a seleção atual em um único ponto.
- {{DOMxRef("Selection.collapseToEnd()")}}
  - : Colapsa a seleção para o final do último intervalo na seleção.
- {{DOMxRef("Selection.collapseToStart()")}}
  - : Colapsa a seleção para o início do primeiro intervalo na seleção.
- {{DOMxRef("Selection.containsNode()")}}
  - : Indica se um certo nó é parte da seleção.
- {{DOMxRef("Selection.deleteFromDocument()")}}
  - : Apaga o conteúdo da seleção do documento.
- {{DOMxRef("Selection.empty()")}}
  - : Remove todos os intervalos da seleção. Este é um apelido para `removeAllRanges()` — Veja {{DOMxRef("Selection.removeAllRanges()")}} para mais detalhes.
- {{DOMxRef("Selection.extend()")}}
  - : Move o focus (final da seleção) para um ponto específico.
- {{DOMxRef("Selection.getRangeAt()")}}
  - : Retorna um objeto {{DOMxRef("Range")}} represetando um dos intervalos atualmente selecionados.
- {{DOMxRef("Selection.modify()")}}{{Non-standard_Inline}}
  - : Altera a seleção atual.
- {{DOMxRef("Selection.removeRange()")}}
  - : Remove um intervalo da seleção.
- {{DOMxRef("Selection.removeAllRanges()")}}
  - : Remove todos os intervalos da seleção.
- {{DOMxRef("Selection.selectAllChildren()")}}
  - : Adiciona todos os filhos do nó especificado para a seleção.
- {{DOMxRef("Selection.setBaseAndExtent()")}}
  - : Define que a seleção será um intervalo incluindo todos ou partes dos dois nós DOM especificados, e qualquer conteúdo entre esses nós.
- {{DOMxRef("Selection.setPosition()")}}
  - : Colapsa a seleção atual para um único ponto. Este é um apelido para `collapse()` — Veja {{DOMxRef("Selection.collapse()")}} para mais detalhes.
- {{DOMxRef("Selection.toString()")}}
  - : Retorna uma string atualmente representada pelo objeto selection, i.e. o texto atualmente selecionado.

## Notas

### Representação da seleção em formato de String

Chamando a função {{DOMxRef("Selection.toString()")}} retorna o texto selecionado, e.g.:

```js
var selObj = window.getSelection();
window.alert(selObj);
```

Perceba que usando um objeto selection como argumento de `window.alert` executará o metodo `toString` automaticamente.

### Multiplos intervalos em uma seleção

Um objeto selection representa os {{DOMxRef("range","intervalos")}} que o usuário selecionou.
Normalmente é apenas um intervalo, acessado da seguinte forma:

```js
var selObj = window.getSelection();
var range = selObj.getRangeAt(0);
```

- `selObj` é um objeto selection
- `range` é um objeto {{DOMxRef("Range")}}

Como consta nas [Especificações da API de seleção](https://www.w3.org/TR/selection-api/#h_note_15), a API foi inicialmente criada pela Netscape e usados multiplos intervalos, por instância, para permitir ao usuário selecionar uma coluna de uma {{HTMLElement("table")}}. Outros navegadores como Gecko não implementaram multiplos intervalos, e a especificação exige que a seleção sempre tenha um único intervalo.

### Seleção e foco de input

Seleção e foco de input (indicado por {{DOMxRef("Document.activeElement")}}) tem uma relação complexa, que depende do navegador. Para um código compatível com vários navegadores, o melhor é manter os códigos separados.

O Safari e o Chrome (ao contrário do Firefox) historicamente foca no elemento contendo a seleção quando a seleção é modificada programaticamente, mas isto pode mudar no futuro (veja [W3C bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) e [WebKit bug 38696](https://webkit.org/b/38696)).

### Comportamento da API de Seleção em termos de edição e alterações de foco do host

A API de Seleção tem um comportamento comum (i.e. compartilhado entre navegadores) que define como o comportamento do foco muda para **elemento editável**, após alguns desses métodos serem executados.

Os comportamentos são que um elemento editado recebe o foco se anteriormente a seleção estiver fora dele, então um método da API de seleção é executado e causa uma nova seleção que será feita em um único intervalo dentro do elemento sendo editado. O foco então é movido para o final do elemento.

> **Nota:** Os métodos da API de seleção, move o foco apenas para o elemento sendo editado, não para outro elemento que pode receber o foco (e.g. {{HTMLElement("a")}}).

O comportamento acima é aplicado para as seleções feitas usando os seguintes métodos:

- {{DOMxRef("Selection.collapse()")}}
- {{DOMxRef("Selection.collapseToStart()")}}
- {{DOMxRef("Selection.collapseToEnd()")}}
- {{DOMxRef("Selection.extend()")}}
- {{DOMxRef("Selection.selectAllChildren()")}}
- {{DOMxRef("Selection.addRange()")}}
- {{DOMxRef("Selection.setBaseAndExtent()")}}

e quando o intervalo é modificado usando os seguintes métodos:

- {{DOMxRef("Range.setStart()")}}
- {{DOMxRef("Range.setEnd()")}}
- {{DOMxRef("Range.setStartBefore()")}}
- {{DOMxRef("Range.setStartAfter()")}}
- {{DOMxRef("Range.setEndBefore()")}}
- {{DOMxRef("Range.setEndAfter()")}}
- {{DOMxRef("Range.collapse()")}}
- {{DOMxRef("Range.selectNode()")}}
- {{DOMxRef("Range.selectNodeContents()")}}

### Glossário

Outras palavras chaves usadas nesta seção.

- anchor
  - : O anchor de uma seleção é o ponto inicial da seleção. Quando a seleção é feita com um mouse, é onde o botão do mouse é inicialmente pressionado. Quando o usuário altera a seleção usando o mouse ou teclado, o anchor não move.
- Elemento editável
  - : Um elemento editável — i.e. um elemento HTML com o atributo [`contenteditable`](/pt-BR/docs/Web/HTML/Global_attributes#contenteditable) definido, ou o HTML filho de um documento estiver com o {{DOMxRef("Document.designMode", "designMode")}} habilitado.
- foco de uma seleção
  - : O foco da seleção é o ponto final da seleção. Quando feita a seleção com um mouse, o focus é onde o botão do mouse foi solto. Quando o usuário muda a seleção usando o mouse ou teclado, o focus é o final da seleção que move. **Nota:** Não é o mesmo que o elemento selecionado do documento, como retornado em {{DOMxRef("document.activeElement")}}.
- intervalo
  - : Um intervalo é uma parte contínua do documento. Um intervalo pode conter nós inteiros ou partes de nós, como uma parte de um text node. Um usuário normalmente irá selecionar um único intervalo por vez, mas é possível que o usuário selecione multiplos intervalos (e.g. usando a tecla Control). Um intervalo pode ser obtido de uma seleção como um objeto {{DOMxRef("range")}}. Um objeto de intervalo pode ser criado no DOM e programaticamente adicionada ou removida de uma seleção.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{DOMxRef("Window.getSelection")}}, {{DOMxRef("Document.getSelection")}}, {{DOMxRef("Range")}}
- Selection-related events: {{Event("selectionchange")}} and {{Event("selectstart")}}
- HTML inputs provide simpler helper APIs for working with selection (see {{DOMxRef("HTMLInputElement.setSelectionRange()")}})
- {{DOMxRef("Document.activeElement")}}, {{DOMxRef("HTMLElement.focus()")}}, and {{DOMxRef("HTMLElement.blur()")}}
