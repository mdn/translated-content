---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
tags:
  - Function
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/toString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toString()</strong></code> renvoie une chaîne de caractères représentant le code source de la fonction.</p>

<div>{{EmbedInteractiveExample("pages/js/function-tostring.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>function</var>.toString(indentation)</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui représente le code source de la fonction.</p>

<h2 id="Description">Description</h2>

<p>L'objet {{jsxref("Function")}} redéfinit la méthode {{jsxref("Object.prototype.toString", "toString")}} de l'objet {{jsxref("Object")}} ; il n'hérite donc pas de {{jsxref("Object.prototype.toString")}}. Pour les objets {{jsxref("Function")}}, la méthode <code>toString</code> renvoie une chaîne de caractères représentant l'objet sous la forme d'une déclaration de fonction. Pour ce faire, <code>toString</code> décompile la fonction pour renvoyer une chaîne qui contient le mot-clé <code>function</code>, la liste des arguments, les accolades et la source correspondant au corps de la fonction.</p>

<p>Le moteur JavaScript appelle la méthode <code>toString</code> automatiquement lorsqu'un objet {{jsxref("Function")}} doit être représenté textuellement (par exemple lorsqu'une fonction doit être concaténée avec une chaîne de caractères).</p>

<p>La méthode <code>toString()</code> lèvera une exception {{jsxref("TypeError")}} (« Function.prototype.toString called on incompatible object ») si la valeur this n'est pas un objet <code>Function</code>.</p>

<pre class="example-bad brush: js">Function.prototype.toString.call("toto"); // TypeError
</pre>

<p>Si la méthode <code>toString()</code> est appelée sur des fonctions natives qui ne sont pas définies dans le script, <code>toString()</code> renvoie une chaîne de caractères indiquant le caractère natif :</p>

<pre class="brush: js">Math.abs.toString();

"function abs() {
    [native code]
}"</pre>

<p>Si la méthode <code>toString()</code> est appelée sur une fonction créée avec le constructeur <code>Function</code>, <code>toString()</code> renverra le code source d'une fonction intitulée <code>anonymous</code> et utilisera les paramètres et le corps de la fonction fournis.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
  </tr>
  <tr>
   <td><code><a href="https://tc39.github.io/Function-prototype-toString-revision/#sec-introduction">Function.prototype.toString()</a></code></td>
   <td>Brouillon</td>
   <td>Standardise la chaîne de caractères utilisée pour les fonctions natives ainsi que la gestion des fins de ligne.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-function.prototype.tostring', 'Function.prototype.toString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Critères supplémentaires ajoutés sur la représentation de la chaîne.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function.prototype.tostring', 'Function.prototype.toString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Function.toString")}}</p>

<h2 id="Notes_spécifiques_à_Firefox">Notes spécifiques à Firefox</h2>

<ul>
 <li>À partir de Firefox 17.0, <code>Function.prototype.toString()</code> a été implémenté en sauvegardant le code source de la fonction. La méthode utilisant la décompilation a été retirée et le paramètre <code>indentation</code> n'est donc plus nécessaire. Pour plus d'informations, voir {{bug("761723")}}.</li>
 <li>À partir de Firefox 38 et jusqu'à Firefox 63, <code>Function.prototype.toString()</code> levait une exception pour les {{jsxref("Proxy")}} (cf. {{bug(1100936)}} et {{bug(1440468)}}).</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
</ul>
