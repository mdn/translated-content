---
title: Passer au mode strict
slug: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
tags:
  - Avancé
  - JavaScript
translation_of: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
original_slug: Web/JavaScript/Reference/Strict_mode/Passer_au_mode_strict
---
<div>{{jsSidebar("More")}}</div>

<p>Le <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a> fut introduit avec ECMAScript 5 et est désormais présent dans les principaux navigateurs. Pour indiquer au navigateur l'utilisation de ce mode, il suffit d'ajouter <code>"use strict";</code> au début du code source. En revanche, il faut un peu plus de travail afin de migrer une base de code existante afin qu'elle utilise intégralement le mode strict.</p>

<p>Cet article a pour but de guider les développeurs qui souhaitent effectuer cette migration.</p>

<h2 id="Transition_progressive">Transition progressive</h2>

<p>Le mode strict a été conçu afin que la transition puisse être effectuée de façon progressive. Il est possible de modifier chaque fichier individuellement voire, éventuellement, de descendre cette granularité aux fonctions.</p>

<h2 id="Différences_entre_strict_et_non-strict">Différences entre strict et non-strict</h2>

<h3 id="Erreurs_de_syntaxe">Erreurs de syntaxe</h3>

<p>En utilisant <code>"use strict";</code>, certaines instructions ou fragments de code lanceront une exception {{jsxref("SyntaxError")}} avant l'exécution du script :</p>

<ul>
 <li>La syntaxe pour la base octale : <code>var n = 023;</code></li>
 <li>L'instruction {{jsxref("Instructions/with","with")}}</li>
 <li>L'instruction {{jsxref("Instructions/delete","delete")}} pour un nom de variable <code>delete maVariable</code>;</li>
 <li>L'utilisation de {{jsxref("Objets_globaux/eval","eval()")}} ou {{jsxref("Fonctions/arguments","arguments")}} comme un nom de variable ou un nom d'argument</li>
 <li>L'utilisation d'un des nouveaux mots-clés réservés (en prévision d'ECMAScript 2015 (ES6)) : <code>implements</code>, <code>interface</code>, <code>let</code>, <code>package</code>, <code>private</code>, <code>protected</code>, <code>public</code>, <code>static</code>, et <code>yield</code></li>
 <li>La déclaration de fonctions dans des blocs <code>if(a&lt;b){ function f(){} }</code></li>
 <li>Les erreurs évidentes
  <ul>
   <li>Déclarer deux fois le nom d'une propriété dans un littéral objet<code> {a: 1, b: 3, a: 7}</code>. Ceci n'est plus le cas pour ECMAScript 2015 (ES6) : {{bug(1041128)}}</li>
   <li>Déclarer deux arguments de fonction avec le même nom<code> function f(a, b, b){}</code></li>
  </ul>
 </li>
</ul>

<p>Ces erreurs sont bienvenues car elles révèlent des mauvaises pratiques et certaines erreurs claires. Elles apparaissent avant l'exécution du code.</p>

<h3 id="Erreurs_à_l'exécution">Erreurs à l'exécution</h3>

<p>JavaScript échoue silencieusement dans certains contextes où une erreur se produit. Le mode strict lance une exception dans ces cas. Si votre code contient certains de ces cas, il sera nécessaire de faire des tests afin de vous assurer que rien n'est cassé. Encore une fois, il est possible d'utiliser le mode strict à la granularité des fonctions.</p>

<h4 id="Attribuer_une_valeur_à_une_variable_non_déclarée">Attribuer une valeur à une variable non déclarée</h4>

<pre class="brush: js">function f(x){
  "use strict";
  var a = 12;
  b = a + x*35; // erreur !
}
f(42);
</pre>

<p>Cela a pour effet de changer une valeur de l'objet global, ce qui est rarement voulu. Si vous souhaitez définir une valeur pour l'objet global, utilisez le comme argument et assignez la propriété de façon explicite :</p>

<pre class="brush: js">// au niveau le plus haut "this" fait toujours référence
// à l'objet global
var global = this;

function f(x){
  "use strict";
  var a = 12;
  global.b = a + x*35;
}
f(42);
</pre>

<h4 id="Essayer_de_supprimer_une_propriété_non-configurable">Essayer de supprimer une propriété non-configurable</h4>

<pre class="brush: js">"use strict";
delete Object.prototype; // erreur !
</pre>

<p>En mode non-strict, cela serait passé sous silence (contrairement à ce à quoi l'utilisateur pourrait s'attendre).</p>

<h4 id="Utiliser_les_mauvaises_propriétés_d'arguments_et_function">Utiliser les mauvaises propriétés d'arguments et function</h4>

<p>Utiliser <code>arguments.callee</code>, <code>arguments.caller</code>, <code>anyFunction.caller</code> ou encore <code>anyFunction.arguments</code> renverra une erreur en mode strict. Le seul cas légitime pour les utiliser serait :</p>

<pre class="brush: js">// exemple tiré de vanillajs: http://vanilla-js.com/
var s = document.getElementById('truc').style;
s.opacity = 1;
(function(){
  if((s.opacity-=.1) &lt; 0)
    s.display="none";
  else
    setTimeout(arguments.callee, 40);
})();</pre>

<p>qu'on peut réécrire en :</p>

<pre class="brush: js">"use strict";
var s = document.getElementById('truc').style;
s.opacity = 1;
(function fadeOut(){ // on nomme la fonction
  if((s.opacity-=.1) &lt; 0)
    s.display="none";
  else
    setTimeout(fadeOut, 40); // on utilise ce nom
})();</pre>

<h3 id="Les_différences_sémantiques">Les différences sémantiques</h3>

<p>Ces différences sont très subtiles et il est possible qu'un ensemble de tests ne détecte pas ces différences. Il peut être alors nécessaire d'analyser votre code avec précaution afin de vérifier que la signification du code n'ait pas changé. Encore une fois, cela peut être fait fonction par fonction.</p>

<h4 id="Le_sens_de_this_dans_les_appels_de_fonction">Le sens de <code>this</code> dans les appels de fonction</h4>

<p>Lors de l'appel à une fonction comme <code>f()</code>, la valeur de <code>this</code> correspondait à l'objet global. En mode strict, cette valeur devient <code>undefined</code>. Lorsqu'une fonction était appelée avec {{jsxref("Function.prototype.call","call()")}} ou {{jsxref("Function.prototype.apply","apply()")}}, si la valeur était une valeur primitive, elle était placée dans un objet (ou dans l'objet global pour <code>undefined</code> et <code>null</code>). En mode strict, la valeur est passée directement, sans conversion ni remplacement.</p>

