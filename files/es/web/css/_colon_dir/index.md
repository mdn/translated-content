---
title: ":dir()"
slug: Web/CSS/:dir
---

{{CSSRef}}{{SeeCompatTable}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) `:dir` de [CSS](/es/docs/Web/CSS) coincide con los elementos en función de la direccionalidad del texto contenido en ellos.

```css
/* Selecciona cualquier elemento con texto de derecha a izquierda */
:dir(rtl) {
  background-color: red;
}
```

La pseudo-clase `:dir()` usa solo el valor _semántico_ de la direccionalidad, es decir, el definido en el documento mismo. No tiene en cuenta la direccionalidad del _estilo_, es decir, la direccionalidad establecida por las propiedades de CSS como {{cssxref("direction")}}.

> **Nota:** Tenga en cuenta que el comportamiento de la pseudo-clase `:dir()` no es equivalente a los [selectores de atributo](/es/docs/Web/CSS/Attribute_selectors) `[dir=...]`. Estos últimos coinciden con el atributo HTML [`dir`](/es/docs/Web/HTML/Global_attributes#dir) e ignoran los elementos que carecen de él, incluso si heredan una dirección de su padre. (De forma similar, `[dir=rtl]` y `[dir=ltr]` no coincidirán con el valor `auto`.) En contraste, `:dir()` coincidirá con el valor calculado por {{glossary("user agent")}}, incluso si se hereda.

> **Nota:** En HTML, la dirección está determinada por el atributo [`dir`](/es/docs/Web/HTML/Global_attributes#dir) . Otros tipos de documentos pueden tener diferentes métodos.

## Sintaxis

La pseudoclase `:dir()` requiere un parámetro, que representa la direccionalidad de texto que desea orientar.

### Parámetros

- `ltr`
  - : Orientar elementos de izquierda a derecha.
- `rtl`
  - : Orientar elementos de derecha a izquierda.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<div dir="rtl">
  <span>test1</span>
  <div dir="ltr">
    test2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

### CSS

```css
:dir(ltr) {
  background-color: yellow;
}

:dir(rtl) {
  background-color: powderblue;
}
```

### Resultado

{{ EmbedLiveSample('Ejemplo') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Pseudo-clases relacionadas con el idioma: {{cssxref(":lang")}}, {{cssxref(":dir")}}
