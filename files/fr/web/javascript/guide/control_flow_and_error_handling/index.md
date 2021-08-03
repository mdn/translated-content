---
title: Contrôle du flux d'instructions et gestion des erreurs
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
tags:
  - Beginner
  - Decision making
  - Error Handling
  - Flow control
  - Guide
  - JavaScript
  - Logic
  - control
  - l10n:priority
  - statements
translation_of: Web/JavaScript/Guide/Control_flow_and_error_handling
original_slug: Web/JavaScript/Guide/Contrôle_du_flux_Gestion_des_erreurs
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}</div>

<p>JavaScript supporte nativement un ensemble d'instructions. Ces instructions permettent de définir les logiques des algorithmes, le flux des informations, etc. Ce chapitre fournit un aperçu sur le fonctionnement de ces différentes instructions JavaScript.</p>

<p>Les <a href="/fr/docs/Web/JavaScript/Reference/Statements">Références de JavaScript</a> contiennent plus de détails sur les différentes instructions décrites dans ce chapitre.</p>

<p>Toute expression est une instruction, voir la page <a href="/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators">Expressions et opérateurs</a> pour plus d'informations sur les expressions. En JavaScript, le point-virgule (<code>;</code>) est utilisé afin de séparer des instructions dans le code.</p>

<h2 id="block_statement">Les blocs d'instruction</h2>

<p>L'instruction la plus simple est l'instruction de bloc qui permet de regrouper des instructions. Un bloc est délimité par une paire d'accolades :</p>

<pre class="brush: js">{
   instruction_1;
   instruction_2;
   ⋮
   instruction_n;
}</pre>

<h3 id="example">Exemple</h3>

<p>Les instructions de blocs sont souvent utilisées avec les instructions conditionnelles et itératives telles que <code>if</code>, <code>for</code>, <code>while</code>.</p>

<pre class="brush: js">while (x &lt; 10) {
  x++;
}</pre>

<p>Ici, <code>{ x++; }</code> représente le bloc.</p>

<div class="note">
  <p><strong>Note :</strong> En JavaScript, avant ECMAScript 2015 (aussi appelé ES6), les blocs <strong>n'introduisaient pas de nouvelles portées</strong>. Les variables introduites dans le bloc avec l'instruction <code>var</code> font partie de la portée de la fonction englobante ou du script. Les effets de leur définition persistent en dehors du bloc. Les blocs seuls utilisés avec <code>var</code> (et non <code>let</code>) pourront laisser penser que ce bloc se comportera comme en C ou en Java. Par exemple :</p>

  <pre class="brush: js">var x = 1;
{
  var x = 2;
}
console.log(x); // affichera 2</pre>

  <p>Cella affichera 2 car l'instruction <code>var x</code> contenue dans le bloc fait partie de la même portée que l'instruction <code>var x</code> écrite avant le bloc. En C ou en Java, le code équivalent à cet exemple aurait produit 1.</p>

  <p>Cela a évolué avec ECMAScript 2015 (ES6). Les instructions <code>let</code>et <code>const</code> permettent de déclarer des variables dont la portée est celle du bloc courant. Voir les pages des références <a href="/fr/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a> et <a href="/fr/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a>.</p>
</div>

<h2 id="conditional_statements">Les instructions conditionnelles</h2>

<p>Une instruction conditionnelle est un ensemble de commandes qui s'exécutent si une condition donnée est vérifiée. JavaScript possède deux instructions conditionnelles : <code>if...else</code> et <code>switch</code>.</p>

<h3 id="if...else_statement">Instruction <code>if...else</code></h3>

<p>On utilise l'instruction <code>if</code> lorsqu'on souhaite exécuter une instruction si une condition logique est vérifiée (vraie). La clause <code>else</code> est optionnelle et permet de préciser les instructions à exécuter si la condition logique n'est pas vérifiée (l'assertion est fausse). Voici un exemple qui illustre l'utilisation de l'instruction <code>if</code> :</p>

