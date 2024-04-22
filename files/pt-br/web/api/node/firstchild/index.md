---
title: Node.firstChild
slug: Web/API/Node/firstChild
---

{{APIRef("DOM")}}

**`Node.firstChild`** é uma propriedade do tipo somente leitura que retorna o node (nó) do primeiro elemento filho de uma árvore DOM ou null no caso do elemento não ter filhos (children).

## Syntax

```
var childNode = node.firstChild;
```

**node:** elemento node (nó pai) de referência para busca do seu primeiro filho (firstChild) considerada a estrutura DOM.

**childNode:** elemento node (nó filho) considerado como primeiro filho (firstChild) de node (pai).

## Descrição

childNode é uma referência para o primeiro filho (node) de uma estrutura DOM, um node (nó) que não tem filhos retornará null.

## Exemplo

Este exemplo demonstra o uso do firstChild e como os espaços em branco "whitespace" de um node (nó) podem interferir.

```html
<p id="para-01">
  <span>First span</span>
</p>

<script type="text/javascript">
  var p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
```

No exemplo acima, o console.log() deverá exibir '#text' porque o nó de texto inserido mantém espaços em branco 'whitespace' entre a tag \<p id="para-01"> e a tag \<span>. Qualquer espaço em branco poderá causar '#text'.

> **Nota:** "Tabs" também podem causar esse comportamento.

Se os espaços em branco for removidos do código, o '#text' não será mais considerado e a tag \<span> se tornará o primeiro filho firstChild do parágrafo, conforme exemplo abaixo.

```html
<p id="para-01"><span>First span</span></p>

<script type="text/javascript">
  var p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
```

Agora o console.log() irá exibir 'SPAN'.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
