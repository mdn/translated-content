---
title: "@font-face"
slug: Web/CSS/@font-face
---

{{ CSSRef() }}

## Resumen

`@font-face` permite al autor especificar fuentes online para visualizar en sus páginas web. Al permitir a los autores proporcionar sus propias fuentes, `@font-face` elimina la necesidad de depender del numero limitado de fuentes de usuarios instaladas en sus computadoras.

## Sintaxis

```
@font-face {
  font-family: <un-nombre-de-fuente-remota>;
  src: <origen> [,<origen>]*;
  [font-weight: <peso>];
  [font-style: <estilo>];
}
```

### Valores

- \<un-nombre-de-fuente-remota>
  - : Especifica el nombre de una fuente que será utilizada como valor de font face por las propiedades de fuente.
- \<origen>
  - : Dirección URL para la ubicación remota del archivo de fuente, o el nombre de una fuente en la computadora del usuario en la forma `local("Nombre de Fuente")`.
- \<peso>
  - : Un valor de [peso/grosor de fuente](/en/CSS/font-weight).
- \<estilo>
  - : Un valor de [estilo de fuente](/en/CSS/font-style).

Puede especificar una fuente por nombre en la computadora local del usuario utilizando la sintaxis `local()`. Si esa fuente no es encontrada, se intentarán otros orígenes hasta encontrar una fuente.

## Formatos de fuentes soportados

- Gecko 1.9.1 (Firefox 3.5) soporta fuentes TrueType y OpenType.
- Gecko 1.9.2 (Firefox 3.6) agrega soporte para [WOFF](/en/WOFF).

## Ejemplos

Este ejemplo simplemente especifica una fuente que puede ser descargada para utilizar, aplicando la fuente a todo el cuerpo del documento.

[Muestra en vivo](webfont-sample.html)

```
<html>
<head>
  <title>Web Font Sample</title>
  <style type="text/css" media="screen, print">
    @font-face {
      font-family: "Bitstream Vera Serif Bold";
      src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
    }

    body { font-family: "Bitstream Vera Serif Bold", serif }
  </style>
</head>
<body>
  This is Bitstream Vera Serif Bold.
</body>
</html>
```

En este ejemplo, es utilizada la copia local de "Helvetica Neue Bold" del usuario; si el usuario no tiene esa fuente instalada (se prueban dos nombre distintos), luego la fuente descargable de nombre "MgOpenModernaBold.ttf" es utilizada en cambio:

```
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"),
  local("HelveticaNeue-Bold"),
  url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

## Notas

- En Gecko, las fuentes web están sujetas a la restricción del mismo dominio (los archivos de fuentes deben estar en el mismo dominio que la página que los utiliza), a menos que los [controles de acceso HTTP](/En/HTTP_access_control) sean utilizados para relajar esta restricción.
- > **Nota:** Porque no hay tipos MIME definidos para fuentes TrueType, OpenType, y WOFF, el tipo MIME del archivo especificado no es considerado.
- Cuando Gecko muestra una página que usa fuentes web, inicialmente muestra el texto que usa la mejor fuente de reserva CSS disponible en la computadora del usuario mientras espera que la fuente web termine de descargarse. Mientras cada fuente web se termina de descargar, Gecko actualiza el texto que utiliza esa fuente. Esto permite al usuario leer más rápidamente el texto en la página.

## Compatibilidad del navegador

<table class="standard-table">
  <tbody>
    <tr>
      <td>Chrome (WebKit)</td>
      <td><strong>4</strong> (532.5)</td>
      <td>Solo fuentes TrueType y OpenType</td>
    </tr>
    <tr>
      <td></td>
      <td><strong>6</strong> (534.3)</td>
      <td>Web Open Font Format (WOFF) soporte agregado</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>Opera</td>
      <td><strong>10.0</strong></td>
      <td>Solo fuentes TrueType y OpenType</td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td><strong>3.1</strong> (525.6)</td>
      <td>Solo fuentes TrueType y OpenType</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th>Navegador</th>
      <th>Versión desde</th>
      <th>Soporte de</th>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td><strong>4.0</strong></td>
      <td>Solo fuentes OpenType embebidas</td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td><strong>9.0 Preview 3</strong></td>
      <td>Web Open Font Format (WOFF) soporte agregado</td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td><strong>3.5</strong> (1.9.1)</td>
      <td>Solo fuentes TrueType y OpenType</td>
    </tr>
    <tr>
      <td><strong>3.6</strong> (1.9.2)</td>
      <td>Web Open Font Format (WOFF) soporte agregado</td>
    </tr>
  </tbody>
</table>

Vea también [MSDN Microsoft library @font-face](<http://msdn.microsoft.com/en-us/library/ms530757(VS.85).aspx>).

## Especificaciones

- [CSS 2 Fonts](http://www.w3.org/TR/1998/REC-CSS2-19980512/fonts.html#font-descriptions) 1998-05-12 Obsoletas
- [CSS 3 Fonts](http://www.w3.org/TR/css3-fonts/#font-resources) 2009 Borrador de trabajo
- [WOFF file format specification](http://people.mozilla.com/~jkew/woff/woff-2009-09-16.html) Borrador

## Vea también

- [FontSquirrel @font-face generator](http://www.fontsquirrel.com/fontface/generator)
- [About WOFF](/en/WOFF)
- [Beautiful fonts with @font-face](http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Open Font Library](http://openfontlibrary.org/)
- [10 Great Free Fonts for @font-face embedding](http://opentype.info/demo/webfontdemo.html)
