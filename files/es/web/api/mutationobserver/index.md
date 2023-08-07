---
title: MutationObserver
slug: Web/API/MutationObserver
---

{{APIRef("DOM")}}

`MutationObserver` establece un mecanismo para reaccionar ante cambios en el [DOM](/es/docs/DOM). Ha sido diseñado como un sustituto de los [Mutation Events](/es/docs/DOM/Mutation_events) definidos en las especificaciones de _DOM3 Events_.

## Constructor

### `MutationObserver()`

Constructor para la instaciación de nuevos _DOM mutation observers_.

```
MutationObserver(
  function callback
);
```

###### Parámetros

- `callback`
  - : La función que será llamada en cada mutación del DOM. El _observer_ llamará a esta función con dos argumentos. El primero es un array de objetos, cada uno del tipo [`MutationRecord`](#MutationRecord). El segundo es la propia instancia del `MutationObserver`.

## Métodos

| `void observe( {{domxref("Node")}} target, MutationObserverInit options );` |
| --------------------------------------------------------------------------- |
| `void disconnect();`                                                        |
| `Array takeRecords();`                                                      |

### `observe()`

Registra la instancia del `MutationObserver` para recibir notificaciones de las mutaciones del DOM sobre el nodo especificado.

```
void observe(
  {{domxref("Node")}} target,
  MutationObserverInit options
);
```

###### Parámetros

- `target`
  - : El {{domxref("Node")}} sobre el que observar las mutaciones del DOM.
- `options`
  - : `Un objeto MutationObserverInit`, que especifica que mutaciones del DOM deben ser informadas.

> **Nota:** NOTA: Añadir un observador a un elemento es igual que addEventListener, si usted observa el elemento múltiples veces no hace ninguna diferencia. Si se observa dos veces un elemento, el observe callback no se ejecutará dos veces, ni tampoco tendrá que ejecutar disconnect() dos veces. En otras palabras, una vez el elemento es observado, observarlo de nuevo con la misma instancia del observador no hará nada. Sin embargo, si el callback es diferente por supuesto se le añadirá otro observador.

### `disconnect()`

Evita que la instancia `de MutationObserver` continue recibiendo notificaciones de modificaciones del DOM. Hasta que el método [`observe()`](<#observe()>) sea usado de nuevo, la función callback no será invocada.

```
void disconnect();
```

### `takeRecords()`

Vacía la cola de registros de la instancia de `MutationObserver` devolviendo su contenido.

```
Array takeRecords();
```

###### Return value

Returns an Array of [`MutationRecord`s](#MutationRecord).

## `MutationObserverInit`

`MutationObserverInit` es un objeto para el que se pueden especificar las siguientes propiedades:

> **Nota:** NOTA: Como mínimo las propiedades `childList`, `attributes`, o `characterData` deben ser `true`. En caso contrario, se producirá un error "An invalid or illegal string was specified"

| Propiedad               | Descripción                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `childList`             | Establecer a `true` si la adición y/o eliminación de elementos hijo del nodo (incluso los nodos `text`) han se ser observados.         |
| `attributes`            | Establecer a `true` si los cambios en los atributos deben ser observados                                                               |
| `characterData`         | Establecer a `true` si los cambios en los datos deben ser observados                                                                   |
| `subtree`               | Establecer a `true` si los cambios tambien deben ser observados en los descendientes.                                                  |
| `attributeOldValue`     | Establecer a `true` si `attributes` es `true` y el valor anterior al cambio debe ser guardado.                                         |
| `characterDataOldValue` | Establecer a `true` si `characterData` vale `true` y el dato anterior al cambio de be ser guardado.                                    |
| `attributeFilter`       | Asigne un array de nombres de atributos locales (sin su espacio de nombres) si no necesita observar los cambios en todos los atributos |

## `MutationRecord`

`MutationRecord` es el objeto que será pasado a la funcion "callback" del observador. Tiene las siguientes propiedades:

- `type`: `String`

  - : Devuelve:

    - `attributes`si el cambio fué en un atributo
    - `characterData` si se produjo en un nodo.
    - `childList` si se produjo en los nodos del árbol.

    <!---->

- `target`: [`Node`](/es/docs/Web/API/Node)

  - : Devuelve el **nodo** afectado por el cambio, dependiendo del `type`:

    - Para `attributes`, el elemento cuyos atributos han cambiado.
    - Para `characterData`, el nodo `CharacterData`.
    - Para `childList`, El nodo padre cuyos hijos han cambiado.

- `addedNodes`: [`NodeList`](/es/docs/Web/API/NodeList)
  - : Devuelve los nodos añadidos. Si no tiene nodos añadidos devuelve un NodeList vacio.
- `removedNodes`: [`NodeList`](/es/docs/Web/API/NodeList)
  - : Devuelve los nodos eliminados. Si no tiene nodos eliminados devuelve un NodeList vacio.
- `previousSibling`: [`Node`](/es/docs/Web/API/Node)
  - : Devuelve el nodo hermano **anterior** añadido o eliminado, o el valor `null`.
- `nextSibling`: [`Node`](/es/docs/Web/API/Node)
  - : Devuelve el **siguiente** nodo hermano añadido o eliminado, o el valor `null`.
- `attributeName`: `String`
  - : Devuelve el nombre local del atributo cambiado, o el valor `null`.
- `attributeNamespace`: `String`
  - : Devuelve espacio de nombres (namespace) del atributo cambiado, o el valor `null`.
- `oldValue`: `String`

  - : El valor devuelto depende del `type`:

    - Para `attributes`,el valor anterior del atributo.
    - Para `characterData`,los datos antes del cambio
    - Para `childList`,devuelve `null`.

## Ejemplo de uso

El siguiente ejemplo fué tomado de: [this blog post](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/).

```js
// selecciona el nodo target
var target = document.querySelector("#some-id");

// Crea una instancia de observer
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(mutation.type);
  });
});

// Configura el observer:
var config = { attributes: true, childList: true, characterData: true };

// pasa al observer el nodo y la configuracion
observer.observe(target, config);

// Posteriormente, puede detener la observacion
observer.disconnect();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Lectura adicional

- [A brief overview](http://updates.html5rocks.com/2012/02/Detect-DOM-changes-with-Mutation-Observers)
- [A more in-depth discussion](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [A screencast by Chromium developer Rafael Weinstein](http://www.youtube.com/watch?v=eRZ4pO0gVWw)
- [The mutation summary library](http://code.google.com/p/mutation-summary/)
- [The DOM standard](http://dom.spec.whatwg.org/#mutation-observers) which defines the `MutationObserver` interface
