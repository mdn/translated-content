---
title: Dibujar texto usando canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_text
---

El elemento [`<canvas>`](/es/HTML/Canvas) permite dibujar texto en él a través de una API experimental de Mozilla.

### API

```
attribute DOMString mozTextStyle;
void mozDrawText(in DOMString textToDraw);
float mozMeasureText(in DOMString textToMeasure);
void mozPathText(in DOMString textToPath);
void mozTextAlongPath(in DOMString textToDraw, in boolean stroke);
```

### Notas

- El tipo de letra predeterminado es sans-serif 12pt.
- Estas extensiones de texto no están aún estandarizadas por WHATWG.
- No necesitas un contexto especial para usarlas; el contexto 2D funciona bien.
- Todos los dibujos se realizan usando la transformación actual.
- Revisa el [Error 339553 en Firefox](https://bugzil.la/339553) si quieres leer más sobre las implementaciones específicas.

### Demostraciones

Mira algunos ejemplos [aquí](https://bugzilla.mozilla.org/attachment.cgi?id=273497), [aquí](https://bugzilla.mozilla.org/attachment.cgi?id=273498), y [aquí](https://bugzilla.mozilla.org/attachment.cgi?id=273499).

### Cambiar el tipo de letra actual

El atributo `mozTextStyle` contiene el estilo de texto actual. Usa la misma sintaxis que el especificado para las [tipografías CSS](/es/CSS/font).

Ej:

```
ctx.mozTextStyle = "20pt Arial"
```

### Dibujar texto

Dibujar es muy sencillo. `mozDrawText` usa el estilo de texto actual, cualquiera que sea éste. Se usa el color de relleno del contexto como color del texto.

```
ctx.translate(10, 50);
ctx.fillStyle = "Red";
ctx.mozDrawText("Sample String");
```

### Medir texto

A veces es útil saber qué tan ancho es un trozo de texto en particular (para centrarlo en una ventana, por ejemplo).

```
var text = "Sample String";
var width = ctx.canvas.width;
var len = ctx.mozMeasureText(text);
ctx.translate(len/2, 0);
ctx.mozDrawText(text);
```

### Interacción texto/trazo

Si quieres tachar un texto, `mozDrawText` no te lo permite. En cambio, `mozPathText` agrega el tachado de texto al trazo actual.

```
ctx.fillStyle = "green";
ctx.strokeStyle = "black";
ctx.mozPathText("Sample String");
ctx.fill()
ctx.stroke()
```

Supongamos ahora que quieres agregar un texto que se acomode a un trazo que dibujaste (una línea curva o algo parecido) es donde aparece `mozTextAlongPath`. Al contrario de otras funciones de texto, `mozTextAlongPath` necesita dos argumentos: el texto y qué se quiere hacer con él. `mozTextAlongPath` aproxima el trazo actual como una serie de segmentos de línea y ubica cada carácter encima de ese trazo. Los caracteres no son cambiados de tamaño o transformados de acuerdo a la curvatura de la base; toman la orientación del trazo a la mitad del carácter.

Una vez que `mozTextAlongPath` sabe dónde está el carácter, busca el segundo parámetro para decidir qué hacer con él. Si el segundo parámetro es `false`, entonces dibuja el carácter como lo haría `mozDrawText`. Si es `true`, agrega el carácter al trazo actual, como lo hace `mozPathText`. Esto puede usarse para crear efectos únicos.