<pre class="brush: js">if (condition) {
  instruction_1;
} else {
  instruction_2;
}</pre>

<p><code>condition</code> peut correspondre à n'importe quelle expression qui est évaluée à <code>true</code> (vrai) ou <code>false</code> (faux). Voir la page sur les <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description">booléens</a> pour plus d'informations sur les évaluations qui fournissent les valeurs <code>true</code> ou <code>false</code>. Si la <code>condition</code> vaut <code>true</code>, <code>instruction_1</code> est exécutée, sinon <code>instruction_2</code> sera exécutée. <code>instruction_1</code> et <code>instruction_2</code> peuvent correspondre à n'importe quelle instruction, y compris d'autres instructions <code>if</code>.</p>

<p>Si on doit tester différentes conditions les unes à la suite des autres, il est possible d'utiliser <code>else if</code> pour lier les différents tests. On l'utilise de la façon suivante :</p>

<pre class="brush: js">if (condition_1) {
  instruction_1;
} else if (condition_2) {
  instruction_2;
} else if (condition_n) {
  instruction_n;
} else {
  dernière_instruction;
}</pre>

<p>Afin d'exécuter plusieurs instructions, on peut les regrouper grâce aux blocs (<code>{ ... }</code>) vus précédemment. C'est une bonne pratique que de les utiliser, surtout si on imbrique plusieurs instructions <code>if</code> les unes dans les autres:</p>

<h4 id="best_practice">Meilleure pratique</h4>

<p>En général, il est bon de toujours utiliser des instructions de type bloc —<em>surtout</em> lorsqu'on imbrique des instructions <code>if</code> :</p>

<pre class="brush: js">if (condition) {
  instruction_1_exécutée_si_condition_vraie;
  instruction_2_exécutée_si_condition_vraie;
} else {
  instruction_3_exécutée_si_condition_fausse;
  instruction_4_exécutée_si_condition_fausse;
}</pre>

<p>Attention à ne pas utiliser des instructions d'affectation dans les expressions conditionnelles. On peut, en effet, très facilement confondre l'affectation et le test d'égalité en lisant le code.</p>

<p>Voici un exemple de ce qu'il ne faut <strong>pas</strong> faire :</p>

<pre class="example-bad brush: js">if (x = y) {
  /* exécuter des instructions */
}</pre>

<p>Ici, on ne teste pas si x vaut y, on affecte la valeur de y à x ! Si vous devez à tout prix utiliser une affectation dans une expression conditionnelle, une bonne pratique sera d'ajouter des parenthèses en plus autour de l'affectation. Par exemple :</p>

<pre class="example-good brush: js">if ((x = y)) {
  /* exécuter des instructions */
}
</pre>

<h4 id="falsy_values">Valeurs équivalentes à false dans un contexte booléen (<em>falsy</em> values)</h4>

<p>Les valeurs suivantes sont évaluées à <code>false</code> (également connues sous le nom de <a href="/fr/docs/Glossary/Falsy">valeurs Falsy</a>) :</p>

<ul>
 <li><code>false</code></li>
 <li><code>undefined</code></li>
 <li><code>null</code></li>
 <li><code>0</code></li>
 <li><code>NaN</code></li>
 <li>la chaîne de caractères vide (<code>""</code>)</li>
</ul>

<p>Les autres valeurs, y compris les objets, seront équivalents à <code>true</code>.</p>

<div class="warning">
  <p><strong>Attention :</strong> Ne pas confondre les valeurs booléennes « primitives » <code>true</code> et <code>false</code> avec les valeurs créées grâce à un objet <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a>.</p>
  <p>Par exemple, on aura :</p>
  
  <pre class="brush: js">var b = new Boolean(false);
  if (b) // cette condition est bien vérifiée !
  if (b === true) // cette condition n'est pas vérifiée !</pre>
