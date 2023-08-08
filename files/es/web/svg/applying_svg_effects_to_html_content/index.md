---
title: Aplicación de efectos de SVG para el contenido HTML
slug: Web/SVG/Applying_SVG_effects_to_HTML_content
---

Aplicación de efectos de SVG para el contenido HTML.

Firefox 3.5 introduce soporte para usar SVG como un componente de estilos CSS para aplicar efectos de SVG para el contenido HTML.

Puede especificar SVG en los estilos, ya sea dentro del mismo documento, o dentro de una hoja de estilos externa.

> **Nota:** Las referencias a SVG en archivos externos deben ser de el mismo origen que el documento de origen.

## Uso integrado SVG

Para aplicar un efecto SVG usando estilos CSS, primero tiene que crear el estilo CSS que hace referencia al SVG para aplicar.

```html
<style>
  .stylename {
    mask: url(#localstyle);
  }
</style>
```

En el ejemplo anterior, el nuevo estilo, por "stylename," es una máscara de SVG que hace referencia a el identificador "localstyle". Una vez que se estableció, que la máscara se aplica a todos los elementos con este estilo CSS.

Esto suena más complicado de lo que realmente es, echar un vistazo a los ejemplos para tener una buena idea de cómo funciona esto.

Hay tres estilos que se pueden aplicar: puede usar la máscara, el recorrido de clip, o un filtro.

### Ejemplo: Enmascaramiento (Máscara)

Por ejemplo, puede establecer un estilo CSS que proporciona una máscara de degradado para el contenido HTML con código SVG similar a lo siguiente en su documento HTML:

> **Nota:** El espaciamiento de nombre no es válida en HTML 5, dejar fuera de la "svg:" en las etiquetas de los documentos en formato HTML.

```xml
  <style>.target { mask: url(#m1); }</style>
  <svg:svg height="0">
    <svg:mask id="m1" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
      <svg:linearGradient id="g" gradientUnits="objectBoundingBox" x2="0" y2="1">
        <svg:stop stop-color="white" offset="0"/>
        <svg:stop stop-color="white" stop-opacity="0" offset="1"/>
      </svg:linearGradient>
      <svg:circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white"/>
      <svg:rect x="0.5" y="0.2" width="0.5" height="0.8" fill="url(#g)"/>
    </svg:mask>
  </svg:svg>
```

Tenga en cuenta que en la línea 1, la máscara se especifica mediante una dirección URL para el ID "# M1", que es el identificador de la máscara de SVG que se especifican a continuación. Todo lo demás se especifican otros detalles sobre la misma máscara de degradado.

En realidad, de aplicar el efecto SVG a XHTML o HTML se hace simplemente asignar el estilo de destino definido anteriormente para el elemento, así:

```xml
<iframe class="target" src="http://mozilla.org"/>
```

En este ejemplo se incrusta un iframe que contiene el sitio web de Mozilla.org, que se representa con la máscara que se le aplica.

[View this example live](maskdemo.xhtml).

### Ejemplo: Recorte

Este ejemplo muestra cómo utilizar SVG para recortar el contenido HTML. Cuando nos fijamos en la demostración en vivo, cuenta que incluso en las zonas calientes de los enlaces se recortan.

```xml
  <style>.target { clip-path: url(#c1); }</style>
  <svg:svg height="0">
    <svg:clipPath id="c1" clipPathUnits="objectBoundingBox">
      <svg:circle cx="0.25" cy="0.25" r="0.25" id="circle"/>
      <svg:rect x="0.5" y="0.2" width="0.5" height="0.8"/>
    </svg:clipPath>
  </svg:svg>
```

Esto establece un área de recorte compuesto por un círculo y el rectángulo, y le asigna el ID # c1 ". Esto entonces se hace referencia en el estilo. Una vez que el estilo de destino se establece de esta manera, la ruta del clip se puede asignar a cualquier elemento.

Tenga en cuenta también que puede realizar cambios en el SVG en tiempo real y ver los cambios afectan inmediatamente a la prestación del HTML. Por ejemplo, puede cambiar el tamaño del círculo en el camino clip establecido:

```xml
    var circle = document.getElementById("circle");
    circle.r.baseVal.value = 0.40 - circle.r.baseVal.value;
```

[View this example live](clipdemo.xhtml). El ejemplo incluye un botón, puede hacer clic para cambiar la ruta de clip y ver que el cambio surta efecto.

### Ejemplo: Filtrar

Este ejemplo muestra cómo se puede aplicar un filtro para el contenido HTML utilizando SVG. Establece varios filtros que se aplican con estilos para cada uno de los tres elementos, tanto en los Estados suspender normal y el ratón.

Cualquier SVG filtro se puede aplicar de esta manera. Por ejemplo, para aplicar un efecto de desenfoque gaussiano, puede utilizar:

```xml
<svg:filter id="f1">
  <svg:feGaussianBlur stdDeviation="3"/>
</svg:filter>
```

También puede aplicar una matriz de color, de esta manera:

```xml
    <svg:filter id="f2">
      <svg:feColorMatrix values="0.3333 0.3333 0.3333 0 0
                                 0.3333 0.3333 0.3333 0 0
                                 0.3333 0.3333 0.3333 0 0
                                 0      0      0      1 0"/>

    </svg:filter>
```

Estos son sólo dos de los cinco filtros de muestra en este ejemplo. Asegúrese de echar un vistazo al código completo si le gustaría ver más.

Los cinco filtros se aplican mediante el siguiente código CSS:

```xml
  <style>
    p.target { filter:url(#f3); }
    p.target:hover { filter:url(#f5); }
    b.target { filter:url(#f1); }
    b.target:hover { filter:url(#f4); }
    iframe.target { filter:url(#f2); }
    iframe.target:hover { filter:url(#f3); }
  </style>
```

[View this example live](filterdemo.xhtml).

## Uso de referencias externas

Los elementos SVG se utiliza para cortar, el enmascaramiento, y así sucesivamente se pueden cargar desde un documento externo, mientras que el documento proviene del mismo origen que el documento HTML al que se aplica.

Por ejemplo, si tu CSS en un archivo llamado default.css, puede tener el siguiente aspecto:

```xml
.target { clip-path: url(resources.svg#c1); }
```

El SVG se importa desde un archivo llamado `resources.svg`, utilizando la ruta del clip con el ID `c1`.

## Véa también

- [SVG](/en/SVG)
- [SVG Effects for HTML Content](/web-tech/2008/09/15/svg-effects-for-html-content) (blog post)
- [SVG External Document References](/web-tech/2008/10/10/svg-external-document-references) (blog post)
