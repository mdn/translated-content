---
title: "<mark>: el elemento de resaltado de texto"
slug: Web/HTML/Element/mark
---

{{HTMLSidebar}}

El **Elemento HTML Mark `<mark>`** representa un texto **marcado** o **resaltado** como referencia o anotación, debido a su relevancia o importancia en un contexto particular.

{{EmbedInteractiveExample("pages/tabbed/mark.html", "tabbed-shorter")}}The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categorías de contenido</th>
      <td>Contenido de flujo, contenido de párrafo, contenido palpable</td>
    </tr>
    <tr>
      <th>Contenido permitido</th>
      <td>
        <a
          href="/en/Dom/Content_categories#Phrasing_content"
          title="en/Dom/Content categories#Phrasing content"
          >Contenido estático</a
        >
      </td>
    </tr>
    <tr>
      <th>Omisión de etiquetas</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th>Elementos padre permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a
          href="/en/Dom/Content_categories#Phrasing_content"
          title="en/Dom/Content categories#Phrasing content"
          >contenido estático</a
        >
      </td>
    </tr>
    <tr>
      <th>Roles ARIA permitidos</th>
      <td>Cualquiera</td>
    </tr>
    <tr>
      <th>Documento normativo</th>
      <td>
        <a
          class="external"
          href="http://www.google.com/url?q=http%3A%2F%2Fwww.whatwg.org%2Fspecs%2Fweb-apps%2Fcurrent-work%2Fmultipage%2Ftext-level-semantics.html%23the-mark-element&#x26;sa=D&#x26;sntz=1&#x26;usg=AFQjCNFWrrJ-Y17m5GxNva7WqE-i6zuWcA"
          rel="external nofollow"
          >HTML 5, sección 4.6.17</a
        >
      </td>
    </tr>
    <tr>
      <th>DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento no tiene atributos que no sean los [atributos globales](/es/docs/Web/HTML/Atributos_Globales), comunes a todos los elementos.

## Notas de uso

- En una cita ({{HTMLElement("q")}}) o en otro bloque ({{HTMLElement("blockquote")}}), generalmente indica texto que es de especial interés pero que no está destacado en el material de origen, o material que necesita especial escrutinio, aunque el autor original no lo considerase importante.
- Por otro lado, `<mark>` indica una parte del contenido del documento que probablemente sea relevante para el usuario. Por ejemplo, se puede utilizar en una página que muestra los resultados de búsqueda para resaltar cada uno de estos por palabra.
- No uses el elemento `<mark>` para resaltado de sintaxis; usa el elemento {{ HTMLElement("span") }} para este fin.

> **Nota:** No se debe confundir el elemento `<mark>` con el elemento {{ HTMLElement("strong") }}. El elemento {{ HTMLElement("strong") }} se utiliza para denotar intervalos de texto de especial _importancia,_ mientras que el elemento `<mark>` se utiliza para denotar intervalos de texto de especial _relevancia._

## Ejemplos

### Marcar texto de interés

En este ejemplo, \<mark> se utiliza para resaltar texto en una cita que es de particular insterés para el usuario.

```html
<blockquote>
  It is a period of civil war. Rebel spaceships, striking from a hidden base,
  have won their first victory against the evil Galactic Empire. During the
  battle, <mark>Rebel spies managed to steal secret plans</mark> to the Empire’s
  ultimate weapon, the DEATH STAR, an armored space station with enough power to
  destroy an entire planet.
</blockquote>
```

El resultado sería:

{{EmbedLiveSample("Marking_text_of_interest", 650, 130)}}

### Identificando fragmentos sensibles al contexto

Este ejemplo demuestra el uso de `<mark>` para marcar resultados de búsqueda en el fragmento.

```html
<p>
  It is a dark time for the Rebellion. Although the Death Star has been
  destroyed, <mark class="match">Imperial</mark> troops have driven the Rebel
  forces from their hidden base and pursued them across the galaxy.
</p>

<p>
  Evading the dreaded <mark class="match">Imperial</mark> Starfleet, a group of
  freedom fighters led by Luke Skywalker has established a new secret base on
  the remote ice world of Hoth.
</p>
```

Para ayudar a distinguir el uso de `<mark>` en los resultados de búsqueda de otro uso potencial, este ejemplo aplica la clase "match" a cada coincidencia.

El resultado se vería:

{{EmbedLiveSample("Identifying_context-sensitive_passages", 650, 130)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Consulta también

- Otros [elementos de la semántica a nivel de texto](/en/HTML/Text-level_semantics_elements) : {{ HTMLElement("a") }}, {{ HTMLElement("em") }}, {{ HTMLElement("strong") }}, {{ HTMLElement("cite") }} , {{ HTMLElement("q") }} , {{ HTMLElement("dfn") }}, {{ HTMLElement("abbr") }}, {{ HTMLElement("time") }} , {{ HTMLElement("code") }} ,{{ HTMLElement("var") }}, {{ HTMLElement("samp") }} ,{{ HTMLElement("kbd") }} ,{{ HTMLElement("sub") }} , {{ HTMLElement("sup") }} ,{{ HTMLElement("i") }} , {{ HTMLElement("b") }}, {{ HTMLElement("mark") }} , {{ HTMLElement("ruby") }} , {{ HTMLElement("rp") }} , {{ HTMLElement("rt") }} , {{ HTMLElement("bdo") }}, {{ HTMLElement("span") }} , {{ HTMLElement("br") }} , {{ HTMLElement("wbr") }}.
