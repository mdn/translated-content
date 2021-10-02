---
title: Element.prefix
slug: Web/API/Element/prefix
tags:
  - API
  - DOM
  - Element
  - Propriétés
  - Préfixe
translation_of: Web/API/Element/prefix
---
<div>{{APIRef("DOM")}}</div>

<p>La propriété en lecture seule <code><strong>Element.prefix</strong></code> renvoie le préfixe d'espace de noms de l'élément spécifié ou <code>null</code> si aucun préfixe n'est précisé.</p>

<div class="note">
<p><strong>Note :</strong> Avant DOM4 cet API était défini dans l'interface {{domxref("Node")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>string</var> = <var>element</var>.prefix
</pre>

<h2 id="Exemples">Exemples</h2>

<p>Les logs "x" suivants à la console.</p>

<pre class="brush:xml">&lt;x:div onclick="console.log(this.prefix)"/&gt;
</pre>

<h2 id="Notes">Notes</h2>

<p>Cela fonctionnera uniquement lorsqu'un analyseur connaissant l'espace de noms est utilisé, c'est-à-dire lorsqu'un document est servi avec un type XML MIME. Cela ne fonctionnera pas pour les documents HTML.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("DOM4", "#dom-element-prefix", "Element.prefix")}}</td>
   <td>{{Spec2("DOM4")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.prefix")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Element.namespaceURI")}}</li>
 <li>{{domxref("Element.localName")}}</li>
 <li>{{domxref("Attr.prefix")}}</li>
 <li>{{domxref("Node.prefix")}}</li>
</ul>
