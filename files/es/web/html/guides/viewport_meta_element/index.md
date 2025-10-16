---
title: Etiqueta meta del Viewport
slug: Web/HTML/Guides/Viewport_meta_element
original_slug: Web/HTML/Viewport_meta_tag
---

{{HTMLSidebar}}

Este artículo describe cómo usar la etiqueta `<meta>` "viewport" para controlar el tamaño y la forma del viewport.

## Antecedentes

El {{glossary("viewport")}} del navegador es el área de la ventana en la que se puede ver el contenido web. Esto a menudo no tiene el mismo tamaño que la página renderizada, en cuyo caso el navegador proporciona barras de desplazamiento para que el usuario pueda desplazarse y acceder a todo el contenido.

Algunos dispositivos móviles y otras pantallas estrechas renderizan las páginas en una ventana virtual o viewport, que generalmente es más ancha que la pantalla, y luego reducen el resultado renderizado para que se pueda ver todo a la vez. Los usuarios pueden luego hacer zoom y desplazarse para observar más de cerca diferentes áreas de la página. Por ejemplo, si una pantalla móvil tiene un ancho de 640px, las páginas podrían renderizarse con un viewport virtual de 980px y luego reducirse para ajustarse al espacio de 640px.

Esto se hace porque no todas las páginas están optimizadas para móviles y se rompen (o al menos se ven mal) cuando se renderizan en un ancho de viewport pequeño. Este viewport virtual es una forma de mejorar la apariencia de sitios no optimizados para móviles en dispositivos con pantallas estrechas.

Sin embargo, este mecanismo no es tan bueno para las páginas optimizadas para pantallas estrechas usando [media queries](/es/docs/Web/CSS/CSS_media_queries), ya que si el viewport virtual es de 980px, por ejemplo, las consultas de medios que se activan a 640px o 480px o menos nunca se usarán, limitando la efectividad de estas técnicas de diseño responsivo. El elemento `<meta>` del viewport mitiga este problema en dispositivos con pantallas estrechas.

## Conceptos básicos del Viewport

El viewport es una lista separada por comas de pares de características y valores. Un sitio típicamente optimizado para móviles contiene algo como lo siguiente:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

No todos los dispositivos tienen el mismo ancho; debes asegurarte de que tus páginas funcionen bien en una gran variedad de tamaños y orientaciones de pantalla.

Los atributos básicos del elemento `<meta>` "viewport" incluyen:

