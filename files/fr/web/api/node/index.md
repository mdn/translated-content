---
title: Node
slug: Web/API/Node
tags:
  - API
  - DOM
  - Document
  - Element
  - Interface
  - Node
  - Référence DOM
  - Structure
  - hierarchy
translation_of: Web/API/Node
---
<p>{{ApiRef("DOM")}}</p>

<p><code><strong>Node</strong></code> (<em>nœud)</em> est une classe abstraite de laquelle de nombreux objets de type DOM API héritent, leur permettant d'être traités de manière similaire et souvent interchangeable. Étant une classe abstraire, il n'existe pas d'objet qui soit directement un <code>Node</code>. Tous les objets implantant les fonctionnalités de <code>Node</code> sont des instances d'une de ses sous-classes, dont les plus notables sont {{domxref("Document")}}, {{domxref("Element")}} et {{domxref("DocumentFragment")}}.</p>

<p>De pls, tous les types de nœuds du DOM sont représentés par une classe héritant des propriétés et méthodes de <code>Node</code> : {{domxref("CharacterData")}} (duquel {{domxref("Text")}}, {{domxref("Comment")}} et {{domxref("CDATASection")}} héritent), {{domxref("ProcessingInstruction")}}, , {{domxref("DocumentType")}}, {{domxref("Notation")}}, {{domxref("Entity")}} et {{domxref("EntityReference")}}.</p>

<p>Les propriétés ou méthodes de ces interfaces peuvent retourner <code>null</code> lorsque leur existence n'est pas pertinente. Elles peuvent aussi générer une exception – par exemple lors de l'ajout d'un enfant à un type de nœud pour lequel aucun enfant ne peut exister.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite les propriétés de son parent {{domxref("EventTarget")}}</em>.</p>

<dl>
 <dt>{{DOMxRef("Node.baseURI")}} {{readonlyInline}}</dt>
 <dd>Retourne une {{domxref("DOMString")}} (<em>chaine de caractères</em>) représentant l'URL de base du document contenant le <code>Node</code>. En HTML, il correspond au protocole, au nom de domaine et à la structure du répertoire, jusqu'au dernier <code>/</code>.</dd>
 <dt>{{DOMxRef("Node.baseURIObject")}} {{Non-standard_inline()}}</dt>
 <dd>(Non disponible pour le contenu Web). L'objet en lecture seule  {{Interface ("nsIURI")}} représentant l'URI de base pour l'élément.</dd>
 <dt>{{DOMxRef("Node.childNodes")}} {{readonlyInline}}</dt>
 <dd>Renvoie un {{domxref ("NodeList")}} contenant tous les enfants de ce nœud. {{domxref ("NodeList")}} signifie que si les enfants du <code>Node</code> changent, l'objet {{domxref ("NodeList")}} est automatiquement mis à jour.</dd>
 <dt>{{DOMxRef("Node.firstChild")}} {{readonlyInline}}</dt>
 <dd>Renvoie un {{domxref ("Node")}} représentant le premier nœud enfant direct de ce nœud ou <code>null</code> s'il n'a pas d'enfant.</dd>
 <dt>{{DOMxRef("Node.lastChild")}} {{readonlyInline}}</dt>
 <dd>Retourne un {{domxref("Node")}} représentant le dernier nœud enfant direct de ce nœud ou <code>null</code> s'il n'a pas d'enfant.</dd>
 <dt>{{DOMxRef("Node.nextSibling")}} {{readonlyInline}}</dt>
 <dd>Retourne un {{domxref("Node")}} représentant le nœud suivant dans l'arbre ou <code>null</code> s'il n'y en a pas.</dd>
 <dt>{{DOMxRef("Node.nodeName")}} {{readonlyInline}}</dt>
 <dd>Retourne une {{domxref("DOMString")}} (<em>chaîne de caractères</em>) contenant le nom du nœud. La structure du nom diffère du type de nœud. Par exemple, un {{domxref("HTMLElement")}} contiendra le nom de la balise correspondante, comme <code>'audio'</code>  pour un {{domxref("HTMLAudioElement")}}, un nœud {{domxref("Text")}} doit avoir la chaîne <code>'#text'</code> ou un  {{domxref("Document")}}  doit avoir la chaîne <code>'#document'.</code>.</dd>
 <dt>{{DOMxRef("Node.nodeType")}}{{readonlyInline}}</dt>
 <dd>Retourne un <code>unsigned short</code> (<em>non signé court</em>) représentant le type du nœud. Les valeurs possibles sont :</dd>
