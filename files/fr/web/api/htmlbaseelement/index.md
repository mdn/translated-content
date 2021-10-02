---
title: HTMLBaseElement
slug: Web/API/HTMLBaseElement
translation_of: Web/API/HTMLBaseElement
---
<div>
<div>{{APIRef("HTML DOM")}}</div>
</div>

<div></div>

<div>L'interface <strong><code>HTMLBaseElement</code></strong> contient l'URI de base pour un document. Cet objet hérite de toutes les propriétés et des méthodes telles quelles sont décrites dans l'interface {{domxref("HTMLElement")}}.</div>

<div></div>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite des propriétés de son parent, {{domxref("HTMLElement")}}.</em></p>

<dl>
 <dt>{{domxref("HTMLBaseElement.href")}}</dt>
 <dd>est un {{domxref("DOMString")}} qui reflète l'attribut HTML {{htmlattrxref("href", "base")}}, contenant l'URL de base pour les URLs relatives dans le document.</dd>
 <dt>{{domxref("HTMLBaseElement.target")}}</dt>
 <dd>est un {{domxref("DOMString")}} qui reflète l'attribut HTML {{htmlattrxref("target", "base")}}, contenant un contexte de navigation cible par défaut ou une frame pour les éléments qui n'ont pas de cibe spécifiée.</dd>
</dl>

<h2 id="Methodes">Methodes</h2>

<p><em>Pas de méthodes spécifiques; Hérite des propriétés de son parent, {{domxref("HTMLElement")}}.</em></p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "semantics.html#the-base-element", "HTMLBaseElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucun changement depuis le dernier snapshot, {{SpecName("HTML5.1")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "document-metadata.html#the-base-element", "HTMLBaseElement")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Aucun changement depuis {{SpecName("HTML5 W3C")}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "document-metadata.html#the-base-element", "HTMLBaseElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Aucun changement depuis {{SpecName("DOM2 HTML")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-73629039', 'HTMLBaseElement')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>Aucun changement depuis {{SpecName("DOM1")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-73629039', 'HTMLBaseElement')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Première définition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités_navigateur">Compatibilités navigateur</h2>

<p>{{Compat("api.HTMLBaseElement")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'élément HTML implémentant l'interface {{ HTMLElement("base") }}</li>
</ul>
