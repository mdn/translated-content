---
title: DOMTokenList.toggle()
slug: Web/API/DOMTokenList/toggle
tags:
  - API
  - Basculement
  - DOM
  - Listes
  - Méthodes
translation_of: Web/API/DOMTokenList/toggle
---
<p>{{APIRef("DOM")}}</p>

<p>La méthode <code><strong>toggle()</strong></code> (<em>bascule</em>) de l'interface {{domxref("DOMTokenList")}} supprime une marque (<em>token)</em> donnée de la liste et renvoie <code>false</code> (<em>faux</em>). Si <em>token</em> n'existe pas, il est ajouté et la fonction renvoie <code>true</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">tokenList.toggle(token, force);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>token</dt>
 <dd>Une {{domxref("DOMString")}} (<em>chaîne de caractères</em>) représentant la marque que l'on veut activer.</dd>
 <dt>force {{optional_inline}}</dt>
 <dd>Un {{domxref("Boolean")}} (<em>booléen</em>) qui, si inclus, transforme la bascule (toggle) en opération unique. Si elle est définie <code>false</code> (<em>faux</em>), la marque sera seulement supprimée et aucun ajout ne suivra. Si elle est définie <code>true</code> (<em>vrai</em>), la marque sera seulement ajoutée et pas supprimée après.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Un {{domxref("Boolean")}} (<em>booléen</em>) — <code>false</code> (<em>faux</em>) si la marque n'est pas dans la liste après l'appel ou <code>true</code> (<em>vrai</em>) si elle y est.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, nous récupérons la liste des classes définies dans un élément {{htmlelement("span")}} en tant que <code>DOMTokenList</code> en utilisant {{domxref("Element.classList")}}. Nous remplaçons alors une marque dans la liste et écrivons la liste dans le {{domxref("Node.textContent")}} du <code>&lt;span&gt;</code>.</p>

<p>D'abord, le HTML :</p>

<pre class="brush: html">&lt;span class="a b"&gt;classList is 'a b'&lt;/span&gt;</pre>

<p>Maintenant le JavaScript :</p>

<pre class="brush: js">var span = document.querySelector("span");
var classes = span.classList;
span.onclick = function() {
  var result = classes.toggle("c");
  if(result) {
    span.textContent = "'c' added; classList is now '" + classes + "'.";
  } else {
    span.textContent = "'c' removed; classList is now '" + classes + "'.";
  }
}
</pre>

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
   <td>{{SpecName('DOM WHATWG','#dom-domtokenlist-toggle','toggle()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("api.DOMTokenList.toggle")}}</div>