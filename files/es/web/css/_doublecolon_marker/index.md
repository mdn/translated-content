---
title: '::marker'
slug: Web/CSS/::marker
translation_of: Web/CSS/::marker
---
{{CSSRef}}{{SeeCompatTable}}

El [pseudo-elemento](/en/CSS/Pseudo-elements) **`::marker`** en [CSS](/es/docs/Web/CSS) selecciona la caja de marcadores de un elemento de la lista, que normalmente contiene una viñeta o un número. Funciona en cualquier elemento o pseudo-elemento configurado para [`display: list-item`](/en-US/docs/Web/CSS/display), como el elemento {{HTMLElement("li")}} y {{HTMLElement("summary")}}.

```css
::marker {
  color: blue;
  font-size: 1.2em;
}
```

## Propiedades permitidas

Sólo ciertas propiedades CSS puedes utilizarse en una regla con `::marker` como selector:

- Todas las [propiedades de fuentes](/es/docs/Web/CSS/CSS_Fonts)
- {{CSSxRef("color")}}
- La propiedad {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}} y {{CSSxRef("direction")}}
- La propiedad {{CSSxRef("content")}}

> **Nota:** En la especificación se indica que en el futuro de pueden admitir propiedades CSS adicionales.

## Sintaxis

{{CSSSyntax}}

## Ejemplo

### HTML

```html
<ul>
  <li>Duraznos</li>
  <li>Manzanas</li>
  <li>Ciruelas</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### Resultado

{{EmbedLiveSample('Example')}}

## Especificaciones

| Especificación                                                                           | Estado                                       | Comentario             |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#marker-pseudo', '::marker')}} | {{Spec2('CSS4 Pseudo-Elements')}} | No significant change. |
| {{SpecName('CSS3 Lists', '#marker-pseudo', '::marker')}}             | {{Spec2('CSS3 Lists')}}             | Initial definition.    |

## Compatibilidad con navegadores

{{Compat("css.selectors.marker")}}

## Véase también

- Elementos HTML que tienen marcadores por defecto: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
