---
title: sub
slug: Web/HTML/Element/sub
---

{{HTMLSidebar}}

El **elemento HTML** \<sub> define un fragmento de texto que se debe mostrar, por razones tipográficas, más bajo, y generalmente más pequeño, que el tramo principal del texto, es decir, en subíndice.

| [Categorías de contenido](/es/docs/HTML/Content_categories) | [Contenido dinamíco](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_din%C3%A1mico)(Flow content) y [contenido estático o de texto](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_est%C3%A1tico_o_de_texto)(phrasing content) |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                         | [contenido estático o de texto](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_est%C3%A1tico_o_de_texto)                                                                                                                                 |
| Omission de etiquetas                                       | Ninguna, tanto la etiqueta de apertura y cierre deben estar presentes                                                                                                                                                                               |
| Elementos padres permitidos                                 | Cualquier elemento que acepte contenido estático o de texto                                                                                                                                                                                         |
| Roles ARIA permitidos                                       | Cualquiera                                                                                                                                                                                                                                          |
| Interfaz DOM                                                | {{domxref("HTMLElement")}}                                                                                                                                                                                                                          |

## Atributos

Este elemento sólo incluye los [atributos globales](/es/docs/HTML/Global_attributes).

## Notas de uso

- Este elemento debe ser utilizado sólo por razones tipográficas, es decir, cambiar la posición del texto cambia su significado como en matemática (por ejemplo la fórmula matemática _t2_, aunque se debe considerar el uso de [MathML](/es/docs/MathML)) o fórmulas químicas (por ejemplo `H2O`).
- Este elemento no debe ser utilizado para propósitos meramente visuales, como el estilo del logo del software [LaTeX](https://es.wikipedia.org/wiki/LaTeX) [![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/1200px-LaTeX_logo.svg.png)](https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/1200px-LaTeX_logo.svg.png). En ese caso debe usarse la propiedad de [CSS](/es/docs/CSS) `vertical-align` para lograr el mismo efecto.

## Ejemplo

```html
<p>La fórmula química de agua: H<sub>2</sub>O</p>
```

{{EmbedLiveSample("","","100")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El elemento HTML [\<sup>](/es/docs/Web/HTML/Elemento/sup) produce superíndice. Tenga en cuenta que no puedes usar \<sup> y \<sub> ambos al mismo tiempo y necesita usar [MathML](/es/docs/MathML) para producir un superíndice y un subíndice al lado del símbolo químico de un elemento, que representa su número atómico y su número nuclear.

  ![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Element_identity.png/220px-Element_identity.png)

- Los elementos MathML[`<msub>`](/es/docs/MathML/Element/msub), [`<msup>`](/es/docs/MathML/Element/msup), y [`<msubsup>`](/es/docs/MathML/Element/msubsup) .
