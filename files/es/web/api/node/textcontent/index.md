---
title: Node.textContent
slug: Web/API/Node/textContent
---

{{APIRef("DOM")}}

La propiedad **`textContent`** de la interfaz {{domxref("Node")}} representa el contenido de texto de un nodo y sus dencendientes.

> [!NOTE]
> `textContent` y {{domxref("HTMLElement.innerText")}} son confundidos con facilidad, pero [ambos son diferentes en varias formas importantes](#diferencias_con_innertext).

## Sintaxis

```
var text = Node.textContent;
Node.textContent = string;
```

### Valor devuelto

Una cadena de texto o `null`

## Descripción

Al obtener esta propiedad:

- Si el nodo es un [documento](/es/docs/Web/API/Document), un [DOCTYPE](/es/docs/Glossary/Doctype), o una [notation](/es/docs/Web/API/Notation), `textContent` devuelve `null`. (Para obtener todo el texto y los datos de [CDATA data](/es/docs/Web/API/CDATASection) del documento completo, uno podría usar `document.documentElement.textContent`.)
- Si el nodo es una [sección CDATA](/es/docs/Web/API/CDATASection), un comentario, una [instrucción de procesamiento](/es/docs/Web/API/ProcessingInstruction), o un [nodo de texto](/es/docs/Web/API/Document/createTextNode), `textContent` devuelve el texto dentro del nodo, por ejemplo, el {{domxref("Node.nodeValue")}}.
- Para otros tipos de nodos, `textContent` retorna la concatenación del atributo `textContent` de todos los nodos hijos, excluyendo los nodos comentario y los nodos de instrucciones. Esto es una cadena vacía si el nodo no tiene hijos.

Estableciendo `textContent` en un nodo elimina todos sus hijos y los reemplaza con un solo nodo de texto con el valor dado.

### Diferencias con innerText

Internet Explorer introdujo `elemento.innerText`. La intención es muy parecida, con un par de diferencias:

- Note que mientras `textContent` lee el contenido de todos los elementos, incluyendo los elementos {{HTMLElement("script")}} y {{HTMLElement("style")}}, `innerText`, no.
- `innerText` también tiene en cuenta el estilo y no retornará el texto de elementos escondidos, mientras que `textContent` sí lo hará.
- Como `innerText` tiene en cuenta el estilo CSS, escribirlo disparará un reflow, mientras que `textContent` no lo hará.

### Diferencias con innerHTML

`innerHTML` retorna el HTML como su nombre indica. Con bastante frecuencia, para leer o escribir texto en un elemento, la gente usa `innerHTML`. `textContent` debería usarse en su lugar. Ya que el texto no es procesado es más probable que tenga mejor rendimiento. Además, esto evita un vector de ataques XSS.

## Ejemplo

```js
// Dado el siguiente fragmento HTML:
//   <div id="divA">Esto <span>es</span>un texto</div>

// Lee el contenido textual:
var text = document.getElementById("divA").textContent;
// |text| contiene la cadena "Esto es un texto".

// Escribe el contenido textual:
document.getElementById("divA").textContent = "Esto es un nuevo texto";
// El HTML "divA" ahora contiene una nueva cadena:
//   <div id="divA">Esto es un nuevo texto</div>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
