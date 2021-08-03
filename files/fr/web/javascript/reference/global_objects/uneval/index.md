---
title: uneval()
slug: Web/JavaScript/Reference/Global_Objects/uneval
tags:
  - Fonction
  - JavaScript
  - Non-standard
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/uneval
original_slug: Web/JavaScript/Reference/Objets_globaux/uneval
---
<div>{{jsSidebar("Objects")}}{{Non-standard_header}}</div>

<p>La fonction <code><strong>uneval()</strong></code> renvoie une chaîne de caractères représentant le code source d'un objet.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">uneval(<var>objet</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>objet</code></dt>
 <dd>Une instruction ou une expression JavaScript.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui représente le code source de l'objet indiqué.</p>

<div class="note"><p><strong>Note :</strong> Le résultat obtenu ne sera pas une représentation JSON valide de l'objet.</p></div>

<h2 id="Description">Description</h2>

<p><code>uneval()</code> est une fonction disponible au plus haut niveau et n'est rattachée à aucun objet.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">var a = 1;
uneval(a); // renvoie une chaîne qui contient 1

var b = "1";
uneval(b) // renvoie une chaîne qui contient "1"

uneval(function toto(){}); // renvoie "(function toto(){})"


var a = uneval(function toto(){return 'salut'});
var toto = eval(a);
toto(); // renvoie "salut"
</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette méthode ne fait partie d'aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.uneval")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Objets_globaux/eval", "eval()")}}</li>
 <li>{{jsxref("JSON.stringify()")}}</li>
 <li>{{jsxref("JSON.parse()")}}</li>
 <li>{{jsxref("Object.toSource()")}}</li>
</ul>
