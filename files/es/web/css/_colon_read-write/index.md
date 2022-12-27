---
title: ':read-write'
slug: Web/CSS/:read-write
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: Web/CSS/:read-write
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

> **Nota:** Este selector no solo selecciona texto de {{htmlElement("input")}}; seleccionará _cualquier_ elemento que pueda editar el usuario, como un elemento {{htmlelement("p")}} con {{htmlattrxref("contenteditable")}} establecido en él.

## Sintaxis

{{csssyntax}}

## Ejemplo

### HTML

```html
<input type="text" value="Escribe lo que quieras aquí.">
<input type="text" value="Este es un campo de solo lectura." readonly>
<p>Este es un párrafo normal.</p>
<p contenteditable="true">¡Puedes editar este párrafo!</p>
```

### CSS

```css
input { min-width: 25em; }
input:-moz-read-write { background: cyan; }
input:read-write { background: cyan; }

p:-moz-read-write { background: lightgray; }
p:read-write { background: lightgray; }
p[contenteditable="true"] { color: blue; }
```

### Resultado

{{EmbedLiveSample("Ejemplo")}}

## Especificaciones

| Especificación                                                                               | Estado                                   | Comentarios                                                            |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| {{ SpecName('HTML WHATWG', '#selector-read-write', ':read-write') }} | {{ Spec2('HTML WHATWG') }}     | Ningún cambio.                                                         |
| {{ SpecName('HTML5 W3C', '#selector-read-write', ':read-write') }}     | {{ Spec2('HTML5 W3C') }}         | Define la semántica con respecto a HTML y validación de restricciones. |
| {{ SpecName('CSS4 Selectors', '#rw-pseudos', ':read-write') }}         | {{ Spec2('CSS4 Selectors') }} | Define la pseudo-clase, pero no la semántica asociada.                 |

## Compatibilidad con navegadores

{{Compat("css.selectors.read-write")}}

## Ver también

- {{cssxref(":read-only")}}
- Atributo HTML {{htmlattrxref("contenteditable")}}
