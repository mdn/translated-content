---
title: WindowEventHandlers.onstorage
slug: Web/API/Window/storage_event
---

{{ ApiRef() }}

A propriedade **`WindowEventHandlers.onstorage`** contém um manipulador de eventos que executa quando o evento {{event("storage")}} dispara. Isto ocorre quando a área de armazenamento é mudada. (ex. um novo item é armazenado.)

## Sintaxe

```
windowObj.onstorage = function() { ... };
```

## Exemplos

```js
window.onstorage = function (e) {
  console.log(
    "The " +
      e.key +
      " key has been changed from " +
      e.oldValue +
      " to " +
      e.newValue +
      ".",
  );
};
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
