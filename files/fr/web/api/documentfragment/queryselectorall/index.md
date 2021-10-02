---
title: DocumentFragment.querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
tags:
  - API
  - DOM
  - Document
  - Méthodes
  - fragment
translation_of: Web/API/DocumentFragment/querySelectorAll
---
<div>{{ApiRef("DOM")}}</div>

<p>La méthode <strong><code>DocumentFragment.querySelectorAll()</code></strong> renvoie une {{domxref("NodeList")}} (<em>liste de noeuds</em>) des éléments du {{domxref("DocumentFragment")}} (en utilisant la traversée en profondeur des noeuds du document), qui correspondent avec le groupe spécifié de sélecteurs.</p>

<p>Si les sélecteurs spécifiés dans paramètre sont invalides une {{domxref("DOMException")}} avec une valeur <code>SYNTAX_ERR</code> est lancée.</p>

<div class="note">
<p><strong>Note :</strong> La définition de cet API a été déplacé vers l'interface {{domxref("ParentNode")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>elementList</em> = <em>documentframgment</em>.querySelectorAll(<em>selectors</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>selectors</em></dt>
 <dd>est une {{domxref("DOMString")}} (<em>chaîne de caractères</em>) contenant un ou plusieurs sélecteurs CSS séparés par des virgules.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple renvoie une liste de tous les éléments <code>div</code> du <code>DocumentFragment</code> avec une classe soit "<code>note</code>" soit "<code>alert</code>" :</p>

<pre class="brush: js">var matches = documentfrag.querySelectorAll("div.note, div.alert");
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
   <td>{{SpecName('Selectors API Level 1', '#queryselector', 'DocumentFragment.querySelectorAll')}}</td>
   <td>{{Spec2('Selectors API Level 1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DocumentFragment.querySelectorAll")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("DocumentFragment")}} à laquelle elle appartient.</li>
</ul>
