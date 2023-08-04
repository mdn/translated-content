---
title: "<title>: El elemento Título del documento"
slug: Web/HTML/Element/title
---

{{HTMLSidebar}}

El elemento **`<title>`** [HTML](/es/docs/Web/HTML) define el título del documento que se muestra en un {{glossary("Browser", "browser")}} la barra de título o la pestaña de una página. Solo contiene texto; las etiquetas dentro del elemento se ignoran.

```html
<title>Diario del festival de heavy metal de la abuela</title>
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/Guide/HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/Guide/HTML/Content_categories#contenido_de_metadatos"
          >Contenido de metadatos</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        Texto que no es un {{glossary("whitespace","espacio en blanco")}} entre elementos.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>
        Se requieren etiquetas de apertura y cierre. Tenga en cuenta que
        omitir <code>&#x3C;/title></code> haría que el navegador
        ignore el resto de la página.
      </td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Un elemento {{ HTMLElement("head") }} que no contiene ningún
        otro elemento {{ HTMLElement("title") }}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Sin rol correspondiente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>No se permite <code>role</code>.</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLTitleElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento solo incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

## Notas de uso

El elemento `<title>` siempre se usa dentro del bloque {{HTMLElement("head")}} de una página.

### Títulos de página y SEO

El contenido del título de una página puede tener implicaciones significativas para la optimización de motores de búsqueda ({{glossary("SEO")}}). En general, un título descriptivo más largo funciona mejor que los títulos cortos o genéricos. El contenido del título es uno de los componentes que utilizan los algoritmos de los motores de búsqueda para decidir el orden en el que enumerar las páginas en los resultados de búsqueda. Además, el título es el "gancho" inicial mediante el cual captas la atención de los lectores que miran la página de resultados de búsqueda.

Algunas pautas y consejos para componer buenos títulos:

- Evite los títulos de una o dos palabras. Utilice una frase descriptiva o una combinación de términos y definiciones para las páginas de glosario o estilo de referencia.
- Los motores de búsqueda suelen mostrar los primeros 55 a 60 caracteres del título de una página. El texto más allá de eso puede perderse, así que trate de no tener títulos más largos que eso. Si debe usar un título más largo, asegúrese de que las partes importantes aparezcan antes y que no haya nada crítico en la parte del título que es probable que se elimine.
- No utilice "_blobs_ de palabras clave." Si su título es solo una lista de palabras, los algoritmos a menudo reducen la posición de su página en los resultados de búsqueda.
- Trate de asegurarse de que sus títulos sean lo más únicos posible dentro de su propio sitio. Los títulos duplicados, o casi duplicados, pueden contribuir a resultados de búsqueda inexactos.

## Ejemplo

```html
<title>Cosas increíbles e interesantes</title>
```

Este ejemplo establece una página cuyo título (tal como se muestra en la parte superior de la ventana o en la pestaña de la ventana) es "Cosas increíbles e interesantes".

## Problemas de accesibilidad

Es importante proporcionar un título preciso y conciso para describir el propósito de la página.

Una técnica de navegación común para los usuarios de tecnología de asistencia es leer el título de la página e inferir el contenido que contiene. Esto se debe a que navegar en una página para determinar su contenido puede ser un proceso lento y potencialmente confuso. Los títulos deben ser únicos para cada página de un sitio web, idealmente mostrando primero el propósito principal de la página, seguido del nombre del sitio web. Seguir este patrón ayudará a garantizar que el lector de pantalla anuncie primero el propósito principal de la página. Esto brinda una experiencia mucho mejor que tener que escuchar el nombre de un sitio web antes del título único de la página, para cada página a la que navega un usuario en el mismo sitio web.

### Ejemplo

```html
<title>
  Menú - Comida china Blue House - FoodYum: ¡Comida a domicilio en línea hoy!
</title>
```

Si el envío de un formulario contiene errores y el envío vuelve a representar la página actual, el título se puede usar para ayudar a que los usuarios se den cuenta de cualquier error en su envío. Por ejemplo, actualice el valor de `title` de la página para reflejar cambios significativos en el estado de la página (como problemas de validación de formularios).

### Ejemplo

```html
<title>
  2 errores - Tu orden - Comida china Blue House - FoodYum: ¡Comida a domicilio
  en línea hoy!
</title>
```

> **Nota:** Actualmente, los lectores de pantalla no anunciarán automáticamente la actualización dinámica del título de una página. Si va a actualizar el título de la página para reflejar cambios significativos en el estado de una página, entonces también puede ser necesario el uso de [regiones en vivo de ARIA](/es/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).

- [MDN Entendiendo las WCAG, Directriz 2.4 explicaciones](/es/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Entendiendo el Criterio de Conformidad 2.4.2 | W3C Entendiendo las WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
