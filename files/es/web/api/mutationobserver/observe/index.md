---
title: MutationObserver.observe()
slug: Web/API/MutationObserver/observe
---

{{APIRef("DOM WHATWG")}}

El método {{domxref("MutationObserver")}} **`observe()`** configura la funcion `MutationObserver` para que inicie la recepción de cambios en el DOM que coincidan con las opciones dadas.

Según la configuración, el _observador_ verá un solo {{domxref("Node")}} del árbol del DOM, o ese nodo y alguno o todos los nodos descendientes.

Para detener al `MutationObserver` (de modo que la funcion no sea llamada), llame al método {{domxref("MutationObserver.disconnect()")}}.

## Sintaxis

```
mutationObserver.observe(target[, options])
```

### Parámetros

- `target`
  - : Un {{domxref("Node")}} del DOM (que puede ser un {{domxref("Element")}}) perteneciente al árbol DOM, o la raiz de un subárbol de nodos, donde observar cambios.
- `options` {{optional_inline}}
  - : Un objeto {{domxref("MutationObserverInit")}} opcional, que decribe qué cambios en el DOM deben ser enviados a la función `callback` del observador.

### Valor devuelto

`undefined`.

### Excepciones

- `TypeError`

  - : llamado en cualquiera de las siguientes circunstancias

    - Las opciones han sido configuradas de tal modo que no existe nada que monitorizar (por ejemplo, si {{domxref("MutationObserverInit.childList")}}, {{domxref("MutationObserverInit.attributes")}}, y {{domxref("MutationObserverInit.characterData")}} son **false**)
    - La opcion `attributes` es `false` (indicando que los cambios en los atributos no son monitorizados) y `attributeOldValue` es `true` y/o `attributeFilter` está presente.
    - Las opciones {{domxref("MutaitonObserverInit.characterDataOldValue", "characterDataOldValue")}} son `true` pero {{domxref("MutationObserverInit.characterData")}} es `false` (indicando que los cambios en los caracteres no se guardan).

## Notas de uso

### Reutilizar MutationObservers

Puede llamar varias veces al método `observe()` del mismo objeto `MutationObserver` para ver los cambios en diferentes partes del árbol del DOM y/o diferentes tipos de cambios. Sin embargo ha de tener en cuenta:

- Si llama a `observe()` en un nodo que ya estaba siendo observado por el mísmo `MutationObserver`, todos los observadores serán automáticamente eliminados de todos los elementos observados antes de que el nuevo observador sea activado.
- Si el mismo `MutationObserver` no estaba siendo usado sobre ese nodo, entonces los observadores existentes se quedarán solos y se agregará el nuevo.

### La observación sigue a los nodos cuando se desconecta

Los observadores de cambios tienen como objetivo permitirle ver un conjunto de nodos a lo largo del tiempo, incluso si la conexion entre estos nodos desaparece. Si esta observando un subárbol de nodos, y una parte del subárbol es desconectado y llevado a otra parte del DOM, continuará viendo ese mismo segmento de nodos, recibiendo las mismas llamadas a la función que antes de ser desconectado.

En otras palabras, hasta que se le haya notificado que los nodos se están separando de su subárbol monitoreado, recibirá notificaciones de los cambios en ese subárbol y sus nodos. Esto evita que pierda los cambios producidos despues de que la conexion se corte y antes de que tenga la oportunidad de especificar un nuevo monitoreo sobre los cambios en el nodo o subárbol movido.

De manera que en teoria si mantiene la pista de los objetos {{domxref("MutationRecord")}} que describen los cambios, podrá "deshacer" los mismos, devolviendo el DOM a su estado inicial.

## Ejemplo

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
