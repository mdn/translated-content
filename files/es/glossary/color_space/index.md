---
title: Espacio de color
slug: Glossary/Color_space
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

Los **espacios de color** son sistemas con nombre que organizan los colores a partir de modelos de color con disposiciones basadas en coordenadas. Un modelo de color define cómo se relacionan los componentes de un color (por ejemplo, los canales `h`, `w` y `b` de un color {{cssxref("color_value/hwb")}}) con un espacio de color. La mayoría de los espacios de color son cuadrículas de tres o cuatro dimensiones que representan colores. Cada dimensión (o eje) corresponde a un canal diferente. Los colores se pueden expresar en varios espacios de color y transformarse de uno a otro sin que su apariencia cambie.

Los espacios de color categorizan y definen rangos específicos de colores. Cada espacio de color se define mediante un modelo matemático y un conjunto de reglas asociado. Cada espacio de color tiene una {{glossary("Gamut", "gama")}} definida, que se refiere al rango específico de colores que puede representar. Estas reglas permiten una representación del color consistente y reproducible en distintos dispositivos y programas.

El espacio de color _sRGB_ (rojo, verde y azul estándar) se creó para la web, pero ya no estamos limitados a este espacio de color. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) especifica varios espacios de color predefinidos, y [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) va más allá, y especifica funciones para definir espacios de color personalizados.

## Espacios de color con nombre

