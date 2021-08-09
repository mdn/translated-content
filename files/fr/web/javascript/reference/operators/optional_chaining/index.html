---
title: Chaînage optionnel (optional chaining)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
tags:
  - Chaînage
  - Chaînage optionnel
  - Coalescence
  - JavaScript
  - Operator
  - Opérateur
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Optional_chaining
original_slug: Web/JavaScript/Reference/Opérateurs/Optional_chaining
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur de <strong>chaînage optionnel</strong> <strong><code>?.</code></strong> permet de lire la valeur d'une propriété située profondément dans une chaîne d'objets connectés sans avoir à valider expressément que chaque référence dans la chaîne est valide. L'opérateur <code>?.</code> fonctionne de manière similaire à l'opérateur de chaînage <code>.</code>, à ceci près qu'au lieu de causer une erreur si une référence est {{jsxref("null")}} ou {{jsxref("undefined")}}, l'expression se court-circuite avec <code>undefined</code> pour valeur de retour. Quand il est utilisé avec des appels de fonctions, il retourne <code>undefined</code> si la fonction donnée n'existe pas.</p>

<p>Ceci résulte en des expressions plus courtes et plus simples lors de l'accès à des propriétés chaînées quand il est possible qu'une référence soit manquante. Ceci peut aussi être utile lors de l'exploration du contenu d'un objet lorsqu'il n'y a aucune garantie concernant les propriétés qui sont requises.</p>

<p>Le chainage optionnel ne peut pas être utilisé sur un objet initialement inexistant. Il ne remplace les vérifications du type <code>if (typeof a == "undefined")</code>.</p>

<p>{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html")}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate"><var>obj</var>?.<var>prop</var>
<var>obj</var>?.[<var>expr</var>]
<em>arr?.[index]</em>
<var>func</var>?.(<var>args</var>)
</pre>

<h2 id="Description">Description</h2>

<p>L'opérateur de chaînage optionnel fournit un moyen de simplifier l'accès aux valeurs au sein d'objets connectés quand il est possible qu'une référence ou une fonction soit <code>undefined</code> ou <code>null</code>.</p>

<p>Par exemple, considérant un objet <code>obj</code> qui a une structure imbriquée. Sans chaînage optionnel, chercher une sous-propriété imbriquée en profondeur requiert de valider les références intermédiaires, tel que :</p>

<pre class="brush: js notranslate">let nestedProp = obj.premier &amp;&amp; obj.premier.second;</pre>

<p>La valeur de <code>obj.premier</code> est confirmée comme n'étant pas <code>null</code> (ni <code>undefined</code>) avant que d'accéder à la valeur de <code>obj.premier.second</code>. Ceci prévient l'erreur qui pourrait survenir si vous accédiez simplement <code>obj.premier.second</code> directement sans vérifier <code>obj.premier</code>.</p>

<p>Avec l'opérateur de chaînage optionnel (<code>?.</code>), vous n'avez pas besoin de vérifier explicitement et de court-circuiter la vérification selon l'état de <code>obj.premier</code> avant que d'accéder à <code>obj.premier.second</code> :</p>

<pre class="brush: js notranslate">let nestedProp = obj.<code>premier</code>?.second;</pre>

<p>En utilisant l'opérateur <code>?.</code> au lieu de l'opérateur <code>.</code>, JavaScript sait implicitement qu'il doit vérifier <code>obj.premier</code> pour être certain qu'il ne soit <code>null</code> ou <code>undefined</code> avant que de tenter d'accéder à <code>obj.first.second</code>. Si <code>obj.premier</code> est <code>null</code> ou <code>undefined</code>, l'expression se court-circuite automatiquement et retourne <code>undefined</code>.</p>

<p>C'est équivalent à : </p>

<pre class="brush: js notranslate">let temp = obj.<code>premier</code>;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);
</pre>

<h3 id="Chaînage_optionnel_avec_des_appels_de_fonctions">Chaînage optionnel avec des appels de fonctions</h3>

<p>Vous pouvez utiliser le chaînage optionnel lorsque vous tentez d'appeler une méthode qui pourrait ne pas exister. Ceci peut être une aide précieuse, par exemple, lorsque vous utilisez une API dans laquelle une méthode pourrait être indisponible, à cause d'une implantation datée ou à cause d'une fonctionnalité qui n'est pas disponible sur l'appareil de l'utilisateur.</p>

<p>Utiliser le chaînage optionnel avec les appels de fonction entraîne le retour automatique de la valeur <code>undefined</code> pour l'expression plutôt que de jeter une exception si la méthode n'est pas trouvée :</p>

<pre class="brush: js notranslate">let result = uneInterface.uneMéthode?.();</pre>

<div class="blockIndicator note">
<p><strong>Note :</strong> S'il est une propriété qui porte ce nom et qui n'est pas une fonction, utiliser <code>?.</code> jètera aussi une exception {{jsxref("TypeError")}} (<code>x.y</code><code> is not a function</code>).</p>
</div>

