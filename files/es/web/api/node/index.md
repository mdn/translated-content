---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{APIRef("DOM")}}

La interfaz {{Glossary("DOM")}} **`Node`** es una clase base abstracta en la que se basan muchos otros objetos de la API DOM, lo que permite que esos tipos de objetos se usen de manera similar y, a menudo, intercambiable.
Como clase abstracta, no existe tal cosa como un simple objeto `Node`. Todos los objetos que implementan la funcionalidad `Node` se basan en una de sus subclases. Los más notables son {{domxref("Document")}}, {{domxref("Element")}} y {{domxref("DocumentFragment")}}.

Además, cada tipo de nodo de DOM está representado por una interfaz basada en `Node`.
Estos incluyen {{DOMxRef("Attr")}}, {{DOMxRef("CharacterData")}} (en los que {{DOMxRef("Text")}}, {{DOMxRef("Comment")}}, {{DOMxRef ("CDATASection")}} y {{DOMxRef("ProcessingInstruction")}} están basados) y {{DOMxRef("DocumentType")}}.

En algunos casos, es posible que una característica particular de la interfaz base `Node` no se aplique a una de sus interfaces secundarias; en ese caso, el nodo heredero puede devolver `null` o generar una excepción, según las circunstancias. Por ejemplo, intentar agregar elementos secundarios a un tipo de nodo que no puede tener elementos secundarios generará una excepción.

{{InheritanceDiagram}}

## Propiedades de instancia

_Además de las propiedades a continuación, `Node` hereda propiedades de su padre, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Node.baseURI")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que representa la URL base del documento que contiene el `Node`.
- {{DOMxRef("Node.childNodes")}} {{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("NodeList")}} en vivo que contiene todos los elementos secundarios de este nodo (incluidos elementos, texto y comentarios). Un {{DOMxRef("NodeList")}} en vivo significa que si los hijos de `Node` cambian, el objeto {{DOMxRef("NodeList")}} se actualiza automáticamente.
- {{DOMxRef("Node.firstChild")}} {{ReadOnlyInline}}
  - : Devuelve un `Node` que representa el primer nodo hijo directo del nodo, o `null` si el nodo no tiene ningún hijo.
- {{DOMxRef("Node.isConnected")}} {{ReadOnlyInline}}
  - : Un valor booleano que indica si el nodo está conectado o no (directa o indirectamente) al objeto de contexto, por ejemplo el objeto {{DOMxRef("Document")}} en el caso del DOM normal, o {{DOMxRef("ShadowRoot")}} en el caso de un DOM oculto.
- {{DOMxRef("Node.lastChild")}} {{ReadOnlyInline}}
  - : Devuelve un `Node` que representa el último nodo hijo directo del nodo, o `null` si el nodo no tiene ningún hijo.
- {{DOMxRef("Node.nextSibling")}} {{ReadOnlyInline}}
  - : Devuelve un `Node` que representa el siguiente nodo en el árbol, o `null` si no existe tal nodo.
