---
title: OU logique (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_or
translation-of: Web/JavaScript/Reference/Operators/Logical_OR
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur OU logique (<code>||</code>) (disjonction logique) renvoie vrai si et seulement si au moins un de ses opérandes est vrai. Cet opérateur est généralement utilisé avec des valeurs booléennes et, lorsque c'est le cas, il renvoie une valeur booléenne. Toutefois, <code>||</code> peut aussi être utilisé avec des valeurs non-booléennes et, dans ce cas, renverra une valeur non-booléenne.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}</div>

<h2 id="syntax">Syntax</h2>

<pre class="brush: js">
<var>expr1</var> || <var>expr2</var>
</pre>

<h2 id="description">Description</h2>

<p>Si <code>expr1</code> peut être converti en <code>true</code>, c'est <code>expr1</code> qui sera renvoyé, sinon ce sera <code>expr2</code>.</p>

<p>Si une valeur peut être convertie en <code>true</code>, elle peut être qualifiée de <a href="/fr/docs/Glossary/Truthy"><i>truthy</i></a>. Si une valeur peut être convertie en <code>false</code>, on la qualifiera alors de <a href="/fr/docs/Glossary/Falsy"><i>falsy</i></a>.</p>

<p>Parmi les expressions qui peuvent être converties en <code>false</code>, on a :</p>

<ul>
  <li><code>null</code> ;</li>
  <li><code>NaN</code> ;</li>
  <li><code>0</code> ;</li>
  <li>la chaîne de caractères vide (<code>""</code> ou <code>''</code> ou <code>``</code>) ;</li>
  <li><code>undefined</code>.</li>
</ul>

<p>Bien que l'opérateur <code>||</code> puisse être utilisé avec des opérandes qui ne soient pas des valeurs booléennes, il reste un opérateur booléen, car sa valeur de retour peut toujours être convertie en <a href="/fr/docs/Web/JavaScript/Data_structures#boolean_type">une valeur primitive booléenne</a>. Pour convertir explicitement la valeur de retour (ou tout expression de façon plus générale) dans sa valeur booléenne correspondante, on pourra utiliser un double <a href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT">opérateur NON (<code>!</code>)</a> ou le constructeur <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean"><code>Boolean()</code></a>.</p>

<h3 id="short-circuit_evaluation">Évaluation en court-circuit</h3>

<p>L'expression utilisant un OU logique est évaluée de gauche à droite. Le moteur cherche s'il est possible d'utiliser un court-circuit de la façon suivante :</p>

<p><code>(une expression équivalente à vrai) || <var>expr</var></code> sera court-circuité pour fournir directement le résultat de l'expression équivalente à vrai.</p>

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

console.log( B() || A() );
// affichera "B a été appelée" dans la console via l'appel de la fonction
// puis affichera true (la valeur du résultat de l'expression avec l'opérateur)
// on voit que la fonction A n'est pas du tout appelée
</pre>

<h3 id="operator_precedence">Précédence des opérateurs</h3>

<p>Les expressions suivantes peuvent sembler équivalentes mais ne le sont pas. En effet, l'opérateur <code>&amp;&amp;</code> est exécuté avant l'opérateur <code>||</code> (voir <a href="/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">l'article sur la précédence des opérateurs</a>).</p>

<pre class="brush: js">
true || false &amp;&amp; false      // renvoie true, car &amp;&amp; est exécuté en premier
(true || false) &amp;&amp; false    // renvoie false, car la précédence par défaut ne s'applique pas
                                    // avec les parenthèses
</pre>

<h2 id="examples">Exemples</h2>

<h3 id="using_or">Utiliser le OU logique</h3>

<p>Le code suivant illustre quelques usages de l'opérateur OU logique <code>||</code>.</p>

<pre class="brush: js">
o1 = true   || true      // t || t renvoie true
o2 = false  || true      // f || t renvoie true
o3 = true   || false     // t || f renvoie true
o4 = false  || (3 == 4)  // f || f renvoie false
o5 = 'Chat' || 'Chien'   // t || t renvoie "Chat"
o6 = false  || 'Chat'    // f || t renvoie "Chat"
o7 = 'Chat' || false     // t || f renvoie "Chat"
o8 = ''     || false     // f || f renvoie false
o9 = false  || ''        // f || f renvoie ""
o10 = false || varObject // f || object renvoie varObject
</pre>

<div class="notecard note">
  <p><strong>Note :</strong> Si vous utilisez cet opérateur afin de fournir une valeur par défaut à une variable. Soyez conscient⋅e qu'une valeur équivalente à <code>false</code> ne pourra pas être utilisée ainsi. Si vous souhaitez uniquement écarter <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a> ou <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>, privilégiez l'utilisation de <a href="/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">l'opérateur de coalescence des nuls</a>.</p>
</div>

<h3 id="conversion_rules_for_booleans">Règles de conversion booléennes</h3>

<h4 id="converting_and_to_or">Convertir ET en OU</h4>

<p>L'opération suivante, utilisant des <strong>booléens</strong> :</p>

<pre class="brush: js">bCondition1 &amp;&amp; bCondition2</pre>

<p>sera toujours équivalente à :</p>

<pre class="brush: js">
!(!bCondition1 || !bCondition2)
</pre>

<h4 id="converting_or_to_and">Convertir OU en ET</h4>

<p>L'opération suivante, utilisant des <strong>booléens</strong> :</p>

<pre class="brush: js">bCondition1 || bCondition2</pre>

<p>sera toujours équivalente à :</p>

<pre class="brush: js">
!(!bCondition1 &amp;&amp; !bCondition2)
</pre>

<h3 id="removing_nested_parentheses">Retrait des parenthèses imbriquées</h3>

<p>Les expressions logiques sont évaluées de gauche à droite, il est donc possible de retirer les parenthèses d'une expression complexe en suivant quelques règles.</p>

<p>L'opération composite suivante, utilisant des <strong>booléens</strong> :</p>

<pre class="brush: js">
bCondition1 &amp;&amp; (bCondition2 || bCondition3)
</pre>

<p>sera toujours équivalente à :</p>

<pre class="brush: js">
!(!bCondition1 || !bCondition2 &amp;&amp; !bCondition3)
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">L'opérateur de coalescence des nuls (<code>??</code>)</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a></li>
  <li><a href="/fr/docs/Glossary/Truthy"><i>Truthy</i></a></li>
  <li><a href="/fr/docs/Glossary/Falsy"><i>Falsy</i></a></li>
</ul>
