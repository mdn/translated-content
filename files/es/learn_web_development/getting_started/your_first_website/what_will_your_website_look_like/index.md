---
title: ¿Cuál será la apariencia de tu sitio web?
short-title: ¿Cuál será su apariencia?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_¿Cuál será la apariencia de tu sitio web?_ trata del trabajo de planificación y diseño que tienes que hacer para tu sitio web antes de escribir código, incluidas preguntas como «¿Qué información ofrece mi sitio web?», «¿Qué fuentes y colores quiero?» y «¿Qué hace mi sitio?».

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo de tu computadora, el software básico que usarás para construir un sitio web y los sistemas de archivos.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Planificar un sitio web básico.</li>
          <li>Usar un proceso de diseño básico.</li>
          <li>Reunir los recursos.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Lo primero es lo primero: planificar

Antes de hacer nada, necesitas algunas ideas. ¿Qué debería hacer realmente tu sitio web? Un sitio web puede hacer prácticamente cualquier cosa, pero en tu primer intento deberías mantener las cosas sencillas. Empezaremos creando una página web sencilla con un encabezado, una imagen y algunos párrafos.

Para empezar, tendrás que responder estas preguntas:

1. **¿De qué trata tu sitio web?** ¿Te gustan los perros, Nueva York o Pac-Man?
2. **¿Qué información vas a presentar sobre el tema?** Escribe un título y algunos párrafos, y piensa en una imagen que te gustaría mostrar en tu página.
3. **¿Cómo es tu sitio web,** a grandes rasgos? ¿Cuál es el color de fondo? ¿Qué tipo de fuente es la adecuada: formal, caricaturesca, gruesa y llamativa, sutil?

> [!NOTE]
> Los proyectos complejos necesitan directrices detalladas que entren en todos los detalles de colores, fuentes, espaciado entre los elementos de una página, estilo de redacción adecuado, etc. A esto a veces se le llama guía de diseño, sistema de diseño o manual de marca, y puedes ver un ejemplo en el [Firefox Acorn Design System](https://acorn.firefox.com/latest).

## Hacer un boceto de tu diseño

A continuación, toma lápiz y papel y haz un boceto aproximado de cómo quieres que se vea tu sitio. Para tu primera página web sencilla no hay mucho que dibujar, pero deberías acostumbrarte a hacerlo desde ahora. Ayuda muchísimo, ¡y no hace falta ser Van Gogh!

![Un dibujo y boceto aproximado de un sitio web en papel](website-drawing-scan.png)

> [!NOTE]
> Incluso en sitios web reales y complejos, los equipos de diseño suelen empezar con bocetos aproximados en papel y más adelante construyen maquetas digitales con un editor gráfico o con tecnologías web.
>
> Los equipos web suelen incluir tanto a un [diseñador gráfico](/es/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#diseñador_gráfico) como a un [diseñador de experiencia de usuario (UX)](/es/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#diseñador_de_experiencia_de_usuario_ux). Los diseñadores gráficos crean la parte visual del sitio web. Los diseñadores de UX tienen un papel algo más abstracto: se ocupan de cómo experimentarán los usuarios el sitio web y cómo interactuarán con él.

En este punto, conviene empezar a reunir el contenido que acabará apareciendo en tu página web. Todavía deberías tener tus párrafos y el título de antes. Tenlos a mano.

## Elegir un color de tema

Vamos a elegir un color de fondo para tu página.

1. Ve al [selector de color](/es/docs/Web/CSS/Guides/Colors/Color_format_converter) y busca un color que te guste.
2. Al elegir un color, verás un extraño código de seis caracteres como `#660066`. Se llama _código hexadecimal_ y representa tu color. Por ahora, apunta el código en algún lugar seguro.

![Herramienta de conversión de formatos de color en el sitio web de MDN Docs](color_format_converter.jpg)

## Elegir una imagen

Ahora es momento de buscar una imagen para mostrar en tu sitio.

1. Ve a [Google Imágenes](https://www.google.com/imghp).
2. Ten en cuenta que la mayoría de las imágenes de la web, incluidas las de Google Imágenes, tienen derechos de autor. Para reducir la probabilidad de infringirlos, puedes usar el filtro de licencias de Google. Haz clic en el botón _Herramientas_ y después en la opción _Derechos de uso_ que aparece debajo. Elige la opción _Licencias Creative Commons_.

   ![Resultados de búsqueda filtrados para obtener imágenes con licencias Creative Commons en Google Imágenes](updated-google-images-licensing.png)

3. Busca una imagen adecuada.
4. Cuando encuentres la imagen que quieres, haz clic en ella para verla ampliada.
5. Haz clic derecho en la imagen (<kbd>Ctrl</kbd> + clic en Mac), elige _Guardar imagen como…_ y elige un lugar seguro donde guardarla.

   ![Resultados de búsqueda de un término en Google Imágenes](updated-google-images.png)

## Elegir una fuente

Hay un conjunto de fuentes llamadas [fuentes seguras para la web](/es/docs/Learn_web_development/Core/Text_styling/Fundamentals#fuentes_seguras_para_la_web), como Arial, Times New Roman o Courier New, que suelen estar disponibles en la mayoría de los sistemas. Si usas una de estas fuentes en tu sitio web, el navegador cargará el archivo de la fuente disponible en la computadora del usuario.

Sin embargo, si quieres usar otras fuentes que no suelen estar disponibles en los dispositivos, tienes que incluirlas junto con los archivos de tu sitio web o hacer referencia a los archivos de fuente de un servicio de fuentes de terceros, para que el navegador pueda descargarlas cuando las necesite. [Google Fonts](https://fonts.google.com/) es uno de esos servicios y da acceso a muchas fuentes.

Vamos a usar Google Fonts para elegir una fuente para tu sitio web:

1. Ve a [Google Fonts](https://fonts.google.com/).
2. Desplázate por la lista de fuentes hasta encontrar una que te guste. Si te cuesta encontrarla, puedes usar los filtros disponibles en la otra columna para acotar la búsqueda.
3. Haz clic en la fuente que elegiste y, en la página siguiente, haz clic en el botón «Get font».
4. En la página siguiente, haz clic en «Get embed code».
5. Copia los dos bloques de código que te dan y guárdalos en algún lugar seguro para usarlos más adelante.

> [!NOTE]
> Al igual que las imágenes, muchas fuentes están protegidas por licencias, lo que significa que no necesariamente puedes usarlas libremente en sitios web comerciales. Por ahora no habrá problema mientras trabajas con ejemplos de aprendizaje, pero tenlo en cuenta al elegir fuentes para sitios web reales.

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
