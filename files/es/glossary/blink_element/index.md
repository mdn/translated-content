---
title: elemento blink (etiqueta <blink>)
slug: Glossary/blink_element
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

El **elemento `<blink>`** (etiqueta blink) es una característica obsoleta de HTML que los navegadores web ya no admiten y que MDN ya no documenta. Se usaba para hacer que el contenido de texto parpadeara (flash) de forma continua.

El elemento `<blink>` se usaba así:

```html example-bad
<blink>En los navegadores antiguos, puede que yo parpadeara</blink>
```

## Breve historia

En los inicios de la web (entre principios y mediados de los años noventa), había pocas funcionalidades disponibles para dar estilo a las páginas web. La especificación de [CSS](/es/docs/Web/CSS) (versión 1) se publicó por primera vez en 1996, pero los navegadores no la adoptaron de manera uniforme hasta mucho más tarde. Antes de CSS, los navegadores experimentaron con diversas funcionalidades para resaltar secciones de texto específicas y captar la atención de quien visitaba la página. El elemento `<blink>` fue una de ellas y se introdujo en las primeras versiones de [Netscape Navigator](/es/docs/Glossary/Netscape_Navigator); el elemento {{htmlelement("marquee")}} de [Internet Explorer](/es/docs/Glossary/Microsoft_Internet_Explorer) fue otra.

Al parecer, el elemento `<blink>` surgió tras una conversación en un bar de Mountain View entre el ingeniero de Netscape [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli) y unos colegas. A la mañana siguiente, al llegar a la oficina, descubrió que uno de sus compañeros ingenieros había pasado la noche en vela y lo había implementado ([lee la historia aquí](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

Aunque al principio fue popular, `<blink>` acabó muy criticado por su uso excesivo; a muchas personas les resultaba molesto. Más importante aún, reduce la legibilidad y puede ser especialmente problemático para usuarios con discapacidades visuales o [trastornos cognitivos](/es/docs/Web/Accessibility/Guides/Cognitive_accessibility), como la epilepsia o el TDAH. Puede causar desorientación o, en el peor de los casos, incluso [provocar convulsiones](/es/docs/Web/Accessibility/Guides/Seizure_disorders).

`<blink>` nunca se especificó correctamente ni llegó a tener una compatibilidad significativa entre los distintos navegadores. Puede considerarse una pieza de la historia de la web.

## Alternativas

- La propiedad CSS {{cssxref("text-decoration-line")}} tiene un valor `blink` que debería producir el mismo efecto, pero la mayoría de los navegadores modernos lo ignoran.
- El método {{jsxref("String.blink()")}} de JavaScript envuelve una cadena de texto entre las etiquetas `<blink></blink>`, pero, como se explicó antes, este elemento ya no se admite en ninguna parte.
- Aún pueden usarse las [animaciones CSS](/es/docs/Web/CSS/Guides/Animations) para crear texto parpadeante. Sin embargo, deberías evitar el texto parpadeante en las páginas web por los motivos explicados más arriba.

## Véase también

- [Elemento blink](https://en.wikipedia.org/wiki/Blink_element) en Wikipedia
- [WCAG 2.2.2: Pausar, detener, ocultar](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Tres destellos o por debajo del umbral](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
