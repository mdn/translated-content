---
title: Cómo manejan el espacio en blanco HTML, CSS y el DOM
slug: Web/API/Document_Object_Model/Whitespace
---

{{APIRef("DOM")}}

La presencia de espacios en blanco en el [DOM](/es/docs/Web/API/Document_Object_Model) puede causar problemas de diseño y dificultar la manipulación del árbol de contenido de formas inesperadas, dependiendo de dónde se encuentra. Este artículo explora cuándo pueden surgir dificultades y analiza qué se puede hacer para mitigar los problemas resultantes.

## ¿Qué es el espacio en blanco?

El espacio en blanco es cualquier cadena de texto compuesta solo por espacios, tabulaciones o saltos de línea (para ser precisos, secuencias CRLF, retornos de carro o avances de línea). Estos caracteres te permiten formatear tu código de una manera que lo hará fácilmente legible por ti y otras personas. De hecho, gran parte de nuestro código fuente está lleno de estos caracteres de espacio en blanco, y solo tendemos a deshacernos de ellos en un paso de compilación de producción para reducir el tamaño de descarga del código.

### ¿HTML ignora en gran medida los espacios en blanco?

En el caso de HTML, los espacios en blanco se ignoran en gran medida: los espacios en blanco entre palabras se tratan como un solo carácter y los espacios en blanco al principio y al final de los elementos y los elementos externos se ignoran. Tomemos el siguiente ejemplo minimalista:

### HTML largely ignores whitespace?

```html-nolint
<!doctype html>

    <h1>       ¡Hola      mundo!     </h1>
```

{{EmbedLiveSample('HTML_largely_ignores_whitespace')}}

Este código fuente contiene un par de avances de línea después del `DOCTYPE` y un montón de caracteres de espacio antes, después y dentro del elemento `<h1>`, pero al navegador no parece importarle en absoluto y solo muestra las palabras "¡Hola mundo!" como si estos caracteres no existieran en absoluto:

Esto es para que los espacios en blanco no afecten el diseño de tu página. Crear espacio alrededor y dentro de los elementos es el trabajo de CSS.

### ¿Qué sucede con los espacios en blanco?

Sin embargo, no solo desaparecen.

Cualquier carácter de espacio en blanco que esté fuera de los elementos HTML del documento original se representan en el DOM. Esto es necesario internamente para que el editor pueda preservar el formato de los documentos. Esto significa que:

- Habrá algunos nodos de texto que contienen solo espacios en blanco, y
- Algunos nodos de texto tendrán espacios en blanco al principio o al final.

Tomemos el siguiente documento, por ejemplo:

```html-nolint
<!doctype html>
<html>
  <head>
    <title>Mi Documento</title>
  </head>
  <body>
    <h1>Encabezado</h1>
    <p>
      Párrafo
    </p>
  </body>
</html>
```

El árbol del DOM para esto se ve así:

![árbol de dom equivalente al ejemplo de HTML anterior](dom-string.png)

Conservar caracteres de espacio en blanco en el DOM es útil de muchas maneras, pero hay ciertos lugares donde esto hace que ciertos diseños sean más difíciles de implementar y causa problemas a los desarrolladores que quieren iterar a través de los nodos del DOM. Veremos estas y algunas soluciones más adelante.

### ¿CSS cómo procesa los espacios en blanco?

