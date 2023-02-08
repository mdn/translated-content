---
title: CSS Container Queries
slug: Web/CSS/CSS_Container_Queries
page-type: guide
tags:
  - CSS
  - CSS Containment
  - CSS Container Queries
  - Guide
  - Paint
  - Responsive Design
l10n:
  sourceCommit: 674fd4fb4225dfad82eab7425f9fc8e52d67a7db
---

{{CSSRef}}

[CSS containment](/es/docs/Web/CSS/CSS_Containment) proporciona una nueva forma para aislar secciones de una página e indicarle al navegador que estas secciones son independientes del resto de la página en términos de estilos y disposición (_layout_).

Si estás creando un [diseño responsivo](/es/docs/Learn/CSS/CSS_layout/Responsive_Design), a menudo usas [media queries](/en-US/docs/Web/CSS/Media_Queries) para cambiar la disposición de la página con referencia al {{Glossary("viewport")}}.
Es bastante común agrupar elementos HTML dentro de componentes reutilizables que tienen una determinada disposición dependiendo del espacio disponible en la página.
Es posible que el espacio disponible no solo dependa del tamaño del viewport, pues también puede depender del contexto donde el componente se muestra.

![Una media query basada en el ancho del viewport, que representa el ancho total del navegador, y una container query basada en el ancho del contexto contenedor, el cual representa el ancho del elemento contenedor ](container-query-diagram.png)

Las container queries nos permiten observar el tamaño del contenedor en vez de observar únicamente el viewport u otras características del dispositivo, esto para aplicar estilos al contenido según el tamaño del contenedor.
Si el contenedor tiene menos espacio en el contexto que lo envuelve, puedes optar por ocultar algunos elementos o utilizar una fuente más pequeña, por ejemplo.

![Una página web con tres componentes de cartas que se muestran en diferentes disposiciones según el tamaño del contenedor](container-query-examples.png)

## Utilizando container queries

Para usar container queries, necesitas declarar un **containment context** (en un elemento, de esta manera el navegador sabrá que estás interesado en consultar las dimensiones del contenedor.
Para hacer esto, usa la propiedad {{Cssxref("container-type")}} con los valores de `size`, `inline-size`, o `normal`.
Estos valores tienen los siguientes efectos:

- `size`: la consulta toma como referencia las dimensiones [inline y block](/es/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts#block_and_inline_dimensions) del contenedor.
  Aplica contención de disposición, estilo y tamaño al contenedor.
- `inline-size`: la consulta se basa únicamente en la dimensión [inline](/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts#block_and_inline_dimensions) del contenedor.
  Aplica contención de disposición, estilo y tamaño _inline_ al contenedor.
- `normal`: El elemento no es un _query container_ para consultas de tamaño, pero se sigue comportando como un _query container_ para consultas de estilos de contenedor (_container style queries_).

En el siguiente fragmento de HTML se muestra un ejemplo de un componente tipo tarjeta que tiene una imagen, un título y algo de texto:

```html
<div class="container">
  <div class="card">
    <img src="image.png" alt="Un gato con sus dos ojos de diferente color" />
    <h2>Título de la tarjeta</h2>
    <p>Contenido de la tarjeta</p>
  </div>
</div>
```

Puedes crear un containment context en el contenedor `div` al usar la propiedad `container-type`:

```css
.container {
  container-type: inline-size;
}
```

Una vez que el containment context es creado, puedas utilizar la [regla-at](/es/docs/Web/CSS/At-rule) {{cssxref("@container")}} para escribir una _container query_.
La _query_ en el siguiente ejemplo aplicará ciertos estilos a los elementos según el tamaño del ancestro más cercano con un containment context.
Específicamente, esta query aumentará el tamaño de fuente del título de la carta si el contenedor es más ancho que `700px`:

```css
/* Estilos por defecto para el título de la carta */
.card h2 {
  font-size: 1em;
}

/* Container query que se aplica si el contenedor es más ancho que 700px */
@container (min-width: 700px) {
  .card h2 {
    font-size: 2em;
  }
}
```

Si existen otras áreas dentro de la página que también sean containment contexts, puedes utilizar el mismo componente en esas areas y éste se adaptará a los distintos contextos.
Esto hace que los componentes reutilizables sean aún más flexibles sin la necesidad de saber específicamente dónde serán utilizados en cada ocasión.

Para más información sobre la sintaxis de las container queries, mira la página de {{cssxref("@container")}}.

### Containment context con nombre

En la sección anterior vimos cómo utilizar una container query para aplicar estilos tomando como referencia al ancestro más cercano con un containment context.
Puedes darle un nombre a un containment context utilizando la propiedad {{Cssxref("container-name")}}. Una vez con un nombre asociado, el nombre puede ser usado en una `@container` query para especificar un contenedor como objetivo específico.
El siguiente ejemplo crea un containment context con el nombre `sidebar`:

```css
.container {
  container-type: inline-size;
  container-name: sidebar;
}
```

Ahora puedes hacer referencia a este containment context usando la regla-at `@container`:

```css
@container sidebar (min-width: 700px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

Para más información sobre los containment context con nombre, visita la página de la propiedad {{cssxref("container-name")}}.

### Atajo para la sintaxis de contenedores

La forma rápida para declarar un containment context es por medio de la propipedad `container`:

```css
.container {
  container: sidebar / inline-size;
}
```

Para más información sobre esta propiedad, visita la referencia de {{Cssxref("container")}}.

### Unidades de longitud de container queries

Cuando se usan container queries para aplicar estilos a un contenedor, puedes utilizar unidades de longitud de container queries.
Con estas unidades se pueden definir longitudes relativas a las dimensiones del contenedor.
Aquellos componentes que utilizan unidades de longitud relativas a su contenedor, permiten mayor flexibilidad para ser usados en distintos contenedores sin la necesidad de recalcular valores de longitud concretos.

las unidades de longitud de container queries son:

- `cqw`: 1% del ancho del contenedor
- `cqh`: 1% de la altura del contenedor
- `cqi`: 1% del tamaño _inline_ del contenedor
- `cqb`: 1% del tamaño _block_ del contenedor
- `cqmin`: El valor más pequeño entre `cqi` y `cqb`
- `cqmax`: El valor más grande entre `cqi` y `cqb`

En el siguiente ejemplo se usa la unidad `cqi` para cambiar el tamaño de fuente de un título según el tamaño inline del contenedor.

```css
@container (min-width: 700px) {
  .card h1 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Para más información acerca de estas unidades, mira la referencia de [Unidades de longitud de container queries](/es/docs/Web/CSS/length#container_query_length_units).

## Propiedades de respaldo para container queries

Se puede utilizar {{cssxref("grid")}} y {{cssxref("flex")}} para crear un efecto similar en los navegadores que aún no soportan las container queries.
En el siguiente ejemplo se usa una declaración {{cssxref("grid-template-columns")}} para crear una disposición de dos columnas para el componente de tipo tarjeta.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Si deseas utilizar una disposición de una sola columna en dispositivos con un viewport más pequeño, puedas utilizar una media query para modificar la configuración de la cuadrícula.

```css
@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Véase también

- [Media queries](/es/docs/Web/CSS/Media_Queries)
- La regla-at {{Cssxref("@container")}} de CSS
- La propiedad {{Cssxref("contain")}} de CSS
- La propiedad atajo {{Cssxref("container")}} de CSS
- La propiedad {{Cssxref("container-name")}} de CSS
- La propiedad {{cssxref("content-visibility")}} de CSS
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) por Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Collection of Container Queries articles](https://github.com/sturobson/Awesome-Container-Queries)
