---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
tags:
  - Constructeur
  - Expressions rationnelles
  - JavaScript
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp
---
<div>{{JSRef}}</div>

<p>Le constructeur <strong>RegExp</strong> crée un objet expression rationnelle pour la reconnaissance d'un modèle dans un texte.</p>

<p>Pour une introduction aux expressions rationnelles, lire le <a href="/fr/docs/Web/JavaScript/Guide/Expressions_r%C3%A9guli%C3%A8res">chapitre Expressions rationnelles dans le Guide JavaScript</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Les notations littérales, par constructeur ou de base sont possibles :</p>

<pre class="syntaxbox">/<em>modèle</em>/<var>marqueurs</var>
new RegExp(<var>modèle</var>[, <em>marqueurs</em>])
RegExp(<var>modèle</var>[, <em>marqueurs</em>])
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>modèle</code></dt>
 <dd>Le texte de l'expression rationnelle ou, à partir d'ES5, un autre objet ou littéral <code>RegExp</code> à copier. Ce motif peut inclure <a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières#Types_de_caractères_spéciaux">certains caractères spéciaux</a> pour correspondre à un ensemble de valeurs plus large (qu'une simple chaîne littérale).</dd>
 <dt><code>marqueurs</code></dt>
 <dd>
 <p>Si cet argument est utilisé, il indique les marqueurs à utiliser pour l'expression rationnelle. Ces valeurs remplaceront celles de l'objet à copier si <code>modèle</code> est un objet <code>RegExp</code> (<code>lastIndex</code> sera réinitialisé à 0 à partir d'ECMAScript 2015 / ES6). Cet argument est une chaîne de caractères qui peut contenir une combinaison des valeurs suivantes:</p>

 <dl>
  <dt><code>g</code></dt>
  <dd>recherche globale ; retrouve toutes les correspondances plutôt que de s'arrêter après la première.</dd>
  <dt><code>i</code></dt>
  <dd>la casse est ignorée. Si le marqueur <code>u</code> est également activé, les caractères Unicode équivalents pour la casse correspondent.</dd>
  <dt><code>m</code></dt>
  <dd>multiligne : les caractères de début et de fin (^ et $) sont traités comme travaillant sur des lignes multiples (i.e, ils correspondent au début et à la fin de <em>chaque</em> ligne (délimitée par \n ou \r), pas seulement au début ou à la fin de la chaîne d'entrée complète).</dd>
  <dt><code>u</code></dt>
  <dd>unicode : traite le modèle comme une séquence de points de code Unicode (voir également <a href="/fr/docs/Web/API/DOMString/Binary">les chaînes binaires</a>).</dd>
  <dt><code>y</code></dt>
  <dd>adhérence : n'établit de correspondance qu'à partir de l'indice dans la chaîne cible indiqué par la propriété <code>lastIndex</code> de l'expression rationnelle (et ne cherche pas à établir de correspondance à partir d'indices au delà).</dd>
  <dt><code>s</code></dt>
  <dd>"dotAll" : permet d'indiquer que <code>.</code> peut correspondre à un saut de ligne.</dd>
 </dl>
 </dd>
</dl>

<h2 id="Description">Description</h2>

<p>Il existe deux façons de créer un objet <code>RegExp</code> : une notation littérale ou un constructeur. La notation littérale est délimitée par des barres obliques (<em>slashes</em>) tandis que le constructeur utilise des apostrophes. Ainsi, les expressions suivantes créent la même expression rationnelle :</p>

<pre class="brush: js">/ab+c/i;                   // notation littérale
new RegExp('ab+c', 'i');   // constructeur
new RegExp(/ab+c/, 'i');   // notation littérale dans un constructeur
</pre>

<p>La notation littérale effectue la compilation de l'expression rationnelle lorsque l'expression est évaluée. Utilisez la notation littérale lorsque l'expression rationnelle reste constante. Par exemple, si vous utilisez la notation littérale pour construire une expression rationnelle utilisée dans une boucle, l'expression rationnelle ne sera pas recompilée à chaque itération.</p>

<p>Le constructeur de l'objet expression rationnelle, par exemple <code>new RegExp('ab+c')</code>, effectue la compilation de l'expression rationnelle au moment de l'exécution. Utilisez la fonction constructeur quand vous savez que le modèle d'une expression rationnelle sera variable, ou si vous ne connaissez pas le modèle et que vous l'obtiendrez d'une autre source, telle qu'une saisie utilisateur.</p>

<p>À partir d'ECMAScript 6, <code>new RegExp(/ab+c/, 'i')</code> ne déclenche plus d'exception {{jsxref("TypeError")}} ("can't supply flags when constructing one RegExp from another") lorsque le premier argument est une RegExp et que le second argument <code>marqueurs</code> est présent. Une nouvelle <code>RegExp</code> sera créée à la place à partir des arguments.</p>

<p>Lorsqu'on utilise le constructeur, les règles normales d'échappement de chaîne (le fait de faire précéder d'un \ les caractères spéciaux à l'intérieur d'une chaîne) sont requises. Par exemple, les définitions suivantes sont équivalentes :</p>

<pre class="brush: js">var re = /\w+/;
var re = new RegExp('\\w+');
</pre>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{jsxref("RegExp.prototype")}}</dt>
 <dd>Cette propriété permet d'ajouter des propriétés à tous les objets qui sont des expressions rationnelles.</dd>
 <dt><code>RegExp.length</code></dt>
 <dd>La valeur de longueur pour le constructeur dont la valeur est 2.</dd>
 <dt>{{jsxref("RegExp.@@species", "get RegExp[@@species]")}}</dt>
 <dd>La fonction de construction utilisée pour créer les objets dérivés.</dd>
 <dt>{{jsxref("RegExp.lastIndex")}}</dt>
 <dd>L'indice à partir duquel rechercher la prochaine correspondance.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p>L'objet global <code>RegExp</code> ne possède pas de méthode propre. En revanche, il hérite de certaines méthodes via sa chaîne de prototypes.</p>

<h2 id="Le_prototype_de_RegExp_et_les_instances">Le prototype de <code>RegExp</code> et les instances</h2>

<h3 id="Propriétés_2">Propriétés</h3>

<div>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp/prototype', 'Propriétés')}}</div>

<h3 id="Méthodes_2">Méthodes</h3>

<div>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp/prototype', 'Méthodes')}}</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_une_expression_rationnelle_pour_modifier_un_format_de_données">Utiliser une expression rationnelle pour modifier un format de données</h3>

<p>Dans le script suivant, on utilise la méthode {{jsxref("String.prototype.replace()", "replace()")}} de {{jsxref("String")}} pour effectuer une correspondance sur le prénom et le nom pour les inverser. On utilise des parenthèses capturantes pour pouvoir utiliser les correspondances dans la construction du résultat (avec <code>$1</code> et <code>$2</code>).</p>

<pre class="brush: js">var re = /(\w+)\s(\w+)/;
var chaîne = 'Alain Dupont';
var nouvelleChaîne = chaîne.replace(re, '$2, $1');
console.log(nouvelleChaîne);
</pre>

<p>Cela affichera "Dupont, Alain".</p>

<h3 id="Utiliser_une_expression_rationnelle_pour_découper_des_lignes_avec_différents_sauts_de_lignefins_de_ligne">Utiliser une expression rationnelle pour découper des lignes avec différents sauts de ligne/fins de ligne</h3>

<p>La fin de ligne par défaut dépend de la plateforme (Unix, Windows, etc.). Cette méthode de découpage fournie permet de découper indépendamment de la plateforme utilisée.</p>

<pre class="brush: js">var texte = 'Un texte\net un autre\r\npuis ensuite\rla fin';
var lignes = texte.split(/\r\n|\r|\n/);
console.log(lignes); // affiche [ 'Un texte', 'et un autre', 'puis ensuite', 'la fin' ]
</pre>

<p>On voit ici que l'ordre des modèles dans l'expression rationnelle importe.</p>

<h3 id="Utiliser_une_expression_rationnelle_sur_plusieurs_lignes">Utiliser une expression rationnelle sur plusieurs lignes</h3>

<pre class="brush: js">var s = 'Et voici\nune autre ligne !';
s.match(/voici.*ligne/);
// Renvoie null
s.match(/voici[^]*ligne/);
// Renvoie ['voici\nune autre ligne']
</pre>

<h3 id="Utiliser_une_expression_rationnelle_avec_le_marqueur_d'adhérence">Utiliser une expression rationnelle avec le marqueur d'adhérence</h3>

<p>Cet exemple illustre comment on peut utiliser ce marqueur qui recherche une correspondance après {{jsxref("RegExp.prototype.lastIndex")}}.</p>

<pre class="brush: js">var str = '#toto#';
var regex = /toto/y;

regex.lastIndex; // 0
regex.test(str); // true
regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex est pris en compte avec ce marqueur)
regex.lastIndex; // 0 (réinitialisation suite à l'échec)</pre>

<h3 id="Les_expressions_rationnelles_et_les_caractères_Unicode">Les expressions rationnelles et les caractères Unicode</h3>

<p>Comme mentionné ci-avant, les classes <code>\w</code> ou <code>\W</code> ne correspondent qu'à des caractères ASCII "a" à "z", "A" à "Z", "0" à "9" et "_". Pour effectuer des correspondances sur d'autres caractères (comme par exemple les caractères cyrilliques), on utilisera <code>\uhhhh</code>, où "hhhh" représente la valeur Unicode exprimée en hexadécimal. Cet exemple illustre comment il est possible de séparer les caractères Unicode d'un mot.</p>

<pre class="brush: js">var texte = 'Образец text на русском языке';
var regex = /[\u0400-\u04FF]+/g;

var corresp = regex.exec(texte);
console.log(corresp[0]);      // affiche 'Образец'
console.log(regex.lastIndex); // affiche '7'

var corresp2 = regex.exec(texte);
console.log(corresp2[0]);     // affiche 'на' (n'affiche pas text
console.log(regex.lastIndex); // affiche '15'

// et ainsi de suite
</pre>

<p>Voici une ressource tierce pour obtenir les différents intervalles Unicode des différents alphabets : <a href="https://kourge.net/projects/regexp-unicode-block">Regexp-unicode-block</a>.</p>

<h3 id="Extraire_un_sous-domaine_d'une_URL">Extraire un sous-domaine d'une URL</h3>

<pre class="brush: js">var url = 'http://xxx.domaine.com';
console.log(/[^.]+/.exec(url)[0].substr(7)); // affiche 'xxx'
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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.10', 'RegExp')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-regexp-regular-expression-objects', 'RegExp')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>
    <p>Le constructeur <code>RegExp</code> ne renvoie plus d'exception lorsqu'il est utilisé avec un objet <code>RegExp</code> et que le second argument est utilisé. Ajout du marqueur d'adhérence et du marqueur Unicode.</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-regexp-regular-expression-objects', 'RegExp')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp")}}</p>

<h3 id="Notes_spécifiques_à_Firefox">Notes spécifiques à Firefox</h3>

<p>À partir de Firefox 34, dans le cas où on utilise un groupe capturant avec des quantificateurs qui l'invalident, le texte correspondant au groupe est désormais <code>undefined</code> et non la chaîne vide :</p>

<pre class="brush: js">// Firefox 33 ou antérieur
'x'.replace(/x(.)?/g, function(m, group) {
  console.log("'group:" + group + "'");
}); // 'group:'

// Firefox 34 ou supérieur
'x'.replace(/x(.)?/g, function(m, group) {
  console.log("'group:" + group + "'");
}); // 'group:undefined'
</pre>

<p>Pour des raisons de compatibilité web, <code>RegExp.$N</code> renverra une chaîne vide au lieu de <code>undefined</code> ({{bug(1053944)}}).</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières">Le chapitre Expressions rationnelles</a> du <a href="/fr/docs/Web/JavaScript/Guide">Guide JavaScript</a></li>
 <li>{{jsxref("String.prototype.match()")}}</li>
 <li>{{jsxref("String.prototype.replace()")}}</li>
</ul>