La mayoría de los espacios en blanco se ignoran, no todos. En el ejemplo anterior, uno de los espacios entre "!Hola" y "mundo!" todavía existe cuando la página se representa en un navegador. Hay reglas en el motor del navegador que deciden qué caracteres de espacio en blanco son útiles y cuáles no; estos se especifican al menos en parte en el [Módulo de texto CSS Nivel 3](https://www.w3.org/TR/css-text-3), y especialmente las partes sobre la [propiedad `white-space` en CSS](https://www.w3.org/TR/css-text-3/#white-space-property) y [detalles de procesamiento del espacio en blanco](https://www.w3.org/TR/css-text-3/#white-space-processing), pero también ofrecemos una explicación más sencilla a continuación.

Tomemos otro ejemplo realmente simple. Para hacerlo más fácil, ilustramos todos los espacios con ◦, todas las tabulaciones con ⇥ y todos los saltos de línea con ⏎:

Este ejemplo:

```html-nolint
<h1>◦◦◦¡Hola◦⏎
⇥⇥⇥⇥<span>◦mundo!</span>⇥◦◦</h1>
```

se representa en el navegador así:

#### Ejemplo

```html-nolint hidden
<h1>   ¡Hola
    <span> mundo!</span>   </h1>
```

{{EmbedLiveSample('Hidden_example')}}

#### Elemento `h1`

El elemento `<h1>` contiene solo elementos en línea. De hecho contiene:

- Un nodo de texto (que consta de algunos espacios, la palabra "¡Hola" y algunas tabulaciones).
- Un elemento en línea (el `<span>`, que contiene un espacio, y la palabra "mundo!").
- Otro nodo de texto (que consta solo de tabulaciones y espacios).

Debido a esto, establece lo que se llama un {{cssxref("Inline_formatting_context", "contexto de formato en línea")}}. Este es uno de los posibles contextos de representación de diseño con los que funcionan los motores del navegador.

Dentro de este contexto, el procesamiento de caracteres de espacio en blanco se puede resumir de la siguiente manera:

1. Primero, todos los espacios y tabulaciones inmediatamente antes y después de un salto de línea se ignoran, por lo que, si tomamos nuestro marcado de ejemplo anterior y aplicamos esta primera regla, obtenemos:

   ```html-nolint
   <h1>◦◦◦¡Hola⏎
   <span>◦mundo!</span>⇥◦◦</h1>
   ```

2. A continuación, todos los caracteres de tabulación se tratan como caracteres de espacio, por lo que el ejemplo se convierte en:

   ```html-nolint
   <h1>◦◦◦¡Hola⏎
   <span>◦mundo!</span>◦◦◦</h1>
   ```

3. A continuación, los saltos de línea se convierten en espacios:

   ```html
   <h1>◦◦◦¡Hola◦<span>◦mundo!</span>◦◦◦</h1>
   ```

4. Después de eso, cualquier espacio inmediatamente después de otro espacio (incluso a través de dos elementos en línea separados) se ignora, por lo que terminamos con:

   ```html
   <h1>◦¡Hola◦<span>mundo!</span>◦</h1>
   ```

5. Y finalmente, las secuencias de espacios al principio y al final de una línea se eliminan, por lo que eventualmente obtenemos esto:

   ```html
   <h1>¡Hola◦<span>mundo!</span></h1>
   ```

Es por eso que las personas que visitan la página web simplemente verán la frase "¡Hola mundo!" muy bien escrita en la parte superior de la página, en lugar de un "!Hola" con una sangría extraña, seguido de un "mundo!" en la línea debajo de esa.

> **Nota:** [Firefox DevTools](/es/docs/Tools) ha admitido el resaltado de nodos de texto desde la versión 52, lo que facilita ver exactamente qué contenido hay dentro de los nodos de espacios en blanco. Los nodos de espacios en blanco puros están marcados con una etiqueta "`whitespace`".

### Espacio en blanco en contextos de formato de bloque

Anteriormente, solo miramos elementos que contienen elementos en línea y contextos de formato en línea. Si un elemento contiene al menos un elemento de bloque, entonces establece lo que se llama un {{cssxref("Block_formatting_context", "contexto de formato de bloque")}}.

En este contexto, los espacios en blanco se tratan de manera muy diferente. Veamos un ejemplo para explicar cómo. Hemos marcado los espacios en blanco como antes.

```html-nolint
<body>⏎
⇥<div>◦◦¡Hola◦◦</div>⏎
⏎
◦◦◦<div>◦◦mundo!◦◦</div>◦◦⏎
</body>
```

Tenemos 3 nodos de texto que contienen solo espacios en blanco, uno antes del primer `<div>`, uno entre los 2 `<div>`s y uno después del segundo `<div>`.

Esto se renderiza así:

#### Ejemplo

```html-nolint hidden
<body>
  <div>  ¡Hola  </div>

   <div>  mundo!   </div>
</body>
```

{{EmbedLiveSample('Hidden_example_2')}}

#### Breve resumen

Podemos resumir cómo se maneja el espacio en blanco aquí de la siguiente manera (puede haber algunas pequeñas diferencias en el comportamiento exacto entre los navegadores, pero básicamente, esto funciona):

1. Debido a que estamos dentro de un contexto de formato de bloque, todo debe ser un bloque, por lo que nuestros 3 nodos de texto también se convierten en bloques, al igual que los 2 `<div>`s. Los bloques ocupan todo el ancho disponible y se apilan unos encima de los otros, lo cual significa que terminamos con un diseño compuesto por esta lista de bloques:

   ```html
   <block>⏎⇥</block>
   <block>◦◦¡Hola◦◦</block>
   <block>⏎◦◦◦</block>
   <block>◦◦mundo!◦◦</block>
   <block>◦◦⏎</block>
   ```

2. Esto luego se simplifica aún más aplicando las reglas de procesamiento para espacios en blanco en contextos de formato en línea a estos bloques:

   ```html
   <block></block>
   <block>¡Hola</block>
   <block></block>
   <block>mundo!</block>
   <block></block>
   ```

3. Los 3 bloques vacíos que tenemos ahora no van a ocupar ningún espacio en el diseño final, porque no contienen nada, así que terminaremos con solo 2 bloques ocupando espacio en la página. Las personas que visitan la página web ven las palabras "!Hola" y "mundo!" en 2 líneas separadas, ya que esperarías que se distribuyeran 2 `<div>`s. El motor del navegador esencialmente ha ignorado todos los espacios en blanco que se agregaron en el código fuente.

## Espacios entre elementos en línea y bloques en línea

Ahora analicemos algunos problemas que pueden surgir debido a los espacios en blanco y qué se puede hacer al respecto. En primer lugar, veremos qué sucede con los espacios entre los elementos en línea y de bloque en línea. De hecho, ya vimos esto en nuestro primer ejemplo, cuando describimos cómo se procesan los espacios en blanco dentro de los contextos de formato en línea.

Dijimos que había reglas para ignorar la mayoría de los caracteres, pero que los caracteres que separan palabras permanecen. Cuando solo se trata de elementos a nivel de bloque como `<p>` que solo contienen elementos en línea como `<em>`, `<strong>`, `<span>`, etc., normalmente no te importa esto porque el espacio en blanco adicional que llega al diseño es útil para separar las palabras en la oración.

Sin embargo, se vuelve más interesante cuando comienzas a usar elementos `inline-block`. Estos elementos se comportan como elementos en línea en el exterior y como bloques en el interior, y a menudo se utilizan para mostrar piezas de la IU más complejas que solo texto, una al lado de la otra en la misma línea, por ejemplo, elementos del menú de navegación.

Debido a que son bloques, muchas personas esperan que se comporten como tales, pero en realidad no es así. Si hay espacios en blanco de formato entre elementos en línea adyacentes, esto dará como resultado un espacio en el diseño, al igual que los espacios entre palabras en el texto.

Considera este ejemplo (nuevamente, los espacios en blanco en el HTML están marcados para que sean visibles):

```css
.people-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.people-list li {
  display: inline-block;
  width: 2em;
  height: 2em;
  background: #f06;
  border: 1px solid;
}
```

```html-nolint
<ul class="people-list">⏎

◦◦<li></li>⏎

◦◦<li></li>⏎

◦◦<li></li>⏎

◦◦<li></li>⏎

◦◦<li></li>⏎

</ul>
```

Esto se traduce de la siguiente manera:

#### Ejemplo

```css hidden
.people-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.people-list li {
  display: inline-block;
  width: 2em;
  height: 2em;
  background: #f06;
  border: 1px solid;
}
```

```html hidden
<ul class="people-list">
  <li></li>

  <li></li>

  <li></li>

  <li></li>

  <li></li>
</ul>
```

{{EmbedLiveSample('Hidden_example_3')}}

Probablemente no desees los espacios entre los bloques — dependiendo del caso de uso (¿esta es una lista de avatares o botones de navegación horizontales?), Probablemente desees que los lados del elemento estén alineados entre sí y poder controlar cualquier espacio tú mismo.

El _Inspector HTML de Firefox DevTools_ resaltará los nodos de texto y también te mostrará exactamente qué áreas están ocupando los elementos, lo que es útil si te preguntas qué está causando el problema y tal vez estés pensando que tienes un margen adicional allí o algo así.

![Espacio en blanco en Devtools](whitespace-devtools.png)

Hay algunas formas de solucionar este problema:

#### Usando flexbox

Utiliza [Flexbox](/es/docs/Learn/CSS/CSS_layout/Flexbox) para crear la lista horizontal de elementos en lugar de probar una solución de `inline-block`. Esto se encarga de todo por ti y definitivamente es la solución preferida:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
```

Si necesitas confiar en `inline-block`, puedes establecer el {{cssxref("font-size")}} de la lista a 0. Esto solo trabaja si tus bloques no tienen el tamaño `ems` (según el `font-size`, por lo que el tamaño del bloque también terminaría siendo 0). `rems` sería una buena opción aquí:

```css
ul {
  font-size: 0;
  ...
}

li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  ...
}
```

O puedes establecer un margen negativo en los elementos de la lista:

```css
li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}
```

También puedes resolver este problema colocando los elementos de tu lista en la misma línea en la fuente, lo cual hace que los nodos de espacios en blanco no se creen en primer lugar:

```html-nolint
<li></li><li></li><li></li><li></li><li></li>
```

## Recorrido del DOM y el espacio en blanco

Al intentar realizar una manipulación del [DOM](/es/docs/Web/API/Document_Object_Model) en JavaScript, también puedes encontrar problemas debido a los nodos de espacios en blanco. Por ejemplo, si tienes una referencia a un nodo padre y deseas afectar su primer elemento hijo usando [`Node.firstChild`](/es/docs/Web/API/Node/firstChild), si hay un nodo de espacio en blanco deshonesto justo después de la etiqueta de apertura principal, no obtendrás el resultado que esperabas. Se seleccionaría el nodo de texto en lugar del elemento al que deseas afectar.

Veamos otro ejemplo, si tienes un determinado subconjunto de elementos en los que deseas hacer algo en función de si están vacíos (no tienen nodos secundarios) o, no puedes verificar si cada elemento está vacío usando algo como [`Node.hasChildNodes()`](/es/docs/Web/API/Node/hasChildNodes), pero nuevamente, si algún elemento destino contiene nodos de texto, podrías terminar con resultados falsos.

## Funciones auxiliares de espacios en blanco

El siguiente código JavaScript define varias funciones que facilitan el manejo de espacios en blanco en el DOM:

```js
/**
 * En todo, el espacio en blanco se define como uno de los caracteres
 *  "\t" TAB \u0009
 *  "\n" LF  \u000A
 *  "\r" CR  \u000D
 *  " "  SPC \u0020
 *
 * Esto no usa la "\s" de Javascript porque eso incluye
 * espacios irrompibles (y también algunos otros caracteres).
 */

