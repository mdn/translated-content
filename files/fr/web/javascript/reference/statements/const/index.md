---
title: const
slug: Web/JavaScript/Reference/Statements/const
tags:
  - ECMAScript 2015
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/const
original_slug: Web/JavaScript/Reference/Instructions/const
---
<div>{{jsSidebar("Statements")}}</div>

<p>La <strong>déclaration <code>const</code></strong> permet de créer une constante nommée accessible uniquement en lecture. Cela ne signifie pas que la valeur contenue est immuable, uniquement que l'identifiant ne peut pas être réaffecté. Autrement dit la valeur d'une constante ne peut pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-const.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">const <var>nom1</var> = <var>valeur1</var> [, <var>nom2</var> = <var>valeur2</var> [, ... [, <var>nomN</var> = <var>valeurN</var>]]];</pre>

<dl>
 <dt><code>nomN</code></dt>
 <dd>Le nom de la constante. Ce nom peut être n'importe quel identifiant valide.</dd>
 <dt><code>valeurN</code></dt>
 <dd>La valeur à associer à la constante. Cette valeur peut être n'importe quelle <a href="/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#new">expression</a> valide (éventuellement <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_function">une expression de fonction</a>).</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Cette déclaration permet de créer une constante qui peut être globale ou locale pour la fonction dans laquelle elle a été déclarée. Les constantes font partie de la portée du bloc (comme les variables définies avec <code>let</code>). À la différence des variables définies avec <code>var</code>, les constantes déclarées au niveau global <strong>ne sont pas</strong> des propriétés de l'objet global ({{domxref("window")}} dans le cas du navigateur). Il est nécessaire d'initialiser une constante lors de sa déclaration. Au sein d'une même portée, il est impossible d'avoir une constante qui partage le même nom qu'une variable ou qu'une fonction.</p>

<p>Attention, la déclaration <code>const</code> crée une référence en lecture seule vers une valeur. Cela ne signifie pas que la valeur référencée ne peut pas être modifiée ! Ainsi, si le contenu de la constante est un objet, l'objet lui-même pourra toujours être modifié.</p>

<div class="note">
<p><strong>Note :</strong> Les aspects liés à la <a href="/fr/docs/Web/JavaScript/Reference/Instructions/let#Zone_morte_temporaire_(Temporal_Dead_Zone_TDZ)_et_les_erreurs_liées_à_let">zone morte temporelle</a> de <code>let</code> s'appliquent également à <code>const</code>.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<p>Les instructions suivantes illustrent comment fonctionne cette déclaration. On pourra tester ces instructions dans la console afin d'observer le comportement obtenu :</p>

<pre class="brush:js">// On définit ma_fav comme une constante
// et on lui affecte la valeur 7
// Généralement, par convention, les
// constantes sont en majuscules
const MA_FAV = 7;

// Cette réaffectation lèvera une exception TypeError
MA_FAV = 20;

// affichera 7
console.log("mon nombre favori est : " + MA_FAV);

// toute tentative de redéclaration renvoie une erreur
// SyntaxError: Identifier 'MY_FAV' has already been declared
const MA_FAV = 20;

// le nom ma_fav est réservé par la constante ci-dessus
// cette déclaration échouera donc également
var MA_FAV = 20;

// cela renvoie également une erreur
let MA_FAV = 20;


// On notera l'importance de la portée de bloc :
if (MA_FAV === 7) {
  // cela fonctionne sans problème et crée
  // une nouvelle variable dans cette portée
  let MA_FAV =  20;

  // Ici, MA_FAV vaut 20
  console.log("mon nombre préféré est " + MA_FAV);

  // L'instruction suivante est remontée dans le
  // contexte global et provoque une erreur !
  var MA_FAV = 20;

}

// MA_FAV vaut toujours 7
console.log("mon nombre favori est " + MA_FAV);

// const nécessite une initialisation
const TOTO; // SyntaxError: Missing initializer in const

// const fonctionne également avec les objects
const monObjet = {"clé": "valeur"};

// Écraser l'objet échouera comme précédemment
monObjet = {"autreClé": "valeur"};

// En revanche, les clés d'un objet ne sont pas
// protégés et on peut donc, de façon valide, avoir
monObjet.clé = "autreValeur";
// On utilisera Object.freeze() afin qu'un objet soit immuable

// Il en va de même avec les tableaux
const mon_tableau = [];
// On peut ajouter des éléments au tableau
mon_tableau.push("A"); // ["A"]
// Mais on ne peut pas affecter une nouvelle valeur
mon_tableau = ["B"]; // lève une exception
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
   <td>{{SpecName('ESDraft', '#sec-let-and-const-declarations', 'Déclarations let et const')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-let-and-const-declarations', 'Déclarations let et const')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.const")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/var","var")}}</li>
 <li>{{jsxref("Instructions/let","let")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Constantes">Les constantes dans le guide JavaScript</a></li>
</ul>
