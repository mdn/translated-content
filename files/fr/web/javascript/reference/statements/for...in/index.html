---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
tags:
  - Instruction
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/for...in
original_slug: Web/JavaScript/Reference/Instructions/for...in
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'<strong>instruction <code>for...in</code></strong> permet d'itérer sur les <a href="/fr/docs/Web/JavaScript/Caract%C3%A8re_%C3%A9num%C3%A9rable_des_propri%C3%A9t%C3%A9s_et_rattachement">propriétés énumérables</a> d'un objet qui ne sont pas <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Symbol">des symboles</a>. Pour chaque propriété obtenue, on exécute une instruction (ou plusieurs grâce à un {{jsxref("Instructions/bloc","bloc","",1)}} d'instructions).</p>

<div>{{EmbedInteractiveExample("pages/js/statement-forin.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">for (<var>variable</var> in <var>objet</var>) {
<em>  instructions</em>
}</pre>

<dl>
 <dt><code>variable</code></dt>
 <dd>Un nom de propriété différent est assigné à la variable à chaque itération de la boucle.</dd>
 <dt><code>objet</code></dt>
 <dd>L'objet dont les propriétés énumérables et qui ne sont pas des symboles sont parcourues par la boucle.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Une boucle <code>for...in</code> ne parcourt que les propriétés énumérables et qui ne sont pas des symboles. Les objets qui ont été créés par des constructeurs intégrés comme Array et Object ont hérité de propriétés non énumérables de <code>Object.prototype</code> et <code>String.prototype</code> comme les méthodes {{jsxref("String.prototype.indexOf","indexOf()")}} du type {{jsxref("String")}} ou {{jsxref("Object.prototype.toString","toString()")}} depuis {{jsxref("Object")}}. La boucle parcourera toutes les propriétés énumérables de l'objet et aussi celles dont il hérite du prototype du constructeur (les propriétés les plus proches de l'objet dans la chaîne des prototypes primeront sur les propriétés des prototypes).</p>

<h3 id="Les_propriétés_ajoutées_modifiées_ou_supprimées">Les propriétés ajoutées, modifiées ou supprimées</h3>

<p>Une boucle <code>for...in</code> parcourt les propriétés d'un objet dans un ordre arbitraire (voir l'opérateur {{jsxref("Opérateurs/L_opérateur_delete","delete")}} pour plus d'explications quant à l'impossibilité de se fier à un tel ordre, au moins dans le cas où on souhaite gérer plusieurs navigateurs).</p>

<p>Si une propriété est modifiée dans une des itérations de la boucle et que la boucle itère ensuite sur cette propriété, sa valeur sera celle qui a été modifiée. Une propriété qui a été supprimée avant que la boucle n'itère sur celle-là ne sera pas dans la boucle. Les propriétés qui ont été ajoutées à l'objet pendant la boucle peuvent être ou ne pas être pris en compte.</p>

<p>Une bonne pratique consiste à ne pas ajouter, modifier ou supprimer une propriété d'un objet lors d'une itération qui ne concerne pas cette propriété. Il n'y a aucune certitude concernant la prise en compte d'une propriété ajoutée lors d'une telle boucle et il en va de même pour savoir si on a visité une propriété avant ou après qu'elle ait été modifiée ou de savoir si une itération de la boucle concernera une propriété avant que celle-ci soit supprimée.</p>

<h3 id="Utiliser_for...in_et_parcourir_un_tableau">Utiliser <code>for...in</code> et parcourir un tableau</h3>

<div class="note">
<p><strong>Note :</strong> <code>for...in</code> ne doit pas être utilisée pour parcourir un {{jsxref("Array")}} lorsque l'ordre des éléments est important.</p>
</div>

<p>Les éléments des indices d'un tableau sont des propriétés énumérables dont les noms sont des entiers, excepté cela, elles sont en tout point identiques aux propriétés des objets en général. Ici aussi, il n'y a aucune certitude que <code>for...in</code> renvoie les indices dans un ordre particulier. Cette instruction listera également les propriétés énumérables dont les noms ne sont pas des entiers et celles qui sont héritées.</p>

<p>L'ordre dans lequel le parcours est effectué dépend de l'implémentation. Dans le cas d'un parcours de tableau utilisant <code>for...in</code>, on pourrait très bien avoir un ordre qui ne soit pas le même entre les différents environnements. Pour cette raison, il est préférable d'utiliser une boucle {{jsxref("Instructions/for","for")}} utilisant un compteur numérique (ou {{jsxref("Array.prototype.forEach","Array.forEach()")}} ou encore {{jsxref("Instructions/for...of","for...of")}}) lorsqu'on souhaite parcourir des tableaux dans un ordre bien défini.</p>

<h3 id="Itérer_uniquement_sur_les_propriétés_non_héritées">Itérer uniquement sur les propriétés non héritées</h3>

<p>Si on souhaite ne parcourir que les propriétés propres d'un objet et pas celles rattachées à ses prototypes, on peut utiliser la méthode {{jsxref("Object.getOwnPropertyNames()")}} ou bien effectuer un test grâce à la méthode {{jsxref("Object.prototype.hasOwnProperty()")}} voire avec {{jsxref("Object.prototype.propertyIsEnumerable()")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>La boucle <code>for...in</code> qui suit utilise parcourt l'objet <code>obj</code> et ses propriétés énumérables qui ne sont pas des symboles en fournissant la chaîne de caractères qui décrit le nom de la propriété et sa valeur.</p>

<pre class="brush: js">var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Affiche dans la console :
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"</pre>

<p>La fonction qui suit utilise {{jsxref("Object.hasOwnProperty", "hasOwnProperty()")}} pour ne pas afficher les propriétés héritées :</p>

<pre class="brush: js">var triangle = {a:1, b:2, c:3};

function TriangleCouleur() {
  this.couleur = "rouge";
}

TriangleCouleur.prototype = triangle;

var obj = new TriangleCouleur();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Affichera dans la console :
// "obj.couleur = rouge"</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-12.6.3', 'for...in statement')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12.6.4', 'for...in statement')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-for-in-and-for-of-statements', 'for...in statement')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'for...in statement')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.for_in")}}</p>

<h3 id="Expressions_avec_initialisateur">Expressions avec initialisateur</h3>

<p>Avant SpiderMonkey 40 {{geckoRelease(40)}}, il était possible d'utiliser un initialisateur (<code>i=0</code>) dans un boucle <code>for...in</code> :</p>

<pre class="brush: js example-bad">var obj = {a:1, b:2, c:3};
for(var i=0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
</pre>

<p>Ce comportement non-standard a été retiré avec la version 40. Cela provoquera désormais une exception {{jsxref("SyntaxError")}} ("<em><a href="/fr/docs/Web/JavaScript/Reference/Erreurs/Invalid_for-in_initializer">for-in loop head declarations may not have initializers</a></em>") en <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a> (cf. {{bug(748550)}} et {{bug(1164741)}}).</p>

<p>Les autres moteurs, tels que v8 (Chrome), Chakra (IE/Edge) et JSC (WebKit/Safari) recherchent également comment retirer ce comportement non standard.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/for...of","for...of")}} : une instruction semblable qui permet d'itérer sur les valeurs des propriétés</li>
 <li>{{jsxref("Instructions/for","for")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement">Le rattachement et le caractère énumérable des propriétés</a></li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Instructions/for_each...in", "for each...in")}} {{deprecated_inline}} : une instruction semblable, dépréciée, qui parcourt les valeurs des propriétés d'un objet plutôt que les noms.</li>
</ul>
