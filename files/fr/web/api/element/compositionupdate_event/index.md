---
title: compositionupdate
slug: Web/API/Element/compositionupdate_event
translation_of: Web/API/Element/compositionupdate_event
original_slug: Web/Events/compositionupdate
---
<p>L'événement <strong>compositionupdate</strong> est déclenché lorsqu'un caractère est ajouté à un passage de texte en train d'être composé (<code>démarre avec des caractères spéciaux qui nécessitent une sequence de touches et d'autres entrées telles que la reconnaissance vocale ou la suggestion de mots du mobile).</code></p>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("TouchEvent")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Propagation</dt>
 <dd style="margin: 0 0 0 120px;">Oui</dd>
 <dt style="float: left; text-align: right; width: 120px;">Annulable</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cible</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("Element")}}</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>Elément ayant le focus qui traite la composition. Nul si non-accessible.</td>
  </tr>
  <tr>
   <td><code>type</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>Le type de l'événement.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{ReadOnlyInline}}</td>
   <td><code>boolean</code></td>
   <td>Est-ce qu'il se propage?</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{ReadOnlyInline}}</td>
   <td><code>boolean</code></td>
   <td>Peut-il être annulé?</td>
  </tr>
  <tr>
   <td><code>view</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("WindowProxy")}}</td>
   <td>{{domxref("Document.defaultView")}} (fenêtre du document).</td>
  </tr>
  <tr>
   <td><code>detail</code> {{ReadOnlyInline}}</td>
   <td><code>long</code> (<code>float</code>)</td>
   <td>0.</td>
  </tr>
  <tr>
   <td><code>data </code>{{ReadOnlyInline}}</td>
   <td>{{domxref("DOMString")}} (string)</td>
   <td>La chaîne de caractères originale éditée ou une chaîne vide.</td>
  </tr>
  <tr>
   <td><code>locale </code>{{ReadOnlyInline}}</td>
   <td>{{domxref("DOMString")}} (string)</td>
   <td>Le code de la langue pour l'événement de composition si disponible; Sinon une chaîne vide.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités_navigateur">Compatibilités navigateur</h2>

<p>{{Compat("api.Element.compositionupdate_event")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{Event("compositionstart")}}</li>
 <li>{{Event("compositionupdate")}}</li>
 <li>{{Event("compositionend")}}</li>
</ul>
