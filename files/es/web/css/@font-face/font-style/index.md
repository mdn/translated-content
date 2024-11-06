---
title: font-style
slug: Web/CSS/@font-face/font-style
---

{{CSSRef}}

## Summary

La propiedad CSS "font-style" permite a los autores esepcificar estilos de fuente para las fuentes especificadas en la regla "`@font-face`".

Para un tipo de fuente particular, los autores pueden descargar varios tipos de fuentes que correspondan a diferentes estilos de la misma familia de fuentes, y luego usar la propiedad "font-style" para especificar explicitamente el tipo de fuente descargada. Los valores para esta propiedad CSS son los mismos que los correspondientes a font property.

{{cssinfo}}

## Syntax

```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

### Values

- **`normal`**

  - : Selecciona la version normal del estilo de fuente.

- **`italic`**

  - : Especifica que el estilo de fuente es la versión en _cursiva_ de la fuente normal.

- **`oblique`**
  - : Especifica que el estilo de fuente es la versión en _cursiva_, también, pero de forma diferente, de la fuente normal.

### Formal syntax

{{csssyntax}}

## Examples

A modo de ejemplo, consideremos Garamond como un tipo de fuente que, en su forma normal, obtenemos el siguiente resultado:

```css
@font-face {
  font-family: garamond;
  src: url("garamond.ttf");
}
```

![unstyled Garamond](garamondunstyled.jpg)

La versión en _cursiva_ de este texto utiliza los mismos trazos presentes en la versión sin estilo, pero artificialmente inclinadas unos pocos grados.

![artificially sloped garamond](garamondartificialstyle.jpg)

Por otra parte, si existe un verdadera versión en _cursiva_ del estilo de fuente, podemos incluirla en la propiedad "src" y especificar el estilo de fuente como "italic", con que claramente la fuente quedará en _cursiva_. Las verdaderas _cursivas_ utilizan unos trazos específicos que son un poco diferentes de su versión normal, teniendo algunas características únicas y generalmente con cualidades redondeadas y caligráficas. Estas fuentes son específicamente creadas por diseñadores de fuentes y no son artificialmente inclinadas.

@font-face { font-family: garamond; src: url('garamond-italic.ttf'); font-style: italic; }

![italic garamond](garamonditalic.jpg)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
