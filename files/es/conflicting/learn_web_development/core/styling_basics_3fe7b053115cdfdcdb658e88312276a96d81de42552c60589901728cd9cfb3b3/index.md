---
title: "Desafío: Una caja con aspecto genial"
slug: conflicting/Learn_web_development/Core/Styling_basics_3fe7b053115cdfdcdb658e88312276a96d81de42552c60589901728cd9cfb3b3
original_slug: Learn_web_development/Core/Styling_basics/Cool-looking_box
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

En esta evaluación, practicarás más la creación de cajas con un aspecto genial intentando crear una caja llamativa.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Antes de intentar esta evaluación, debes haber trabajado en todos los
        artículos de este módulo.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Probar la comprensión del modelo de caja CSS y otras características
        relacionadas con las cajas, como bordes y fondos.
      </td>
    </tr>
  </tbody>
</table>

## Punto de partida

Para comenzar esta evaluación, debes:

- Guardar el HTML y el CSS que se muestran a continuación como dos archivos separados: `index.html` y `style.css`, en un nuevo directorio.

### HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Caja genial</title>
    <!-- tu enlace css va aquí -->
  </head>
  <body>
    <div>Esta es una caja genial</div>
  </body>
</html>
```

### CSS

```css
html {
  font-family: sans-serif;
}

/* Tu CSS aquí abajo */
```

Alternativamente, podrías usar un editor en línea como [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) o [Glitch](https://glitch.com/).
Podrías pegar el HTML y completar el CSS en uno de estos editores en línea.

> [!NOTE]
> Si te quedas atascado, puedes comunicarte con nosotros en uno de nuestros [canales de comunicación](/es/docs/MDN/Community/Communication_channels).

## Resumen del proyecto

Tu tarea es crear una caja genial y elegante y explorar la diversión que podemos tener con CSS.

### Tareas generales

- Aplica el CSS al HTML.

### Dar estilo a la caja

Nos gustaría que le dieras estilo al {{htmlelement("div")}} proporcionado, dándole lo siguiente:

- Un ancho razonable para una caja grande, digamos alrededor de 200 píxeles.
- Una altura razonable para una caja grande, centrando el texto verticalmente en el proceso.
- Centra la caja horizontalmente.
- Centra el texto dentro de la caja.
- Un ligero aumento en el tamaño de la fuente, a alrededor de 17-18 píxeles de estilo calculado. Usa rems. Escribe un comentario sobre cómo calculaste el valor.
- Un color base para el diseño. Dale a la caja este color como su color de fondo.
- Un color contrastante para el texto y una sombra de texto negra.
- Un radio de borde bastante sutil.
- Un borde sólido de 1 píxel con un color similar al color base, pero con un tono ligeramente más oscuro.
- Un gradiente negro lineal semitransparente que se dirige hacia la esquina inferior derecha. Haz que sea completamente transparente al principio, graduando a alrededor de 0.2 de opacidad en un 30% a lo largo y permaneciendo en el mismo color hasta el final.
- Múltiples sombras de caja. Dale una sombra de caja estándar para que la caja parezca ligeramente levantada de la página. Las otras dos deben ser sombras de caja incrustadas: una sombra blanca semitransparente cerca de la parte superior izquierda y una sombra negra semitransparente cerca de la parte inferior derecha, para agregar al buen aspecto 3D elevado de la caja.

## Pistas y consejos

- Utiliza el [Validador CSS de W3C](https://jigsaw.w3.org/css-validator/) para detectar y corregir errores en tu CSS.

## Ejemplo

La siguiente captura de pantalla muestra un ejemplo de cómo podría verse el diseño terminado:

![Una gran caja roja con esquinas redondeadas. Un texto blanco con sombra paralela dice 'esta es una caja genial'.](fancy-box2.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