</div>

<h4 id="example_2">Exemple</h4>

<p>Dans l'exemple qui suit, la fonction<code> checkData </code>renvoie <code>true</code> si une chaîne de caractères mesure trois caractères. Sinon, elle affiche une alerte et renvoie <code>false</code>.</p>

<pre class="brush: js">function checkData(maChaîne) {
  if (maChaîne.length == 3) {
    return true;
  } else {
    alert("Veuillez saisir trois caractères. " +
      maChaîne + " n'est pas valide.");
    return false;
  }
}</pre>

<h3 id="switch_statement">L'instruction <code>switch</code></h3>

<p>L'instruction <code>switch</code> permet à un programme d'évaluer une expression et d'effectuer des instructions en fonction des différents cas de figures correspondants aux différentes valeurs. Si un cas correspond au résultat de l'évaluation, le programme exécute l'instruction associée.</p>

<p>Voici un exemple utilisant une instruction <code>switch</code> :</p>

<pre class="brush: js">switch (expression) {
  case label_1:
    instructions_1
    [break;]
  case label_2:
    instructions_2
    [break;]
  ...
  default:
    instructions_par_defaut
    [break;]
}
</pre>

<p>JavaScript évalue l'instruction de commutation ci-dessus comme suit :</p>

<ul>
  <li>Le programme recherche d'abord une clause <code>case</code> dont l'étiquette correspond à la valeur de l'expression, puis il transfère le contrôle à cette clause, en exécutant les instructions associées.</li>
  <li>Si aucune étiquette correspondante n'est trouvée, le programme recherche la clause optionnelle <code>default</code> :
    <ul>
      <li>Si une clause <code>default</code> est trouvée, le programme transfère le contrôle à cette clause, exécutant les déclarations associées.</li>
      <li>Si aucune clause <code>default</code> n'est trouvée, le programme reprend l'exécution à l'instruction qui suit la fin de <code>switch</code>.</li>
      <li>(Par convention, la clause <code>default</code> est écrite comme la dernière clause, mais il n'est pas nécessaire que ce soit le cas).</li>
    </ul>
  </li>
</ul>

<h4 id="break_statements">L'instruction break</h4>

<p>L'instruction optionnelle <code>break</code>, éventuellement contenue pour chaque clause <code>case</code>, permet de ne pas exécuter les instructions pour les cas suivants. Si <code>break</code> n'est pas utilisé, le programme continuera son exécution avec les autres instructions contenues dans l'instruction <code>switch</code>.</p>

<h5 id="example_3">Exemple</h5>

<p>Dans l'exemple suivant, si <code>fruit</code> vaut "Banane", le programme exécutera les instructions associées. Quand <code>break</code> est rencontré, le programme passe aux instructions décrites après <code>switch</code>. Ici, si <code>break</code> n'était pas présent, les instructions pour le cas "Cerise" auraient également été exécutées.</p>

<pre class="brush: js">switch (fruit) {
  case "Orange":
    console.log("Les oranges sont à 60 centimes le kilo.");
    break;
  case "Pomme":
    console.log("Les pommes sont à 32 centimes le kilo.");
    break;
  case "Banane":
    console.log("Les bananes sont à 48 centimes le kilo.");
    break;
  case "Cerise":
    console.log("Les cerises sont à 3€ le kilo.");
    break;
  case "Mangue":
    console.log("Les mangues sont à 50 centimes le kilo.");
    break;
  default:
    console.log("Désolé, nous n'avons pas de " + fruittype + ".");
}
console.log("Souhaitez-vous autre chose ?");</pre>

<h2 id="exception_handling_statements">Les instructions pour gérer les exceptions</h2>

<p>Il est possible de lever des exceptions avec l'instruction <code>throw</code> et de les gérer (les intercepter) avec des instructions <code>try...catch</code>.</p>

<ul>
  <li><a href="#throw_statement">L'instruction throw</a></li>
  <li><a href="#try...catch_statement">L'instruction <code>try...catch</code></a></li>
</ul>

<h3 id="exception_types">Les types d'exception</h3>

<p>En JavaScript, n'importe quel objet peut être signalé comme une exception. Cependant, afin de respecter certaines conventions et de bénéficier de certaines informations, on pourra utiliser les types destinés à cet effet :</p>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types">Les exceptions ECMAScript</a></li>
 <li><a href="/fr/docs/Web/API/DOMException"><code>DOMException</code></a> et <a href="/fr/docs/Web/API/DOMError"><code>DOMError</code></a></li>
</ul>

<h3 id="throw_statement">L'instruction <code>throw</code></h3>

<p>L'instruction <code>throw</code> est utilisée afin de signaler une exception. Lorsqu'on signale une exception, on définit une expression qui contient la valeur à renvoyer pour l'exception :</p>

<pre class="brush: js">throw expression;</pre>

<p>Il est possible d'utiliser n'importe quelle expression, sans restriction de type. Le fragment de code qui suit illustre les différentes possibilités :</p>

<pre class="brush: js">throw "Erreur2";  //type String
throw 42;         //type Number
throw true;       //type Boolean
throw {toString: function () { return "je suis un objet !"; } };
</pre>

<div class="note">
  <p><strong>Note :</strong> Vous pouvez spécifier un objet lorsque vous lancez une exception. Vous pouvez alors faire référence aux propriétés de l'objet dans le bloc <code>catch</code>.</p>
</div>

<pre class="brush: js">// On crée le constructeur pour cet objet
function ExceptionUtilisateur(message) {
  this.message = message;
  this.name = "ExceptionUtilisateur";
}

// On surcharge la méthode toString pour afficher
// un message plus explicite (par exemple dans la console)
ExceptionUtilisateur.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
}

