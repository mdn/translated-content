---
title: inherit
slug: Web/CSS/inherit
---

{{CSSRef}}

<< [Volver](/es/Gu%c3%ada_de_referencia_de_CSS)

### Resumen

**inherit** es un valor permitido en todas las propiedades CSS. Hace que el elemento al cual se aplica tome el [valor calculado](/es/docs/Web/CSS/computed_value) de la propiedad de su elemento padre.

#### Para propiedades heredadas

Para las propiedades [heredadas](/es/docs/Web/CSS/Inheritance#propiedades_heredadas), este valor refuerza el comportamiento del valor por defecto y es necesario sólo para anular otras reglas. Por ejemplo:

```
  /* hacer las cabeceras de segundo nivel, verdes */
  h2 { color: green; }

  /* ...pero deja aquellas cabeceras dentro de de la barra lateral con el valor por defecto (el valor que tenga el elemento padre */
  #sidebar h2 { color: inherit; }
```

Ten en cuenta que en este ejemplo, el elemento `h2` dentro de sidebar, puede tener un color distinto. Por ejemplo, si alguno de los elementos es un hijo de un elemento div con la siguiente regla:

```
 div#current { color: blue; }
```

el elemento será azul.

#### Para propiedades no heredadas

Para las propiedades [no heredadas](/es/docs/Web/CSS/Inheritance#propiedades_no_heredadas), este valor especifica un comportamiento que tiene relativamente poco sentido al no reforzar el valor por defecto.

### Notas

Siempre se hereda desde el elemento padre dentro del árbol del documento, aún cuando el elemento padre no es el bloque contenedor.

### Especificaciones

- [CSS 2.1](https://www.w3.org/TR/CSS21/cascade.html#value-def-inherit)

### Compatibilidad de navegadores

### Ver también

[initial](/es/docs/Web/CSS/initial)

Categorías

Interwiki Languages
