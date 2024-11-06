---
title: MutationObserver.MutationObserver()
slug: Web/API/MutationObserver/MutationObserver
---

{{APIRef("DOM WHATWG")}}

El constructor DOM **`MutationObserver()`** — parte del interface {{domxref("MutationObserver")}} — crea y devuelve un nuevo objeto **observer** que llamará a la función especificada (callback), cuando tengan lugar cambios sobre el DOM. Estos observadores no se inician inmediatamente; en primer lugar debemos llamar al método {{domxref("MutationObserver.observe", "observe()")}} para establecer qué parte del DOM observar y que tipo de cambios comunicar.

## Sintaxis

```
var observer = new MutationObserver(callback);
```

### Parámetros

- `callback`
  - : La función que será llamada con cada cambio en el DOM, determinado por el nodo, subárbol y opciones. Esta función toma dos parámetros de entrada: un array de objetos {{domxref("MutationRecord")}}, con los cambios producidos, y el `MutationObserver` que llamó a la función. Para mas detalles vea [example](#example)

### Valor devuelto

Un nuevo objeto {{domxref("MutationObserver")}}, configurado para llamar a una determinada función cuando se producca un cambio en el DOM.

## Ejemplo

Este ejemplo crea un nuevo `MutationObserver` configurado para _observar_ a un nodo y a sus hijos (subárbol), cuando se añadan o eliminen elementos al mismo; tambien observa cualquier cambio en los atributos de los elementos del árbol.

### La función callback

```js
function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    switch (mutation.type) {
      case "childList":
        /* Uno o mas hijos han sido añadidos y/o eliminados del árbol;
           vea mutation.addedNodes y mutation.removedNodes */
        break;
      case "attributes":
        /* El valor de un atributo en mutation.target ha cambiado;
           El nombre del atributo esta en mutation.attributeName y
           su valor anterior en mutation.oldValue */
        break;
    }
  });
}
```

La función `callback()` es llamada cuando el **observer** detecta cambios que coinciden con la configuración de consulta especificada cuando llamamos a {{domxref("MutationObserver.observe", "observe()")}} para que inicie la observación.

El tipo de cambio que se produjo (tanto en la lista de hijos como en los atributos) es detectado observando la propiedad {{domxref("MutationRecord.type", "mutation.type")}}

### Crear e iniciar un "observer"

Este código establece el proceso de observación

```js
var targetNode = document.querySelector("#someElement");
var observerOptions = {
  childList: true,
  attributes: true,
  subtree: true, //Omita o ponga false si no quiere controlar los cambios en los hijos
};

var observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);
```

El subárbol deseado se localiza buscando un elemento cuyo ID es "someElement". Un conjunto de opciones para el "observer" es establecido en el registro `observerOptions`. En él, especificamos los valores `true` tanto para `childList` como `attributes`, para obtener la información deseada.

Posteriormente instanciamos el objeto observer, especificando la función `callback()`, e iniciamos la observación de los nodos del DOM llamando al método `observe()`, pasandole el nodo y las opciones.

Desde este momento y hasta que se llame al método {{domxref("MutationObserver.disconnect", "disconnect()")}}, la funcion `callback()` será llamada cada vez que un elemento sea añadido o eliminado del árbol del DOM, cuya raiz es `targetNode`, o uno de sus atributos sea cambiado.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
