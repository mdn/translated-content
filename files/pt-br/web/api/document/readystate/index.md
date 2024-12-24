---
title: Document.readyState
slug: Web/API/Document/readyState
---

{{APIRef("DOM")}}

## Sumário

Retorna "_loading_" enquanto {{ domxref("document") }} está carregando, "_interactive_" quando foi carregado porém seus sub-recursos (como imagens, por exemplo) ainda não, e "_complete_" quando foi totalmente carregado.

O evento `readystatechange` é acionado no objeto {{ domxref("document") }} quando esse valor é alterado.

## Sintaxe

```
var string = document.readyState;
```

### Valores

O `readyState` de um documento pode ser um dos seguintes:

- `loading`
  - : O {{domxref("document")}} ainda está carregando.
- `interactive`
  - : O documento terminou de ser carregado e o documento foi analisado, mas sub-recursos, como imagens, folhas de estilo e quadros, ainda estão sendo carregados.
- `complete`
  - : O documento e todos os sub-recursos terminaram de carregar. O estado indica que o [`load`](/pt-BR/docs/Web/API/Window/load_event) evento está prestes a disparar.

## Exemplos

### Diferentes estados de readyState

```
switch (document.readyState) {
  case "loading":
    // O documento esta carregando
    break;
  case "interactive":
    // O documento acabou de carregar. Nós podemos acessar os elementos do DOM.
    // mas sub-recursos, como imagens, folhas de estilo e quadros, ainda estão sendo carregados.
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // A pagina carregou por completo.
    console.log("The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText);
    break;
}
```

### readystatechange como uma alternativa para DOMContentLoaded evento

```
// alternativa para DOMContentLoaded evento
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    initApplication();
  }
}
```

### readystatechange como uma alternativa para load evento

```
// ternativa para load evento
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    initApplication();
  }
}
```

### readystatechange como ouvinte de evento para inserir ou modificar o DOM antes de DOMContentLoaded

```
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    initLoader();
  }
  else if (event.target.readyState === 'complete') {
    initApp();
  }
});
```

## Especificação

- <http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#current-document-readiness>

## Veja também

- [document.onreadystatechange](/pt-BR/docs/Web/API/Document/readystatechange_event)
