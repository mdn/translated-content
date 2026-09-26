---
title: Generador de box-shadow
slug: Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

Esta herramienta te permite construir efectos de {{cssxref("box-shadow")}} de CSS para añadir sombras de caja a tus objetos CSS.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 1000)}}

El generador de box-shadow te permite añadir una o más sombras de caja a un elemento.

Al abrir la herramienta, verás un rectángulo en la parte superior derecha. Ese es el elemento al que vas a aplicar las sombras. Cuando este elemento está seleccionado (como lo está al cargar la página por primera vez), puedes aplicarle algunos estilos básicos:

- Establece el {{cssxref("color")}} del elemento con el selector de color.
- Dale al elemento un {{cssxref("border")}} con la casilla "border".
- Usa los controles deslizantes para establecer las propiedades {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}} y {{cssxref("height")}} del elemento.

Para añadir una sombra de caja, haz clic en el botón "+" de la parte superior izquierda. Esto añade una sombra y la muestra en la columna de la izquierda. Ahora puedes establecer los valores de la nueva sombra:

- Establece el {{cssxref("color")}} de la sombra con el selector de color.
- Haz que la sombra sea interior con la casilla "inset".
- Usa los controles deslizantes para establecer la posición, el desenfoque y la extensión del elemento.

Para añadir otra sombra, vuelve a hacer clic en "+". Ahora, los valores que establezcas se aplicarán a esta nueva sombra. Cambia el orden en que se aplican las dos sombras con los botones ↑ y ↓ de la parte superior izquierda. Vuelve a seleccionar la primera sombra haciendo clic en ella en la columna de la izquierda. Para actualizar los estilos del propio elemento, selecciónalo haciendo clic en el botón "element" de la parte superior.

Puedes añadir los pseudoelementos {{cssxref("::before")}} y {{cssxref("::after")}} al elemento y darles también sombras de caja. Para cambiar entre el elemento y sus pseudoelementos, usa los botones "element", "::before" y "::after" de la parte superior.

El recuadro de la parte inferior derecha contiene el CSS del elemento y de los pseudoelementos `::before` o `::after` que haya.

## Véase también

- Otras herramientas:
  - [Generador de border-image](/es/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Generador de border-radius](/es/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
- Módulo de [fondos y bordes CSS](/es/docs/Web/CSS/Guides/Backgrounds_and_borders)
