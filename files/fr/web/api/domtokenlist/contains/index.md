---
title: DOMTokenList.contains()
slug: Web/API/DOMTokenList/contains
tags:
  - API
  - Chaînes de caractères
  - DOM
  - Listes
  - Méthodes
  - Recherche contenu
translation_of: Web/API/DOMTokenList/contains
---
<p>{{APIRef("DOM")}}</p>

<p>La méthode <code><strong>contains()</strong></code> de l'interface {{domxref("DOMTokenList")}} renvoie un {{domxref("Boolean")}} (<em>booléen</em>) — <code>true</code> (<em>vrai</em>) si la liste sous-jacente contient le symbole donné, sinon <code>false</code> (<em>faux</em>).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">tokenList.contains(token);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>token</dt>
 <dd>Une {{domxref("DOMString")}} (<em>chaîne de caractères</em>) représentant la "token" (<em>marque</em>) dont vous voulez vérifier l'existence dans la liste.</dd>
</dl>

<h3 id="Valeur_renvoyée">Valeur renvoyée</h3>

<p>Un {{domxref("Boolean")}} (<em>booléen</em>)— <code>true</code> (<em>vrai</em>) si la liste sous-jacente contient la marque donnée, sinon <code>false</code> (<em>faux</em>).</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, nous récupérons la liste des classes définies sur un élément {{htmlelement("span")}} en tant que <code>DOMTokenList</code> en utilisant {{domxref("Element.classList")}}. Nous testons ensuite l'existence de "c" dans la liste, et écrivons le résultat dans le {{domxref("Node.textContent")}} du <code>&lt;span&gt;</code>.</p>

<p>Tout d'abord, le code HTML :</p>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<p>Maintenant, le JavaScript :</p>

<pre class="brush: js">var span = document.querySelector("span");
var classes = span.classList;
var result = classes.contains("c");
if(result) {
  span.textContent = "The classList contains 'c'";
} else {
   span.textContent = "The classList does not contain 'c'";
}</pre>

<p>La sortie ressemble à ceci :</p>

<p>{{ EmbedLiveSample('Examples', '100%', 60) }}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG','#dom-domtokenlist-contains','contains()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("api.DOMTokenList.contains")}}</div>