---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
tags:
  - Attention
  - JavaScript
  - Méthode
  - Reference
  - eval
translation_of: Web/JavaScript/Reference/Global_Objects/eval
original_slug: Web/JavaScript/Reference/Objets_globaux/eval
---
<div>{{jsSidebar("Objects")}}</div>

<p>La fonction <code><strong>eval()</strong></code> permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.</p>

<div class="warning">
<p><strong>Attention :</strong> L'exécution de JavaScript à partir d'une chaîne de caractères constitue un risque de sécurité énorme. Il est beaucoup trop facile pour un mauvais acteur d'exécuter du code arbitraire lorsque vous utilisez <code>eval()</code>. Voir la section <a href="#Nutiliser_eval_quen_dernier_recours_!">N'utilisez eval() qu'en dernier recours !</a> ci-dessous.</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre>eval(<var>str</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>Une chaîne de caractères qui représente une expression JavaScript ou une instruction ou une suite d'instructions JavaScript. L'expression utilisée peut contenir des variables et des propriétés d'objets existants.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La valeur de terminaison du code fourni en argument. Si la valeur de terminaison est vide, c'est la valeur {{jsxref("undefined")}} qui est renvoyée.</p>

<h2 id="Description">Description</h2>

<p><code>eval()</code> est une fonction rattachée à l'objet global.</p>

<p><code>eval()</code> prend en compte un argument qui est une chaîne de caractères. Si cette chaîne représente une expression, <code>eval()</code> évaluera l'expression. Si l'argument utilisé représente une ou plusieurs instructions JavaScript, <code>eval()</code> évaluera les instructions. <code>eval()</code> ne doit pas être utilisé pour évaluer une expression arithmétique. En effet, JavaScript évalue automatiquement les expressions arithmétiques.</p>

<p>Si on construit une expression arithmétique sous la forme d'une chaîne de caractères, on peut utiliser <code>eval()</code> pour évaluer cette expression par la suite. Ainsi, si on a une variable <code>x</code>, on peut préparer une expression à utiliser plus tard en construisant la chaîne "<code>3 * x + 2</code>" par exemple. Au moment où on souhaite procéder à l'évaluation, on appellera <code>eval()</code> avec cette chaîne de caractères.</p>

<p>Si l'argument passé à <code>eval()</code> n'est pas une chaîne de caractères, <code>eval()</code> renverra l'argument inchangé. Dans l'exemple qui suit, on utilise le constructeur <code>String</code>, <code>eval()</code> renvoie donc un objet <code>String</code> au lieu d'évaluer la chaîne de caractères correspondante.</p>

<pre class="brush:js">eval(new String("2 + 2")); // renvoie un objet String contenant "2 + 2"
eval("2 + 2");             // renvoie 4
</pre>

<p>Ce comportement peut être résolu de façon générique en utilisant la méthode <code>toString()</code>.</p>

<pre class="brush:js">var expression = new String("2 + 2");
eval(expression.toString());
</pre>

<p>Si la fonction  <code>eval</code> est utilisée de manière indirecte, en l'invoquant par une référence autre que <code>eval</code>, cela fonctionnera avec une portée globale plutôt que locale (d'après ECMASCript 5). Par exemple, les déclarations de fonctions vont créer des fonctions globales et le code en cours d'évaluation n'aura pas accès aux variables locales déclarées avec la même portée que là où la fonction <code>eval</code> est appelée.</p>

<pre class="brush: js">function test() {
  var x = 2, y = 4;
  console.log(eval("x + y"));  // Appel direct, portée locale, résultat de 6
  var geval = eval;
  console.log(geval("x + y")); // Appel indirect, portée globale, lance une exception ReferenceError car `x` n'est pas défini
  (0, eval)('x + y'); // un autre exemple d'appel indirect.
}</pre>

<h2 id="Nutiliser_eval_quen_dernier_recours_!">N'utiliser <code>eval()</code> qu'en dernier recours !</h2>

<p><code>eval()</code> est une fonction dangereuse qui exécute le code passé en argument avec les privilèges de l'environnement appelant. Si <code>eval()</code> est utilisée avec une chaîne construite de façon mal intentionnée, cela pourra entraîner l'exécution d'un code malveillant sur la machine de l'utilisateur avec les permissions données au site ou au module complémentaire. À un niveau encore plus critique, du code tiers pourrait ainsi consulter la portée dans laquelle <code>eval()</code> a été invoquée. Cela peut permettre des attaques qui n'auraient pas été rendues possible en utilisant un objet {{jsxref("Function")}}.</p>

<p><code>eval()</code> est également plus lente que les méthodes alternatives. En effet, l'évaluation nécessite de faire appel à l'interpréteur JavaScript alors que de nombreuses structures sont optimisées par les moteurs JavaScript modernes.</p>

