---
title: <html>
slug: Web/HTML/Element/html
---

{{HTMLSidebar}}

El **elemento HTML `<html>`** (o _elemento HTML raiz_) representa la raiz de un documento HTML. El resto de elementos descienden de este elemento.

Dado que el elemento `<html>` es el primero en un documento, aparte de los comentarios, se llama el elemento raíz. A pesar de que esta etiqueta puede ser implicita, o no requerida en {{glossary("HTML")}}, sí es requerida para abrir y cerrar en {{glossary("XHTML")}}.

| [Categorías de Contenido](/es/docs/Web/Guide/HTML/categorias_de_contenido) | Ninguna.                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                                        | Un elemento {{HTMLElement("head")}} seguido de un elemento {{HTMLElement("body")}}.                                                                                                                                                                                                                                                             |
| Omisión de etiqueta                                                        | La etiqueta de inicio puede omitirse si lo primero que hay en el interior del elemento \<html> no es un comentario. La etiqueta final puede omitirse si el elemento \<html> no está inmediatamente seguido por un comentario y contiene un elemento {{HTMLElement("body")}}, o bien que no esté vacío, o cuya etiqueta de inicio está presente. |
| Elementos padres permitidos                                                | Como elemento raiz de un documento, o donde se permite un fragmento de subdocumento en un documento compuesto.                                                                                                                                                                                                                                  |
| Interfaz DOM                                                               | {{domxref("HTMLHtmlElement")}}                                                                                                                                                                                                                                                                                                                  |

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

- `manifest` {{deprecated_inline}}
  - : Especifica la dirección URL de un manifiesto de recursos que indica los recursos que deben ser almacenados en la caché local. Consulte [Uso de la cache de la aplicación](/es/docs/Web/HTML/Using_the_application_cache) para obtener más información.
- `version` {{deprecated_inline}}
  - : Especifica la versión {{glossary("DTD", "Document Type Definition")}} de HTML del documento actual. Este atributo no es necesario, porque es redundante con la información de versión en la declaración de tipo de documento.
- `xmlns`
  - : Especifica el Espacio de nombres XML del documento. El valor por defecto es `"http://www.w3.org/1999/xhtml"`. En XHTML es requerido y en HTML es opcional.

## Ejemplo

El DOCTYPE usado en el siguiente ejemplo indica que es un documento HTML5.

```html
<!doctype html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- MathML top-level element: {{MathMLElement("math")}}
- SVG top-level element: {{SVGElement("svg")}}
