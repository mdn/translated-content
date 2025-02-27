---
title: CSS Container Queries
slug: Web/CSS/CSS_containment/Container_queries
---

{{CSSRef}}

[CSS Containment](/es/docs/Web/CSS/CSS_containment) proporciona una nueva forma para aislar secciones de una página e indicarle al navegador que estas secciones son independientes del resto de la página en términos de estilos y disposición (_layout_).

Si estás creando un [diseño responsivo](/es/docs/Learn/CSS/CSS_layout/Responsive_Design), a menudo usas [_media queries_](/es/docs/Web/CSS/CSS_media_queries) para cambiar la disposición de la página con referencia al {{Glossary("viewport")}}.
Es bastante común agrupar elementos HTML dentro de componentes reutilizables que tienen una determinada disposición dependiendo del espacio disponible en la página.
Es posible que el espacio disponible no solo dependa del tamaño del _viewport_, pues también puede depender del contexto donde el componente se muestra.

![Una media query basada en el ancho del viewport, que representa el ancho total del navegador, y una container query basada en el ancho del contexto contenedor, el cual representa el ancho del elemento contenedor ](container-query-diagram.png)

Las _container queries_ nos permiten observar el tamaño del contenedor en vez de observar únicamente el _viewport_ u otras características del dispositivo, esto para aplicar estilos al contenido según el tamaño del contenedor.
Si el contenedor tiene menos espacio en el contexto que lo envuelve, puedes optar por ocultar algunos elementos o utilizar una fuente más pequeña, por ejemplo.

![Una página web con tres componentes de cartas que se muestran en diferentes disposiciones según el tamaño del contenedor](container-query-examples.png)

## Utilizando container queries

Para usar container queries, necesitas declarar un **containment context** en un elemento, de esta manera el navegador sabrá que estás interesado en consultar las dimensiones del contenedor.
Para hacer esto, usa la propiedad {{Cssxref("container-type")}} con los valores de `size`, `inline-size`, o `normal`.
Estos valores tienen los siguientes efectos:

- `size`: La consulta toma como referencia las dimensiones de [bloque y en línea](/es/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) del contenedor.
  Aplica contención de disposición, estilo y tamaño al contenedor.
- `inline-size`: La consulta se basa únicamente en la dimensión [en línea](/es/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) del contenedor.
  Aplica contención de disposición, estilo y tamaño en línea al contenedor.
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

Puedes crear un _containment context_ en el contenedor `div` al usar la propiedad `container-type`:

```css
.container {
  container-type: inline-size;
}
```

Una vez que el _containment context_ es creado, puedes utilizar la [regla _at_](/es/docs/Web/CSS/At-rule) {{cssxref("@container")}} para escribir una _container query_.
La _query_ en el siguiente ejemplo aplicará ciertos estilos a los elementos según el tamaño del elemento padre más cercano con un _containment context_.
Específicamente, esta _query_ aumentará el tamaño de fuente del título de la carta si el contenedor es más ancho que `700px`:

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

Si existen otras áreas dentro de la página que también sean _containment contexts_, puedes utilizar el mismo componente en esas areas y éste se adaptará a los distintos contextos.
Esto hace que los componentes reutilizables sean aún más flexibles sin la necesidad de saber específicamente dónde serán utilizados en cada ocasión.

Para más información sobre la sintaxis de las _container queries_, mira la página de {{cssxref("@container")}}.

### Containment context con nombre

En la sección anterior vimos cómo utilizar una _container query_ para aplicar estilos tomando como referencia al elmento padre más cercano con un _containment context_.
Puedes darle un nombre a un _containment context_ utilizando la propiedad {{cssxref("container-name")}}. Una vez con un nombre asociado, el nombre puede ser usado en una `@container` _query_ para especificar un contenedor como objetivo específico.
El siguiente ejemplo crea un _containment context_ con el nombre `sidebar`:

```css
.container {
  container-type: inline-size;
  container-name: sidebar;
}
```

Ahora puedes hacer referencia a este _containment context_ usando la regla _at_ `@container`:

```css
@container sidebar (min-width: 700px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

Para más información sobre los _containment context_ con nombre, visita la página de la propiedad {{cssxref("container-name")}}.

### Atajo para la sintaxis de contenedores

La forma rápida para declarar un _containment context_ es por medio de la propiedad `container`:

```css
.container {
  container: sidebar / inline-size;
}
```

Para más información sobre esta propiedad, visita la referencia de {{Cssxref("container")}}.

### Unidades de longitud de container queries

Cuando se usan _container queries_ para aplicar estilos a un contenedor, puedes utilizar unidades de longitud de _container queries_.
Con estas unidades se pueden definir longitudes relativas a las dimensiones del contenedor.
Aquellos componentes que utilizan unidades de longitud relativas a su contenedor, permiten mayor flexibilidad para ser usados en distintos contenedores sin la necesidad de recalcular valores de longitud concretos.

Las unidades de longitud de _container queries_ son:

- `cqw`: 1% del ancho del contenedor
- `cqh`: 1% de la altura del contenedor
- `cqi`: 1% del tamaño en línea del contenedor
- `cqb`: 1% del tamaño de bloque del contenedor
- `cqmin`: El valor más pequeño entre `cqi` y `cqb`
- `cqmax`: El valor más grande entre `cqi` y `cqb`

En el siguiente ejemplo se usa la unidad `cqi` para cambiar el tamaño de fuente de un título según el tamaño en línea del contenedor.

```css
@container (min-width: 700px) {
  .card h1 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Para más información acerca de estas unidades, mira la referencia de [Unidades de longitud de container queries](/es/docs/Web/CSS/length#container_query_length_units).

## Propiedades de respaldo para container queries

Se puede utilizar {{cssxref("grid")}} y {{cssxref("flex")}} para crear un efecto similar en los navegadores que aún no soportan las _container queries_.
En el siguiente ejemplo se usa una declaración {{cssxref("grid-template-columns")}} para crear una disposición de dos columnas para el componente de tipo tarjeta.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Si deseas utilizar una disposición de una sola columna en dispositivos con un _viewport_ más pequeño, puedas utilizar una _media query_ para modificar la configuración de la cuadrícula.

```css
@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Véase también

- [Media queries](/es/docs/Web/CSS/CSS_media_queries)
- La regla _at_ {{Cssxref("@container")}} de CSS
- La propiedad {{Cssxref("contain")}} de CSS
- La propiedad atajo {{Cssxref("container")}} de CSS
- La propiedad {{Cssxref("container-name")}} de CSS
- La propiedad {{cssxref("content-visibility")}} de CSS
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) por Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Collection of Container Queries articles](https://github.com/sturobson/Awesome-Container-Queries)
