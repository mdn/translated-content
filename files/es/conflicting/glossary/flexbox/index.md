---
title: Compatibilidad con versiones anteriores de Flexbox
slug: conflicting/Glossary/Flexbox
original_slug: Web/CSS/CSS_flexible_box_layout/Backwards_compatibility_of_flexbox
---

{{CSSRef}}

Flexbox es muy compatible con los navegadores modernos, sin embargo, hay algunos problemas con los que puede encontrarse. En esta guía, veremos qué tan bien se admite flexbox en los navegadores, y veremos algunos posibles problemas, recursos y métodos para crear soluciones y fallos.

## La historia de flexbox

Al igual que con todas las especificaciones CSS, la especificación Flexbox experimentó una gran cantidad de cambios antes de convertirse en la Recomendación de Candidato que tenemos hoy. Como recomendación de un candidato, no deberíamos ver grandes cambios en este punto de la especificación, sin embargo, este no ha sido el caso con las iteraciones anteriores de flexbox.

Flexbox se implementó de forma experimental en varios navegadores web. En ese momento, el método para crear implementaciones experimentales era utilizar un prefijo de proveedor. La idea de estos prefijos era permitir que las implementaciones de la especificación fueran probadas y exploradas por ingenieros de navegadores y desarrolladores web por igual sin chocar con otras implementaciones. La idea no era utilizar las implementaciones experimentales en el código de producción. Sin embargo, los prefijos finalmente se usaron en el código de producción, y los cambios en la especificación experimental hicieron que las personas necesitaran actualizar sus sitios para mantenerse al día.

[En 2009](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) , la especificación se veía bastante diferente. Para crear un contenedor flexible, usaría `display: box` y había una serie de propiedades `box-*` , que hicieron cosas que reconocerá hoy en flexbox.

Hubo una [actualización de la especificación](https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/) que actualizó la sintaxis para `display: flexbox` : esto fue nuevamente prefijado por el proveedor.

Finalmente, la especificación se actualizó para definir `display: flex` como la forma de crear un contenedor de flex. El soporte del navegador para la versión actualizada de la especificación es excelente a partir de este momento.

Existen algunos artículos antiguos que hacen referencia a las versiones anteriores de flexbox, que son bastante fáciles de identificar debido al cambio en la forma en que se crea un contenedor flexible. Si encuentra algo que se refiere a `display: box` o `display: flexbox` esta es información desactualizada.

## Estado en navegadores

La compatibilidad del navegador para flexbox es excelente, y la mayoría de los navegadores no necesitan un prefijo en este momento. Safari fue el último de los principales navegadores en eliminar los prefijos, con el lanzamiento de Safari 9 en 2015. Los dos navegadores que aún debe tener en cuenta para la compatibilidad entre navegadores son:

- Internet Explorer 10, que implementó la versión `display: flexbox` de la especificación con el prefijo `-ms-` .
- UC Browser, que aún admite la versión 2009 `display: box` versión de `display: box` solo con el prefijo `-webkit-` .

Tenga en cuenta también que Internet Explorer 11 es compatible con la `display: flex` moderna `display: flex` especificación `display: flex` sin embargo, tiene una serie de errores en la implementación.

## Problemas comunes

