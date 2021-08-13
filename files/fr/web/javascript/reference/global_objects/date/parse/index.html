---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
tags:
  - Date
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/parse
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/parse
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>Date.parse()</code></strong><strong> </strong>analyse la représentation textuelle d'une date, et renvoie le nombre de millisecondes depuis le 1er janvier 1970, 00:00:00 UTC jusqu'à cette date ou <code>NaN</code> si la chaîne n'est pas reconnue ou décrit une date invalide (par exemple 2015-02-31).</p>

<div class="note">
<p><strong>Note :</strong> Pour les anciennes implémentations (avant ES5), le résultat de <code>Date.</code><code>parse</code> variait d'une implémentation à l'autre. Attention donc à la compatibilité avec ces anciennes versions.</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/date-parse.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Appel direct :</p>

<pre class="syntaxbox notranslate">Date.parse(dateString)</pre>

<p>Appel implicite :</p>

<pre class="syntaxbox notranslate">new Date(<var>dateString</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>dateString</code></dt>
 <dd>Une chaine de caractères représentant une date dans une version simplifiéee d'ISO 8601 (d'autres formats peuvent être utilisés mais les résultats ne sont pas garantis).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nombre correspondant au nombre de millisecondes écoulées entre le premier janvier 1970 à minuit UTC et la date indiquée en argument sous la forme d'une chaîne de caractères. Si l'argument ne permet pas de décrire une date valide, c'est {{jsxref("NaN")}} qui sera renvoyé.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>parse</code> prend en argument une chaine de caractères contenant une date en paramètre (comme "<code>Dec 25, 1995</code>") et renvoie le nombre de millièmes de secondes depuis le 1er janvier 1970, 00:00:00 UTC. Cette fonction est utile pour définir des valeurs de dates à partir de représentations textuelles, par exemple en conjonction avec la méthode {{jsxref("Objets_globaux/Date/setTime", "setTime()")}} et l'objet {{jsxref("Objets_globaux/Date", "Date")}}.</p>

<h3 id="Format_de_la_chaîne_de_caractères">Format de la chaîne de caractères</h3>

<p>À partir d'une chaine de caractères représentant une date, <code>parse</code> renvoie une valeur de temps. La syntaxe acceptée est un format simplifié de la norme ISO 8601. On pourra par exemple utiliser <code>"2011-10-10"</code> (date uniquement), <code>"2011-10-10T14:48:00"</code> (date et heure) ou <code>"2011-10-10T14:48:00.000+09:00"</code> (date, heure, millisecondes et fuseau horaire).</p>

<p>Si aucun fuseau horaire n'est spécifié, les chaînes représentant uniquement des dates seront considérées comme UTC et les dates / heures seront considérées comme locales.</p>

<p>Lorsque des indicateurs de fuseau horaire sont utilisés, la valeur renvoyée correspondra toujours au nombre de millisecondes écoulées entre l'argument et le premier janvier 1970 à minuit UTC.</p>

<p><code>parse()</code> est une méthode statique de {{jsxref("Date")}} et on invoquera ainsi <code>Date.parse()</code> plutôt que <code>parse()</code> sur une instance d'un objet <code>Date</code>.</p>

<h3 id="Différences_entre_les_fuseaux_horaires_supposés">Différences entre les fuseaux horaires supposés</h3>

<p>Avec une chaîne comme <code>"March 7, 2014"</code>, <code>parse()</code> supposera un fuseau horaire local, avec une chaîne au format ISO comme <code>"2014-03-07"</code>, la méthode supposera un fuseau horaire UTC en ES5 et un fuseau horaire local pour ECMAScript 2015. Ainsi les objets {{jsxref("Date")}} construits avec ces chaînes représenteront des instants différents, sauf si le fuseau horaire local du système utilisé correspond à UTC. Cela signifie que deux dates représentées de façon textuelles semblables peuvent donner des dates différentes (ce comportement doit être corrigé avec ECMAScript 6 afin que les deux dates soient traitées de façon locale).</p>

<h3 id="Traitement_laissé_libre_à_limplémentation">Traitement laissé libre à l'implémentation</h3>

<p>Le standard ECMAScript dicte que si la chaîne utilisée n'est pas conforme au format standard, alors la fonction peut utiliser une heuristique et/ou un algorithme d'analyse de texte propre à l'implémentation. Les chaînes impossibles à décoder et/ou qui contiennent des éléments non-conformes aux formats ISO doivent renvoyer {{jsxref("NaN")}} lors de l'appel à <code>Date.parse()</code>.</p>

<p>Cependant, les valeurs invalides qui ne sont pas reconnues dans un format ISO pris en charge par ECMA-262 peuvent ou non engendrer la valeur {{jsxref("NaN")}} selon le navigateur et les valeurs utilisées. Par exemple :</p>

<pre class="brush: js notranslate">// Chaîne non ISO avec des valeurs invalides
new Date('23/25/2014');</pre>

<p>sera traitée comme la date locale du 25 novembre 2015 avec Firefox 30 et comme invalide avec Safari 7. Cependant, si la chaîne est reconnue dans un format ISO mais contient des valeurs invalides, la méthode renverra {{jsxref("NaN")}} pour tous les navigateurs conformes à ES5 (ou aux versions ultérieures) :</p>

<pre class="brush: js notranslate">// Chaîne ISO avec des valeurs invalides new
Date('2014-25-23').toISOString();
// renvoie "RangeError: invalid date" pour les navigateurs ES5</pre>

