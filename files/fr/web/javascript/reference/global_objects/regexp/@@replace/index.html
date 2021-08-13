---
title: RegExp.prototype[@@replace]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/@@replace
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>[@@replace]()</code></strong> remplace toutes ou certaines correspondances d'un motif <code>this</code> dans une chaîne de caractère avec un outil de remplacement. La valeur renvoyée est la nouvelle chaîne ainsi créée. Cet outil de remplacement peut être une chaîne de caractère ou une fonction appelée pour chacune des correspondances.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@replace.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>regexp</var>[Symbol.replace](str, <var>newSubStr</var>|<var>function</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>Une chaîne de caractères ({{jsxref("String")}}) pour laquelle on souhaite effectuer des remplacement.</dd>
 <dt><code>newSubStr (replacement)</code></dt>
 <dd>La chaîne de caractères qui remplace les correspondances trouvées. On peut effectuer le remplacement sur un nombre donné de correspondances (cf. la section {{jsxref("String.prototype.replace", "Utiliser une chaîne de caractères comme paramètre", "#Utiliser_une_chaîne_de_caractère_comme_paramètre", 1)}} de la page {{jsxref("String.prototype.replace()")}}).</dd>
 <dt><code>function (replacement)</code></dt>
 <dd>Une fonction qui est appelée pour créer la sous-chaîne de remplacement. Les arguments fournis à cette fonction sont décrits dans la section {{jsxref("String.prototype.replace", "Utiliser une chaîne de caractères comme paramètre", "#Utiliser_une_chaîne_de_caractère_comme_paramètre", 1)}} de la page {{jsxref("String.prototype.replace()")}}.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une nouvelle chaîne de caractères pour laquelle les correspondances (toutes ou une partie) ont été remplacées.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode est appelée de façon interne par la méthode {{jsxref("String.prototype.replace()")}} lorsque l'arugment <code>pattern</code> argument est un objet {{jsxref("RegExp")}}. Les deux lignes de code qui suivent sont équivalentes et la seconde est la version interne de la première :</p>

<pre class="brush: js">'abc'.replace(/a/, 'A');

/a/[Symbol.replace]('abc', 'A');</pre>

<p>Cette méthode existe afin de pouvoir personnaliser le comportement du remplacement pour les classes filles de <code>RegExp</code>.</p>

<p>Si l'argument décrivant le motif <strong>n'est pas</strong> un objet {{jsxref("RegExp")}}, {{jsxref("String.prototype.replace()")}} n'appellera pas cette méthode et ne créera pas d'objet {{jsxref("RegExp")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Appel_direct">Appel direct</h3>

<p>Cette méthode peut être utilisée comme {{jsxref("String.prototype.replace()")}}, aux différences près que l'objet <code>this</code> est différent et que l'ordre des arguments change :</p>

<pre class="brush: js">var re = /-/g;
var str = '2016-01-01';
var newstr = re[Symbol.replace](str, '.');
console.log(newstr);  // 2016.01.01
</pre>

<h3 id="Utiliser_replace_dans_une_sous-classe">Utiliser <code>@@replace</code> dans une sous-classe</h3>

<p>Les sous-classes de {{jsxref("RegExp")}} peuvent surcharger la méthode <code>[@@replace]()</code> pour modifier le comportement.</p>

<pre class="brush: js">class MaRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // Applique @@replace |count| fois.
    var result = str;
    for (var i = 0; i &lt; this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

var re = new MaRegExp('\\d', '', 3);
var str = '01234567';
var newstr = str.replace(re, '#'); // String.prototype.replace appelle re[@@replace].
console.log(newstr); // ###34567</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-regexp.prototype-@@replace', 'RegExp.prototype[@@replace]')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype-@@replace', 'RegExp.prototype[@@replace]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.@@replace")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.replace()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
