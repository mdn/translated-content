---
title: Valeurs de retour des fonctions
slug: Learn/JavaScript/Building_blocks/Return_values
tags:
  - Apprendre
  - Article
  - Débutant
  - Fonctions
  - Guide
  - JavaScript
  - Return
  - Valeurs de retour
  - Écriture de code
translation_of: Learn/JavaScript/Building_blocks/Return_values
original_slug: Apprendre/JavaScript/Building_blocks/Return_values
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}</div>

<p>Il y a un concept essentiel que nous devons aborder dans ce cours, pour être complet sur les fonctions: les valeurs de retour. Certaines fonctions ne retournent pas de valeur significative après avoir été exécutées, mais d'autres oui, il est important de comprendre ces valeurs, comment les utiliser dans votre code et comment faire pour que vos propres fonctions retournent des valeurs utiles. Nous aborderons tout cela dans cet article.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prérequis:</th>
   <td>
    <p>Base en langage informatique, une compréhension basic de HTML et CSS, <a href="/fr/docs/Learn/JavaScript/First_steps">Premiers pas en JavaScript</a>, <a href="/fr/docs/Learn/JavaScript/Building_blocks/Functions">Fonctions — blocks de code réutilisable</a>.</p>
   </td>
  </tr>
  <tr>
   <th scope="row">Objectif:</th>
   <td>Comprendre les valeurs de retour, et comment les utiliser.</td>
  </tr>
 </tbody>
</table>

<h2 id="Qu'est-ce_que_les_valeurs_de_retour">Qu'est-ce que les valeurs de retour?</h2>

<p><strong>Les valeurs de retour </strong>sont, comme leur nom l'indique, les valeurs retournées par une fonction après son exécution. Vous en avez déjà rencontré plusieurs fois sans y avoir pensé explicitement. Revenons à notre code:</p>

<pre class="brush: js">var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made</pre>

<p>Nous avons vu ce bloc de code dans notre premier article sur les fonctions. Nous appelons la fonction <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace">replace()</a> sur la chaîne de caractères <code>myText</code> , et lui passons deux paramètres: la chaîne à trouver ('string'), et la chaîne de remplacement ('sausage'). Lorsque cette fonction a fini de s'exécuter, elle retourne une valeur qui est une chaîne avec le remplacement effectué. Dans le code ci-dessus, nous sauvegardons cette valeur avec la variable newString.</p>

<p>Si vous regardez la page de référence MDN sur le remplacement de fonction, vous verrez une section intitulée <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Return_value">Valeur retournée</a>. Il est utile de savoir et de comprendre quelles sont les valeurs retournées par les fonctions, nous avons donc essayé d'inclure cette information partout où cela était possible.</p>

<p>Certaines fonctions ne retournent pas de valeur comme telle (dans nos pages de référence, la valeur de retour est définie comme <code>void</code> ou <code>undefined</code> dans de tels cas). Par exemple, dans la fonction <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-stage-4.html#L50">displayMessage() </a> construite dans l'article précédent, aucune valeur spécifique n'est retournée comme résultat de la fonction appelée. Il y a seulement une boîte qui apparaît, c'est tout !</p>

<p>Généralement, une valeur de retour est utilisée lorsque la fonction est une étape intermédiaire dans un programme. Ces valeurs intermédiaires doivent être d'abord évaluées par une fonction, le résultat renvoyé pourra être ensuite utilisé dans l'étape suivante du programme.</p>

<h3 id="Utiliser_des_valeurs_de_retour_dans_vos_fonctions">Utiliser des valeurs de retour dans vos fonctions</h3>

<p>Pour retourner une valeur d'une fonction que vous avez créée, vous devez utiliser... suspense... le mot-clef <a href="/fr/docs/Web/JavaScript/Reference/Statements/return">return</a> . Nous avons vu son utilisation dans l'exemple <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html">random-canvas-circles.html</a>. Notre fonction <code>draw()</code> dessine 100 cercles aléatoires en HTML. {{htmlelement("canvas")}}:</p>

