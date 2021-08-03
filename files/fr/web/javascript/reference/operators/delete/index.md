---
title: L'opérateur delete
slug: Web/JavaScript/Reference/Operators/delete
tags:
  - JavaScript
  - Opérateur
  - Reference
translation_of: Web/JavaScript/Reference/Operators/delete
original_slug: Web/JavaScript/Reference/Opérateurs/L_opérateur_delete
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur <strong><code>delete</code></strong> permet de retirer une propriété d'un objet.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">delete <em>expression</em></pre>

<p>où <em>expression</em> est évaluée comme une référence à une propriété :</p>

<pre class="syntaxbox">delete <em>objet.propriete</em>
delete <em>objet</em>['propriete']
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>objet</code></dt>
 <dd>Le nom d'un objet ou une expression dont l'évaluation fournit un objet.</dd>
 <dt><code>propriete</code></dt>
 <dd>La propriété qu'on souhaite supprimer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p><code>true</code> pour tous les cas sauf lorsque la propriété est une propriété <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">propre</a> <a href="/fr/docs/Web/JavaScript/Reference/Erreurs/Cant_delete">non-configurable</a> auquel cas <code>false</code> est renvoyé en mode non-strict.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cet opérateur lève une exception {{jsxref("TypeError")}} en <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a> si la propriété est une propriété propre qui est non-configurable.</p>

<h2 id="Description">Description</h2>

<p>Contrairement à ce qu'on pourrait penser, l'opérateur <code>delete</code> n'a rien à voir avec une libération de mémoire directe. La gestion de la mémoire en JavaScript est réalisée de façon indirecte en tenant compte des références, <a href="/fr/docs/Web/JavaScript/Gestion_de_la_mémoire">voir cette page pour plus de détails</a>.</p>

<p>L'opérateur <code><strong>delete</strong></code> permet de retirer une propriété donnée d'un objet. Lorsque la suppression se déroule sans problème, l'opération renvoie <code>true</code>, sinon c'est la valeur <code>false</code> qui est renvoyée. Voici quelques scénarios importants qui précisent ce comportement :</p>

<ul>
 <li>Si la propriété qu'on souhaite supprimer n'existe pas, <code>delete</code> n'aura aucun effet et l'opération renverra <code>true</code></li>
 <li>Si une propriété du même nom existe sur la chaîne de prototypes, après la suppression, l'objet utilisera la propriété disponible sur la chaîne de prototypes. Autrement dit, <code>delete</code> n'a d'effet que sur les propriétés directement rattachées à un objet (les propriétés « propres »).</li>
 <li>Toute propriété déclarée avec {{jsxref("Instructions/var","var")}} ne peut pas être supprimée de la portée globale ou de la portée d'une fonction.
  <ul>
   <li>Aussi, <code>delete</code> ne pourra supprimer des fonctions de la portée globale (que ce soit une définition de fonction ou une expression de fonction).</li>
   <li>Les fonctions qui font partie d'un objet (à l'exception de la portée globale) peuvent être supprimées avec <code>delete</code>.</li>
  </ul>
 </li>
 <li>Toute propriété déclarée avec {{jsxref("Instructions/let","let")}} ou {{jsxref("Instructions/const","const")}} ne peut être supprimée de la portée dans laquelle elles ont été créées.</li>
 <li>Les propriétés non-configurable ne peuvent pas être retirées. Cela inclut les propriétés des objets natifs comme {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}} et les propriétés qui sont créées comme non-configurable grâce à la méthode {{jsxref("Object.defineProperty()")}}.</li>
</ul>

<p>Voici un fragment de code qui illustre certains cas :</p>

<pre class="brush: js">var Employe = {
  age: 28,
  nom: 'abc',
  designation: 'developpeur'
}

console.log(delete Employe.nom);  // renvoie true
console.log(delete Employe.age);  // renvoie true

// Lorsqu'on souhaite supprimer une propriété
// inexistante, on obtient true
console.log(delete Employe.salaire); // renvoie true
</pre>