<p>L'implémentation spécifique de SpiderMonkey peut être trouvée dans le fichier <a href="https://dxr.mozilla.org/mozilla-central/source/js/src/jsdate.cpp?rev=64553c483cd1#889"><code>jsdate.cpp</code></a>. La chaîne <code>"10 06 2014"</code> est un exemple de chaîne non ISO, utiliser parse() sur cette chaîne entraînera le moteur JavaScript à utiliser son implémentation de recours. Voir ce <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1023155#c6">bug</a> pour une explication rapide de la façon dont est faite l'analyse de la chaîne.</p>

<pre class="brush: js notranslate">new Date('10 06 2014');</pre>

<p>sera traitée comme la date locale du 6 octobre 2014 et non comme le 10 juin 2014. D'autres exemples :</p>

<pre class="brush: js notranslate">new Date('toto-truc 2014').toString();
// renvoie : "Invalid Date"
Date.parse('toto-truc 2014');
// renvoie : NaN</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Date.parse">Utiliser <code>Date.parse()</code></h3>

<p>Les appels suivants renvoient tous <code>1546300800000</code>. Dans le premier appel, on indique uniquement la date (et donc le fuseau UTC implicite). Les chaînes qui suivent utilisent une indication de fuseau horaire selon la norme ISO (<code>Z</code> et <code>+00:00</code>)</p>

<pre class="brush: js notranslate">Date.parse("2019-01-01")
Date.parse("2019-01-01T00:00:00.000Z")
Date.parse("2019-01-01T00:00:00.000+00:00")
</pre>

<p>L'appel suivant, qui ne précise pas le fuseau horaire, fournira le nombre de millisecondes écoulées entre le premier janvier 1970 minuit UTC et le premier janvier 2019 à minuit selon l'heure locale du système utilisé.</p>

<pre class="brush: js notranslate">Date.parse("2019-01-01T00:00:00")
</pre>

<h3 id="Chaînes_de_caractères_non-standard">Chaînes de caractères non-standard</h3>

<div class="blockIndicator note">
<p><strong>Note :</strong> Cette section contient des exemples qui reposent sur des comportements spécifiques aux implémentations et on peut donc avoir des incohérences entre les moteurs utilisés.</p>
</div>

<p>Si <code>IPOdate</code> est un objet {{jsxref("Date")}}, on peut définir sa valeur au 9 août 1995 (heure locale), de la façon suivante :</p>

<pre class="brush: js notranslate">IPOdate.setTime(Date.parse('Aug 9, 1995'));
</pre>

<p>Voici un autre exemple avec une chaîne qui ne suit pas le format standard.</p>

<pre class="brush: js notranslate">Date.parse('Aug 9, 1995');
</pre>

<p>Cette méthode renverra <code>807937200000</code> pour le fuseau horaire GMT-0300 et d'autres valeurs pour d'autres fuseaux car la chaîne n'indique pas le fuseau horaire et ne respecte pas le format ISO (le fuseau considéré par défaut est donc le fuseau local).</p>

<pre class="brush: js notranslate">Date.parse('Wed, 09 Aug 1995 00:00:00 GMT');
</pre>

<p>Renvoie <code>807926400000</code> quel que soit le fuseau local car on indique GMT.</p>

<pre class="brush: js notranslate">Date.parse('Wed, 09 Aug 1995 00:00:00');
</pre>

<p>Renvoie <code>807937200000</code> dans le fuseau GMT-0300 et d'autres valeurs pour d'autres fuseaux car aucune indication de fuseau n'est fournie et que la chaîne n'est pas au format ISO, elle est donc traitée comme un temps local.</p>

<pre class="brush: js notranslate">Date.parse('Thu, 01 Jan 1970 00:00:00 GMT');
</pre>

<p>Renvoie <code>0</code> quel que soit le fuseau local car l'indicateur GMT est fourni.</p>

<pre class="brush: js notranslate">Date.parse('Thu, 01 Jan 1970 00:00:00');
</pre>

<p>Renvoie <code>14400000</code> pour le fuseau GMT-0400 et d'autres valeurs dans d'autres fuseaux car aucune indication de fuseau n'est fournie et la chaîne n'est pas au format ISO, elle est donc traitée comme un temps local.</p>

<pre class="brush: js notranslate">Date.parse('Thu, 01 Jan 1970 00:00:00 GMT-0400');
</pre>

<p>Renvoie <code>14400000</code> quel que soit le fuseau car l'indicateur GMT est fourni.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.9.4.2', 'Date.parse')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Ajout du format ISO 8601 simplifié.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.parse', 'Date.parse')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.parse', 'Date.parse')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.parse")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<ul>
 <li>À partir de Firefox 49 ({{geckoRelease(49)}}, l'interprétation des années exprimées sur deux chiffres est alignée avec Google Chrome (et non plus avec Internet Explorer). Désormais, les années exprimées sur deux chiffres et strictement inférieures à 50 seront considérées comme des années du XXIe siècle. Ainsi, <code>04/16/17</code> correspondait avant au 16 avril 1917 et correspond désormais au 16 avril 2017. Cela évite des problèmes d'interopérabilité et d'ambiguïté et cette méthode est recommandée par le format ISO 8601 (cf. {{bug(1265136)}}).</li>
 <li>Google Chrome acceptera une chaîne de caractères avec un nombre pour le paramètre <code>dateString</code>. Ainsi, si on exécute <code>!!Date.parse("42")</code> dans Firefox, on obtiendra <code>false</code> tandis que que Google Chrome donnera <code>true</code> car <code>"42"</code> sera interprété comme la date du premier janvier 2042.</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.UTC()")}}</li>
</ul>
