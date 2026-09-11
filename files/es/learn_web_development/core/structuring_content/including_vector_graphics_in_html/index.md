---
title: Incluir gráficos vectoriales en HTML
short-title: Gráficos vectoriales
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Los gráficos vectoriales son muy útiles en muchas circunstancias — tienen un tamaño de archivo pequeño y son muy escalables, por lo que no se pixelan al hacer zoom o al ampliarlos a un tamaño grande. En este artículo te mostraremos cómo incluir uno en tu página web.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Debes conocer los
        <a href="/es/docs/Learn_web_development/Core/Structuring_content">conceptos básicos de HTML</a>
        y cómo
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >insertar una imagen en tu documento</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender a incrustar una imagen SVG (vectorial) en una página web.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Este artículo no pretende enseñarte SVG, sino solo qué es y cómo añadirlo a las páginas web.

## ¿Qué son los gráficos vectoriales?

En la web, trabajarás con dos tipos de imágenes — **imágenes rasterizadas** e **imágenes vectoriales**:

- **Las imágenes rasterizadas** se definen mediante una cuadrícula de píxeles — un archivo de imagen rasterizada contiene información que muestra exactamente dónde debe colocarse cada píxel y de qué color debe ser. Los formatos rasterizados populares en la web incluyen Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`) y GIF (`.gif`).
- **Las imágenes vectoriales** se definen mediante algoritmos — un archivo de imagen vectorial contiene definiciones de formas y trazados que la computadora puede usar para calcular cómo debe verse la imagen al representarse en la pantalla. El formato {{glossary("SVG")}} nos permite crear potentes gráficos vectoriales para usar en la web.

Para darte una idea de la diferencia entre ambos, veamos un ejemplo. Puedes encontrar este ejemplo en vivo en nuestro repositorio de GitHub como [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — muestra dos imágenes aparentemente idénticas una junto a la otra, de una estrella roja con una sombra negra. La diferencia es que la de la izquierda es un PNG y la de la derecha es una imagen SVG.

La diferencia se hace evidente cuando amplías la página — la imagen PNG se pixela a medida que haces zoom porque contiene información sobre dónde debe estar cada píxel (y de qué color). Al ampliarla, cada píxel simplemente aumenta de tamaño para ocupar varios píxeles en la pantalla, por lo que la imagen empieza a verse borrosa. La imagen vectorial, en cambio, sigue viéndose nítida y limpia, porque sin importar el tamaño que tenga, se usan los algoritmos para calcular las formas de la imagen, y los valores se escalan a medida que esta crece.

![Dos imágenes de estrellas](raster-vector-default-size.png)

![Dos imágenes de estrellas ampliadas, una nítida y la otra borrosa](raster-vector-zoomed.png)

> [!NOTE]
> Las imágenes de arriba son en realidad todas PNG — la estrella de la izquierda en cada caso representa una imagen rasterizada, y la estrella de la derecha representa una imagen vectorial. De nuevo, visita la demo de [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) para ver un ejemplo real.

Además, los archivos de imágenes vectoriales son mucho más livianos que sus equivalentes rasterizados, porque solo necesitan contener un puñado de algoritmos, en lugar de información sobre cada píxel de la imagen individualmente.

## ¿Qué es SVG?

[SVG](/es/docs/Web/SVG) es un lenguaje basado en {{glossary("XML")}} para describir imágenes vectoriales. Básicamente es marcado, como HTML, salvo que tienes muchos elementos diferentes para definir las formas que quieres que aparezcan en tu imagen y los efectos que quieres aplicarles a esas formas. SVG sirve para marcar gráficos, no contenido. SVG define elementos para crear formas básicas, como {{svgelement("circle")}} y {{svgelement("rect")}}, así como elementos para crear formas más complejas, como {{svgelement("path")}} y {{svgelement("polygon")}}. Entre las funciones más avanzadas de SVG se incluyen {{svgelement("feColorMatrix")}} (transformar colores usando una matriz de transformación), {{svgelement("animate")}} (animar partes de tu gráfico vectorial) y {{svgelement("mask")}} (aplicar una máscara sobre tu imagen).

Como ejemplo básico, el siguiente código crea un círculo y un rectángulo:

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

Esto genera el siguiente resultado:

{{EmbedLiveSample("¿Qué_es_SVG", 300, 240, "", "")}}

A partir del ejemplo anterior, puede que tengas la impresión de que SVG es fácil de escribir a mano. Sí, puedes escribir SVG simple a mano en un editor de texto, pero para una imagen compleja esto rápidamente se vuelve muy difícil. Para crear imágenes SVG, la mayoría de las personas usa un editor de gráficos vectoriales como [Inkscape](https://inkscape.org/) o [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Estos programas te permiten crear una variedad de ilustraciones usando distintas herramientas gráficas, y crear aproximaciones de fotos (por ejemplo, la función Trazar mapa de bits de Inkscape).

SVG tiene algunas ventajas adicionales además de las descritas hasta ahora:

- El texto en las imágenes vectoriales sigue siendo accesible (lo que también beneficia tu {{glossary("SEO")}}).
- Los SVG se prestan bien para el estilo y los scripts, porque cada componente de la imagen es un elemento que se puede estilizar con CSS o manipular con JavaScript.

Entonces, ¿por qué alguien querría usar gráficos rasterizados en vez de SVG? Bueno, SVG tiene algunas desventajas:

- SVG puede complicarse muy rápido, lo que significa que el tamaño de los archivos puede crecer; los SVG complejos también pueden requerir un tiempo de procesamiento considerable en el navegador.
- SVG puede ser más difícil de crear que las imágenes rasterizadas, dependiendo del tipo de imagen que quieras crear.

Los gráficos rasterizados son, en general, mejores para imágenes complejas y precisas, como las fotos, por las razones descritas anteriormente.

Los gráficos SVG exportados desde editores como Inkscape tienen un gran margen de optimización de tamaño. Antes de publicarlos en la web, probablemente quieras pasarlos por un optimizador de SVG como [SVGO](https://www.npmjs.com/package/svgo).

## Añadir SVG a tus páginas

En esta sección repasaremos las distintas formas en que puedes añadir gráficos vectoriales SVG a tus páginas web.

### La forma rápida: el elemento `img`

Para incrustar un SVG mediante un elemento {{htmlelement("img")}}, solo necesitas hacer referencia a él en el atributo `src`, como es de esperar. Necesitarás un atributo `height` o `width` (o ambos si tu SVG no tiene una {{glossary("aspect ratio", "relación de aspecto")}} inherente). Si todavía no lo hiciste, lee [Imágenes en HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_images).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

#### Ventajas

- Sintaxis de imagen rápida y conocida, con un equivalente textual integrado disponible en el atributo `alt`.
- Puedes convertir la imagen en un hipervínculo fácilmente anidando el `<img>` dentro de un elemento {{htmlelement("a")}}.
- El navegador puede almacenar en caché el archivo SVG, lo que se traduce en tiempos de carga más rápidos para cualquier página que use la imagen cargada en el futuro.

#### Desventajas

- No puedes manipular la imagen con JavaScript.
- Si quieres controlar el contenido del SVG con CSS, debes incluir estilos CSS en línea dentro de tu código SVG. (Las hojas de estilo externas invocadas desde el archivo SVG no tienen efecto).
- No puedes volver a estilizar la imagen con pseudoclases CSS (como `:focus`).

### Solución de problemas y compatibilidad entre navegadores

Para los navegadores que no admiten SVG (IE 8 y versiones anteriores, Android 2.3 y versiones anteriores), puedes hacer referencia a un PNG o JPG desde tu atributo `src` y usar un atributo [`srcset`](/es/docs/Web/HTML/Reference/Elements/img#srcset) (que solo reconocen los navegadores más recientes) para hacer referencia al SVG. En este caso, solo los navegadores compatibles cargarán el SVG — los navegadores más antiguos cargarán el PNG en su lugar:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

También puedes usar SVG como imágenes de fondo de CSS, como se muestra a continuación. En el siguiente código, los navegadores más antiguos se quedarán con el PNG que sí entienden, mientras que los más nuevos cargarán el SVG:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Al igual que con el método `<img>` descrito antes, insertar SVG mediante imágenes de fondo de CSS significa que el SVG no se puede manipular con JavaScript, y está sujeto a las mismas limitaciones de CSS.

Si tus SVG no aparecen en absoluto, puede deberse a que tu servidor no está configurado correctamente. Si ese es el problema, este [artículo te orientará en la dirección correcta](/es/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started#a_word_on_web_servers_for_.svgz_files).

### Cómo incluir código SVG dentro de tu HTML

También puedes abrir el archivo SVG en un editor de texto, copiar el código SVG y pegarlo en tu documento HTML — a esto a veces se le llama poner tu **SVG en línea**, o **inlining SVG**. Asegúrate de que tu fragmento de código SVG comience con una etiqueta de apertura `<svg>` y termine con una etiqueta de cierre `</svg>`. Aquí tienes un ejemplo muy simple de lo que podrías pegar en tu documento:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Ventajas

- Poner tu SVG en línea ahorra una solicitud HTTP y, por lo tanto, puede reducir un poco tu tiempo de carga.
- Puedes asignar `class` e `id` a los elementos SVG y estilizarlos con CSS, ya sea dentro del SVG o donde pongas las reglas de estilo CSS para tu documento HTML. De hecho, puedes usar cualquier [atributo de presentación de SVG](/es/docs/Web/SVG/Reference/Attribute#presentation_attributes) como propiedad CSS.
- Poner el SVG en línea es el único enfoque que te permite usar interacciones CSS (como `:focus`) y animaciones CSS en tu imagen SVG (incluso en tu hoja de estilo habitual).
- Puedes convertir el marcado SVG en un hipervínculo envolviéndolo en un elemento {{htmlelement("a")}}.

#### Desventajas

- Este método solo es adecuado si usas el SVG en un único lugar. La duplicación hace que el mantenimiento consuma muchos recursos.
- El código SVG adicional aumenta el tamaño de tu archivo HTML.
- El navegador no puede almacenar en caché el SVG en línea como lo haría con los recursos de imagen normales, por lo que las páginas que incluyen la imagen no cargarán más rápido después de que se cargue la primera página que la contiene.
- Puedes incluir contenido de reserva en un elemento {{svgelement("foreignObject")}}, pero los navegadores que admiten SVG igual descargan las imágenes de reserva. Debes evaluar si vale la pena la sobrecarga extra solo para admitir navegadores obsoletos.

### Cómo incrustar un SVG con un `iframe`

Puedes abrir imágenes SVG en tu navegador igual que las páginas web. Así que incrustar un documento SVG con un `<iframe>` se hace tal como vimos en [De \<object> a \<iframe> — otras tecnologías de incrustación](/es/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies).

Aquí tienes un repaso rápido:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox></iframe>
```