</dl>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Nom</th>
   <th scope="col">Valeur</th>
  </tr>
  <tr>
   <td><code>ELEMENT_NODE</code></td>
   <td><code>1</code></td>
  </tr>
  <tr>
   <td><code>ATTRIBUTE_NODE</code> {{deprecated_inline()}}</td>
   <td><code>2</code></td>
  </tr>
  <tr>
   <td><code>TEXT_NODE</code></td>
   <td><code>3</code></td>
  </tr>
  <tr>
   <td><code>CDATA_SECTION_NODE</code> {{deprecated_inline()}}</td>
   <td><code>4</code></td>
  </tr>
  <tr>
   <td><code>ENTITY_REFERENCE_NODE</code> {{deprecated_inline()}}</td>
   <td><code>5</code></td>
  </tr>
  <tr>
   <td><code>ENTITY_NODE</code> {{deprecated_inline()}}</td>
   <td><code>6</code></td>
  </tr>
  <tr>
   <td><code>PROCESSING_INSTRUCTION_NODE</code></td>
   <td><code>7</code></td>
  </tr>
  <tr>
   <td><code>COMMENT_NODE</code></td>
   <td><code>8</code></td>
  </tr>
  <tr>
   <td><code>DOCUMENT_NODE</code></td>
   <td><code>9</code></td>
  </tr>
  <tr>
   <td><code>DOCUMENT_TYPE_NODE</code></td>
   <td><code>10</code></td>
  </tr>
  <tr>
   <td><code>DOCUMENT_FRAGMENT_NODE</code></td>
   <td><code>11</code></td>
  </tr>
  <tr>
   <td><code>NOTATION_NODE</code> {{deprecated_inline()}}</td>
   <td><code>12</code></td>
  </tr>
 </tbody>
</table>

<dl>
 <dt>{{DOMxRef("Node.nodeValue")}}</dt>
 <dd>Retourne / définit la valeur du nœud courant.</dd>
 <dt>{{DOMxRef("Node.ownerDocument")}}{{readonlyInline}}</dt>
 <dd>Retourne le {{domxref("Document")}}  auquel ce noeud appartient. Si aucun document ne lui est associé, il retourne <code>null</code> .</dd>
 <dt>{{DOMxRef("Node.parentNode")}}{{readonlyInline}}</dt>
 <dd>Retourne un {{domxref("Node")}} qui est le parent de ce nœud. S'il n'existe pas, parce qu'il est en haut de l'arbre ou parce qu'il ne participe pas à un arbre, cette propriété retourne <code>null</code> .</dd>
 <dt>{{DOMxRef("Node.parentElement")}}{{readonlyInline}}</dt>
 <dd>Retourne un {{domxref("Element")}} qui est le parent de ce nœud. Si le nœud n'a aucun parent ou si ce parent n'est pas un  {{domxref("Element")}} , cette propriété retourne <code>null</code>.</dd>
 <dt>{{DOMxRef("Node.previousSibling")}}{{readonlyInline}}</dt>
 <dd>Retourne un {{domxref("Node")}} représentant le nœud précédent dans l'arbre ou  <code>null</code> s'il n'y en a pas.</dd>
 <dt>{{DOMxRef("Node.textContent")}}</dt>
 <dd>Retourne / définit le contenu textuel d'un élément et de tous ses descendants.</dd>
</dl>

<dl>
</dl>

<h3 id="Propriétés_obsolètes">Propriétés obsolètes</h3>

