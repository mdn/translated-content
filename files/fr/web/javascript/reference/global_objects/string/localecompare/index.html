---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
tags:
  - Internationalisation
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/localeCompare
original_slug: Web/JavaScript/Reference/Objets_globaux/String/localeCompare
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>localeCompare()</strong></code> renvoie un nombre indiquant si la chaîne de caractères courante se situe avant, après ou est la même que la chaîne passée en paramètre, selon l'ordre lexicographique.</p>

<div>{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}</div>



<p>Les arguments <code>locales</code> et <code>options</code> permettent de définir la locale et des options pour adapter le comportement de la fonction. Les anciennes implémentations ignoreront les arguments <code>locales</code> et <code>options</code>. L'ordre de tri utilisé sera entièrement dépendant de l'implémentation.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.localeCompare(<var>chaineÀComparer</var> [, <var>locales</var> [, <var>options</var>]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Voir le <a href="#compat" title="#Browser_compatibility">tableau de compatibilité des navigateurs</a> pour savoir quels navigateurs prennent en charge les arguments <code>locales</code> et <code>options</code>. L'<a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare#Vérifier_le_support_des_arguments_locales_et_options">exemple pour vérifier le support des arguments <code>locales</code> et <code>options</code></a> fournit un fragment de code pour détecter la prise en charge de ces fonctionnalités.</p>

<dl>
 <dt><code>chaineÀComparer</code></dt>
 <dd>La chaîne avec laquelle on souhaite comparer la chaîne de caractères courante.</dd>
</dl>

<div>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Collator','Param.C3.A8tres')}}</div>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nombre négatif si la chaîne de appelante est ordonnée avant la chaîne passée en argument, un nombre positif si elle se situe après, 0 si les deux chaînes sont équivalentes.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode renvoie un nombre entier qui indique si la chaîne de caractères courante se situe avant ou après la chaîne passée en argument selon l'ordre lexicographique tenant compte de la locale. Cette méthode renvoie</p>

<ul>
 <li>un nombre négatif si la chaîne de caractères courant se situe avant la chaîne <code>chaineÀComparer</code></li>
 <li>un nombre positif si elle se situe après</li>
 <li>0 si les deux chaînes se situent au même niveau</li>
</ul>

<p>Attention à ne pas tester que les valeurs -1 et 1. Les valeurs entières utilisées peuvent varier en fonction des navigateurs et de leurs versions. En effet, la spécification indique uniquement le signe de la valeur à fournir. Par exemple, certains navigateurs pourront renvoyer -2 ou 2 (voire d'autres valeurs).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_la_méthode_localeCompare()">Utiliser la méthode <code>localeCompare()</code></h3>

<p>L'exemple qui suit illustre les différents cas de figures lors de la comparaison des chaînes de caractères :</p>

<pre class="brush: js">console.log('a'.localeCompare('c')); // -2, ou -1, ou toute autre valeur négative
console.log('c'.localeCompare('a')); // 2, ou 1, ou toute autre valeur positive
console.log('a'.localeCompare('a')); // 0
</pre>

<p>Les résultats illustrés ici peuvent varier entre les différents navigateurs et selon les versions des navigateurs. En effet, les valeurs renvoyées sont spécifiques selon les implémentations. La spécification définit uniquement le signe de la valeur à renvoyer.</p>

<h3 id="Trier_un_tableau">Trier un tableau</h3>

<p><code>localeCompare()</code> permet de trier un tableau sans tenir compte de la casse :</p>

<pre class="brush: js">var items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort((a, b) =&gt; a.localeCompare(b, 'fr', {ignorePunctuation: true}));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
</pre>

<h3 id="Vérifier_le_support_des_arguments_locales_et_options">Vérifier le support des arguments <code>locales</code> et <code>options</code></h3>

<p>Les argument <code>locales</code> et <code>options</code> ne sont pas supportés par tous les navigateurs. Pour vérifier qu'une implémentation supporte ces paramètres, il est possible d'utiliser un cas d'erreur quand on utilise une balise de langue incorrecte (ce qui provoque une exception {{jsxref("RangeError")}}) :</p>

<pre class="brush: js">function localeCompareSupportsLocales() {
    try {
        "a".localeCompare​("b", "i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
</pre>

<h3 id="Utiliser_le_paramètre_locales">Utiliser le paramètre <code>locales</code></h3>

<p>Les résultats fournis par la méthode <code>localeCompare()</code> peuvent varier selon les langues utilisées. Pour spécifier la langue à utiliser pour votre application, utiliser l'argument <code>locales</code> pour définir la locale à utiliser (et éventuellement des langues de recours) :</p>

<pre class="brush: js">console.log('ä'.localeCompare('z', 'de')); // une valeur négative : en allemand ä est avant z
console.log('ä'.localeCompare('z', 'sv')); // une valeur positive : en suédois, ä arrive après z
</pre>

<h3 id="Utiliser_le_paramètre_options">Utiliser le paramètre <code>options</code></h3>

<p>Les résultats construits par la méthode <code>localeCompare()</code> peuvent être adaptés grâce au paramètre <code>options</code> :</p>

<pre class="brush: js">// en allemand, ä et a ont la même lettre de base
console.log('ä'.localeCompare('a', 'de', {sensitivity: "base"})); // 0

// en suédois, ä et a n'ont pas la même lettre de base
console.log('ä'.localeCompare('a', 'sv', {sensitivity: "base"})); // une valeur positive
</pre>

<h3 id="Tri_numérique">Tri numérique</h3>

<pre class="brush: js">// Par défaut, selon l'ordre lexicographique, "2" est supérieur à "10"
console.log("2".localeCompare("10")); // 1

// En utilisant un ordre numérique :
console.log("2".localeCompare("10", undefined, {numeric: true})); // -1

// En utilisant une balise de locale:
console.log("2".localeCompare("10","en-u-kn-true")); // -1
</pre>

<h2 id="Performances">Performances</h2>

<p>Pour comparer un grand nombre de chaînes de caractères, par exemple pour trier de grands tableaux, il est préférable de créer un objet {{jsxref("Objets_globaux/Collator", "Intl.Collator")}} et utiliser la fonction fournie par la propriété {{jsxref("Collator.prototype.compare", "compare")}}.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale.<br>
    Implémentée avec JavaScript 1.2</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.5.4.9', 'String.prototype.localeCompare')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.localecompare', 'String.prototype.localeCompare')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.localecompare', 'String.prototype.localeCompare')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 1.0', '#sec-13.1.1', 'String.prototype.localeCompare')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td>Définition des paramètres<code> locale</code> et <code>option</code></td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-13.1.1', 'String.prototype.localeCompare')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-String.prototype.localeCompare', 'String.prototype.localeCompare')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.localeCompare")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Objets_globaux/Collator", "Intl.Collator")}}</li>
</ul>
