---
title: ":placeholder-shown"
slug: Web/CSS/:placeholder-shown
---

{{CSSRef}}{{SeeCompatTable}}

La [pseudo-clase](/es/docs/CSS/Pseudo-classes) **`:placeholder-shown`** de [CSS](/es/docs/Web/CSS) representa cualquier elemento {{htmlElement("input")}} o {{htmlElement("textarea")}} que esté mostrando actualmente el [texto de marcador de posición (placeholder)](/es/docs/Web/HTML/Element/input#attr-placeholder).

```css
/* Selecciona cualquier elemento con un placeholder activo */
:placeholder-shown {
  border: 2px solid silver;
}
```

## Sintaxis

{{csssyntax}}

## Ejemplos

### Ejemplo básico

#### HTML

```html
<input placeholder="¡Escribe algo aquí!" />
```

#### CSS

```css
input {
  border: 2px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border-color: silver;
}
```

#### Resultado

{{EmbedLiveSample("Ejemplo_básico", 200, 60)}}

### Texto desbordante

En pantallas angostas como teléfonos inteligentes, el ancho de los cuadros de búsqueda y otros campos de formulario pueden acortarse drásticamente. Esto puede provocar que el texto de marcador de posición se recorte de una manera no deseada. A menudo es útil alterar este comportamiento con la propiedad {{cssxref("text-overflow")}}.

#### HTML

```html
<input placeholder="¡Ingresa algo en este campo, por favor!" />
```

#### CSS

```css
input:placeholder-shown {
  text-overflow: ellipsis;
}
```

#### Resultado

{{EmbedLiveSample("Texto_desbordante", 200, 60)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El pseudo-elemento {{cssxref("::placeholder")}} estiliza el placeholder _por sí mismo_.
- Elementos HTML relacionados: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- {{cssxref(":-moz-placeholder")}}, {{cssxref("::-moz-placeholder")}}
- [Formularios HTML](/es/docs/Learn/HTML/Forms)
