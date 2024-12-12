---
title: perspective
slug: Web/CSS/perspective
---

{{ CSSRef("CSS Transforms") }} {{ SeeCompatTable() }}

## Resumen

La propiedad `perspective` [CSS](/es/docs/Web/CSS) determina la distancia entre el plano z=0 y el usuario para dar algo de perspectiva al elemento 3D posicionado. Cada elemento 3D con z>0 se hace más grande y con z<0 se vuelve más pequeño. La intensidad del efecto es determinado por el valor de esta propiedad.

Parte de los elementos 3D que se encuentran destrás del usuario, es decir que su coordenada del eje z es mayor que el valor de la propiedad perspective de CSS no es dibujada.

La posición de origen que se usará para la transformación es por defecto colocado en el centro del elemento, pero su posición puede ser cambiada usando la propiedad {{ cssxref("perspective-origin") }}.

Usando esta propiedad con un valor diferente a 0 y none se crea un nuevo [contexto de apilamiento](/es/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).

{{cssinfo}}

## Syntax

```
Sintaxis Formal: {{csssyntax("perspective")}}
```

```
perspective: none
perspective: 20px     /* <longitud> valores */
perspective: 3.5em

perspective: inherited
```

### Valores

- `none`
  - : Es una palabra clave que indica que ninguna transformación de perspectiva será aplicada.
- `<length>`
  - : Es una {{cssxref("&lt;length&gt;")}} dando la distancia desde el usuario al plano z=0. Esta es usada para aplicar una transformación de perspectiva al elemento y su contenido. Si es 0 o un valor negativo, no se aplica una transformación de la perspectiva.

## Ejemplos

| `perspective:250px;` | `perspective:350px;` | `perspective:500px;` |
| -------------------- | -------------------- | -------------------- |
| 123456               | 123456               | 123456               |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando transformaciones CSS](/es/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
