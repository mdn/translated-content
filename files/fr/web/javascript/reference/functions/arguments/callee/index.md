---
title: callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
tags:
  - Déprécié
  - Fonctions
  - JavaScript
  - Propriété
  - Reference
  - arguments
translation_of: Web/JavaScript/Reference/Functions/arguments/callee
original_slug: Web/JavaScript/Reference/Fonctions/arguments/callee
---
<div>{{jsSidebar("Functions")}}{{deprecated_header}}</div>

<p>La propriété <strong><code>arguments.callee</code></strong> contient la fonction en cours d'exécution.</p>

<h2 id="Description">Description</h2>

<p><code>callee</code> est une propriété de l'objet <code>arguments</code>. Elle peut être utilisée afin de faire référence à la fonction en cours d'exécution à l'intérieur de cette fonction. Cette propriété peut etre utile lorsqu'on ne connait pas le nom de la fonction (fonction anonyme par exemple).</p>

<div class="warning"><p><strong>Attention :</strong> En <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a>, ECMAScript 5 interdit la fonction <code>arguments.callee()</code>. Éviter de l'utiliser en utilisant un nom de fonction dans les expressions ou en utilisant une déclaration de fonction où la fonction s'appelle elle-même.</p></div>

<h3 id="Pourquoi_arguments.callee_a-t-il_été_retiré_du_mode_strict_ES5">Pourquoi <code>arguments.callee</code> a-t-il été retiré du mode strict ES5 ?</h3>

<p>(adapté d'une réponse<a href="http://stackoverflow.com/a/235760/578288" title="http://stackoverflow.com/a/235760/578288"> Stack Overflow par olliej</a>)</p>

<p>Aux débuts de JavaScript, il n'était pas possible d'utiliser des expressions de fonction avec des noms. Il était donc impossible de faire une expression de fonction récursive.</p>

<p>Cette syntaxe produisait le résultat escompté :</p>

<pre class="brush: js">function factorielle (n) {
    return !(n &gt; 1) ? 1 : factorielle(n - 1) * n;
}

[1,2,3,4,5].map(factorielle);</pre>

<p>mais :</p>

<pre class="brush: js">[1,2,3,4,5].map(function (n) {
    return !(n &gt; 1) ? 1 : /* que met-on ici ? */ (n - 1) * n;
});</pre>

<p>ne fonctionnait pas. Pour que cela puisse fonctionner, on ajouta <code>arguments.callee</code> :</p>

<pre class="brush: js">[1,2,3,4,5].map(function (n) {
    return !(n &gt; 1) ? 1 : arguments.callee(n - 1) * n;
});</pre>

<p>Cependant, ce fut une mauvaise solution (avec <code>caller</code> également) car elle rendit impossible l'<a href="https://fr.wikipedia.org/wiki/Extension_inline">extension inline</a> et la <a href="https://fr.wikipedia.org/wiki/R%C3%A9cursion_terminale">récursion terminale</a> de façon générale (il est possible d'y arriver de certaines façons mais cela entraînerait nécessairement un code moins efficace). Le second problème que cela entraîne est que l'appel récursif aura une autre valeur <code>this</code> :</p>

<pre class="brush: js">var global = this;

var fonctionTruc = function (recursed) {
    if (!recursed) { return arguments.callee(true); }
    if (this !== global) {
        console.log("this est : " + this);
    } else {
        console.log("this est la variable globale");
    }
}

fonctionTruc();</pre>

<p>ECMAScript 3 a introduit les expressions de fonctions nommées pour résoudre le problème. On peut désormais utiliser :</p>

<pre class="brush: js">[1,2,3,4,5].map(function factorielle (n) {
    return !(n &gt; 1) ? 1 : factorielle(n - 1)*n;
});</pre>

<p>Cette méthode possède plusieurs avantages :</p>

<ul>
 <li>La fonction peut être appelée comme n'importe quelle autre fonction nommée dans le code</li>
 <li>Cela ne crée pas une variable dans la portée extérieure (<a href="http://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope">sauf pour IE 8 et les versions antérieures</a>)</li>
 <li>Cela entraîne de meilleures performances que d'accéder aux propriétés de l'objet <code>arguments</code></li>
</ul>

<p>Une autre fonctionnalité qui a été déprécié est : <code>arguments.callee.caller</code>, ou plus précisément <code>Function.caller</code>. Pourquoi cela ? Parce que ça permet d'avoir accès à tout moment à la fonction appelante la plus loin dans la pile d'appels. Or, comme évoqué ci-avant, cela a un effet de bord considérable : ça rend beaucoup plus complexes voire impossibles certaines optimisations. Ainsi, on ne peut pas garantir qu'une fonction <code>f</code> n'appellera pas une autre fonction inconnue, ce qui signifie qu'on ne peut pas utiliser l'extension inline. En résumé, cela signifie que n'importe quel site d'appel de fonction (<em>call site</em>) qui aurait pu être développé inline très simplement devra subir de nombreux tests :</p>

<pre class="brush: js">function f (a, b, c, d, e) { return a ? b * c : d * e; }</pre>

<p>Si l'interpréteur JavaScript ne peut pas garantir que l'ensemble des arguments fournis ici sont des nombres à l'instant de l'appel de la fonction, il devra insérer des vérifications pour chaque argument avant le code inline, sinon il ne pourra pas développer la fonction inline. On notera que, dans ce cas, un interpréteur intelligent devrait pouvoir réarranger les vérifications à faire afin qu'elles soient optimales et de se débarrasser des valeurs inutiles. Malgré tout, une telle optimisation ne sera pas possible dans d'autres cas, ce qui signifie que le développement inline n'est pas possible.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_arguments.callee_pour_une_fonction_anonyme_récursive">Utiliser <code>arguments.callee</code> pour une fonction anonyme récursive</h3>

<p>Une fonction récursive, par définition, s'appelle elle-même. Elle fait donc généralement référence à elle-même grâce à son nom. Cependant, une fonction anonyme (créée grâce ) une <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_function">expression de fonction</a> ou au constructeur {{jsxref("Function")}}) n'a pas de nom et la seule façon d'y faire référence est donc d'utiliser <code>arguments.callee</code>.</p>

<p>L'exemple qui suit illustre une fonction qui définit et renvoie une fonction factorielle. Cet exemple n'a qu'un but démonstratif et ne correspond certainement pas à ce qui serait utilisé en pratique (les expressions de fonctions pouvant être <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_function">nommées</a>).</p>

<pre class="brush: js">function créer() {
   return function(n) {
      if (n &lt;= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

var résultat = create()(5); // renvoie 120 (5 * 4 * 3 * 2 * 1)</pre>

<h3 id="Une_utilisation_d'arguments.callee_qui_ne_possède_pas_de_solution_de_remplacement">Une utilisation d'<code>arguments.callee</code> qui ne possède pas de solution de remplacement</h3>

<p>Malgré tout, dans un cas comme le suivant, il n'existe pas d'équivalent pour <code>arguments.callee</code>, c'est pourquoi sa déprécation pourrait être un bug (voir {{Bug("725398")}}):</p>

<pre class="brush: js">function créerPersonne (sIdentité) {
    var oPersonne = new Function("alert(arguments.callee.identité);");
    oPersonne.identité = sIdentité;
    return oPersonne;
}

var jean = créerPersonne("Jean Biche");

jean();</pre>

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
   <td>Définition initiale. Implémentée avec JavaScript 1.2</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.functions.arguments.callee")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
</ul>