/**
 * Determina si el contenido de texto de un nodo es completamente de espacios en blanco.
 *
 * @param nod  Un nodo que implementa la interfaz | CharacterData | (es decir,
 *             un nodo |Text|, |Comment| o |CDATASection|
 * @return     True si todo el contenido de texto de |nod| es espacio en blanco,
 *             de lo contrario false.
 */
function is_all_ws(nod) {
  // Usa las características de String y RegExp de ECMA-262 Edición 3
  return !/[^\t\n\r ]/.test(nod.textContent);
}

/**
 * Determina si un nodo debe ser ignorado por las funciones del iterador.
 *
 * @param nod  Un objeto implementando la interfaz |Node| de DOM1.
 * @return     true si el nodo es:
 *                1) Un nodo |Text| en que todo es espacio en blanco
 *                2) Un nodo |Comment|
 *             y de lo contrario false.
 */

function is_ignorable(nod) {
  return (
    nod.nodeType == 8 || // Un nodo comment
    (nod.nodeType == 3 && is_all_ws(nod))
  ); // un nodo text, todo es eeb
}

/**
 * Versión de |previousSibling| que omite los nodos que son completamente
 * espacio en blanco o comentarios.  (Normalmente |previousSibling| es una propiedad
 * de todos los nodos DOM que devuelve el nodo hermano, el nodo que es
 * un hijo del mismo padre, que ocurre inmediatamente antes del
 * nodo de referencia).
 *
 * @param sib  El nodo de referencia.
 * @return     O bien:
 *               1) El hermano anterior más cercano a |sib| eso no es
 *                  ignorable según |is_ignorable|, o
 *               2) null si no existe tal nodo.
 */
