---
title: unicode-range
slug: Web/CSS/@font-face/unicode-range
---

{{cssref}}

La regla CSS **`unicode-range`** especifica un rango específico de caracteres a ser usados por una fuente definida {{cssxref("@font-face")}} y hacerla disponible para su uso en la página actual. Si la página no usa algún caracter en ese rango, la fuente no es descargada; si usa al menos uno de ellos, la fuente es descargada.

El propósito de esta regla es permitir a las fuente ser segmentados, así el navegador solo necesita descargar la fuente necesitada para el contexto de texto en una página en particular. Por ejemplo, un sitio con muchas localizaciones podría proveer fuentes separadas para el inglés, griego y japonés. Para los usuarios que ven la versión en inglés de la página, las fuentes para el griego y el japonés no son necesarias, y por lo tanto no se descargan, ahorrando ancho de banda.

## Sintaxis

```css
/* valores <unicode-range> */
unicode-range: U+26; /* un único código */
unicode-range: U+0-7F;
unicode-range: U+0025-00FF; /* rango de códigos */
unicode-range: U+4??; /* rango por expresión */
unicode-range: U+0025-00FF, U+4??; /* multiples valores */
```

### Valores

- _**un único código**_
  - : Un único código de caracter Unicode, por ejemplo `U+26`.
- _**un rango de código**_
  - : Un rango de códigos de caracter Unicode. Asi que, por ejemplo, `U+0025-00FF` significa _incluir todos caracteres en el rango `U+0025` a `U+00FF`_.
- _**rango por expresión**_
  - : Un rango de códigos Unicode que contienen caracteres comodín, usando el caracter `'?'`, asi que, por ejemplo `U+4??` significa _incluir todos los caracteres en el rango `U+400` a `U+4FF`_.

## Ejemplos

Hemos creado una etiqueta HTML que contiene un elemento {{HTMLElement("div")}}, que incluye un simbolo &, el cual queremos que se muestre con una fuente diferente. Para hacerlo obvio, usaremos una fuente sans-serif, _Helvetica_ para el texto, y una fuente serif, _Times New Roman_, para el caracter &.

```html
<div>Me & You = Us</div>
```

En el CSS, puedes ver que en efecto estamos definiendo una separación completa {{cssxref("@font-face")}} el cual solo incluye un caracter, significando que solo ese caracter será estilizado con esa fuente. Podríamos haber hecho esto tambien encapsulando el caracter & en un elemento {{HTMLElement("span")}} y aplicando una fuente solo a ese elemento, pero esto es un elemento y una regla extra.

```css
@font-face {
  font-family: "Ampersand";
  src: local("Times New Roman");
  unicode-range: U+26;
}

div {
  font-size: 4em;
  font-family: Ampersand, Helvetica, sans-serif;
}
```

{{EmbedLiveSample}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
