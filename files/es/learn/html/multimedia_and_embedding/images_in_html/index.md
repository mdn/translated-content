---
title: Imágenes en HTML
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
---

{{LearnSidebar}}

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

Al principio, la web solo era texto y resultaba más bien aburrido. Afortunadamente, no pasó mucho tiempo antes de que se añadiera la capacidad de insertar imágenes (y otros tipos de contenido más interesantes) en las páginas web. Hay otros tipos de elementos multimedia que tener en cuenta, pero es lógico comenzar con el humilde elemento {{htmlelement("img")}} utilizado para insertar una imagen simple en una página web. En este artículo, veremos en detalle cómo usar este elemento, incluidos sus conceptos básicos y cómo añadir pies de imagen usando {{htmlelement("figure")}} y explicaremos cómo se relaciona con las imágenes de fondo en <a class="glossaryLink" href="/es/docs/Glossary/CSS" title="CSS: CSS (Cascading Style Sheets) is a declarative language that controls how webpages look in the browser.">CSS</a>.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico instalado</a
        >, conocimientos básicos de cómo
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >trabajar con archivos</a
        >, estar familiarizado con los principios básicos de HTML (como se
        describe en
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML/iniciar"
          >Empezar con el HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender cómo insertar imágenes simples en HTML y añadirles pies de
        imagen, y cómo se relacionan las imágenes HTML con las imágenes de fondo
        de CSS.
      </td>
    </tr>
  </tbody>
</table>

## ¿Cómo ponemos una imagen en una página web?

Para poner una imagen simple en una página web, utilizamos el elemento {{htmlelement("img")}}. Se trata de un elemento vacío (lo que significa que no contiene texto o etiqueta de cierre) que requiere de por lo menos de un atributo para ser utilizado: `src` (a veces denominado por su nombre completo, _source_). El atributo `src` contiene una ruta que apunta a la imagen que quieres poner en la página, que puede ser una URL relativa o absoluta, de la misma forma que el elemento {{htmlelement("a")}} contiene los valores del atributo `href`.

> **Nota:** Deberías leer [Inicio rápido a las URL y rutas](/es/docs/Learn/HTML/Introduccion_a_HTML/Creating_hyperlinks#Un_primer_acercamiento_a_URL_y_referencias) para refrescar tu memoria sobre URL relativas y absolutas antes de continuar.

Por ejemplo, si tu imagen se llama `dinosaur.jpg`, y está en el mismo directorio que tu página HTML, deberás incrustar la imagen de la siguiente manera:

```html
<img src="dinosaur.jpg" />
```

Si la imagen estaba en el subdirectorio `images`, que estaba en el mismo directorio que la página HTML (lo que Google recomienda con fines de indización y posicionamiento en buscadores {{glossary("SEO")}}), entonces deberías incrustar la imagen así:

```html
<img src="images/dinosaur.jpg" />
```

y así sucesivamente.

> **Nota:** Los motores de búsqueda también leen los nombres de archivo de imagen y esto cuenta para el SEO. Por lo tanto, dale a tu imagen un nombre descriptivo; `dinosaur.jpg` es mejor que `img835.png`.

Puedes incrustar la imagen usando la URL absoluta, por ejemplo:

```html
<img src="https://www.example.com/images/dinosaur.jpg" />
```

Pero esto no tiene sentido, solo hace que el navegador trabaje más buscando la dirección IP desde el servidor DNS cada vez, etc. Casi siempre mantendrás las imágenes para tu sitio web en el mismo servidor de tu HTML.

> **Advertencia:** La mayoría de imágenes tienen derechos de autor. **No** muestres una imagen en tu página web a menos que:
>
> 1. seas dueño de la imagen,
> 2. tengas permiso escrito explícito del dueño de la imagen o
> 3. tengas suficientes pruebas de que la imagen es de dominio público
>
> El incumplimiento de las normas de los derechos de autor es un acto ilegal y poco ético. Por lo tanto, no apuntes **nunca** tu atributo `src` a una imagen que esté alojada en un sitio web si no tienes el permiso para hacerlo. Esto se llama _hotlinking_. Asimismo es ilegal robar el ancho de banda de alguien. Además, ralentiza tu página y te deja sin control sobre la imagen si la eliminan o reemplazan por otra que incluso podría resultar embarazosa.

Nuestro código anterior debería darnos el resultado siguiente:

![A basic image of a dinosaur, embedded in a browser, with Images in HTML written above it](basic-image.png)

> **Nota:** Los elementos como {{htmlelement("img")}} y {{htmlelement("video")}} a veces se denominan **elementos reemplazados**. Esto se debe a que el tamaño y el contenido del elemento se especifican en un recurso externo (como un archivo de imagen o video), no en el contenido del elemento en sí.

> **Nota:** Puedes encontrar el ejemplo terminado de esta sección [en Github](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (consulta también el [código fuente](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/images-in-html/index.html)).

### Texto alternativo

El próximo atributo que veremos es `alt`. Su valor debe ser una descripción textual de la imagen para usarla en situaciones en que la imagen no puede ser vista/mostrada o tarde demasiado en mostrarse por una conexión lenta a internet. Por ejemplo, nuestro código anterior podría modificarse así:

```html
<img
  src="images/dinosaur.jpg"
  alt="La cabeza y el torso de un esqueleto de dinosaurio;
           tiene una cabeza grande con dientes largos y afilados" />
```

La forma más fácil de probar el texto `alt` es escribir mal el nombre de archivo. Si, por ejemplo, escribimos el nombre archivo de nuestra imagen como `dinosooooor.jpg`, el navegador no podrá mostrar la imagen, en su lugar mostrará el texto alternativo:

![The Images in HTML title, but this time the dinosaur image is not displayed, and alt text is in its place.](alt-text.png)

¿Por qué vas a ver o necesitar el texto alternativo? Puede ser por varias razones:

- El usuario tiene alguna discapacidad visual y utiliza un [lector de pantalla](https://es.wikipedia.org/wiki/Lector_de_pantalla) para leer el contenido de la web. De hecho, disponer de texto alternativo para describir las imágenes es útil para la mayoría de los usuarios.
- Como ya hemos dicho anteriormente, es posible que se haya escrito mal el nombre del archivo o su ruta.
- El navegador no admite el tipo de imagen. Algunas personas aún usan navegadores de solo texto, como [Lynx](<https://es.wikipedia.org/wiki/Lynx_(navegador)>), que muestran el texto del atributo _alt_.
- Quieres que los motores de búsqueda puedan utilizar este texto. Por ejemplo, los motores de búsqueda pueden hacer coincidir el texto alternativo con la consulta de búsqueda.
- Los usuarios han desactivado las imágenes para reducir el volumen de transferencia de datos y de distracciones. Esto sucede especialmente en teléfonos móviles y en países en que el ancho de banda es limitado y caro.

¿Qué hay que escribir exactamente en el atributo `alt`? Esto depende en primer lugar de _por qué_ la imagen está en ese lugar. En otras palabras, qué se pierde si la imagen no aparece:

- **Decoración.** Para las imágenes decorativas deberían utilizarse [imágenes de fondo CSS](#imágenes_de_fondo_css). Pero si es inevitable usar HTML, la mejor forma de hacerlo es con `alt=""`. Si la imagen no es parte del contenido, el lector de pantalla no debería malgastar el tiempo en leerla.
- **Contenido.** Si tu imagen proporciona información significativa, proporciona la misma información en un texto alternativo (`alt`) breve. O mejor aún, en el texto principal que todos pueden ver. No escribas texto alternativo redundante. ¿Acaso no resultaría molesto para un usuario con visión ordinaria si todos los párrafos se escribieran dos veces en el contenido principal? Si la imagen se describe en el cuerpo principal del texto de modo adecuado, puedes simplemente usar `alt=""`.
- **Enlace.** Al poner una imagen dentro de una etiqueta `<a>` para convertirla en un enlace, aun debes proporcionar [texto de enlace accesible](/es/docs/Learn/HTML/Introduccion_a_HTML/Creating_hyperlinks#Claridad_en_las_palabras). En tal caso podrías escribirlo dentro del mismo elemento `<a>`, o dentro del atributo `alt` de la imagen. Lo que mejor funcione en tu caso.
- **Texto.** No deberías poner tu texto en imágenes. Si tu título de encabezado principal necesita, por ejemplo, un sombreado paralelo, [usa CSS](/es/docs/Web/CSS/text-shadow) para ello en vez de poner el texto en una imagen. Pero, _si realmente no puedes evitarlo_, deberías proporcionar el texto en el atributo `alt`.

En el fondo, la clave es ofrecer una experiencia usable, incluso cuando las imágenes no puedan verse. Esto asegura que ningún usuario pierda ninguna parte del contenido. Desactiva las imágenes en tu navegador y observa cómo se ven las cosas. Te darás cuenta de lo útil que resulta el texto alternativo cuando no es posible ver la imagen.

> **Nota:** Consulta nuestra guía de [texto alternativo](/es/docs/Learn/Accessibility/HTML#Alternativas_de_texto) para obtener más información.

### Anchura y altura

Puedes usar los atributos ancho (`width`) y alto (`height`) para especificar la anchura y altura de tu imagen. Puedes encontrar el ancho y el alto de tu imagen de diversas maneras. Por ejemplo, en Mac puedes usar <kbd>Cmd</kbd> + <kbd>I</kbd> para mostrar información del archivo de imagen. Volviendo a nuestro ejemplo, podríamos hacer esto:

```html
<img
  src="images/dinosaur.jpg"
  alt="La cabeza y el torso de un esqueleto de dinosaurio;
           tiene una cabeza grande con dientes largos y afilados"
  width="400"
  height="341" />
```

Esto no proporciona una gran diferencia en la pantalla en circunstancias normales. Pero si la imagen no se muestra, por ejemplo, porque el usuario acaba de acceder a la página y esta aún no se ha cargado, observarás que el navegador reserva un espacio para la imagen:

![The Images in HTML title, with dinosaur alt text, displayed inside a large box that results from width and height settings](alt-text-with-width-height.png)

Hacerlo así es bueno porque la página se carga con mayor rapidez y fluidez.

Sin embargo, no deberías alterar el tamaño de tus imágenes utilizando atributos HTML. Las imágenes podrían verse granulosas y borrosas si estableces un tamaño demasiado grande; o bien demasiado pequeñas, y se desperdiciaría ancho de banda descargando una imagen que no se ajusta a las necesidades del usuario. La imagen también podría quedar distorsionada, si no mantienes la [proporción de aspecto](https://es.wikipedia.org/wiki/Relaci%C3%B3n_de_aspecto) correcta. Deberías utilizar un editor de imágenes, para dar a tu imagen el tamaño adecuado, antes de colocarla en tu página web.

> **Nota:** Si tienes que alterar el tamaño de una imagen es mejor usar [CSS](/es/docs/Learn/CSS).

### Título de imágenes

Al igual que con los enlaces, también puedes añadir atributos `title` a las imágenes para proporcionar más información de ayuda si es necesario. En nuestro ejemplo, podríamos hacer esto:

```html
<img
  src="images/dinosaur.jpg"
  alt="La cabeza y el torso de un esqueleto de dinosaurio;
           tiene una cabeza grande con dientes largos y afilados"
  width="400"
  height="341"
  title="Exposición de un T-Rex en el museo de la Universidad de Manchester." />
```

Esto nos da una etiqueta de ayuda (`tooltip`) como las de los enlaces:

![The dinosaur image, with a tooltip title on top of it that reads A T-Rex on display at the Manchester University Museum ](image-with-title.png)

Sin embargo, no se recomienda incluir esta propiedad en las imágenes. `title` presenta algunos problemas de accesibilidad, principalmente porque los lectores de pantalla (_screen readers_) tienen un comportamiento imprevisible y la mayoría de navegadores no la mostrarán a menos que pases el ratón por encima de la imagen (y por tanto es inútil para quien usa teclado). Si estás interesado en esta cuestión, puedes leer el artículo [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) de Scott O'Hara.

Lo mejor es incluir dicha información en el texto principal del artículo, en lugar de adjuntarla en la imagen.

### Aprendizaje activo: incrustar imágenes

¡Ahora te toca jugar a ti! Esta sección de aprendizaje activo te mantendrá activo con un ejercicio sencillo de incrustado. Te proporcionamos una etiqueta básica {{htmlelement ("img")}} y nos gustaría que incrustes la imagen ubicada en la URL siguiente:

```
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Ya hemos dicho que nunca se apuntará a imágenes de otros servidores (hotlink), pero esto es solo con fines de aprendizaje, por lo que te lo vamos a dejar hacer por esta vez.

También nos gustaría que hagas lo siguiente:

- Añadir un texto alternativo y comprobar que funciona si escribes mal la URL de la imagen.
- Establecer las propiedades `width` y `height` correctas de la imagen (pista: tiene 200px de ancho y 171px de alto), luego experimentar con otros valores para ver cuál es el efecto.
- Establecer un elemento `title` en la imagen.

Si te equivocas, puedes volver a empezar pulsando el botón _Reiniciar_. Si te encallas, pulsa el botón _Mostrar la solución_ para ver la solución:

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
<img>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var htmlSolution =
  '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171"\n title="A T-Rex on display in the Manchester University Museum">';
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## Comentar imágenes con `figure` y `figcaption`

Hay varias formas en que puedes añadir un pie a tu imagen. Por ejemplo, nada te impediría hacer esto:

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="La cabeza y el torso de un esqueleto de dinosaurio;
           tiene una cabeza grande con dientes largos y afilados"
    width="400"
    height="341" />

  <p>Exposición de un T-Rex en el museo de la Universidad de Manchester.</p>
</div>
```

Esto está bien. Incluye el contenido que se necesita y es muy personalizable con CSS. Pero hay un problema: no hay nada que vincule semánticamente la imagen con su título, lo que puede causar problemas a los lectores de pantalla. Por ejemplo, cuando hay 50 imágenes y leyendas, ¿qué leyenda se corresponde con cada imagen?

Una solución mejor es utilizar los elementos HTML5 {{htmlelement("figure")}} y {{htmlelement("figcaption")}}. Estos se crearon exactamente para este propósito: proporcionar un contenedor semántico para las figuras y vincular claramente la figura con el pie. Nuestro ejemplo anterior, podría reescribirse así:

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="La cabeza y el torso de un esqueleto de dinosaurio;
            tiene una cabeza grande con dientes largos y afilados"
    width="400"
    height="341" />

  <figcaption>
    Exposición de un T-Rex en el museo de la Universidad de Manchester.
  </figcaption>
</figure>
```

El elemento {{htmlelement("figcaption")}} dice al navegador, o a alguna tecnología de apoyo, que el texto que contiene describe la imagen que está contenida en el elemento {{htmlelement("figure")}}.

> **Nota:** Desde el punto de vista de la accesibilidad, los pies de imagen y el texto alternativo [`alt`](/es/docs/Web/HTML/Element/img#alt) cumplen funciones diferentes. Los pies de imagen benefician incluso a quien puede ver la imagen, mientras que el texto [`alt`](/es/docs/Web/HTML/Element/img#alt) proporciona la misma función en una imagen ausente. Por tanto, los subtítulos y el texto `alt` no deberían decir lo mismo, porque ambos aparecen si la imagen no se muestra. Desactiva las imágenes en tu navegador y observa el resultado.

El elemento _figure_ no ha de contener una imagen necesariamente. Es una unidad de contenido independiente que:

- Expresa un significado en una forma compacta y fácil de entender.
- Se puede poner en varios sitios en el flujo lineal de la página.
- Proporciona información esencial que da apoyo al texto principal.

Un elemento _figure_ podría contener varias imágenes, un trozo de código, audio, video, ecuaciones, una tabla, o cualquier otra cosa.

### Aprendizaje activo: crear un elemento figure

En esta sección de aprendizaje activo, te pedimos que tomes el código finalizado de la sección de aprendizaje activo anterior y lo conviertas en un elemento _figure_:

- Delimítalo todo en un elemento {{htmlelement("figure")}}.
- Copia el texto del atributo `title`, elimina el atributo `title`, y pon el texto dentro de un elemento {{htmlelement("figcaption")}} bajo la imagen.

Si te equivocas, siempre puedes volver a empezar pulsando el botón _Reiniciar_. Si te quedas atascado, presiona el botón _Ver solución_ para ver la respuesta:

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea
  id="code"
  class="input"
  style="min-height: 100px; width: 95%"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var htmlSolution =
  '<figure>\n <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171">\n <figcaption>A T-Rex on display in the Manchester University Museum</figcaption>\n</figure>';
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_2', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## Imágenes de fondo CSS

También puedes usar CSS para insertar imágenes en páginas web (y JavaScript, pero eso ya es otra historia). La propiedad CSS {{cssxref("background-image")}} y las demás propiedades `background-*` se usan para controlar la colocación de la imagen de fondo. Por ejemplo, para poner una imagen de fondo en cada párrafo de una página, podríamos hacer esto:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

La imagen resultante, podría decirse que es más fácil de posicionar y controlar que una imagen HTML. Entonces ¿para qué molestarse usando imágenes HTML? Como se sugiere arriba, las imágenes de fondo CSS son solo para decoración. Si tan solo quieres añadir algo bonito para mejorar visualmente tu página, están bien. Sin embargo, no tienen ningún significado semántico. No pueden tener su equivalente en texto, son invisibles a los lectores de pantalla, etc. ¡Es entonces cuando las imágenes HTML triunfan!

En resumen: si una imagen tiene significado en términos del contenido de tu página, entonces deberías usar una imagen HTML. Si la imagen es puramente decorativa, deberías usar imágenes de fondo CSS.

> **Nota:** Aprenderás mucho más sobre las [imágenes de fondo CSS](/es/docs/Learn/CSS/Building_blocks/Fondos_y_bordes) en nuestro apartado [CSS](/es/docs/Learn/CSS).

Esto es todo por ahora. Hemos expuesto en detalle los conceptos relativos a imágenes y subtítulos de imagen. En el próximo artículo, subiremos un nivel para insertar vídeo y audio en páginas web con HTML.

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
