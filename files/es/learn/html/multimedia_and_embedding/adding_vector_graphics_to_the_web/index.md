---
title: Agregar Gráficos Vectoriales a la Web
slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

Los gráficos vectoriales son muy útiles en muchas circunstancias — tienen tamaño de archivo pequeños y son altamente escalables, por lo que no se pixelan cuando se amplían a un tamaño más grande. En este artículo le mostraremos cómo incluir uno en su página web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Debe conocer los
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >conceptos básicos de HTML</a
        >
        y cómo
        <a href="/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >insertar imágenes en su documento</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender a incrustar una imagen SVG (vector) en una página web.</td>
    </tr>
  </tbody>
</table>

> **Nota:** Este artículo no tiene la intención de enseñarte SVG; solo mostrarte qué es, y cómo agregarlo a las páginas web.

## ¿Qué son los gráficos vectoriales?

En la web, trabajarás con dos tipos de imágenes — **imágenes rasterizadas**, e **imágenes vectoriales**:

- **Las imágenes ráster** se definen mediante una cuadrícula de píxeles — un archivo de imagen rasterizado contiene información que muestra exactamente dónde se colocará cada píxel y exactamente de qué color debe ser. Los formatos de ráster web populares incluyen mapa de bits (`.bmp`), PNG (`.png`), JPEG (`.jpg`), and GIF (`.gif`.)
- **Las imágenes vectoriales** se definen mediante algoritmos — un archivo de imagen vectorial contiene definiciones de forma y ruta que la computadora puede usar para determinar cómo debería verse la imagen cuando se representa en la pantalla. El formato {{glossary("SVG")}} nos permite crear poderosos gráficos vectoriales para usar en la Web.

