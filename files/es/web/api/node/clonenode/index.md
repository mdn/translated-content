---
title: Node.cloneNode()
slug: Web/API/Node/cloneNode
---

{{APIRef("DOM")}}

El método **`Node.cloneNode()`** devuelve un duplicado del nodo en el que este método fue llamado.

## Sintaxis

```
var dupNode = node.cloneNode(deep);
```

- _node_
  - : El nodo que se desea clonar.
- _dupNode_
  - : El nuevo nodo que será un clon de `node`
- _deep {{optional_inline}}_
  - : `true` si los hijos del nodo también deben ser clonados, o `false` para clonar únicamente al nodo.

> [!NOTE]
> En la especificación DOM4 (como se implementó en Gecko 13.0 (Firefox 13 / Thunderbird 13 / SeaMonkey 2.10)), `deep` es un argumento opcional. Si éste se omite, el método actua como si el valor se estableciera en **`true`**, estableciendo el uso de la clonación profunda como el comportamiento por defecto. Para crear un clon superficial, `deep` debe establecerse en `false`.
>
> Este comportamiento ha sido modificado en la última especificación, si es omitido, el método se comportará como si `deep` fuera **`false`**. Aunque sigue siendo opcional, usted siempre debería proporcionar el argumento `deep` tanto para la compatibilidad con las nuevas y anteriores especificaciones. Con Gecko 28.0 (Firefox 28 / Thunderbird 28 / SeaMonkey 2.25 / Firefox OS 1.3))), la consola advierte a los desarrolladores a no omitir el argumento. Desde Gecko 29.0 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26)), una copia superficial, es el comportamiento por defecto en lugar de una copia profunda.

## Ejemplo

```js
var p = document.getElementById("para1");
var p_prime = p.cloneNode(true);
```

## Notas

Al clonar un nodo se copian todos sus atributos y valores, incluyendo escuchadores intrínsecos (en–línea). No copia los escuchadores de evento añadidos utilizando [`addEventListener()`](/es/docs/Web/API/EventTarget/addEventListener) o aquellos asignados a las propiedades de un elemento. (ej. `node.onclick = fn`). Además, para un elemento `<canvas>`, la imagen pintada no se copia.

El nodo duplicado devuelto por `cloneNode()` no formará parte del documento hasta que sea añadido a otro nodo que sea parte del documento utilizando {{domxref("Node.appendChild()")}} o un método similar. Tampoco tiene padre hasta que sea añadido a otro nodo.

Si `deep` se establece a `false`, los elementos hijos no se clonan. Tampoco se clona ningún texto que contenga el nodo, ya que está contenido en uno o más nodos {{domxref("Text")}}.

Si `deep` se evalúa a `true`, el subárbol completo (incluyendo texto que pueda estar en nodos {{domxref("Text")}} hijos) también se copian. En los nodos vacíos (por ejemplo, los elementos {{HTMLElement("img")}} y {{HTMLElement("input")}}) no importa si `deep` es `true` o `false`.

> [!WARNING]
> `cloneNode()` puede conducir a elementos con ID's duplicados en el documento.

Si el nodo original tiene un ID el elemento clonado se ubicará en el mismo documento, el ID del clon debería ser modificado para ser único. Los atributos name pueden necesitar ser modificados también, dependiendo de si se esperan nombres duplicados.

Para clonar un nodo con el fin de agregarlo a un domento distinto, utiliza {{domxref("Document.importNode()")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
