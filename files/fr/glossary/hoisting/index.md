---
title: Hoisting
slug: Glossary/Hoisting
tags:
  - Encodage
  - Glossaire
  - JavaScript
translation_of: Glossary/Hoisting
original_slug: Glossaire/Hoisting
---
<p>Le hoisting (<em>en français,</em> <em>"hissage"</em>) est un terme que vous <em>ne</em> trouverez dans aucune prose de spécification normative avant  l'<a href="http://www.ecma-international.org/ecma-262/6.0/index.html">ECMAScript® 2015</a>.  Le hissage a été conçu comme une façon générale de penser à la manière dont les contextes d'exécution (précisément, les phases de création et d'exécution) fonctionnent en JavaScript. Toutefois, le concept peut être un peu déroutant à première vue.</p>

<p>Conceptuellement, par exemple, une définition stricte du hissage suggère que les déclarations de variables et de fonctions sont déplacées physiquement en haut de votre code, mais ce n'est pas ce qui se passe en fait. A la place, les déclarations de variables et de fonctions sont mises en mémoire pendant la phase de <em>compilation</em>, mais restent exactement là où vous les avez tapées dans votre code.</p>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Exemple_technique">Exemple technique</h3>

<p>L'un des avantages du fait que JavaScript met en mémoire les déclarations des fonctions avant d'exécuter un quelconque segment de code, est que cela vous permet d'utiliser une fonction avant que nous ne la déclariez dans votre code. Par exemple :</p>

<pre class="brush: js">function nomChat(nom) {
  console.log("Le nom de mon chat est " + nom);
}

nomChat("Tigrou");
/*
Le résultat du code ci-dessus est : "Le nom de mon chat est Tigrou"
*/</pre>

<p>Le fragment de code ci-dessus est la façon dont vous vous attendez à écrire le code pour qu'il fonctionne. Voyons maintenant ce qui se passe quand nous appelons la fonction avant de la déclarer :</p>

<pre class="brush: js">nomChat("Chloé");

function nomChat(nom) {
  console.log("Le nom de mon chat est " + nom);
}
/*
Le résultat du code ci-dessus est : "Le nom de mon chat est Chloé"
*/</pre>

<p>Même si nous appelons d'abord la fonction dans notre code, avant que la fonction ne soit écrite, le code fonctionne néanmoins. Cela est dû à la façon dont l'exécution de contexte fonctionne en Javascript.</p>

<p>Le hissage fonctionne tout aussi bien avec d'autres types de données et d'autres variables.  Les variables peuvent être initialisées et utilisées avant d'être déclarées. Mais elles ne peuvent pas être utilisées sans initialisation.</p>

<h3 id="Exemple_technique_2">Exemple technique</h3>

<pre class="brush: js">num = 6;
num + 7;
var num;
/* Ne donne aucune erreur tant que num est déclarée*/</pre>

<p>JavaScript hisse seulement les déclarations, pas les initialisations. Si vous utilisez une variable qui est déclarée et initialisée après l'avoir utilisée, sa valeur sera indéfinie. Les deux exemples ci-dessous montrent le même comportement.</p>

<pre class="brush: js">var x = 1; // Initialise x
console.log(x + " " + y); // Affiche '1 undefined'
var y = 2; // Initialise y


// Le code suivant se comportera de la même façon que le code précédent:
var x = 1; // Initialise x
var y; // Déclare y
console.log(x + " " + y); // Affiche '1 undefined'
y = 2; // Initialise y
</pre>

<h3 id="Références_techniques">Références techniques</h3>

<ul>
 <li><a href="https://www.udemy.com/understand-javascript/">JavaScript: Understanding the Weird Parts</a> - Cours d'Udemy.com</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Instructions/var">instruction var</a> - MDN</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Instructions/function">déclaration function</a> - MDN</li>
</ul>
