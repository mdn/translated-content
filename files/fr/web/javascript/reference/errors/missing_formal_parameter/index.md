---
title: 'SyntaxError: missing formal parameter'
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_formal_parameter
original_slug: Web/JavaScript/Reference/Erreurs/Missing_formal_parameter
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: missing formal parameter (Firefox)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>« <em>Formal parameter</em> » (ou « paramètre formel ») est une façon de désigner un paramètre d'une fonction. Ici, certains des paramètres de la fonction sont invalides. Lorsqu'on déclare une fonction, les paramètres doivent être des identifiants et non des valeurs (telles que des nombres, des chaînes de caractères ou des objets). La déclaration et l'appel de la fonction forment deux étapes distinctes. Les déclarations utilisent uniquement des identifiants comme paramètres. Lorsqu'on appelle une fonction, on fournit les valeurs à utiliser.</p>

<p>En JavaScript, les identifiants peuvent contenir n'importe quel caractère alphanumérique (ou "$" or "_") et ne doivent pas commencer par un nombre. Un identifiant n'est pas une chaîne de caractères, une chaîne de caractères est une donnée alors qu'un identifiant fait partie du code.</p>

<h2 id="Exemples">Exemples</h2>

<p>Lorsqu'on définit une fonction, les paramètres doivent être des identifiants. Aucune des fonctions suivantes ne répond à ce critère (elles lèvent donc toutes une erreur) car elles utilisent des valeurs :</p>

<pre class="brush: js example-bad highlight:[1,6,11]">function carre(3) {
  return nombre * nombre;
};
// SyntaxError: missing formal parameter

function salutation("Coucou") {
  return salut;
};
// SyntaxError: missing formal parameter

function log({ obj: "value"}) {
  console.log(arg)
};
// SyntaxError: missing formal parameter
</pre>

<p>Il faut utiliser des identifiants lors de la déclaration des fonctions :</p>

<pre class="brush: js example-good highlight:[1,5,9]">function carre(nombre) {
  return nombre * nombre;
};

function salutation(salut) {
  return salut;
};

function log(arg) {
  console.log(arg)
};</pre>

<p>Ensuite, on pourra appeler ces fonctions avec les arguments voulus :</p>

<pre class="brush: js">carre(2); // 4
salutation("Coucou"); // "Coucou"
log({obj: "value"});  // Object { obj: "value" }
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les autres erreurs relatives aux paramètres formels :
  <ul>
   <li><a href="/fr/docs/Web/JavaScript/Reference/Errors/Malformed_formal_parameter">SyntaxError: Malformed formal parameter</a></li>
   <li><a href="/fr/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter">SyntaxError: redeclaration of formal parameter "x"</a></li>
  </ul>
 </li>
</ul>
