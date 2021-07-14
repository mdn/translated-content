---
title: Accesseurs de propriétés
slug: Web/JavaScript/Reference/Operators/Property_Accessors
tags:
  - JavaScript
  - Opérateur
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Property_Accessors
original_slug: Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres
---
<div>{{jsSidebar("Operators")}}</div>

<p>Les <strong>accesseurs de propriété</strong> permettent de fournir un accès aux propriétés d'un objet en utilisant une notation avec un point ou une notation avec des crochets</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">objet.propriété
objet["propriété"]
</pre>

<h2 id="Description">Description</h2>

<p>Les objets peuvent être vus comme des tableaux associatifs (<em>map</em>, dictionnaires, table de hachage, annuaire, etc.). Les <em>clés</em> (<em>keys</em>) de ce tableau sont les noms des propriétés de l'objet. Lorsqu'on parle d'objets, on fait généralement une distinction entre les propriétés et les méthodes. En réalité cette différence est plus dûe à une convention qu'à une réelle distinction. En effet, une méthode est simplement une propriété qu'on peut appeler (sa valeur fera souvent référence à une instance de {{jsxref("Function")}}).</p>

<p>Il existe deux façons d'accéder aux propriétés d'un objet : la notation avec point et la notation avec crochets.</p>

<h3 id="Notation_avec_point">Notation avec point</h3>

<pre class="brush: js">obtenir = objet.propriété;
objet.propriété = définir;
</pre>

<p><code>propriété</code> doit être un identifiant JavaScript valide, c'est-à-dire une séquence de caractères alphanumériques, soulignés (« <code>_</code> ») et signes dollar (« <code>$</code> »), qui ne peut commencer par un nombre. Par exemple, <code>objet.$1</code> est valide, mais <code>objet.1</code> ne l'est pas.</p>

<pre class="brush: js">document.createElement('pre');
</pre>

<p>Ici, la méthode <code>createElement</code> est obtenue depuis l'objet <code>document</code> et est appelée.</p>

<p>Si on utilise une méthode pour un littéral numérique et que celui-ci ne possède pas de point décimal ni d'exposant lié à la notation scientifique, il faudra laisser un ou plusieurs blancs afin que l'appel soit bien interprété comme un appel de méthode plutôt que comme un séparateur décimal :</p>

<pre class="brush: js">77 .toExponential();
// ou
77
.toExponential();
// ou, mieux pour la lisibilité
(77).toExponential();
// ou encore
77.0.toExponential();
// 77. correspond à 77.0 et là il n'y a aucun doute
</pre>

<h3 id="Notation_avec_crochets">Notation avec crochets</h3>

<pre class="brush: js">obtenir = objet[nom_de_propriété];
objet[nom_de_propriété] = définir;
</pre>

<p><code>nom_de_propriété</code> est une chaîne de caractères ou un {{jsxref("Symbol","symbole","","")}}. Elle n'a pas besoin d'être un identifiant valide ; elle peut avoir n'importe quelle valeur, par exemple <code>"1foo"</code>, <code>"!bar!"</code> ou même <code>" "</code> (une espace).</p>

<h4 id="Exemple">Exemple</h4>

<pre class="brush: js">document['createElement']('pre');
</pre>

<p>Cette ligne fait exactement la même chose que l'exemple précédent.</p>

<h3 id="Noms_de_propriétés">Noms de propriétés</h3>

<p>Les noms de propriétés doivent être des chaînes de caractères ou des symboles. Cela signifie que les autres types d'objet ne peuvent pas être utilisés comme clés d'un objet. Tout autre type d'objet, même un nombre, sera converti en une chaîne via sa méthode <a href="fr/R%c3%a9f%c3%a9rence_de_JavaScript_1.5_Core/Objets_globaux/Object/toString"><code>toString</code></a>.</p>

<h4 id="Exemples">Exemples</h4>

<pre class="brush: js">var objet = {};
objet['1'] = 'valeur';
console.log(objet[1]);
</pre>

<p>Ceci affichera « valeur », étant donné que le nombre <code>1</code> sera converti en une chaîne <code>"1"</code>.</p>

<pre class="brush: js">var toto = {propriété_unique : 1}, truc = {propriété_unique : 2}, objet = {};
objet[toto] = 'valeur';
console.log(objet[truc]);
</pre>

<p>Ce code affichera également « valeur », étant donné que <code>toto</code> et <code>truc</code> seront convertis en la même chaîne de caractères. Dans le cas du moteur JavaScript <a href="fr/SpiderMonkey">SpiderMonkey</a>, cette chaîne serait <code>"['object Object']"</code>.</p>

<h3 id="Liaison_de_méthodes">Liaison de méthodes</h3>

<p>Une méthode n'est pas liée à l'objet dont elle est une méthode. En particulier, <code>this</code> n'est pas défini dans une méthode, c'est-à-dire que <code>this</code> ne fait pas nécessairement référence à un objet contenant la méthode. En réalité, <code>this</code> est « passé » par l'appel de la fonction.</p>

<p>Pour plus d'informations, consultez la page sur <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this#Liaison_de_m.C3.A9thodes">l'opérateur <code>this</code> et les liaisons de méthodes</a>.</p>

<h3 id="Note_concernant_eval">Note concernant <code>eval</code></h3>

<p>Les nouveaux venus en JavaScript font souvent l'erreur d'utiliser {{jsxref("eval", "eval()")}} alors que la notation avec crochets pourrait être utilisée. Par exemple, la syntaxe suivante est utilisée dans de nombreux scripts.</p>

<pre class="brush: js">x = eval('document.formulaire.' + controle + '.value');
</pre>

<p><code>eval</code> est lente et insécurisée et devrait être évitée dès que possible. Il est préférable d'utiliser la notation avec crochets :</p>

<pre class="brush: js">x = document.formulaire[controle].value;
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
   <td>{{SpecName('ESDraft', '#sec-property-accessors', 'Property Accessors')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-property-accessors', 'Accesseurs de propriété')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.2.1', 'Accesseurs de propriété')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-11.2.1', 'Accesseurs de propriété')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale, implémentée avec JavaScript 1.0.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.property_accessors")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition">L'affectation par décomposition</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining">Le chaînage optionnel</a></li>
</ul>