<h4 id="arguments_ne_crée_pas_d'alias_pour_les_arguments_nommés_d'une_fonction"><code>arguments</code> ne crée pas d'alias pour les arguments nommés d'une fonction</h4>

<p>En mode non-strict, la modification d'une valeur de l'objet <code>arguments</code> entraînait la modification de l'argument correspondant. Cela complexifie les optimisations des moteurs JavaScript et et la lecture du code. En mode strict, l'objet <code>arguments</code> est créé et initialisé avec les mêmes valeurs que les arguments nommés. En revanche, les changements apportés à l'objet <code>arguments</code> ou aux arguments nommés ne sont pas reproduit de l'un vers l'autre et réciproquement.</p>

<h4 id="Changements_apportés_à_eval">Changements apportés à <code>eval</code></h4>

<p>En mode strict, <code>eval</code> ne crée pas de nouvelle variable dans la portée depuis laquelle il a été appelé. Bien entendu, la chaîne évaluée est évaluée selon les règles du mode strict. Pour s'assurer du bon fonctionnement de cette évaluation, il faut s'assurer des cas de figures qui s'y présentent pour les tester. Rappel : il ne faut utiliser <code>eval</code> que si cela est nécessaire (les dangers liés à cette fonction font qu'on observe de mauvaises pratiques).</p>

<h2 id="La_neutralité_du_code_quant_au_mode_strict">La neutralité du code quant au mode strict</h2>

<p>Un des aspects négatifs de cette migration est la sémantique : le sens du code pourrait être différent dans les navigateurs historiques qui n'implémentent pas le mode strict. Dans quelques rares cas (une mauvaise concaténation ou minification), votre code pourrait ne pas fonctionner dans le mode que vous avez testé. Voici quelques règles pour que le code soit le plus neutre possible quant au mode choisi (strict ou non-strict) :</p>

<ol>
 <li>Écrivez votre code « strictement » et assurez vous de lancer des exceptions dans le cadre d'erreurs liées au mode non-strict (voir la section « Erreurs à l'exécution » ci-avant)</li>
 <li>Minimisez l'utilisation des éléments dont la sémantique pourrait changer :
  <ol>
   <li><code>eval </code>: n'utilisez cette fonction uniquement si vous êtes certains que c'est l'unique solution</li>
   <li><code>arguments</code> : utilisez les arguments d'une fonction via leur nom ou faites une copie de l'objet en utilisant :<br>
    <code>var args = Array.prototype.slice.call(arguments)</code><br>
    au tout début de votre fonction</li>
   <li><code>this</code> : n'utilisez <code>this</code> que pour faire référence à un objet que vous avez créé</li>
  </ol>
 </li>
</ol>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">Le mode strict</a></li>
</ul>
