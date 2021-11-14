---
title: Méthodes utiles pour les chaînes de caractères
slug: Learn/JavaScript/First_steps/Useful_string_methods
tags:
  - Apprentissage
  - Article
  - Codage
  - Débutant
  - JavaScript
  - Longueur
  - cas
  - couper
  - indexof
  - majuscule
  - minuscule
  - remplacer
translation_of: Learn/JavaScript/First_steps/Useful_string_methods
original_slug: Learn/JavaScript/First_steps/methode_chaine_utile
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}</div>

<p>À présent que nous avons vu les bases de la manipulation des chaînes de caractères, allons un cran plus loin et commençons à imaginer les opérations utiles que nous pourrions faire sur les chaînes de caractères avec les méthodes intégrées : trouver la longueur d'une chaîne, assembler ou couper des chaînes, substituer un caractère à un autre dans une chaîne, et plus encore.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prérequis :</th>
   <td>Vocabulaire courant de l'informatique, bases de HTML et CSS, compréhension de ce que fait JavaScript.</td>
  </tr>
  <tr>
   <th scope="row">Objectif :</th>
   <td>Comprendre que les chaînes de caractères sont des objets, et apprendre à utiliser certaines méthodes basiques disponibles sur ces objets pour manipuler les chaînes.</td>
  </tr>
 </tbody>
</table>

<h2 id="Les_chaînes_de_caractères_sont_des_objets">Les chaînes de caractères sont des objets</h2>

<p>Nous l'avons déjà dit, et nous le redirons — <em>tout</em> est objet en JavaScript. Lorsque vous créez une chaîne, par exemple en utilisant :</p>

<pre class="brush: js">let string = 'Ceci est une chaîne';</pre>

<p>votre variable devient une instance de l'objet <code>String</code>, et par conséquent possède un grand nombre de propriétés et de méthodes associées. Allez sur la page de l'objet {{jsxref("String")}} et regardez la liste sur le côté de la page !</p>

<p><strong>Avant que votre cervelle ne commence à bouillir, pas de panique !</strong> Vous n'avez vraiment pas besoin de connaître la plupart des méthodes de cette liste au début de cet apprentissage. Mais il est probable que vous utiliserez  certaines assez souvent. Nous allons les voir maintenant.</p>

<p>Entrez quelques exemples dans une console vierge. En voici une ci-dessous (vous pouvez aussi <a href="https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html">ouvrir cette console</a> dans un onglet ou une fenêtre séparés, ou utiliser la <a href="/fr/docs/Learn/Common_questions/What_are_browser_developer_tools">console de développement du navigateur</a> si vous préférez).</p>

