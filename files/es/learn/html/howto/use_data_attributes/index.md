---
title: Uso de atributos de datos
slug: Learn/HTML/Howto/Use_data_attributes
---

{{LearnSidebar}}

[HTML5](/es/docs/Web/Guide/HTML/HTML5) está diseñado de forma tal que sea fácil extender los datos asociados a un elemento en particular sin necesidad de que tengan un significado definido. Los atributos [`data-*`](/es/docs/Web/HTML/Global_attributes#attr-dataset) permiten almacenar información adicional sobre un elemento HTML cualquiera sin tener que recurrir a artilugios tales como la utilización de atributos no estándar, propiedades adicionales en el DOM o {{domxref("Node.setUserData()")}}.

## Sintaxis HTML

La sintáxis es simple. Un atributo cualquiera cuyo nombre comience con `data-`es un atributo de datos. Supongamos que tenemos un artículo y deseamos almacenar información adicional que no tiene ninguna representación visual. En ese caso, alcanza con que hagamos uso de los atributos `data`:

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  ...
</article>
```

## Acceso a través de JavaScript

Leer los valores de estos atributos en [JavaScript](/es/docs/Web/JavaScript) también es muy sencillo. Puede usar {{domxref("Element.getAttribute", "getAttribute()")}} con su nombre HTML completo para leerlos, pero el estándar define una forma más simple: un {{domxref("DOMStringMap")}} puede leer a través de una propiedad {{domxref("HTMLElement.dataset", "dataset")}}.

Para obtener un atributo `data` a través del `dataset` del objeto, obtenga la propiedad por la parte del nombre del atributo despues de `data-` (tenga en cuenta que los guiones son convertidos en camelCase).

```js
var article = document.getElementById("electriccars");

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Cada propiedad es una cadena y se puede leer y escribir. En el caso anterior, establecer `article.dataset.columns = 5` cambiaría ese atributo a `"5"`.

## Acceso a través de CSS

Tenga en cuenta que, debido a que los atributos de datos son atributos simples de HTML, incluso puede acceder a ellos desde [CSS](/es/docs/Web/CSS). Por ejemplo, para mostrar los `data-parent` en el artículo, puede usar el [contenido generado](/es/docs/Web/CSS/content) en CSS con la función {{cssxref("attr")}}:

```css
article::before {
  content: attr(data-parent);
}
```

También puede usar los [selectores de atributos](/es/docs/Web/CSS/Attribute_selectors) en CSS para cambiar los estilos de acuerdo a las priopiedades de datos:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Puede ver todo esto trabajando junto [en este ejemplo de JSBin](http://jsbin.com/ujiday/2/edit).

Los atributos de datos también se pueden almacenar para que contengan información que cambia constantemente, como los puntajes en un juego. Usando los selectores de CSS y el acceso a JavaScript aquí, esto le permite crear algunos efectos ingeniosos sin tener que escribir sus propias rutinas de visualización. Consulte [este screencast](http://www.youtube.com/watch?v=On_WyUB1gOk) para ver un ejemplo utilizando contenido generado y transacciones CSS ([Ejemplo JSBin](http://jsbin.com/atawaz/3/edit)).

Los valores de datos son cadenas de caracteres. Los valores numéricos deben ser citados en el selector para que el estilo surta efecto.

## Problemas

No almacene el contenido que debería ser visible y accesible en los atributos de datos, ya que las tecnologías de asistencia, no pueden acceder a ellos. Ademas, los rastreadores de búsqueda no pueden indexar los valores de los atributos de datos.

Los principales problemas a considerar son el soporte y rendimiento en Internet Explorer. Internet Explorer 11 y superiores, proporcionan soporte para el estándar, pero todas las versiones anteriores [no son compatibles con `dataset`](http://caniuse.com/#feat=dataset). Para admitir IE 10 e inferiores, debe acceder a los atributos de datos con {{domxref("Element.getAttribute", "getAttribute()")}} en su lugar. Ademas, el [rendimiento de lectura de los atributos de datos](http://jsperf.com/data-dataset) en comparación con el almacenamiento de estos datos en un objeto JS normal es deficiente.

Dicho esto, sin embargo, para metadatos asociados a elementos personalizados, son una gran solución.

En Firefox 49.0.2 (y quizás versiones anteriores), los atributos de datos que exceden los 1022 caracteres no serán leídos por Javascript (EcmaScript 4).

## Ver también

- Este artículo es una adaptación de [Usando atributos de datos en JavaScript y CSS en hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Los atributos personalizados también son compatibles en SVG 2; vea {{domxref("SVGElement.dataset")}} y {{SVGAttr("data-*")}} para más información.
- [Cómo utilizar atributos de datos HTML5](http://www.sitepoint.com/use-html5-data-attributes/)
