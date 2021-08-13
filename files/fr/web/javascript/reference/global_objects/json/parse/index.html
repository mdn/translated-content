---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
tags:
  - ECMAScript 5
  - JSON
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/JSON/parse
original_slug: Web/JavaScript/Reference/Objets_globaux/JSON/parse
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>JSON.parse()</strong></code> analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne. On peut éventuellement utiliser cette fonction avec un paramètre de modification permettant de traiter l'objet avant qu'il soit renvoyé.</p>

<div>{{EmbedInteractiveExample("pages/js/json-parse.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">JSON.parse(<var>texte</var>[, <var>reviver</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>texte</code></dt>
 <dd>La chaine de caractère à analyser comme du JSON. Voir l'objet {{jsxref("JSON")}} pour une description de la syntaxe JSON.</dd>
 <dt><code>reviver</code></dt>
 <dd>Si l'argument est une fonction, effectue une opération de transformation sur la valeur analysée avant de la renvoyer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet ({{jsxref("Object")}}) correspondant au texte envoyé.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Lève une exception {{jsxref("SyntaxError")}} si la chaine de caractère à analyser ne contient pas du JSON valide.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_JSON.parse">Utiliser <code>JSON.parse()</code></h3>

<pre class="brush: js">try {
  JSON.parse('{}');              // {}
  JSON.parse('true');            // true
  JSON.parse('"toto"');          // "toto"
  JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
  JSON.parse('null');            // null
} catch (e) {
  console.error("Parsing error:", e);
}
</pre>

<h3 id="Utiliser_le_paramètre_reviver">Utiliser le paramètre <code>reviver</code></h3>

<p>Si un <em>reviver</em> est spécifié, la valeur obtenue par l'analyse est transformée avant d'être renvoyée. Plus précisément, la valeur calculée, et toutes les propriétés (commençant avec les propriétés les plus imbriquées), sont passées individuellement au <em>reviver</em>, qui est appelé avec : l'objet contenant la propriété en cours de traitement, le nom de la propriété en chaine de caractères et la valeur de la propriété. Si la fonction <em>reviver</em> retourne {{jsxref("undefined")}} (ou ne retourne aucune valeur, par exemple si l'exécution s'arrête à la fin de la fonction), la propriété est supprimée de l'objet. Autrement la propriété est redéfinie avec la valeur retournée.</p>

<p>Si le <em>reviver</em> ne transforme que certaines valeurs et pas d'autres, assurez-vous que les valeurs inchangées soient renvoyées telles quelles. En effet, si elles ne sont pas renvoyées, elles seront supprimés sur l'objet obtenu !</p>

<pre class="brush: js">JSON.parse('{"p": 5}', (key, value) =&gt; {
  if (typeof value === 'number') {
    return value * 2;  // renvoie value * 2 pour les nombres
  }
  return value;        // pour le reste, la valeur est inchangée
});

// { p: 10 }

JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', (key, value) =&gt; {
    console.log(key);            // on affiche le nom de la propriété dans la console
    return value;                // et on renvoie la valeur inchangée.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""</pre>

<h3 id="JSON.parse_naccepte_pas_les_virgules_en_fin_de_tableau"><code>JSON.parse()</code> n'accepte pas les virgules en fin de tableau</h3>

<pre class="brush: js example-bad">// les deux instructions qui suivent lèveront une SyntaxError
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{ "toto" : 1, }');
</pre>

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
   <td>{{SpecName('ES5.1', '#sec-15.12.2', 'JSON.parse')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale.<br>
    Implementée avec JavaScript 1.7.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-json.parse', 'JSON.parse')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-json.parse', 'JSON.parse')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.JSON.parse")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("JSON.stringify()")}}</li>
</ul>