<p>Dans de nombreux cas, il existe des alternatives plus sûres et plus performantes à <code>eval()</code>.</p>

<p>De plus, les moteurs JavaScript modernes convertissent le code JavaScript en code machine. Les notions relatives aux noms des variables sont donc transformées. Utiliser <code>eval()</code> force le navigateur à enregistrer puis à rechercher parmi les noms existants afin de retrouver les variables. Si besoin, on peut utiliser le constructeur <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function">Function</a></code> :</p>

<p>Avec <code>eval()</code> :</p>

<pre class="brush:js">function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
</pre>

<p>Avec <code>Function</code> :</p>

<pre class="brush:js">function looseJsonParse(obj){
    return Function('"use strict";return (' + obj + ')')();
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
</pre>

<p>Dans le premier cas, l'évaluation de <code>c: new Date()</code> sera beaucoup plus lente car <code>Date</code> peut faire référence à une variable déclarée avant. Dans le second cas, la fonction est évaluée dans la portée globale et le moteur peut donc utiliser {{jsxref("Date")}} directement.</p>

<p>Autrement dit, dans le premier cas, on aurait pu avoir un code comme :</p>

<pre class="brush:js">function Date(n){
    return ["Monday","Tuesday","Wednesday","Thursaday","Friday","Saturday","Sunday"][n%7 || 0];
}
function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
</pre>

<p>Auquel cas, le navigateur doit effectuer une recherche coûteuse afin de vérifier s'il y a des variables locales <code>Date</code>.</p>

<p>Pour obtenir un résultat identique, on peut tout à fait se passer d'<code>eval()</code> :</p>

<pre class="brush:js">function Date(n){
    return ["Monday","Tuesday","Wednesday","Thursaday","Friday","Saturday","Sunday"][n%7 || 0];
}
function runCodeWithDateFunction(obj){
    return Function('"use strict";return (' + obj + ')')()(
        Date
    );
}
console.log(runCodeWithDateFunction(
   "function(Date){ return Date(5) }"
))
</pre>

<p>1. Le code passé à <code>runCodeWithDateFunction</code> peut être minifié.</p>

<p>2. Le surcoût lié à un appel de fonction est léger</p>

<p>3. <code>Function()</code> permet d'utiliser  <code>"use strict";</code> (qui peut également aider à améliorer les performances).</p>

<p>Enfin, pour la plupart des cas, on doit pouvoir éviter de passer par</p>

<p><code>eval()</code> ou <code>Function()</code> !</p>

<h3 id="Accéder_aux_propriétés_dun_objet">Accéder aux propriétés d'un objet</h3>

<p><code>eval()</code> ne doit pas être utilisée pour convertir des noms de propriétés en propriétés. Par exemple, lorsqu'on ne sait pas quelle propriété va être consultée avant l'exécution, on pourrait utiliser :</p>

<pre class="brush:js">var obj = { a: 20, b: 30 };
var nomPropriété = getNomProp();  //une méthode qui renvoie "a" ou "b"

eval( "var résultat = obj." + nomPropriété );
</pre>

<p>Cependant, <code>eval()</code> n'est pas du tout nécessaire. Il est beaucoup plus simple, plus sécurisé, plus rapide, d'utiliser les <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres">accesseurs de propriétés</a> :</p>

<pre class="brush:js">var obj = { a: 20, b: 30 };
var nomPropriété = getNomProp();  // une méthode qui renvoie  "a" or "b"
var résultat = obj[nomPropriété]; //  obj[ "a" ] correspond à obj.a
</pre>

<h3 id="Utiliser_des_fonctions_au_lieu_de_morceaux_de_code">Utiliser des fonctions au lieu de morceaux de code</h3>

<p>Les fonctions JavaScript sont des <a class="external" href="https://en.wikipedia.org/wiki/First-class_function">citoyens de premier rang du langage</a>, cela signifie que les fonctions peuvent être passées comme arguments aux autres API, qu'elles peuvent être stockées dans des variables, dans des propriétés d'objets, etc. De nombreuses API pour le DOM fonctionnent en prenant en argument des fonctions :</p>

<pre class="brush: js">// au lieu de setTimeout(" ... ", 1000) on utilisera :
setTimeout(function() { ... }, 1000);

// au lieu de elt.setAttribute("onclick", "...") on utilisera :
elt.addEventListener("click", function() { ... } , false); </pre>

<p><a href="/fr/docs/Web/JavaScript/Guide/Closures">Les fermetures (<em>closures</em>)</a> sont utiles lorsqu'on souhaite obtenir des fonctions paramétrées sans avoir à concaténer des chaînes de caractères.</p>

<h3 id="Convertir_des_chaînes_JSON_en_objets_JavaScript_parsing">Convertir des chaînes JSON en objets JavaScript (<em>parsing</em>)</h3>

<p>Si la chaîne utilisée avec <code>eval()</code> contient des données (par exemple, un tableau : <code>"[1, 2, 3]"</code>) et non du code, il est conseillé d'utiliser du {{Glossary("JSON")}}, qui permet de représenter un sous-ensemble des données représentables en JavaScript.</p>

<p>On notera que la syntaxe JSON est limitée relativement à la syntaxe JavaScript. De nombreux littéraux JavaScript ne pourront être parsés en JSON (par exemple, les virgules à la fin des instructions ne seront pas autorisées et les noms de propriétés devront être compris entre simples quotes). Il est souvent préférable d'utiliser un outil de sérialisation JSON pour que les chaînes générées puissent être analysée en JSON.</p>

<h3 id="Transmettre_des_données_et_non_du_code">Transmettre des données et non du code</h3>

<p>Si on a par exemple une extension conçue pour parcourir le code d'une page web, on pourra transmettre des données <a href="/fr/docs/XPath">XPath</a> au lieu d'un code JavaScript.</p>

<h3 id="Exécuter_du_code_avec_des_privilèges_restreints">Exécuter du code avec des privilèges restreints</h3>

<p>S'il faut nécessairement exécuter du code, il faut le faire avec des privilèges restreints. Cela s'applique généralement aux modules complémentaires ou aux applications XUL. Pour cela, on pourra utiliser <a href="/fr/docs/Components.utils.evalInSandbox">Components.utils.evalInSandbox</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_eval">Utiliser <code>eval()</code></h3>

<p>Dans le code suivant, les deux instructions passées à <code>eval()</code> sous la forme d'une chaîne renvoient 42. La première évaluation porte sur la chaîne "<code>x + y + 1</code>" ; la seconde évaluation porte sur la chaîne de caractères "<code>42</code>".</p>

<pre class="brush:js">var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // renvoie 42
eval(z);           // renvoie 42
</pre>

<h3 id="Utiliser_eval_pour_une_chaîne_dinstructions">Utiliser <code>eval()</code> pour une chaîne d'instructions</h3>

<p>Dans l'exemple qui suit, <code>eval()</code> est utilisée pour évaluer la chaîne de caractères <code>str</code>. Cette chaîne contient plusieurs instructions JavaScript qui affichent un message dans la console et qui affectent la valeur 42 à la variable <code>z</code> si <code>x</code> vaut cinq et 0 sinon. Lorsque la seconde instruction est exécutée, <code>eval()</code> entraînera l'exécution des instructions, les instructions seront évaluées et la valeur de <code>z</code> sera donc renvoyée.</p>

<pre class="brush:js">var x = 5;
var str = "if (x == 5) {console.log('z vaut 42'); z = 42;} else z = 0; ";
console.log("z vaut "+eval(str));
</pre>

<h3 id="Le_résultat_deval_est_celui_de_la_dernière_expression">Le résultat d'<code>eval()</code> est celui de la dernière expression</h3>

<p><code>eval()</code> renvoie la valeur de la dernière expression évaluée :</p>

<pre class="brush:js">var str = "if ( a ) { 1+1; } else { 1+2; }";
var a = true;
var b = eval(str);  // renvoie 2

console.log("b vaut : " + b);

a = false;
b = eval(str);      // renvoie 3

console.log("b vaut : " + b);</pre>

<h3 id="eval_et_les_fonctions"><code>eval()</code> et les fonctions</h3>

<p>Pour qu'une fonction soit restituée lors de l'évaluation, il est nécessaire d'encadrer l'expression contenue dans la chaîne de caractères avec des parenthèses :</p>

<pre class="brush:js">var fctStr1 = "function a() {}"
var fctStr2 = "(function a() {})"
var fct1 = eval(fctStr1)  // renvoie undefined
var fct2 = eval(fctStr2)  // renvoie une function
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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.1.2.1', 'eval')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-eval-x', 'eval')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-eval-x', 'eval')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.eval")}}</p>

<h2 id="Notes_spécifiques_à_Firefox">Notes spécifiques à Firefox</h2>

<ul>
 <li>Historiquement, <code>eval()</code> utilisait un deuxième argument qui définissait l'objet qui était le contexte pour lequel effectuer l'évaluation. Cet argument était non-standard et a été retiré de SpiderMonkey avec Firefox 4 (cf. {{bug(531675)}}).</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Objets_globaux/uneval", "uneval()")}}</li>
 <li>{{jsxref("Opérateurs/Opérateurs_de_membres","Les accesseurs de propriétés","",1)}}</li>
 <li><a href="/fr/Add-ons/WebExtensions/Content_scripts#Using_eval()_in_content_scripts">Utiliser <code>eval()</code> dans les scripts de contenu dans les WebExtensions</a></li>
</ul>
