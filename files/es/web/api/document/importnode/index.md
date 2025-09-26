---
title: Document.importNode()
slug: Web/API/Document/importNode
---

{{APIRef("DOM")}}

Crea una copia de un nodo desde un documento externo para ser insertado en el documento actual.

## Sintaxis

```js
var node = document.importNode(externalNode, deep);
```

- `node`
  - : El nuevo nodo importado al documento actual. El [`parentNode`](/es/docs/Web/API/Node/parentNode) del nuevo nodo es `null`, ya que aun no ha sido insertado en el arbol del documento.
- `externalNode`
  - : El nodo externo a ser importado
- `deep`
  - : Un booleano que indica si los descendientes del nodo deben ser importados también.

> [!NOTE]
> En la especificación DOM4 (tal y como se ha implementado en Gecko 13.0 (Firefox 13 / Thunderbird 13 / SeaMonkey 2.10)), `deep` es un argumento opcional. En el caso de ser omitido, adopta el valor de **`true`**, por lo que se hace una _deep copy_ por defecto. Para realizar una copia superficial (_shallow copy_), _deep_ debe ser **`false`**.
>
> Este comportamiento ha cambiado en la ultima especificación, por lo que si se omite el parámetro _deep,_ éste adopta el valor **`false`**. Aunque aún es opcional, debería ser siempre provisto por razones de compatibilidad. Con Gecko 28.0 (Firefox 28 / Thunderbird 28 / SeaMonkey 2.25 / Firefox OS 1.3), la consola advertia a los desarrolladores de no omitir el argumento. Empezando con Gecko 29.0 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26)), se realiza una copia superficial (_shallow copy_) por defecto.

## Ejemplo

```js
var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentWindow.document.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Notas

El nodo original no se borra del documento. El nodo importado es un clon del original.

Nodes from external documents should be cloned using [`document.importNode()`](/es/docs/Web/API/Document/importNode) (or adopted using [`document.adoptNode()`](/es/docs/Web/API/Document/adoptNode)) before they can be inserted into the current document. For more on the [`Node.ownerDocument`](/es/docs/Web/API/Node/ownerDocument) issues, see the [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for improved future compatibility.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## See also

- {{domxref("document.adoptNode()")}}
