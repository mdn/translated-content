---
title: 'SyntaxError: identifier starts immediately after numeric literal'
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Identifier_after_number
original_slug: Web/JavaScript/Reference/Erreurs/Identifier_after_number
---
<div>{{JSSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: Unexpected identifier after numeric literal (Edge)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: Unexpected number (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Les noms qu'on donne aux variables (aussi appelés « identifiants ») doivent respecter certaines règles…</p>

<p>En JavaScript, un identifiant doit commencer par une lettre, un tiret bas (_) ou un dollar ($), il ne peut pas commencer par un chiffre. Seuls les caractères après le premier peuvent être des chiffres.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Des_variables_dont_le_nom_commence_par_un_chiffre">Des variables dont le nom commence par un chiffre</h3>

<p>En JavaScript, les noms des variables ne peuvent pas commencer par un chiffre. Aussi, le script suivant provoquera des erreurs :</p>

<pre class="brush: js example-bad">var 1vie = 'toto';
// SyntaxError: identifier starts immediately after numeric literal

var toto = 1vie;
// SyntaxError: identifier starts immediately after numeric literal

alert(1.toto);
// SyntaxError: identifier starts immediately after numeric literal
</pre>

<p>Pour éviter ce problème, il faudra renommer les variables afin d'éviter d'utiliser un chiffre au début :</p>

<pre class="brush: js example-good">var vie1 = 'toto';
var toto = vie1;
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale">La grammaire lexicale de JavaScript</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Variables">Les variables</a> dans le <a href="/fr/docs/Web/JavaScript/Guide">Guide JavaScript</a></li>
</ul>
