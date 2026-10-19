---
title: Sintaxis básica de HTML
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

En este artículo veremos los fundamentos de HTML, incluidos la terminología, la sintaxis y la estructura. Por el camino, completarás algunos desafíos interactivos para familiarizarte con la escritura de HTML básico.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        <a href="/es/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Tener instalado el software básico</a> y conocimientos básicos sobre el <a href="/es/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">manejo de archivos</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>La anatomía de un elemento HTML: elemento, etiqueta de apertura, contenido, etiqueta de cierre y atributos.</li>
          <li>El cuerpo (body) de HTML y su función como contenedor del contenido de la página.</li>
          <li>Qué son los elementos vacíos y en qué se diferencian de otros elementos.</li>
          <li>La necesidad de un doctype al principio de los documentos HTML, incluido el propósito para el que se pensó originalmente y el hecho de que ahora es en cierto modo un vestigio histórico.</li>
          <li>Entender que HTML tiene que estar anidado correctamente.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es HTML?

{{glossary("HTML")}} (HyperText Markup Language, lenguaje de marcado de hipertexto) es un _lenguaje de marcado_ que indica a los navegadores web cómo estructurar las páginas web que visitas. HTML consiste en una serie de {{glossary("Element", "elementos")}}, que usas para encerrar, envolver o _marcar_ distintas partes del contenido para que aparezcan o se comporten de cierta manera. Las {{glossary("Tag", "etiquetas")}} que lo encierran pueden convertir el contenido en un hipervínculo que enlace a otra página, poner palabras en cursiva, etc. Por ejemplo, fíjate en la siguiente línea de texto:

```plain
Mi gato es muy gruñón
```

Podríamos especificar que este texto es un párrafo encerrándolo entre etiquetas de párrafo ({{htmlelement("p")}}):

```html
<p>Mi gato es muy gruñón</p>
```

O podríamos especificar que este texto es un encabezado de nivel superior encerrándolo entre etiquetas [`<h1>`](/es/docs/Web/HTML/Reference/Elements/Heading_Elements):

```html
<h1>Mi gato es muy gruñón</h1>
```

HTML vive dentro de archivos de texto llamados **documentos HTML**, o simplemente **documentos**, con la extensión de archivo `.html`. Si antes hablábamos de páginas web, un documento HTML contiene el contenido de la página web y especifica su estructura.

El archivo HTML más habitual que te encontrarás es `index.html`, que suele usarse para el contenido de la página de inicio de un sitio web. También es habitual ver subcarpetas con sus propios archivos `index.html`, así que un sitio web puede tener varios archivos índice en distintos lugares.

