---
title: Uso de CSS transforms
slug: Web/CSS/CSS_transforms/Using_CSS_transforms
---

{{CSSRef}}

Al modificar las coordenadas del espacio, las transformaciones CSS permiten cambiar la posición del contenido afectado sin interrumpir el flujo normal. Se implementan haciendo uso de un conjunto de propiedades CSS que permiten aplicar transformaciones lineales a elementos HTML. Estas transformaciones incluyen rotar, torcer, escalar y desplazar en plano o en un espacio 3D.

## Propiedades de las transformaciones CSS

Se usan dos propiedades principalmente para definir las transformaciones CSS: {{ cssxref("transform") }} y {{ cssxref("transform-origin") }}

- {{ cssxref("transform-origin") }}
  - : Especifica la posición de origen que se usará para la transformación. Por defecto es el lado superior izquierdo del elemento. Esta posición es usada por varias transformaciones como rotar, escalar o torcer ya que necesitan de este punto especifico como parámetro.
- {{ cssxref("transform") }}
  - : Especifica la transformación a realizar sobre el elemento. Se define como una lista separada por espacios de transformaciones que se aplican en orden una después de la otra, tal y como es requerido por la operación de composición.

## Ejemplos

Esta es una imagen inalterada del logo de MDN:

![MDN Logo](logo.png)

### Ejemplo: Rotando

Aquí está el logo MDN en un iframe rotado 90 grados desde su esquina inferior izquierda.

```html
<img
  style="transform: rotate(90deg);
            transform-origin: bottom left;"
  src="logo.png" />
```

{{EmbedLiveSample('', 'auto', 240)}}

### Ejemplo: Torciendo y desplazando

Aquí está el logo MDN torcido 10 grados y desplazado 150 pixels en el eje X.

```html
<img
  style="transform: skewx(10deg) translatex(150px);
            transform-origin: bottom left;"
  src="logo.png" />
```

{{EmbedLiveSample('', '', '')}}

## Propiedades CSS específicas para 3D

Realizar cambios en las propiedades CSS en el espacio tridemensional es un poco más complejo. Debes empezar configurando el espacio 3D dándole una perspectiva, a continuación debes configurar cómo interactuarán los elementos 2D en dicho espacio.

### Definiendo una perspectiva

El primer elemento a definir es la _perspectiva_. La perspectiva es lo que nos da la sensación de 3D. Cuanto más lejanos estén los elementos del espectador, más pequeños serán.

Definímos como de rápido se encogen con la propiedad {{ cssxref("perspective") }}. Cuánto más pequeño sea el valor, más profunda será la perspectiva.

| `perspective:0;` | `perspective:250px;` |        |        |
| ---------------- | -------------------- | ------ | ------ |
| 123456           | 123456               | 123456 | 123456 |

El segundo elemento a configurar es la posición del espectador, con la propiedad {{ cssxref("perspective-origin") }}. Por defecto, la perspectiva está centrada en el espectador, pero no siempre es lo adecuado.

| `perspective-origin:150px 150px;` | `perspective-origin:50% 50%;` | `perspective-origin:-50px -50px;` |
| --------------------------------- | ----------------------------- | --------------------------------- |
| 123456                            | 123456                        | 123456                            |

Una vez has hecho esto, ya puedes trabajar con los elementos en el espacio 3D.

### 2D elements in the 3D space

## See also

- [Using deviceorientation in 3D Transforms](/en/Using_Deviceorientation_In_3D_Transforms)