- {{DOMxRef("Node.nodeName")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que contiene el nombre de `Node`. La estructura del nombre diferirá con el tipo de nodo. Por ejemplo, un {{DOMxRef("HTMLElement")}} contendrá el nombre de la etiqueta correspondiente, como `'audio'` para un {{DOMxRef("HTMLAudioElement")}}, un {{DOMxRef("Text")}} tendrá la cadena `'#text'`, o un nodo {{DOMxRef("Document")}} tendrá la cadena `'#document'`.
- {{DOMxRef("Node.nodeType")}} {{ReadOnlyInline}}

  - : Devuelve un `unsigned short` que representa el tipo del nodo. Los valores posibles son:

    | Nombre                        | Valor |
    | ----------------------------- | ----- |
    | `ELEMENT_NODE`                | `1`   |
    | `ATTRIBUTE_NODE`              | `2`   |
    | `TEXT_NODE`                   | `3`   |
    | `CDATA_SECTION_NODE`          | `4`   |
    | `PROCESSING_INSTRUCTION_NODE` | `7`   |
    | `COMMENT_NODE`                | `8`   |
    | `DOCUMENT_NODE`               | `9`   |
    | `DOCUMENT_TYPE_NODE`          | `10`  |
    | `DOCUMENT_FRAGMENT_NODE`      | `11`  |

- {{DOMxRef("Node.nodeValue")}}
  - : Devuelve/Establece el valor del nodo actual.
- {{DOMxRef("Node.ownerDocument")}} {{ReadOnlyInline}}
  - : Devuelve el {{DOMxRef("Document")}} al que pertenece este nodo. Si el nodo es en sí mismo un documento, devuelve `null`.
- {{DOMxRef("Node.parentNode")}} {{ReadOnlyInline}}
  - : Devuelve un `Node` que es el padre de este nodo. Si no existe tal nodo, como si este nodo es la parte superior del árbol o si no participa en un árbol, esta propiedad devuelve `null`.
- {{DOMxRef("Node.parentElement")}} {{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("Element")}} que es el padre de este nodo. Si el nodo no tiene padre, o si ese padre no es {{DOMxRef("Element")}}, esta propiedad devuelve `null`.
- {{DOMxRef("Node.previousSibling")}} {{ReadOnlyInline}}
  - : Devuelve un `Node` que representa el nodo anterior en el árbol, o `null` si no existe tal nodo.
- {{DOMxRef("Node.textContent")}}
  - : Devuelve/Establece el contenido textual de un elemento y todos sus descendientes.

## Métodos de instancia

_Además de los métodos a continuación, `Node` hereda métodos de su padre, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Node.appendChild()")}}
  - : Agrega el argumento `childNode` especificado como el último hijo del nodo actual. Si el argumento hace referencia a un nodo existente en el árbol DOM, el nodo se separará de su posición actual y se adjuntará a la nueva posición.
- {{DOMxRef("Node.cloneNode()")}}
  - : Clona un `Node` y, opcionalmente, todo su contenido. Por defecto, clona el contenido del nodo.
- {{DOMxRef("Node.compareDocumentPosition()")}}
  - : Compara la posición del nodo actual con otro nodo en cualquier otro documento.
- {{DOMxRef("Node.contains()")}}
  - : Devuelve el valor `true` o `false` que indica si un nodo es o no descendiente del nodo que llama.
- {{DOMxRef("Node.getRootNode()")}}
  - : Devuelve la raíz del objeto de contexto que, opcionalmente, incluye la raíz oculta si está disponible.
- {{DOMxRef("Node.hasChildNodes()")}}
  - : Devuelve un valor booleano que indica si el elemento tiene o no nodos secundarios.
- {{DOMxRef("Node.insertBefore()")}}
  - : Inserta un `Node` antes del nodo de referencia como hijo de un nodo principal especificado.
- {{DOMxRef("Node.isDefaultNamespace()")}}
  - : Acepta un URI de espacio de nombres como argumento y devuelve un valor booleano con un valor de `true` si el espacio de nombres es el espacio de nombres predeterminado en el nodo dado o `false` si no lo es.
- {{DOMxRef("Node.isEqualNode()")}}
  - : Devuelve un valor booleano que indica si dos nodos son o no del mismo tipo y todos los puntos de datos que los definen coinciden.
- {{DOMxRef("Node.isSameNode()")}}
  - : Devuelve un valor booleano que indica si los dos nodos son iguales o no (es decir, hacen referencia al mismo objeto).
- {{DOMxRef("Node.lookupPrefix()")}}
  - : Devuelve una cadena que contiene el prefijo para un URI de espacio de nombres dado, si está presente, y `null` si no lo está. Cuando son posibles varios prefijos, el resultado depende de la implementación.
- {{DOMxRef("Node.lookupNamespaceURI()")}}
  - : Acepta un prefijo y devuelve el URI del espacio de nombres asociado con él en el nodo dado si lo encuentra (y `null` si no). Proporcionar `null` para el prefijo devolverá el espacio de nombres predeterminado.
- {{DOMxRef("Node.normalize()")}}
  - : Limpia todos los nodos de texto debajo de este elemento (combina adyacentes, elimina vacíos).
- {{DOMxRef("Node.removeChild()")}}
  - : Elimina un nodo hijo del elemento actual, que debe ser uns hijo del nodo actual.
- {{DOMxRef("Node.replaceChild()")}}
  - : Reemplaza un `Node` hijo del actual con el segundo dado en el parámetro.

## Ejemplos

### Eliminar todos los hijos anidados dentro de un nodo

Esta función elimina cada primer hijo de un elemento, hasta que no quede ninguno.

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

El uso de esta función es una sola llamada. Aquí vaciamos el cuerpo del documento:

```js
removeAllChildren(document.body);
```

Una alternativa podría ser establecer `textContent` a una cadena vacía: `document.body.textContent = ""`.

### Recursión a través de nodos hijos

La siguiente función llama recursivamente a una función _callback_ para cada nodo contenido en un nodo raíz (incluida la propia raíz):

```js
function eachNode(rootNode, callback) {
  if (!callback) {
    const nodes = [];
    eachNode(rootNode, (node) => {
      nodes.push(node);
    });
    return nodes;
  }

  if (callback(rootNode) === false) {
    return false;
  }

  if (rootNode.hasChildNodes()) {
    for (const node of rootNode.childNodes) {
      if (eachNode(node, callback) === false) {
        return;
      }
    }
  }
}
```

La función llama recursivamente a una función para cada nodo descendiente de `rootNode` (incluida la propia raíz).

Si se omite `callback`, la función devuelve {{jsxref("Array")}} en su lugar, que contiene `rootNode` y todos los nodos contenidos dentro.

Si se proporciona `callback` y devuelve `false` cuando se llama, el nivel de recurrencia actual se aborta y la función reanuda la ejecución en el nivel del último padre. Esto se puede usar para abortar bucles una vez que se ha encontrado un nodo (como buscar un nodo de texto que contiene una determinada cadena).

La función tiene dos parámetros:

- `rootNode`
  - : El objeto `Node` cuyos descendientes serán recursivos.
- `callback` {{optional_inline}}
  - : Una [función](/es/docs/Web/JavaScript/Reference/Global_Objects/Function) _callback_ opcional que recibe un `Node` como único argumento. Si se omite, `eachNode` devuelve un {{jsxref("Array")}} de cada nodo contenido dentro de `rootNode` (incluida la propia raíz).

Lo siguiente demuestra un uso real de la función `eachNode()`: buscar texto en una página web.

Usamos una función contenedora llamada `grep` para hacer la búsqueda:

```js
function grep(parentNode, pattern) {
  let matches = [];
  let endScan = false;

  eachNode(parentNode, (node) => {
    if (endScan) {
      return false;
    }

    // Ignora cualquier cosa que no sea un nodo de texto
    if (node.nodeType !== Node.TEXT_NODE) {
      return;
    }

    if (typeof pattern === "string" && node.textContent.includes(pattern)) {
      matches.push(node);
    } else if (pattern.test(node.textContent)) {
      if (!pattern.global) {
        endScan = true;
        matches = node;
      } else {
        matches.push(node);
      }
    }
  });

  return matches;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