<h3 id="Les_propriétés_non-configurables">Les propriétés non-configurables</h3>

<p>Lorsqu'une propriété est marquée comme non-configurable, <code>delete</code> n'aura aucun effet et l'opération renverra <code>false</code>. En mode strict, cela déclenchera une exception <code>TypeError</code>.</p>

<pre class="brush: js">var Employe = {};
Object.defineProperty(Employe, 'nom', {configurable: false});

console.log(delete Employe.nom);  // renvoie false
</pre>

<p>{{jsxref("Instructions/var","var")}} (ou <code>let</code> ou <code>const</code>) crée des propriétés non-configurables qui ne peuvent pas être supprimées via <code>delete</code> :</p>

<pre class="brush: js">var autreNom = 'XYZ';

// On peut accéder à la description de cette
// propriété globale grâce à :
Object.getOwnPropertyDescriptor(window, 'autreNom')

/* Object {value: "XYZ",
                  writable: true,
                  enumerable: true,
                  <strong>configurable: false</strong>}
*/

// On voit que "autreNom", ajouté avec var
// est marquée comme "non-configurable"

delete autreNom;   // renvoie false</pre>

<p>En mode strict, cela aurait déclenché une exception.</p>

<h3 id="Mode_strict_ou_non-strict">Mode strict ou non-strict ?</h3>

<p>Lorsqu'on est en mode strict, si <code>delete</code> est utilisé sur une référence directe à une variable, un argument de fonction ou un nom de fonction, il déclenchera une exception {{jsxref("SyntaxError")}}<strong>.</strong></p>

<p>Toute variable définie avec <code>var</code> est marquée comme non-configurable. Dans l'exemple qui suit, <code>salaire</code> est non-configurable et ne peut pas être supprimé. En mode non-strict, l'opération <code>delete</code> renverra <code>false</code>.</p>

<pre class="brush: js">function Employe() {
  delete salaire;
  var salaire;
}

Employe();
</pre>

<p>Voyons comment ce code se comporte en mode strict : au lieu de renvoyer false, l'instruction lève une exception <code>SyntaxError</code>.</p>

<pre class="brush: js">"use strict";

function Employe() {
  delete salaire;  // SyntaxError
  var salaire;
}

// De même, tout accès direct à une fonction
// avec delete lèvera une SyntaxError

function DemoFunction() {
  //du code
}

delete DemoFunction; // SyntaxError
</pre>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// on crée la propriété adminName sur la portée globale
adminName = 'xyz';

// on crée la propriété empCount sur la portée globale
// On utilise var, elle est donc non-configurable
var empCount = 43;

EmployeeDetails = {
  name: 'xyz',
  age: 5,
  designation: 'Developer'
};

// adminName est une propriété de la portée globale
// qui peut être supprimée car configurable.
delete adminName;       // renvoie true

// En revanche empCount n'est pas configurable
// car c'est var qui a été utilisée.
delete empCount;        // renvoie false

// delete peut être utilisé pour retirer des propriétés
// d'objets
delete EmployeeDetails.name; // renvoie true

<strong>// </strong>Même lorsque la propriété n'existe pas,
// l'opération renvoie "true"
delete EmployeeDetails.salary; // renvoie true

// delete n'a pas d'impact sur les propriétés
// statiques natives
delete Math.PI; // renvoie false

// EmployeeDetails est une propriété de la portée globale
// définie sans var, elle est donc configurable
delete EmployeeDetails;   // renvoie true

function f() {
  var z = 44;

  // delete n'a pas d'impact sur les noms
  // des variables locales
  delete z;     // returns false
}
</pre>

<h3 id="delete_et_la_chaîne_de_prototypes"><code>delete</code> et la chaîne de prototypes</h3>

<p>Dans l'exemple qui suit, on supprime une propriété directement rattachée à un objet (une propriété « propre ») alors qu'une propriété du même nom existe sur la chaîne de prototypes :</p>

