---
title: Getting Started
slug: Web/SVG/Tutorial/Getting_Started
---

{{ PreviousNext("SVG/Tutorial/Introduction", "SVG/Tutorial/Positions") }}

### Un Ejemplo Simple

Permitanos introducirlo con un sencillo ejemplo. Mire el siguiente codigo :

```xml
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Copie el código y guárdelo como demo1.svg. Luego ábralo en Firefox. Lo verá como se ve en la siguiente figura. (usuarios Firefox : click [aqui](svgdemo1.xml))

![svgdemo1.png](svgdemo1.png)

El proceso de renderizado incluye lo siguiente :

1. Comenzamos con el elemento raiz del `svg`:

   - La declaracion de tipo de documento (doctype) usual en (X)HTML debería dejarse de lado debido a que la validación DTD based SVG conduce a mas problemas que soluciones.
   - En cambio, los atributos `version` y `baseProfile` deberian ser usados siempre para identificar la version de SVG para otro tipo de validaciones.
   - Debido a SVG es una especie de dialecto de XML, SVG debe unir siempre los namespaces correctamente (en el atributo xmlns). Para mayor información, vea [Namespaces Crash Course](/es/docs/Web/SVG/Namespaces_Crash_Course).

2. El fondo esta puesto en rojo dibujando un rectangulo [`<rect/>`](/en/SVG/Element/rect) que cubre el area de la imagen.
3. Un circulo verde [`<circle/>`](/en/SVG/Element/circle) con un radio de 80px y se dibuja en el centro del rectangulo rojo(offset 30+120px inward, and 50+50px upward).
4. El texto "SVG" esta dibujado. El interior de cada letra esta relleno con blanco.El texto se coloca mediante el establecimiento de un ancla en donde queremos que el punto medio sea: en este caso, el punto medio debe corresponder al centro del circulo verde. Los ajustes finos se pueden hacer con el tamaño de la fuente y la posición vertical para garantizar que el resultado final sea estéticamente agradable.

### Basic properties of SVG files

- The first important thing to notice is the order of rendering of elements. The globally valid rule for SVG files is, that _later_ elements are rendered _atop previous_ elements. The further down an element is the more will be visible.
- SVG files on the web can be displayed directly in the browser or embedded in HTML files via several methods:

  - If the HTML is XHTML and is delivered as type `application/xhtml+xml`, the SVG can be directly embedded in the XML source.
  - If the HTML is HTML5, and the browser is a conforming HTML5 browser, the SVG can be directly embedded, too. However, there may be syntax changes necessary to conform to the HTML5 specification
  - The SVG file can be referenced with an `object` element:

    ```html
    <object data="image.svg" type="image/svg+xml" />
    ```

  - Likewise an `iframe` element can be used:

    ```html
    <iframe src="image.svg"></iframe>
    ```

  - An `img` element can be used theoretically, too. However this technique doesn't work in Firefox before 4.0.
  - Finally SVG can be created dynamically with JavaScript and injected into the HTML DOM. This has the advantage, that replacement technologies for browsers, that can't process SVG, can be implemented.

  See [this dedicated article](/en/SVG_In_HTML_Introduction) for an in-depth dealing with the topic.

- How SVG handles sizes and units will be explained [on the next page](/en/SVG/Tutorial/Positions).

### SVG File Types

SVG files come in two flavors. Normal SVG files are simple text files containing SVG markup. The recommended filename extension for these files is ".svg" (all lowercase).

Due to the potentially massive size SVG files can reach when used for some applications (e.g., geographical applications), the SVG specification also allows for gzip-compressed SVG files. The recommended filename extension for these files is ".svgz" (all lowercase). Unfortunately it is very problematic to get gzip-compressed SVG files to work reliably across all SVG capable user agents when served from Microsofts IIS server, and Firefox can not load gzip-compressed SVG from the local computer. Avoid gzip-compressed SVG except when you are publishing to a webserver that you know will serve it correctly (see below).

### A Word on Webservers

Now that you have an idea of how to create basic SVG files, the next stage is to upload them to a Webserver. There are some gotchas at this stage though. For normal SVG files, servers should send the HTTP header:

```
Content-Type: image/svg+xml
```

For gzip-compressed SVG files, servers should send the HTTP headers:

```
Content-Type: image/svg+xml
Content-Encoding: gzip
```

You can check that your server is sending the correct HTTP headers with your SVG files by using a site such as [web-sniffer.net](http://web-sniffer.net/). Submit the URL of one of your SVG files and look at the HTTP response headers. If you find that your server is not sending the headers with the values given above, then you should contact your Web host. If you have problems convincing them to correctly configure their servers for SVG, there may be ways to do it yourself. See the [server configuration page](http://svg-whiz.com/wiki/index.php?title=Server_Configuration) on the SVG wiki for a range of simple solutions.

Server misconfiguration is a very common reason for SVG failing to load, so make sure you check yours. If your server is not configured to send the correct headers with the SVG files it serves, then Firefox will most likely show the markup of the files as text or encoded garbage, or even ask the viewer to choose an application to open them.

{{ PreviousNext("SVG/Tutorial/Introduction", "SVG/Tutorial/Positions") }}
