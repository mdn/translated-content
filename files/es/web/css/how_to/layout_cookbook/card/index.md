---
title: Tarjeta
slug: Web/CSS/How_to/Layout_cookbook/Card
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Este patrón es una lista de componentes de "tarjeta" con pies opcionales. Una tarjeta contiene un título, una imagen, una descripción u otro contenido, y una atribución o pie. Las tarjetas suelen mostrarse dentro de un grupo o colección.

![Tres componentes de tarjeta en una fila](cards.png)

## Requisitos

Crea un grupo de tarjetas, en el que cada componente de tarjeta contenga un encabezado, una imagen, contenido y, de forma opcional, un pie.

Todas las tarjetas del grupo deben tener la misma altura. El pie opcional de la tarjeta debe quedar pegado a la parte inferior de la tarjeta.

Las tarjetas del grupo deben alinearse en dos dimensiones: tanto en vertical como en horizontal.

## Receta

Haz clic en "Play" en los bloques de código de abajo para editar el ejemplo en el MDN Playground:

```html live-sample___card-example
<div class="cards">
  <article class="card">
    <header>
      <h2>Un encabezado corto</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
      alt="Globos aerostáticos" />
    <div class="content">
      <p>
        La idea de llegar al Polo Norte por medio de globos parece haberse
        planteado hace muchos años.
      </p>
    </div>
  </article>

  <article class="card">
    <header>
      <h2>Un encabezado corto</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg"
      alt="Globos aerostáticos" />
    <div class="content">
      <p>Contenido corto.</p>
    </div>
    <footer>¡Tengo un pie!</footer>
  </article>

  <article class="card">
    <header>
      <h2>Un encabezado más largo en esta tarjeta</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
      alt="Globos aerostáticos" />
    <div class="content">
      <p>
        En una curiosa obra, publicada en París en 1863 por Delaville Dedreux,
        se sugiere llegar al Polo Norte mediante un aeróstato.
      </p>
    </div>
    <footer>¡Tengo un pie!</footer>
  </article>
  <article class="card">
    <header>
      <h2>Un encabezado corto</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg"
      alt="Globos aerostáticos" />
    <div class="content">
      <p>
        La idea de llegar al Polo Norte por medio de globos parece haberse
        planteado hace muchos años.
      </p>
    </div>
  </article>
</div>
```

```css live-sample___card-example
body {
  font: 1.2em sans-serif;
}

img {
  max-width: 100%;
}

.cards {
  max-width: 700px;
  margin: 1em auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
}

.card {
  border: 1px solid #999999;
  border-radius: 3px;

  display: grid;
  grid-template-rows: max-content 200px 1fr;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card h2 {
  margin: 0;
  padding: 0.5rem;
}

.card .content {
  padding: 0.5rem;
}

.card footer {
  background-color: #333333;
  color: white;
  padding: 0.5rem;
}
```

{{EmbedLiveSample("card-example", "", "950px")}}

## Decisiones tomadas

Cada tarjeta se maqueta con el [diseño de cuadrícula CSS](/es/docs/Web/CSS/Guides/Grid_layout), aunque el diseño sea unidimensional. Esto permite usar el dimensionamiento según el contenido en las pistas de la cuadrícula. Para configurar una cuadrícula de una sola columna, podemos usar lo siguiente:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} convierte el elemento en un contenedor de cuadrícula. Los tres valores de la propiedad {{cssxref("grid-template-rows")}} dividen la cuadrícula en un mínimo de tres filas y definen, en orden, la altura de los tres primeros hijos de la tarjeta.

Cada `card` contiene un {{HTMLElement("header")}}, un {{HTMLElement("img")}} y un {{HTMLElement("div")}}, en ese orden, y algunas contienen también un {{HTMLElement("footer")}}.

La fila (o pista) del encabezado se establece en {{cssxref("max-content")}}, lo que impide que se estire. La pista de la imagen tiene una altura de 200 píxeles. La tercera pista, donde está el contenido, se establece en `1fr`. Esto significa que ocupará todo el espacio adicional.

Los hijos que haya después de los tres con tamaños definidos explícitamente crean filas en la cuadrícula implícita, que se ajusta al contenido que se le añade. De forma predeterminada, estas filas tienen tamaño automático. Si una tarjeta contiene un pie, este tiene tamaño automático. Cuando existe, el pie queda pegado a la parte inferior de la cuadrícula. El pie tiene un tamaño automático que se ajusta a su contenido, y el `<div>` del contenido se estira para ocupar el espacio adicional.

El siguiente conjunto de reglas crea la cuadrícula de tarjetas:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

La propiedad {{cssxref("grid-template-columns")}} define el ancho de las columnas de la cuadrícula. En este caso, configuramos la cuadrícula para que se rellene automáticamente, con columnas repetidas que miden como mínimo `230px`, pero que pueden crecer para ocupar el espacio disponible. La propiedad {{cssxref("gap")}} establece un espacio de `20px` entre las filas y las columnas adyacentes.

> [!NOTE]
> Los distintos elementos de las tarjetas no se alinean entre sí, porque cada tarjeta es una cuadrícula independiente. Para alinear los componentes de cada tarjeta con los mismos componentes de las tarjetas adyacentes se puede usar [subgrid](/es/docs/Web/CSS/Guides/Grid_layout/Subgrid).

## Métodos alternativos

También se puede usar [flexbox](/es/docs/Web/CSS/Guides/Flexible_box_layout) para maquetar cada tarjeta. Con flexbox, las dimensiones de las filas de cada tarjeta se establecen con la propiedad {{cssxref("flex")}} en cada fila, en lugar de en el contenedor de la tarjeta.

Con flexbox, las dimensiones de los elementos flexibles se definen en los hijos y no en el padre. Elegir cuadrícula o flexbox depende de tus preferencias: si prefieres controlar las pistas desde el contenedor o añadir reglas a los elementos.

Elegimos la cuadrícula para las tarjetas porque, por lo general, se quiere que las tarjetas estén alineadas tanto en vertical como en horizontal. Además, alinear los componentes de cada tarjeta con los de las tarjetas adyacentes se puede hacer con subgrid. Flex no tiene un equivalente a subgrid que no requiera trucos.

## Consideraciones de accesibilidad

Según el contenido de tu tarjeta, puede haber cosas que podrías o deberías hacer para mejorar la accesibilidad. Consulta [Inclusive components: Card](https://inclusive-components.design/cards/), de Heydon Pickering, para ver una explicación muy detallada de estos aspectos.

## Véase también

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive components: Card](https://inclusive-components.design/cards/)
- Módulo de [diseño de cuadrícula CSS](/es/docs/Web/CSS/Guides/Grid_layout)
