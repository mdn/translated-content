---
title: Fonctionnalités dépréciées
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
tags:
  - Deprecated
  - JavaScript
  - Obsolete
  - Reference
translation_of: Web/JavaScript/Reference/Deprecated_and_obsolete_features
original_slug: JavaScript/Reference/Annexes/Fonctionnalités_dépréciées
---
<div>{{JsSidebar("More")}}</div>

<p>Cette page liste les fonctionnalités de JavaScript qui sont dépréciées (<em>deprecated</em>) (c'est-à-dire que ces fonctionnalités sont toujours disponibles mais qu'il est prévu de les retirer) et les fonctionnalités obsolètes (celles qui ne sont plus utilisables).</p>

<h2 id="Fonctionnalités_dépréciées">Fonctionnalités dépréciées</h2>

<p>Ces fonctionnalités dépréciées peuvent toujours être utilisées mais avec une grande attention car elles pourront être supprimées complètements à l'avenir. En règle général, il faut les retirer du code qui les utilise.</p>

<h3 id="RegExp_Properties">Propriétés de <code>RegExp</code></h3>

<p>Les propriétés suivantes sont dépréciées. Cela n'affecte pas le comportement de {{jsxref("Objets_globaux/String/replace", "replace", "Specifying_a_string_as_a_parameter")}} lorsqu'on utilise une chaîne de caractères en paramètre de remplacement :</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propriété</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.n", "$1-$9")}}</td>
   <td>
    <p>Les sous-chaînes correspondantes s'il y en a.<br>
     <strong>Attention : </strong>Utiliser ces propriétés peut causer certains problèmes car les extensions des navigateurs peuvent les modifier. À éviter !</p>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.input", "$_")}}</td>
   <td>Voir <code>input</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.multiline", "$*")}}</td>
   <td>Voir <code>multiline</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastMatch", "$&amp;")}}</td>
   <td>Voir <code>lastMatch</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastMatch", "$&amp;")}}</td>
   <td>Voir <code>lastParen</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.leftContext", "$`")}}</td>
   <td>Voir <code>leftContext</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.rightContext", "$'")}}</td>
   <td>Voir <code>rightContext</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.input", "input")}}</td>
   <td>La chaîne par rapport à laquelle on recherche une correspondance grâce à l'expression rationnelle.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastMatch", "lastMatch")}}</td>
   <td>Les derniers caractères correspondants.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastParen", "lastParen")}}</td>
   <td>La dernière sous-chaîne (groupe entre parenthèses) correspondante si elle existe.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.leftContext", "leftContext")}}</td>
   <td>La sous-chaîne qui précède la correspondance la plus récente.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.rightContext", "rightContext")}}</td>
   <td>La sous-chaîne qui suit la correspondance la plus récente.</td>
  </tr>
 </tbody>
</table>

<p>Les propriétés qui suivent sont désormais des propriétés des instances de <code>RegExp</code> et ne sont plus des propriétés de l'objet <code>RegExp</code> :</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propriété</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.global", "global")}}</td>
   <td>Permet d'utiliser une expression rationnelle pour relever l'ensemble des correspondances ou uniquement la première.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.ignoreCase", "ignoreCase")}}</td>
   <td>Définit si la casse doit être ignorée ou non lors de la recherche d'une correspondance.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastIndex", "lastIndex")}}</td>
   <td>L'index à partir duquel chercher la prochaine correspondance.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.multiline", "multiline")}}</td>
   <td>Définit si la recherche doit s'effectuer sur une seule ligne ou plusieurs.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.source", "source")}}</td>
   <td>Le texte du motif.</td>
  </tr>
 </tbody>
</table>

<h3 id="RegExp_Methods">Méthodes de <code>RegExp</code></h3>

<ul>
 <li>La méthode <code>compile</code> est dépréciée.</li>
 <li>La méthode <code>valueOf</code> n'est plus spécifiquement liée à <code>RegExp</code>. Utilisez {{jsxref("Object.valueOf()")}}.</li>
</ul>

<h3 id="Propriétés_de_Function">Propriétés de <code>Function</code></h3>

<ul>
 <li>Les propriétés {{jsxref("Objets_globaux/Function/caller", "caller")}} et {{jsxref("Objets_globaux/Function/arguments", "arguments")}} sont dépréciées car elles permettaient de fuiter l'appelant de la fonction. En lieu et place de la propriété <code>arguments</code>, c'est l'objet {{jsxref("Fonctions/arguments", "arguments")}} qui doit être utilisée (notamment dans les fermetures).</li>
</ul>

<h3 id="Générateur_historique">Générateur historique</h3>

<ul>
 <li>{{jsxref("Instructions/Legacy_generator_function", "L'instruction pour le générateur historique")}} et {{jsxref("Opérateurs/Legacy_generator_function", "l'expression de fonction du générateur historique")}} sont dépréciées. Il faut utiliser {{jsxref("Instructions/function*", "L'instruction function* ")}} et {{jsxref("Opérateurs/function*", "l'expression function*")}} à la place.</li>
 <li>{{jsxref("Opérateurs/Compréhensions_de_tableau", "Les compréhensions de tableaux JS1.7/JS1.8", "#Diff.C3.A9rences_avec_les_compr.C3.A9hensions_pr.C3.A9c.C3.A9dentes_JS1.7.2FJS1.8")}} et {{jsxref("Opérateurs/Compréhensions_de_générateur", "les compréhensions de générateurs JS1.7/JS1.8", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} sont dépréciées.</li>
</ul>

<h3 id="Itérateur">Itérateur</h3>

<ul>
 <li>{{jsxref("Objets_globaux/StopIteration", "StopIteration")}} est déprécié.</li>
 <li>{{jsxref("Objets_globaux/Iterator", "Iterator")}} est déprécié.</li>
</ul>

<h3 id="Méthode_d'Object">Méthode d'<code>Object</code></h3>

<ul>
 <li>{{jsxref("Object.watch", "watch")}} et {{jsxref("Object.unwatch", "unwatch")}} sont dépréciés. L'objet {{jsxref("Proxy")}} doit être utilisé à la place.</li>
 <li><code>__iterator__</code> est déprécié.</li>
 <li>{{jsxref("Object.noSuchMethod", "__noSuchMethod__")}} est déprécié. {{jsxref("Proxy")}} doit être utilisé à la place.</li>
</ul>

<h3 id="Méthodes_de_Date">Méthodes de <code>Date</code></h3>

<ul>
 <li>{{jsxref("Objets_globaux/Date/getYear", "getYear")}} et {{jsxref("Objets_globaux/Date/setYear", "setYear")}} sont impactés par le « bug de l'an 2000 » et ont été remplacés par {{jsxref("Objets_globaux/Date/getFullYear", "getFullYear")}} et {{jsxref("Objets_globaux/Date/setFullYear", "setFullYear")}}.</li>
 <li>{{jsxref("Objets_globaux/Date/toISOString", "toISOString")}} doit être utilisé à la place de la méthode {{jsxref("Global_Objects/Date/toGMTString", "toGMTString")}} qui est dépréciée.</li>
 <li>{{jsxref("Objets_globaux/Date/toLocaleFormat", "toLocaleFormat")}} est dépréciée.</li>
</ul>

<h3 id="Fonctions">Fonctions</h3>

<ul>
 <li>{{jsxref("Opérateurs/Expression_de_fermetures", "Les expressions de fermetures", "", 1)}} sont dépréciées. Il faut utiliser {{jsxref("Opérateurs/L_opérateur_function", "function")}} ou {{jsxref("Fonctions/Fonctions_fléchées", "les fonctions fléchées", "", 1)}} à la place.</li>
</ul>

<h3 id="Proxy">Proxy</h3>

<ul>
 <li><a href="/en-US/docs/Archive/Web/Old_Proxy_API">Proxy.create</a> et <a href="/en-US/docs/Archive/Web/Old_Proxy_API">Proxy.createFunction</a> sont dépréciées. L'API {{jsxref("Objets_globaux/Proxy", "Proxy")}} doit être utilisée à la place.</li>
 <li>Les trappes de captures suivantes sont obsolètes :
  <ul>
   <li><code>hasOwn</code> ({{bug(980565)}}, Firefox 33).</li>
   <li><code>getEnumerablePropertyKeys</code> ({{bug(783829)}}, Firefox 37)</li>
   <li><code>getOwnPropertyNames</code> ({{bug(1007334)}}, Firefox 33)</li>
   <li><code>keys</code> ({{bug(1007334)}}, Firefox 33)</li>
  </ul>
 </li>
</ul>

<h3 id="Escape_Sequences">Séquences d'échappement</h3>

<ul>
 <li>Les séquences d'échappement octales (\ suivi par un, deux ou trois chiffres octaux) sont dépréciées pour les chaînes de caractères et les littéraux d'expressions rationnelles.</li>
 <li>Les fonctions {{jsxref("Objets_globaux/escape", "escape")}} et {{jsxref("Objets_globaux/unescape", "unescape")}} sont dépréciées. Ce sont les méthodes et objets {{jsxref("Objets_globaux/encodeURI", "encodeURI")}}, {{jsxref("Objets_globaux/encodeURIComponent", "encodeURIComponent")}}, {{jsxref("Objets_globaux/decodeURI", "decodeURI")}} ou {{jsxref("Objets_globaux/decodeURIComponent", "decodeURIComponent")}} qui doivent être utilisées pour encoder/décoder les séquences d'échappement des caractères spéciaux.</li>
</ul>

<h3 id="Méthodes_de_String">Méthodes de <code>String</code></h3>

<ul>
 <li><a href="/fr/docs/tag/HTML%20wrapper%20methods">Les méthodes d'enrobage HTML</a> telles que {{jsxref("String.prototype.fontsize")}} et {{jsxref("String.prototype.big")}} sont dépréciées.</li>
 <li>{{jsxref("String.prototype.quote")}} a été retiré de Firefox 37.</li>
 <li>Le paramètre non-standard <code>flags</code> de {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, et {{jsxref("String.prototype.replace")}} sont dépréciés.</li>
 <li>{{jsxref("String.prototype.substr")}} ne sera sans doute pas retiré prochainement mais il est défini dans l'<a href="https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.substr">annexe B du standard ECMA-262</a> dont l'introduction précise clairement que « les développeurs ne devraient pass utiliser ou présupposer l'existence de ces fonctionnalités et de ces comportements lors de l'écriture de nouveau code ECMAScript ».</li>
</ul>

<h2 id="Fonctionnalités_obsolètes">Fonctionnalités obsolètes</h2>

<p>Ces fonctionnalités sont obsolètes et ont intégralement été retirées de JavaScript. Elles ne peuvent plus être utilisées.</p>

<h3 id="Object">Object</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propriété</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>{{jsxref("Objets_globaux/Object/count", "__count__")}}</td>
   <td>Renvoie le nombre de propriétés énumérables d'un objet défini par l'utillisateur.</td>
  </tr>
  <tr>
   <td>{{jsxref("Objets_globaux/Object/Parent", "__parent__")}}</td>
   <td>Pointe vers le contexte d'un objet.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Object/eval", "Object.prototype.eval()")}}</td>
   <td>Évalue une chaine de caractères étant du code JavaScript, dans le contexte de l'objet indiqué.</td>
  </tr>
  <tr>
   <td>{{jsxref("Object.observe()")}}</td>
   <td>Observe les modifications apportées à un objet de façon asynchrone.</td>
  </tr>
  <tr>
   <td>{{jsxref("Object.unobserve()")}}</td>
   <td>Retire les observateurs ajoutés à un objet.</td>
  </tr>
  <tr>
   <td>{{jsxref("Object.getNotifier()")}}</td>
   <td>Crée un objet qui permet de déclencher un changement de façon synthétique.</td>
  </tr>
 </tbody>
</table>

<h3 id="Function"><code>Function</code></h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propriété</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>{{jsxref("Objets_globaux/Function/arity", "arity")}}</td>
   <td>Nombre d'arguments déclarés pour une fonction.</td>
  </tr>
 </tbody>
</table>

<h3 id="Array"><code>Array</code></h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propriété</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>{{jsxref("Array.observe()")}}</td>
   <td>Observe les modifications apportées à un tableau de façon asynchrone.</td>
  </tr>
  <tr>
   <td>{{jsxref("Array.unobserve()")}}</td>
   <td>Retire les observateurs ajoutés à un tableau.</td>
  </tr>
 </tbody>
</table>

<h3 id="Number"><code>Number</code></h3>

<ul>
 <li>{{jsxref("Number.toInteger()")}}</li>
</ul>

<h3 id="ParallelArray"><code>ParallelArray</code></h3>

<ul>
 <li>{{jsxref("ParallelArray")}}</li>
</ul>

<h3 id="Instructions">Instructions</h3>

<ul>
 <li>{{jsxref("Instructions/for_each...in", "for each...in")}}, utiliser {{jsxref("Instructions/for...of", "for...of")}} à la place.</li>
 <li>La décomposition de variables dans {{jsxref("Instructions/for...in", "for...in")}}, utiliser {{jsxref("Instructions/for...of", "for...of")}} à la place.</li>
 <li>Les blocs et expressions <code>let</code> sont obsolètes.</li>
</ul>

<h3 id="E4X">E4X</h3>

<p>Voir la page <a href="/fr/docs/E4X">E4X</a> pour plus d'informations.</p>

<h3 id="Sharp_variables">Sharp variables</h3>

<p>Voir la page <a href="/en-US/docs/Archive/Web/Sharp_variables_in_JavaScript">sur les variables « Sharp » en JavaScript</a> pour plus d'informations.</p>
