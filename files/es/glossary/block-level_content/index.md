---
title: Elementos en bloque
slug: Glossary/Block-level_content
---

Los elementos, en HTML (lenguaje de marcas de hipertexto - **Hypertext Markup Language**) usualmente son elementos "en bloque" o [elementos "en línea"](/es/docs/Web/HTML/Elementos_en_línea). Un elemento en bloque ocupa todo el espacio de su elemento padre (contenedor), creando así un "bloque". Este artículo ayuda a explicar lo que esto significa.

Los navegadores suelen mostrar el elemento a nivel de bloque con un salto de línea antes y después del elemento. El siguiente ejemplo demuestra la influencia elementos en bloque:

## Ejemplo en bloque

HTML

```html
<p>
  Este párrafo es un elemento en bloque; este fondo se ha coloreado para mostrar
  elemento principal (o padre) del párrafo.
</p>
```

CSS

```css
p {
  background-color: #8abb55;
}
```

{{ EmbedLiveSample('Block-level_Example') }}

## Uso

- Los elementos de bloque sólo deben aparecer dentro del elemento {{ HTMLElement("body") }}.

## Elementos en bloque vs. en línea

Hay un par de diferencias clave entre los elementos en bloque y elementos en línea:

- Formateo
  - : De forma predeterminada, los elementos de bloque comienzan en una nueva línea, pero los elementos en línea pueden comenzar en cualquier parte de una línea.
- Modelo de contenido
  - : En general, los elementos en bloque pueden contener elementos en línea y otros elementos en bloque. Inherente a esta distinción estructural es la idea de que los elementos en bloque crean estructuras "más grandes" que los elementos en línea.

La distinción entre elementos en bloque frente a elementos en línea se utiliza en las especificaciones de HTML hasta la 4.01. En HTML5, esta distinción dual se sustituye por un conjunto más complejo de [categorías de contenido](/es/docs/Web/Guide/HTML/categorias_de_contenido). La categoría "en bloque" corresponde aproximadamente a la categoría de [contenido dinámico](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico) en HTML 5, mientras que "en línea" se corresponde con [contenido estático](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_textual_o_est%C3%A1tico), pero hay categorías adicionales.

## Elementos

La siguiente es una lista completa de todos los elementos en bloque de HTML (aunque "en bloque" no se define técnicamente para los elementos que son nuevos en HTML5).

- {{ HTMLElement("address") }}
  - : Información de contacto.
- {{ HTMLElement("article") }}
  - : Contenido de Articulo.
- {{ HTMLElement("aside") }}
  - : Contenido adicional.
- {{ HTMLElement("audio") }}
  - : Reproductor de audio
- {{ HTMLElement("blockquote") }}
  - : Bloque de "cita".
- {{ HTMLElement("canvas") }}
  - : Dibujo canvas.
- {{ HTMLElement("dd") }}
  - : Descripción de definición.
- {{ HTMLElement("div") }}
  - : División de documento.
- {{ HTMLElement("dl") }}
  - : Lista de definición.
- {{ HTMLElement("fieldset") }}

  - : Etiqueta de conjunto de campos.

- {{ HTMLElement("figcaption") }}
  - : Leyenda de figura.
- {{ HTMLElement("figure") }}
  - : Grupos contenido multimedia con una leyenda (ver {{ HTMLElement("figcaption") }}).
- {{ HTMLElement("footer") }}
  - : Sección o pie de página.
- {{ HTMLElement("form") }}
  - : Formulario de entrada.
- {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}
  - : Niveles de cabecera 1-6.
- {{ HTMLElement("header") }}
  - : Sección o cabecera de página.
- {{ HTMLElement("hgroup") }}
  - : Grupos información de encabezado.
- {{ HTMLElement("hr") }}
  - : Regla Horizontal (línea divisoria).
- {{ HTMLElement("li") }}
  - : Elemento de lista.
- {{ HTMLElement("main") }}
  - : Engloba el único contenido central del documento.
- {{ HTMLElement("nav") }}

  - : Contiene enlaces de navegación.

- {{ HTMLElement("noscript") }}
  - : Contenido para ser usado si los scripts no son soportados o permitidos.
- {{ HTMLElement("ol") }}
  - : Lista ordenada.
- {{ HTMLElement("output") }}
  - : Formulario de salida.
- {{ HTMLElement("p") }}
  - : Párrafo.
- {{ HTMLElement("pre") }}
  - : Texto preformateado.
- {{ HTMLElement("section") }}
  - : Sección de una página web.
- {{ HTMLElement("table") }}
  - : Tabla.
- {{ HTMLElement("tfoot") }}
  - : Pie de tabla.
- {{ HTMLElement("ul") }}
  - : Lista no ordenada.
- {{ HTMLElement("video") }}
  - : Reproductor de vídeo.

### Ver también

- [Elementos en línea](/es/docs/Web/HTML/Elementos_en_línea)