<pre class="brush: js">function Toto(){
  this.truc = 10;
}

Toto.prototype.truc = 42;

var toto = new Toto();

// L'instruction suivante renvoie true,
// après avoir effectivement supprimé
// la propriété de l'objet toto
delete toto.truc;

// toto.truc est toujours disponible car
// elle est disponible sur la chaîne de
// prototypes
console.log(toto.truc);

// Ici on supprime la propriété du prototype
delete Toto.prototype.truc;

// On aura "undefined" dans la console
// car l'objet n'hérite plus de cette propriété
// qui a été supprimée
console.log(toto.truc);</pre>

<h3 id="Supprimer_les_éléments_dun_tableau">Supprimer les éléments d'un tableau</h3>

<p>Lorsqu'on supprime un élément d'un tableau, la longueur du tableau n'est pas modifiée. Cela vaut également lorsqu'on supprime le dernier élément du tableau.</p>

<p>Lorsqu'on utilise <code>delete</code> pour retirer un élément du tableau, cet élément n'est plus dans le tableau. Dans l'exemple suivant, on retire <code>arbres[3]</code> grâce à <code>delete</code>.</p>

<pre class="brush: js">var arbres = ["cèdre","pin","chêne","érable","sapin"];
delete arbres[3];
if (3 in arbres) {
    // Le code ici ne sera pas exécuté
}</pre>

<p>Si on veut conserver l'existence d'un élément du tableau avec une valeur indéfinie, on pourra affecter la valeur <code>undefined</code> à cet élément. Ainsi, contrairement à l'exemple précédent, en utilisant <code>undefined</code>, <code>arbres[3]</code> continue d'être présent :</p>

<pre class="brush: js">var arbres = ["cèdre","pin","chêne","érable","sapin"];
arbres[3] = undefined;
if (3 in arbres) {
  // Le code ici sera bien exécuté
}</pre>

<p>Si on souhaite plutôt retirer un élément du tableau en changeant le contenu du tableau, on pourra utiliser la méthode {{jsxref("Array.splice()")}}. Dans l'exemple qui suit, la valeur actuelle de <code>arbres[3]</code> est retirée du tableau grâce à <code>splice()</code> mais l'index suivant se décale et arbres[4] devient arbres[3] :</p>

<pre class="brush: js">var arbres = ["cèdre","pin","chêne","érable","sapin"];
if (3 in arbres) {
 // Le code ici sera exécuté
}
arbres.splice(3, 1);
console.log(arbres); // ["cèdre","pin","chêne","sapin"];
if (3 in arbres) {
 // Le code ici sera également exécuté
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-delete-operator', 'The delete Operator')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-delete-operator', 'The delete Operator')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.4.1', 'The delete Operator')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-11.4.1', 'The delete Operator')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémenté avec JavaScript 1.2.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.delete")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<p>Bien que l'ordre d'itération des objets soit laissé à l'implémentation selon le standard ECMAScript, il semblerait que la plupart des navigateurs utilise un ordre d'itération basé sur l'ordre d'ajout des propriétés (au moins pour les propriétés propres). Toutefois, pour Internet Explorer, lorsqu'on utilise <code>delete</code> sur une propriété puis qu'on redéfinit plus tard une propriété avec le même nom, l'ordre d'itération de cette propriété sera le même que précédemment (alors que dans les autres navigateurs, cette « nouvelle » propriété sera parcourue en dernier).</p>

<p>Aussi, si on veut simuler un tableau associatif ordonné de façon transparente et pour plusieurs navigateurs, il faudra utiliser deux tableaux ou, mieux encore, un objet {{jsxref("Map")}} si celui-ci est disponible.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://perfectionkills.com/understanding-delete/">Une analyse de <code>delete</code> par Kangax, en anglais</a></li>
 <li>{{jsxref("Reflect.deleteProperty()")}}</li>
 <li>{{jsxref("Map.prototype.delete()")}}</li>
</ul>
