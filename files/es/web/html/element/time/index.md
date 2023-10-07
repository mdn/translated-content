---
title: time
slug: Web/HTML/Element/time
---

El **elemento HTML `<time>`** representa un periodo específico en el tiempo. Puede incluir el atributo `datetime` para convertir las fechas en un formato interno legible por un ordenador, permitiendo mejores resultados en los motores de búsqueda o características personalizadas como recordatorios.

Puede representar uno de los contenidos siguientes:

- Una hora en formato de 24 horas
- Una fecha precisa en el [Calendario Gregoriano](https://es.wikipedia.org/wiki/Calendario_gregoriano) (con hora y zona horaria opcionales)
- [Un periodo de tiempo válido](https://www.w3.org/TR/2014/REC-html5-20141028/infrastructure.html#valid-duration-string)

{{EmbedInteractiveExample("pages/tabbed/time.html", "tabbed-standard")}}

La fuente de este ejemplo interactivo está almacenada en un repositorio de GitHub. Si desea contribuir al projecto, por favor clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples)y envíe su solicitud de extracción (pull request).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#Flow_content"
          >Contenido de flujo</a
        >,
        <a href="/es/docs/HTML/Content_categories#Phrasing_content"
          >contenido de fraseo</a
        >, contenido palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a href="/es/docs/HTML/Content_categories#Phrasing_content"
          >Contenido de fraseo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>
        Ninguna; tanto la etiqueta de inicio como de fin son obligatorias.
      </td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/HTML/Content_categories#Phrasing_content"
          >contenido de fraseo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Roles permitidos en ARIA</th>
      <td>Cualquiera</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLTimeElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Como todos los elementos de HTML, este elemento soporta los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

- `datetime`
  - : Este atributo indica la hora y/o fecha del elemento y debe estar escrito en uno de los formatos que se muestran posteriomente.

## Notas de uso

Este elemento es para presentar fechas y horas en un formato legible por el equipo. Por ejemplo, este puede ayudar a un agente de usuario ofrecer añadir un evento al calendario del usuario.

Este elemento no debe ser usado para fechas anteriores a la introducción del calendario Gregoriano (debido a complicaciones en el cálculo de dichas fechas).

El valor de fecha y hora (el valor legible por el equipo) es el valor del atributo del elemento `datetime`, que debe estar en el formato correcto (vea más adelante). Si el elemento no tiene un atributo `datetime`, **no debe tener ningún elemento descendiente**, y el valor datetime es el contenido de texto del hijo del elemento.

### Valores datetime válidos

- una cadena válida de año

  - : `2011`

    `0001`

- una cadena válida de mes
  - : `2011-11`
- una cadena válida de fecha
  - : `2011-11-18`
- una cadena de fecha sin año válida
  - : `11-18`
- una cadena de semana válida
  - : `2011-W47`
- una cadena de hora válida

  - : `14:54`

    `14:54:39`

    `14:54:39.929`

- una cadena de fecha y hora local válida

  - : `2011-11-18T14:54:39.929`

    `2011-11-18 14:54:39.929`

- una cadena de fecha y hora global válida

  - : `2011-11-18T14:54:39.929Z`

    `2011-11-18T14:54:39.929-0400`

    `2011-11-18T14:54:39.929-04:00`

    `2011-11-18 14:54:39.929Z`

    `2011-11-18 14:54:39.929-0400`

    `2011-11-18 14:54:39.929-04:00`

- una cadena valida de duración
  - : `PT4H18M3S`

## Ejemplos

### Ejemplo Simple

#### HTML

```html
<p>El concierto empieza a las <time>20:00</time>.</p>
```

#### Output

{{ EmbedLiveSample('Simple_example', 250, 60) }}

### Ejemplo con `datetime`

#### HTML

```html
<p>El concierto fué el <time datetime="2001-05-15T19:00">15 de Mayo</time>.</p>
```

#### Output

{{ EmbedLiveSample('Datetime_example', 250, 60) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El elemento {{HTMLElement("data")}}, permite señalizar otro tipo de valores.
