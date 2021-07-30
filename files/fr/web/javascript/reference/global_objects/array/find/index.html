---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/find
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/find
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>find()</strong></code> renvoie la <strong>valeur</strong> du <strong>premier élément trouvé </strong>dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur {{jsxref("undefined")}} est renvoyée.</p>

<div>{{EmbedInteractiveExample("pages/js/array-find.html")}}</div>



<p>Voir aussi la méthode {{jsxref("Array.findIndex", "findIndex()")}} qui renvoie l'<strong>index</strong> de l'élément trouvé et non sa valeur. Si on souhaite repérer la position d'un élément donné dans le tableau, on pourra utiliser {{jsxref("Array.prototype.indexOf()")}}. Si on souhaite déterminer si un tableau contient un élément donné, on pourra utiliser la méthode {{jsxref("Array.prototype.includes()")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.find(<var>callback</var>(element[, index[, tableau]])[, <var>thisArg</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Fonction à exécuter sur chaque valeur du tableau, elle prend 3 arguments :
 <dl>
  <dt><code>element</code></dt>
  <dd>L'élément actuellement traité dans le tableau.</dd>
  <dt><code>index</code>{{optional_inline}}</dt>
  <dd>L'index de l'élément actuellement traité dans le tableau</dd>
  <dt><code>array</code>{{optional_inline}}</dt>
  <dd>Le tableau pour lequel la méthode <code>find</code> a été appelée.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code> {{optional_inline}}</dt>
 <dd>Ce paramètre est optionnel. Objet à utiliser en tant que <code>this</code> lorsque la fonction <code>callback</code> est exécutée.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La valeur du premier élément du tableau qui réussit le test, sinon {{jsxref("undefined")}}.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>find</code> exécute la fonction <code>callback</code> une fois pour chaque élément présent dans le tableau jusqu'à ce qu'elle retourne une valeur vraie (qui peut être convertie en <code>true</code>). Si un élément est trouvé, <code>find</code> retourne immédiatement la valeur de l'élément. Autrement, <code>find</code> retourne <code>undefined</code>. La méthode <code>callback</code> est seulement appelée pour les index du tableau pour lesquels on dispose d'une valeur. Elle n'est pas appelée pour les index supprimés ou pour ceux qui n'ont pas de valeur.</p>

<p>La méthode <code>callback</code> est appelée avec trois arguments : la valeur de l'élément, l'index de l'élément, et l'objet correspondant au tableau traversé.</p>

<p>Si le paramètre <code>thisArg</code> est fourni à <code>find</code>, il sera utilisé comme le <code>this</code> pour chaque exécution de la fonction <code>callback</code>. S'il n'est pas fourni, alors {{jsxref("undefined")}} sera utilisé.</p>

<p><code>find</code> ne modifie pas le tableau à partir duquel elle est appelée.</p>

<p>L'intervalle des éléments inspectés par <code>find</code> est défini avant la première exécution de <code>callback</code>. Les éléments ajoutés au tableau après l'appel à <code>find</code> ne seront pas inspectés par la fonction <code>callback</code>. Si un élément existant est modifié avant le passage du <code>callback</code>, alors la valeur traitée par le <code>callback</code> sera celle présente lors du passage de <code>find</code> sur son index. Les éléments supprimés ne seront pas traités.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Trouver_un_objet_dans_un_tableau_grâce_à_une_de_ses_propriétés">Trouver un objet dans un tableau grâce à une de ses propriétés</h3>

<pre class="brush: js">const inventaire = [
  {nom: 'pommes', quantité: 2},
  {nom: 'bananes', quantité: 0},
  {nom: 'cerises', quantité: 5}
];

function estCerises(fruit) {
  return fruit.nom === 'cerises';
}

console.log(inventaire.find(estCerises));
// { nom: 'cerises', quantité: 5}</pre>

<h4 id="Utiliser_les_fonctions_fléchées_ES6ES2015">Utiliser les fonctions fléchées ES6/ES2015</h4>

<pre class="brush: js">const inventaire = [
                     {nom: 'pommes', quantité: 2},
                     {nom: 'bananes', quantité: 0},
                     {nom: 'cerises', quantité: 5}
                   ];

const resultat = inventaire.find( fruit =&gt; fruit.nom === 'cerises');
console.log(resultat);
// { nom: 'cerises', quantité: 5}</pre>

<h3 id="Trouver_un_nombre_premier_dans_un_tableau">Trouver un nombre premier dans un tableau</h3>

<p>Dans l'exemple suivant, on cherche un nombre premier parmi les éléments d'un tableau (ou retourne <code>undefined</code> s'il n'y en a pas ).</p>

<pre class="brush: js">function estPremier(element, index, array) {
    let début = 2;
    while (début &lt;= Math.sqrt(element)) {
        if (element % début ++ &lt; 1) return false;
    }
    return (element &gt; 1);
}

console.log( [4, 6, 8, 12].find(estPremier) ); // undefined, rien trouvé
console.log( [4, 5, 8, 12].find(estPremier) ); // 5
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
   <td>{{SpecName('ES2015', '#sec-array.prototype.find', 'Array.prototype.find')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.find', 'Array.prototype.find')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.find")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.findIndex()")}} – trouver et renvoyer un index</li>
 <li>{{jsxref("Array.prototype.includes()")}} – tester si une valeur existe dans le tableau</li>
 <li>{{jsxref("Array.prototype.filter()")}} – trouver tous les éléments correspondants</li>
 <li>{{jsxref("Array.prototype.every()")}} – tester l'ensemble des éléments d'un tableau</li>
 <li>{{jsxref("Array.prototype.some()")}} – tester si au moins un élément du tableau respecte un critère</li>
</ul>
