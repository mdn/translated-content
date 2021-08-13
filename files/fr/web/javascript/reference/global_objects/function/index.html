---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
tags:
  - Constructor
  - Function
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function
original_slug: Web/JavaScript/Reference/Objets_globaux/Function
---
<div>{{JSRef}}</div>

<p>Le constructeur <code><strong>Function</strong></code> crée un nouvel <em>objet</em> <code>Function</code>. En JavaScript, chaque fonction est un objet <code>Function</code>.</p>

<p>Appeler ce constructeur permet de créer des fonctions dynamiquement mais cette méthode souffre de défauts équivalents à {{jsxref("eval")}} en termes de sécurité et de performance. Toutefois, à la différence d'<code>eval</code>, le constructeur <code>Function</code> permet d'exécuter du code dans la portée globale.</p>

<div>{{EmbedInteractiveExample("pages/js/function-constructor.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new Function ([<var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]],] corpsFonction)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>arg1, arg2, ... argN</code></dt>
 <dd>Les noms utilisés par la fonction pour les arguments formellement déclarés. Chacun doit être une chaîne de caractères correspondant à un identifiant JavaScript valide (ou une liste de telles chaînes séparées par des virgules). Par exemple : "<code>x</code>", "<code>uneValeur</code>", ou "<code>a,b</code>".</dd>
 <dt><code>corpsFonction</code></dt>
 <dd>Une chaîne de caractères qui contient les instructions JavaScript définissant la fonction.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Les objets <code>Function</code> créés avec le constructeur <code>Function</code> sont analysés quand la fonction est créée. Ceci est moins efficace que de déclarer une fonction grâce à une {{jsxref("Opérateurs/L_opérateur_function","expression de fonction","",1)}} ou à une instruction {{jsxref("Instructions/function","function")}} car celles crées de cette façon sont analysées avec le reste du code.</p>

<p>Tous les arguments passés à la fonction seront traités avec les noms des identifiants des paramètres de la fonction à créer, dans le même ordre dans lequel ils ont été passés. Si un argument n'est pas passé, la valeur du paramètre dans la fonction sera {{jsxref("undefined")}}.</p>

<p>Appeler le constructeur <code>Function</code> comme une fonction (c'est-à-dire sans utiliser l'opérateur {{jsxref("Opérateurs/L_opérateur_new","new")}}) a le même effet que quand il est appelé comme constructeur.</p>

<h2 id="Propriétés_et_méthodes_de_Function">Propriétés et méthodes de <code>Function</code></h2>

<p>L'objet global <code>Function</code> ne possède pas de méthodes ou de propriétés propres. Cependant, il est lui-même une fonction et hérite de certaines méthodes et propriétés depuis {{jsxref("Function.prototype")}} grâce à la chaîne de prototype.</p>

<h2 id="Le_prototype_de_Function">Le prototype de <code>Function</code></h2>

<h3 id="Propriétés">Propriétés</h3>

<div>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/prototype', 'Propri.C3.A9t.C3.A9s')}}</div>

<h3 id="Méthodes">Méthodes</h3>

<div>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/prototype', 'M.C3.A9thodes')}}</div>

<h2 id="Les_instances_de_Function">Les instances de <code>Function</code></h2>

<p>Les instances de <code>Function</code> héritent des méthodes et propriétés de {{jsxref("Function.prototype")}}. Comme pour les autres constructeurs, il est possible de modifier le prototype du constructeur afin d'apporter des modifications à toutes les instances de <code>Function</code>.</p>

<h2 id="Exemple">Exemple</h2>

<h3 id="Définir_des_arguments_avec_le_constructeur_Function">Définir des arguments avec le constructeur <code>Function</code></h3>

<p>Le code suivant permet de créer un objet <code>Function</code> qui utilise deux arguments :</p>

<pre class="brush: js">// Cet exemple peut être lancé dans votre console JavaScript

// On crée un fonction qui prend deux arguments
// et qui en renvoie la somme
var ajoute = new Function('a', 'b', 'return a + b');

// On appelle la fonction
ajoute(2, 6);
// &gt; 8
</pre>

<p>Les arguments "<code>a</code>" et "<code>b</code>" sont les noms des arguments formellement déclarés utilisés dans le corps de la fonction : "<code>return a + b</code>".</p>

<h3 id="Différence_entre_le_constructeur_Function_et_les_déclarations_de_fonction">Différence entre le constructeur <code>Function</code> et les déclarations de fonction</h3>

<p>Les fonctions créées avec le constructeur {{jsxref("Function()")}} ne créent pas de fermetures liées au contexte de leur création. Ainsi, lorsqu'elles sont exécutées, elles ne peuvent accéder qu'aux variables globales et à leurs propres valeurs locales. Elles ne peuvent pas accéder aux variables de la portée dans laquelle le constructeur <code>Function</code> a été invoqué. Le comportement est différent de celui qu'on obtient avec {{jsxref("eval")}} avec du code contenant une expression de fonction.</p>

<pre class="brush: js">var x = 10;

function créerFonction1() {
  var x = 20;
  return new Function("return x;"); // ici |x| fait référence au |x| global
}

function créerFonction2() {
  var x = 20;
  function f() {
    return x; // ici |x| fait référence au |x| local juste avant
  }
  return f;
}

var f1 = créerFonction1();
console.log(f1());          // 10
var f2 = créerFonction2();
console.log(f2());          // 20</pre>

<p>Bien que ce code fonctionne dans un navigateur web, l'appel à <code>f1()</code> provoquera une {{jsxref("ReferenceError")}} dans Node.js car <code>x</code> ne sera pas trouvé. En effet, pour Node, la portée de plus haut niveau n'est pas la portée globale et <code>x</code> est ici local à la fonction.</p>

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
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.3', 'Function')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-function-objects', 'Function')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function-objects', 'Function')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Function")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Fonctions", "Les fonctions","",1)}}</li>
 <li>L'instruction {{jsxref("Instructions/function", "function")}}</li>
 <li>L'expression {{jsxref("Opérateurs/L_opérateur_function", "function")}}</li>
 <li>L'instruction {{jsxref("Instructions/function*", "function*")}}</li>
 <li>L'expression {{jsxref("Opérateurs/function*", "function*")}}</li>
 <li>{{jsxref("AsyncFunction")}}</li>
 <li>{{jsxref("GeneratorFunction")}}</li>
</ul>