Definitivamente este no es el mejor método a elegir:

#### Desventajas

- Los elementos `<iframe>` pueden incluir contenido de reserva entre sus etiquetas de apertura y cierre, pero este solo se muestra en los navegadores que no admiten `<iframe>`, no cuando la imagen falla al cargar.
- Además, a menos que el SVG y tu página web actual tengan el mismo {{glossary("origin", "origen")}}, no puedes usar JavaScript en tu página web principal para manipular el SVG.

## Jugar con SVG

En este ejercicio, nos gustaría que probaras a jugar con algo de SVG. Presiona el botón **Play** para abrir el siguiente ejemplo en el MDN Playground y editarlo ahí.

Ve a la [Referencia de elementos SVG](/es/docs/Web/SVG/Reference/Element) para ver qué otros elementos puedes usar que aportan mucha funcionalidad incorporada.
Hay otras formas que puedes probar, como elipses, o puedes experimentar con [patrones](/es/docs/Web/SVG/Reference/Element/pattern), o incluso con [efectos de filtro](/es/docs/Web/SVG/Reference/Element/filter).
Esta sección trata sobre poner en práctica tus habilidades de investigación, probar algo nuevo y divertirte un poco.

Si te quedas atascado y no logras que tu código funcione, siempre puedes reiniciarlo usando el botón _Reset_ en el Playground.

