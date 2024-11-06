---
title: <picture>
slug: Web/HTML/Element/picture
---

{{HTMLSidebar}}{{SeeCompatTable}}

El **elemento HTML `<picture>`** es un contenedor usado para especificar múltiples elementos {{HTMLElement("source")}} y un elemento {{HTMLElement("img")}} contenido en él para proveer versiones de una imagen para diferentes escenarios de dispositivos. Si no hay coincidencias con los elementos `<source>`, el archivo especificado en los atributos [`src`](/es/docs/Web/HTML/Element/img#src) del elemento `<img>` es utilizado. La imagen seleccionada es entonces presentada en el espacio ocupado por el elemento `<img>`.

Para seleccionar la imagen óptima, el {{Glossary("user agent")}} examina cada atributo [`srcset`](/es/docs/Web/HTML/Element/source#srcset), [`media`](/es/docs/Web/HTML/Element/source#media), y [`type`](/es/docs/Web/HTML/Element/source#type) de la fuente para seleccionar la imagen compatible.

El navegador escogerá la fuente más apropiada de acuerdo al diseño de la página (las limitaciones de la caja donde aparecerá la imagen) y el dispositivo que se utilize para visualizarla (p.ej. pantalla normal o hiDPI).

| [Categorías de contenido](/es/docs/Web/HTML/Content_categories) | [Flujo de contenido](/es/docs/Web/HTML/Content_categories#flow_content), contenido textual o estático, contenido incrustado                               |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                             | Cero o más elementos {{HTMLElement("source")}}, seguidos por un elemento {{HTMLElement("img")}}, mezclados opcionalmente con elementos script-supporting. |
| Omisión de etiquetas                                            | {{no_tag_omission}}                                                                                                                                       |
| Padres permitidos                                               | Cualquier elemento que permita embeber contenido.                                                                                                         |
| ARIA roles permitidos                                           | Ninguno.                                                                                                                                                  |
| DOM interface                                                   | {{domxref("HTMLPictureElement")}}                                                                                                                         |

## Atributos

Este elemento sólo incluye [atributos globales.](/es/docs/Web/HTML/Global_attributes)

## Notas de uso

Se puede usar la propiedad {{cssxref("object-position")}} para ajustar la posición de la imagen dentro del marco del elemento, y la propiedad {{cssxref("object-fit")}} para controlar como el tamaño de la imagen se ajusta para adaptarse al marco.

## Ejemplos

Estos ejemplos demuestran los efectos que tienen diferentes atributos del atributo {{HTMLElement("source")}} en la selección de la imagen a desplegar cuando se usa dentro de `<picture>`.

### El atributo `media`

El atributo `media` permite especificar una media query que el agente de usuario evaluará para seleccionar un elemento {{HTMLElement("source")}}. Si la media query evalua a `false`, el elemento {{HTMLElement("source")}} es omitido.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### El atributo `type`

El atributo `type` permite especificar un tipo MIME para los recursos dados en el atributo srcset del elemento {{HTMLElement("source")}}. Si el agente de usuario no soporta dicho tipo, el elemento {{HTMLElement("source")}} es omitido.

```html
<picture>
  <source srcset="mdn-logo.svg" type="image/svg+xml" />
  <img src="mdn-logo.png" alt="MDN" />
</picture>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Elemento {{HTMLElement("img")}}
- Elemento {{HTMLElement("source")}}
- Posicionando y redimensionando la imagen dentro de su marco: {{cssxref("object-position")}} y {{cssxref("object-fit")}}
