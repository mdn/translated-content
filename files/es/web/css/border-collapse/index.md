---
title: border-collapse
slug: Web/CSS/border-collapse
---

{{CSSRef}}

### Resumen

La propiedad `border-collapse` se utiliza para fusionar los bordes. Ésto tiene una gran influencia sobre la presentación y el estilo de las celdas de tabla. La representación de los bordes de tabla es dividida en dos categorías en CSS2 - "fusión" y "separación" (collapsed - separated). Esta propiedad especifica que modo de presentación de borde hay que usar.

En el modelo de fusión, las celdas adyacentes comparten los mismos bordes

En el modelo de separación, cada celda adyacente tiene su propio borde (la distancia entre cada borde es dado con la propiedad del {{ Cssxref("border-spacing", "espaciado de borde") }}).

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("separate", "separado") }}
- {{ Cssxref("inheritance", "Valor heredado") }}: Yes
- Media: {{cssxref("Media/Visual", "visual")}}
- {{ Cssxref("computed value", "Valor calculado") }}:

### Sintaxis

```
border-collapse: value
```

### Valores

- **inherit** : Define explícitamente el valor como heredada del elemento padre.
- **separate** : Utiliza el modo de presentación de separación de borde.
- **collapse** : Utiliza el modo de presentación de fusión de borde

### Ejemplos

[Ver El Ejemplo Vivo](https://mdn.dev/archives/media/samples/cssref/border-collapse.html)

```
<table border="1" style="border-collapse: collapse" bordercolor="#111111" width="500">
```

```
<table border="1" style="border-collapse: separate" bordercolor="#111111" width="500">
```

### Notas

En el modelo de fusión, el valor del {{ Cssxref("border-style", "estilo de borde") }} de `inset` se comporta como `groove`, y `outset` como `ridge`.

CSS 2 especifica que el valor inicial para esta propiedad es `collapse`, pero CSS 2.1 y Mozilla/Opera definen o se comportan como si el valor inicial fuera `separate`.

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("border-spacing") }}
