---
title: Getting Started
slug: Web/SVG/Tutorials/SVG_from_scratch/Getting_started
original_slug: Web/SVG/Tutorial/Getting_Started
---

{{SVGRef}}{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}

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
   - Antes de SVG 2, para identificar la versión del SVG para otros tipos de validación se debían utilizar siempre los atributos `version` y `baseProfile` en su lugar. Los atributos `version` y `baseProfile` están obsoletos en SVG 2.
   - Debido a SVG es una especie de dialecto de XML, SVG debe unir siempre los namespaces correctamente (en el atributo xmlns). Para mayor información, vea [Namespaces Crash Course](/es/docs/Web/SVG/Namespaces_Crash_Course).

2. El fondo esta puesto en rojo dibujando un rectangulo `<rect/>` que cubre el area de la imagen.
3. Un círculo verde `<circle/>` con un radio de 80px se dibuja encima del centro del rectángulo rojo (el centro del círculo es desplazado 150px a la derecha, y 100px hacia abajo desde la esquina superior izquierda).
4. El texto "SVG" esta dibujado. El interior de cada letra esta relleno con blanco.El texto se coloca mediante el establecimiento de un ancla en donde queremos que el punto medio sea: en este caso, el punto medio debe corresponder al centro del circulo verde. Los ajustes finos se pueden hacer con el tamaño de la fuente y la posición vertical para garantizar que el resultado final sea estéticamente agradable.

### Propiedades básicas de los archivos SVG

- Lo primero que hay que tener en cuenta es el orden de representación de los elementos. La regla globalmente válida para los archivos SVG es que los elementos posteriores se renderizan encima de los anteriores. Cuanto más abajo esté un elemento, más visible será.
- En la web, los archivos SVG pueden mostrarse directamente en el navegador o incrustarse en archivos HTML mediante varios métodos:
  - Si el HTML es XHTML y se entrega como tipo application/xhtml+xml, el SVG puede incrustarse directamente en la fuente XML.
  - El SVG también puede incrustarse directamente en HTML.
  - Se puede utilizar con el elemento [`<img>`](/es/docs/Web/HTML/Reference/Elements/img)
  - Se puede hacer referencia al archivo SVG con un elemento `object`:

    ```html
    <object data="image.svg" type="image/svg+xml" />
    ```

  - También pueden utilizarse con un elemento `iframe`:

    ```html
    <iframe src="image.svg"></iframe>
    ```

  - Por último, SVG puede crearse dinámicamente con JavaScript e inyectarse en el DOM de HTML.

- El manejo de tamaños y unidades en SVG va a ser explicado en la próxima página

### Tipos de archivos SVG

Los archivos SVG son de dos tipos. Los archivos SVG normales, que son simples archivos de texto que contienen marcas SVG y tienen como extensión recomendada ".svg" (todo en minúsculas).

Debido al enorme tamaño que pueden alcanzar los archivos SVG cuando se utilizan para algunas aplicaciones (por ejemplo, aplicaciones geográficas), la especificación SVG también permite archivos SVG comprimidos con gzip. La extensión recomendada para estos archivos es ".svgz" (todo en minúsculas). Desafortunadamente, es muy problemático conseguir que los archivos SVG comprimidos con gzip funcionen de forma fiable en todos los agentes de usuario con capacidad SVG cuando se sirven desde un servidor Microsoft IIS, y Firefox no puede cargar SVG comprimidos con gzip desde el ordenador local. Evite los archivos SVG comprimidos con gzip excepto cuando los publique en un servidor web que sepa que los servirá correctamente (véase más abajo).

### Unas palabras sobre los servidores web para archivos .svgz

Ahora que ya sabemos cómo crear archivos SVG básicos, lo siguiente es subirlos a un servidor web. Sin embargo, hay algunos problemas en esta etapa. Para los archivos SVG normales, los servidores deben enviar el encabezado HTTP:

```http
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

Para los archivos SVG comprimidos con gzip, los servidores deben enviar las cabeceras HTTP:

```http
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

Puede comprobar que su servidor envía las cabeceras HTTP correctas con sus archivos SVG utilizando el [panel de monitoreo de red](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers) o un sitio como [WebSniffer](https://websniffer.com/). Coloque la URL de uno de sus archivos SVG y observe las cabeceras de la respuesta HTTP. Si comprueba que su servidor no envía las cabeceras con los valores indicados anteriormente, póngase en contacto con su proveedor de alojamiento web. Si tiene problemas para convencerles de que configuren correctamente sus servidores para SVG, puede que haya formas de hacerlo usted mismo. Consulte la [página de configuración del servidor](https://www.w3.org/services/svg-server/) en w3.org para ver una serie de soluciones sencillas.

La configuración incorrecta del servidor es una razón muy común para que SVG no se cargue, así que asegúrese de comprobar la suya. Si su servidor no está configurado para enviar las cabeceras correctas con los archivos SVG que esta sirviendo, lo más probable es que Firefox muestre el marcado de los archivos como texto o basura codificada, o incluso que pida al usuario que elija una aplicación para abrirlos.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}
