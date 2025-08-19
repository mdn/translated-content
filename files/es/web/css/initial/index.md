---
title: initial
slug: Web/CSS/initial
---

[Guía de referencia de CSS](/es/Gu%c3%ada_de_referencia_de_CSS)

### Resumen

**initial** es un valor permitido en todas las propiedades CSS. Fuerza la utilización del [valor inicial](/es/docs/Web/CSS/CSS_cascade/Value_processing) de la propiedad para el elemento al cual se aplica.

#### Para propiedades no heredadas

Para las propiedades [no heredadas](/es/docs/Web/CSS/CSS_cascade/Inheritance#propiedades_heredadas_y_no_heredadas), este valor refuerza el comportamiento por defecto y es necesario sólo para sobrescribir otra regla. Por ejemplo:

```
 /* definimos un borde verde de un encabezamiento de segundo nivel */
 h2 { border: medium solid green }

 /* pero las cabeceras de la barra lateral utilizan el valor inicial de la propiedad color */
 #sidebar h2 { border-color: initial; }

 /* ...en CSS1 se obtiene usando 'border: medium solid' */
```

#### Para propiedades heredadas

Para las propiedades [heredadas](/es/docs/Web/CSS/CSS_cascade/Inheritance#propiedades_heredadas_y_no_heredadas), se usa menos ya que no refuerza el comportamiento por defecto.

### Especificaciones

- [css3-values](https://www.w3.org/TR/css3-values/#keywords)
- [css3-cascade](https://www.w3.org/TR/css3-cascade/#initial0)

### Compatibilidad

Sólo algunas especificaciones son soportadas en Firefox (las cuales se incrementan en cada versión superior) Únicamente soportado en Firefox algunas propiedades (se incrementa el número en cada versión).

### Ver también

[inherit](/es/docs/Web/CSS/inherit)

Categorías

Interwiki Languages Links
