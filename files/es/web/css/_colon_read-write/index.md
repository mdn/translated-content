---
title: ":read-write"
slug: Web/CSS/:read-write
---

{{CSSRef}}

La [pseudo-clase](/es/docs/CSS/Pseudo-classes) **`:read-write`** de [CSS](/es/docs/Web/CSS) representa un elemento (como un [input](/es/docs/Web/HTML/Element/input)) que es editable por el usuario.

```css
/* Selecciona cualquier elemento <input> que sea editable */
/* Compatible con Firefox con un prefijo */
input:-moz-read-write {
  background-color: #bbf;
}

/* Compatible con Blink/WebKit/Edge sin un prefijo */
input:read-write {
  background-color: #bbf;
}
```

> **Nota:** Este selector no solo selecciona texto de {{htmlElement("input")}}; seleccionará _cualquier_ elemento que pueda editar el usuario, como un elemento {{htmlelement("p")}} con [`contenteditable`](/es/docs/Web/HTML/Global_attributes#contenteditable) establecido en él.

## Sintaxis

{{csssyntax}}

## Ejemplo

### HTML

```html
<input type="text" value="Escribe lo que quieras aquí." />
<input type="text" value="Este es un campo de solo lectura." readonly />
<p>Este es un párrafo normal.</p>
<p contenteditable="true">¡Puedes editar este párrafo!</p>
```

### CSS

```css
input {
  min-width: 25em;
}
input:-moz-read-write {
  background: cyan;
}
input:read-write {
  background: cyan;
}

p:-moz-read-write {
  background: lightgray;
}
p:read-write {
  background: lightgray;
}
p[contenteditable="true"] {
  color: blue;
}
```

### Resultado

{{EmbedLiveSample("Ejemplo")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{cssxref(":read-only")}}
- Atributo HTML [`contenteditable`](/es/docs/Web/HTML/Global_attributes#contenteditable)
