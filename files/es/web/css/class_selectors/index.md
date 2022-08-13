---
title: Selectores de clase
slug: Web/CSS/Class_selectors
tags:
  - CSS
  - Principiante
  - Referencia CSS
  - Selectores
translation_of: Web/CSS/Class_selectors
---
{{CSSRef("Selectors")}}

En un documento HTML, los selectores de clase buscan un elemento basado en el contenido de su atributo `class`. El atributo {{htmlattrxref("class")}} está definido como una lista de elementos separados por espacio, y uno de esos elementos debe coincidir exactamente con el nombre de clase dado en el selector.

## Sintaxis

    .classname { style properties }

Nótese que esto es equivalente al siguiente {{Cssxref("Attribute_selectors", "selector de atributo")}}:

    [class~=classname] { style properties }

## Ejemplo

### CSS

```css
span.classy {
  background-color: DodgerBlue;
}
```

### HTML

```html
<span class="classy">Aquí hay un span con algo de texto.</span>
<span>Aquí hay otro.</span>
```

{{EmbedLiveSample('Ejemplo', 200, 50)}}

## Especificaciones

| Especificación                                                                               | Estatus                              | Comentarios        |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('CSS4 Selectors', '#class-html', 'class selectors')}}         | {{Spec2('CSS4 Selectors')}} | Sin cambios        |
| {{SpecName('CSS3 Selectors', '#class-html', 'class selectors')}}         | {{Spec2('CSS3 Selectors')}} |                    |
| {{SpecName('CSS2.1', 'selector.html#class-html', 'child selectors')}} | {{Spec2('CSS2.1')}}             |                    |
| {{SpecName('CSS1', '#class-as-selector', 'child selectors')}}             | {{Spec2('CSS1')}}             | Definición inicial |

## Compatibilidad de navegadores

{{Compat("css.selectors.class")}}
