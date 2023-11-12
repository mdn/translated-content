---
title: Columnas con CSS-3
slug: Web/CSS/CSS_multicol_layout/Using_multicol_layouts
---

### Introducción

Cuando leemos un texto, las líneas muy largas resultan incómodas. Si son demasiado largas, al cambiar de línea nuestros ojos pueden perder la pista de la línea en la que estabas (al ir de un extremo al otro de la página). Por ello, pensando en los usuarios con monitores grandes, los autores deben limitar la anchura del texto dividiéndolo en columnas, más o menos, como hacen los periódicos. Por desgracia esto no es posible con HTML y CSS-2, a no ser que fuerces la ruptura de las columnas en puntos fijos, limites en gran medida el código a utilizar, o uses scripts complejos.

[El borrador de CSS-3](http://www.w3.org/TR/css3-multicol/) propone algunas nuevas propiedades para dar respuesta a esta necesidad. En Firefox 1.5 y superior hemos implementado algunas de estas propiedades para comportarnos según lo descrito en el borrador de CSS-3 (con una excepción explicada abajo)

[El blog de Robert O'Callahan](http://weblogs.mozillazine.org/roc/)usa columnas CSS, pruébalo con Firefox 1.5

### Usar Columnas

#### Columnas, Count y Width

Dos propiedades CSS Controlan el número (Count) y el ancho (Width) de las columnas: `-moz-column-count` y `-moz-column-width`.

`-moz-column-count` indica el número concreto de columnas a crear. Por ejemplo:

```
<div style="-moz-column-count:2; -moz-column-gap: 1em;">
Cuando leemos un texto las líneas muy largas resultan incómodas, si son
demasiado largas, al cambiar de línea nuestros ojos pueden perder la pista
de la línea en la que estabas. Por ello, pensando en los usuarios con
monitores grandes, los autores deben limitar la anchura del texto dividiéndolo
en columnas, más o menos, como hacen los periódicos.</div>
```

Mostrará el contenido en dos columnas (si usas Firefox 1.5 o superior):

Cuando leemos un texto las líneas muy largas resultan incómodas, si son demasiado largas, al cambiar de línea nuestros ojos pueden perder la pista de la línea en la que estabas. Por ello, pensando en los usuarios con monitores grandes, los autores deben limitar la anchura del texto dividiéndolo en columnas, más o menos, como hacen los periódicos.

`-moz-column-width` fija la anchura mínima de las columnas. Si no se indica un `-moz-column-count`, entonces el navegador creará automáticamente tantas columnas (con la anchura indicada) como sea posible en el espacio disponible.

```
<div style="-moz-column-width:20em; -moz-column-gap: 1em;">
Cuando leemos un texto las líneas muy largas resultan incómodas, si son
demasiado largas, al cambiar de línea nuestros ojos pueden perder la pista
de la línea en la que estabas. Por ello, pensando en los usuarios con
monitores grandes, los autores deben limitar la anchura del texto dividiéndolo
en columnas, más o menos, como hacen los periódicos.</div>
```

Se visualizará así:

Cuando leemos un texto las líneas muy largas resultan incómodas, si son demasiado largas, al cambiar de línea nuestros ojos pueden perder la pista de la línea en la que estabas. Por ello, pensando en los usuarios con monitores grandes, los autores deben limitar la anchura del texto dividiéndolo en columnas, más o menos, como hacen los periódicos.

Los detalles exactos son descritos en [El borrador de CSS3](http://www.w3.org/TR/css3-multicol/).

En un bloque multicolumna, el contenido fluye automáticamente de una columna a otra según sea necesario. Todas las funcionalidades de HTML, CSS, y DOM están soportadas dentro de las columnas, tanto al editar como al imprimir.

#### Equilibrado de altura

El borrador de CSS3 especifica que la altura de las columnas debe estar equilibrada, es decir, el navegador debe definir automáticamente la altura máxima de las columnas de modo que la altura del contenido en cada columna sea más o menos igual. Firefox lo hace.

Sin embargo, en algunas situaciones puede ser útil fijar explícitamente la altura máxima de las columnas, y entonces se empiezan a meter los contenidos en la primera columna y se van creando tantas columnas como sea necesario, posiblemente desbordando por la derecha. Por ejemplo, en <http://iht.com/> los artículos hacen esto (usando scripts). Por lo tanto extendemos el borrador de modo que si se indica la propiedad CSS `height` en un bloque multicolumnas, se permite que cada columna tenga esa altura -y no más- antes de agregar la siguiente columna. Esto permite una composición mucho más eficiente.

#### Espacio entre Columnas

Por defecto, cada columna está tocando la columna de al lado. Normalmente esto no es lo más apropiado. Se puede utilizar el `padding` de las columnas para corregirlo, pero normalmente lo más fácil será aplicar la propiedad `-moz-column-gap` al bloque con multicolumna:

```
<div style="-moz-column-width:20em; -moz-column-gap:2em;">
Cuando leemos un texto las líneas muy largas resultan incómodas, si son
demasiado largas, al cambiar de línea nuestros ojos pueden perder la pista
de la línea en la que estabas. Por ello, pensando en los usuarios con
monitores grandes, los autores deben limitar la anchura del texto dividiéndolo
en columnas, más o menos, como hacen los periódicos.</div>
```

Se visualizará así:

Cuando leemos un texto las líneas muy largas resultan incómodas, si son demasiado largas, al cambiar de línea nuestros ojos pueden perder la pista de la línea en la que estabas. Por ello, pensando en los usuarios con monitores grandes, los autores deben limitar la anchura del texto dividiéndolo en columnas, más o menos, como hacen los periódicos.

#### Degradado elegante

La propiedad `-moz-column` será ignorada por los navegadores que no la soporten, por lo tanto, es relativamente fácil crear un diseño que en esos navegadores muestre una sola columna, y al mismo tiempo utilice multi-columnas en Firefox 1.5.

### Conclusión

Las columnas CSS3 son un nuevo método básico de disposición que ayudará a los desarrolladores Web a aprovechar mejor las condiciones reales de la pantalla. Los desarrolladores imaginativos podrán encontrarle muchas aplicaciones, especialmente a la característica de equilibrado automático y dinámico de la altura.

### Referencias adicionales

- [http://weblogs.mozillazine.org/roc/a...18_for_we.html](http://weblogs.mozillazine.org/roc/archives/2005/03/gecko_18_for_we.html)

Categorías

interwiki links