> [!NOTE]
> Las etiquetas de HTML no distinguen entre mayúsculas y minúsculas. Esto significa que se pueden escribir en mayúsculas o en minúsculas. Por ejemplo, una etiqueta {{htmlelement("title")}} podría escribirse como `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, etc., y funcionará. Sin embargo, la buena práctica es escribir todas las etiquetas en minúsculas por coherencia y legibilidad.

## Anatomía de un elemento HTML

Exploremos un poco más nuestro elemento de párrafo de la sección anterior:

![Un fragmento de código de ejemplo que muestra la estructura de un elemento HTML.<p> My cat is very grumpy </p>.](grumpy-cat-small.png)

Nuestro elemento completo consta de:

- **La etiqueta de apertura:** consiste en el nombre del elemento (en este ejemplo, _p_ de párrafo) entre corchetes angulares de apertura y de cierre. Esta etiqueta de apertura marca dónde empieza el elemento o dónde empieza a surtir efecto. En este ejemplo, precede al inicio del texto del párrafo.
- **El contenido:** es el contenido del elemento. En este ejemplo, es el texto del párrafo: «Mi gato es muy gruñón».
- **La etiqueta de cierre:** es igual que la etiqueta de apertura, salvo que incluye una barra antes del nombre del elemento. Marca dónde termina el elemento. No incluir una etiqueta de cierre es un error habitual de principiante que puede producir resultados peculiares.

> [!NOTE]
> Visita el scrim [HTML tags](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) de nuestro socio de aprendizaje Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> para ver una explicación interactiva de las etiquetas HTML.

### Crear tu primer elemento HTML

Vamos a practicar un poco escribiendo tus propios elementos HTML:

1. Haz clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Envuelve la línea de texto con las etiquetas `<em>` y `</em>`. Para _abrir el elemento_, pon la etiqueta de apertura (`<em>`) al principio de la línea. Para _cerrar el elemento_, pon la etiqueta de cierre (`</em>`) al final de la línea. Al hacerlo, el texto representado debería aparecer en cursiva.
3. Si te sientes aventurero, prueba a investigar [más elementos HTML](/es/docs/Web/HTML/Reference/Elements) y aplicarlos al texto de ejemplo.

Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ en el MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo del bloque de código.

```html live-sample___basic_html_1
Este es mi texto.
```

{{ EmbedLiveSample('basic_html_1', "100%", 60) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu línea de HTML terminada debería verse así:

```html
<em>Este es mi texto.</em>
```

</details>

### Anidar elementos

Los elementos se pueden colocar dentro de otros elementos. Esto se llama _anidamiento_. Si quisiéramos decir que nuestro gato es **muy** gruñón, podríamos envolver la palabra _muy_ en un elemento {{htmlelement("strong")}}, que da a la palabra un formato de texto más fuerte:

```html
<p>Mi gato es <strong>muy</strong> gruñón.</p>
```

En este bloque de código, todo el texto «Mi gato es muy gruñón.» se define como un párrafo. La palabra «muy» se define además como de gran importancia.

Hay una forma correcta y una incorrecta de anidar. En el bloque de código anterior, primero abrimos el elemento `<p>` y después el elemento `<strong>`. Para anidar correctamente, primero cerramos el elemento `<strong>` y después el `<p>`.

El siguiente es un ejemplo de la forma _incorrecta_ de anidar:

```html-nolint example-bad
<p>Mi gato es <strong>muy gruñón.</p></strong>
```

Las **etiquetas tienen que abrirse y cerrarse de forma que queden una dentro o fuera de la otra**. Como en el bloque de código anterior los elementos se solapan, el navegador tiene que adivinar tu intención. Este tipo de adivinanzas puede dar resultados inesperados.

### Elementos vacíos

No todos los elementos siguen el patrón de etiqueta de apertura, contenido y etiqueta de cierre. Algunos elementos constan de una sola etiqueta, que normalmente se usa para insertar o incrustar algo en el documento. Estos elementos se llaman {{glossary("void element", "elementos vacíos")}}, lo que significa «elementos que no pueden contener otro contenido HTML».

Por ejemplo, el elemento {{htmlelement("br")}} inserta un salto de línea en una línea de texto, lo que hace que se divida en varias líneas:

```html live-sample___void-example
<p>
  Este es un único párrafo, pero vamos a <br />dividirlo en dos líneas aparte.
</p>
```

Se ve así:

{{ EmbedLiveSample('void-example', "100%", 100) }}

> [!NOTE]
> En algunos ejemplos de HTML verás una `/` añadida al final de la etiqueta de un elemento vacío, por ejemplo, `<br />`. Es un estilo distinto de sintaxis de marcado, que no es incorrecto, pero esta «barra de cierre» no es necesaria.

## Atributos

Los elementos también pueden tener atributos. Los atributos tienen este aspecto:

![Etiqueta de párrafo con el atributo 'class="editor-note"' resaltado](grumpy-cat-attribute-small.png)

Los atributos contienen información adicional sobre el elemento que no forma parte de su contenido. El atributo **`class`** proporciona un nombre identificativo que se puede usar para seleccionar el elemento con estilos (CSS) o con información de script (JavaScript).

Un atributo debe tener:

- Un espacio entre él y el nombre del elemento. Cuando un elemento tiene más de un atributo, los atributos también deben separarse con espacios.
- El nombre del atributo, seguido de un signo igual (`=`).
- Un valor de atributo, entre comillas de apertura y de cierre.

### Añadir atributos a un elemento

Ahora te toca otra vez. En esta sección vas a explorar el elemento {{htmlelement("img")}}, que se usa para mostrar una imagen en la página. El elemento `<img>` puede llevar varios atributos, entre ellos:

- `src`: un atributo **obligatorio** que especifica la {{glossary("URL")}} (dirección web) de la imagen. Por ejemplo: `src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"`.
- `alt`: especifica una descripción de texto que describe la imagen a las personas que no pueden verla. Por ejemplo: `alt="El icono de Firefox Nightly"`. Técnicamente este atributo no es obligatorio, pero deberías proporcionar una descripción de texto para todas las imágenes que transmitan significado (en lugar de ser puramente decorativas).
- `width`: especifica el ancho de la imagen en píxeles. Por ejemplo: `width="300"`.
- `height`: especifica la altura de la imagen en píxeles. Por ejemplo: `height="300"`.

