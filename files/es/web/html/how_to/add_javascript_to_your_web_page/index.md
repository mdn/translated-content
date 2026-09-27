---
title: Añadir JavaScript a tu página web
short-title: Añadir JavaScript
slug: Web/HTML/How_to/Add_JavaScript_to_your_web_page
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

Lleva tus páginas web al siguiente nivel aprovechando JavaScript. En este artículo aprenderás a ejecutar JavaScript directamente desde tus documentos HTML.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Debes saber cómo
        <a href="/es/docs/Learn_web_development/Getting_started/Your_first_website"
          >crear un documento HTML básico</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a ejecutar JavaScript en tu archivo HTML y conocer las buenas
        prácticas más importantes para que JavaScript siga siendo accesible.
      </td>
    </tr>
  </tbody>
</table>

## Acerca de JavaScript

{{Glossary("JavaScript")}} es un lenguaje de programación que se usa sobre todo del lado del cliente para hacer que las páginas web sean interactivas. _Puedes_ crear páginas web increíbles sin JavaScript, pero JavaScript abre todo un nuevo nivel de posibilidades.

> [!NOTE]
> En este artículo vamos a repasar el código HTML que necesitas para que JavaScript surta efecto. Si quieres aprender JavaScript en sí, puedes empezar con nuestro artículo [Fundamentos de JavaScript](/es/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity). Si ya sabes algo de JavaScript o tienes experiencia con otros lenguajes de programación, te sugerimos que vayas directamente a nuestra [Guía de JavaScript](/es/docs/Web/JavaScript/Guide).

## Cómo ejecutar JavaScript desde HTML

En un navegador, JavaScript no hace nada por sí solo. JavaScript se ejecuta desde dentro de tus páginas web HTML. Para llamar a código JavaScript desde HTML, necesitas el elemento {{htmlelement("script")}}. Hay dos formas de usar `script`, según quieras enlazar un script externo o incrustar un script directamente en tu página web.

### Enlazar un script externo

Normalmente, escribirás los scripts en sus propios archivos .js. Si quieres ejecutar un script .js desde tu página web, usa {{HTMLElement ('script')}} con un atributo `src` que apunte al archivo del script mediante su [URL](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL):

```html
<script src="path/to/my/script.js"></script>
```

### Escribir JavaScript dentro de HTML

También puedes añadir código JavaScript entre las etiquetas `<script>`, en lugar de indicar un atributo `src`.

```html
<script>
  console.log("Some code");
</script>
```

Esto es práctico cuando solo necesitas un poco de JavaScript, pero si guardas JavaScript en archivos separados te resultará más fácil

- centrarte en tu trabajo
- escribir HTML autosuficiente
- escribir aplicaciones JavaScript estructuradas

> [!NOTE]
> Tanto en los scripts en línea como en los externos que no tienen los atributos [`defer`](/es/docs/Web/HTML/Reference/Elements/script#defer) o [`async`](/es/docs/Web/HTML/Reference/Elements/script#async), el script se ejecuta inmediatamente cuando el navegador encuentra el elemento `<script>` al analizar el HTML. Esto significa que el script no puede acceder a ningún elemento HTML que aparezca más adelante en el documento. Para acceder a esos elementos, puedes mover el script al final del cuerpo del documento (justo antes de la etiqueta de cierre `</body>`) o usar el atributo `defer` en los scripts externos.

## Usar scripts de forma accesible

La accesibilidad es un tema fundamental en cualquier desarrollo de software. JavaScript puede hacer que tu sitio web sea más accesible si lo usas con criterio, o puede convertirse en un desastre si usas scripts sin cuidado. Para que JavaScript juegue a tu favor, vale la pena conocer ciertas buenas prácticas al añadir JavaScript:

- **Haz que todo el contenido esté disponible como texto (estructurado).** Usa HTML para tu contenido tanto como sea posible. Por ejemplo, si has implementado una bonita barra de progreso con JavaScript, asegúrate de complementarla con porcentajes de texto equivalentes en el HTML. Del mismo modo, tus menús desplegables deberían estructurarse como [listas no ordenadas](/es/docs/Learn_web_development/Core/Structuring_content/Lists#listas_no_ordenadas) de [enlaces](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links).
- **Haz que todas las funciones sean accesibles desde el teclado.**
  - Permite que los usuarios recorran con el tabulador todos los controles (por ejemplo, los enlaces y los campos de formulario) en un orden lógico.
  - Si usas eventos de puntero (como los eventos de ratón o táctiles), duplica la funcionalidad con eventos de teclado.
  - Prueba tu sitio usando solo el teclado.

- **No establezcas ni intentes adivinar límites de tiempo.** Navegar con el teclado o escuchar el contenido en voz alta lleva más tiempo. Casi nunca se puede predecir cuánto tardarán los usuarios o los navegadores en completar un proceso (sobre todo en las acciones asíncronas, como la carga de recursos).
- **Haz que las animaciones sean sutiles y breves, sin destellos.** Los destellos son molestos y pueden [provocar convulsiones](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Además, si una animación dura más de un par de segundos, ofrece al usuario una forma de cancelarla.
- **Deja que los usuarios inicien las interacciones.** Es decir, no actualices el contenido, no redirijas ni recargues la página automáticamente. No uses carruseles ni muestres ventanas emergentes sin avisar.
- **Ten un plan B para los usuarios sin JavaScript.** Algunas personas desactivan JavaScript para mejorar la velocidad y la seguridad, y los usuarios suelen tener problemas de red que impiden cargar los scripts. Además, los scripts de terceros (anuncios, scripts de rastreo, extensiones del navegador) podrían romper tus scripts.
  - Como mínimo, deja un mensaje breve con {{HTMLElement("noscript")}}, así: `<noscript>Para usar este sitio, activa JavaScript.</noscript>`
  - Lo ideal es replicar la funcionalidad de JavaScript con HTML y scripts del lado del servidor cuando sea posible.
  - Si solo buscas efectos visuales sencillos, CSS suele poder hacerlo de forma aún más intuitiva.
  - _Como casi todo el mundo **sí** tiene JavaScript activado, `<noscript>` no es excusa para escribir scripts inaccesibles._

## Más información

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [Writing JavaScript with Accessibility in Mind](https://www.sitepoint.com/writing-javascript-with-accessibility-in-mind/), de Manuel Matuzovic (2017)
- [Pautas de accesibilidad del W3C](https://w3c.github.io/wcag/guidelines/22/)
