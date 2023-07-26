---
title: overflow-y
slug: Web/CSS/overflow-y
---

{{CSSRef}}

La propiedad [CSS](/es/docs/Web/CSS) **`overflow-y`** define qué se debe mostrar cuando el contenido se desborda de los extremos superior e inferior de un elemento en bloque.

> **Nota:** Si {{cssxref("overflow-x")}} es `hidden`, `scroll` o `auto` y esta propiedad es `visible` (por defecto) se calculará implícitamente como `auto`.

{{EmbedInteractiveExample("pages/css/overflow-y.html")}}

El código para este ejemplo interactivo está almacenado en un repositorio de GitHub. Si quieres contribuir con el proyecto de ejemplos interactivos, por favor clone <https://github.com/mdn/interactive-examples> y envíanos un pull request.

## Sintaxis

```css
/* Valores con una palabra clave */
overflow-y: visible;
overflow-y: hidden;
overflow-y: scroll;
overflow-y: auto;

/* Valores globales */
overflow-y: inherit;
overflow-y: initial;
overflow-y: unset;
```

La propiedad `overflow-y` es especificada con una sola palabra clave escogida de la lista de abajo.

### Valores

- `visible`
  - : El contenido no es recortado y puede ser visualizado fuera de los extremos superior e inferior del área de padding.
- `hidden`
  - : El contenido es recortado, si es necesario, para que se ajuste verticalmente dentro del área de padding. No se dispone de las barras de desplazamiento.
- `scroll`
  - : El contenido es recortado, si es necesario, para que se ajuste verticalmente dentro del área de padding. Los navegadores muestran las barras de desplazamiento independientemente de si el contenido se recorta o no (esto evita que las barras de desplazamiento aparezcan o desaparezcan cuando el contenido cambia). Las impresoras pueden imprimir el contenido desbordado.
- `auto`
  - : Depende del cliente. Si el contenido se recorta dentro del área de padding, se vería igual que con la propiedad `visible`, pero aún determinado por un contexto de formato de bloque. Los navegadores de escritorio proveen barras de desplazamiento si el contenido se desborda.

### Sintaxis Formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<ul>
  <li>
    <code>overflow-y:hidden</code> — Esconde el texto fuera de la caja
    <div id="div1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:scroll</code> — Agrega una barra scroll si se necesita
    <div id="div2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:visible</code> — Muestra el texto fuera de la caja si se
    necesita
    <div id="div3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:auto</code> — En la mayoría de los navegadores, equivalente
    a <code>scroll</code>
    <div id="div4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width: 250px;
  height: 100px;
}

#div1 {
  overflow-y: hidden;
  margin-bottom: 12px;
}
#div2 {
  overflow-y: scroll;
  margin-bottom: 12px;
}
#div3 {
  overflow-y: visible;
  margin-bottom: 120px;
}
#div4 {
  overflow-y: auto;
  margin-bottom: 120px;
}
```

### Resultado

{{EmbedLiveSample("Ejemplo", "100%", "780")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Propiedades CSS relacionadads: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-x")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
