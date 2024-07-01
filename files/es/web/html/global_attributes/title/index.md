---
title: title
slug: Web/HTML/Global_attributes/title
---

{{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **title** contiene un texto representado información relacionada al elemento al cual pertenece . Tal información puede típicamente , pero no necesariamente , ser presentada al usuario como un tip . Aquí hay algunos usos típicos para este atributo :

- Vínculo : el título o la descripción del documento vinculado
- Elemento mediático como una imagen : una descripción o créditos asociados
- Párrafo : una nota de pié de página o comentario acerca de este
- Cita : alguna información sobre el autor y otros datos .

Si este atributo es omitido , significa que el título del ancestro más cercano de este elemento es todavía relevante para este (puede usarse legítimamente como un tip para ese elemento ) . Si el atributo es establecido como la _cadena vacía_ , significa explícitamente que el título de su ancestro más cercano no es relevante para este elemento ( y no debería de usarse en el tip para ese elemento )

Semánticas adicionales se adjuntan a los atributos de **title** de los elementos {{ HTMLElement("link") }}, {{ HTMLElement("abbr") }}, {{ HTMLElement("input") }} y {{ HTMLElement("menuitem") }}

El atributo **title** puede contener varias líneas . Cada `U+000A LINE FEED` (`LF`) insertada representa una línea nueva . Se debe tener precaución ya que esto significa que :

```html
<p>
  Líneas nuevas en title deben de tomarse en cuenta , como esta
  <abbr title="Este es un título multilínea">ejemplo </abbr>.
</p>
```

define un título de dos líneas .

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales) .
- {{domxref("HTMLElement.title")}} que refleja a este atributo .