<dl>
 <dt>{{DOMxRef("Node.localName")}} {{obsolete_inline}}{{readonlyInline}}</dt>
 <dd>Retourne un {{domxref("DOMString")}}  représentant la partie locale du nom d'un élément.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> Dans Firefox 3.5 et versions antérieures, la propriété saisit le nom local pour les éléments HTML (mais pas les éléments XHTML). Dans les versions ultérieures, cela ne se produit pas, donc la propriété est en minuscule pour HTML et XHTML. {{gecko_minversion_inline("1.9.2")}}</p>
</div>

<dl>
 <dt>{{DOMxRef("Node.namespaceURI")}} {{obsolete_inline}}{{readonlyInline}}</dt>
 <dd>L'URI du "Namespace" de ce nom, ou  <code>null</code> s'il n'y en a pas.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> Dans Firefox 3.5 et versions antérieures, les éléments HTML ne contiennent aucun "namespace". Dans les versions ultérieures, les éléments HTML sont dans le "namespace" <code><a href="https://www.w3.org/1999/xhtml/">https://www.w3.org/1999/xhtml/</a></code>  pour HTML et XML.  {{gecko_minversion_inline("1.9.2")}}</p>
</div>

<dl>
 <dt>{{DOMxRef("Node.prefix")}} {{obsolete_inline}}{{readonlyInline}}</dt>
 <dd>Est une {{domxref("DOMString")}} représentant le préfixe de l'espace de nom du nœud ou <code>null</code>  si aucun préfixe n'est spécifié.</dd>
 <dt>{{DOMxRef("Node.nodePrincipal")}} {{Non-standard_inline}}{{Obsolete_Inline("gecko46")}}</dt>
 <dd>Un {{Interface("nsIPrincipal")}} représentant le nœud principal.</dd>
 <dt>{{DOMxRef("Node.rootNode")}} {{Obsolete_Inline}}{{ReadOnlyInline}}</dt>
 <dd>Retourne un objet {{DOMxRef("Node")}} représentant le noeud le plus haut dans l'arbre ou le noeud en cours s'il est le noeud le plus haut de l'arbre. Cette propriété a été remplacée par {{DOMxRef("Node.getRootNode()")}}.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Hérite des méthodes de son parent {{domxref("EventTarget")}}</em>.</p>