<pre class="brush: js">function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i = 0; i &lt; 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}</pre>

<p>À chaque itération de la boucle, on fait trois fois appel à la fonction <code>random()</code> pour générer respectivement une valeur aléatoire pour les coordonnées x et y du cercle, ainsi que pour son rayon. La fonction <code>random()</code> prend un seul paramètre — un nombre entier — et elle retourne un nombre entier aléatoire compris entre 0 et ce nombre. Voici à quoi cela ressemble:</p>

<pre class="brush: js">function random(number) {
  return Math.floor(Math.random()*number);
}</pre>

<p>Cela peut aussi s'écrire ainsi:</p>

<pre class="brush: js">function random(number) {
  var result = Math.floor(Math.random()*number);
  return result;
}</pre>

<p>Mais la première version est plus rapide à écrire, et plus compacte.</p>

<p>La fonction retourne le résultat de <code>Math.floor(Math.random()*number)</code> chaque fois qu'elle est appelée. Cette valeur de retour apparaît à l'endroit où la fonction a été appelée, puis le code continue. Si, par exemple, nous exécutons la ligne suivante:</p>

<pre class="brush: js">ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);</pre>

<p>et que les trois appels <code>random()</code> retournent respectivement les valeurs 500, 200 et 35, la ligne pourrait être écrite de cette façon:</p>

<pre class="brush: js">ctx.arc(500, 200, 35, 0, 2 * Math.PI);</pre>

<p>Les fonctions de la ligne sont évaluées en premières, et leurs valeurs de retour viennent remplacer les appels de fonctions avant que la ligne elle-même ne soit exécutée.</p>

<h2 id="Apprentissage_actif_notre_propre_fonction_avec_valeur_de_retour">Apprentissage actif: notre propre fonction avec valeur de retour</h2>

<p>Allons-y, écrivons nos propres fonctions avec des valeurs de retour.</p>

<ol>
 <li>Pour commencer, faites une copie locale du fichier <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library.html">function-library.html</a> à partir de GitHub. Il s'agit d'une simple page HTML contenant un champ texte  {{htmlelement("input")}} et un paragraphe. Il y a également un élément {{htmlelement("script")}} qui référence ces éléments HTML dans deux variables. Cette page vous permettra d'entrer un nombre dans le champ texte, et affichera, dans le paragraphe au-dessous, différents nombres en lien avec celui entré.</li>
 <li>Ajoutons quelques fonctions dans <code>&lt;script&gt;</code> . Sous les deux lignes existantes de JavaScript, ajoutez les définitions des fonctions suivantes:
  <pre class="brush: js">function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  var x = num;
  while (x &gt; 1) {
    num *= x-1;
    x--;
  }
  return num;
}</pre>
  Les fonctions <code>squared()</code> et <code>cubed()</code> sont plutôt évidentes, elle retournent le carré et le cube du nombre donné en paramètre. La fonction <code>factorial()</code> retourne la <a href="https://en.wikipedia.org/wiki/Factorial">factorielle</a> du nombre donné.</li>
 <li>Ensuite, nous allons ajouter un moyen d'afficher des informations sur le nombre entré dans le champ texte. Ajoutez le gestionnaire d'événement suivant à la suite des fonctions:
  <pre class="brush: js">input.onchange = function() {
  var num = input.value;
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    para.textContent = num + ' squared is ' + squared(num) + '. ' +
                       num + ' cubed is ' + cubed(num) + '. ' +
                       num + ' factorial is ' + factorial(num) + '.';
  }
}</pre>

  <p>Ici nous créons un gestionnaire d'événement <code>onchange</code> qui s'exécute chaque fois que l'événement <code>change</code> se déclenche sur le champ de saisie de texte, c'est-à-dire lorsqu'une nouvelle valeur est entrée dans le champ de saisie de texte, puis qu'elle est soumise (par exemple lorsqu'on entre une valeur puis qu'on appuie sur Tab). Quand cette fonction anonyme s'exécute, la valeur entrée dans le champ de saisie est stockée dans la variable <code>num</code>.</p>

  <p>Ensuite, nous faisons un test: Si la valeur entrée n'est pas un nombre, un message d'erreur s'affiche dans le paragraphe. Le test vérifie si l'expression <code>isNaN(num)</code> retourne <code>true</code>. Nous utilisons la fonction <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN">isNaN()</a> pour vérifier si la valeur <code>num</code> est un nombre — si c'est le cas, elle retourne <code>false</code>, sinon <code>true</code>.</p>

  <p>Si le test retourne <code>false</code>, la valeur <code>num</code> est un nombre, alors une phrase s'affiche dans le paragraphe indiquant le carré, le cube et la factorielle du nombre. La phrase appelle les fonctions <code>squared()</code>, <code>cubed()</code> et <code>factorial()</code> pour obtenir les valeurs désirées.</p>
 </li>
 <li>Sauvegardez votre code, chargez-le dans votre navigateur et testez-le.</li>
