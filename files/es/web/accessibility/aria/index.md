---
title: ARIA
slug: Web/Accessibility/ARIA
translation_of: Web/Accessibility/ARIA
---

Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** es una colección de atributos que definen como realizar contenido y aplicaciónes web (especialmente las desarrolladas con Javascript) más accesibles para las personas con discapacidades.

Complementa HTML para que las interacciones y los widgets que se usan comúnmente en las aplicaciones puedan ser correctamente interpretadas por las tecnologías de asistencia cuando no existe otro mecanismo. Por ejemplo, ARIA habilita accesibilidad a widgets de JavaScript, sugerencias de formularios, mensajes de error, actualizaciones de contenido en vivo y más.

> **Advertencia:** Muchos de estos widgets se incorporaron posteriormente a HTML5, y **los desarrolladores deberían preferir usar el elemento HTML semántico correcto en lugar de usar ARIA**, si tal elemento existe. Por ejemplo, los elementos nativos tienen incorporado [accesibilidad de teclado](/es/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets), roles y estados. Sin embargo, si elige usar ARIA, es responsable de imitar el comportamiento equivalente del navegador en la secuencia de comandos.

[La primera regla de ARIA](https://www.w3.org/TR/using-aria/#rule1) es "Si puede usar un elemento o atributo HTML nativo con la semántica y el comportamiento que necesita ya integrado, en lugar de reutilizar un elemento y agregar un rol, estado o propiedad de ARIA para hacerlo accesible, hágalo".

> **Nota:** Hay un dicho "No utilizar ARIA es mejor que utilizar una mala ARIA". En [la encuesta de WebAim de más de un millón de páginas de inicio](https://webaim.org/projects/million#aria), encontraron que las páginas de inicio con ARIA presentes promediaron un 41 % más de errores detectados que aquellas sin ARIA. Si bien ARIA está diseñado para hacer que las páginas web sean más accesibles, si se usa incorrectamente, puede hacer más daño que bien.

Aquí está el marcado para una barra de progreso:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
></div>
```

Esta barra de progreso se construye usando un {{HTMLElement("div")}}, que no tiene significado. Incluimos roles y propiedades de ARIA para agregar significado. En este ejemplo, el atributo [`role="progressbar"`](/es/docs/Web/Accessibility/ARIA/Roles/progressbar_role) informa al navegador que este elemento es en realidad un widget de barra de progreso impulsado por JavaScript. [`aria-valuemin`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) y [`aria-valuemax`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) especifican los valores mínimo y máximo para la barra de progreso, y [`aria-valuenow`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) describe el actual estado del mismo y por lo tanto debe mantenerse actualizado con JavaScript.

Además de colocarlos directamente en el marcado, los atributos ARIA se pueden agregar al elemento y actualizar dinámicamente usando un código JavaScript como este:

```js
// Obteniendo la barra de progreso <div> en el DOM
var progressBar = document.getElementById("percent-loaded");

// Configurando estados y roles ARIA
// so that assistive technologies know what kind of widget it is.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Función que se puede llamar en cualquier momento para actualizar
// el valor de la barra de progreso
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

Todo el contenido que está disponible para usuarios de tecnología no asistencial debe estar disponible para tecnologías asistenciales. Del mismo modo, no se deben incluir funciones dirigidas a usuarios de tecnología de asistencia que no sean accesibles para aquellos que no usan tecnologías de asistencia. La barra de progreso anterior debe diseñarse para que parezca una barra de progreso.

Habría sido mucho más simple usar el elemento nativo {{HTMLElement('progress')}} en su lugar:

```HTML
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> **Nota:** El atributo `min` no está permitido para el elemento {{HTMLElement('progress')}}; su valor mínimo es siempre `0`.

> **Nota:** Los elementos de referencia HTML ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}} etc.) tienen roles ARIA implícitos, por lo que no es necesario duplicarlos.

## Soporte

Como cualquier otra tecnología web, existen diversos grados de soporte para ARIA. El soporte se basa en el sistema operativo y el navegador que se utiliza, así como en el tipo de tecnología de asistencia que interactúa con él. Además, la versión del sistema operativo, el navegador y la tecnología de asistencia son factores que contribuyen. Es posible que las versiones de software anteriores no admitan ciertas funciones de ARIA, solo tengan compatibilidad parcial o informen incorrectamente su funcionalidad.

También es importante reconocer que algunas personas que confían en la tecnología de asistencia son reacias a actualizar su software por temor a perder la capacidad de interactuar con su computadora y navegador. Debido a esto, es importante [usar elementos HTML semánticos](/es/docs/Learn/Accessibility/HTML) siempre que sea posible, ya que el HTML semántico es mucho más compatible con la tecnología de asistencia.

También es importante probar su ARIA creado con tecnología de asistencia real. Así como los emuladores y simuladores de navegador no son una solución efectiva para probar el soporte completo, las soluciones de tecnología de asistencia de emuladas no son suficientes para garantizar completamente la funcionalidad.

## Tutoriales

- [Introducción a ARIA](/es/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
  - : Una introducción rápida a cómo hacer que el contenido dinámico sea accesible con ARIA. Véase también el clásico [introducción a ARIA de Gez Lemon](https://dev.opera.com/articles/view/introduction-to-wai-aria/), de 2008.
- [Videos de lectores de pantalla usando ARIA](https://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/)
  - : Vea ejemplos reales y simplificados de toda la web, incluidos videos de ARIA "antes" y "después".
- [Usando ARIA](https://w3c.github.io/using-aria/)
  - : Una guía práctica para desarrolladores. Sugiere qué atributos ARIA usar en elementos HTML. Las sugerencias se basan en las realidades de la implementación.

## Mejoras simples de ARIA

- [Mejora de la navegación de páginas con referencias de ARIA](https://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
  - : Una buena introducción al uso de los puntos de referencia de ARIA para mejorar la navegación de la página web para los usuarios de lectores de pantalla. [Consulte también las notas de implementación históricas de ARIA](https://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/) y ejemplos en sitios reales (actualizado en julio de 2011).
- [Mejorando la accesibilidad de los formularios](/es/docs/Web/Accessibility/ARIA/forms)
  - : ¡ARIA no es solo para contenido dinámico! Aprenda a mejorar la accesibilidad de los formularios HTML utilizando atributos ARIA adicionales.

## ARIA para widgets con scripts

- [Escribir widgets JavaScript navegables por teclado](/es/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  -: Elementos integrados como {{HTMLElement("input")}}, {{HTMLElement("button")}} etc. tienen accesibilidad de teclado integrado. Si 'falsifica' estos con {{HTMLElement("div")}}s y ARIA, debe asegurarse de que sus widgets sean accesibles desde el teclado.
- [Regiones en vivo](/es/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : Las regiones activas brindan sugerencias a los lectores de pantalla sobre cómo manejar los cambios en el contenido de una página.
- [Uso de regiones en vivo de ARIA para anunciar cambios de contenido](https://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm)
  - : Un breve resumen de las regiones en vivo, por los creadores del software de lectura de pantalla JAWS. Las regiones en vivo también son compatibles con NVDA con Firefox y VoiceOver con Safari.

## Referencias

- [Funciones ARIA](/es/docs/Web/Accessibility/ARIA/Roles)
  - : Páginas de referencia que cubren todos los roles de WAI-ARIA discutidos en MDN.
- [Estados y propiedades de ARIA](/es/docs/Web/Accessibility/ARIA/Attributes)
  - : Páginas de referencia que cubren todos los estados y propiedades de WAI-ARIA discutidos en MDN.rted por NVDA con Firefox y VoiceOver con Safari.

## Esfuerzos de estandarización

- [Especificación WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)
  - : La propia especificación W3C.
- [Prácticas de creación de WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.1/)
  - : Las mejores prácticas oficiales documentan la mejor manera de ARIA-ficar widgets e interacciones comunes. Un excelente recurso.

## Videos

Las siguientes charlas son una excelente manera de entender ARIA:

[¡ARIA, las API de accesibilidad y la codificación como si te importara un comino! – Leonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)

## Archivando errores

[Archivar errores de ARIA en navegadores, lectores de pantalla y bibliotecas JavaScript.](/es/docs/Web/Accessibility/ARIA/How_to_file_ARIA-related_bugs)

## Temas relacionados

[Accesibilidad](/es/docs/Web/Accessibility), [AJAX](/es/docs/Web/Guide/AJAX), [JavaScript](/es/docs/Web/JavaScript)