- `width`
  - : Controla el tamaño (mínimo) del viewport (ver [ancho del viewport y ancho de la pantalla](#ancho_del_viewport_y_ancho_de_la_pantalla)). Puede establecerse en un número específico de píxeles como `width=600` o en el valor especial `device-width`, que es el tamaño físico de la pantalla del dispositivo en píxeles CSS. Este valor establece el valor de la unidad [`vw`](/es/docs/Web/CSS/length#longitudes_relativas_al_viewport). Mínimo: `1`. Máximo: `10000`. Valores negativos: ignorados.
- `height`
  - : Controla el tamaño (mínimo) del viewport (ver [ancho del viewport y ancho de la pantalla](#ancho_del_viewport_y_ancho_de_la_pantalla)). Puede establecerse en un número específico de píxeles como `height=400` o en el valor especial `device-height`, que es el tamaño físico de la pantalla del dispositivo en píxeles CSS. Este valor establece el valor de la unidad [`vh`](/es/docs/Web/CSS/length#longitudes_relativas_al_viewport). Mínimo: `1`. Máximo: `10000`. Valores negativos: ignorados.
- `initial-scale`
  - : Controla el nivel de zoom cuando la página se carga por primera vez. Mínimo: `0.1`. Máximo: `10`. Predeterminado: `1`. Valores negativos: ignorados.
- `minimum-scale`
  - : Controla cuánto se puede alejar el zoom en la página. Mínimo: `0.1`. Máximo: `10`. Predeterminado: `0.1`. Valores negativos: ignorados.
- `maximum-scale`
  - : Controla cuánto se puede acercar el zoom en la página. Cualquier valor inferior a 3 no cumple con la accesibilidad. Mínimo: `0.1`. Máximo: `10`. Predeterminado: `10`. Valores negativos: ignorados.
- `user-scalable`
  - : Controla si se permiten acciones de acercar y alejar en la página. Valores válidos: `0`, `1`, `yes` o `no`. Predeterminado: `1`, que es igual a `yes`. Establecer el valor en `0`, que es igual a `no`, va en contra de las Directrices de Accesibilidad de Contenidos Web (WCAG).
- `interactive-widget`
  - : Especifica el efecto que tienen los widgets de la interfaz de usuario interactiva, como un teclado virtual, en los viewports de la página. Valores válidos: `resizes-visual`, `resizes-content` o `overlays-content`. Predeterminado: `resizes-visual`.

> [!ADVERTENCIA]
> Usar `user-scalable=no` puede causar problemas de accesibilidad para usuarios con discapacidades visuales, como baja visión. [WCAG](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#pauta_1.4_facilitar_a_los_usuarios_ver_y_o%C3%ADr_el_contenido_incluyendo_la_separaci%C3%B3n_entre_el_primer_plano_y_el_fondo) requiere un mínimo de escalado de 2×; sin embargo, la mejor práctica es permitir un zoom de 5×.

## Densidad de pantalla

Las resoluciones de pantalla han aumentado hasta el punto en que los píxeles individuales son indistinguibles para el ojo humano. Por ejemplo, los teléfonos inteligentes suelen tener pantallas pequeñas con resoluciones superiores a 1920x1080 píxeles (≈400dpi). Debido a esto, muchos navegadores pueden mostrar sus páginas en un tamaño físico más pequeño traduciendo múltiples píxeles de hardware por cada "píxel" CSS. Inicialmente, esto causó problemas de usabilidad y legibilidad en muchos sitios web optimizados para dispositivos táctiles.

En pantallas de alta densidad (DPI), las páginas con `initial-scale=1` estarán efectivamente ampliadas por los navegadores. Su texto será suave y nítido, pero sus imágenes de mapa de bits pueden no aprovechar al máximo la resolución completa de la pantalla. Para obtener imágenes más nítidas en estas pantallas, los desarrolladores web pueden diseñar imágenes – o diseños completos – a una escala mayor que su tamaño final y luego reducirlas utilizando propiedades de CSS o del viewport.

La relación de píxeles predeterminada depende de la densidad de la pantalla. En una pantalla con densidad inferior a 200dpi, la relación es 1.0. En pantallas con densidad entre 200 y 300dpi, la relación es 1.5. Para pantallas con densidad superior a 300dpi, la relación es el máximo entero menor o igual a (_density_/150dpi). Tenga en cuenta que esta relación predeterminada es verdadera solo cuando la escala del viewport es igual a 1. De lo contrario, la relación entre píxeles CSS y píxeles del dispositivo depende del nivel de zoom actual.

## Ancho del viewport y ancho de la pantalla

Los sitios pueden establecer su viewport a un tamaño específico. Por ejemplo, la definición `"width=320, initial-scale=1"` puede usarse para ajustarse precisamente a una pantalla pequeña de teléfono en orientación vertical. Esto puede causar problemas cuando el navegador renderiza una página en un tamaño mayor. Para solucionar esto, los navegadores ampliarán el ancho del viewport si es necesario para llenar la pantalla a la escala solicitada. Esto es especialmente útil en dispositivos con pantallas grandes.

Para las páginas que establecen una escala inicial o máxima, esto significa que la propiedad `width` se traduce en un ancho mínimo del viewport. Por ejemplo, si tu diseño necesita al menos 500 píxeles de ancho, puedes usar el siguiente marcado. Cuando la pantalla tiene más de 500 píxeles de ancho, el navegador ampliará el viewport (en lugar de hacer zoom) para ajustarse a la pantalla:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

Otros [atributos](/es/docs/Web/HTML/Reference/Elements/meta#atributos) disponibles son `minimum-scale`, `maximum-scale` y `user-scalable`. Estas propiedades afectan la escala inicial y el ancho, así como también limitan los cambios en el nivel de zoom.

## El efecto de los widgets de UI interactiva

Los widgets de UI interactivos del navegador pueden influir en el tamaño de los viewports de la página. El widget de UI más común de este tipo es un teclado virtual. Para controlar qué comportamiento de redimensionamiento debe usar el navegador, establece la propiedad `interactive-widget`.

Los valores permitidos son:

- `resizes-visual`
  - : El {{Glossary("visual viewport")}} se redimensiona por el widget interactivo.
- `resizes-content`
  - : El {{Glossary("viewport")}} se redimensiona por el widget interactivo.
- `overlays-content`
  - : Ni el {{Glossary("viewport")}} ni el {{Glossary("visual viewport")}} se redimensionan por el widget interactivo.

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

Cuando el {{Glossary("viewport")}} se redimensiona, el [bloque contenedor](/es/docs/Web/CSS/Containing_block) inicial también se redimensiona, afectando así el tamaño calculado de las [unidades de viewport](/es/docs/Web/CSS/length#longitudes_relativas_al_viewport).

## Tamaños comunes de viewport para dispositivos móviles y tabletas

Si quieres saber qué dispositivos móviles y tabletas tienen qué anchos de viewport, existe una lista completa de [tamaños de viewport para móviles y tabletas aquí](https://experienceleague.adobe.com/es/docs/target/using/experiences/vec/mobile-viewports). Esto proporciona información como el ancho del viewport en orientación vertical y horizontal, así como el tamaño físico de la pantalla, el sistema operativo y la densidad de píxeles del dispositivo.

## Especificaciones

{{Specifications}}

## Véase también

- Artículo: [Prepárate para los cambios en el comportamiento de redimensionamiento del viewport que llegan a Chrome en Android](https://developer.chrome.com/blog/viewport-resize-behavior/)
