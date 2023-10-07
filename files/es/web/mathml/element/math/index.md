---
title: <math>
slug: Web/MathML/Element/math
---

{{MathMLRef}}

`<math>` es el elemento superior en MathML. Cada instancia válida de MathML debe estar rodeada de etiquetas `<math>`. Además, no debes anidar un segundo elemento `<math>` dentro de un primero, pero puedes tener un número arbitrario de otros elementos hijos en él.

## Atributos

Además de los siguientes atributos, el elemento `<math>` acepta cualquier atributo del elemento {{ MathMLElement("mstyle") }}.

- class, id, style
  - : Disponibles para el uso con [hojas de estilo](/es/docs/Web/CSS).
- dir
  - : La dirección general de las fórmulas. Sus valores posibles son `ltr` (izquierda a derecha) o bien `rtl` (derecha a izquierda).
- href
  - : Usado para definir un hipervínculo a un URI (**I**dentificador de **R**ecurso **U**nificado) especificado.
- mathbackground
  - : El color de fondo. Puedes usar `#rgb`, `#rrggbb` y [palabras clave de colores](/es/docs/Web/CSS/color_value#Palabras_clave_de_colores).
- mathcolor
  - : El color de texto. Puedes usar `#rgb`, `#rrggbb` y [palabras clave de colores](/es/docs/Web/CSS/color_value#Palabras_clave_de_colores).
- display

  - : Este atributo enumerado especifica de qué manera el marcado MathML debería ser renderizado. Puede tomar uno de los siguientes valores:

    - `block`, el cual indica que este elemento será incluido fuera del fragmento de texto actual , en forma de bloque individual que puede ser posicionado en cualquier sitio sin cambiar el significado del texto;
    - `inline`, el cual indica que este elemento será incluido en el fragmento de texto actual, y no puede ser sacado del mismo sin cambiar el significado del texto.

    De no estar presente, toma `inline` por defecto.

- mode {{deprecated_inline}}
  - : Deprecado a favor del [atributo display](/es/docs/MathML/Element/math#attr-display).
    Sus valores posibles son: `display` (que tiene el mismo efecto que `display="block"`) e `inline`.
- overflow
  - : Especifica el comportamiento de una expresión si es demasiado larga para caber en el ancho asignado.
    Sus valores posibles son: `linebreak` (por defecto), `scroll`, `elide`, `truncate`, `scale`.

## Ejemplos

![Theorem of Pythagoras](/files/3157/math.jpg)

### Notación HTML5

```html
<!doctype html>
<html>
  <head>
    <title>MathML en HTML5</title>
  </head>
  <body>
    <math>
      <mrow>
        <mrow>
          <msup>
            <mi>a</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
        </mrow>
        <mo>=</mo>
        <msup>
          <mi>c</mi>
          <mn>2</mn>
        </msup>
      </mrow>
    </math>
  </body>
</html>
```

### Notación XHTML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <title>MathML en XHTML</title>
</head>
<body>

  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

</body>
</html>
```

**Notas**: Los documentos XHTML con MathML deben servirse como `application/xhtml+xml`. Puedes lograrlo facilmente añadiendo la extensión `.xhtml` a tus archivos locales. Para servidores Apache puedes [configurar tu archivo `.htaccess`](http://httpd.apache.org/docs/2.4/mod/mod_mime.html#addtype) para direccionar extensiones al tipo Mime correcto. Ya que estás escribiendo tu MathML en un archivo XML, asegurate también de escribir un documento XML bien formado.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Notas específicas a Firefox

Firefox 7 introdujo soporte para aceptar todos los atributos MathML en el elemento superior `math` (por ejemplo, el mismo comportamiento que el elemento {{ MathMLElement("mstyle") }}). Sin embargo, el atributo `displaystyle` no fue tomado en cuenta y [ha sido añadido](https://bugzilla.mozilla.org/show_bug.cgi?id=669719) en Firefox 8.

Texto de respaldo (`alttext`) o referir a una imagen alternativa usando los atributos `altimg`, `altimg-width`, `altimg-height` o `altimg-valign` no se encuentra actualmente implementado en Firefox.

## Véase también

- Elemento **HTML** superior: {{ HTMLElement("html") }}
- Elemento **SVG** superior: {{ SVGElement("svg") }}
- Prueba MathML para navegadores: Para [XHTML](https://www.eyeasme.com/Joe/MathML/MathML_browser_test) y [HTML5](https://eyeasme.com/Joe/MathML/HTML5_MathML_browser_test)
