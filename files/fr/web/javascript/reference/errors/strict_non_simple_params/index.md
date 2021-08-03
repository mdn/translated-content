---
title: 'SyntaxError: "use strict" not allowed in function with "x" parameter'
slug: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
tags:
  - Erreurs
  - JavaScript
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
original_slug: Web/JavaScript/Reference/Erreurs/Strict_Non_Simple_Params
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">Edge:
Cannot apply strict mode on functions with non-simple parameter list

Firefox:
SyntaxError: "use strict" not allowed in function with default parameter
SyntaxError: "use strict" not allowed in function with rest parameter
SyntaxError: "use strict" not allowed in function with destructuring parameter

Chrome:
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Une directive <code>"use strict"</code> apparaît au début d'une fonction qui possède l'un des paramètres suivants :</p>

<ul>
 <li>{{jsxref("Fonctions/Valeurs_par_défaut_des_arguments", "Des paramètres par défaut", "", 1)}}</li>
 <li>{{jsxref("Fonctions/paramètres_du_reste", "Des paramètres du reste", "", 1)}}</li>
 <li>{{jsxref("Opérateurs/Affecter_par_décomposition", "Des paramètres décomposés", "", 1)}}</li>
</ul>

<p>Selon la spécification ECMAScript, une directive <code>"use strict"</code> ne peut pas être utilisée pour de telles fonctions.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Déclaration_de_fonction">Déclaration de fonction</h3>

<p>Dans l'exemple qui suit, la fonction <code>somme</code> possède deux paramètres par défaut <code>a=1</code> et <code>b=2</code>.</p>

<pre class="brush: js example-bad">function somme(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
</pre>

<p>Si on veut que la fonction soit en mode strict et que le script entier ou que la fonction englobante peut être en mode strict, il suffira de déplacer l'instruction <code>"use strict"</code> en dehors du corps de la méthode.</p>

<pre class="brush: js example-good">"use strict";
function somme(a = 1, b = 2) {
  return a + b;
}
</pre>

<h3 id="Expression_de_fonction">Expression de fonction</h3>

<p>Il est également possible d'utiliser les expressions de fonction pour résoudre ce problème :</p>

<pre class="brush: js example-bad">var somme = function somme([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
</pre>

<p>On peut convertir le fragment de code précédent avec l'expression suivante :</p>

<pre class="brush: js example-good">var somme = (function() {
  "use strict";
  return function somme([a, b]) {
    return a + b;
  };
})();
</pre>

<h3 id="Fonction_fléchée">Fonction fléchée</h3>

<p>Si on a une fonction fléchée qui doit accéder à la variable <code>this</code> on peut utiliser une fonction fléchée comme fonction englobante :</p>

<pre class="brush: js example-bad">var callback = (...args) =&gt; {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
</pre>

<p>This can be converted into following expression.</p>

<pre class="brush: js example-good">var callback = (() =&gt; {
  "use strict";
  return (...args) =&gt; {
    return this.run(args);
  };
})();
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Strict_mode", "Le mode strict", "", 1)}}</li>
 <li>{{jsxref("Instructions/function", "L'instruction function", "", 1)}}</li>
 <li>{{jsxref("Op%C3%A9rateurs/L_op%C3%A9rateur_function", "Les expressions de fonction", "", 1)}}</li>
 <li>{{jsxref("Fonctions/Valeurs_par_d%C3%A9faut_des_arguments", "Les paramètres par défaut", "", 1)}}</li>
 <li>{{jsxref("Fonctions/paramètres_du_reste", "Les paramètres du reste", "", 1)}}</li>
 <li>{{jsxref("Opérateurs/Affecter_par_décomposition", "Les paramètres décomposés", "", 1)}}</li>
</ul>
