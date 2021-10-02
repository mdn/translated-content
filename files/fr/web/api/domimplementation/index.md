---
title: DOMImplementation
slug: Web/API/DOMImplementation
tags:
  - API
  - DOM
  - Interface
  - Reference
translation_of: Web/API/DOMImplementation
---
<p>{{ ApiRef("DOM") }}</p>

<p>L'interface <code><strong>DOMImplementation</strong></code> représente un objet fournissant des méthodes qui ne dépendent pas d'un document particulier. Un tel objet est renvoyé par la propriété {{domxref("Document.implementation")}}.</p>

<h2 id="Propriété">Propriété</h2>

<p><em>Cette interface n'a pas de propriété spécifique et n'en hérite aucune.</em></p>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Pas de méthode héritée.</em></p>

<dl>
 <dt>{{domxref("DOMImplementation.createDocument()")}}</dt>
 <dd>Crée et retourne un {{domxref("XMLDocument")}}.</dd>
 <dt>{{domxref("DOMImplementation.createDocumentType()")}}</dt>
 <dd>Crée et retourne un {{domxref("DocumentType")}}.</dd>
 <dt>{{domxref("DOMImplementation.createHTMLDocument()")}}</dt>
 <dd>Crée et retourne un {{domxref("Document")}} HTML.</dd>
 <dt>{{domxref("DOMImplementation.hasFeature()")}}</dt>
 <dd>Retourne un {{domxref("Boolean")}} indiquant si une caractéristique donnée est supportée ou non. Cette fonction n'est pas fiable et est conservée uniquement à des fins de compatibilité : à l'exception des requêtes liées au SVG, elle renvoie toujours la valeur <code>true</code> <em>(vrai).</em> Les anciens navigateurs sont très incohérents dans leur comportement.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#domimplementation', 'DOMImplementation')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Supprime la méthode <code>getFeature()</code>.<br>
    Ajoute la méthode <code>createHTMLDocument()</code>.<br>
    Modifie le type de retour de <code>createDocument()</code> de {{domxref("Document")}} à {{domxref("XMLDocument")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-102161490', 'DOMImplementation')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>Ajoute la méthode <code>getFeature()</code> (jamais implémentée par un agent utilisateur).</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-102161490', 'DOMImplementation')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>Ajoute les méthodes <code>createDocument()</code> et <code>createDocumentType()</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-102161490', 'DOMImplementation')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Définition initial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DOMImplementation")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Document_Object_Model">Référence du DOM.</a></li>
</ul>
