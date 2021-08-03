---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
tags:
  - ArrayBuffer
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
original_slug: Web/JavaScript/Reference/Objets_globaux/ArrayBuffer/slice
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>slice()</strong></code> renvoie un nouvel <code>ArrayBuffer</code> dont le contenu est une copie des octets du <code>ArrayBuffer</code> courant, contenus entre <code>début</code> (compris) et <code>fin</code> (non-compris).</p>

<div>{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">arraybuffer.slice(début[, fin])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>début</code></dt>
 <dd>Indice (numérotation commençant à zéro) de l'octet à partir duquel découper le tableau.</dd>
 <dt><code>fin</code></dt>
 <dd>Indice de l'octet auquel finir la découpe du tableau. Si ce paramètre n'est pas fourni, le nouvel <code>ArrayBuffer</code> contiendra tous les octets entre <code>début </code>et la fin du <code>ArrayBuffer</code> courant. L'intervalle défini par les valeurs <code>début</code> et <code>fin</code> est réduit à un intervalle valide pour le tableau courant si nécessaire. Si la longueur du nouveau tableau <code>ArrayBuffer</code> sera négative, l'intervalle est réduit à zéro.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet <code>ArrayBuffer</code>.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>slice</code> copie les octets contenus jusqu'au (au sens exclusif) paramètre <code>fin</code>. Si le paramètre <code>début </code>ou  <code>fin</code> est négatif, il fera référence à l'indice à partir de la fin du tableau et non pas à l'indice à partir du début du tableau.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Copier_un_ArrayBuffer">Copier un <code>ArrayBuffer</code></h3>

<pre class="brush: js">var buf1 = new ArrayBuffer(8);
var buf2 = buf1.slice(0)</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('Typed Array')}}</td>
   <td>{{Spec2('Typed Array')}}</td>
   <td>Remplacée dans EMCAScript 6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-arraybuffer.prototype.slice', 'ArrayBuffer.prototype.slice')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-arraybuffer.prototype.slice', 'ArrayBuffer.prototype.slice')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.ArrayBuffer.slice")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
