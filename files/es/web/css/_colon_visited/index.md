---
title: ':visited'
slug: Web/CSS/:visited
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: Web/CSS/:visited
---
{{ CSSRef }}

La [pseudo-clase](/es/CSS/Pseudo-classes) **`:visited`** de [CSS](/es/docs/Web/CSS) representa enlaces que el usuario ya ha visitado. Por motivos de privacidad, los estilos que se pueden modificar con este selector son muy limitados.

```css
/* Selecciona cualquier <a> que ha sido visitado */
a:visited {
  color: green;
}
```

Los estilos definidos por la pseudo-clase `:visited` serán anulados por cualquier pseudo-clase posterior relacionada con el enlace ({{cssxref(":link")}}, {{cssxref(":hover")}} o {{cssxref(":active")}}) que tenga al menos la misma especificidad. Para darle un estilo apropiado a los enlaces, coloque la regla `:visited` después de la regla `:link` pero antes de las reglas `:hover` y `:active`, según lo definido por el orden LVHA: `:link` — `:visited` — `:hover` — `:active`.

## Restricciones de estilo

Por motivos de privacidad, los navegadores limitan estrictamente los estilos que puede aplicar utilizando esta pseudo-clase y cómo se pueden usar:

- Las propiedades CSS permitidas son {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, y {{ cssxref("outline-color") }}.
- Los atributos SVG permitidos son {{SVGAttr("fill")}} y {{SVGAttr("stroke")}}.
- El componente alfa de los estilos permitidos será ignorado. En su lugar, se utilizará el componente alfa del estado non-`:visited` del elemento, excepto cuando ese componente sea 0, en cuyo caso el estilo establecido en `:visited` se ignorará por completo.
- Aunque estos estilos pueden cambiar la apariencia de los colores para el usuario final, el método {{domxref("window.getComputedStyle")}} mentirá y siempre devolverá el valor del color non-`:visited`.

> **Nota:** Para obtener más información sobre estas limitaciones y las razones detrás de ellas, vea [Privacidad y el selector :visited](/es/docs/CSS/Privacy_and_the_:visited_selector).

## Sintaxis

{{csssyntax}}

## Ejemplo

Las propiedades que de otro modo no tendrían ningún color o serían transparentes no se pueden modificar con `:visited`. De las propiedades que se pueden establecer con esta pseudo-clase, su navegador probablemente solo tenga un valor predeterminado para `color` y `column-rule-color`. Por lo tanto, si desea modificar las otras propiedades, deberá darles un valor base fuera del selector `:visited`.

### HTML

```html
<a href="#test-visited-link">¿Ya has visitado este enlace?</a><br>
<a href="">Ya has visitado este enlace.</a>
```

### CSS

```css
a {
  /* Especifique los valores predeterminados no transparentes a ciertas propiedades,
     lo que les permite ser diseñado con el estado :visited */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
```

### Resultado

{{EmbedLiveSample("Ejemplo")}}

## Especificaciones

| Especificación                                                                                       | Estado                                   | Comentario                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('HTML WHATWG', 'scripting.html#selector-visited', ':visited') }} | {{ Spec2('HTML WHATWG') }}     |                                                                                                                                                                                 |
| {{ SpecName('CSS4 Selectors', '#link', ':visited') }}                             | {{ Spec2('CSS4 Selectors') }} | Ningún cambio.                                                                                                                                                                  |
| {{ SpecName('CSS3 Selectors', '#link', ':visited') }}                             | {{ Spec2('CSS3 Selectors') }} | Ningún cambio.                                                                                                                                                                  |
| {{ SpecName('CSS2.1', 'selector.html#link-pseudo-classes', ':visited') }}     | {{ Spec2('CSS2.1') }}             | Levanta la restricción para aplicar `:visited` solo al elemento {{ HTMLElement("a") }}. Permite a los navegadores restringir su comportamiento por razones de privacidad. |
| {{ SpecName('CSS1', '#anchor-pseudo-classes', ':visited') }}                     | {{ Spec2('CSS1') }}                 | Definición inicial.                                                                                                                                                             |

## Compatibilidad con navegadores

{{Compat("css.selectors.visited")}}

## Ver también

- [Privacidad y el selector :visited](/es/docs/CSS/Privacy_and_the_:visited_selector)
- pseudo-clases relacionadas con enlaces: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
