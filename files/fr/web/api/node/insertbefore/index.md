---
title: element.insertBefore
slug: Web/API/Node/insertBefore
tags:
  - API
  - DOM
  - Enfant
  - Insertion
  - Méthodes
  - Noeud
translation_of: Web/API/Node/insertBefore
---
<p>{{APIRef("DOM")}}</p>

<p>La méthode <code><strong>Node.insertBefore()</strong></code> insère un nœud avant un <em>nœud de référence</em> en tant qu'enfant d'un <em>nœud parent</em> spécifié.</p>

<p>Si le nœud donné existe déjà dans le document, <code>insertBefore()</code> le déplace de sa position actuelle vers la nouvelle position. (C'est-à-dire qu'il sera automatiquement retiré de son parent existant avant d'être ajouté au nouveau parent spécifié).</p>

<p>Cela signifie qu'un nœud ne peut pas se trouver simultanément à deux endroits du document.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox">var <var>insertedNode</var> = <var>parentNode</var>.insertBefore(<var>newNode</var>, <var>referenceNode</var>);
</pre>

<dl>
  <dt><code><var>insertedNode</var></code></dt>
  <dd>Le nœud en cours d'insertion (le même que <code><var>newNode</var></code>).</dd>
  <dt><code><var>parentNode</var></code></dt>
  <dd>Le parent du nœud nouvellement inséré.</dd>
  <dt><code><var>newNode</var></code></dt>
  <dd>Le nœud à insérer.</dd>
  <dt><code><var>referenceNode</var></code></dt>
  <dd>Le nœud avant lequel <code><var>newNode</var></code> est inséré. Si c'est <code>null</code>, alors <code><var>newNode</var></code> est inséré à la fin des nœuds enfants de <code><var>parentNode</var></code>.</dd>
</dl>

<div class="notecard note">
  <p><strong>Note :</strong> <em><code>referenceNode</code></em> <strong>n'est pas</strong> un paramètre facultatif -- vous devez explicitement transmettre un <code>Node</code> ou <code>null</code>. Ne pas le fournir ou transmettre des valeurs invalides provoque des <a href="https://code.google.com/p/chromium/issues/detail?id=419780">comportements différents</a> selon les différentes versions des navigateurs.</p>
</div>

<h3 id="Return_value">Valeur de retour</h3>

<p>Renvoie l'enfant ajouté (sauf si <code><var>newNode</var></code> est un {{domxref("DocumentFragment")}}, auquel cas le {{domxref("DocumentFragment")}} vide est renvoyé).</p>

<h2 id="Examples">Exemples</h2>

<h3 id="Example_1">Exemple 1</h3>

<pre class="brush: html">&lt;div id="parentElement"&gt;
  &lt;span id="childElement"&gt;foo bar&lt;/span&gt;
&lt;/div&gt;

&lt;script&gt;
// Crée le nouveau nœud à insérer
let newNode = document.createElement("span")

// Obtient une référence au nœud parent
let parentDiv = document.getElementById("childElement").parentNode

// Commence le cas de test [ 1 ] : Existing childElement (tout fonctionne correctement)
let sp2 = document.getElementById("childElement")
parentDiv.insertBefore(newNode, sp2)
// Fin du cas de test [ 1 ]

// Commence le cas de test [ 2 ] : childElement est de Type undefined
let sp2 = undefined // Noeud non existant de l'id "childElement".
parentDiv.insertBefore(newNode, sp2) // Transfert dynamique implicite vers le type Node
// Fin du cas de test [ 2 ]

// Commence le cas de test [ 3 ] : childElement est de Type "undefined" ( string )
let sp2 = "undefined" // Noeud non existant de l'id "childElement".
parentDiv.insertBefore(newNode, sp2) // Génère "Erreur de type : Argument non valide".
// Fin du cas de test [ 3 ]
&lt;/script&gt;
</pre>

<h3 id="Example_2">Exemple 2</h3>

<pre class="brush:html">&lt;div id="parentElement"&gt;
  &lt;span id="childElement"&gt;foo bar&lt;/span&gt;
&lt;/div&gt;

&lt;script&gt;
// Crée un nouvel élément simple de type &lt;span&gt;
let sp1 = document.createElement("span")

// Obtient l'élément de référence
let sp2 = document.getElementById("childElement")
// Get the parent element
let parentDiv = sp2.parentNode

// Insert le nouvel élément dans avant sp2
parentDiv.insertBefore(sp1, sp2)
&lt;/script&gt;
</pre>

<p>Il n'existe pas de méthode <code>insertAfter</code>. Il peut être émulé avec une combinaison des méthodes <code>insertBefore</code><a href="/fr/docs/Web/API/Node/insertBefore"> </a>et <code><a href="/fr/docs/Web/API/Node/nextSibling">nextSibling</a></code>.</p>

<p>Dans l'exemple ci-dessus, <code>sp1</code> pourrait être inséré après <code>sp2</code> en utilisant :</p>

<pre class="brush:js">parentDiv.insertBefore(sp1, sp2.nextSibling);</pre>

<p>Si <code>sp2</code> n'a pas d'enfant suivant, c'est qu'il est le dernier enfant. Dans ce cas, <code>sp2.nextSibling</code> renverra <code>null</code> et <code>sp1</code> sera donc inséré à la fin de la liste des nœuds enfants (c'est-à-dire immédiatement après <code>sp2</code>).</p>

<h3 id="Example_3">Exemple 3</h3>

<p>Insérer un élément avant le premier élément enfant en utilisant la propriété <a href="/fr/docs/Web/API/Node/firstChild">firstChild</a>.</p>

<pre class="brush:js">// Obtient l'élément parent
  let parentElement = document.getElementById('parentElement')
  // Obtient le premier enfant du parent
  let theFirstChild = parentElement.firstChild
  
  // Crée un nouvel élément
  let newElement = document.createElement("div")
  
  // Insert le nouvel élément avant le premier enfant
  parentElement.insertBefore(newElement, theFirstChild)
  </pre>

<p>Si l'élément n'a pas de premier enfant, alors <code>firstChild</code> est <code>null</code>. L'élément est toujours ajouté au parent après le dernier enfant. Comme l'élément parent n'avait pas de premier enfant, il n'avait pas non plus de dernier enfant. Par conséquent, le nouvel élément est le seul élément, après l'insertion.</p>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('DOM WHATWG','#dom-node-insertbefore','Node.insertBefore')}}</td>
      <td>{{Spec2('DOM WHATWG')}}</td>
      <td>Fixes errors in the insertion algorithm</td>
    </tr>
    <tr>
      <td>{{SpecName('DOM4','#dom-node-insertbefore','Node.insertBefore')}}</td>
      <td>{{Spec2('DOM4')}}</td>
      <td>Describes the algorithm in more detail</td>
    </tr>
    <tr>
      <td>{{SpecName('DOM3 Core','core.html#ID-952280727','Node.insertBefore')}}</td>
      <td>{{Spec2('DOM3 Core')}}</td>
      <td>No notable changes</td>
    </tr>
    <tr>
      <td>{{SpecName('DOM2 Core','core.html#ID-952280727','Node.insertBefore')}}</td>
      <td>{{Spec2('DOM2 Core')}}</td>
      <td>No notable changes</td>
    </tr>
    <tr>
      <td>
        {{SpecName('DOM1','level-one-core.html#method-insertBefore','Node.insertBefore')}}
      </td>
      <td>{{Spec2('DOM1')}}</td>
      <td>Introduced</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_Compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Node.insertBefore")}}</p>