</ol>

<div class="note">
<p><strong>Note :</strong> Si vous rencontrez des difficultés pour faire fonctionner cet exemple, vous pouvez vérifier le code en le comparant à la <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library-finished.html">Version final sur GitHub</a> (également <a href="http://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html">Démonstration en direct</a>), ou demandez-nous de l'aide.</p>
</div>

<p>À ce stade, nous aimerions que vous essayiez d'écrire quelque fonctions de votre choix et que vous les ajoutiez à la bibliothèque. Que diriez-vous des racines carré et cubique du nombre, ou de la circonférence d'un cercle de rayon <code>num</code>?</p>

<p>Cet exercice a soulevé quelques points importants en plus de nous avoir permis d'étudier l'utilisation de la déclaration <code>return</code>. De plus, nous avons:</p>

<ul>
 <li>Examiné un autre exemple d'écriture de gestion d'erreurs dans nos fonctions. C'est une bonne idée de vérifier que tous les paramètres nécessaires ont été fournis, avec les bons types de données, et, s'ils sont facultatifs, qu'une valeur par défaut est fournie. De cette façon, votre programme sera moins susceptible de lever des erreurs.</li>
 <li>Pensé à créer une bibliothèque de fonctions. À mesure que vous avancerez dans votre carrière de développeur, vous recommencerez les mêmes choses encore et encore. C'est une bonne idée de commencer à créer votre propre bibliothèque de fonctions utilitaires que vous utilisez très souvent — vous pouvez ensuite copier ces fonctions dans votre nouveau code, ou même utiliser la bibliothèque dans les pages HTML où vous en avez besoin.</li>
</ul>

<h2 id="Conclusion">Conclusion</h2>

<p>Nous l'avons vu, les fonctions sont amusantes, très utiles et, bien qu'il y ait beaucoup à dire en termes de syntaxe et de fonctionnalités, elles sont assez compréhensibles si elles sont étudiés correctement.</p>

<p>Si vous n'avez pas compris quelque chose, n'hésitez pas à relire l'article, ou <a href="/fr/Learn#Contact_us">contactez-nous</a> pour obtenir de l'aide.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Functions">Fonctions  en profondeur</a> — Un guide détaillé couvrant des information plus avancées sur les fonctions.</li>
 <li><a href="https://www.impressivewebs.com/callback-functions-javascript/">Fonction Callback en JavaScript</a> — Une façon courante en JavaScript consiste à passer une fonction à une autre en tant qu'argument, qui est alors appelée à l'intérieur de la première fonction.  Cela va au delà de la portée de ce cours, mais mériterait d'être étudier rapidement.</li>
</ul>

<p>{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}</p>

<p> </p>

<h2 id="Dans_ce_module">Dans ce module</h2>

<ul>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/conditionals">Prendre des décisions dans le code — conditions</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/Looping_code">Les boucles dans le code</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/Fonctions">Fonctions — Des blocs de code réutilisables</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/Build_your_own_function">Construire vos propres fonctions</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/Return_values">Valeurs de retour des fonctions</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/Ev%C3%A8nements">Introduction aux événements</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/Image_gallery">Galerie d'images</a></li>
</ul>

<p> </p>