La mayoría de los problemas con flexbox se relacionan con los cambios en la especificación, tal como se ha desarrollado, y el hecho de que muchos de nosotros intentamos usar una especificación experimental en la producción. Si está tratando de garantizar la compatibilidad con versiones anteriores de los navegadores, y en particular IE10 y 11, el sitio [Flexbugs](https://github.com/philipwalton/flexbugs) es un recurso útil. Verá que muchos de los errores enumerados se aplican a las versiones antiguas del navegador y se corrigen en los navegadores actuales. Cada uno de los errores tiene una solución alternativa que puede ahorrarle muchas horas de desconcierto.

Si desea incluir navegadores muy antiguos con soporte de flexbox, puede incluir los prefijos de proveedor en su CSS además de la versión no prefijada. Esto se está volviendo cada vez menos un requisito hoy en día, ya que el apoyo es generalizado.``

```css
.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```

[Autoprefixer Online](https://autoprefixer.github.io/) es una forma útil de ver qué prefijos se recomiendan, dependiendo de cuántas versiones desee volver con el soporte del navegador. También puede consultar [¿Puedo usar?](https://caniuse.com/#feat=flexbox) Para obtener información sobre cuándo se eliminaron los prefijos en los navegadores para tomar su decisión.

## Técnicas de respaldo útiles

Dado que el uso de flexbox se inicia con el valor de la propiedad de [`display`](/es/docs/Web/CSS/display) , cuando se necesita admitir navegadores muy antiguos que no admiten flexbox en absoluto, se pueden crear fallos sobrescribiendo un método de diseño con otro. La especificación define lo que sucede si usa otros métodos de diseño en un elemento que luego se convierte en un elemento flexible.

### Floated items

> "Flotar y despejar no crea flotación o espacio libre del elemento flexible, y no lo saque del flujo". [3. Contenedores flexibles](https://www.w3.org/TR/css-flexbox-1/#flex-containers)

En el siguiente ejemplo en vivo, floté dos bloques y luego configuré `display: flex` en el contenedor. Los artículos ahora son artículos flexibles, lo que significa que se estiran a la misma altura. Cualquier comportamiento de flotación no se aplica.

Puede probar el comportamiento alternativo eliminando `display: flex` del contenedor.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/float.html", '100%', 550)}}

### display: inline-block

Una vez que un elemento de `inline-block` convierte en un elemento flexible, se `block` y, por lo tanto, el comportamiento de la `display: inline-block` como preservar el espacio en blanco entre elementos ya no se aplica.

Eliminar `display: flex` para ver el comportamiento de reserva. Verá un espacio en blanco agregado entre los elementos, que es lo que sucede cuando se usa `display: inine-block` ya que prefiere el espacio en blanco como otros elementos en línea.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/inline-block.html", '100%', 550)}}

### display: table-

Las propiedades de visualización de la tabla CSS son potencialmente muy útiles como respaldo, debido al hecho de que permiten patrones de diseño como columnas de altura completa y centrado vertical y funcionan hasta Internet Explorer 8.

Si usa `display: table-cell` en un elemento en su HTML, toma el estilo de una celda de tabla HTML. CSS crea cuadros anónimos para representar estos elementos para que no necesite envolver cada elemento en un contenedor para representar la fila de la tabla HTML, y un segundo para representar el elemento de la tabla en sí. No puede ver ni diseñar estos cuadros anónimos; Están allí para arreglar el árbol.

Si luego declara `display: flex` en el elemento principal, estos cuadros anónimos no se crean y, por lo tanto, su elemento sigue siendo un elemento secundario directo y puede convertirse en un elemento flexible, perdiendo cualquiera de las funciones de visualización de la tabla.

> [!NOTE]
> Algunos valores de visualización normalmente desencadenan la creación de cuadros anónimos alrededor del cuadro original. Si dicha caja es un elemento flexible, primero se bloquea y, por lo tanto, no se creará una caja anónima. Por ejemplo, dos elementos flexibles contiguos con pantalla: table-cell se convertirán en dos pantallas separadas: elementos flexibles de bloque, en lugar de estar envueltos en una sola tabla anónima. "- [4. Elementos Flexibles](https://www.w3.org/TR/css-flexbox-1/#flex-items)

{{EmbedGHLiveSample("css-examples/flexbox/browsers/table-cell.html", '100%', 550)}}

### The vertical-align property

El siguiente ejemplo en vivo demuestra el uso de la propiedad de [`vertical-align`](/es/docs/Web/CSS/vertical-align) junto con `display: inline-block` . Tanto `display: table-cell` como `display: inline-block` permiten el uso de esta propiedad. El uso de `vertical-align` vertical permite la alineación vertical antes de flexbox. Flexbox ignora la propiedad, por lo que puede usarla junto con `display: table-cell` o `display: inline-block` como respaldo y luego usar de forma segura las propiedades de alineación de caja en flexbox.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/vertical-align.html", '100%', 550)}}

## Consultas de funciones y flexbox

Puede usar [consultas de funciones](/es/docs/Web/CSS/%2540supports) para detectar la compatibilidad con flexbox:

```css
@supports (display: flex) {
  // code for supporting browsers
}
```

Tenga en cuenta que Internet Explorer 11 no admite consultas de funciones, pero _sí_ admite flexbox. Si decide que la implementación de IE11 es demasiado defectuosa y desea servirle el diseño alternativo, entonces podría usar consultas de características para servir las reglas de flexbox solo a aquellos navegadores con un buen soporte de flexbox. Recuerde que si desea incluir versiones de navegadores que tengan flexbox prefijado por el proveedor, deberá incluir la versión prefijada en su consulta de características. La siguiente consulta de características incluiría UC Browser, que admite consultas de características y sintaxis antigua de flexbox, con el prefijo:

```css
@supports (display: flex) or (display: -webkit-box) {
  // code for supporting browsers
}
```

Para obtener más información sobre el uso de consultas de características, consulte [Uso de consultas de características en CSS](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/) en el blog Mozilla Hacks.

## Conclusión

Si bien pasé algún tiempo en esta guía analizando posibles problemas y retrocesos, flexbox está muy listo para que lo use en el trabajo de producción. Esta guía lo ayudará en aquellos casos en los que encuentre un problema o tenga el requisito de admitir navegadores antiguos.