function node_before(sib) {
  while ((sib = sib.previousSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * Versión de |nextSibling| que omite los nodos que son completamente
 * espacio en blanco o comentarios.
 *
 * @param sib  El nodo de referencia.
 * @return     O bien:
 *               1) El hermano más cercano a |sib| eso no es
 *                  ignorable según |is_ignorable|, o
 *               2) null si no existe tal nodo.
 */
function node_after(sib) {
  while ((sib = sib.nextSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * Versión de |lastChild| que omite los nodos que son completamente
 * espacio en blanco o comentarios.  (Normalmente |lastChild| es una propiedad
 * de todos los nodos del DOM que da el último de los nodos contenidos
 * directamente en el nodo de referencia).
 *
 * @param sib  El nodo de referencia.
 * @return     O bien:
 *               1) El último hijo de |sib| eso no es
 *                  ignorable según |is_ignorable|, o
 *               2) null si no existe tal nodo.
 */
function last_child(par) {
  var res = par.lastChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.previousSibling;
  }
  return null;
}

/**
 * Versión de |firstChild| que omite los nodos que son completamente
 * espacios en blanco y comentarios.
 *
 * @param sib  El nodo de referencia.
 * @return     O bien:
 *               1) El primer hijo de |sib| eso no es
 *                  ignorable según |is_ignorable|, o
 *               2) null si no existe tal nodo.
 */
function first_child(par) {
  var res = par.firstChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.nextSibling;
  }
  return null;
}

