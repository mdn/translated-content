---
title: DOMError
slug: Web/API/DOMError
tags:
  - API
  - DOM
  - Erreurs
  - Interface
  - Reference
translation_of: Web/API/DOMError
---
<p>{{ APIRef("DOM") }}{{deprecated_header}}</p>

<p>L'interface <strong><code>DOMError</code></strong>  décrit un objet d'erreur contenant le nom de l'erreur.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("DOMError.name")}} {{readOnlyInline}}</dt>
 <dd>Retourne une {{ domxref("DOMString") }} <em>(chaîne de caractères)</em> représentant l'un des noms de type d'erreur (voir ci-dessous).</dd>
 <dt>{{domxref("DOMError.message")}} {{readOnlyInline}}</dt>
 <dd>Retourne une {{ domxref("DOMString") }} <em>(chaîne de caractères)</em> représentant un message ou une description associée avec le nom de type d'erreur.</dd>
</dl>

<h2 id="Type_d'erreurs">Type d'erreurs</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Type</th>
   <th>Description</th>
  </tr>
  <tr>
   <td><code>IndexSizeError</code></td>
   <td>L'index n'est pas dans l'étendue autorisée (par exemple, déclenché dans un objet {{ domxref("range") }}).</td>
  </tr>
  <tr>
   <td><code>HierarchyRequestError</code></td>
   <td>La hiérarchie de l'arbre de noeud est incorrecte.</td>
  </tr>
  <tr>
   <td><code>WrongDocumentError</code></td>
   <td>L'objet est dans le mauvais {{ domxref("document") }}.</td>
  </tr>
  <tr>
   <td><code>InvalidCharacterError</code></td>
   <td>La chaîne de caractères contient des caractères non valides.</td>
  </tr>
  <tr>
   <td><code>NoModificationAllowedError</code></td>
   <td>L'objet ne peut pas être modifié.</td>
  </tr>
  <tr>
   <td><code>NotFoundError</code></td>
   <td>L'objet ne peut pas être trouvé.</td>
  </tr>
  <tr>
   <td><code>NotSupportedError</code></td>
   <td>Cette opération n'est pas supportée.</td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>L'objet est dans un état non valide.</td>
  </tr>
  <tr>
   <td><code>SyntaxError</code></td>
   <td>La chaîne de caractère ne correspond pas au motif attendu.</td>
  </tr>
  <tr>
   <td><code>InvalidModificationError</code></td>
   <td>L'objet ne peut pas être modifié de cette façon.</td>
  </tr>
  <tr>
   <td><code>NamespaceError</code></td>
   <td>Cette opération n'est pas autorisée par les Namespaces en XML.</td>
  </tr>
  <tr>
   <td><code>InvalidAccessError</code></td>
   <td>L'objet ne supporte pas cette opération ou cet argument.</td>
  </tr>
  <tr>
   <td><code>TypeMismatchError</code></td>
   <td>Le type de l'objet ne correspond pas au type attendu.</td>
  </tr>
  <tr>
   <td><code>SecurityError</code></td>
   <td>L'opération n'est pas sécurisée.</td>
  </tr>
  <tr>
   <td><code>NetworkError</code></td>
   <td>Une erreur réseau est survenue.</td>
  </tr>
  <tr>
   <td><code>AbortError</code></td>
   <td>L'opération a été annulée.</td>
  </tr>
  <tr>
   <td><code>URLMismatchError</code></td>
   <td>L'URL fournie ne correspond pas à une autre URL.</td>
  </tr>
  <tr>
   <td><code>QuotaExceededError</code></td>
   <td>Le quota a été dépassé.</td>
  </tr>
  <tr>
   <td><code>TimeoutError</code></td>
   <td>L'opération a dépassé le temps autorisé. (Time Out)</td>
  </tr>
  <tr>
   <td><code>InvalidNodeTypeError</code></td>
   <td>Le noeud est incorrect ou a un ancêtre incorrect pour cette opération.</td>
  </tr>
  <tr>
   <td><code>DataCloneError</code></td>
   <td>L'objet n'a pas pu être cloné.</td>
  </tr>
 </tbody>
</table>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM4', '#interface-domerror', 'DOMError')}}</td>
   <td>{{Spec2('DOM4')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.DOMError")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{ domxref("DOMException") }}</li>
</ul>
