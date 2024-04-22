---
title: Introducción a XML
slug: Web/XML/XML_introduction
---

XML es un lenguaje de marcado similar a HTML. Significa Extensible Markup Language (Lenguaje de Marcado Extensible) y es una especificación de [W3C](https://www.w3.org/TR/xml/) como lenguaje de marcado de propósito general. Esto significa que, a diferencia de otros lenguajes de marcado, XML no está predefinido, por lo que debes definir tus propias etiquetas. El propósito principal del lenguaje es compartir datos a través de diferentes sistemas, como Internet.

Hay muchos lenguajes basados en XML; Algunos ejemplos son [XHTML](/es/docs/XHTML), [MathML](/es/docs/Web/MathML), [SVG](/es/docs/Web/SVG), [XUL](/es/docs/Mozilla/Tech/XUL), [XBL](/es/docs/XBL), [RSS](/es/docs/Archive/RSS), y [RDF](/es/docs/RDF). También puedes crear uno propio.

## XML "Correcto" (válido y bien formado)

Para que un documento XML sea correcto, debe ser un documento bien formado, cumpliendo todas las reglas de sintaxis de XML, y válidas, acorde a las reglas de un lenguaje específico. Un ejemplo de un documento que no está bien formado es uno que tiene una etiqueta de apertura y no tiene una de cierre, ni se cierra en si misma.

### Ejemplo

En el ejemplo siguiente, vemos un documento en el que una etiqueta que no se cierra a si misma, no tiene etiqueta de cierre.

```xml
<message>
    <warning>
        Hola, mundo
    <!--missing </warning> -->
</message>
```

Ahora veamos una versión correcta del mismo documento:

```xml
<message>
    <warning>
         Hola, mundo
    </warning>
</message>
```

Para ser válido, un documento XML necesita cumplir ciertas reglas de semántica que son generalmente definidas en un esquema XML o en una **[Definición de Tipo de Documento](/es/docs/Glossary/DTD)** (DTD). Un documento que contiene una etiqueta no definida es inválido. Por ejemplo, si nunca definimos la etiqueta `<warning>`, el documento anterior no sería válido.

> **Nota:** La mayoría de los navegadores ofrecen un depurador que puede identificar documentos XML mal formados.

## Entidades

Al igual que HTML, XML ofrece métodos (llamados entidades) para referir a algunos caracteres especiales reservados (como el signo de mayor que, usado para las etiquetas). Hay cinco de estos caracteres que debes conocer:

| Entidad | Caracter | Descripción                    |
| ------- | -------- | ------------------------------ |
| \&lt;   | <        | Menor que                      |
| \&gt;   | >        | Mayor que                      |
| \&amp;  | &        | Ampersand                      |
| \&quot; | "        | Comilla doble                  |
| \&apos; | '        | Apóstrofe (o comilla sencilla) |

Aunque solo hay cinco entidades declaradas, se pueden añadir más usando el [DTD](/es/docs/Glossary/DTD) del documento. Por ejemplo, para crear una nueva entidad `&warning;`, puedes hacer esto:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Advertencia: Algo malo pasó... porfavor intente de nuevo.">
]>
<body>
  <message> &warning; </message>
</body>
```

También puedes usar referencias a caracteres numéricas para especificar caracteres especiales; por ejemplo, \&#xA9; es el símbolo "©".

## Presentando XML

XML es generalmente para propósitos descriptivos, pero hay maneras de presentar datos XML. Si no defines una manera específica de renderizar XML, el contenido puro de XML es mostrado en el navegador.

Una forma de estilizar la salida de XML es especificando [CSS](/es/docs/Web/CSS) que aplique al documento usando la instrucción de procesamiento `xml-stylesheet`.

```
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

También hay otra manera más poderosa de presentar XML: **Extensible Stylesheet Language Transformations** ([XSLT](/es/docs/Web/XSLT)) que puede ser usado para transformar XML a otros lenguajes como HTML. Esto hace a XML increíblemente versátil.

```
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

## Recomendaciones

Este artículo es, obviamente, sólo una breve introducción a los que es XML, con unos pocos ejemplos pequeños y referencias para iniciar. Para más detalles acerca de XML, busca en la Web artículos más a fondo.

Aprender el Lenguaje de Marcado de Hipertexto ([HTML](/es/docs/Web/HTML)) te ayudará a entender mejor XML.

## Véase también

- [XML.com](http://www.xml.com/)
- [Extensible Markup Language (XML) @ W3.org](https://www.w3.org/XML/)
- [XML Example: A List Apart](http://www.alistapart.com/d/usingxml/xml_uses_a.html)
- [Using XML: A List Apart](http://www.alistapart.com/articles/usingxml/)

El artículo [Using XML](http://www.alistapart.com/articles/usingxml/) mostrado anteriormente es un gran recurso de información para transformar y crear tu propio lenguaje.
