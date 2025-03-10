---
title: Cómo los navegadores cargan los sitios web
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: bca4bdeae2c1e3e673c3c138b7003220b164596e
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

En el artículo anterior, vimos una [visión general de las tecnologías](/es/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) con las que se construyen los sitios web. En este artículo, recorreremos el proceso mediante el cual se renderizan esas tecnologías: cuando un navegador ha recibido los archivos de código y otros recursos que componen una página web (como se explicó en [Cómo funciona la web](/es/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)), ¿cómo se juntan para crear la experiencia final con la que interactúa el usuario?

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo de tu computadora, los navegadores web y las tecnologías web.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>Los diferentes tipos de recursos que se devuelven en una respuesta HTTP.</li>
          <li>Cómo los diferentes archivos son ensamblados por el navegador para renderizar una página web que luego se muestra al usuario.</li>
          <li>Por qué el navegador a veces se ve como un entorno de programación hostil, pero también como un entorno de programación increíble.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué archivos se devuelven en las respuestas HTTP?

Para resumir la [visión general de las tecnologías web](/es/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) que vimos en el artículo anterior, las respuestas HTTP (a las solicitudes de una página web) generalmente contendrán algunos de los siguientes tipos de archivo:

- Archivos HTML, que especifican el contenido de la página web y su estructura.
- Archivos CSS, que especifican la información de estilo y diseño.
- Archivos JavaScript, que especifican el comportamiento de las partes interactivas de la página web.
- Recursos multimedia como imágenes, vídeos, archivos de audio, [PDFs](/es/docs/Glossary/PDF) y [SVGs](/es/docs/Glossary/SVG), que están incrustados en las páginas web o son mostrados de otra manera por el navegador.
- Otros tipos de archivos que el navegador no puede manejar de forma nativa y, por lo tanto, los entrega a una aplicación relevante en el dispositivo para renderizarlos, por ejemplo, documentos de Word o Pages, presentaciones de PowerPoint y archivos de Open Office.

## Renderización de la página web

Cuando el usuario navega a una nueva página web (haciendo clic en un enlace o introduciendo una dirección web en la barra de direcciones del navegador), se envían varias solicitudes HTTP y se devuelven varios archivos en las respuestas HTTP. Los archivos recibidos en estas respuestas son procesados por el navegador y unidos en una página web con la que el usuario puede interactuar. Este proceso de ensamblar las piezas en una página web se llama **renderización**.

Las siguientes secciones proporcionan una explicación de alto nivel de cómo un navegador renderiza una página web. Ten en cuenta que esta es una descripción muy simplificada y que los diferentes navegadores manejarán el proceso de diferentes maneras. Sin embargo, esto te dará una idea de los conceptos básicos detrás de cómo funcionan las cosas.

## Manejo de HTML

Para empezar, el archivo HTML que contiene el contenido de la página web y define su estructura es recibido por el navegador y analizado. El navegador lo convierte en una estructura en forma de árbol llamada **árbol DOM** (**Modelo de Objetos del Documento**). El DOM representa la estructura del documento HTML en la memoria de la computadora. Toma este fragmento de HTML básico como ejemplo:

```html
<p>
  Usemos:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Cada elemento, atributo y parte de texto en el HTML se convierte en un **nodo DOM** en la estructura de árbol. Los nodos se definen por su relación con otros nodos DOM. Algunos elementos son padres de nodos hijos y los nodos hijos tienen hermanos. El navegador analizaría el HTML anterior y crearía el siguiente árbol DOM a partir de él:

```plain
P
├─ "Usemos:"
├─ SPAN
|  └─ "HTML"
├─ SPAN
|  └─ "CSS"
└─ SPAN
    └─ "JavaScript"
```

En el DOM, el nodo correspondiente a nuestro elemento `<p>` es un padre. Sus hijos son un nodo de texto y los tres nodos correspondientes a nuestros elementos `<span>`. Los nodos `SPAN` también son padres, con nodos de texto como sus hijos. Cuando el navegador renderiza el árbol DOM anterior, se verá así:

{{EmbedLiveSample('Handling the HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

Ciertos elementos HTML, cuando se analizan, activarán más solicitudes HTTP:

- Elementos {{htmlelement("link")}} que hacen referencia a hojas de estilo [CSS](/es/docs/Learn_web_development/Core/Styling_basics) externas.
- Elementos {{htmlelement("script")}} que hacen referencia a archivos [JavaScript](/es/docs/Learn_web_development/Core/Scripting) externos.
- Elementos como {{htmlelement("img")}}, {{htmlelement("video")}} y {{htmlelement("audio")}}, que hacen referencia a archivos multimedia que deseas incrustar en la página web.

## Análisis de CSS y renderización de la página

A continuación, veamos cómo se maneja el CSS.

1. El navegador analiza el CSS que se encuentra en la página (ya sea incluido en el archivo HTML o obtenido de hojas de estilo externas) y clasifica las diferentes reglas de estilo CSS en diferentes "contenedores" según a qué elementos HTML (representados en el DOM como elementos llamados **nodos**) se aplicarán. Luego, el navegador adjunta estilos a los diferentes elementos según sea necesario (este paso intermedio se llama árbol de renderizado).
2. El árbol de renderizado se presenta en la estructura en la que debería aparecer después de que se hayan aplicado las reglas. Esto incluye cualquier imagen y otros archivos multimedia que se van a incrustar en la página.
3. La visualización visual de la página se muestra en la pantalla (esta etapa se llama pintar).

El siguiente diagrama ofrece una visualización del proceso del que hemos hablado hasta ahora:

![Proceso de renderización](rendering.svg)

Volviendo a nuestro ejemplo, digamos que el siguiente CSS se encuentra en el archivo HTML:

```html hidden
<p>
  Usemos:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

