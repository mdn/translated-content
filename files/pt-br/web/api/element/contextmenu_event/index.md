---
title: GlobalEventHandlers.oncontextmenu
slug: Web/API/Element/contextmenu_event
---

{{ ApiRef("HTML DOM") }}

Um uma propriedade do manipulador de eventos da janela para eventos com o botão direito do mouse. A menos que o comportamento padrão do navegador seja bloqueado (veja exemplos abaixo sobre como fazer isso), o menu de contexto do navegador irá ser ativado (apesar do IE8 ter um bug com ele e não irá ativar o menu de contexto se o manipulador de eventos contextmenu for definido). Note que este evento irá acontecer com qualquer evento não-desabilitado do botão direito do mouse e não depende de um elemento que contenha o [atributo "contextmenu"](http://hacks.mozilla.org/2011/11/html5-context-menus-in-firefox-screencast-and-code/).

## Sintaxe

```
window.oncontextmenu = funcRef;
//funcRef se refere à função a ser chamada
```

## Exemplo

Os exemplos abaixo irão desabilitar o clique com botão direito na página:

```js
document.oncontextmenu = function () {
  // Usa o document ao invés de window para compatibilidade com o IE8
  return false;
};

window.addEventListener(
  "contextmenu",
  function (e) {
    // Não compatível com IE < 9
    e.preventDefault();
  },
  false,
);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