Sigue los pasos siguientes para completar la tarea:

1. Haz clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Busca en internet tu imagen favorita, haz clic derecho en ella y pulsa _Copiar dirección de la imagen_ (o _Copiar enlace de la imagen_). También puedes copiar la URL de la imagen de arriba.
3. De vuelta en el MDN Playground, añade el atributo `src` al elemento `<img>` y establece como valor la URL del paso 2.
4. Establece en el atributo `alt` una descripción adecuada de la imagen.
5. Establece el atributo `width` en un valor como `300` para ver la imagen un poco mejor dentro del panel de resultados. Ajusta el valor si hace falta.

Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ en el MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo del bloque de código.

```html live-sample___basic_html_2
<img />
```

{{ EmbedLiveSample('basic_html_2', "100%", 60) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu elemento HTML terminado debería verse más o menos así:

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"
  alt="Una descripción de la imagen"
  width="300" />
```

</details>

### Atributos booleanos

A veces verás atributos HTML escritos sin valores. Se llaman [atributos booleanos](/es/docs/Glossary/Boolean/HTML). Cuando se añade un atributo booleano, su valor se establece en `true`, sea cual sea el valor que se le asigne (incluso ninguno). Si un atributo no se incluye en una etiqueta HTML, su valor se establece en `false`.

Por ejemplo, fíjate en el atributo [`disabled`](/es/docs/Web/HTML/Reference/Elements/input#disabled), que puedes asignar a los elementos {{htmlelement("input")}} de un formulario para impedir que el usuario introduzca datos en ellos. Por ejemplo:

```html live-sample___boolean-example
<label for="first-input">Este campo está desactivado</label>
<input id="first-input" type="text" disabled="disabled" />
<br />
```

Como forma abreviada, se puede escribir el atributo `disabled` sin valor:

```html live-sample___boolean-example
<label for="second-input">Este campo también está desactivado</label>
<input id="second-input" type="text" disabled />
<br />
```

Como referencia, añadamos también un elemento `<input>` que no esté desactivado, para que puedas compararlos (fíjate en que los campos `disabled` aparecen algo atenuados en el resultado de abajo):

```html live-sample___boolean-example
<label for="third-input">Este no está desactivado: puedes escribir en él</label>
<input id="third-input" type="text" />
```

Los fragmentos de HTML anteriores se ven así:

{{ EmbedLiveSample('boolean-example', "100%", 100) }}

> [!NOTE]
> Los elementos {{htmlelement("label")}} incluidos en el código anterior permiten asociar etiquetas descriptivas a los elementos de formulario. Los incluimos porque es una buena práctica y para separar un poco los campos del formulario.

### Omitir las comillas de los valores de atributo

En ciertas circunstancias, se pueden omitir las comillas de los valores de atributo. Pero como en otras circunstancias esto puede romper tu marcado, te recomendamos incluir **siempre** las comillas. Veamos por qué.

El elemento del fragmento de código siguiente, {{htmlelement("a")}}, se llama **ancla**. Las anclas encierran texto y lo convierten en enlaces. El atributo `href` especifica la URL a la que apunta el enlace. Puedes omitir las comillas del valor del atributo `href` que se muestra abajo sin consecuencias negativas, porque no contiene espacios:

```html
<a href=https://www.mozilla.org/>sitio web favorito</a>
```

Sin embargo, enseguida tendrás problemas al omitir las comillas en valores de atributo _con_ espacios. Fíjate en el atributo `title` que se muestra abajo, que proporciona una descripción de la página enlazada («The Mozilla homepage») que debería aparecer como información emergente al pasar el puntero del ratón por encima del enlace.

```html-nolint example-bad live-sample___bad-no-quotes
<a href=https://www.mozilla.org/ title=The Mozilla homepage>sitio web favorito</a>
```

Como el valor del atributo `title` no está entre comillas, el navegador lo interpreta como tres atributos: un atributo `title` con el valor `The`, y dos atributos booleanos, `Mozilla` y `homepage`. ¡Evidentemente, esto no es lo que pretendíamos! Si usas un dispositivo con puntero de ratón, puedes pasar el puntero por encima del enlace para ver la información emergente del título (mostrará «The» en lugar del «The Mozilla homepage» que pretendíamos).

{{ EmbedLiveSample('bad-no-quotes', 700, 100) }}

Incluye siempre las comillas en los valores de atributo. Evita errores y comportamientos no deseados, y da como resultado un código más legible.

### ¿Comillas simples o dobles?

En este artículo hemos puesto todos los valores de atributo entre comillas dobles. Sin embargo, puede que veas comillas simples en algún código HTML. Es una cuestión de estilo. Puedes elegir la que prefieras. Estas dos líneas son equivalentes:

```html-nolint
<a href='https://www.example.com'>Un enlace a mi ejemplo.</a>

<a href="https://www.example.com">Un enlace a mi ejemplo.</a>
```

Asegúrate de no mezclar comillas simples y dobles. El ejemplo de abajo mezcla comillas, lo que provocará errores, porque para el navegador el valor del atributo `href` no ha terminado:

```html-nolint example-bad
<a href="https://www.example.com'>Un enlace a mi ejemplo.</a>
```

Si usas un tipo de comillas, puedes incluir el otro tipo _dentro_ de los valores de atributo. Esto funciona bien:

```html
<a href="https://www.example.com" title="¿No es 'divertido'?">
  Un enlace a mi ejemplo.
</a>
```

Para usar comillas dentro de otras comillas del mismo tipo (simples o dobles), puedes usar [referencias de caracteres](#referencias_de_caracteres_incluir_caracteres_especiales_en_html). Por ejemplo, esto se romperá:

```html-nolint example-bad
<a href="https://www.example.com" title="Una referencia "interesante"">Un enlace a mi ejemplo.</a>
```

En su lugar, tienes que hacer esto:

```html-nolint
<a href="https://www.example.com" title="Una referencia &quot;interesante&quot;">Un enlace a mi ejemplo.</a>
```

## Anatomía de un documento HTML

Los elementos HTML individuales no son muy útiles por sí solos. A continuación, veamos cómo se combinan los elementos individuales para formar una página HTML completa.

El siguiente ejemplo es una página web completa muy sencilla:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Mi página de prueba</title>
  </head>
  <body>
    <p>Esta es mi página</p>
  </body>
</html>
```

Las partes de este ejemplo son las siguientes:

1. `<!doctype html>`: el doctype. Cuando HTML era joven (1991-1992), los doctypes debían funcionar como enlaces a un conjunto de reglas que la página HTML tenía que seguir para considerarse HTML correcto. Los doctypes solían tener este aspecto:

   ```html
   <!doctype html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   Hoy en día, el doctype es un vestigio histórico que hay que incluir para que todo lo demás funcione correctamente. `<!doctype html>` es la cadena de caracteres más corta que cuenta como doctype válido, y debe incluirse al principio de todas las páginas web. ¡Es todo lo que necesitas saber!

2. `<html></html>`: el elemento {{htmlelement("html")}}. Este elemento envuelve todo el contenido de la página. A veces se le llama elemento raíz.
3. `<head></head>`: el elemento {{htmlelement("head")}}. Este elemento funciona como contenedor de la información sobre la página que _no_ forma parte del contenido que verán los usuarios. Puede incluir palabras clave y una descripción de la página para mostrar en los resultados de búsqueda, CSS para dar estilo al contenido, declaraciones del juego de caracteres y más. Aprenderás más sobre la cabecera de la página en el siguiente artículo.
4. `<meta charset="utf-8">`: un elemento {{htmlelement("meta")}}. Este elemento representa metadatos que describen la página. El atributo [`charset`](/es/docs/Web/HTML/Reference/Elements/meta#charset) especifica la codificación de caracteres que usará tu documento. UTF-8 incluye la mayoría de los caracteres de la inmensa mayoría de los idiomas escritos, lo que significa que la página podrá mostrar distintos idiomas correctamente. No hay motivo para no establecerlo, y puede ayudar a evitar algunos problemas más adelante.
5. `<title></title>`: el elemento {{htmlelement("title")}}. Establece el título de la página, que es el título que aparece en la pestaña del navegador en la que se carga la página. El título de la página también se usa para describirla cuando se guarda en marcadores.
6. `<body></body>`: el elemento {{htmlelement("body")}}. Contiene _todo_ el contenido que se muestra en la página, incluidos texto, imágenes, videos, juegos, pistas de audio reproducibles, etc.

### Añadir algunas funciones a un documento HTML

En este punto, queremos que practiques escribiendo contenido HTML algo más sustancial. Para ello, tienes un par de opciones: puedes crear el HTML en tu computadora local o usar el MDN Playground como en los ejemplos anteriores.

#### Preparación del ejemplo

- Para hacerlo en tu equipo local:
  1. Copia el ejemplo de página HTML de la sección anterior y pégalo en un archivo nuevo en tu editor de código. También puedes encontrar esta [plantilla HTML básica](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) en nuestro repositorio de GitHub.
  2. Haz en la página los cambios que se indican en las [instrucciones](#instrucciones_del_ejemplo).
  3. Guarda el archivo como `index.html` y cárgalo en una pestaña nueva del navegador para ver los resultados.
- Para hacerlo en el MDN Playground, haz clic en **"Play"** en el panel de resultados de abajo para editar el ejemplo y después sigue las [instrucciones](#instrucciones_del_ejemplo). Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ en el MDN Playground.

```html hidden live-sample___basic_html_3
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Mi página de prueba</title>
  </head>
  <body>
    <p>Esta es mi página</p>
  </body>
</html>
```

{{ EmbedLiveSample('basic_html_3', "100%", 60) }}

#### Instrucciones del ejemplo

Estas son las instrucciones que debes seguir:

1. Justo debajo de la etiqueta de apertura del elemento {{htmlelement("body")}}, añade un título principal para el documento. Debe ir entre las etiquetas de apertura y de cierre `<h1></h1>`.
2. Edita el contenido del párrafo para incluir texto sobre un tema que te parezca interesante.
3. Haz que las palabras importantes destaquen en negrita envolviéndolas en un elemento {{htmlelement("strong")}}.
4. Añade dos enlaces a tu párrafo. Se hace con el elemento {{htmlelement("a")}}.
5. Añade una imagen a tu documento debajo del párrafo, como se [explicó antes](#añadir_atributos_a_un_elemento). Si es demasiado grande para verla, añade un atributo `width` para reducirla.

Si te quedas realmente atascado, puedes ver una posible solución aquí:

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

El contenido del body de tu HTML terminado debería verse más o menos así:

```html
<h1>Algo de música</h1>
<p>
  Me encanta <strong>tocar la batería</strong>. Uno de mis bateristas favoritos
  es Neal Peart, que tocaba en la banda
  <a href="https://es.wikipedia.org/wiki/Rush_%28banda%29">Rush</a>. Mi álbum
  favorito de Rush ahora mismo es
  <a href="https://www.deezer.com/album/942295">Moving Pictures</a>.
</p>
<img
  src="https://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg"
  alt="Portada del álbum Moving Pictures de Rush"
  width="300" />
```

</details>

## Espacios en blanco en HTML

En los ejemplos anteriores hemos incluido muchos espacios en blanco en el código. En la mayoría de los casos son completamente opcionales y se incluyen sobre todo para que el código sea más legible. Por ejemplo, estos dos fragmentos de código son equivalentes:

```html-nolint live-sample___whitespace-example
<p id="noWhitespace">Los perros son tontos.</p>

<p id="whitespace">Los perros
    son
        tontos.</p>
```

Los dos se ven exactamente igual:

{{ EmbedLiveSample('whitespace-example', 700, 100) }}

En casi todos los elementos (hay excepciones, como {{htmlelement("pre")}}), da igual cuántos espacios en blanco uses dentro del contenido de un elemento HTML: el analizador de HTML reduce cada secuencia de espacios en blanco a un solo espacio al representar el código.

Tú decides qué estilo de formato de código prefieres. Lo habitual es dar a cada elemento anidado dos espacios más de sangría que al elemento que lo contiene; es el estilo que usamos en MDN.

Por ejemplo:

```html
<section>
  <div>
    <p>Un párrafo de contenido.</p>
  </div>
</section>
```

## Referencias de caracteres: incluir caracteres especiales en HTML

En HTML, los caracteres `<`, `>`, `"`, `'` y `&` son caracteres especiales. Forman parte de la propia sintaxis de HTML. Entonces, ¿cómo incluyes estos caracteres especiales en tu texto? Por ejemplo, ¿cómo puedes usar un signo «y» (ampersand) literal o un signo «menor que» en tu contenido sin que se interprete como código?

Para ello se usan las {{glossary("character reference", "referencias de caracteres")}}. Son códigos especiales que representan caracteres, para usarlos precisamente en estas circunstancias. Cada referencia de carácter empieza con un ampersand (&) y termina con un punto y coma (;).

| Carácter literal | Referencia de carácter equivalente |
| ---------------- | ---------------------------------- |
| <                | `&lt;`                             |
| >                | `&gt;`                             |
| "                | `&quot;`                           |
| '                | `&apos;`                           |
| &                | `&amp;`                            |

Las referencias de caracteres se recuerdan con bastante facilidad, porque el texto que usan es una abreviatura del nombre del carácter en inglés; por ejemplo, «lt» = «less than» (menor que), «quot» = «quotation» (comillas) y «amp» = «ampersand». Para obtener más información sobre las referencias de entidades, consulta el [anexo de referencias a entidades de caracteres XML y HTML](https://es.wikipedia.org/wiki/Anexo:Referencias_a_entidades_de_caracteres_XML_y_HTML) (Wikipedia).

En el ejemplo de abajo hay dos párrafos:

```html-nolint live-sample___entity-ref-example
<p>En HTML, defines un párrafo con el elemento <p>.</p>

<p>En HTML, defines un párrafo con el elemento &lt;p&gt;.</p>
```

Se ve así:

{{ EmbedLiveSample('entity-ref-example', 700, 150) }}

Puedes ver que el primer párrafo sale mal, porque el navegador ha interpretado la segunda aparición de `<p>` como el inicio de un párrafo nuevo. El segundo párrafo se ve bien, porque los corchetes angulares del contenido «&lt;p&gt;» están representados por referencias de caracteres.

> [!NOTE]
> No necesitas usar referencias de entidades para ningún otro símbolo, porque los navegadores modernos manejan sin problemas los símbolos reales siempre que la [codificación de caracteres de tu HTML esté establecida en UTF-8](/es/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#especificar_la_codificación_de_caracteres_de_tu_documento).

## Comentarios en HTML

HTML tiene un mecanismo para escribir comentarios en el código. Los navegadores ignoran los comentarios, por lo que son invisibles para el usuario. El propósito de los comentarios es permitirte incluir notas en el código para explicar cómo funciona. Es muy útil si vuelves a un código después de pasar suficiente tiempo sin verlo como para no recordarlo, o si empieza a trabajar en él alguien que nunca lo ha visto.

Para escribir un comentario HTML, envuélvelo en los marcadores especiales `<!--` y `-->`, como se muestra a continuación:

```html live-sample___comment-example
<p>No estoy dentro de un comentario</p>

<!-- <p>¡Yo sí!</p> -->
```

Este código se ve así:

{{ EmbedLiveSample('comment-example', 700, 100) }}

En el resultado en vivo solo se muestra el primer párrafo; la segunda línea no se representa porque es un comentario HTML.

## Resumen

¡Has llegado al final del artículo! Esperamos que hayas disfrutado de este recorrido por los fundamentos de HTML.

A estas alturas, deberías entender cómo es HTML y cómo funciona a nivel básico. También deberías poder escribir algunos elementos y atributos. Los siguientes artículos de este módulo profundizan en algunos de los temas presentados aquí, además de presentar temas nuevos.

> [!NOTE]
> A medida que aprendas más sobre HTML, plantéate aprender también los fundamentos de [CSS](/es/docs/Learn_web_development/Core/Styling_basics), el lenguaje que se usa para dar estilo a las páginas web (por ejemplo, para cambiar los colores, las fuentes y el espaciado). HTML y CSS se usan juntos en la mayoría de las páginas web, y aprenderlos a la vez puede ser eficaz.

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
