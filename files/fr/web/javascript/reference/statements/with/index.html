---
title: with
slug: Web/JavaScript/Reference/Statements/with
tags:
  - Déprécié
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/with
original_slug: Web/JavaScript/Reference/Instructions/with
---
<div>{{jsSidebar("Statements")}}</div>

<div class="warning"><p><strong>Attention :</strong>Il n'est pas recommandé d'utiliser l'instruction <code>with</code>. En effet, elle est parfois source de problèmes de compatibilité ou de bogues. Se référer au paragraphe « Inconvénient : l'ambiguïté » de la section « Description » pour plus de détails.</p></div>

<p>L'instruction <strong><code>with</code></strong> permet d'étendre la portée chaînée d'une instruction.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">with (expression) {
  instruction
}
</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>L'expression fournie est ajoutée à la portée chaînée utilisée lors de l'évaluation de l'instruction. Les parenthèses sont obligatoires.</dd>
 <dt><code>instruction</code></dt>
 <dd>N'importe quelle instruction. Afin d'utiliser plusieurs instructions, on peut utiliser un bloc d'instructions ({ ... }) pour les regrouper.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Dès qu'un nom non-qualifié est utilisé, JavaScript cherche dans la chaîne des portées associée à l'exécution une fonction ou un script qui contiendrait ce nom. L'instruction <code>with</code> ajoute l'objet donné à la tête de la chaîne des portées lors de l'évaluation des instructions qu'elle contient. Si un nom non-qualifié est utilisé parmi ces instructions correspond à une propriété de la chaîne des portées, le nom sera alors lié à la propriété et à l'objet contenant cette propriété, sinon une erreur <code>ReferenceError</code> est renvoyée.</p>

<div class="note"><p><strong>Note :</strong> L'utilisation de l'instruction <code>with</code> n'est pas recommandée et est interdite dans le <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a> d'ECMAScript 5. L'alternative recommandée est d'assigner l'objet utilisant les propriétés désirées à une variable temporaire.</p></div>

<h3 id="Avantages_et_inconvénients_les_performances">Avantages et inconvénients : les performances</h3>

<ul>
 <li><strong>Avantage :</strong> l'instruction <code>with</code> permet de réduire la taille d'un fichier en réduisant la répétition d'un objet dont la dénomination est longue, et ce sans qu'il y ait d'impact sur les performances. Le changement apporté à la chaîne des portées ne représente pas un ajout de complexité important. Utiliser l'instruction de <code>with</code> soulagera l'interpréteur lors de l'analyses des références objets potentiellement longues. On notera que l'alternative présentée ci-dessus permet également d'aboutir à ces avantages.</li>
 <li><strong>Inconvénient :</strong> en utilisant <code>with</code>, l'objet spécifié sera utilisé à chaque fois en premier lors de la recherche des noms. Ainsi, tous les identifiants qui ne sont pas des membres de l'objet donné à l'instruction seront trouvés plus lentement. Quand il s'agit d'obtenir de bonnes performances, l'instruction <code>with</code> devrait seulement être utilisée pour englober des fragments de codes où il n'y a que des accès à des membres de l'objet spécifié.</li>
</ul>

<h3 id="Inconvénient_l'ambiguïté">Inconvénient : l'ambiguïté</h3>

<ul>
 <li><strong>Inconvénient :</strong> l'instruction <code>with</code> peut rendre plus compliquée, que ce soit pour un humain ou un compilateur, la recherche d'un nom non-qualifié le long de la chaîne des portées. Ainsi, avec cet exemple :

  <pre class="brush: js">function f(x, o) {
  with (o)
    console.log(x);
}</pre>

  <p>ce n'est que quand <code>f</code> est appelée que <code>x</code> est trouvé ou non, s'il est trouvé à partir de <code>o</code> ou (si o n'a pas de telle propriété) dans l'objet d'activation de <code>f </code>où <code>x</code> représente le premier argument de la fonction. Si <code>x</code> n'est pas défini dans l'objet passé en second argument, il n'y aura pas d'erreur renvoyée, juste des résultats imprévus.</p>
 </li>
 <li><strong>Inconvénient :</strong> Du code utilisant l'instruction <code>with</code> pourrait ne pas être compatible dans le futur, en particulier lorsqu'il est utilisé avec autre chose qu'un objet simple. Par exemple :
  <div>
  <pre class="brush:js">function f(toto, values) {
  with (toto) {
    console.log(values)
  }
}
</pre>

  <p>Si vous appelez <code>f([1,2,3], obj)</code> dans un environnement ECMAScript 5, la référence à <code>values</code> à l'intérieur de l'instruction <code>with</code> sera liée avec <code>obj</code>. Cependant, ECMAScript 2015 (ES6) a introduit une propriété <code>values</code> pour {{jsxref("Array.prototype")}} (afin qu'elle soit disponible pour chaque tableau). Dans un environnement ECMAScript 2015, la référence à <code>values</code> utilisée à l'intérieur de l'instruction <code>with</code> sera résolue avec <code>[1,2,3].values</code>.</p>
  </div>
 </li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_with">Utiliser <code>with</code></h3>

<p>L'instruction <code>with</code> suivante indique que l'objet {{jsxref("Math")}} est l'objet par défaut. Les instructions qui suivent font référence à la propriété {{jsxref("Math.PI")}} et aux méthodes {{jsxref("Math.cos()")}} et {{jsxref("Math.sin()")}}, sans objet spécifié. JavaScript utilise donc l'objet <code>Math</code> pour ces références.</p>

<pre class="brush:js">var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
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
   <td>{{SpecName('ESDraft', '#sec-with-statement', 'with statement')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-with-statement', 'Instruction with')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12.10', 'Instruction with')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Désormais interdit en mode strict.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-12.10', 'Instruction with')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-12.10', 'Instruction with')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.with")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/bloc", "Bloc d'instructions","",1)}}</li>
 <li>{{jsxref("Strict_mode","Mode strict","",1)}}</li>
 <li>{{jsxref("Symbol.unscopables")}}</li>
 <li>{{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}</li>
</ul>
