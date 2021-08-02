---
title: L'opérateur get
slug: Web/JavaScript/Reference/Functions/get
tags:
  - ECMAScript 2015
  - ECMAScript 5
  - Functions
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Functions/get
original_slug: Web/JavaScript/Reference/Fonctions/get
---
<div>{{jsSidebar("Functions")}}</div>

<p>La syntaxe <strong><code>get</code></strong> permet de lier une propriété d'un objet à une fonction qui sera appelée lorsqu'on accédera à la propriété.</p>

<div>{{EmbedInteractiveExample("pages/js/functions-getter.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">{get <em>prop</em>() { ... } }
{get [<em>expression</em>]() { ... } }</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>Le nom de la propriété à lier à la fonction.</dd>
 <dt><code>expression</code></dt>
 <dd>Avec ECMAScript 2015, il est également possible d'utiliser des expressions renvoyant un nom de propriété calculé pour le lier à une fonction.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Il est parfois utile de créer une propriété qui renvoie une valeur dynamique calculée, ou de ne pas avoir recours à l'appel explicite d'une méthode pour renvoyer le statut d'une variable interne. En JavaScript, il est possible de faire cela en utilisant un <em>accesseur</em>. Il n'est pas possible d'avoir simultanément un <em>accesseur</em> assimilé à une propriété et d'avoir cette propriété initialisée à une valeur, mais il est possible d'utiliser un <em>accesseur</em> et un {{jsxref("Fonctions/set","mutateur","",1)}} pour créer une sorte de pseudo-propriété.</p>

<p>On notera que l'opérateur <code>get</code> :</p>

<ul>
 <li>peut être identifié par un nombre ou une chaîne de caractères</li>
 <li>ne doit pas posséder de paramètre (lire la page <a class="external" href="https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/" rel="external nofollow">Changement <abbr title="ECMAScript 5th edition">ES5</abbr> : les fonctions <em>d'accession</em> et <em>de mutation</em> littérales doivent avoir maintenant zéro ou un paramètre.</a> <em>(en anglais)</em> pour plus d'informations)</li>
 <li>ne doit pas apparaître dans un littéral objet avec un autre <code>get</code> ou une autre propriété avec le même identifiant (les codes suivants : <code>{ get x() { }, get x() { } }</code> et <code>{ x: ..., get x() { } }</code> sont interdits).</li>
</ul>

<p>Un <em>accesseur</em> peut être supprimé grâce à l'opérateur {{jsxref("Opérateurs/L_opérateur_delete","delete")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Définir_un_accesseur_avec_l'opérateur_get">Définir un accesseur avec l'opérateur <code>get</code></h3>

<p>Ce code va créer une pseudo-propriété <code>dernier</code> de l'objet <code>o</code> qui va retourner la dernière entrée du tableau <code>o.journal </code>:</p>

<pre class="brush: js">var o = {
  get dernier() {
    if (this.journal.length &gt; 0) {
      return this.journal[this.journal.length - 1];
    }
    else {
      return null;
    }
  },
  journal: ["toto","actu"]
}
console.log(o.dernier); // "actu"
</pre>

<p>Notez qu'essayer d'assigner à <code>dernier</code> une valeur ne le modifiera pas.</p>

<h3 id="Supprimer_un_accesseur_avec_l'opérateur_delete">Supprimer un accesseur avec l'opérateur <code>delete</code></h3>

<pre class="brush: js">delete o.dernier;
</pre>

<h3 id="Définir_un_accesseur_sur_des_objets_existants_grâce_à_defineProperty">Définir un accesseur sur des objets existants grâce à <code>defineProperty</code></h3>

<p>Afin d'ajouter un accesseur à un objet qui existe déjà, on peut utiliser la méthode {{jsxref("Object.defineProperty()")}}.</p>

<pre class="brush: js">var o = { a:0 }

Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });

console.log(o.b) // Utilise l'accesseur qui génère a + 1 (qui correspond à 1)</pre>

<h3 id="Utiliser_un_nom_de_propriété_calculé">Utiliser un nom de propriété calculé</h3>

<pre class="brush: js">var expr = "toto";

var obj = {
  get [expr]() { return "truc"; }
};

console.log(obj.toto); // "truc"</pre>

<h3 id="Accesseurs_mémoïsés">Accesseurs mémoïsés</h3>

<p>Les accesseurs permettent de définir des propriétés sur un objet mais ils ne calculent pas la valeur de la propriété tant qu'il n'y a pas d'accès envers celle-ci. Un accesseur délègue le coût de calcul jusqu'au moment où la valeur est vraiment nécessaire (si cette dernière n'est jamais utilisée, cela ne coûte alors rien).</p>

<p>Une technique supplémentaire pour optimiser ou retarder le calcul d'une valeur d'une propriété et de la mettre en cache pour les accès ultérieurs consiste à utiliser <strong>des accesseurs intelligents « <a href="https://fr.wikipedia.org/wiki/M%C3%A9mo%C3%AFsation">mémoïsés</a> »</strong>. La valeur est calculée lors du premier appel de l'accesseur puis est mise en cache afin que les appels ultérieurs renvoient la valeur en cache sans la recalculer. Cette méthode peut s'avérer utile dans plusieurs situations :</p>

<ul>
 <li>Si le calcul de la valeur est coûteux (il consomme beaucoup de RAM ou de temps CPU, il crée de nouveaux <em>threads</em>, il utilise des fichiers distants, etc.).</li>
 <li>Si la valeur est utilisée plus tard ou, dans certains cas, n'est pas utilisée du tout.</li>
 <li>Si elle est utilisée plusieurs fois, il n'est pas nécessaire de la recalculer car sa valeur ne changera pas.</li>
</ul>

<p>Cela signifie qu'un tel accesseur ne doit pas être utilisé si la valeur peut être modifiée au cours du temps. En effet, avec la définition qu'on vient de lui donner, un tel accesseur ne recalculera pas la valeur.</p>

<p>Dans l'exemple suivant, l'objet possède un accesseur en propriété propre. Lors de l'accès à la propriété, la propriété est retirée de l'objet puis réajoutée mais sous forme d'une propriété de donnée (et non d'un accesseur). Enfin, la valeur est renvoyée :</p>

<pre class="brush: js">get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById("bookmarked-notification-anchor");
},</pre>