Los [espacios de color RGB](#espacios_de_color_rgb) predefinidos incluyen `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb` y `rec2020`. Los [espacios de color CIELAB](#espacios_de_color_cielab) predefinidos incluyen `lab-d50` y `lab-d65`. Los [espacios de color XYZ](#espacios_de_color_xyz) predefinidos incluyen `xyz-d50` y `xyz-d65` (y `xyz`, un alias de `xyz-d65`).

Los espacios de color pueden ser [rectangulares o polares](https://ericportis.com/posts/2024/okay-color-spaces/). Entre los espacios de color rectangulares están `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50` y `xyz-d65` (o `xyz`). Los espacios de color polares incluyen `hsl`, `hwb`, `lch` y `oklch`.

### Espacios de color RGB

RGB es un modelo de color que representa los colores como mezclas de tres componentes subyacentes (los canales rojo, verde y azul) que, al combinarse, generan distintos tonos. El sRGB, o "RGB estándar", es el espacio de color subyacente para los colores {{Glossary("RGB")}}. El sRGB tiene como objetivo codificar la especificación de pantalla de los sistemas de generación de imágenes basados en PC y en la {{glossary("world wide web", "Web")}}. Actualmente suele ser el espacio de color que se asume por defecto para las imágenes sin perfil de color etiquetado o incrustado.

Hay varios espacios de color RGB, como el espacio de color _Adobe RGB_, capaces de representar una {{glossary("gamut", "gama")}} de color más amplia que el espacio de color _sRGB_. Las coordenadas en _sRGB_ y en _Adobe RGB_ (`a98-rgb`) son diferentes. Existen muchas formas de describir los componentes RGB de un color. En {{Glossary("CSS")}} se pueden representar como un único entero de 24 bits en notación hexadecimal (por ejemplo, `#add8e6` es azul claro), o en notación funcional {{cssxref("color_value/rgb")}} como tres números independientes entre 0 y 255 (por ejemplo, `rgb(46 139.5 87)`).

Los valores CSS `<color>` en los espacios de color sRGB incluyen {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (tono, saturación, luminosidad) y {{cssxref("color_value/hwb", "hwb()")}} (tono, blancura, negrura). También están los espacios de color `srgb`, `srgb-linear`, `a98-rgb` y `prophoto-rgb`, disponibles para la función {{cssxref("color_value/color")}}.

El espacio de color HSV (tono, saturación y valor), y su sinónimo HSB (tono, saturación y brillo), se representan en CSS como {{cssxref("color_value/hwb")}}. Los colores con nombre son simplemente palabras clave asignadas a valores hexadecimales específicos. Convertir estas distintas notaciones de color a sRGB es matemáticamente sencillo. Ten en cuenta que {{cssxref("&lt;color&gt;","currentColor","#palabra_clave_currentcolor")}} puede ser cualquier color: no está restringido a sRGB.

La función de color `rgb()` no es la única función de color que puede representar el espacio de color _sRGB_. Los sistemas de coordenadas cilíndricas, como los modelos de color [`HSL`](/es/docs/Web/CSS/Reference/Values/color_value/hsl) (_tono-saturación-luminosidad_) o [`HWB`](/es/docs/Web/CSS/Reference/Values/color_value/hwb) (_tono-claridad-oscuridad_), también se usan para representar un color sRGB en la web.

- Espacio de color `srgb`
  - : El espacio de color sRGB, o "RGB estándar", es el espacio de color RGB (rojo, verde, azul) estándar. Se creó para usarse en monitores, impresoras y la Web. Es el espacio de color más utilizado y es compatible con la mayoría de los sistemas operativos, programas, monitores e impresoras. El sRGB se basa en `r`, `g` y `b`, con valores dentro de la gama que van de `0` a `1`. El punto blanco es D65.

- Espacio de color `srgb-linear`
  - : El espacio de color predefinido de luz lineal sRGB, `srgb-linear`, es igual que `srgb`, excepto que su función de transferencia es de luz lineal, sin codificación gamma. El espacio de color `srgb-linear` acepta los tres valores `r`, `g` y `b` como parámetros numéricos, con colores dentro de la gama que van de `0` a `1`. El punto blanco es D65.

- Espacio de color `display-p3`
  - : Definido por Apple, el espacio de color [**Display P3**](https://registry.color.org/rgb-registry/displayp3) combina la gama de color DCI-P3, el punto blanco D65 y la curva gamma de sRGB. Es un espacio de gama amplia, típico de los monitores actuales de gama amplia, que permite verdes y rojos más vivos que la gama de color sRGB. El espacio `display-p3` se basa en los canales `r`, `g` y `b`, con valores dentro de la gama que van de `0` a `1`. El punto blanco es D65.

- Espacio de color `display-p3-linear`
  - : El espacio de color predefinido `display-p3-linear` es similar a `display-p3`, salvo que usa una función de transferencia de luz lineal y no tiene codificación gamma, lo que permite una mayor precisión en los colores mostrados. El espacio `display-p3-linear` se basa en los canales `r`, `g` y `b`, con valores dentro de la gama que van de `0` a `1`. El punto blanco es D65.

- Espacio de color `a98-rgb`
  - : `a98-rgb` es el espacio de color Adobe® RGB de 1998, diseñado para representar todos los colores CMYK como RGB. Permite lograr alrededor del 50 % de los colores visibles especificados por el [espacio de color CIELab](#espacios_de_color_cielab), abarcando más matices cian-verde que otros espacios de color RGB. Los valores `r`, `g` y `b` dentro de la gama van de `0` a `1`. La curva de transferencia es una función gamma cercana a 1/2.2, aunque no exactamente. El punto blanco es D65.

- `prophoto-rgb`
  - : Desarrollado por Kodak, el espacio de color `prophoto-rgb` puede representar todos los colores que probablemente aparezcan en la naturaleza y alrededor del 90 % de los colores [CIELab](#espacios_de_color_cielab). Los valores `r`, `g` y `b` dentro de la gama van de `0` a `1`. La curva de transferencia es una función gamma con un valor de 1/1.8, con una pequeña porción lineal cerca del negro. El punto blanco es D50, el mismo que usa CIELab.

- `rec2020`
  - : `rec2020` es un estándar de la industria de la radiodifusión para televisores de ultra alta definición 4K y 8K. Este espacio de gama ultra amplia es capaz de representar casi todos los colores visibles del mundo real, superando las capacidades de la mayoría de las pantallas actuales. Se espera que su cobertura aumente con el tiempo a medida que mejoren las pantallas. Los valores `r`, `g` y `b` dentro de la gama van de `0` a `1`. El punto blanco es D65.

> [!NOTE]
> Entre los espacios RGB cilíndricos adicionales que no están en la especificación de CSS se incluyen: `HSI` (tono, saturación e intensidad), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` y `Cubehelix`.

### Espacios de color CIELAB

El espacio de color CIELAB (o CIELab), también conocido como L\*a\*b* (o Lab* de forma abreviada), representa todo el rango de color que el ojo humano puede percibir. Este espacio de color fue definido por la Comisión Internacional de Iluminación (CIE). Expresa el color mediante tres valores: L\* para la luminosidad perceptual, y a\* y b\* para los cuatro colores únicos de la visión humana: rojo, verde, azul y amarillo.

Lab es un sistema de coordenadas rectangular, con un eje central de luminosidad `L`. Los valores positivos del eje `a` corresponden a un rojo violáceo, mientras que los valores negativos son su complementario: el verde. Los valores positivos del eje `b` corresponden al amarillo y los negativos al azul/violeta. Los colores desaturados tienen valores pequeños de `a` y `b`; cuanto mayor es el valor absoluto, más saturado es el color.

Las funciones de color CIELab incluyen {{CSSXref("color_value/lab", "lab()")}} (luminosidad, eje a, eje b) y {{CSSXref("color_value/lch", "lch()")}} (luminosidad, croma, tono), así como {{CSSXref("color_value/oklab", "oklab()")}} y {{CSSXref("color_value/oklch", "oklch()")}}. Los valores de luminosidad son los mismos, pero `lch()` y `oklch` son sistemas de coordenadas polares y cilíndricas que usan las coordenadas polares `C` (croma) y `H` (tono) en lugar de ejes.

> [!NOTE]
> El tono y la luminosidad en `lch()` y `oklch` son distintos de los valores con el mismo nombre en {{cssxref("color_value/hsl", "hsl()")}} o en otros espacios de color sRGB.

Los espacios de color CIELab, entre ellos Lab, LCH, Oklab y OkLCh, son espacios de color independientes del dispositivo.

- Espacio de color `lab-d50`
  - : Expresa el color mediante `L`, en un rango de `0` a `100`, y `a` y `b`, con un rango de `-125` a `125`. Los ejes `a` y `b` no están limitados por estos valores de rango, que se usan como referencia para definir las entradas y salidas en porcentaje en relación con el espacio de color `Display P3`. El punto blanco es D50.

- Espacio de color `lab-d65`
  - : Este espacio de color es igual que `lab-d50`, salvo que el punto blanco es D65.

- Espacio de color `oklab`
  - : Similar a `lab-d65`, pero el rango de `L` es de `0` a `1`, y `a` y `b` van de `-0.4` a `0.4`.

### Espacios de color XYZ

Aunque las combinaciones de rojo, verde y azul funcionan bien para representar colores en pantalla, el sRGB no se corresponde directamente con la forma en que el ojo humano percibe el color. Creado por la Comisión Internacional de Iluminación (CIE) en 1931, los espacios de color CIE 1931 XYZ (o XYZ, de forma abreviada) establecen los primeros vínculos cuantitativos definidos entre las distribuciones de longitudes de onda del espectro visible electromagnético y los colores percibidos por la visión humana.

Las personas con visión normal tienen tres tipos de células cónicas que detectan la luz, cada una con un pico de sensibilidad espectral en una longitud de onda diferente. Los parámetros X, Y y Z del CIE corresponden a los niveles de estímulo de los tres tipos de células cónicas que, en principio, describen todos los colores visibles. El canal `Y` representa la luminancia de un color. El canal `Z` refleja la cantidad de azul en el color, pero no es lo mismo que la `B` de RGB. El eje `X` es ortogonal a los ejes Y y Z del sistema de coordenadas tridimensional XYZ.

- Espacio de color `xyz` y `xyz-d65`
  - : El identificador `xyz` es un sinónimo del espacio de color `xyz-d65`. Los ejes no están limitados a un rango de `0` a `1`, ya que el espacio de color no está sujeto a ese rango; estos valores solo se usan como puntos de referencia para definir las entradas y salidas en porcentaje. El punto blanco es D65.

- Espacio de color `xyz-d50`
  - : `xyz-d50` es igual que `xyz-d65`, salvo que usa D50 como punto blanco.

## Véase también

- Función `@media` {{cssxref("@media/color-gamut")}}
- Tipo de dato CSS {{cssxref("&lt;color&gt;")}}
- [Espacio de color sRGB](https://webstore.iec.ch/en/publication/6168)
- [Espacio de color CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) en Wikipedia
- [Espacio de color CIE 1931](https://en.wikipedia.org/wiki/CIE_1931_color_space) en Wikipedia
- [Espacio de color Oklab](https://bottosson.github.io/posts/oklab/)
