---
title: Tipos de enlaces
slug: Web/HTML/Attributes/rel
---

{{HTMLSidebar}}

En HTML, los siguientes tipos de enlaces indican la relación entre dos documentos, de los cuales uno enlaza al otro usando un elemento {{HTMLElement("a")}} o bien {{HTMLElement("area")}}, o bien {{HTMLElement("link")}}.

<table class="standard-table">
    <caption>Lista de tipos de link y su significado en HTML</caption>
    <thead>
     <tr>
      <th scope="col">Tipo de Link</th>
      <th scope="col">Descripción</th>
      <th scope="col" style="width: 12em;">Permitido en estos elementos</th>
      <th scope="col">No permitido en estos elementos</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td><code>alternate</code></td>
      <td>
       <ul>
        <li>Si el elemento es {{HTMLElement("link")}} y el atributo <a href="/es/docs/Web/HTML/Element/link#rel"><code>rel</code></a> tambien contiene el tipo <code>stylesheet</code>, el enlace define una <a href="/es/docs/Alternative_style_sheets">hoja de estilo alternativa</a>; en ese caso el atributo <a href="/es/docs/Web/HTML/Element/link#title"><code>title</code></a> deberá estar presente y no ser una cadena vacia.</li>
        <li>Si el atributo <a href="/es/docs/Web/HTML/Element/link#type"><code>type</code></a> es puesto a <code>application/rss+xml</code> o <code>application/atom+xml</code>, el enlace define un <a href="/es/docs/RSS/Getting_Started/Syndicating">feed de distribución</a>. El primero de ellos definido en la pagina es el tomado por default.</li>
        <li>De otra forma, el enlace define una pagina alternativa, de uno de los siguientes tipos:
         <ul>
          <li>para otros medios, como un dispositivo portatil (si el atributo <a href="/es/docs/Web/HTML/Element/link#media"><code>media</code></a> esta indicado)</li>
          <li>en otro lenguaje (si el atributo <a href="/es/docs/Web/HTML/Element/link#hreflang"><code>hreflang</code></a> esta indicado),</li>
          <li>en otro formato, como un PDF (si el atributo <a href="/es/docs/Web/HTML/Element/link#type"><code>type</code></a> esta indicado)</li>
          <li>una combinacion de los anteriores.</li>
         </ul>
        </li>
       </ul>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None</em>.</td>
     </tr>
     <tr>
      <td><code>archives</code></td>
      <td>Define un hipervínculo a un documento que contiene un enlace de archivo a este. Por ejemplo, la entrada de un blog podria enlazar a una página de indice mensual de esta forma.<br>
       <br>
       <strong>Nota:</strong> Aunque se reconoce, el singular <code>archive</code> es incorrecto y debe ser evitado.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>author</code></td>
      <td>Define un hipervinculo a una página describiendo el autor o proporcionando una forma de contactar al autor.<br>
       <br>
       <strong>Nota:</strong> Este puede ser un hipervinculo <code>mailto:</code>, pero esto no es recomendable en paginas públicas por que robots cosechadores podrian rápidamente llevar una gran cantidad de span a esa dirección. En ese caso, es mejor mandarlos a una página con un formulario de contacto.<br>
       <br>
       Aunque reconocido, el atributo <a href="/es/docs/Web/HTML/Element/link#rev"><code>rev</code></a> en elementos {{HTMLElement("a")}}, {{HTMLElement("area")}} o {{HTMLElement("link")}} con un enlace de tipo <code>made</code> es incorrecto y debiera ser reemplazado por el atributo <a href="/es/docs/Web/HTML/Element/link#rel"><code>rel</code></a> con este tipo de enlace.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>bookmark</code></td>
      <td>Indica que el hipervínculo es un <a href="/es/docs/Permalink">permalink</a> al ancestro más cercano del elemento {{HTMLElement("article")}}. Si no hay ninguno, entonces es un permalink para la <a href="/es/docs/Sections_and_Outlines_of_an_HTML5_document">sección</a> con la que el elemento está más estrechamente asociado.<br>
       <br>
       Esto permite crear marcadores a un artículo en particular dentro de una página con múltiples artículos, como por ejemplo una página con un resumen mensual de un blog, o un agregador de blog.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>{{HTMLElement("link")}}</td>
     </tr>
     <tr>
      <td><code>external</code></td>
      <td>Indica que el hipervínculo llevará a una fuente externa al sitio en el que se encuentra la página actual; o lo que es lo mismo, seguir el enlace hará que el usuario abandone el sitio.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>{{HTMLElement("link")}}</td>
     </tr>
     <tr>
      <td><code>first</code></td>
      <td>
       <p>Indica que el hipervínculo conduce al primer recurso de la <em>secuencia</em> en la que se encuentra la página actual.<br>
         </p>
       <p><strong>Nota:</strong> Otros tipos de enlaces relacionados con los recursos en secuencia son <code>last</code>, <code>prev</code>, <code>next</code>.</p>
       <p>Aunque parezca evidente, los sinónimos <code>being</code> y <code>start</code> son incorrectos y deben evitarse.</p>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>help</code></td>
      <td>
       <ul>
        <li>If the element is {{HTMLElement("a")}} or {{HTMLElement("area")}}, it indicates that the hyperlink leads to a resource giving further help about the parent of the element, and its descendants.</li>
        <li>If the element is {{HTMLElement("link")}} it indicates that the hyperlink leads to a resource giving further help about the page as a whole.</li>
       </ul>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>icon</code></td>
      <td>Defines a resource for representing the page in the user interface, usually an icon (auditory or visual).<br>
       <br>
       The <a href="/es/docs/Web/HTML/Element/link#media"><code>media</code></a>, <a href="/es/docs/Web/HTML/Element/link#type"><code>type</code></a> and <a href="/es/docs/Web/HTML/Element/link#sizes"><code>sizes</code></a> attributes allow the browser to select the most appropriate icon for its context. If several resources match, the browser will select the last one declared, in tree order. As these attributes are merely hints, and the resources may be inappropriate upon further inspection, the browser will then select another one, if appropriate.<br>
       <br>
       <strong>Note:</strong> Apple's iOS does not use this link type, nor the <a href="/es/docs/Web/HTML/Element/link#sizes"><code>sizes</code></a> attribute, like others mobile browsers do, to select a webpage icon for Web Clip or a start-up placeholder. Instead it uses the non-standard <a href="http://edr.euro.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4"><code>apple-touch-icon</code></a> and <a href="http://edr.euro.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6"><code>apple-touch-startup-image</code></a> respectively.<br>
       <br>
       The <code>shortcut</code> link type is often seen before <code>icon</code>, but this link type is non-conforming, ignored and <strong>web authors must not use it anymore</strong>.</td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
     </tr>
     <tr>
      <td><code>index</code></td>
      <td>Indicates that the page is part of a <em>hierarchical</em> structure and that the hyperlink leads to the top level resource of that structure.<br>
       <br>
       If one or several <code>up</code> link types are also present, the number of these <code>up</code> indicates the depth of the current page in the hierarchy.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>last</code></td>
      <td>Indicates that the hyperlink leads to the <em>last</em> resource of the <em>sequence</em> the current page is in.<br>
       <br>
       <strong>Note:</strong> Other link types related to linking resources in the same sequence are <code>first</code>, <code>prev</code>, <code>next</code>.<br>
       <br>
       Although recognized, the synomyn <code>end</code> is incorrect and must be avoided.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>license</code></td>
      <td>Indicates that the hyperlink leads to a document describing the licensing information. If not inside the {{HTMLElement("head")}} element, the standard doesn't distinguish between a hyperlink applying to a specific part of the document or to the document as a whole. Only the data on the page can indicate this.<br>
       <br>
       <strong>Note: </strong>Although recognized, the synonym <code>copyright</code> is incorrect and must be avoided.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>next</code></td>
      <td>Indicates that the hyperlink leads to the <em>next</em> resource of the <em>sequence</em> the current page is in.<br>
       <br>
       <strong>Note:</strong> Other link types related to linking resources in the same sequence are <code>first</code>, <code>prev</code>, <code>last</code>.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>nofollow</code></td>
      <td>Indica que el documento enlazado no cuenta con el aval o aprobación del autor de este documento, por ejemplo si no tiene control sobre el mismo, si es un mal ejemplo o si hay una relación comercial entre los dos (un enlace de pago). Este enlace puede ser usado por algunos motores de búsqueda que usan técnicas de clasificación de popularidad.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>{{HTMLElement("link")}}</td>
     </tr>
     <tr>
      <td><code>noreferrer</code></td>
      <td>
       <p>Prevents the browser, when navigating to another page, to send this page name, or any other value, as referrer via the <code>Referer:</code> HTTP header.<br>
        (In Firefox, before Firefox 37, this worked only in links found in pages. Links clicked in the UI, like "Open in a new tab" via the contextual menu, doesn't abide for this value)</p>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>{{HTMLElement("link")}}</td>
     </tr>
     <tr>
      <td><code>pingback</code></td>
      <td>Defines an external resource URI to call if one make a comment or a citation about the webpage. The protocol used to make such a call is defined in the <a href="http://www.hixie.ch/specs/pingback/pingback">Pingback 1.0</a> specification.<br>
       <br>
       <strong>Note:</strong> if the <code>X-Pingback:</code> HTTP header is also present, this header has precedence over the {{HTMLElement("link")}} element with this link type</td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
     </tr>
     <tr>
      <td><code>preconnect</code> {{experimental_inline}}</td>
      <td>Hints the browser to open in advance the connection to the linked web site, without disclosing any private information.</td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
     </tr>
     <tr>
      <td><code>prefetch</code></td>
      <td>Hints the browser to fetch in advance the linked resource, as it will likely be requested by the user.<br>
       <br>
       <strong>Note:</strong> the <a href="/es/docs/Link_prefetching_FAQ">Link Prefetch FAQ</a> has details on which links can be prefetched and on alternative methods.</td>
      <td>{{HTMLElement("a")}} {{unimplemented_inline}},<br>
       {{HTMLElement("area")}} {{unimplemented_inline}},<br>
       {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>preload</code></td>
      <td>Tells the browser to download a resource because this resource will be needed later during the current navigation.</td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
     </tr>
     <tr>
      <td><code>prerender</code> {{experimental_inline}}</td>
      <td>Comunica al navegador que carge en segundo plano el recurso suministrado (Pagina Web).</td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
     </tr>
     <tr>
      <td><code>prev</code></td>
      <td>Indicates that the hyperlink leads to the <em>preceding</em> resource of the <em>sequence</em> the current page is in.<br>
       <br>
       <strong>Note:</strong> other link types related to linking resources in the same sequence are <code>first</code>, <code>last</code>, <code>next</code>.<br>
       <br>
       Although recognized, the synomyn <code>previous</code> is incorrect and must be avoided.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>search</code></td>
      <td>Indicates that the hyperlink reference a document whose interface is specially designing for searching in this document, or site, and its resources.<br>
       <br>
       If the <a href="/es/docs/Web/HTML/Element/link#type"><code>type</code></a> attribute is set to <code>application/opensearchdescription+xml </code>the resource is an <a href="/es/docs/Creating_OpenSearch_plugins_for_Firefox">OpenSearch plugin</a> that can be easily added to the interface of some browsers like Firefox or Internet Explorer.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>stylesheet</code></td>
      <td>Defines an external resource to be used as a stylesheet. If the <code>type</code> is not set, the browser should assume it is a <code>text/css</code> stylesheet until further inspection.<br>
       <br>
       If used in combination with the <code>alternate</code> keyword, it defines an <a href="/es/docs/Alternative_style_sheets">alternative style sheet</a>; in that case the <a href="/es/docs/Web/HTML/Element/link#title"><code>title</code></a> attribute must be present and not be the empty string.</td>
      <td>{{HTMLElement("link")}}</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
     </tr>
     <tr>
      <td><code>sidebar</code></td>
      <td>Indicates that the hyperlink leads to a resource that would be better suited for a secondary browsing context, like a <em>sidebar</em>. Browsers, that don't have such a context will ignore this keyword.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>tag</code></td>
      <td>Indicates that the hyperlink refers to a document describing a <em>tag</em> that applies to this document.<br>
       <br>
       <strong>Note:</strong> this link type should not be set on links to a member of a tag cloud as these do not apply to a single document but to a set of pages.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
     <tr>
      <td><code>up</code></td>
      <td>Indicates that the page is part of a <em>hierarchical</em> structure and that the hyperlink leads to the higher level resource of that structure.<br>
       <br>
       The number of <code>up</code> link types indicates the depth difference between the current page and the linked resource.</td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}}</td>
      <td><em>None.</em></td>
     </tr>
    </tbody>
   </table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
