---
title: 'ReferenceError: assignment to undeclared variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
tags:
  - Erreurs
  - JavaScript
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Undeclared_var
original_slug: Web/JavaScript/Reference/Erreurs/Undeclared_var
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">ReferenceError: assignment to undeclared variable "x" (Firefox)
ReferenceError: "x" is not defined (Chrome)
ReferenceError: Variable undefined in strict mode (Edge)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>Une erreur {{jsxref("ReferenceError")}}, uniquement <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">en mode strict</a>.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Une valeur a été affectée à une variable non-déclarée. Autrement dit, il y a eu une affectation qui n'utilise pas le mot-clé <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/var">var</a></code>. Il existe certaines différences entre les variables déclarées et les variables non déclarées ce qui peut entraîner des résultats étranges. C'est pour cette raison que le moteur affiche une erreur en mode strict.</p>

<p>Trois choses à noter lorsqu'on évoque les variables déclarées/non déclarées :</p>

<ul>
 <li>Les variables déclarées sont contraintes dans le contexte d'exécution dans lequel elles sont déclarées. Les variables non déclarées sont toujours globales.</li>
 <li>Les variables déclarées sont créées avant que le code soit exécuté. Les variables non déclarées n'existent pas tant que le code qui leur est affecté est exécuté.</li>
 <li>Les variables déclarées sont des propriétés non-configurables de leur contexte d'exécution (la fonction ou l'espace global). Les variables non-déclarées sont configurables (elles peuvent être supprimées).</li>
</ul>

<p>Pour plus de détails et d'exemple, se référer à la page sur <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/var">var</a></code>.</p>

<p>Les erreurs à propos des affectations sur les variables non déclarées se produisent uniquement <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">en mode strict</a>. En mode non-strict, elles sont ignorées silencieusement.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemples_invalides">Exemples invalides</h3>

<p>Ici, la variable <code>truc</code> n'est pas déclarée :</p>

<pre class="brush: js example-bad">function toto() {
  "use strict";
  truc = true;
}
toto(); // ReferenceError: assignment to undeclared variable truc
</pre>

<h3 id="Exemples_valides">Exemples valides</h3>

<p>Afin de déclarer <code>truc</code>, on peut ajouter le mot-clé <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/var">var</a></code> devant.</p>

<pre class="brush: js example-good">function toto() {
  "use strict";
  var truc = true;
}
toto();</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">Le mode strict</a></li>
</ul>
