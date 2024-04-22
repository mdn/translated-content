---
title: Element.prefix
slug: Web/API/Element/prefix
---

{{APIRef}}

La propiedad `Element.prefix` unicamente de lectura devuelve el namespace prefix de el elemento especificado, o `null` si no hay especificado prefix.

> **Nota:** Antes de DOM4 esta API fué definida dentro de la interfaz {{domxref("Node")}}.

## Síntaxis

```js
string = element.prefix;
```

## Ejemplos

Los siguientes registros "x" en la consola.

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## Notas

Solo funcionará cuando se utiliza un analizador de namespace, ej. Cuando un documento es servido con un tipo XML MIME . No funcionará para documentos HTML.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.localName")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Node.prefix")}}