// On crée une instance pour ce type d'objet
// et on renvoie une exception avec cette instance
throw new ExceptionUtilisateur("La valeur fournie est trop élevée.");</pre>

<h3 id="try...catch_statement">L'instruction <code>try...catch</code></h3>

<p>L'instruction <code>try...catch</code> permet de définir un bloc d'instructions qu'on essaye (<em>try</em> en anglais) d'exécuter, ainsi qu'une ou plusieurs instructions à utiliser en cas d'erreur lorsqu'une exception se produit. Si une exception est signalée, l'instruction <code>try...catch</code> permettra de l' « attraper » (<em>catch</em> en anglais) et de définir ce qui se passe dans ce cas.</p>

<p>L'instruction <code>try...catch</code> se compose d'un bloc <code>try</code> qui contient une ou plusieurs instructions et blocs <code>catch</code> qui contiennent les instructions à exécuter lorsqu'une exception se produit dans le bloc <code>try</code>.</p>

<p>Autrement dit, dans la plupart des cas pour le programme, on veut que les instructions du bloc <code>try</code> se déroulent normalement et en cas de problème, on passe le contrôle au bloc <code>catch</code>. Si une instruction contenue dans le bloc <code>try</code> renvoie une exception, le contrôle sera immédiatement transféré au bloc <code>catch</code>. Si aucune exception n'est signalée au sein du bloc <code>try</code>, le bloc <code>catch</code> ne sera pas utilisé. Cette instruction peut comporter un bloc <code>finally</code> qui s'exécute après les blocs <code>try</code> et <code>catch</code> mais avant les instructions suivant l'instruction <code>try...catch</code>.</p>

<p>Dans l'exemple qui suit, on utilise une instruction <code>try...catch</code>. On définit une fonction qui prend un nombre et renvoie le nom du mois correspondant à ce nombre. Si la valeur fournie n'est pas comprise entre 1 et 12, on signale une exception avec la valeur <code>"NuméroMoisInvalide"</code>. Lorsque cette exception est gérée dans le bloc <code>catch</code>, la variable <code>nomMois</code> recevra la valeur <code>"inconnu"</code>.</p>

