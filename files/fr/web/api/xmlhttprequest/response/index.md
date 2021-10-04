---
title: XMLHttpRequest.response
slug: Web/API/XMLHttpRequest/response
tags:
  - AJAX
  - Reference
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest/response
---
{{draft}}{{APIRef('XMLHttpRequest')}}La propriété `XMLHttpRequest.response` contient le corps de la réponse. Elle peut être de type ArrayBuffer, Blob, Document, un objet JavaScript ou une DOMString en fonction de la valeur de la propriété `XMLHttpRequest.responseType`. La réponse ( `Value of response` ) est nulle si la requête est incomplète ou n'as pas été effectué avec succès. Cependant, si `responseType` est "text" ou une chaine vide et tant que la requête est en cours ( dans l'état _loading_ ), `response` peut contenir la réponse partielle.

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Valeur de <code>responseType</code></td>
      <td class="header">
        Type de donnée de la propriété <code>response</code>
      </td>
    </tr>
    <tr>
      <td><code>""</code></td>
      <td>{{domxref("DOMString")}} (valeur par défaut)</td>
    </tr>
    <tr>
      <td><code>"arraybuffer"</code></td>
      <td>{{domxref("ArrayBuffer")}}</td>
    </tr>
    <tr>
      <td><code>"blob"</code></td>
      <td>{{domxref("Blob")}}</td>
    </tr>
    <tr>
      <td><code>"document"</code></td>
      <td>{{domxref("Document")}}</td>
    </tr>
    <tr>
      <td><code>"json"</code></td>
      <td><p>Objet JavaScript depuis une réponse JSON.</p></td>
    </tr>
    <tr>
      <td><code>"text"</code></td>
      <td>{{domxref("DOMString")}}</td>
    </tr>
    <tr>
      <td><code>"moz-blob"</code> {{non-standard_inline}}</td>
      <td>
        <p>
          Used by Firefox to allow retrieving partial {{domxref("Blob")}}
          data from progress events. This lets your progress event handler start
          processing data while it's still being received.
          {{gecko_minversion_inline("12.0")}}
        </p>
      </td>
    </tr>
    <tr>
      <td><code>"moz-chunked-text"</code>{{non-standard_inline}}</td>
      <td>
        <p>
          Similar to <code>"text"</code>, but is streaming. This means that the
          value in <code>response</code> is only available during dispatch of
          the <code>"progress"</code> event and only contains the data received
          since the last <code>"progress"</code> event.
        </p>
        <p>
          When <code>response</code> is accessed during a
          <code>"progress"</code> event it contains a string with the data.
          Otherwise it returns <code>null</code>.
        </p>
        <p>
          This mode currently only works in Firefox.
          {{gecko_minversion_inline("9.0")}}
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>"moz-chunked-arraybuffer"</code>{{non-standard_inline}}
      </td>
      <td>
        <p>
          Similar to <code>"arraybuffer"</code>, but is streaming. This means
          that the value in <code>response</code> is only available during
          dispatch of the <code>"progress"</code> event and only contains the
          data received since the last <code>"progress"</code> event.
        </p>
        <p>
          When <code>response</code> is accessed during a
          <code>"progress"</code> event it contains a string with the data.
          Otherwise it returns <code>null</code>.
        </p>
        <p>
          This mode currently only works in Firefox.
          {{gecko_minversion_inline("9.0")}}
        </p>
      </td>
    </tr>
    <tr>
      <td>"ms-stream"{{non-standard_inline}}</td>
      <td>
        <p>
          Indique que la réponse est une partie d'un téléchargement d'un flux
          (?). Supporté uniquement pour les requêtes des téléchargements et
          disponible uniquement dans Internet Explorer.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> **Note :** À partir de Gecko 11.0 {{geckoRelease("11.0")}} et de WebKit build 528, ces navigateurs ne permettent plus l'utilisation de l'attribut `responseType` lors des requêtes synchrones. Cela renvoi l'erreur `NS_ERROR_DOM_INVALID_ACCESS_ERR`. Ce changement a été proposé au W3C afin d'être standardisé.

## Example

```js
var url = 'somePage.html'; // une page locale

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.response); // Par défault une DOMString
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
```

## Specifications

| Specification                                                                | Status                               | Comment                |
| ---------------------------------------------------------------------------- | ------------------------------------ | ---------------------- |
| {{SpecName('XMLHttpRequest', '#the-response-attribute')}} | {{Spec2('XMLHttpRequest')}} | WHATWG living standard |

## Compatibilité des navigateurs

{{Compat("api.XMLHttpRequest")}}

## Voir aussi

- {{domxref("XMLSerializer")}} : Sérialisation d'un arbre DOM en XML
- Tutoriels MDN couvrant le `XMLHttpRequest` :

  - [Ajax — Pour commencer](/fr/docs/Web/Guide/AJAX/Getting_Started)
  - [Utilisation de XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  - [HTML dans XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - [Fetch API](/fr/docs/Web/API/Fetch_API)

- [HTML5 Rocks — New Tricks in XMLHttpRequest2](http://www.html5rocks.com/en/tutorials/file/xhr2/)
- Directive Feature-Policy {{httpheader("Feature-Policy/sync-xhr", "sync-xhr")}}