```html live-sample___playing-with-svg
<svg width="100%" height="100%">
  <rect width="100%" height="100%" fill="red" />
  <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
  <polygon points="120,0 240,225 0,225" fill="green" />
  <text
    x="50"
    y="100"
    font-family="Verdana"
    font-size="55"
    fill="white"
    stroke="black"
    stroke-width="2">
    Hello!
  </text>
</svg>
```

{{EmbedLiveSample("playing-with-SVG", 700, 300)}}

## Resumen

Este artículo te dio un recorrido rápido por qué son los gráficos vectoriales y SVG, por qué es útil conocerlos, y cómo incluir SVG dentro de tus páginas web. Nunca tuvo la intención de ser una guía completa para aprender SVG, sino solo una referencia para que sepas qué es SVG si te lo encuentras en tus andanzas por la web. Así que no te preocupes si sientes que todavía no eres un experto en SVG. Incluimos algunos enlaces a continuación que pueden ayudarte si quieres profundizar más en cómo funciona.

## Véase también

- [Tutorial de SVG](/es/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) en MDN
- [Tutorial de Sara Soueidan sobre imágenes SVG responsivas](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Propiedades de SVG y CSS](https://css-tricks.com/svg-properties-and-css/)
- [Cómo escalar SVG](https://css-tricks.com/scale-svg/) (¡no es tan simple como los gráficos rasterizados!)
