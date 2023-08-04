---
title: "-webkit-print-color-adjust"
slug: Web/CSS/print-color-adjust
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La propiedad CSS `-webkit-print-color-adjust` es una extensión CSS no estándar que puede ser usada para forzar la impresión de fondos e imágenes en navegadores basado en el motor WebKit.

## Síntaxis

```
-webkit-print-color-adjust: economy | exact
```

### Valores

- `economy`
  - : Comportamiento normal. Los colores de fondo y las imágenes son sólo impresos si el usuario lo permite de manera explícita en el cuadro de diálogo de preferencias de impresión.
- `exact`
  - : Los colores de fondo y las imágenes del elemento en el que se aplica esta reglar son siempre impresos, la configuración de la impresora del usuario es ignorada.

## Herencia

Esta propiedad es [heredada](/es/docs/Web/Guide/CSS/Getting_started/Cascading_and_inheritance).

## Especificaciones

Aún no es parte de ninguna especificación aunque hay una [propuesta en la wiki de CSSWG](http://wiki.csswg.org/ideas/print-backgrounds) para que sea estandarizada.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- WebKit [bug 64583](https://bugs.webkit.org/show_bug.cgi?id=64583): "WIP: Añade la propiedad CSS para controlar la impresión de fondos de elementos individuales"
- CSSWG wiki: [print-backgrounds](http://wiki.csswg.org/ideas/print-backgrounds) - una propuesta para estandarizar esta propiedad
- Módulo Color CSS Nivel 4: la propiedad `color-adjust` una propuesta más nueva para estandarizar esta propiedad