<p>Cet exemple est utilisé dans le code de Firefox, notamment dans le code du module XPCOMUtils.jsm qui définit la fonction <code><a href="/fr/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()">defineLazyGetter()</a></code>.</p>

<h3 id="get_ou_defineProperty"><code>get</code> ou <code>defineProperty</code> ?</h3>

<p>Bien que le mot-clé <code>get</code> et la méthode {{jsxref("Object.defineProperty()")}} aient des résultats similaires, il subsiste une différence lorsqu'on utilise <a href="/fr/docs/Web/JavaScript/Reference/Instructions/class">les classes</a>.</p>

<p>Lorsqu'on utilise <code>get</code>, la propriété sera définie sur le prototype de l'objet. Avec {{jsxref("Object.defineProperty()")}}, la propriété sera définie sur l'instance à laquelle la méthode s'applique.</p>

<pre class="brush: js">class Exemple {
  get coucou() {
    return 'monde';
  }
}

const obj = new Exemple();
console.log(obj.coucou);
// "monde"
console.log(Object.getOwnPropertyDescriptor(obj, 'coucou'));
// undefined
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'coucou'));
// { configurable: true, enumerable: false, get: function get coucou() { return 'monde'; }, set: undefined }</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-method-definitions', 'Method definitions')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Ajout des noms de propriétés calculés.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.functions.get")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Fonctions/set">set</a></code></li>
 <li>{{jsxref("Opérateurs/L_opérateur_delete", "delete")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.defineGetter", "__defineGetter__")}}</li>
 <li>{{jsxref("Object.defineSetter", "__defineSetter__")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#D.C3.A9finir_des_getters_et_setters">Définir des accesseurs et mutateurs</a>, un chapitre du Guide JavaScript</li>
</ul>