<pre class="brush: js">function getNomMois(numMois) {
  numMois = numMois - 1; // On décale de 1 car les indices du tableaux commencent à 0
  var mois = ["Janvier", "Février", "Mars", "Avril" ,"Mai", "Juin", "Juillet",
              "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  if (mois[numMois] != null) {
    return mois[numMois];
  } else {
    throw "NuméroMoisInvalide";  // Ici on utilise l'instruction throw
  }
}

try { // les instructions à essayer si tout se passe bien
  nomMois = getNomMois(maVarMois); // La fonction peut renvoyer une exception
} catch (e) {
  nomMois = "inconnu";
  gestionErreurLog(e); // on gère l'erreur avec une fonction
}</pre>

<h4 id="the_catch_block">Le bloc <code>catch</code></h4>

<p>Un bloc <code>catch</code> peut être utilisé afin de gérer les exceptions pouvant être générées par les instructions du bloc <code>try</code>.</p>

<pre class="brush: js">catch (ident) {
  statements
}</pre>

<p>Le bloc <code>catch</code> définit un identifiant (<code>ident</code> dans le fragment de code précédent) qui contiendra la valeur passée par l'instruction <code>throw</code>. Cet identifiant peut être utilisé afin de récupérer des informations sur l'exception qui a été signalée.</p>

<p>JavaScript crée cet identifiant lorsque le contrôle passe au bloc <code>catch</code>. L'identifiant ne « vit » qu'à l'intérieur du bloc <code>catch</code> et une fois que l'exécution du bloc <code>catch</code> est terminée, l'identifiant n'est plus disponible.</p>

<p>Dans l'exemple suivant, le code renvoie une exception. Lorsque celle-ci est signalée, le contrôle passe au bloc <code>catch</code>.</p>

<pre class="brush: js">try {
  throw "monException"; // on génère une exception
} catch (e) {
  // les instructions utilisées pour gérer les exceptions
  enregistrerErreurs(e); // on passe l'objet représentant l'exception à une fonction utilisée pour gérer les erreurs
}</pre>

<div class="note">
  <p><strong>Note :</strong> Quand on souhaite afficher des erreurs dans la console, on privilégiera <a href="/fr/docs/Web/API/Console/error"><code>console.error()</code></a> plutôt que <a href="/fr/docs/Web/API/Console/log"><code>console.log()</code></a>. En effet, cette première méthode est plus adaptée et indiquera plus d'informations.</p>
</div>

<h4 id="the_finally_block">Le bloc <code>finally</code></h4>

<p>Le bloc <code>finally</code> contient les instructions à exécuter après les blocs <code>try</code> et <code>catch</code> mais avant l'instruction suivant le <code>try...catch...finally</code>.</p>

<p>Le bloc <code>finally</code> est exécuté dans tous les cas, <strong>qu'une exception ait été levée ou non</strong>. Si une exception est signalée et qu'il n'y a pas de bloc <code>catch</code> pour la gérer, les instructions du bloc <code>finally</code> seront tout de même exécutées.</p>

<p>Le bloc <code>finally</code> peut être utilisé afin de finir proprement l'exécution malgré une exception. On peut, par exemple, devoir libérer une ressource, ou fermer un flux, etc.</p>

<p>Dans l'exemple suivant, on écrit dans un fichier, si une exception se produit lors de l'écriture, on utilisera le bloc <code>finally</code> afin de bien fermer le flux vers le fichier avant la fin du script.</p>

<pre class="brush: js">ouvrirFichier();
try {
  écrireFichier(données); // Une erreur peut se produire
} catch(e) {
  gérerException(e); // On gère le cas où on a une exception
} finally {
  fermerFichier(); // On n'oublie jamais de fermer le flux.
}
</pre>