<h4 id="Réaliser_des_fonctions_de_rappel_optionnelles_ou_des_écouteurs_dévènements">Réaliser des fonctions de rappel optionnelles ou des écouteurs d'évènements</h4>

<p>Si vous utilisez des fonctions ou des méthodes de recherche depuis un objet avec <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring">une affectation par décomposition</a>, vous pourriez avoir des valeurs inexistantes que vous ne pouvez appeler comme fonction à moins que vous ayez vérifié leur existance. En utilisant <code>?.</code>, vous pourriez vous passer de cette vérification supplémentaire :</p>

<pre class="brush: js notranslate">// ES2019
function doSomething(onContent, onError) {
  try {
    // ... faire quelque chose avec les données
  }
  catch (err) {
    if (onError) { // vérifier que onError existe réellement
      onError(err.message);
    }
  }
}
</pre>

<pre class="brush: js notranslate">// Utiliser le chaînage optionnel avec les appels de fonctions
function doSomething(onContent, onError) {
  try {
   // ... faire quelque chose avec les données
  }
  catch (err) {
    onError?.(err.message); // pas d'exception si onError n'est pas défini
  }
}
</pre>

<h3 id="Chaînage_optionnel_avec_les_expressions">Chaînage optionnel avec les expressions</h3>

<p>Vous pouvez aussi utiliser l'opérateur de chaînage optionnel lorsque vous accédez aux propriétés avec une expression en utilisant <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation">la notation avec crochets des accesseurs de propriétés</a> :</p>

<pre class="brush: js notranslate">let nestedProp = obj?.['propName'];
</pre>

<h3 id="Chaînage_optionnel_invalide_depuis_le_côté_gauche_dune_affectation">Chaînage optionnel invalide depuis le côté gauche d'une affectation</h3>

<pre class="notranslate"><code>let objet = {};
objet?.propriété = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment</code></pre>

<h3 id="Accès_aux_éléments_de_tableau_avec_le_chaînage_optionnel">Accès aux éléments de tableau avec le chaînage optionnel</h3>

<pre class="notranslate">let élément = arr?.[42];</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_basique">Exemple basique</h3>

<p>Cet exemple cherche la valeur de la propriété <code>name</code> dans un objet stocké comme propriété de nom <code>bar</code> d'un objet Map alors que cet objet <code>bar</code> n'existe pas. Le résultat est donc <code>undefined</code>.</p>

<pre class="brush: js notranslate">let monMap = new Map();
monMap.set("foo", {name: "baz", desc: "inga"});

let nameBar = monMap.get("bar")?.name;</pre>

<h3 id="Court-circuiter_une_évaluation">Court-circuiter une évaluation</h3>

<p>Lorsque vous utilisez le chaînage optionnel avec une expression, si l'opérande gauche est <code>null</code> ou <code>undefined</code>, l'expression ne sera par évaluée. Par exemple :</p>

<pre class="brush: js notranslate">let objetPotentiellementNul = null;
let x = 0;
let prop = objetPotentiellementNul?.[x++];

console.log(x); // 0 car x n'a pas été incrémenté
</pre>

<h3 id="Empiler_les_opérateurs_de_chaînage_optionnel">Empiler les opérateurs de chaînage optionnel</h3>

<p>Avec les structures imbriquées, il est possible d'utiliser le chaînage optionnel plusieurs fois :</p>

<pre class="brush: js notranslate">let client = {
  nom: "Carl",
  details: {
    age: 82,
    localisation: "Paradise Falls"
    // adresse détaillée inconnue
  }
};
let villeDuClient = client.details?.adresse?.ville;

// … cela fonctionne aussi avec le chaînage optionnel sur les appels de fonction
let durée = vacations.trip?.getTime?.();
</pre>

<h3 id="Combinaison_avec_lopérateur_de_coalescence_des_nuls_Nullish_coalescing_operator">Combinaison avec l'opérateur de coalescence des nuls (Nullish coalescing operator)</h3>

<p>L'{{JSxRef("Opérateurs/Nullish_coalescing_operator", "Opérateur de coalescence des nuls (Nullish coalescing operator)", '', 1)}} peut être utilisé après un chaînage optionnel afin de construire une valeur par défaut quand aucune n'a été trouvée :</p>

<pre class="notranslate">let client = {
  nom: "Carl",
  details: { age: 82 }
};
const villeDuClient = client?.ville ?? "Ville Inconnue";
console.log(villeDuClient); // Ville inconnue</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#prod-OptionalExpression', 'optional expression')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.optional_chaining")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{JSxRef("Operators/Nullish_Coalescing_Operator", "Opérateur de coalescence des nuls (Nullish coalescing operator)", '', 1)}}</li>
</ul>
