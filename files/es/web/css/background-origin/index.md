---
title: background-origin
slug: Web/CSS/background-origin
---

## Resumen

La propiedad background-origin especifica el área de origen de un fondo o imagen en determinada caja. para que la propiedad [background-position](/es/CSS/background-position) calcule la posición de inicio de un fondo o imagen definida por la propiedad [background-image](/es/CSS/background-image).

- Valor inicial: padding-box
- Aplica a: Todos los elementos
- Heredado: No
- Porcentajes: n/a
- Media: Visual
- Valor computado: Mismo que valor especificado.
- Animación: No

## Sintaxis

```
background-origin:[padding-box | border-box | content-box][, [border-box | padding-box | content-box]]*
```

## Valores

- border-box
  - : El fondo se extiende al borde exterior (por debajo del borde en el orden z), la posición es relativa al borde de la caja.
- padding-box
  - : El fondo se extiende al borde exterior del padding, la posición es relativa al padding de la caja.
- content-box
  - : El fondo se extiende dentro del (recortado al) contenido de la caja, la posición es relativa al contenido de la caja.

## Ejemplos

```
div{
  border:4px dotted #FBE700;
  background:url('imagen.jpg');
  background-position:0 0;
  background-origin:border-box;
}
```

```
div{
  background-image: url('image1.jpg'), url('image2.jpg');
  background-position: 0 0, bottom left;
  background-origin: padding-box, content-box;
}
```

## Notas

- La propiedad background-origin es ignorada si la propiedad background-attachment tiene un valor de fixed.
- Si el valor de esta propiedad no es establecido en la propiedad abreviada (shorthand) [background](/es/CSS/background) que es aplicada a el elemento despues de la propiedad background-origin, el valor de esta propiedad sera restablecido a su valor inicial por la propiedad abreviada background.

## Compatibilidad de navegadores

| Feature        | Chrome | Firefox (Gecko) | Internet Explorer | Opera | Safari    |
| -------------- | ------ | --------------- | ----------------- | ----- | --------- |
| Soporte básico | 1.0    | 4.0 (2.0)       | 9.0               | 10.5  | 3.0 (522) |

## Especificaciones

- [Css fondos y bordes modulo nivel 3](http://dev.w3.org/csswg/css3-background/#the-background-origin)(candidato a recomendación]

## Relacionado

[background](/es/CSS/background), [background-attachment](/es/CSS/background-attachment)[, background-image](/es/CSS/background-image),[background-repeat](/es/CSS/background-repeat)
