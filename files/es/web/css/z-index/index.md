---
title: z-index
slug: Web/CSS/z-index
translation_of: Web/CSS/z-index
---
{{CSSRef}}

## Resumen

La propiedad CSS `z-index` indica el orden de un elemento [posicionado](/es/docs/Web/CSS/position) y sus descendientes. Cuando varios elementos se superponen, los elementos con mayor valor z-index cubren aquellos con menor valor.

Para una caja posicionada (es decir, una con cualquier `position` aparte de `static`), la propiedad `z-index` especifica:

1.  El nivel de apilamiento en el actual contexto de apilado.
2.  Si la caja establece un contexto de apilamiento local.

{{cssinfo}}

## Syntax

    z-index:  auto | <entero> | inherit

### Values

- auto
  - : La caja no establece un nuevo contexto de apilamiento. El nivel de apilamiento de la caja generada es el mismo que el de la caja padre.
- \<integer>
  - : Este entero es el nivel de apilamiento de la caja generada en el actual contexto de apilamiento. La caja además establece un contexto de apilamiento en el que el nivel de apilamiento es 0. Esto significa que los z-index de los elementos descendientes no son comparados con los elementos que están fuera de este elemento.

## Ejemplos

position:relative; z-index:1; position:absolute; z-index:2; left:60px; top:3em; position:absolute; z-index:3;
left:20em; top:-25px; opacity:0.9

## Especificaciones

| Specification                                                                            | Status                                   | Comment                            |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'visibility')}} | {{Spec2('CSS3 Transitions')}} | Define `visibility` como animable. |
| {{SpecName('CSS2.1', 'visuren.html#z-index', 'z-index')}}             | {{Spec2('CSS2.1')}}                 | Especificación inicial.            |

## Compatibilidad con navegadores

{{Compat("css.properties.z-index")}}

## Ver también

- Propiedad CSS {{Cssxref("position")}}
- [Entendiendo la propiedad CSS z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index)
