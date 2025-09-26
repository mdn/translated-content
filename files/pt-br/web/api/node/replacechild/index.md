---
title: Node.replaceChild
slug: Web/API/Node/replaceChild
---

{{ApiRef("DOM")}}

## Sumário

Substitui o elemento filho especificado por outro.

## Sintaxe

```
replacedNode = parentNode.replaceChild(newChild, oldChild);
```

- `newChild` é o novo elemento que será inserido no lugar do `oldChild`. Se já existir no DOM, será removido primeiro para depois ser inserido.
- `oldChild` é o elemento existente que será substituído.
- `replacedNode` é elemento substituído. É o mesmo elemento que oldChild.

## Exemplo

```js
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// Cria um novo elemento vazio
// sem ID, atributos ou conteúdo
var sp1 = document.createElement("span");

// Adiciona um ID 'newSpan' para o elemento
sp1.setAttribute("id", "newSpan");

// Adiciona contéudo para o elemento
var sp1_content = document.createTextNode("new replacement span element.");

// Coloca o conteúdo no elemento
sp1.appendChild(sp1_content);

// Procura o elemento que será substituído
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// Substituí o elemento que já existe (sp2) por o novo elemento (sp1)
parentDiv.replaceChild(sp1, sp2);

// resultado:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>
```

## Especificação

- [DOM Level 1 Core: replaceChild](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-replaceChild)
- [DOM Level 2 Core: replaceChild](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-785887307)
- [DOM Level 3 Core: replaceChild](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-785887307)

## Veja também

- {{domxref("Node.removeChild")}}
