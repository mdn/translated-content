---
title: WindowEventHandlers.onstorage
slug: Web/API/Window/storage_event
tags:
  - API
  - Armazenamento web
  - Propriedade
  - Referencia
  - WindowEventHandlers
translation_of: Web/API/WindowEventHandlers/onstorage
original_slug: Web/API/WindowEventHandlers/onstorage
---
{{ ApiRef() }}

A propriedade **`WindowEventHandlers.onstorage`** contém um manipulador de eventos que executa quando o evento {{event("storage")}} dispara. Isto ocorre quando a área de armazenamento é mudada. (ex. um novo item é armazenado.)

## Sintaxe

```
windowObj.onstorage = function() { ... };
```

## Exemplos

```js
window.onstorage = function(e) {
  console.log('The ' + e.key + ' key has been changed from ' + e.oldValue + ' to ' + e.newValue + '.');
};
```

## Especificações

| Especificação                                                                                                | Status                           | Comentário |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-window-onstorage','onstorage')}} | {{Spec2('HTML WHATWG')}} |            |

## Compatibilidade com navegadores

{{Compat("api.Window.storage_event")}}
