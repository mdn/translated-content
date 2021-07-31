---
title: static
slug: Web/JavaScript/Reference/Classes/static
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Classes/static
---
<div>{{jsSidebar("Classes")}}</div>

<p>Le mot-clé <code><strong>static</strong></code> permet de définir une méthode statique d'une classe. Les méthodes statiques ne sont pas disponibles sur les instances d'une classe mais sont appelées sur la classe elle-même. Les méthodes statiques sont généralement des fonctions utilitaires (qui peuvent permettre de créer ou de cloner des objets par exemple).</p>

<div>{{EmbedInteractiveExample("pages/js/classes-static.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">static <em>nomMéthode()</em> { ... }</pre>

<h2 id="Description">Description</h2>

<p>Les méthodes statiques sont utilisées lorsque la méthode ne s'applique qu'à la classe elle-même et pas à ses instances. Les méthodes statiques sont généralement utilisées pour créer des fonctions utilitaires.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_classique">Exemple classique</h3>

<p>Dans l'exemple qui suit, on illustre :</p>

<ul>
 <li>comment une classe implémente une méthode statique</li>
 <li>comment une classe avec une propriété statique peut être déclinée avec une sous-classe</li>
 <li>comment une méthode statique peut ou ne peut pas être appelé</li>
</ul>

<pre class="brush: js">class Triple {
  static triple(n) {
    if (n === undefined) {
      n = 1;
    }
    return n * 3;
  }
}

class SuperTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());       // 3
console.log(Triple.triple(6));      // 18
console.log(SuperTriple.triple(4)); // 144
var tp = new Triple();
console.log(SuperTriple.triple(4)); // 144 (pas d'impact de l'affectation du parent)
console.log(tp.triple()); // tp.triple n'est pas une fonction
</pre>

<h3 id="Utilisation_depuis_une_autre_méthode_statique">Utilisation depuis une autre méthode statique</h3>

<p>Afin d'appeler une autre méthode statique dans une méthode statique, on pourra utiliser {{jsxref("Opérateurs/L_opérateur_this","this")}}.</p>

<pre class="brush: js">class StaticMethodCall {
  static staticMethod() {
    return 'Méthode statique appelée';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' depuis une autre statique';
  }
}
StaticMethodCall.staticMethod();
// 'Méthode statique appelée'
StaticMethodCall.anotherStaticMethod();
// 'Méthode statique appelée depuis une autre statique'</pre>

<h3 id="Depuis_les_constructeurs_de_classes_et_les_autres_méthodes">Depuis les constructeurs de classes et les autres méthodes</h3>

<p>Les méthodes statiques ne sont pas directement accessibles via le mot-clé <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this">this</a></code>. Il faut les appeler avec le nom de la classe qui préfixe le nom de la méthode statique <code>NomDeClasse.MéthodeStatique()</code> (comme pour les autres appels en dehors de la classe) ou avec la propriété <code>constructor</code>  : <code>this.constructor.MéthodeStatique()</code>.</p>

<pre class="brush: js">class StaticMethodCall{
  constructor(){
    console.log(StaticMethodCall.staticMethod());
    // 'appel de la méthode statique'

    console.log(this.constructor.staticMethod());
    // 'appel de la méthode statique'
  }

  static  staticMethod(){
    return 'appel de la méthode statique.';
  }
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.classes.static")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/class">Expression <code>class</code></a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Instructions/class">Déclaration <code>class</code></a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Classes">Les classes</a></li>
</ul>
