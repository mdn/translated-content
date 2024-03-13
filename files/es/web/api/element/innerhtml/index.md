---
title: element.innerHTML
slug: Web/API/Element/innerHTML
---

{{APIRef}}

## Resumen

La propiedad `Element.innerHTML` devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.

Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.

> **Nota:** Si un nodo tiene un texto secundario que incluye los caracteres `(&), (<),` o `(>)`, `innerHTML` devuelve estos caracteres como \&amp, \&lt y \&gt respectivamente. Use {{ domxref("Node.textContent") }} para conseguir una copia correcta del contenido de estos nodos de texto.

Para **insertar el código HTML** en el documento en lugar de cambiar el contenido de un elemento, use el método [insertAdjacentHTML().](/es/docs/Web/API/Element/insertAdjacentHTML)

## Sintaxis

```js
const content = element.innerHTML;

element.innerHTML = htmlString;
```

### Valor

La variable constante `content` contiene un [DOMString](/es/docs/Web/API/DOMString) que contiene el código HTML serializado describiendo todos los descendientes de `element`. Cuando se establece el valor de innerHTML, **se eliminan todos los descendientes de `element`**, analiza la cadena `htmString` y asigna los nodos resultantes como descendientes de `element`.

### Excepciones

- `SyntaxError`
  - : Se intentó establecer el valor de `innerHTML` utilizando una cadena que no está formada correctamente en HTML
- `NoModificationAllowedError`
  - : Se intentó insertar el código HTML en un nodo cuyo elemento primario es [document](/es/docs/Web/API/Document).

## Notas de uso

La propiedad `innerHTML` de muchos tipos de elementos—incluyendo {{ HTMLElement("body") }} o {{ HTMLElement("html") }}—puede ser devuelta o establecida. Esta propiedad se puede usar para ver el código HTML de la página actual, incluida la que haya sido modificada dinámicamente:

### Devolver la sintaxis HTML de un elemento

Devolver el valor de `innerHTML` hace que el agente de usuario serialice el fragmento HTML compuesto por los descendientes del elemento. La cadena resultante es devuelta.

```js
const content = element.innerHTML;
```

Esto le permite ver la sintaxis HTML de los nodos contenidos en el elemento.

### Reemplazar el contenido de un elemento

Esta propiedad proporciona una forma sencilla de cambiar completamente los contenidos de un elemento por contenido nuevo. Por ejemplo, los contenidos completos del cuerpo del documento se pueden borrar así:

```js
document.body.innerHTML = ""; // Reemplaza el contenido de <body> con una cadena vacía
```

El siguiente ejemplo recupera la sintaxis HTML actual del documento y reemplaza los caracteres "`<`" con la entidad HTML "`&lt;`", convirtiendo esencialmente el HTML en texto plano. Esto luego se envuelve en un elemento [\<pre>](/es/docs/Web/HTML/Element/pre). Entonces el valor de innerHTML se cambia a esta nueva cadena. Como resultado, se muestra en pantalla el código fuente completo de la página.

```js
document.documentElement.innerHTML =
  "<pre>" + document.documentElement.innerHTML.replace(/</g, "&lt;") + "</pre>";
```

> **Nota:** Esta propiedad fue inicialmente implementada por navegadores web, y luego especificada por el WHATWG y el W3C en HTML5. Implementaciones antiguas no la implementarán exactamente igual. Por ejemplo, cuando el texto es ingresado en una caja de **texto multilinea (elemento `textarea`)**, Internet Explorer cambiará el valor de la propiedad `innerHTML` del **elemento `textarea`**, mientras que los navegadores Gecko no lo hacen.

### Consideración de seguridad

No es extraño que `innerHTML` sea usado para introducir texto en una página web. Esto añade un riesgo de seguridad.

```js
//ejemplo 1
var name = "Juan";
// asumiendo que 'el' es un elemento de HTML DOM
el.innerHTML = name; // sin peligro

// ...

//ejemplo 2
name = "<script>alert('Soy Juan con una alerta molesta!')</script>";
el.innerHTML = name; // fíjese que el texto es molesto y no es realmente lo que se esperaba.
```

Aunque esto, el ejemplo 2, puede parecer un ataque [cross-site scripting](http://en.wikipedia.org/wiki/Cross-site_scripting), **el resultado es inofensivo**, ya que HTML5 especifica que un tag `<script>` insertado a través innerHTML [no debe ejecutarse](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0).

Sin embargo, hay maneras de ejecutar JavaScript sin necesidad de utilizar el elemento `<script>`, por lo que todavía hay un riesgo de seguridad cada vez que se utiliza `innerHTML` para establecer cadenas de texto sobre las que no tiene control. Por ejemplo:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // con peligro, la alerta ahora si es mostrada
```

Por esa razón, cuando solo tratamos con texto, es recomendable no usar `innerHTML`, sino [Node.textContent](/En/DOM/Node.textContent), que no interpretará la cadena pasada como HTML, sino como texto plano.

## Ejemplo

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Documento sin título</title>
  </head>
  <body>
    <div id="txt">
      <p>primer parrafo hijo de div id="txt"</p>
      <p>segundo parrafo hijo de id="txt" txt</p>
    </div>
  </body>
</html>
```

```js
txt = document.getElementById("txt");
console.log(txt.innerHTML);
/*
La siguiente cadena (string) se muestra en la ventana de la consola:
<p>primer parrafo hijo de div id="txt"</p>
<p>segundo parrafo hijo de id="txt" txt</p>
*/
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [`innerDOM`](http://innerdom.sourceforge.net/) - Para aquellos que desean adherirse a los estándares, aquí hay un conjunto de funciones JavaScript que ofrecen serializar o analizar XML para así establecer contenidos de elementos definidos como cadena(s) via el DOM o para conseguir contenidos de elementos obtenidos del DOM como cadenas.
- [jssaxparser](http://code.google.com/p/jssaxparser/) - Una solución más robusta (aunque más pesada) que innerDOM (soporta análisis con espacios de nombres, atributos entre comillas simples, secciones CDATA, etc) es este analizador SAX2 cuando se utiliza con su manejador de contenido DOM. (Ofrece String to DOM, DOM to string es [significativamente más fácil](http://code.assembla.com/brettz9/subversion/nodes/DOMToString))