<pre class="brush: html hidden">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;JavaScript console&lt;/title&gt;
    &lt;style&gt;
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0C323D;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0C323D;
        color: #809089;
      }

      div {
        clear: both;
      }

    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;


  &lt;/body&gt;

  &lt;script&gt;
    var geval = eval;
    function createInput() {
      var inputDiv = document.createElement('div');
      var inputPara = document.createElement('p');
      var inputForm = document.createElement('input');

      inputDiv.setAttribute('class', 'input');
      inputPara.textContent = '&gt;';
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      inputForm.addEventListener('change', executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch(e) {
        var result = 'error — ' + e.message;
      }

      var outputDiv = document.createElement('div');
      var outputPara = document.createElement('p');

      outputDiv.setAttribute('class','output');
      outputPara.textContent = 'Result: ' + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = '0.5';

      createInput()
    }

    createInput();

  &lt;/script&gt;
&lt;/html&gt;</pre>

<p>{{ EmbedLiveSample('Les_chaînes_de_caractères_sont_des_objets', '100%', 300) }}</p>

<h3 id="Trouver_la_longueur_dune_chaîne">Trouver la longueur d'une chaîne</h3>

<p>C'est facile — il suffit d'utiliser la propriété {{jsxref("String.prototype.length", "length")}}. Entrez ceci :</p>

<pre class="brush: js">let browserType = 'mozilla';
browserType.length;</pre>

<p>Cette commande doit renvoyer le nombre 7, parce que « mozilla » comporte 7 caractères. C'est utile pour de nombreuses raisons ; par exemple, vous pourriez avoir besoin de trouver les longueurs d'une série de noms pour les afficher par taille ou faire savoir à un utilisateur qu'il a entré un nom trop long dans un champ de formulaire à partir du moment où il dépasse une certaine taille.</p>

<h3 id="Retrouver_un_caractère_donné_dans_une_chaîne">Retrouver un caractère donné dans une chaîne</h3>

<p>Dans le même ordre d'idées, il est possible de faire renvoyer tout caractère d'une chaîne avec <strong>la notation crochets</strong> — c'est-à-dire en ajoutant des crochets (<code>[]</code>) à la fin du nom de la variable. Entre les crochets, mettez le rang du caractère à retrouver ; par exemple, pour retrouver le premier caractère, vous devez  écrire ceci :</p>

<pre class="brush: js">browserType[0];</pre>

<p>Les ordinateurs décomptent à partir de 0, pas de 1 ! Pour retrouver le dernier caractère de <em>n'importe quelle</em> chaîne, on peut utiliser la commande qui suit ; elle combine cette technique avec la propriété <code>length</code>  que nous avons vue plus haut :</p>

<pre class="brush: js">browserType[browserType.length-1];</pre>

<p>La longueur de « mozilla » est de 7 caractères, mais comme le décompte se fait à partir de 0, la position du caractère est 6, d'où la nécessité d'écrire <code>length-1</code>. Vous pourrez utiliser cette propriété pour, par exemple, trouver la première lettre d'une série de chaînes et les trier alphabétiquement.</p>

<h3 id="Trouver_une_sous-chaîne_à_lintérieur_dune_chaîne_et_lextraire">Trouver une sous-chaîne à l'intérieur d'une chaîne et l'extraire</h3>

<ol>
 <li>Parfois, vous aurez besoin de trouver si une chaîne est présente à l'intérieur d'une autre chaîne plus grande (on dit en général <em>si une sous-chaîne est présente à l'intérieur d'une chaîne</em>). La méthode {{jsxref("String.prototype.indexOf()", "indexOf()")}} permet de le faire ; elle prend un unique ({{glossary("parameter")}}) — la sous-chaîne recherchée. Essayez :

  <pre class="brush: js">browserType.indexOf('zilla');</pre>
  La commande donne 2 comme résultat, car la sous-chaîne « zilla » commence à la position 2 (0, 1, 2 — donc au troisième caractère) dans « mozilla ». Un tel code s'utilise pour filtrer des chaînes. Par exemple, vous pourriez avoir une liste d'adresses web et ne vouloir afficher que celles qui contiennent « mozilla ».</li>
 <li>On peut faire cela autrement, peut-être plus efficacement encore. Écrivez :
  <pre class="brush: js">browserType.indexOf('vanilla');</pre>
  Cela doit vous donner <code>-1</code> comme résultat — renvoyé quand la sous-chaîne, en l'occurence « vanilla », n'est pas trouvée dans la chaîne principale.<br>
  <br>
  Vous pouvez utiliser cette propriété pour trouver tous les cas de chaînes <strong>ne</strong> <strong>contenant</strong> <strong>pas</strong> la sous-chaîne « mozilla », ou bien <strong>la contenant</strong>, si vous utilisez l'opérateur négation logique, tel que montré ci-dessous. Vous pourriez faire quelque chose comme :

  <pre class="brush: js">if(browserType.indexOf('mozilla') !== -1) {
  // faire des tas de choses avec la chaîne
}</pre>
 </li>
 <li>Lorsque vous savez où la sous-chaîne commence à l'intérieur de la chaîne, et savez à quel caractère elle prend fin, vous pouvez utiliser {{jsxref("String.prototype.slice()", "slice()")}} pour l'extraire. Voyez ce code :
  <pre class="brush: js">browserType.slice(0,3);</pre>
  Il renvoie « moz » — le premier paramètre est la position du caractère où doit commencer l'extraction, et le second paramètre est la position du caractère se trouvant après le dernier à extraire. Ainsi, l'extraction va de la première position à la dernière, celle-ci non comprise. On peut dire, dans notre cas, que le second paramètre est égal à la longueur de la chaîne retournée.</li>
 <li>Également, si vous souhaitez extraire tous les caractères après un caractère donné jusqu'à la fin de la chaîne, vous n'avez pas à mettre le second paramètre ! Il suffit d'indiquer la position du caractère à partir duquel vous voulez extraire les caractères restants dans la chaîne. Essayez la commande :
  <pre class="brush: js">browserType.slice(2);</pre>
  Elle renvoie « zilla » — le caractère à la position 2 est « z » et comme nous n'avons pas mis de second paramètre, la sous-chaîne retournée comporte tous les caractères restants de la chaîne.</li>
</ol>

<div class="note">
<p><strong>Note :</strong> Le second paramètre de <code>slice()</code> est optionnel : s'il n'est pas defini, l'extraction va jusqu'à la fin de la chaîne originale. Il existe aussi d'autres options, allez à la page de {{jsxref("String.prototype.slice()", "slice()")}} pour voir ces autres options.</p>
</div>

<h3 id="Changer_la_casse">Changer la casse</h3>

<p>Les méthodes {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} et {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} s'appliquent à une chaîne et en convertissent tous les caractères, respectivement en minuscules ou en majuscules. C'est utile si, par exemple, vous souhaitez normaliser toutes les données entrées par des utilisateurs avant de les stocker dans une base de données.</p>

<p>Essayons d'entrer les lignes suivantes et voyons ce qui se passe :</p>

<pre class="brush: js">let radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();</pre>

<h3 id="Actualiser_des_parties_de_chaîne">Actualiser des parties de chaîne</h3>

<p>Vous pouvez remplacer une sous-chaîne à l'intérieur d'une chaîne avec une autre sous-chaîne à l'aide de la méthode {{jsxref("String.prototype.replace()", "replace()")}}. Cela fonctionne très simplement au niveau basique, bien qu'il soit possible de faire des choses plus avancées, mais nous ne y attarderons pas maintenant.</p>

<p>La méthode prend deux paramètres — la chaîne que vous voulez remplacer et la chaîne avec laquelle vous voulez la remplacer. Essayez avec cet exemple :</p>

<pre class="brush: js">browserType.replace('moz','van');</pre>

<p>À noter : pour que, dans un programme réel, la variable <code>browserType</code> reflète effectivement la valeur actualisée, il faut assigner à la valeur de la variable le résultat de l'opération ; cette dernière ne met pas à jour automatiquement la valeur de la sous-chaîne. Pour ce faire, il faut écrire :<code> browserType = browserType.replace('moz','van');</code></p>

<h2 id="Apprendre_en_pratiquant">Apprendre en pratiquant</h2>

<p>Dans cette section, vous allez pouvoir vous entraîner à écrire du code de manipulation de chaîne. Dans chacun des exercices ci-dessous, nous avons un tableau de chaînes, une boucle qui traîte chaque valeur dans le tableau et l'affiche dans une liste à puces. Vous n'avez pas besoin de comprendre comment fonctionnent les tableaux ou les boucles dès maintenant — cela vous sera expliqué dans de prochains articles. Tout ce dont vous avez besoin dans chaque cas est d'écrire le code qui va renvoyer les chaînes dans le format souhaité.</p>

<p>Chaque exemple est accompagné d'un bouton « Réinitialiser », que vous pouvez utiliser pour réinitialiser le code si vous faites une erreur et que vous ne parvenez pas à la corriger, et un bouton « Montrer la solution » sur lequel vous pouvez cliquer pour afficher une réponse possible si jamais vous êtes vraiment bloqué.</p>

<h3 id="Filtrer_des_messages_de_vœux">Filtrer des messages de vœux</h3>

<p>Dans ce premier exercice, nous commencerons simplement — nous avons un tableau de carte de voeux, mais nous voulons les trier pour ne lister que les messages concernant Noël. Nous attendons de vous que vous utilisiez un test conditionnel à l'intérieur d'une structure <code>if( ... )</code>, pour tester chaque chaîne et ne l'afficher dans la liste que si elle contient un message concernant Noël.</p>

<ol>
 <li>Réfléchissez d'abord à comment vérifier que le message concerne Noël. Quelle chaîne est présente dans tous ces messages, et quelle méthode pourriez-vous utiliser pour en tester la présence ?</li>
 <li>Il vous faudra alors écrire un test conditionnel sous la forme <em>opérande1 opérateur opérande2</em>. La chose à gauche est-elle égale à la chose à droite ? Ou dans notre cas, l'appel de méthode de gauche renvoie-t-il le résultat de droite ?</li>
 <li>Conseil : dans notre cas, il est probablement plus utile de tester si le résultat de l'appel de notre méthode <em>n'est pas égal</em> à un certain résultat.</li>
</ol>

<pre class="brush: html hidden">&lt;div class="output" style="min-height: 125px;"&gt;

&lt;ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;textarea id="code" class="playable-code" style="height: 290px;"&gt;
var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i &lt; greetings.length; i++) {
  var input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i]) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
