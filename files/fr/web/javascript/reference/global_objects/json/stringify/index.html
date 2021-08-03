---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
tags:
  - JSON
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/JSON/stringify
original_slug: Web/JavaScript/Reference/Objets_globaux/JSON/stringify
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>JSON.stringify()</strong></code> convertit une valeur JavaScript en chaîne JSON. Optionnellement, elle peut remplacer des valeurs ou spécifier les propriétés à inclure si un tableau de propriétés a été fourni.</p>

<div>{{EmbedInteractiveExample("pages/js/json-stringify.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">JSON.stringify( <var>valeur</var>[, <var>remplaçant</var> [, <var>espace</var>]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeur</code></dt>
 <dd>La valeur à convertir en chaîne JSON.</dd>
 <dt><code>remplaçant</code> {{optional_inline}}</dt>
 <dd>
 <p>Une fonction qui modifie le processus de transformation ou un tableau de chaînes de caractères et de nombres qui sont utilisés comme liste blanche pour sélectionner/filtrer les propriétés de l'objet à inclure dans la chaîne JSON. Si cette valeur est {{jsxref("null")}} ou n'est pas fournie, toutes les propriétés de l'objet seront inclues dans la chaîne résultante.</p>
 </dd>
 <dt><code>espace</code> {{optional_inline}}</dt>
 <dd>Un objet {{jsxref("String")}} ou {{jsxref("Number")}} qui est utilisé pour insérer des blancs dans la chaîne JSON produite afin de faciliter la lisibilité.</dd>
</dl>

<ul>
 <li>Si cet argument est un nombre, il indiquera le nombre d'espaces à utiliser pour l'indentation (la valeur est ramenée à 10 si elle dépasse 10).</li>
 <li>Si l'argument est une chaîne, les 10 premiers caractères (ou la chaîne si elle est plus courte) seront utilisés pour les blancs.</li>
 <li>Si le paramètre n'est pas fourni (ou s'il est nul), aucun blanc ne sera utilisé.</li>
</ul>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères JSON qui représente la valeur indiquée.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Cette méthode lève une exception {{jsxref("TypeError")}} (« <em>cyclic object value</em> ») lorsqu'elle trouve une référence circulaire.</li>
 <li>Cette méthode lève une exception {{jsxref("TypeError")}} (« <em>BigInt value can't be serialized in JSON</em> ») lorsqu'on tente de convertir une valeur {{jsxref("BigInt")}} en une chaîne de caractères JSON.</li>
</ul>

<h2 id="Description">Description</h2>

<p>La fonction <code>JSON.stringify()</code> convertit un objet en JSON :</p>

<ul>
 <li>L'ordre des propriétés des objets qui ne sont pas des tableaux n'est pas garanti. Par la suite, ne pas supposer que cet ordre soit respecté.</li>
 <li>Les objets {{jsxref("Boolean")}}, {{jsxref("Number")}} et {{jsxref("String")}} sont convertis en leur valeur primitive correspondante, en accord avec la sémantique traditionnelle.</li>
 <li>Si {{jsxref("undefined")}}, une fonction ou un symbole est rencontré lors de la conversion , il est soit omis ( quand il se trouve dans un objet ) ou ramené à {{jsxref("null")}} ( quand il se trouve dans un tableau). <code>JSON.stringify()</code> peut également renvoyer <code>undefined</code> lorsqu'il reçoit des valeurs « brutes » qui ne sont pas objectifiées comme par exemple <code>JSON.stringify(function(){})</code> ou <code>JSON.stringify(undefined)</code>.</li>
 <li>Toutes les propriétés liées aux symboles (cf. {{jsxref("Symbol")}}) seront complètement ignorées , même lorsque la fonction <code>remplaçant</code> est utilisée.</li>
 <li>Les propriétés qui ne sont pas énumérables seront ignorées.</li>
 <li>Les instances de {{jsxref("Date")}} implémentent la fonction <code>toJSON()</code> en renvoyant une chaîne de caractères (identique à celle renvoyée par <code>date.toISOString()</code>). Aussi, les dates sont traitées comme des chaînes de caractères.</li>
 <li>Les nombres {{jsxref("Infinity")}} et {{jsxref("NaN")}}, ainsi que l'objet {{jsxref("null")}} sont traités comme <code>null</code>.</li>
 <li>Pour les autres instances d'objets tels que {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}} et {{jsxref("WeakSet")}}, seules les propriétés énumérables sont sérialisées.</li>
</ul>

<pre class="brush: js">JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("toto");                    // '"toto"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]);   // '[null,null,null]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T23:04:05.000Z"'

// Exemples
JSON.stringify({x: 5, y: 6});
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// Les tableaux avec des propriétés ne sont pas énumérables
// et n'ont pas de sens selon JSON
let a = ["toto", "truc"];
a["bidule"] = "youpi"; // a:[ 0: "toto", 1: "truc", bidule: "youpi"]
JSON.stringify(a);
// '["toto","truc"]'

// Symboles
JSON.stringify({x: undefined, y: Object, z: Symbol("")});
// '{}'
JSON.stringify({[Symbol("toto")]: "toto"});
// '{}'
JSON.stringify({[Symbol.for("toto")]: "toto"}, [Symbol.for("toto")]);
// '{}'
JSON.stringify({[Symbol.for("toto")]: "toto"}, function (k, v) {
  if (typeof k === "symbol"){
    return "a symbol";
  }
});
// '{}'
JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Structures de données classiques
JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({ x: 5, y: 6, toJSON(){ return this.x + this.y; } });
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// undefined

// Propriétés non énumérables
JSON.stringify(Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'

// Échec avec BigInt
JSON.stringify({x: 2n});
// TypeError: BigInt value can't be serialized in JSON
</pre>

<h3 id="L'argument_remplaçant">L'argument <code>remplaçant</code></h3>

<p>L'argument <code>remplaçant</code> est une fonction ou un tableau. Si c'est une fonction, elle prend deux paramètres : une clé et la valeur qui est traitée pour être convertie en chaîne. L'objet dans lequel la clé a été trouvée sera fourni comme paramètre <code>this</code> pour la fonction. Cette fonction est d'abord appelée avec une chaîne vide comme clé représentant l'objet à transformer puis elle est appelée sur chaque propriété de l'objet ou du tableau à transformer en chaîne. Cette fonction renvoie la valeur à ajouter à la chaîne JSON :</p>

<ul>
 <li>Si la valeur renvoyée est un nombre ({{jsxref("Number")}}), la chaîne correspondante au nombre sera utilisée comme valeur à ajouter à la chaîne pour représenter la valeur de la propriété traitée.</li>
 <li>Si la valeur renvoyée est une chaîne de caractères ({{jsxref("String")}}), cette chaîne sera utilisée pour représenter la valeur de la propriété dans la chaîne JSON.</li>
 <li>Si la valeur renvoyée est un {{jsxref("Boolean")}}, "true" ou "false" sera utilisé pour représenter la valeur de la propriété et sera ajouté à la chaîne JSON.</li>
 <li>Si la valeur renvoyée est <code>null</code>, <code>null</code> sera ajouté à la chaîne JSON.</li>
 <li>Si la valeur renvoyée est un autre objet, cet objet sera, de façon récursive, transformé en une chaîne JSON en appelant la fonction <code>remplaçant</code> sur chaque propriété sauf si l'objet est une fonction auquel cas, rien n'est ajouté à la chaîne JSON.</li>
 <li>Si la valeur renvoyée est {{jsxref("undefined")}}, la propriété ne sera pas incluse dans la chaîne JSON.</li>
</ul>

<div class="note"><p><strong>Note :</strong> la fonction <code>remplaçant</code> ne peut pas être utilisée pour retirer des valeurs d'un tableau. Si on renvoie <code>undefined</code> ou une fonction, ce sera la valeur <code>null</code> qui sera utilisée.</p></div>

<div class="note"><p><strong>Note :</strong> Si on souhaite que la fonction <code>remplaçant</code> distingue un objet dont une propriété a un clé qui est « réellement » une chaîne vide, il faudra avoir un compteur pour le nombre d'itération. Si le compteur indique que la première itération est passée, alors il s'agit bien d'un clé avec une chaîne vide.</p></div>

<h4 id="Exemple_avec_une_fonction">Exemple avec une fonction</h4>

<pre class="brush: js">function remplaçant(clé, valeur) {
  if (typeof valeur === "string") {
    return undefined;
  }
  return valeur;
}

var toto = {fondation: "Mozilla", modèle: "boîte", semaine: 45, transport: "bus", mois: 7};
console.log(JSON.stringify(toto, remplaçant)); // {"semaine":45, "mois":7}
</pre>

<h4 id="Exemple_avec_un_tableau">Exemple avec un tableau</h4>

<p>Si <code>remplaçant</code> est un tableau, les valeurs du tableau indiquent les propriétés de l'objet à inclure dans la chaîne JSON.</p>

<pre class="brush: js">JSON.stringify(toto, ['semaine', 'mois']);
// '{"semaine":45,"mois":7}', on ne garde que "semaines" et "mois"
</pre>

<h3 id="L'argument_espace">L'argument <code>espace</code></h3>

<p>L'argument <code>espace</code> est utilisé pour contrôler les espacements utilisés dans la chaîne finale.</p>

<ul>
 <li>Si c'est un nombre, les différents niveaux d'indentation auront autant d'espaces qu'indiqué grâce à ce paramètre (jusqu'à 10).</li>
 <li>Si c'est une chaîne, les dix premiers caractères (ou la chaîne complète si elle est plus courte)</li>
</ul>

<pre class="brush: js">JSON.stringify({ a: 2 }, null, ' ');
// '{
//  "a": 2
// }'
</pre>

<p>Dans l'exemple suivant on utilise la tabulation pour rendre lisible le résultat :</p>

<pre class="brush: js">JSON.stringify({ uno: 1, dos: 2 }, null, '\t');
// renverra
// '{
//     "uno": 1,
//     "dos": 2
// }'
</pre>

<h3 id="La_fonction_toJSON()">La fonction <code>toJSON()</code></h3>

<p>Pour personnaliser la valeur d'un objet lors de sa conversion en JSON, on peut surcharger la méthode <code>toJSON()</code> : la valeur retournée par cette méthode <code>toJSON()</code> sera alors utilisée. <code>JSON.stringify()</code> invoquera la méthode <code>toJSON()</code> de l'objet avec un paramètre :</p>

<ul>
 <li>Si cet objet est une propriété de donnée, ce sera le nom de la propriété</li>
 <li>Si cet objet est un tableau, ce sera l'indice de l'élément du tableau sous la forme d'une chaîne de caractères</li>
 <li>Une chaîne vide si <code>JSON.stringify()</code> était directement appelé sur l'objet.</li>
</ul>

<p>Ainsi :</p>

<pre class="brush: js">var obj = {
  data: 'data',
  toJSON(clef){
    if(clef) {
      return `Un objet imbriqué sous la clef '${clef}'`;
    } else {
      return this;
    }
  }
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj })
// '{"obj":"Un objet imbriqué sous la clef 'obj'"}'

JSON.stringify([ obj ])
// '["Un objet imbriqué sous la clef '0'"]'
</pre>

<h3 id="Le_problème_des_références_circulaires">Le problème des références circulaires</h3>

<p><a href="https://www.json.org/">Le format JSON</a> ne prend pas en charge les références (bien <a href="http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03">qu'un brouillon IETF existe</a>) et une exception {{jsxref("TypeError")}} sera levée si on tente d'encoder un objet possédant des références circulaires.</p>

<pre class="brush: js example-bad">const circularReference = {};
circularReference.myself = circularReference;

// Sérialiser un objet avec des références circulaires déclenche une "TypeError: cyclic object value"
JSON.stringify(circularReference);
</pre>

<p>Pour sérialiser les références circulaires, on peut utiliser une bibliothèque (<a href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a> par exemple) ou implémenter sa propre solution (qui consistera à trouver et à remplacer le cycle par des valeurs sérialisables).</p>

<h3 id="Gestion_des_terminateurs_de_ligne">Gestion des terminateurs de ligne</h3>

<p>Par le passé, JSON n'était pas un sous-ensemble strict de JavaScript. En effet, en JSON, deux terminateurs de ligne (le caractère de séparation de ligne U+2028 LINE SEPARATOR et le caractère de séparation de paragraphe U+2029 PARAGRAPH SEPARATOR) n'avaient pas besoin d'être échappés dans des données JSON alors qu'ils devaient l'être en JavaScript. Cela a désormais évolué et les deux points de code peuvent apparaître tant en JSON qu'en JavaScript.</p>

<p>Ainsi, si on souhaite avoir une compatibilité avec les anciens moteurs JavaScript, on pourra évaluer ou utiliser les données JSON avec <a href="https://fr.wikipedia.org/wiki/JSONP">JSONP</a> et la fonction utilitaire suivante :</p>

<pre class="brush: js">function jsFriendlyJSONStringify (s) {
    return JSON.stringify(s).
        replace(/\u2028/g, '\\u2028').
        replace(/\u2029/g, '\\u2029');
}

var s = {
    a: String.fromCharCode(0x2028),
    b: String.fromCharCode(0x2029)
};

// dans Firefox, console.log enlève les échappements
// des caractères Unicode, on utilise donc alert :(
alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}</pre>

<div class="note">
<p><strong>Note :</strong> Les propriétés des objets qui ne sont pas des tableaux ne sont pas transformées en chaînes de caractères selon un ordre particulier. Aussi, l'ordre des données en JSON ne saurait constituer une information utile.</p>
</div>

<pre class="brush: js">var a = JSON.stringify({toto: "truc", bidule: "machin"});
// '{"toto":"truc","bidule":"machin"}'
var b = JSON.stringify({bidule: "machin", toto: "truc"});
// '{"bidule":"machin","toto":"truc"}'
console.log(a !== b); // true
</pre>

<h3 id="Utiliser_JSON.stringify_avec_localStorage">Utiliser <code>JSON.stringify</code> avec localStorage</h3>

<p>Dans le cas où on souhaite enregistrer un objet créé par l'utilisateur afin de le restorer plus tard (y compris après que le navigateur ait été fermé), on peut utiliser <code>JSON.stringify</code>.</p>

<div class="warning">
<p><strong>Attention :</strong> Les fonctions n'ont pas de correspondances en JSON, il ne sera donc pas possible de les enregistrer de cette façon. En revanche, elles peuvent être affichées si elles ont été converties en texte avec la fonction de remplacement. De même, certains objets comme les dates seront transformées en chaîne de caractères après l'utilisation de JSON.parse().</p>
</div>

<pre class="brush: js">// On crée un objet pour l'exemple
var session = {
    'screens' : [],
    'state' : true
};
session.screens.push({"name":"screenA", "width":450, "height":250});
session.screens.push({"name":"screenB", "width":650, "height":350});
session.screens.push({"name":"screenC", "width":750, "height":120});
session.screens.push({"name":"screenD", "width":250, "height":60});
session.screens.push({"name":"screenE", "width":390, "height":120});
session.screens.push({"name":"screenF", "width":1240, "height":650});

// On convertit l'objet en une chaîne JSON
// et on enregistre cette valeur avec le nom 'session'
localStorage.setItem('session', JSON.stringify(session));

// Ici, on reconvertit la chaîne en un objet
// JSON.stringify and saved in localStorage in JSON object again
var sessionRestaurée = JSON.parse(localStorage.getItem('session'));

// La variable sessionRestaurée contient désormais l'objet précédent
// qui avait été sauvegardé dans localStorage
console.log(sessionRestaurée);
</pre>

<h3 id="Chaînes_bien_formées_et_JSON.stringify()">Chaînes bien formées et <code>JSON.stringify()</code></h3>

<p>Les moteurs, qui implémentent la spécification sur JSON.stringify() bien formé, transformeront en chaîne de caractères les éléments isolés de paires <em>surrogates</em> via des séquences d'échappement Unicode plutôt que d'utiliser leurs valeurs littérales. Avant cette modification de spécification, <code>JSON.stringify()</code> n'aurait pas encodé les éléments <em>surrogates</em> isolés et les chaînes produites n'étaient pas valides selon UTF-8 ou UTF-16 :</p>

<pre class="brush: js">JSON.stringify("\uD800"); // '"�"'</pre>

<p>Avec cette modification, les séquences d'échappement produites permettent d'avoir un contenu UTF-16 ou UTF-8 lisible :</p>

<pre class="brush: js">JSON.stringify("\uD800"); // '"\\ud800"'</pre>

<p>Cette modification est rétrocompatible pour toutes les opérations où le résultat de <code>JSON.stringify()</code> est passé à des API comme <code>JSON.parse()</code> qui acceptent du texte JSON valide. En effet, ces API traiteront les séquences d'échappement de <em>surrogates</em> isolés comme les caractères correspondants. Seul le cas où le code interprète directement le résultat de <code>JSON.stringify()</code> doit être adapté afin de gérer les deux encodages possibles pour ces cas.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.12.3', 'JSON.stringify')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.7.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-json.stringify', 'JSON.stringify')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-json.stringify', 'JSON.stringify')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.JSON.stringify")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("JSON.parse()")}}</li>
 <li><a href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a> qui ajoute deux fonctions <code>JSON.decycle</code> et <code>JSON.retrocycle</code> qui permettent d'encoder et de décoder des structures cycliques.</li>
</ul>