/**
 * Versión de |data| que no incluye espacios en blanco al principio
 * y finaliza y normaliza todos los espacios en blanco a un solo espacio.  (Normalmente
 * |data| es una propiedad de los nodos de texto que proporciona el texto del nodo).
 *
 * @param txt  El nodo de texto cuyos datos se deben devolver
 * @return     Una cadena que proporciona el contenido del nodo de texto con
 *             espacios en blanco colapsados.
 */
function data_of(txt) {
  var data = txt.textContent;
  // Usa las características de String y RegExp de ECMA-262 Edición 3
  data = data.replace(/[\t\n\r ]+/g, " ");
  if (data.charAt(0) == " ") data = data.substring(1, data.length);
  if (data.charAt(data.length - 1) == " ")
    data = data.substring(0, data.length - 1);
  return data;
}
```

### Ejemplo

El siguiente código demuestra el uso de las funciones anteriores. Itera sobre los hijos de un elemento (cuyos hijos son todos elementos) para encontrar aquel cuyo texto es `"Este es el tercer párrafo"`, y luego cambia el atributo de clase y el contenido de ese párrafo.

```js
var cur = first_child(document.getElementById("test"));
while (cur) {
  if (data_of(cur.firstChild) == "Este es el tercer párrafo.") {
    cur.className = "magic";
    cur.firstChild.textContent = "Este es el párrafo mágico.";
  }
  cur = node_after(cur);
}
```
