---
title: 'Warning: unreachable code after return statement'
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
tags:
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Stmt_after_return
original_slug: Web/JavaScript/Reference/Erreurs/Stmt_after_return
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">Warning: unreachable code after return statement (Firefox)
</pre>

<h2 id="Type_derreur">Type d'erreur</h2>

<p>Avertissement</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Ce problème peut avoir deux origines :</p>

<ul>
 <li>Une expression a été utilisée après l'instruction {{jsxref("Instructions/return", "return")}}</li>
 <li>Une instruction <code>return</code> a été utilisée sans point virgule mais une expression suivait cette instruction.</li>
</ul>

<p>Lorsqu'une expression existe après une instruction <code>return</code> valide, un avertissement est produit pour alerter qu'une portion du code ne peut pas être atteinte et ne sera donc jamais lue et exécutée.</p>

<p>Pourquoi est-il préférable d'ajouter des points-virgules après les instructions <code>return</code> ? Si on utilise une instruction <code>return</code> sans point-virgule, cela peut créer une ambiguïté : est-ce que le développeur souhaite que le code qui suit sur la ligne d'après soit exécuté ou non ? L'avertissement relève cette ambiguïté afin de mieux la percevoir pour la lever.</p>

<p>Les avertissements ne seront pas affichés pour les <code>return</code> sans point-virgule si ces instructions suivent :</p>

<ul>
 <li>{{jsxref("Instructions/throw", "throw")}}</li>
 <li>{{jsxref("Instructions/break", "break")}}</li>
 <li>{{jsxref("Instructions/var", "var")}}</li>
 <li>{{jsxref("Instructions/function", "function")}}</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemples_invalides">Exemples invalides</h3>

<pre class="brush: js example-bad">function f() {
  var x = 3;
  x += 4;
  return x;   // return permet de finir la fonction sur le champ
  x -= 3;     // Cette ligne ne sera jamais lue donc exécutée
}

function f() {
  return     // Cette instruction est traitée `return;`
    3 + 4;   // La fonction termine et cette ligne n'est jamais traitée
}
</pre>

<h3 id="Exemples_valides">Exemples valides</h3>

<pre class="brush: js example-good">function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x;  // OK : return est après
             // toutes les autres instructions
}

function f() {
  return 3 + 4  // OK : un return sans point-virgule
                // avec une expression sur la même ligne
}
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/return", "L'ajout automatique de point-virgule", "#Ajout_automatique_de_point-virgule", 1)}}</li>
</ul>
