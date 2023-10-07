---
title: Uso de contenido generado por CSS
slug: Learn/CSS/Howto/Generated_content
---

{{LearnSidebar}}

Este artículo describe algunas formas en las que puedes usar CSS para agregar contenido cuando se muestra un documento. Modificas tu hoja de estilo para agregar contenido de texto o imágenes.

Una de las ventajas importantes de CSS es que te ayuda a separar el estilo de un documento de su contenido. Sin embargo, hay situaciones en las que tiene sentido especificar cierto contenido como parte de la hoja de estilo, no como parte del documento. Puede especificar contenido de texto o imagen dentro de una hoja de estilo cuando ese contenido está estrechamente vinculado a la estructura del documento.

> **Nota:** El contenido especificado en una hoja de estilo no se convierte en parte del {{Glossary("DOM")}}.

Especificar contenido en una hoja de estilo puede causar complicaciones. Por ejemplo, puede tener diferentes versiones de idioma de su documento que comparte una hoja de estilo. Si especifica contenido en su hoja de estilo que requiere traducción, debe colocar esas partes de su hoja de estilo en diferentes archivos y hacer arreglos para que se vinculen con las versiones de idioma apropiadas de su documento.

Este problema no surge si el contenido que especifica consiste en símbolos o imágenes que se aplican en todos los idiomas y culturas.

## Ejemplos

### Contenido de texto

CSS puede insertar contenido de texto antes o después de un elemento. Para especificar esto, cree una regla y agregue {{ cssxref("::before") }} o {{ cssxref("::after") }} al selector. En la declaración, especifique la propiedad {{ cssxref("content") }} con el contenido del texto como su valor.

#### HTML

```html
Un texto donde necesito <span class="ref">algo</span>
```

#### CSS

```css
.ref::before {
  font-weight: bold;
  color: navy;
  content: "Referenciar ";
}
```

#### Resultado

{{ EmbedLiveSample('Contenido_de_texto', 600, 30) }}

El conjunto de caracteres de una hoja de estilo es UTF-8 de forma predeterminada, pero también se puede especificar en el enlace, en la propia hoja de estilo o de otras formas. Para obtener más información, consulte [4.4 Representación de hojas de estilo CSS](https://www.w3.org/TR/CSS21/syndata.html#q23) en la Especificación CSS.

Los caracteres individuales también se pueden especificar mediante un mecanismo de escape que utiliza una barra invertida como carácter de escape. Por ejemplo, "\265B" es el símbolo de ajedrez para una reina negra ♛. Para obtener más información, consulte [Referencia a caracteres no representados en una codificación de caracteres](https://www.w3.org/TR/CSS21/syndata.html#q24) y [Caracteres y mayúsculas y minúsculas](https://www.w3.org/TR/CSS21/syndata.html#q6) en la especificación CSS.

### Contenido de imagen

Para agregar una imagen antes o después de un elemento, puede especificar la URL de un archivo de imagen en el valor de la propiedad {{ cssxref("content") }}.

Esta regla agrega un espacio y un ícono después de cada enlace que tiene la clase `glossary`:

#### HTML

```html
<a href="developer.mozilla.org" class="glossary">developer.mozilla.org</a>
```

#### CSS

```css
a.glossary::after {
  content: " " url("glossary-icon.gif");
}
```

{{ EmbedLiveSample('Contenido_de_imagen', 600, 40) }}
