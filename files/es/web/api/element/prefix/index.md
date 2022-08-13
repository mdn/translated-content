---
title: Element.prefix
slug: Web/API/Element/prefix
tags:
  - API
  - Compatibilidad de los Navegadores en Móviles
  - Compatibilidad de los navegadores
  - DOM
  - Propiedad
  - Referencia
translation_of: Web/API/Element/prefix
---
{{APIRef("DOM")}}

La propiedad **`Element.prefix`** unicamente de lectura devuelve el namespace prefix de el elemento especificado, o` null si no hay especificado `prefix .

> **Nota:** Antes de DOM4 esta API fué definida dentro de la interfaz {{domxref("Node")}}.

## Síntasix

    string = element.prefix

## Ejemplos

Los siguientes registros "x" en la consola.

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## Notas

Solo funcionará cuando se utiliza un analizador de namespace, ej. Cuando un documento es servido con un tipo XML MIME . No funcionará para documentos HTML.

## Especificaciones

| Especificación                                                                   | Estado                   | Comentario         |
| -------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName("DOM4", "#dom-element-prefix", "Element.prefix")}} | {{Spec2("DOM4")}} | Definición inicial |

## Compatibilidad en los Navegadores

{{Compat("api.Element.prefix")}}

## Ver también

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.localName")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Node.prefix")}}
