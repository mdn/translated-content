---
title: Directrices para escribir ejemplos de código CSS
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: 4680281518d584657960f984b3b720d79b3119ab
---

{{MDNSidebar}}

Las siguientes directrices abordan cómo escribir ejemplos de código CSS para MDN Web Docs.

## Directrices generales para ejemplos de código CSS

### Elección de formato

Las opiniones sobre la correcta sangría, espacios en blanco y longitudes de líneas siempre han sido controvertidas. Las discusiones sobre estos temas son una distracción de la creación y mantenimiento del contenido.

En MDN Web Docs, utilizamos [Prettier](https://prettier.io/) como formateador de código para mantener consistente el estilo del código (y evitar discusiones fuera de tema). Puedes consultar nuestro [archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las reglas actuales y leer la [documentación de Prettier](https://prettier.io/docs/en/index.html).

Prettier formatea todo el código y mantiene el estilo consistente. Sin embargo, hay algunas reglas adicionales que debes seguir.

### Planifica tu CSS

Antes de sumergirte y escribir grandes fragmentos de CSS, planifica cuidadosamente tus estilos. ¿Qué estilos generales serán necesarios, qué diferentes diseños necesitas crear, qué anulaciones específicas deben crearse y son reutilizables? Sobre todo, debes tratar de **evitar demasiadas anulaciones**. Si te encuentras escribiendo estilos y luego cancelándolos unas reglas más abajo, probablemente necesites reconsiderar tu estrategia.

### Utiliza unidades flexibles/relativas

Para obtener la máxima flexibilidad en la mayor cantidad posible de dispositivos, es una buena idea dimensionar contenedores, rellenos, etc., utilizando unidades relativas como ems y rems o porcentajes y unidades de la ventana gráfica (viewport units) si deseas que varíen según el ancho de la ventana gráfica. Puedes obtener más información sobre esto en nuestra [guía de valores y unidades CSS](/es/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units).

### No uses preprocesadores

No utilices la sintaxis de preprocesadores, como [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) o [Stylus](https://stylus-lang.com/), en el código de ejemplo. En MDN Web Docs, documentamos el lenguaje CSS puro. El uso de preprocesadores solo dificultará la comprensión de los ejemplos, potencialmente confundiendo a los lectores.

### No uses metodologías CSS específicas

En el mismo espíritu que la guía anterior, no escribas códigos de ejemplo en MDN Web Docs utilizando una metodología CSS específica como [BEM](https://getbem.com/naming/) o [SMACSS](https://smacss.com/). Aunque son sintaxis CSS válidas, las convenciones de nombres pueden resultar confusas para personas que no están familiarizadas con esas metodologías.

### No uses reinicios (resets)

Para tener un control máximo sobre CSS en todas las plataformas, mucha gente solía utilizar reinicios de CSS para eliminar todos los estilos y luego construir las cosas nuevamente. Esto ciertamente tiene sus méritos, pero especialmente en el mundo moderno, los reinicios de CSS pueden ser excesivos, resultando en un gasto de tiempo adicional reimplementando cosas que no estaban completamente rotas en primer lugar, como los márgenes predeterminados, estilos de lista, etc.

Si realmente sientes que necesitas utilizar un reinicio, considera usar [normalize.css de Nicolas Gallagher](https://necolas.github.io/normalize.css/), que tiene como objetivo hacer que las cosas sean más consistentes en todos los navegadores, eliminar algunas molestias predeterminadas que siempre eliminamos (los márgenes en `<body>`, por ejemplo) y corregir algunos errores.

## !important

`!important` es el último recurso que generalmente se utiliza solo cuando necesitas anular algo y no hay otra manera de hacerlo. Usar `!important` es una mala práctica y debes evitarlo siempre que sea posible.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## Comentarios CSS

Utiliza comentarios en estilo CSS para comentar código que no se autodocumenta. También ten en cuenta que debes dejar un espacio entre los asteriscos y el comentario.

```css example-good
/* Este es un comentario en estilo CSS */
```

Coloca tus comentarios en líneas separadas antes del código al que hacen referencia, de la siguiente manera:

```css example-good
h3 {
  /* Crea una sombra roja con desplazamiento de 1px a la derecha y hacia abajo, con un radio de desenfoque de 2px */
  text-shadow: 1px 1px 2px red;
  /* Establece el tamaño de fuente al doble del tamaño de fuente predeterminado del documento */
  font-size: 2rem;
}
```

## Comillas dobles alrededor de los valores

Cuando se puedan o deban incluir comillas, utilízalas y utiliza comillas dobles. Por ejemplo:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## Reglas detalladas vs. reglas abreviadas

Por lo general, al enseñar los detalles de la sintaxis de CSS, es más claro y evidente usar propiedades detalladas en lugar de abreviaturas (a menos que, por supuesto, estés explicando la abreviatura mediante el ejemplo). Recuerda que el objetivo de los ejemplos en MDN Web Docs es enseñar a las personas, no ser ingenioso o eficiente. Aquí explicamos por qué se recomienda escribir con reglas detalladas.

- A menudo es más difícil entender lo que hace la regla abreviada. En el ejemplo siguiente, lleva un tiempo analizar exactamente qué está haciendo la sintaxis de {{cssxref("font")}}.

  ```css example-good
  font: small-caps bold 2rem/1.5 sans-serif;
  ```

  Mientras que el siguiente estilo es más claro:

  ```css
  font-variant: small-caps;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.5;
  font-family: sans-serif;
  ```

- Las abreviaturas CSS pueden tener posibles inconvenientes adicionales: se establecen valores predeterminados para partes de la sintaxis que no estableces explícitamente, lo que puede producir reinicios inesperados de valores que has establecido anteriormente en la cascada u otros efectos esperados. La propiedad {{cssxref("grid")}}, por ejemplo, establece todos los siguientes valores predeterminados para los elementos que no se especifican:

  - {{cssxref("grid-template-rows")}}: `none`
  - {{cssxref("grid-template-columns")}}: `none`
  - {{cssxref("grid-template-areas")}}: `none`
  - {{cssxref("grid-auto-rows")}}: `auto`
  - {{cssxref("grid-auto-columns")}}: `auto`
  - {{cssxref("grid-auto-flow")}}: `row`
  - {{cssxref("column-gap")}}: `0`
  - {{cssxref("row-gap")}}: `0`
  - {{cssxref("column-gap")}}: `normal`
  - {{cssxref("row-gap")}}: `normal`

- Algunas abreviaturas solo funcionan como se espera si incluyes los diferentes componentes de valor en un orden específico. Este es el caso en las animaciones CSS. En el siguiente ejemplo, el orden esperado se indica como un comentario:

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slidein;
  ```

En este ejemplo, el primer valor que se puede analizar como un [`<time>`](/es/docs/Web/CSS/time) se asigna a la propiedad [`animation-duration`](/es/docs/Web/CSS/animation-duration), y el segundo valor que se puede analizar como tiempo se asigna a [`animation-delay`](/es/docs/Web/CSS/animation-delay). (Para obtener más información, consulta los detalles de la [sintaxis de animación](/es/docs/Web/CSS/animation#syntax).)

## Media queries centradas en móviles

En una hoja de estilo que contiene estilos de [_media queries_](/es/docs/Web/CSS/CSS_media_queries/Using_media_queries) para diferentes tamaños de ventana gráfica de dispositivos, primero incluye el estilo para pantallas estrechas/móviles antes de encontrar cualquier otra _media query_. Agrega estilos para tamaños de ventana gráfica más amplios mediante _media queries_ sucesivas. Seguir esta regla tiene muchas ventajas que se explican en el artículo de [Diseño responsivo](/es/docs/Learn/CSS/CSS_layout/Responsive_Design).

```css example-good
/* Diseño CSS predeterminado para pantallas estrechas */

@media (min-width: 480px) {
  /* CSS para pantallas de ancho medio */
}

@media (min-width: 800px) {
  /* CSS para pantallas anchas */
}

@media (min-width: 1100px) {
  /* CSS para pantallas realmente anchas */
}
```

## Selectores

- No uses selectores de ID porque:

  - Son menos flexibles; no puedes agregar más si descubres que necesitas más de uno.
  - Son más difíciles de anular porque tienen una especificidad mayor que las clases.

  ```css example-good
  .editorial-summary {
    /* ... */
  }
  ```

  ```css example-bad
  #editorial-summary {
    /* ... */
  }
  ```

## Valor para desactivar propiedades

Cuando desactives bordes (y cualquier otra propiedad que pueda tomar `0` o `none` como valores), utiliza `0` en lugar de `none`:

```css example-good
border: 0;
```

## Véase también

[Índice de referencia de CSS](/es/docs/Web/CSS/Reference#index) - navega por nuestras páginas de referencia de propiedades CSS para ver algunos fragmentos de CSS buenos, concisos y significativos. Nuestros ejemplos interactivos en la sección "Pruébalo" suelen estar escritos siguiendo las pautas descritas en esta página.
