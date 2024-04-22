---
title: Conceptos básicos de Fetch
slug: Web/API/Fetch_API/Basic_concepts
---

{{DefaultAPISidebar("Fetch API")}}

La [API Fetch](/es/docs/Web/API/Fetch_API) proporciona una interfaz para obtener recursos (incluso a traves de la red). Parecera familiar a quien sea que haya usado {{domxref("XMLHttpRequest")}}, pero proporciona un conjunto de características más potentes y flexibles. Este artículo explica algunos de los conceptos básicos de la API Fetch.

> **Nota:** Este artículo será añadido en un futuro. Si encuenta un concepto de Fetch que siente necesita una mejor explicación, hagalo saber a alguien en el [foro de discusión de MDN](https://discourse.mozilla-community.org/c/mdn), o [Mozilla IRC](https://wiki.mozilla.org/IRC) (#mdn room.)

## En pocas palabras

En el corazón de Fetch estan las abstracciones de interfaz de cargas de HTTP {{domxref("Request")}}s, {{domxref("Response")}}s, {{domxref("Headers")}}, y {{domxref("Body")}}, junto a un método {{domxref("GlobalFetch.fetch","global fetch")}} para inicializar peticiones de recurso asíncronos. Porque los prinipales componentes de HTTP son abstraídos como objetos Javascript, es sencillo para otras APIs el hacer uso de dicha funcionalidad.

[Service Workers](/es/docs/Web/API/ServiceWorker_API) es un ejemplo de una API que hace un fuerte uso de Fetch.

Fetch toma la naturaleza asíncrona de dichas peticiones un paso adelante. La API esta completamente basada en {{jsxref("Promise")}}.

## Guard

Guard es una característica de objetos {{domxref("Headers")}}, con los valores posibles `immutable`, `request`, `request-no-cors`, `response`, o `none`, dependiendo de donde el encabezado es usado.

Cuando un nuevo objeto {{domxref("Headers")}} es creado usando el {{domxref("Headers.Headers","Headers()")}} {{glossary("constructor")}}, su guarda (guard) se establece a `none` (por defecto). Cuando un objeto {{domxref("Request")}} o {{domxref("Response")}} es creado, tiene un objeto {{domxref("Headers")}} asociado cuyo guarda (guard) se establece como se resume a continuación:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">nuevo tipo de objeto</th>
      <th scope="col">creando el constructor</th>
      <th scope="col">
        configuraciones de guarda (guard) del objeto
        {{domxref("Headers")}} asociado
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">{{domxref("Request")}}</td>
      <td>{{domxref("Request.Request","Request()")}}</td>
      <td><code>request</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Request.Request","Request()")}} con
        {{domxref("Request.mode","mode")}} de <code>no-cors</code>
      </td>
      <td><code>request-no-cors</code></td>
    </tr>
    <tr>
      <td rowspan="2">{{domxref("Response")}}</td>
      <td>{{domxref("Response.Response","Response()")}}</td>
      <td><code>response</code></td>
    </tr>
    <tr>
      <td>
        Métodos {{domxref("Response.error","error()")}} o
        {{domxref("Response.redirect","redirect()")}}
      </td>
      <td><code>immutable</code></td>
    </tr>
  </tbody>
</table>

Un guarda (guard) de encabezado afecta los métodos {{domxref("Headers.set","set()")}}, {{domxref("Headers.delete","delete()")}}, y {{domxref("Headers.append","append()")}} que cambían los contenidos del encabezado. Un `TypeError` es arrojado si se trata modificar un objeto {{domxref("Headers")}} cuyo guarda (guard) es `immutable`. Sin embargo, la operación funcionará si

- guard es `request` y el nombre del encabezado no es un {{Glossary("forbidden header name")}} .
- guard es `request-no-cors` y el encabezado _nombre/valor_ es un {{Glossary("simple header")}} .
- guard es `response` y el nombre del encabezado no es {{Glossary("forbidden response header name")}}.
