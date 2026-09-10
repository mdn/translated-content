---
title: Elemento de metadatos HTML `<meta>`
short-title: <meta>
slug: Web/HTML/Reference/Elements/meta
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

El elemento **`<meta>`** de [HTML](/es/docs/Web/HTML) representa {{Glossary("Metadata", "metadatos")}} que no pueden representarse mediante otros elementos relacionados con metadatos, como {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} o {{HTMLElement("title")}}.

El elemento `<meta>` puede proporcionar los siguientes tipos de metadatos:

- Si se establece el atributo [`name`](/es/docs/Web/HTML/Reference/Elements/meta/name), el elemento `<meta>` proporciona _metadatos a nivel de documento_ que se aplican a toda la página.
- Si se establece el atributo [`http-equiv`](/es/docs/Web/HTML/Reference/Elements/meta/http-equiv), el elemento `<meta>` actúa como una _directiva pragma_ para simular directivas que de otro modo se indicarían mediante un encabezado HTTP.
- Si se establece el atributo [`charset`](#charset), el elemento `<meta>` es una _declaración de charset_ que indica la codificación de caracteres en la que está codificado el documento.
- Si se establece el atributo [`itemprop`](/es/docs/Web/HTML/Reference/Global_attributes/itemprop), el elemento `<meta>` proporciona _metadatos definidos por el usuario_.

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> El atributo [`name`](/es/docs/Web/HTML/Reference/Elements/meta/name) tiene un significado específico para el elemento `<meta>`.
> El atributo [`itemprop`](/es/docs/Web/HTML/Reference/Global_attributes/itemprop) no debe establecerse en un elemento `<meta>` que incluya un atributo [`name`](/es/docs/Web/HTML/Reference/Elements/meta/name), [`http-equiv`](/es/docs/Web/HTML/Reference/Elements/meta/http-equiv) o [`charset`](#charset).

- `charset`
  - : Este atributo declara la codificación de caracteres del documento. Si el atributo está presente, su valor debe coincidir, sin distinguir mayúsculas de minúsculas (ASCII), con la cadena `"utf-8"`, ya que UTF-8 es la única codificación válida para los documentos HTML5. Los elementos `<meta>` que declaran una codificación de caracteres deben ubicarse por completo dentro de los primeros 1024 bytes del documento.
- [`content`](/es/docs/Web/HTML/Reference/Attributes/content)
  - : Este atributo contiene el valor para el atributo [`http-equiv`](/es/docs/Web/HTML/Reference/Elements/meta/http-equiv) o [`name`](/es/docs/Web/HTML/Reference/Elements/meta/name), según cuál se utilice.
- [`http-equiv`](/es/docs/Web/HTML/Reference/Elements/meta/http-equiv)
  - : Define una directiva pragma, es decir, instrucciones para que el navegador procese el documento.
    El nombre del atributo es la abreviatura de `http-equivalent`, ya que los valores permitidos son nombres de cabeceras HTTP equivalentes.
- `media`
  - : El atributo `media` define a qué medios se debe aplicar el color del tema definido en el atributo `content`.
    Su valor es una [consulta de medios](/es/docs/Web/CSS/Guides/Media_queries/Using) que, si el atributo no está presente, toma el valor `all` de forma predeterminada.
    Este atributo solo es relevante cuando el atributo [`name`](/es/docs/Web/HTML/Reference/Elements/meta/name) del elemento tiene el valor [`theme-color`](/es/docs/Web/HTML/Reference/Elements/meta/name/theme-color).
    En cualquier otro caso, no tiene efecto y no debe incluirse.
- [`name`](/es/docs/Web/HTML/Reference/Elements/meta/name)
  - : Los atributos `name` y `content` pueden usarse juntos para proporcionar metadatos del documento como pares nombre-valor: el atributo `name` indica el nombre del metadato y el atributo `content` indica su valor.

## Ejemplos

### Establecer una descripción meta

La siguiente etiqueta `<meta>` proporciona una `description` como metadato para la página web:

```html
<meta
  name="description"
  content="La referencia de HTML describe todos los elementos y atributos de HTML, incluidos los atributos globales que se aplican a todos los elementos." />
```

### Establecer una redirección de página

El siguiente ejemplo utiliza `http-equiv="refresh"` para indicarle al navegador que realice una redirección.
El atributo `content="3;url=https://www.mozilla.org"` redirigirá la página a `https://www.mozilla.org` después de 3 segundos:

```html
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/es/docs/Web/HTML/Guides/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_metadatos"
          >Contenido de metadatos</a
        >. Si está presente el atributo <a href="/es/docs/Web/HTML/Reference/Global_attributes/itemprop"><code>itemprop</code></a>:
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_flujo"
          >Contenido de flujo</a
        >,
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_frase"
          >Contenido de frase</a
        >.
      </td>
    </tr>
    <tr>
      <th>Contenido permitido</th>
      <td>Ninguno; es un {{Glossary("void element", "elemento vacío")}}.</td>
    </tr>
    <tr>
      <th>Omisión de etiquetas</th>
      <td>Debe tener una etiqueta de apertura y no debe tener etiqueta de cierre.</td>
    </tr>
    <tr>
      <th>Padres permitidos</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>,
            <code>&#x3C;meta http-equiv></code>: un elemento
            {{HTMLElement("head")}}. Si el
            <a href="/es/docs/Web/HTML/Reference/Elements/meta/http-equiv"><code>http-equiv</code></a> no es una
            declaración de codificación, también puede estar dentro de un
            elemento {{HTMLElement("noscript")}}, a su vez dentro de un
            elemento <code>&#x3C;head></code>.
          </li>
          <li>
            <code>&#x3C;meta name></code>: cualquier elemento que acepte
            <a
              href="/es/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >contenido de metadatos</a
            >.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: cualquier elemento que acepte
            <a
              href="/es/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >contenido de metadatos</a
            >
            o
            <a href="/es/docs/Web/HTML/Guides/Content_categories#flow_content"
              >contenido de flujo</a
            >.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Sin rol correspondiente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>Ningún <code>role</code> permitido</td>
    </tr>
    <tr>
      <th>Interfaz DOM</th>
      <td>{{domxref("HTMLMetaElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Nombres de metadatos estándar](/es/docs/Web/HTML/Reference/Elements/meta/name)
- [Aprende: `<meta>`](/es/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadatos_el_elemento_meta)
