---
title: 'TypeError: invalid assignment to const "x"'
slug: Web/JavaScript/Reference/Errors/Invalid_const_assignment
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_const_assignment
original_slug: Web/JavaScript/Reference/Erreurs/Invalid_const_assignment
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: invalid assignment to const "x" (Firefox)
TypeError: Assignment to constant variable. (Chrome)
TypeError: Redeclaration of const 'x' (Edge)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Une constante est une valeur qui ne peut pas être modifiée lors de l'exécution du programme. Elle ne peut pas être modifiée grâce à une réaffectation ou grâce à une redéclaration. En JavaScript, les constantes sont déclarées grâce au mot-clé <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/const">const</a></code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Redéclaration_invalide">Redéclaration invalide</h3>

<p>Si on affecte une valeur à une constante dans la même portée de bloc que celui qui contient l'affectation initiale, une exception sera levée :</p>

<pre class="brush: js example-bad">const COLUMNS = 80;

// ...

COLUMNS = 120; // TypeError: invalid assignment to const `COLUMNS'</pre>

<h3 id="Résoudre_le_problème">Résoudre le problème</h3>

<p>Il existe plusieurs façons de résoudre ce problème et il faut au préalable comprendre le rôle de la constante en question.</p>

<h4 id="Utiliser_un_autre_nom">Utiliser un autre nom</h4>

<p>Si on souhaite déclarer une autre constante, on peut utiliser un autre nom que celui qui est déjà pris dans cette portée :</p>

<pre class="brush: js example-good">const COLUMNS = 80;
const WIDE_COLUMNS = 120;</pre>

<h4 id="const_let_ou_var"><code>const</code>, <code>let</code> ou <code>var</code> ?</h4>

<p><code>const</code> ne doit pas être utilisé si on ne souhaite pas déclarer de constante. Peut-être qu'on souhaite simplement déclarer une variable avec une portée de bloc grâce à <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/let">let</a></code> ou une variable globale avec <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/var">var</a></code>.</p>

<pre class="brush: js example-good">let columns = 80;

// ...

let columns = 120;
</pre>

<h4 id="Gérer_les_portées">Gérer les portées</h4>

<p>On peut également vérifier qu'on est dans la bonne portée. Est-ce que la constante devait apparaître dans la portée en question ou devait être utilisée dans une fonction ?</p>

<pre class="brush: js example-good">const COLUMNS = 80;

function setupBigScreenEnvironment() {
  const COLUMNS = 120;
}</pre>

<h3 id="const_et_l'immuabilité"><code>const</code> et l'immuabilité</h3>

<p>La déclaration <code>const</code> crée une référence en lecture seule vers une valeur. Elle ne signifie pas que la valeur en question est immuable mais uniquement que l'identifiant de la référence ne peut pas recevoir de nouvelle valeur. Ainsi, si le contenu est un objet, celui-ci pourra toujours être modifié :</p>

<pre class="brush: js example-bad">const obj = {toto: 'truc'};
obj = {toto: 'bidule'}; // TypeError: invalid assignment to const `obj'
</pre>

<p>En revanche, on peut modifier les propriétés :</p>

<pre class="brush: js example-good">obj.toto = 'bidule';
obj; // Object { toto: "bidule" }</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/const">const</a></code></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/let">let</a></code></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/var">var</a></code></li>
</ul>
