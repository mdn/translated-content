---
title: ET logique (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_and
translation-of: Web/JavaScript/Reference/Operators/Logical_AND
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur ET logique (<code>&amp;&amp;</code>) (conjonction logique) renvoie vrai si et uniquement si ses deux opérandes sont <code>true</code> ou équivalents à <code>true</code>. Il est généralement utilisé avec des valeurs booléennes et, quand c'est le cas, il renvoie une valeur booléenne. Toutefois, l'opérateur <code>&amp;&amp;</code> renvoie en fait la valeur d'un de ses opérandes et, si cet opérateur est utilisé avec des valeurs non-booléennes, il renverra une valeur non-booléenne.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
<var>expr1</var> &amp;&amp; <var>expr2</var>
</pre>

<h2 id="description">Description</h2>

<p>Si <code>expr1</code> peut être converti en <code>true</code>, le résultat sera <code>expr2</code> ; sinon, ce sera <code>expr1</code>.
</p>

<p>Si une valeur peut être convertie en <code>true</code>, elle peut être qualifiée de <a href="/fr/docs/Glossary/Truthy"><i>truthy</i></a>. Si une valeur peut être convertie en <code>false</code>, on la qualifiera alors de <a href="/fr/docs/Glossary/Falsy"><i>falsy</i></a>.</p>

<p>Parmi les expressions qui peuvent être converties en <code>false</code>, on a :</p>

<ul>
  <li><code>null</code> ;</li>
  <li><code>NaN</code> ;</li>
  <li><code>0</code> ;</li>
  <li>la chaîne de caractères vide (<code>""</code> ou <code>''</code> ou <code>``</code>) ;</li>
  <li><code>undefined</code>.</li>
</ul>

<p>Bien que l'opérateur <code>&amp;&amp;</code> puisse être utilisé avec des opérandes qui ne soient pas des valeurs booléennes, il reste un opérateur booléen, car sa valeur de retour peut toujours être convertie en <a href="/fr/docs/Web/JavaScript/Data_structures#boolean_type">une valeur primitive booléenne</a>. Pour convertir explicitement la valeur de retour (ou tout expression de façon plus générale) dans sa valeur booléenne correspondante, on pourra utiliser un double <a href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT">opérateur NON (<code>!</code>)</a> ou le constructeur <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean"><code>Boolean()</code></a>.</p>

<h3 id="short-circuit_evaluation">Évaluation en court-circuit</h3>

<p>L'expression utilisant un ET logique est évaluée de gauche à droite. Le moteur cherche s'il est possible d'utiliser un court-circuit de la façon suivante :</p>

<p><code>(une expression équivalente à faux) &amp;&amp; <var>expr</var></code> sera court-circuité pour fournir directement le résultat de l'expression équivalente à faux.</p>

<p>Cette notion de court-circuit indique que la partie <code><var>expr</var></code> ci-avant <strong>n'est pas évaluée</strong>, tout effet de bord lié à cette évaluation n'aura pas lieu (par exemple, si <code><var>expr</var></code> est un appel de fonction, la fonction n'est pas appelée). Ce fonctionnement a lieu, car la valeur du résultat peut d'office être déterminée par l'évaluation du premier opérande. Par exemple :</p>

<pre class="brush: js">
function A(){
  console.log('A a été appelée');
  return false;
}

function B(){
  console.log('B a été appelée');
  return true;
}

console.log( A() &amp;&amp; B() );
// affichera "A a été appelée" dans la console via l'appel de la fonction
// puis affichera false (la valeur du résultat de l'expression avec l'opérateur)
// on voit que la fonction B n'est pas du tout appelée
</pre>

<h3 id="operator_precedence">Précédence des opérateurs</h3>

<p>Les expressions suivantes peuvent sembler équivalentes mais ne le sont pas. En effet, l'opérateur <code>&amp;&amp;</code> est exécuté avant l'opérateur <code>||</code> (voir <a href="/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">l'article sur la précédence des opérateurs</a>).</p>

<pre class="brush: js">
true || false &amp;&amp; false      // renvoie true, car &amp;&amp; est exécuté en premier
(true || false) &amp;&amp; false    // renvoie false, car la précédence par défaut ne s'applique pas
                                    // avec les parenthèses
</pre>

<h2 id="examples">Exemples</h2>

<h3 id="using_AND">Utiliser le ET logique</h3>

<p>Le code suivant illustre quelques usages de l'opérateur ET logique <code>&amp;&amp;</code>.</p>

<pre class="brush: js">
a1 = true   &amp;&amp; true       // t &amp;&amp; t renvoie true
a2 = true   &amp;&amp; false      // t &amp;&amp; f renvoie false
a3 = false  &amp;&amp; true       // f &amp;&amp; t renvoie false
a4 = false  &amp;&amp; (3 == 4)   // f &amp;&amp; f renvoie false
a5 = 'Chat' &amp;&amp; 'Chien'    // t &amp;&amp; t renvoie "Chien"
a6 = false  &amp;&amp; 'Chat'     // f &amp;&amp; t renvoie false
a7 = 'Chat' &amp;&amp; false      // t &amp;&amp; f renvoie false
a8 = ''     &amp;&amp; false      // f &amp;&amp; f renvoie ""
a9 = false  &amp;&amp; ''         // f &amp;&amp; f renvoie false
</pre>

<h3 id="conversion_rules_for_booleans">Règles de conversion booléennes</h3>

<h4 id="converting_and_to_or">Convertir ET en OU</h4>

<p>L'opération suivante, utilisant des <strong>booléens</strong> :</p>

<pre class="brush: js">
bCondition1 &amp;&amp; bCondition2
</pre>

<p>sera toujours équivalente à :</p>

<pre class="brush: js">
!(!bCondition1 || !bCondition2)
</pre>

<h4 id="converting_or_to_and">Convertir OU en ET</h4>

<p>L'opération suivante, utilisant des <strong>booléens</strong> :</p>

<pre class="brush: js">
bCondition1 || bCondition2
</pre>

<p>sera toujours équivalente à :</p>

<pre class="brush: js">
!(!bCondition1 &amp;&amp; !bCondition2)
</pre>

<h3 id="removing_nested_parentheses">Retrait des parenthèses imbriquées</h3>

<p>Les expressions logiques sont évaluées de gauche à droite, il est donc possible de retirer les parenthèses d'une expression complexe en suivant quelques règles.</p>

<p>L'opération composite suivant, qui utilise des <strong>booléens</strong> :</p>

<pre class="brush: js">
bCondition1 || (bCondition2 &amp;&amp; bCondition3)
</pre>

<p>sera toujours égale à :</p>

<pre class="brush: js">
bCondition1 || bCondition2 &amp;&amp; bCondition3
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a></li>
  <li><a href="/fr/docs/Glossary/Truthy"><i>Truthy</i></a></li>
  <li><a href="/fr/docs/Glossary/Falsy"><i>Falsy</i></a></li>
</ul>