<dl>
 <dt>{{DOMxRef("Node.appendChild()", "Node.appendChild(<var>childNode</var>)")}}</dt>
 <dd>Ajoute l'argument <code>childNode</code> spécifié comme dernier enfant au noeud actuel.<br>
 Si l'argument fait référence à un noeud existant sur l'arborescence DOM, le nœud sera détaché de sa position actuelle et attaché à la nouvelle position.</dd>
 <dt>{{DOMxRef("Node.cloneNode()")}}</dt>
 <dd>Clône un {{domxref("Node")}} et, éventuellement, tout son contenu. Par défaut, il duplique le contenu de ce nœud.</dd>
 <dt>{{DOMxRef("Node.compareDocumentPosition()")}}</dt>
 <dd>Compare la position du nœud courant par rapport à un autre nœud dans tout autre document.</dd>
 <dt>{{DOMxRef("Node.contains()")}}</dt>
 <dd>Retourne une valeur {{jsxref("Boolean")}} (<em>booléen</em>) indiquant si un noeud est un descendant d'un noeud donné ou non.</dd>
 <dt>{{domxref("Node.getBoxQuads()")}} {{experimental_inline}}</dt>
 <dd>Retourne une liste des boites CSS des nœuds relatifs à un autre nœud.</dd>
 <dt>{{DOMxRef("Node.getRootNode()")}}</dt>
 <dd>Retourne la racine de l'objet contextuel qui comprend éventuellement la "Shadow root" si elle est disponible.</dd>
 <dt>{{DOMxRef("Node.hasChildNodes()")}}</dt>
 <dd>Retourne un {{jsxref("Boolean")}} (<em>booléen</em>) indiquant si l'élément a des noeuds enfants ou non.</dd>
 <dt>{{DOMxRef("Node.insertBefore()")}}</dt>
 <dd>Insère un {{domxref("Node")}} avant le nœud de référence en tant qu'enfant du noeud actuel.</dd>
 <dt>{{DOMxRef("Node.isDefaultNamespace()")}}</dt>
 <dd>Accepte une URI d'espace de nom comme argument et retourne une valeur {{jsxref("Boolean")}} avec <code>true</code> (<em>vrai</em>) si l'espace de nom est celui par défaut du noeud donné ou <code>false</code> (<em>faux</em>) sinon.</dd>
 <dt>{{DOMxRef("Node.isEqualNode()")}}</dt>
 <dd>Retourne une valeur {{jsxref("Boolean")}} (<em>booléenne</em>) qui indique si oui ou non deux noeuds sont du même type et si tous leurs points de données définis correspondent.</dd>
 <dt>{{DOMxRef("Node.isSameNode()")}}</dt>
 <dd>Retourne une valeur {{jsxref("Boolean")}} (<em>booléenne</em>) indiquant si les deux noeuds sont ou non identiques (c'est-à-dire qu'ils font référence au même objet).</dd>
 <dt>{{DOMxRef("Node.lookupPrefix()")}}</dt>
 <dd>Retourne une {{domxref("DOMString")}} (<em>chaîne de caractères</em>) contenant le préfixe d'une URI d'un espace de nom donné, s'il est présent, et <code>null</code> sinon.</dd>
 <dt>{{DOMxRef("Node.lookupNamespaceURI()")}}</dt>
 <dd>Accepte un préfixe et retourne l'URI de l'espace de noms qui lui est associé sur le nœud donné s'il le trouve, <code>null</code> sinon. Fournir <code>null</code> comme préfixe retournera l'espace de noms par défaut.</dd>
 <dt>{{DOMxRef("Node.normalize()")}}</dt>
 <dd>Nettoye tous les nœuds de texte en-dessous de cet élément (fusionne adjacent, supprime vide).</dd>
 <dt>{{DOMxRef("Node.removeChild()")}}</dt>
 <dd>Supprime un nœud enfant, depuis l'élément courant, qui doit être un enfant de ce nœud.</dd>
 <dt>{{DOMxRef("Node.replaceChild()")}}</dt>
 <dd>Remplace un {{domxref("Node")}} enfant du nœud courant par celui donné dans le paramètre.</dd>
</dl>

<h3 id="Méthodes_obsolètes">Méthodes obsolètes</h3>

<dl>
 <dt>{{domxref("Node.getFeature()")}} {{obsolete_inline}}</dt>
 <dd>Permet à un utilisateur d'obtenir un objet {{DOMxRef("DOMUserData")}} à partir du nœud fourni.</dd>
 <dt>{{domxref("Node.getUserData()")}} {{obsolete_inline}}</dt>
 <dd>Permet à un utilisateur d'obtenir une {{domxref ("DOMUserData")}} (<em>donnée utilisateur</em>) à partir du nœud.</dd>
 <dt>{{domxref("Node.hasAttributes()")}} {{obsolete_inline}}</dt>
 <dd>Retourne un {{jsxref("Boolean")}} indiquant si l'élément possède des attributs ou non.</dd>
 <dt>{{domxref("Node.isSupported()")}} {{obsolete_inline}}</dt>
 <dd>Retourne une marque {{jsxref("Boolean")}} qui contient le résultat d'un test si l'implémentation DOM prend en compte une caractéristique spécifique et si cette fonctionnalité est prise en charge par le nœud spécifique.</dd>
 <dt>{{domxref("Node.setUserData()")}} {{obsolete_inline}}</dt>
 <dd>Permet à un utilisateur d'attacher ou d'enlever  {{domxref("DOMUserData")}} du nœud.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Parcourir_tous_les_nœuds_enfants">Parcourir tous les nœuds enfants</h3>

<p>La fonction suivante parcourt de manière récursive tous les nœuds enfants d'un noeud et exécute une fonction de rappel sur eux (et sur le nœud parent lui-même).</p>

