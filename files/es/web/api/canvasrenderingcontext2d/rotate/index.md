---
title: CanvasRenderingContext2D.rotate()
slug: Web/API/CanvasRenderingContext2D/rotate
---

{{APIRef}}

El método **`CanvasRenderingContext2D.rotate()`** de la API Canvas 2D añade una rotación a la matriz de transformación.

## Sintaxis

```
void ctx.rotate(angulo);
```

![](canvas_grid_rotate.png)

### Parámetros

- `angulo`
  - : El ángulo de rotación en radianes, en sentido horario. Se puede usar _`grado`_`* Math.PI / 180` si se quiere calcular a partir de un valor de grado sexagesimal.

El centro de rotación es siempre el orígen del canvas. Para cambiar el centro de rotación hay que mover el canvas mediante el método {{domxref("CanvasRenderingContext2D.translate", "translate()")}}.

## Ejemplos

### Rotando una figura

En este ejemplo se rota un rectangulo 45º. Nótese que el centro de rotación es la esquina superior izquierda del canvas y no un punto cualquiera relativo a alguna figura.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// origen del punto de transformación
ctx.arc(0, 0, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

// rectángulo sin rotar
ctx.fillStyle = "gray";
ctx.fillRect(100, 0, 80, 20);

// rectángulo rotado 45º
ctx.rotate((45 * Math.PI) / 180);
ctx.fillStyle = "red";
ctx.fillRect(100, 0, 80, 20);

// se reinicia la matriz de transformación a la matriz identidad
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

#### Resultado

El centro de rotación es azul. El rectángulo no rotado es gris, y el rectángulo rotado es rojo.

{{ EmbedLiveSample('Rotating_a_shape', 700, 180) }}

### Rotando una figura por su centro

Este ejemplo rota una figura alrededor del punto central de ésta. Para realizarlo se aplican estos pasos a la matriz de transformación:

1. Primero, {{domxref("CanvasRenderingContext2D.translate()", "translate()")}} mueve el orígen de la matriz hacia el centro de la figura.
2. `rotate()` rota la matriz la cantidad deseada.
3. Finalmente, `translate()` mueve el origen de la matriz de nuevo a su punto inicial. Esto se realiza utilizando los valores del centro de coordenadas de la figura en dirección negativa.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

La figura es un rectángulo con su esquina en (80, 60), un ancho de 140 y un alto de 30. El centro de la coordenada horizontal está en (80 + 140 / 2) = 150. Su centro en la coordenada vertical será (60 + 30 / 2) = 75. Por tanto, el punto central está en (150, 75).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// rectángulo sin rotar
ctx.fillStyle = "gray";
ctx.fillRect(80, 60, 140, 30);

// Matriz de transformación
ctx.translate(150, 75);
ctx.rotate(Math.PI / 2);
ctx.translate(-150, -75);

// rectángulo rotado
ctx.fillStyle = "red";
ctx.fillRect(80, 60, 140, 30);
```

#### Resultado

El rectángulo no rotado es gris, y el rectángulo rotado es rojo.

{{ EmbedLiveSample('Rotating_a_shape_around_its_center', 700, 180) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La interface donde se define este método: {{domxref("CanvasRenderingContext2D")}}