<p>Si le bloc <code>finally</code> renvoie une valeur, cette valeur sera considérée comme la valeur de retour pour tout l'ensemble <code>try-catch-finally</code>, quelles que soient les instructions <code>return</code> éventuellement utilisées dans les blocs <code>try</code> et <code>catch</code> :</p>

<pre class="brush: js">function f() {
  try {
    console.log(0);
    throw "bug";
  } catch(e) {
    console.log(1);
    return true; // Cette instruction est bloquée jusqu'à la fin du bloc finally
    console.log(2); // Ne pourra jamais être exécuté
  } finally {
    console.log(3);
    return false; // On surcharge l'instruction "return" précédente
    console.log(4); // Ne pourra jamais être exécuté
  }
  // "return false" est exécuté

  console.log(5); // Ne pourra jamais être exécuté
}
f(); // affiche 0, 1, 3 puis renvoie false
</pre>

<p>Lorsqu'on surcharge les valeurs de retour avec le bloc <code>finally</code>, cela s'applique également aux exceptions qui sont levées (ou retransmises) au sein du bloc <code>catch</code> :</p>

<pre class="brush: js">function f() {
  try {
    throw "problème";
  } catch(e) {
    console.log('"problème" interne intercepté');
    throw e; // cette instruction est mise en attente
             // tant que le bloc finally n'est pas fini
  } finally {
    return false; // surcharge le "throw" précédent
  }
  // "return false" est exécuté à ce moment
}

try {
  f();
} catch(e) {
  // ce bloc n'est jamais utilisé car le throw
  // utilisé dans le bloc catch a été surchargé
  // par l'instruction return de finally
  console.log('"problème" externe intercepté');
}

// Sortie
// "problème" interne attrapé</pre>

<h4 id="nesting_try...catch_statements">Imbriquer des instructions <code>try...catch</code></h4>

<p>Il est possible d'imbriquer une ou plusieurs instructions <code>try...catch</code>.</p>

<p>Si un bloc <code>try</code> interne n'a <em>pas</em> de bloc <code>catch</code> correspondant :</p>

<ol>
  <li>il <em>doit</em> contenir un bloc <code>finally</code>, et</li>
  <li>le bloc <code>try...catch</code> de l'instruction <code>catch</code> englobante est vérifié pour une correspondance.</li>
</ol>

<p>Pour plus d'informations, voir <a href="/fr/docs/Web/JavaScript/Référence/Statements/try...catch#nested_try-blocks">nested try-blocks</a> sur la page de référence <code><a href="/fr/docs/Web/JavaScript/Référence/Statements/try...catch">try...catch</a></code>.</p>

<h3 id="utilizing_error_objects">Utiliser les objets d'erreur</h3>

<p>En fonction du type d'erreur qui est créée, on pourra utiliser les propriétés <code>name</code> et <code>message</code> afin d'obtenir plus d'informations.</p>

<p>Généralement on a <code>name</code> qui fournit le type d'erreur rencontrée (ex : <code>DOMException</code> ou <code>Error</code>). La propriété <code>message</code>, quant à elle fournit un message descriptif de l'erreur (qu'on utilisera généralement lorsqu'on voudra convertir/afficher le texte correspondant à une erreur).</p>

<p>Si vous construisez des erreurs, vous pouvez utiliser le constructeur <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Error"><code>Error</code></a> afin de disposer de ces propriétés.</p>

<p>Ainsi, on pourra avoir :</p>

<pre class="brush: js">function causerErreurs() {
  if (toutEstSourceDErreurs()) {
    throw (new Error('mon message'));
  } else {
    générerUneAutreErreur();
  }
}
....
try {
  causerErreurs();
} catch (e) {
  console.error(e.name);// affiche 'Error'
  console.error(e.message); // affiche 'mon message' ou un message d'erreur JavaScript
}</pre>

<div>{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}</div>