<pre class="brush: js">function DOMComb (oParent, oCallback) {
  if (oParent.hasChildNodes()) {
    for (var oNode = oParent.firstChild; oNode; oNode = oNode.nextSibling) {
      DOMComb(oNode, oCallback);
    }
  }
  oCallback.call(oParent);
}</pre>

<h4 id="Syntaxe">Syntaxe</h4>

<pre class="syntaxbox">DOMComb(parentNode, callbackFunction);</pre>

<h4 id="Description">Description</h4>

<p>Suit le cycle récursif de tous les nœuds enfants d'un <code>parentNode</code> et le <code>parentNode</code> lui-même, et exécute la fonction <code>callbackFunction</code> (<em>rappel</em>) sur eux comme un objet <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this"><code>this</code></a>.</p>

<h4 id="Paramètres">Paramètres</h4>

<dl>
 <dt><code>parentNode</code></dt>
 <dd>Le nœud parent (<code><strong>Node</strong> <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object">Object</a></code>)</dd>
 <dt><code>callbackFunction</code></dt>
 <dd>La fonction de rappel (<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"><code>Function</code></a>).</dd>
</dl>

<h4 id="Exemples_dutilisation">Exemples d'utilisation</h4>

<p>L'exemple suivant envoie à la <code>console.log</code> le contenu texte du corps :</p>

<pre class="brush: js">function printContent () {
  if (this.nodeValue) { console.log(this.nodeValue); }
}

onload = function () {
  DOMComb(document.body, printContent);
};</pre>

<h3 id="Supprimer_tous_les_enfants_imbriqués_dans_un_nœud">Supprimer tous les enfants imbriqués dans un nœud</h3>

<pre class="brush: js">Element.prototype.removeAll = function () {
  while (this.firstChild) { this.removeChild(this.firstChild); }
  return this;
};</pre>

<h4 id="Exemple_dutilisation">Exemple d'utilisation</h4>

<pre class="brush: js">/* ... an alternative to document.body.innerHTML = "" ... */
document.body.removeAll();</pre>

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
   <td>{{SpecName('DOM WHATWG', '#interface-node', 'Node')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Supprime les propriétés suivantes : <code>attributes</code>, <code>namespaceURI</code>, <code>prefix</code>, et <code>localName</code>.<br>
    Supprime les méthodes suivantes : <code>isSupported()</code>, <code>hasAttributes()</code>, <code>getFeature()</code>, <code>setUserData()</code>, et <code>getUserData()</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-1950641247', 'Node')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>Les méthodes <code>insertBefore()</code>, <code>replaceChild()</code>, <code>removeChild()</code>, et<code>appendChild()</code> renvoient un autre type d'erreur (<code>NOT_SUPPORTED_ERR</code>) si elles sont appelées par {{domxref("Document")}}.<br>
    La méthode <code>normalize()</code>  a été modifiée, ainsi ce mode {{domxref("Text")}} peut aussi être normalisé si la marque {{domxref("DOMConfiguration")}} est définie.<br>
    Ajout des méthodes suivantes : <code>compareDocumentPosition()</code>, <code>isSameNode()</code>, <code>lookupPrefix()</code>, <code>isDefaultNamespace()</code>, <code>lookupNamespaceURI()</code>, <code>isEqualNode()</code>, <code>getFeature()</code>, <code>setUserData()</code>, et <code>getUserData().</code><br>
    Ajout des propriétés suivantes : <code>baseURI</code> et <code>textContent</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-1950641247', 'Node')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>La propriété <code>ownerDocument</code>a été légèrement modifiée pour que  {{domxref("DocumentFragment")}} renvoie également <code>null</code>.<br>
    Ajout des propriétés suivantes : <code>namespaceURI</code>, <code>prefix</code>, et <code>localName</code>.<br>
    Ajout des méthodes suivantes : <code>normalize()</code>, <code>isSupported()</code> et <code>hasAttributes()</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-1950641247', 'Node')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Node")}}</p>