&lt;/textarea&gt;

&lt;div class="playable-buttons"&gt;
  &lt;input id="reset" type="button" value="Reset"&gt;
  &lt;input id="solution" type="button" value="Show solution"&gt;
&lt;/div&gt;
</pre>

<pre class="brush: js hidden">var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  updateCode();
});

solution.addEventListener('click', function() {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nlist.innerHTML = \'\';\nvar greetings = [\'Happy Birthday!\',\n                 \'Merry Christmas my love\',\n                 \'A happy Christmas to all the family\',\n                 \'You\\\'re all I want for Christmas\',\n                 \'Get well soon\'];\n\nfor(var i = 0; i &lt; greetings.length; i++) {\n  var input = greetings[i];\n  if(greetings[i].indexOf(\'Christmas\') !== -1) {\n    var result = input;\n    var listItem = document.createElement(\'li\');\n    listItem.textContent = result;\n    list.appendChild(listItem);\n  }\n}';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
</pre>

<p>{{ EmbedLiveSample('Filtrer_des_messages_de_vœux', '100%', 490) }}</p>

<h3 id="Remettre_les_majuscules">Remettre les majuscules</h3>

<p>Dans cet exercice, nous avons des noms des villes du Royaume-Uni, mais les majuscules ne sont pas au bon endroit. Nous souhaitons modifier les noms pour qu'ils soient en minuscules à l'exception de la première lettre qui doit être une majuscule. Une bonne manière de faire ceci :</p>

<ol>
 <li>Convertissez la totalité de la chaîne contenue dans la variable <code>input</code> en minuscules et stockez-la dans une nouvelle variable.</li>
 <li>Récupérez la première lettre de la chaîne dans cette nouvelle variable et stockez-la dans une autre variable.</li>
 <li>En utilisant la dernière variable comme une sous-chaîne, remplacez la première lettre de la chaîne en minuscules par la première lettre de la chaîne en minuscules transformé en majuscules. Stockez le résultat de cette procédure de remplacement dans une autre nouvelle variable.</li>
 <li>Changez la valeur de la variable <code>result</code> afin qu'elle soit égale au résultat final plutôt qu'à <code>input</code>.</li>
</ol>

<div class="note">
<p><strong>Note :</strong> Un conseil — les paramètres des méthodes de chaîne n'ont pas besoin d'être des chaînes, elle peuvent aussi être des variables, ou même des variables avec une méthode invoquée sur elles.</p>
</div>

<pre class="brush: html hidden">&lt;div class="output" style="min-height: 125px;"&gt;

&lt;ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;textarea id="code" class="playable-code" style="height: 250px;"&gt;
var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i &lt; cities.length; i++) {
  var input = cities[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
&lt;/textarea&gt;

&lt;div class="playable-buttons"&gt;
  &lt;input id="reset" type="button" value="Reset"&gt;
  &lt;input id="solution" type="button" value="Show solution"&gt;
&lt;/div&gt;
</pre>

<pre class="brush: js hidden">var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  updateCode();
});

solution.addEventListener('click', function() {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nlist.innerHTML = \'\';\nvar cities = [\'lonDon\', \'ManCHESTer\', \'BiRmiNGHAM\', \'liVERpoOL\'];\n\nfor(var i = 0; i &lt; cities.length; i++) {\n  var input = cities[i];\n  var lower = input.toLowerCase();\n  var firstLetter = lower.slice(0,1);\n  var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());\n  var result = capitalized;\n  var listItem = document.createElement(\'li\');\n  listItem.textContent = result;\n  list.appendChild(listItem);\n\n}';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
</pre>

<p>{{ EmbedLiveSample('Remettre_les_majuscules', '100%', 450) }}</p>

<h3 id="Créer_de_nouvelles_chaînes_à_partir_de_morceaux">Créer de nouvelles chaînes à partir de morceaux</h3>

<p>Dans ce dernier exercice, le tableau contient un lot de chaînes contenant des informations à propos d'arrêts de train dans le nord de l'Angleterre. Les chaînes sont des éléments de données contenant le code en trois lettres de l'arrêt, suivi par des données lisibles par machine, suivi par un point-virgule, et enfin le nom de la station lisible par un humain. Par exemple :</p>

<pre>MAN675847583748sjt567654;Manchester Piccadilly</pre>

<p>Nous voulons extraire le code de la station et son nom, et les associer dans une chaîne avec la structure suivante :</p>

<pre>MAN: Manchester Piccadilly</pre>

<p>Nous vous recommandons de procéder de la manière suivante :</p>

<ol>
 <li>Extraire le code de trois lettres de la station et le stocker dans une nouvelle variable.</li>
 <li>Trouver la position du caractère point-virgule.</li>
 <li>Extraire le nom de la station lisible par un humain en utilisant la position du caractère point virgule comme référence, et le stocker dans une nouvelle variable.</li>
 <li>Concaténer les deux nouvelles variables et une chaîne pour fabriquer la chaîne finale.</li>
 <li>Changer la valeur de la variable <code>result</code> pour qu'elle soit égale à la chaîne finale, plutôt qu'à <code>input</code>.</li>
</ol>

<pre class="brush: html hidden">&lt;div class="output" style="min-height: 125px;"&gt;

&lt;ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;textarea id="code" class="playable-code" style="height: 285px;"&gt;
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i &lt; stations.length; i++) {
  var input = stations[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
&lt;/textarea&gt;

&lt;div class="playable-buttons"&gt;
  &lt;input id="reset" type="button" value="Reset"&gt;
  &lt;input id="solution" type="button" value="Show solution"&gt;
&lt;/div&gt;
</pre>

<pre class="brush: js hidden">var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  updateCode();
});

solution.addEventListener('click', function() {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nlist.innerHTML = \'\';\nvar stations = [\'MAN675847583748sjt567654;Manchester Piccadilly\',\n                \'GNF576746573fhdg4737dh4;Greenfield\',\n                \'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street\',\n                \'SYB4f65hf75f736463;Stalybridge\',\n                \'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield\'];\n\nfor(var i = 0; i &lt; stations.length; i++) {\n  var input = stations[i];\n  var code = input.slice(0,3);\n  var semiC = input.indexOf(\';\');\n  var name = input.slice(semiC + 1);\n  var result = code + \': \' + name;\n  var listItem = document.createElement(\'li\');\n  listItem.textContent = result;\n  list.appendChild(listItem);\n}';


textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
</pre>

<p>{{ EmbedLiveSample('Créer_de_nouvelles_chaînes_à_partir_de_morceaux', '100%', 485) }}</p>

<h2 id="Conclusion">Conclusion</h2>

<p>Il n'est pas possible d'éluder le fait qu'il est très important de savoir manipuler des mots et des phrases lorsqu'on programme — tout particulièrement en JavaScript, dans la mesure où les sites web servent à la communication entre les personnes. Cet article vous a indiqué, pour l'instant, les bases à connaître pour manipuler les chaînes. Ce sera utile lorsque vous aborderez des sujets plus complexes à l'avenir. Pour suivre, nous allons nous intéresser au dernier grand type de données sur lequel nous devons nous concentrer à court terme — les tableaux.</p>

<p>{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}</p>
