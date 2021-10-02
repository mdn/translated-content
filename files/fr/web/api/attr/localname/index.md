---
title: Attr.localName
slug: Web/API/Attr/localName
tags:
  - API
  - DOM
  - Propriétés
  - Reference
translation_of: Web/API/Attr/localName
---
<div>{{APIRef("DOM")}}</div>

<p>La propriété <code><strong>Attr.localName</strong></code>, en lecture seule, renvoie la partie locale du nom qualifié d'un élément.</p>

<div class="note">
<p><strong>Note :</strong> Avant DOM4, cette API était définie dans l'interface {{domxref("Node")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>name</var> = <var>attribute</var>.localName
</pre>

<h3 id="Valeur_renvoyée">Valeur renvoyée</h3>

<p>Une {{domxref("DOMString")}} <em>(chaîne de caractères)</em> qui représente la partie locale du nom qualifié de l'élément.</p>

<h2 id="Exemple">Exemple</h2>

<p>Cet exemple affiche "id" dans une  fenêtre d'alerte.</p>

<h3 id="Contenu_HTML">Contenu HTML</h3>

<pre class="brush: html">&lt;button id="exemple"&gt;Clique ici&lt;/button&gt;</pre>

<h3 id="Contenu_JavaScript">Contenu JavaScript</h3>

<pre class="brush: js">const element = document.querySelector("#exemple");
element.addEventListener("click", function() {
  const attribute = element.attributes[0];
  alert(attribute.localName);
});
</pre>

<p>{{ EmbedLiveSample('Exemple','100%',30) }}</p>

<h2 id="Notes">Notes</h2>

<p>Le nom local d'un attribut est la partie du nom qualifié de cet attribut avant les deux points. les noms qualifiés sont utilisés en XML, dans les espaces de nom de certains documents.</p>

<div class="note">
<p><strong>Note :</strong> dans {{Gecko("1.9.2")}} et avant, cette propriété renvoie le nom en majuscule pour les attributs HTML du  DOM HTML (contrairement aux atttributs XHTML ). Dans les versions plus récentes, en accord avec HTML5, cette propriété renvoie la casse correspondante au DOM utilisé, c'est-à-dire en minuscule pour les attributs du DOM XHTMl et du DOM HTML.</p>
</div>

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
   <td>{{SpecName('DOM4', '#interface-attr', 'Attr.localName')}}</td>
   <td>{{Spec2('DOM4')}}</td>
   <td>première définition</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Attr.localName")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li>{{domxref("Attr.namespaceURI")}}</li>
 <li>{{domxref("Attr.prefix")}}</li>
 <li>{{domxref("Element.localName")}}</li>
 <li>{{domxref("Node.localName")}}</li>
</ul>
