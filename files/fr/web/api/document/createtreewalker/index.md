---
title: Document.createTreeWalker()
slug: Web/API/Document/createTreeWalker
tags:
  - API
  - Arborescence
  - DOM
  - Document
  - Filtre
  - Méthodes
  - Noeuds
translation_of: Web/API/Document/createTreeWalker
---
<div>{{ApiRef("Document")}}</div>

<p>La méthode de création <strong><code>Document.createTreeWalker()</code></strong> renvoie un nouvel objet {{domxref("TreeWalker")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>treeWalker</em> = <em>document</em>.createTreeWalker(<em>root</em>, <em>whatToShow</em>, <em>filter</em>, <em>entityReferenceExpansion</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>root </em></dt>
 <dd>est le {{domxref("Node")}} (<em>noeud</em>) racine du {{domxref("TreeWalker")}} à traverser. Généralement, ce sera un élément appartenant au document.</dd>
 <dt><em>whatToShow {{optional_inline}}</em></dt>
 <dd>est un <code>unsigned long</code> (<em>long non signé</em>) facultatif représentant un masque de bits créé par combinaison des propriétés de constante de <code><a href="http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter">NodeFilter</a></code>. C'est un moyen pratique de filtrage pour certains types de nœuds. Par défaut <code>0xFFFFFFFF</code> représentant la constante <code>SHOW_ALL</code>.
 <table class="standard-table">
  <tbody>
   <tr>
    <td class="header">Constante</td>
    <td class="header">Valeur numérique</td>
    <td class="header">Description</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_ALL</code></td>
    <td><code>-1</code> (c'est la valeur numérique maximale du <code>unsigned long</code> (<em>non signé long</em>))</td>
    <td>Affiche tous les noeuds.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_ATTRIBUTE</code> {{deprecated_inline}}</td>
    <td><code>2</code></td>
    <td>Affiche l'attribut {{domxref("Attr")}} des noeuds. Cela n'a de sens que lors de la création d'un {{domxref("TreeWalker")}} avec un noeud {{domxref("Attr")}} comme racine ; dans ce cas, cela signifie que le nœud d'attribut apparaîtra dans la première position de l'itération ou de la traversée. Comme les attributs ne sont jamais des enfants d'autres nœuds, ils n'apparaissent pas lors de la traversée de l'arbre du document.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_CDATA_SECTION</code> {{deprecated_inline}}</td>
    <td><code>8</code></td>
    <td>Affiche les noeuds {{domxref("CDATASection")}}.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_COMMENT</code></td>
    <td><code>128</code></td>
    <td>Affiche les noeuds {{domxref("Comment")}}.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_DOCUMENT</code></td>
    <td><code>256</code></td>
    <td>Affiche les noeuds {{domxref("Document")}}.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_DOCUMENT_FRAGMENT</code></td>
    <td><code>1024</code></td>
    <td>Affiche les noeuds {{domxref("DocumentFragment")}}.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_DOCUMENT_TYPE</code></td>
    <td><code>512</code></td>
    <td>Affiche les noeuds {{domxref("DocumentType")}}.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_ELEMENT</code></td>
    <td><code>1</code></td>
    <td>Affiche les noeuds {{domxref("Element")}}.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_ENTITY</code> {{deprecated_inline}}</td>
    <td><code>32</code></td>
    <td>Affiche les noeuds {{domxref("Entity")}}. Cela n'a de sens que lors de la création d'un {{domxref("TreeWalker")}} avec un noeud {{ domxref("Entity") }} comme racine ; dans ce cas, il signifie que le noeud d'entité {{domxref("Entity") }} apparaîtra à la première position de la traversée. Étant donné que les entités ne font pas partie de l'arborescence du document, elles n'apparaissent pas lors de la traversée de l'arborescence du document.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_ENTITY_REFERENCE</code> {{deprecated_inline}}</td>
    <td><code>16</code></td>
    <td>Affiche les noeuds {{domxref("EntityReference")}}.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_NOTATION</code> {{deprecated_inline}}</td>
    <td><code>2048</code></td>
    <td>Affiche les noeuds {{domxref("Notation")}}. Cela n'a de sens que lors de la création d'un {{domxref("TreeWalker")}} avec un noeud {{domxref("Notation")}} comme racine ; dans ce cas, il signifie que le noeud {{domxref("Notation")}} apparaîtra à la première position de la traversée. Étant donné que les entités ne font pas partie de l'arborescence du document, elles n'apparaissent pas lors de la traversée de l'arborescence du document.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_PROCESSING_INSTRUCTION</code></td>
    <td><code>64</code></td>
    <td>Affiche les noeuds {{domxref("ProcessingInstruction")}}.</td>
   </tr>
   <tr>
    <td><code>NodeFilter.SHOW_TEXT</code></td>
    <td><code>4</code></td>
    <td>Affiche les noeuds {{domxref("Text")}}.</td>
   </tr>
  </tbody>
 </table>
 </dd>
 <dt><em>filter <em>{{optional_inline}}</em></em></dt>
 <dd>est un {{domxref("NodeFilter")}} (<em>filtre de noeud</em>) facultatif, c'est à dire un objet avec une méthode <code>acceptNode</code> appelé par {{domxref("TreeWalker")}} pour déterminer s'il doit accepter ou non un nœud qui a passé le test <code>whatToShow</code>.</dd>
 <dt><em>entityReferenceExpansion<em> {{optional_inline}}</em></em> <em>{{obsolete_inline}}</em></dt>
 <dd>est un {{domxref("Boolean")}} (<em>booléen</em>) indiquant si, lors de la suppression d'une {{domxref("EntityReference")}}, son sous-arbre doit être supprimé en même temps.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple suivant passe à travers tous les noeuds du "body" (<em>corps du document</em>), réduit l'ensemble des noeuds aux éléments, passe simplement à travers chaque noeud acceptable (à la place, il pourrait réduire l'ensemble dans la méthode <code>acceptNode()</code>), puis utilise l'itérateur de traversée de l'arbre créé pour avancer à travers les nœuds (maintenant tous les éléments) et les écrire dans un tableau.</p>

<pre class="brush: js">var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
  false
);

var nodeList = [];

while(treeWalker.nextNode()) nodeList.push(treeWalker.currentNode);
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-document-createtreewalker', 'Document.createTreeWalker')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Suppression du paramètre <code>expandEntityReferences</code>. Les paramètres facultatifs  <code>whatToShow</code> et <code>filter</code> .</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'traversal.html#NodeIteratorFactory-createTreeWalker', 'Document.createTreeWalker')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Document.createTreeWalker")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface de l'objet qu'il crée : {{domxref("TreeWalker")}}.</li>
</ul>
