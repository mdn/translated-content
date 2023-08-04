---
title: Vendor Prefix
slug: Glossary/Vendor_Prefix
---

Los proveedores de navegadores a veces agregan prefijos a las propiedades de CSS experimentales o no estándar y las API de JavaScript, por lo que los desarrolladores pueden experimentar con nuevas ideas mientras que, en teoría, evitan que se confíe en sus experimentos y luego rompan el código de los desarrolladores web durante el proceso de estandarización. Los desarrolladores deben esperar para incluir la propiedad sin prefijar hasta que se estandarice el comportamiento del navegador.

> **Nota:** Los proveedores de navegadores están trabajando para dejar de usar los prefijos de proveedores para funciones experimentales. Los desarrolladores web los han estado utilizando en sitios web de producción, a pesar de su naturaleza experimental. Esto ha hecho que sea más difícil para los proveedores de navegadores garantizar la compatibilidad y trabajar en nuevas características; También ha sido perjudicial para los navegadores más pequeños que terminan obligados a agregar prefijos de otros navegadores para cargar sitios web populares.
>
> Últimamente, la tendencia es agregar características experimentales detrás de las banderas o preferencias controladas por el usuario, y crear especificaciones más pequeñas que puedan alcanzar un estado estable mucho más rápidamente.

## Prefijos CSS

Los principales navegadores usan los siguientes prefijos:

- `-webkit-` (Chrome, Safari, nuevas versiones de Opera, casi todos los navegadores iOS (incluyendo Firefox for iOS); basicamente, cualquier navegador basado en WebKit)
- `-moz-` (Firefox)
- `-o-` (Versiónes antiguas, pre-Webkit, de Opera)
- `-ms-` (Internet Explorer y Microsoft Edge)

## Prefijos API

Históricamente, los proveedores también han usado prefijos para las API experimentales. Si una interfaz completa es experimental, entonces el nombre de la interfaz tiene un prefijo (pero no las propiedades o los métodos incluidos). Si se agrega una propiedad o método experimental a una interfaz estandarizada, entonces el método o la propiedad individual tiene el prefijo.

### Prefijos de interfaz

Los prefijos para los nombres de interfaz son en mayúsculas:

- `WebKit` (Chrome, Safari, versiones más recientes de Opera, casi todos los navegadores iOS (incluido Firefox para iOS); Básicamente, cualquier navegador basado en WebKit.)
- `Moz` (Firefox)
- `O` (Versiónes antiguas, pre-Webkit, de Opera)
- `MS` (Internet Explorer y Microsoft Edge)

### Prefijos de propiedad y método

Los prefijos para propiedades y métodos son minúsculas:

- `webkit` (Chrome, Safari, versiones más recientes de Opera, casi todos los navegadores iOS (incluido Firefox para iOS); básicamente, cualquier navegador basado en WebKit)
- `moz` (Firefox)
- `o` (Versiónes antiguas, pre-Webkit, de Opera)
- `ms` (Internet Explorer y Microsoft Edge)

## Aprende más

### Conocimientos generales

- [Vendor prefix](https://es.wikipedia.org/wiki/CSS_hack#Browser_prefixes) on Wikipedia

{{QuickLinksWithSubpages("/es/docs/Glossary")}}
