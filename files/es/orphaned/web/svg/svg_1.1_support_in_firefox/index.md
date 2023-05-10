---
title: SVG en Firefox
slug: orphaned/Web/SVG/SVG_1.1_Support_in_Firefox
original_slug: Web/SVG/SVG_1.1_Support_in_Firefox
---

**Firefox 2** sigue avanzando en la mejora de la implementación de [Gráficos vectoriales escalables (SVG)](http://www.w3.org/Graphics/SVG/). Aunque el único elemento añadido a los ya soportados por Firefox 1.5 ha sido `<textPath>`, se han resuelto varios fallos y se ha incorporado parte de la especificación.

**Firefox SVG** es un subconjunto de [SVG 1.1](http://www.w3.org/TR/SVG11/), pero no es ninguno de los perfiles oficiales (Tiny, Basic, Full). Al final de este documento se puede encontrar una lista completa de los elementos [SVG](/es/SVG) y su estado de implementación en Firefox 2.0. El resto del documento aporta información sobre las limitaciones en la implementación.

La particular implementación que hemos realizado puede dificultar la creación de contenidos. Le pedimos que tenga paciencia mientras trabajamos en la implementación completa de esta extensa especificación.

Mientras lee esto, usted puede preguntarse cuántos de estos detalles sobre de la implementación pueden haber cambiado. Por desgracia la [hoja de ruta](http://www.mozilla.org/roadmap/gecko-1.9-roadmap.html) actual sitúa la publicación de Firefox con la nueva versión de Gecko en el primer trimestre de 2007. Sin embargo si desea empezar a experimentar con las nuevas funcionalidades, tiene a su disposición en las [compilaciones nocturnas](http://www.mozilla.org/developer/#builds) las últimas evoluciones. También puede consultar [la tabla actualizada](http://www.mozilla.org/projects/svg/status.html) sobre la implementación de SVG en la versión de desarrollo.

## Rendimiento

Firefox usa el mismo motor de renderizado, [cairo](http://cairographics.org/), en todas las plataformas. Por lo tanto sus características de interpretación serán similares. El rendimiento en Linux es el más difícil de predecir, esto es debido a las distintas implementaciones que hacen los diversos servidores X de la extensión RENDER.

En Windows el renderizado de SVG es bastante más rápido que en otras plataformas.

## Rango de coordenadas

Si el contenido posee una geometría con un inmenso rango de coordenadas, habrá que tener cuidado con los problemas ocasionados por el uso interno de cairo para la representación de punto fijo de 16.16 bits para los cálculos. Cairo no recorta las primitivas antes del proceso de rasterización por lo que las coordenadas finales que excedan el rango de -32678 a 32677 tras la transformación provocarán errores de renderizado y posiblemente un rendimiento muy bajo.

## Texto en Windows 98

Un lamentable efecto secundario de usar Cairo como backend de renderizado en Windows es que el renderizado de texto no funcionará en Windows 98. En realidad la cosa es aún peor, si aparece cualquier texto durante el renderizado de contenidos SVG, todo el dibujo se parará.

## Selección de fuente

Si está familiarizado con CSS probablemente sabrá que pueden especificar fuentes alternativas para las propiedades 'font', por si los glifos de una fuente concreta no están disponibles. El actual motor de renderizado de SVG sólo tratará de usar la primera fuente especificada, y si ésta no existe, usará una fuente del sistema. Las fuentes secundarias nunca son usadas, por ejemplo, font-family="Arial,LucidaSansUnicode" no generará una fuente LucidaSansUnicode, aun en el caso de que Arial no esté disponible.

## Impresión

Por desgracia, actualmente en la impresión no se aprovechan las propiedades vectoriales de SVG para generar una salida óptima, por contra, se renderiza según la resolución de la pantalla y luego la salida se hace como imagen.

Al imprimir en MS-Windows, el tamaño de la fuente será mucho más grande que el especificado por SVG.

## Opacidad de grupos

La propiedad de opacidad de grupo `opacity` permite que los objetos contenedores SVG puedan ser tratados como capas semitransparentes, y está separada de las propiedades "fill-opacity" y "stroke-opacity". La implementación actual de "opacity" consume bastantes recursos, debería ser usada con mesura. "fill-opacity" y "stroke-opacity" son mucho más rápidas, y dependiendo de su contenido pueden aportar los mismos resultados.

## Fuentes rotadas

En las plataformas Microsoft Windows y Mac OSX, un texto rotado no es rellenado completamente. El error es por lo general despreciable y puede solucionarse usando un relleno un poquito más grueso. A continuación se muestra un ejemplo con la diferencia:

## \<image>

\<image> no soporta imágenes SVG en Firefox 1.5, sólo los formatos de imagen rasterizados que Firefox maneja.

Todas las instancias de \<image> tienen una copia separada de la imagen que está siendo usada, lo cual es algo a tener en cuenta si tu contenido está usando múltiples copias de una imagen para un icono o algo parecido. Desafortunadamente, \<use> en contenido \<image> cuenta como otra copia en este caso.

De manera adicional, un uso intensivo de imágenes rasterizadas en SVG puede degradar sobremanera el rendimiento en Firefox 1.5.

## Eventos

Soportamos los atributos de SVG para eventos, a excepción de `onfocusin`, `onfocusout`, y `onactivate`.

Nuestro actual manejo del evento `onload` no es estándar, pero creemos que aún así no impide su uso correcto. Mientras que el código especificado por el atributo `onload` sea llamado para cada elemento, un evento `SVGLoad` será llamado únicamente para el elemento `<svg>` raíz. Algunos métodos DOM devolverán basura o error si son llamados antes de que el elemento correspondiente haya sido renderizado, algo que tendrás que tener en cuenta al escribir código `onload`. Dichos métodos son `getBBox`, `getScreenCTM`, etc...

No damos soporte a los eventos para el teclado específicos de Adobe (`onkeydown`, `onkeyup`).

## Interoperabilidad

Si está trabajando con contenidos SVG actuales, puede encontrar problemas al cargarlos en Firefox. La mayoría de los problemas suelen ser triviales y son el resultado de una implementación más estricta en Firefox. En [Guías de estilo para crear SVG](http://jwatt.org/svg/authoring/), Jonathan Watt explica problemas comunes.

## Situaciones de uso de SVG

Firefox 1.5 maneja SVG como un documento completo, o como referencia para los elementos `embed`, `object`, e `iframe`. Actualmente no puede ser usado en HTML o XHTML como fuente del elemento `img`, ni para las propiedades CSS relativas a las imágenes.

## Animaciones

Firefox 1.5 no implementa la animación declarativa, pero soporta scripting dinámico. Doug Shepers lo ha usado para crear [SmilScript](http://www.vectoreal.com/smilscript/), una pequeña biblioteca de Javascript que implementa parte de la animación declarativa de SVG.

## Fallos corregidos en Firefox 2

Firefox 2 ha arreglado algunos fallos en su implementación para SVG. Esta sección presenta un repaso rápido a los arreglos más interesantes.

- Se ha solucionado un problema al rellenar y rotar texto en el que la posición del dibujo no era reiniciada correctamente entre dos operaciones (bug [333615](https://bugzilla.mozilla.org/show_bug.cgi?id=333615)).

<!---->

- Los gradientes radiales ahora mantienen los atributos `fx` y `fy` para asegurar que se encuentran dentro de la circunferencia de un círculo (bug [330682](https://bugzilla.mozilla.org/show_bug.cgi?id=330682)).

<!---->

- La longitud del texto ahora puede ser calculada usando su método `getComputedTextLength()`, lo que mejora la compatibilidad con ciertos sitios web (bugs [311031](https://bugzilla.mozilla.org/show_bug.cgi?id=311031) and [264380](https://bugzilla.mozilla.org/show_bug.cgi?id=264380)).

<!---->

- Los elementos `<tspan>` ahora soportan correctamente los atributos `dx` y `dy` y funcionan si los atributos `x` e `y` no han sido especificados (bug [311063](https://bugzilla.mozilla.org/show_bug.cgi?id=311063)).

<!---->

- Se ha mejorado la lógica de invalidación en el redibujado, lo que evita el parpadeo de los píxeles en ciertos casos (bug [312269](https://bugzilla.mozilla.org/show_bug.cgi?id=312269)).

<!---->

- Arreglado un fallo que impedía que los eventos fuesen manejados apropiadamente por objetos expuestos por el camino de recorte de otro objeto (bug [315861](https://bugzilla.mozilla.org/show_bug.cgi?id=315861)).

<!---->

- Arreglado un fallo que podía provocar el cierre de la aplicación si un elemento `<path>` tenía un atributo `d` con una cadena vacía (bug [318379](https://bugzilla.mozilla.org/show_bug.cgi?id=318379)).

<!---->

- El atributo `overflow` ahora funciona para el elemento `marker`, usando la sintaxis `overflow="visible"`, la cual antes no funcionaba correctamente (bug [320623](https://bugzilla.mozilla.org/show_bug.cgi?id=320623)).

<!---->

- Ahora se puede acceder al atributo `<style>` del elemento `marker` sin que se lance ninguna excepción (bug [323589](https://bugzilla.mozilla.org/show_bug.cgi?id=323589)).

<!---->

- Ahora se pueden usar valores porcentuales en el radio de un gradiente radial (bug [323669](https://bugzilla.mozilla.org/show_bug.cgi?id=323669)).

<!---->

- El método `documentElement.createSVGAngle()` ahora está implementado (bug [327437](https://bugzilla.mozilla.org/show_bug.cgi?id=327437)).

<!---->

- Cuando un elemento `<stop>` se convierte en hijo de otro elemento `<stop>` dicho elemento deja de ser un aserto (bug [328137](https://bugzilla.mozilla.org/show_bug.cgi?id=328137)).

<!---->

- Ahora funciona el cambio de la altura, anchura y orientación de los pinceles (bug [325728](https://bugzilla.mozilla.org/show_bug.cgi?id=325728)).

<!---->

- El tamaño de las fuentes impresas en Windows ya no es tan grande como el especificado por el SVG (bug [314707](https://bugzilla.mozilla.org/show_bug.cgi?id=314707)).

## Estado de la implementación de los elementos

[svg](http://www.w3.org/TR/SVG11/struct.html#SVGElement)

- Implementado.
- Los atributos DOM `currentScale` y `currentTranslate` están implementados pero no existe una interfaz de usuario para pan ni zoom.
- SVGSVGElement

  - Atributos no implementados: contentScriptType, contentStyleType, viewport, useCurrentView, currentView.
  - Bindings no implementados: pauseAnimations, unpauseAnimations,animationsPaused, getCurrentTime, setCurrentTime, getIntersectionList, getEnclosureList, checkIntersection, checkEnclosure, deselectAll, createSVGAngle, getElementById

[g](http://www.w3.org/TR/SVG11/struct.html#GElement)

- Implementado.

[defs](http://www.w3.org/TR/SVG11/struct.html#DefsElement)

- Implementado.

[desc](http://www.w3.org/TR/SVG11/struct.html#DescElement)

- Implementado.
- Solo disponible en el DOM, sin interfaz de usuario.

[title](http://www.w3.org/TR/SVG11/struct.html#TitleElement)

- Implementado.

[metadata](http://www.w3.org/TR/SVG11/metadata.html#MetadataElement)

- Implementado.
- Solo disponible en el DOM, sin interfaz de usuario. \</td>

[symbol](http://www.w3.org/TR/SVG11/struct.html#SymbolElement)

- Implementado.

[use](http://www.w3.org/TR/SVG11/struct.html#UseElement)

- Implementado.
- Solo funciona para referencias internas al documento ([bug 269482](https://bugzilla.mozilla.org/show_bug.cgi?id=269482)).
- No sigue completamente las reglas de la cascada \<svg:use> ([bug 265894](https://bugzilla.mozilla.org/show_bug.cgi?id=265894)).
- No entrega eventos a un arbol SVGElementInstance ([bug 265895](https://bugzilla.mozilla.org/show_bug.cgi?id=265895)).

[switch](http://www.w3.org/TR/SVG11/struct.html#SwitchElement)

- Implementado.

[image](http://www.w3.org/TR/SVG11/struct.html#ImageElement)

- Implementado.
- Solo funciona para tramas de bitmaps ([bug 272288](https://bugzilla.mozilla.org/show_bug.cgi?id=272288)).

[style](http://www.w3.org/TR/SVG11/styling.html#StyleElement)

- Implementado.

[path](http://www.w3.org/TR/SVG11/paths.html#PathElement)

- Implementado.
- Interfaz SVGPathElement

  - Atributos no implementados: pathLength, normalizedPathSegList, animatedPathSegList, animatedNormalizedPathSegList
  - Bindings no implementados: getTotalLength, getPointAtLength, getPathSegAtLength

- Interfaz SVGPathSegList

  - Bindings No implementados: replaceItem()

[rect](http://www.w3.org/TR/SVG11/shapes.html#RectElement)

- Implementado.

[circle](http://www.w3.org/TR/SVG11/shapes.html#CircleElement)

- Implementado.

[line](http://www.w3.org/TR/SVG11/shapes.html#LineElement)

- Implementado.

[ellipse](http://www.w3.org/TR/SVG11/shapes.html#EllipseElement)

- Implementado.

[polyline](http://www.w3.org/TR/SVG11/shapes.html#PolylineElement)

- Implementado.

[polygon](http://www.w3.org/TR/SVG11/shapes.html#PolygonElement)

- Implementado.

[text](http://www.w3.org/TR/SVG11/text.html#TextElement)

- Implementado.
- SVGTextElement

  - Atributos no implementados: rotate, textLength, lengthAdjust
  - Bindings no implementados: getNumberOfChars, getSubStringLength, getStartPositionOfChar, getEndPositionOfChar, getRotationOfChar, getCharNumAtPosition, selectSubString.
  - Bindings not functional at `onload` time: getExtentOfChar

[tspan](http://www.w3.org/TR/SVG11/text.html#TSpanElement)

- Implementado.
- SVGTSpanElement

  - Atributos no implementados: rotate, textLength, lengthAdjust
  - Bindings no implementados: getNumberOfChars, getComputedTextLength, getSubStringLength, getStartPositionOfChar, getEndPositionOfChar, getExtentOfChar, getRotationOfChar, getCharNumAtPosition, selectSubString

[tref](http://www.w3.org/TR/SVG11/text.html#TRefElement)

- No implementado.

[textPath](http://www.w3.org/TR/SVG11/text.html#TextPathElement)

- Implementado en Firefox 2.
- Atributos no implementados: method, spacing, textLength, lengthAdjust

[altGlyph](http://www.w3.org/TR/SVG11/text.html#AltGlyphElement)

- No implementado.

[altGlyphDef](http://www.w3.org/TR/SVG11/text.html#AltGlyphDefElement)

- No implementado.

[altGlyphItem](http://www.w3.org/TR/SVG11/text.html#AltGlyphItemElement)

- No implementado.

[glyphRef](http://www.w3.org/TR/SVG11/text.html#GlyphRefElement)

- No implementado.

[marker](http://www.w3.org/TR/SVG11/painting.html#MarkerElement)

- Implementado.

[color-profile](http://www.w3.org/TR/SVG11/color.html#ColorProfileElement)

- No implementado.

[linearGradient](http://www.w3.org/TR/SVG11/pservers.html#LinearGradientElement)

- Implementado.

[radialGradient](http://www.w3.org/TR/SVG11/pservers.html#RadialGradientElement)

- Implementado.

[stop](http://www.w3.org/TR/SVG11/pservers.html#StopElement)

- Implementado.

[pattern](http://www.w3.org/TR/SVG11/pservers.html#PatternElement)

- No implementado.

[clipPath](http://www.w3.org/TR/SVG11/masking.html#ClipPathElement)

- Implementado.
- No maneja los caminos de recorte que tiene elementos con diferentes propiedades de reglas de recorte o que referencian otros clipPaths. ([bug 267224](https://bugzilla.mozilla.org/show_bug.cgi?id=267224)).

[mask](http://www.w3.org/TR/SVG11/masking.html#MaskElement)

- No implementado.

[filter](http://www.w3.org/TR/SVG11/filters.html#FilterElement)

- No implementado.

[feBlend](http://www.w3.org/TR/SVG11/filters.html#feBlendElement)

- No implementado.

[feColorMatrix](http://www.w3.org/TR/SVG11/filters.html#feColorMatrixElement)

- No implementado.

[feComponentTransfer](http://www.w3.org/TR/SVG11/filters.html#feComponentTransferElement)

- No implementado.

[feComposite](http://www.w3.org/TR/SVG11/filters.html#feCompositeElement)

- No implementado.

[feConvolveMatrix](http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement)

- No implementado.

[feDiffuseLighting](http://www.w3.org/TR/SVG11/filters.html#feDiffuseLightingElement)

- No implementado.

[feDisplacementMap](http://www.w3.org/TR/SVG11/filters.html#feDisplacementMapElement)

- No implementado.

[feFlood](http://www.w3.org/TR/SVG11/filters.html#feFloodElement)

- No implementado.

[feGaussianBlur](http://www.w3.org/TR/SVG11/filters.html#feGaussianBlurElement)

- No implementado.

[feImage](http://www.w3.org/TR/SVG11/filters.html#feImageElement)

- No implementado.

[feMerge](http://www.w3.org/TR/SVG11/filters.html#feMergeElement)

- No implementado.

[feMergeNode](http://www.w3.org/TR/SVG11/filters.html#feMergeNodeElement)

- No implementado.

[feMorphology](http://www.w3.org/TR/SVG11/filters.html#feMorphologyElement)

- No implementado.

[feOffset](http://www.w3.org/TR/SVG11/filters.html#feOffsetElement)

- No implementado.

[feSpecularLighting](http://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement)

- No implementado.

[feTile](http://www.w3.org/TR/SVG11/filters.html#feTileElement)

- No implementado.

[feTurbulence](http://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement)

- No implementado.

[feDistantLight](http://www.w3.org/TR/SVG11/filters.html#feDistantLightElement)

- No implementado.

[fePointLight](http://www.w3.org/TR/SVG11/filters.html#fePointLightElement)

- No implementado.

[feSpotLight](http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement)

- No implementado.

[feFuncR](http://www.w3.org/TR/SVG11/filters.html#feFuncRElement)

- No implementado.

[feFuncG](http://www.w3.org/TR/SVG11/filters.html#feFuncGElement)

- No implementado.

[feFuncB](http://www.w3.org/TR/SVG11/filters.html#feFuncBElement)

- No implementado.

[feFuncA](http://www.w3.org/TR/SVG11/filters.html#feFuncAElement)

- No implementado.

[cursor](http://www.w3.org/TR/SVG11/interact.html#CursorElement)

- No implementado.

[a](http://www.w3.org/TR/SVG11/linking.html#AElement)

- Implementado como un binding XBL - object is not of type SVGAElement.
- Sólo están implementados los atributos `xlink:href`, `xlink:show` y `xlink:target` (en Firefox 2).

[view](http://www.w3.org/TR/SVG11/linking.html#ViewElement)

- No implementado.

[script](http://www.w3.org/TR/SVG11/script.html#ScriptElement)

- Implementado.

[animate](http://www.w3.org/TR/SVG11/animate.html#AnimateElement)

- No implementado.

[set](http://www.w3.org/TR/SVG11/animate.html#SetElement)

- No implementado.

[animateMotion](http://www.w3.org/TR/SVG11/animate.html#AnimateMotionElement)

- No implementado.

[animateTransform](http://www.w3.org/TR/SVG11/animate.html#AnimateTransformElement)

- No implementado.

[animateColor](http://www.w3.org/TR/SVG11/animate.html#AnimateColorElement)

- No implementado.

[mpath](http://www.w3.org/TR/SVG11/animate.html#mpathElement)

- No implementado.

[font](http://www.w3.org/TR/SVG11/fonts.html#FontFaceElement)

- No implementado.

[font-face](http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement)

- No implementado.

[glyph](http://www.w3.org/TR/SVG11/fonts.html#GlyphElement)

- No implementado.

[missing-glyph](http://www.w3.org/TR/SVG11/fonts.html#MissingGlyphElement)

- No implementado.

[hkern](http://www.w3.org/TR/SVG11/fonts.html#HKernElement)

- No implementado.

[vkern](http://www.w3.org/TR/SVG11/fonts.html#VKernElement)

- No implementado.

[font-face-src](http://www.w3.org/TR/SVG11/fonts.html#FontFaceSrcElement)

- No implementado.

[font-face-uri](http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement)

- No implementado.

[font-face-format](http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement)

- No implementado.

[font-face-name](http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement)

- No implementado.

[definition-src](http://www.w3.org/TR/SVG11/fonts.html#DefinitionSrcElement)

- No implementado.

[foreignObject](http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement)

- Implementado, aunque no integrado.