La única regla disponible en el CSS tiene un selector `span`, ¡así que el navegador puede ordenar el CSS muy rápidamente! Aplica esa regla a cada uno de los tres nodos SPAN en el árbol DOM, dándoles un borde negro y un fondo verde lima, luego pinta la representación visual final en la pantalla.

La salida actualizada es la siguiente:

{{EmbedLiveSample('Parsing the CSS, and rendering the page', '100%', 90)}}

## Manejo de JavaScript

Cualquier JavaScript que se encuentre en la página (ya sea incluido en el archivo HTML u obtenido de archivos de script externos) se analiza, interpreta, compila y ejecuta. Esto sucede en algún momento antes de que se complete la renderización final de la página; después de todo, algún JavaScript puede afectar la renderización, por ejemplo, agregando nodos al DOM o modificando los existentes.

Volviendo a nuestro ejemplo, digamos que el siguiente JavaScript se encuentra en el archivo HTML:

```html hidden
<p>
  Usemos:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css hidden
span {
  border: 1px solid black;
  background-color: lime;
}
```

```js
const spans = document.querySelectorAll("span");
spans.forEach((span) => {
  const reversedText = span.textContent.split("").reverse().join("");
  span.textContent = reversedText;
});
```

No necesitas entender exactamente cómo funciona este JavaScript, pero a un nivel alto, encuentra cada nodo SPAN en el DOM e invierte el orden de los caracteres en sus nodos de texto hijos.

La salida final es la siguiente:

{{EmbedLiveSample('Handling the JavaScript', '100%', 90)}}

## ¿Qué otros pasos de renderización existen?

Varias otras cosas suceden durante la renderización de la página, pero no las discutiremos todas aquí. Una ocurrencia adicional notable que vale la pena mencionar es que se construye un árbol de accesibilidad, basado en el DOM, para que las tecnologías de asistencia (por ejemplo, los lectores de pantalla) se conecten, lo que permite a las personas que no pueden ver el contenido renderizado interactuar con él.

Aprenderás más sobre esto más adelante, en nuestro módulo de [Accesibilidad](/es/docs/Learn_web_development/Core/Accessibility).

## El navegador: un entorno de programación hostil _e_ increíble

El desarrollo web front-end a veces puede ser frustrante, y algunas personas consideran que el navegador es un entorno de programación hostil. Esto se debe a que, a diferencia de otros entornos de programación, es mucho más difícil hacer garantías sobre el entorno en el que se ejecutará tu código. No puedes saber de antemano todas las diferentes combinaciones de sistema operativo, navegador, idioma, ubicación, conexión de red, CPU, GPU, memoria, duración de la batería, etc., que tendrán tus usuarios, por lo tanto, no puedes garantizar una experiencia de usuario perfecta para todos ellos.

Los navegadores modernos tienden a implementar los estándares web de manera bastante consistente, pero todavía hay mucha incertidumbre por navegar. Como desarrollador web, deberás aceptar esa incertidumbre, programar a la defensiva y ser conservador con las características que uses. Esto se basa en adherirse a las [mejores prácticas](/es/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices) descritas en el artículo anterior.

Por otro lado, la web también es un entorno de programación increíble, por muchas razones.

- Para empezar, está diseñado teniendo en cuenta el acceso universal. El estado básico de la web es accesible y enlazable. Algunos de estos conceptos básicos son más difíciles de lograr en otros entornos.
- La entrega de aplicaciones a través de la web es simple y poderosa. No necesitas llevar a tus usuarios a través de un complicado proceso de instalación: simplemente los diriges a una dirección web y listo.
- Las actualizaciones de las aplicaciones suelen ser sencillas. En muchos casos, los visitantes pueden ver nuevas versiones de una aplicación cuando vuelven a cargar la pestaña de su navegador. No necesitas preocuparte de que los visitantes descarguen e instalen regularmente actualizaciones de software.
- La comunidad web es vibrante y útil. Como comentamos más adelante en nuestro artículo de [Investigación y aprendizaje](/es/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning), hay muchos lugares a los que puedes acudir para pedir ayuda, y excelentes recursos disponibles para aprender.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