Para darte una idea de la diferencia entre los dos, veamos un ejemplo. Puede encontrar este ejemplo en vivo en nuestro repositorio de Github como [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — muestra dos imágenes aparentemente idénticas una al lado de la otra, de una estrella roja con una sombra negra. La diferencia es que el de la izquierda es un PNG y el de la derecha es una imagen SVG.

La diferencia se hace evidente cuando amplía la página — la imagen PNG se pixela a medida que se acerca porque contiene información sobre dónde debería estar cada píxel (y de qué color). Cuando se amplía, cada píxel simplemente aumenta de tamaño para llenar varios píxeles en la pantalla, por lo que la imagen comienza a verse borrosa. Sin embargo, la imagen vectorial sigue luciendo agradable y nítida, porque no importa el tamaño que tenga, los algoritmos se utilizan para resolver las formas en la imagen, y los valores simplemente se escalan a medida que aumenta.

![Two star images](raster-vector-default-size.png)

![Two star images zoomed in, one crisp and the other blurry](raster-vector-zoomed.png)

> **Nota:** Las imágenes de arriba son en realidad todos PNG, con la estrella de la izquierda en cada caso representando una imagen rasterizada y la estrella de la derecha representando una imagen vectorial. Nuevamente, vaya a la demostración de vector-versus-raster.html para ver un ejemplo real.

Además, los archivos de imágenes vectoriales son mucho más ligeros que sus equivalentes ráster, porque solo necesitan contener un puñado de algoritmos, en lugar de información sobre cada píxel de la imagen individualmente.

## ¿Qué es SVG?

[SVG](/es/docs/Web/SVG) es un lenguaje basado en {{glossary("XML")}}-para describir imágenes vectoriales. Básicamente es un marcado, como HTML, excepto que tiene muchos elementos diferentes para definir las formas que desea que aparezcan en su imagen y los efectos que desea aplicar a esas formas. SVG es para marcar gráficos, no contenido. En el extremo más simple del espectro, tienes elementos para crear formas simples, como {{svgelement("circle")}} and {{svgelement("rect")}}. Las funciones SVG más avanzadas incluyen {{svgelement("feColorMatrix")}} (transformar colores usando una matriz de transformación), {{svgelement("animate")}} (animar partes de su gráfico vectorial), and {{svgelement("mask")}} (aplica una máscara sobre la parte superior de tu imagen).

Como ejemplo simple, el siguiente código crea un círculo y un rectángulo:

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

Esto crea la siguiente salida:

{{ EmbedLiveSample('What_is_SVG', 300, 200, "", "", "hide-codepen-jsfiddle") }}

En el ejemplo anterior, puede tener la impresión de que SVG es fácil de codificar manualmente. Sí, puede codificar manualmente SVG simple en un editor de texto, pero para una imagen compleja, esto rápidamente comienza a ser muy difícil. Para crear imágenes SVG, la mayoría de la gente usa un editor de gráficos vectoriales como Inkscape o Illustrator. Estos paquetes le permiten crear una variedad de ilustraciones utilizando varias herramientas gráficas y crear aproximaciones de fotos (por ejemplo, la función Trazar mapa de bits de Inkscape).

SVG tiene algunas ventajas adicionales además de las descritas hasta ahora:

- El texto en imágenes vectoriales sigue siendo accesible (lo que también beneficia a su {{glossary("SEO")}}).
- Los SVG se prestan bien al estilo / scripting, porque cada componente de la imagen es un elemento que se puede diseñar a través de CSS o scripting a través de JavaScript.

Entonces, ¿por qué alguien querría usar gráficos rasterizados sobre SVG? Bueno, SVG tiene algunas desventajas:

- SVG puede complicarse rápidamente, lo que significa que el tamaño de los archivos puede crecer. Además, los SVG complejos también pueden requerir un tiempo de procesamiento significativo en el navegador.
- SVG puede ser más difícil de crear que las imágenes rasterizadas, dependiendo del tipo de imagen que intente crear.
- SVG no es compatible con navegadores más antiguos, por lo que puede no ser adecuado si necesita admitir versiones anteriores de Internet Explorer con su sitio web (SVG comenzó a ser compatible a partir de IE9).

Los gráficos rasterizados son posiblemente mejores para imágenes de precisión complejas, como fotos, por las razones descritas anteriormente.

> **Nota:** En Inkscape, guarde sus archivos como SVG simple para ahorrar espacio. Además, consulte este artículo que describe [cómo preparar SVGs para la web](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## Agregar SVG a sus páginas

En esta sección, veremos las diferentes formas en las que puede agregar gráficos vectoriales SVG a sus páginas web.

### La forma rápida: {{htmlelement("img")}}

Para incrustar un SVG a través de un elemento {{htmlelement ("img")}}, solo necesita hacer referencia a él en el atributo src como es de esperar. Necesitará un atributo de altura o ancho (o ambos si su SVG no tiene una relación de aspecto inherente). Si aún no lo ha hecho, lea [Imágenes en HTML](/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Pros

- Sintaxis de imagen rápida y familiar con equivalente de texto integrado disponible en el atributo `alt`.
- Puede convertir la imagen en un hipervínculo fácilmente anidando el `<img>` dentro de un elemento {{htmlelement ("a")}}.
- El navegador puede almacenar en caché el archivo SVG, lo que da como resultado tiempos de carga más rápidos para cualquier página que utilice la imagen cargada en el futuro.

#### Cons

- No puede manipular la imagen con JavaScript.
- Si desea controlar el contenido SVG con CSS, debe incluir estilos CSS en línea en su código SVG. (Las hojas de estilo externas invocadas desde el archivo SVG no tienen efecto).
- No puede cambiar el estilo de la imagen con pseudoclases CSS (como `:focus`).

### Solución de problemas y compatibilidad con varios navegadores

Para los navegadores que no admiten SVG (IE 8 y versiones anteriores, Android 2.3 y versiones anteriores), puede hacer referencia a un PNG o JPG de su atributo src y usar un atributo [`srcset`](/es/docs/Web/HTML/Element/img#srcset) ( que solo los navegadores recientes reconocen) para hacer referencia al SVG. Siendo este el caso, solo los navegadores compatibles cargarán el SVG; los navegadores más antiguos cargarán el PNG en su lugar:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

También puede usar SVG como imágenes de fondo CSS, como se muestra a continuación. En el siguiente código, los navegadores más antiguos se quedarán con el PNG que entienden, mientras que los navegadores más nuevos cargarán el SVG:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Al igual que el método `<img>` descrito anteriormente, la inserción de SVG con imágenes de fondo CSS significa que el SVG no se puede manipular con JavaScript y también está sujeto a las mismas limitaciones de CSS.

Si sus SVG no se muestran en absoluto, podría deberse a que su servidor no está configurado correctamente. Si ese es el problema, este [artículo le indicará la dirección correcta](/es/docs/Web/SVG/Tutorial/Getting_Started#A_Word_on_Webservers).

### Cómo incluir código SVG dentro de su HTML

También puede abrir el archivo SVG en un editor de texto, copiar el código SVG y pegarlo en su documento HTML; esto a veces se denomina poner su SVG en línea o SVG en línea. Asegúrese de que su fragmento de código SVG comience y termine con las etiquetas \<svg> \</svg> (no incluya nada fuera de ellas). Aquí tiene un ejemplo muy simple de lo que puede pegar en su documento:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Pros

- Poner su SVG en línea ahorra una solicitud HTTP y, por lo tanto, puede reducir un poco su tiempo de carga.
- Puede asignar clases e identificadores a elementos SVG y aplicarles estilo con CSS, ya sea dentro del SVG o donde quiera que ponga las reglas de estilo CSS para su documento HTML. De hecho, puede utilizar cualquier atributo de presentación SVG como propiedad CSS.
- SVG en línea es el único enfoque que le permite usar interacciones CSS (como `:focus`) y animaciones CSS en su imagen SVG (incluso en su hoja de estilo normal).
- Puede convertir el marcado SVG en un hipervínculo envolviéndolo en un elemento {{htmlelement ("a")}}.

#### Cons

- Este método solo es adecuado si está utilizando SVG en un solo lugar. La duplicación hace que el mantenimiento requiera muchos recursos.
- El código SVG adicional aumenta el tamaño de su archivo HTML.
- El navegador no puede almacenar en caché SVG en línea, ya que almacenaría en caché activos de imagen normales, por lo que las páginas que incluyen la imagen no se cargarán más rápido después de que se cargue la primera página que contiene la imagen.
- Puede incluir respaldo en un elemento {{svgelement ("foreignObject")}}, pero los navegadores que admiten SVG aún descargan las imágenes de respaldo. Debe sopesar si la sobrecarga adicional realmente vale la pena, solo para admitir navegadores obsoletos.

### Cómo incrustar un SVG con un {{htmlelement("iframe")}}

Puede abrir imágenes SVG en su navegador al igual que las páginas web. Entonces, incrustar un documento SVG con un `<iframe>` se realiza tal como lo estudiamos en [De \<object> a \<iframe> — otras tecnologías de incrustación](/es/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies).

Aquí hay una revisión rápida:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Este definitivamente no es el mejor método para elegir:

#### Cons

- Los `iframes` tienen un mecanismo de respaldo, como puede ver, pero los navegadores solo muestran el respaldo si carecen por completo de soporte para los iframes.
- Además, a menos que el SVG y su página web actual tengan el mismo {{glossary('origin')}}, no puede usar JavaScript en su página web principal para manipular el SVG.

## Aprendizaje activo: jugar con SVG

En esta sección de aprendizaje activo, nos gustaría que simplemente probaras a jugar con algunos SVG por diversión. En la entrada a continuación, verá que ya le hemos proporcionado algunas muestras para que pueda comenzar. También puedes ir a la [Referencia de Elementos SVG](/es/docs/Web/SVG/Element), descubrir más detalles sobre otros juguetes que puedes usar en SVG y probarlos también. Esta sección trata sobre cómo practicar sus habilidades de investigación y divertirse.

Si se queda atascado y no puede hacer que su código funcione, siempre puede restablecerlo con el _botón Restablecer_.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="width: 95%;min-height: 200px;">
<svg width="100%" height="100%">
<rect width="100%" height="100%" fill="red" />
<circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
<polygon points="120,0 240,225 0,225" fill="green"/>
<text x="50" y="100" font-family="Verdana" font-size="55"
fill="white" stroke="black" stroke-width="2">
Hello!
</text>
</svg>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" disabled />
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
let code = textarea.value;
let userEntry = textarea.value;

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

const htmlSolution = "";
let solutionEntry = htmlSolution;

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
  const scrollPos = textarea.scrollTop;
  const caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
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

{{ EmbedLiveSample('Playable_code', 700, 500, "", "", "hide-codepen-jsfiddle") }}

## Resumen

Este artículo le ha proporcionado un recorrido rápido por qué son los gráficos vectoriales y SVG, por qué es útil conocerlos y cómo incluir SVG en sus páginas web. Nunca tuvo la intención de ser una guía completa para aprender SVG, solo un indicador para que sepa qué es SVG si lo encuentra en sus viajes por la Web. Así que no se preocupe si todavía no siente que es un experto en SVG. Hemos incluido algunos enlaces a continuación que pueden ayudarlo si desea ir y obtener más información sobre cómo funciona.

En el próximo artículo de este módulo, exploraremos las imágenes adaptables en detalle, observando las herramientas que tiene HTML para permitirle hacer que sus imágenes funcionen mejor en diferentes dispositivos.

## Vea también

- [Tutorial de SVG](/es/docs/Web/SVG/Tutorial/Getting_Started) en MDN
- [Consejos rápidos para SVGs adaptables](http://thenewcode.com/744/Making-SVG-Responsive)
- [Tutorial de Sara Soueidan sobre imágenes SVG adaptables](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Beneficios de accesibilidad de SVG](https://www.w3.org/TR/SVG-access/)
- [Cómo escalar SVGs](https://css-tricks.com/scale-svg/) (¡no es tan simple como los gráficos rasterizados!)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
