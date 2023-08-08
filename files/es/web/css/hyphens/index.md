---
title: hyphens
slug: Web/CSS/hyphens
---

{{CSSRef}}La propiedad [CSS](/es/docs/Web/CSS) **`hyphens`** especifica cómo deben dividirse las palabras cuando el texto se ajusta a través de múltiples líneas. Puede impedir la separación de sílabas por completo, usar guiones manualmente en puntos específicos del texto o dejar que el navegador inserte los guiones automáticamente donde corresponda.{{EmbedInteractiveExample("pages/css/hyphens.html")}}

Las reglas de separación silábica son específicas del idioma. En HTML, el idioma es determinado por el atributo [`lang`](/es/docs/Web/HTML/Global_attributes/lang) y los navegadores separarán únicamente si este atributo está presente y si existe un diccionario de separación silábica adecuado. En XML debe usarse el atributo `xml:lang.`

> **Nota:** Las reglas que definen cómo se realiza la separación de sílabas no están explícitamente definidas por la especificación, por lo que esta puede variar de un navegador a otro.

## Sintaxis

```css
/* Keyword values */
hyphens: none;
hyphens: manual;
hyphens: auto;

/* Global values */
hyphens: inherit;
hyphens: initial;
hyphens: unset;
```

La propiedad `hyphens` se especifica con una única palabra de la lista a continuación.

### Valores

- `none`
  - : Las palabras no se separan en los finales de línea, incluso si las letras dentro de las palabras sobrepasan el final de la línea. Las líneas solo se distribuyen en el espacio en blanco.
- `manual`
  - : Las palabras se separan para el ajuste de línea sólo cuando los caracteres dentro de la palabra sugieren oportunidades de salto de línea. Ver [Sugiriendo oportunidades de separación de línea](#sugiriendo_oportunidades_de_separación_de_línea) más abajo para detalle.
- `auto`
  - : El navegador es libre de separar palabras en puntos de separación apropiados, siguiendo cualquiera de las reglas elegidas. Sin embargo, las oportunidades de separación de línea (ver [Sugiriendo oportunidades de separación de línea](#sugiriendo_oportunidades_de_separación_de_línea) más abajo) anularán la separación automática cuando exista.

> **Nota:** El comportamiento del valor `auto` dependerá de que el idioma esté bien etiquetado de manera que las reglas de separación silábica puedan ser seleccionadas. Se debe especificar el idioma con el atributo `lang` de HTML de cara a garantizar que la separación silábica automática se aplique en ese idioma.

### Sintaxis formal

{{csssyntax}}

## Sugiriendo oportunidades de separación de línea

Hay dos caracteres Unicode que pueden ser usados manualmente para especificar un potencial punto de separación de línea dentro del texto:

- U+2010 (HYPHEN)
  - : El carácter "fuerte" de separación de línea indica una oportunidad de separación visible. Incluso si la línea no está realmente separada en ese momento, se muestra el guión.
- U+00AD (SHY)
  - : Un carácter invisible y "suave" de separación de línea. Este carácter no se renderiza de manera visible; en lugar de ello, indica la posición en la que el navegador debería separar la palabra en caso de requerir separación de línea. En HTML puedes usar `&shy;` para insertar una separación "suave".

## Ejemplo

Este ejemplo usa tres clases, una por cada posible configuración de la propiedad `hyphens`.

### HTML

```html
<ul>
  <li><code>none</code>: sin separación; se desbordará si es preciso
    <p lang="es" class="none">Una extrema&shy;damente larga palabra</p>
  </li>
  <li><code>manual</code>: separación sólo en &amp;hyphen; o &amp;shy; (si fuera necesario)
    <p lang="es" class="manual">Una extrema&shy;damente larga palabra</p>
  </li>
  <li><code>auto</code>: separará donde decida el algoritmo (si fuera necesario)
    <p lang="enes class="auto">Una extrema&shy;damente larga palabra</p>
  </li>
</ul>
```

### CSS

```css
p {
  width: 55px;
  border: 1px solid black;
}
p.none {
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
p.manual {
  -webkit-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}
p.auto {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```

### Resultado

{{EmbedLiveSample("Example", "100%", 490)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{Cssxref("content")}}
