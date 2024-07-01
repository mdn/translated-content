---
title: flex-basis
slug: Web/CSS/flex-basis
---

{{CSSRef}}

## Resumen

La propiedad de [CSS](/es/docs/Web/CSS) **`flex-basis`** especifíca la base flexible, la cual es el **tamaño inicial** de un elemento flexible. Ésta propiedad determina el tamaño de una caja de contenidos a no ser que se haya especificado de otra forma usando {{Cssxref("box-sizing")}}.

{{cssinfo}}

## Sintaxis

```css
/* Especificar <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* Palabras clave de dimensionamiento intrínseco */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Tamaño automático basado en el contenido del elemento flexible */
flex-basis: content;

/* Global values */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
```

### Valores

- `width`
  - : Definido por un número seguido de una unidad absoluta tal como `px`, `mm` o `pt`, o un porcentaje del tamaño principal de un contenedor flexible padre. Los valores negativos no son válidos.
- `content`

  - : Indica el dimensionamiento automático, basado en el contenido del elemento flexible.

    > **Nota:** Tenga en cuenta que éste valor no fue presentado en el lanzamiento inicial del Diseño de Caja Flexible, así que no será soportado por algunas implementaciones antiguas. El efecto equivalente puede tenerlo usando `auto` junto con un tamaño principal ([width](https://drafts.csswg.org/css2/visudet.html#propdef-width) o [height](https://drafts.csswg.org/css2/visudet.html#propdef-height)) en auto.

    > **Nota:** Breve historia
    >
    > - Originalmente, "flex-basis:auto" significa "observa mi propiedad width o height".
    > - Después, flex-basis:auto fue cambiado a automatic-sizing, y fue introducido "main-size" como palabra clave "observa mi propiedad width o height". Ésto fue implementado en [bug 1032922](https://bugzilla.mozilla.org/show_bug.cgi?id=1032922).
    > - Después, ese cambio fue revertido en [bug 1093316](https://bugzilla.mozilla.org/show_bug.cgi?id=1093316), y nuevamente "auto" significa "observa mi propiedad width o height"; y se está introduciendo una nueva palabra clave 'content' para provocar un dimensionamiento automático. ([Error 1105111 en Firefox](https://bugzil.la/1105111) incluye la inclusión de dicha palabra clave).

### Sintaxis Formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

### CSS

```css
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative;
}

.flex:after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 18px;
}

.flex1 {
  flex-basis: auto;
}

.flex1:after {
  content: "auto";
}

.flex2 {
  flex-basis: -webkit-max-content;
  flex-basis: -moz-max-content;
  flex-basis: max-content;
}

.flex2:after {
  content: "max-content";
}

.flex3 {
  flex-basis: -webkit-min-content;
  flex-basis: -moz-min-content;
  flex-basis: min-content;
}

.flex3:after {
  content: "min-content";
}

.flex4 {
  flex-basis: -webkit-fit-content;
  flex-basis: -moz-fit-content;
  flex-basis: fit-content;
}

.flex4:after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5:after {
  content: "content";
}

.flex6 {
  flex-basis: -webkit-fill-available;
  flex-basis: -moz-available;
  flex-basis: fill;
}

.flex6:after {
  content: "fill/-webkit-fill-available/-moz-available";
}
```

### Resultados

{{EmbedLiveSample('', '860', '360')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Using CSS flexible boxes](/es/docs/CSS/Using_CSS_flexible_boxes)
- {{cssxref("width")}}
