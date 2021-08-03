---
title: Les modules JavaScript
slug: Web/JavaScript/Guide/Modules
tags:
  - Guide
  - JavaScript
  - Modules
  - export
  - import
translation_of: Web/JavaScript/Guide/Modules
---
<div>{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Métaprogrammation")}}</div>

<p>Ce guide aborde l'ensemble des notions vous permettant d'utiliser la syntaxe des modules en JavaScript.</p>

<h2 id="Un_peu_de_contexte">Un peu de contexte</h2>

<p>Les programmes JavaScript ont commencé par être assez petits, réalisant des tâches isolées uniquement là où l'interactivité était nécessaire. Après plusieurs années, nous avons maintenant des applications complètes qui sont exécutées dans les navigateurs avec des codes complexes et volumineux. Des programmes JavaScript sont également exécutés dans d'autres contextes (<a href="/fr/docs/Glossaire/Node.js">Node.js</a> par exemple).</p>

<p>Il a donc été question de fournir un mécanisme pour diviser les programmes JavaScript en plusieurs modules qu'on pourrait importer les uns dans les autres. Cette fonctionnalité était présente dans Node.js depuis longtemps et plusieurs bibliothèques et <em>frameworks</em> JavaScript ont permis l'utilisation de modules (<a href="https://en.wikipedia.org/wiki/CommonJS">CommonJS</a>, <a href="https://github.com/amdjs/amdjs-api/blob/master/AMD.md">AMD</a>, <a href="https://requirejs.org/">RequireJS</a> ou, plus récemment, <a href="https://webpack.github.io/">Webpack</a> et <a href="https://babeljs.io/">Babel</a>).</p>

<p>Bonne nouvelle, les navigateurs ont également commencé à prendre en charge ces fonctionnalités nativement. C'est le sujet de ce guide.</p>

<p>Cette implémentation permettra aux navigateurs d'optimiser le chargement des modules, rendant le fonctionnement plus efficace qu'une bibliothèque tierce avec un traitement côté client des allers-retours sur le réseau.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>L'utilisation des modules natifs JavaScript repose sur les instructions <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/import">import</a></code> and <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/export">export</a></code> dont vous pouvez voir l'état de la compatibilité ici :</p>

<h3 id="import"><code>import</code></h3>

<p>{{Compat("javascript.statements.import")}}</p>

<h3 id="export"><code>export</code></h3>

<p>{{Compat("javascript.statements.export")}}</p>

<h2 id="Commençons_par_un_exemple">Commençons par un exemple</h2>

<p>Pour illustrer le fonctionnement des modules, nous avons créé <a href="https://github.com/mdn/js-examples/tree/master/modules">un ensemble d'exemples disponibles sur GitHub</a>. Ces exemples illustrent un ensemble de modules pour créer un élément {{htmlelement("canvas")}} sur une page web puis dessiner (et afficher des informations) sur les différentes formes du canevas.</p>

<p>Ces opérations sont assez simples mais nous les avons choisies pour nous concentrer plutôt sur le fonctionnement des modules.</p>

<div class="note">
<p><strong>Note :</strong> Si vous souhaitez télécharger les exemples et les exécuter en local, vous devrez utiliser un serveur web local.</p>
</div>

<h2 id="Structure_de_lexemple">Structure de l'exemple</h2>

<p>Dans notre premier exemple (cf. <a href="https://github.com/mdn/js-examples/tree/master/modules/basic-modules">basic-modules</a>), nous avons l'arborescence de fichier suivante :</p>

<pre>index.html
main.mjs
modules/
    canvas.mjs
    square.mjs</pre>

<div class="note">
<p><strong>Note :</strong> Tous les exemples de ce guide suivent la même structure.</p>
</div>

<p>Le répertoire dédié aux modules contient deux modules :</p>

<ul>
 <li><code>canvas.mjs</code> — responsable de fonctions pour gérer le canevas

  <ul>
   <li><code>create()</code> — crée un canevas avec les dimensions souhaitées (<code>width</code> /  <code>height</code>) à l'intérieur d'un élément {{htmlelement("div")}} doté d'un identifiant et qui est ajouté à l'intérieur d'un élément indiqué. Cette fonction renvoie l'objet contenant le contexte du canevas et l'identifiant du conteneur.</li>
   <li><code>createReportList()</code> — crée une liste non ordonnée à l'intérieur d'un élément indiqué et dans lequel on affiche des données. Cette fonction renvoie l'identifiant de la liste.</li>
  </ul>
 </li>
 <li><code>square.mjs</code> :
  <ul>
   <li><code>name</code> — une constante qui est une chaîne de caractères : <code>"square"</code>.</li>
   <li><code>draw()</code> — dessine un carré avec une taille/position/couleur données sur le canevas indiqué. Cette fonction renvoie un objet contenant la taille du carré, sa position et sa couleur.</li>
   <li><code>reportArea()</code> — écrit la surface d'un carré dans une liste donnée en fonction de la longueur de son côté.</li>
   <li><code>reportPerimeter()</code> — écrit le périmètre d'un carré dans une liste donnée en fonction de la longueur de son côté.</li>
  </ul>
 </li>
</ul>

<div class="note">
<p><strong>Note :</strong> Pour les modules JavaScript natifs, l'extension <code>.mjs</code> a son importance car elle permet d'importer des fichiers avec un type MIME <code>javascript/esm</code> (on pourra utiliser une autre extension qui fournira le type MIME <code>application/javascript</code>) afin d'éviter les erreurs liées à la vérification des types MIME. L'extension <code>.mjs</code> est notamment utile afin de distinguer plus clairement les scripts « classiques » des modules et pourra être exploitée par d'autres outils. Pour plus de détails, voir <a href="https://v8.dev/features/modules#mjs">cette note de Google</a>.</p>
</div>

<h2 id="Exporter_des_fonctionnalités">Exporter des fonctionnalités</h2>

<p>Pour commencer et afin d'utiliser les fonctionnalités d'un module, on devra les exporter. Pour cela, on utilisera l'instruction <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/export">export</a></code>.</p>

<p>La méthode la plus simple consiste à placer cette instruction devant chaque valeur qu'on souhaite exporter, par exemple :</p>

<pre class="brush: js">export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}</pre>

<p>Il est possible d'exporter des fonctions, des variables (qu'elles soient définies avec <code>var</code>, <code>let</code> ou <code>const</code>) et aussi des classes (que nous verrons par la suite). Les valeurs exportées doivent être présentes au plus haut niveau du script, il n'est pas possible d'utiliser <code>export</code> dans une fonction.</p>

<p>Une méthode plus concise consiste à exporter l'ensemble des valeurs grâce à une seule instruction située à la fin du fichier : les valeurs sont séparées par des virgules et la liste est délimitée entre accolades :</p>

<pre class="brush: js">export { name, draw, reportArea, reportPerimeter };</pre>

<h2 id="Importer_des_fonctionnalités">Importer des fonctionnalités</h2>

<p>Lorsque des fonctionnalités sont exportées par un premier module, on peut les importer dans un script afin de les utiliser. Voici la méthode la plus simple pour ce faire :</p>

<pre class="brush: js">import { name, draw, reportArea, reportPerimeter } from './modules/square.mjs';</pre>

<p>On utilise ici l'instruction <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/import">import</a></code>, suivi d'une liste d'identifiants séparées par des virgules et délimitée par des accolades, suivie du mot-clé <code>from</code> puis du chemin vers le fichier du module. Le chemin est relatif à la racine du site. Dans notre cas, pour <code>basic-module</code>, on écrira <code>/js-examples/modules/basic-modules</code>.</p>

<p>Ici, nous avons écrit le chemin d'une façon légèrement différente : on utilise le point (<code>.</code>) afin d'indiquer « l'emplacement courant », suivi du chemin vers le fichier. Cela permet d'éviter d'avoir à écrire l'intégralité du chemin à chaque fois, c'est aussi plus court et cela permet de déplacer le script et le modules sans avoir à modifier les scripts.</p>

<p>Ainsi :</p>

<pre>/js-examples/modules/basic-modules/modules/square.mjs</pre>

<p>devient :</p>

<pre>./modules/square.mjs</pre>

<p>Vous pouvez voir ces lignes dans <code><a href="https://github.com/mdn/js-examples/blob/master/modules/basic-modules/main.js">main.mjs</a></code>.</p>

<div class="note">
<p><strong>Note :</strong> Pour certains systèmes de module, on peut omettre l'extension de fichier et le point (c'est-à-dire qu'on peut écrire <code>'/modules/square'</code>). Cela ne fonctionne pas pour les modules JavaScript !</p>
</div>

<p>Une fois les fonctionnalités importées dans le script, vous pouvez utiliser les valeurs dans votre script. Dans <code>main.mjs</code>, après les lignes d'import, on trouvera :</p>

<pre class="brush: js">let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
</pre>

<h2 id="Charger_le_module_via_le_document_HTML">Charger le module via le document HTML</h2>

<p>Il faut ensuite pouvoir charger le script <code>main.mjs</code> sur la page HTML. Pour cela, nous allons voir qu'il y a quelques différences avec le chargement d'un script « classique ».</p>

<p>Tout d'abord, il est nécessaire d'indiquer <code>type="module"</code> dans l'élément {{htmlelement("script")}} afin d'indiquer qu'on charge des modules :</p>

<pre class="brush: js">&lt;script type="module" src="main.mjs"&gt;&lt;/script&gt;</pre>

<p>Le script qu'on importe ici agit comme le module de plus haut niveau. Si on oublie ce type, Firefox déclenchera une erreur "<em>SyntaxError: import declarations may only appear at top level of a module</em>".</p>

<p>Les instructions <code>import</code> et <code>export</code> ne peuvent être utilisées qu'à l'intérieur de modules et pas à l'intérieur de scripts « classiques ».</p>

<div class="note">
<p><strong>Note :</strong> Il est aussi possible d'importer des modules dans des scripts qui sont déclarés en incise si on indique bien <code>type="module"</code>. On pourra donc écrire <code>&lt;script type="module"&gt; //code du script utilisant les modules ici &lt;/script&gt;</code>.</p>
</div>

<h2 id="Différences_entre_les_modules_et_les_scripts_«_classiques_»">Différences entre les modules et les scripts « classiques »</h2>

<ul>
 <li>Attention aux tests sur un environnement local : si vous chargez le fichier HTML directement depuis le système de fichier dans le navigateur (en double-cliquant dessus par exemple, ce qui donnera une URL <code>file://</code>), vous rencontrerez des erreurs CORS pour des raisons de sécurité. Il faut donc un serveur local afin de pouvoir tester.</li>
 <li>On pourra avoir un comportement différent entre un même script utilisé comme un module et un script utilisé de façon « classique ». En effet, les modules utilisent automatiquement <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">le mode strict</a>.</li>
 <li>Il n'est pas nécessaire d'utiliser l'attribut <code>defer</code> (voir <a href="/fr/docs/Web/HTML/Element/script#Attributs">les attributs de <code>&lt;script&gt;</code></a>) lors du chargement d'un module, ceux-ci sont automatiquement chargés à la demande.</li>
 <li>Enfin, les fonctionnalités importées ne sont disponibles qu'au sein de la portée du script qui les utilise ! Les valeurs importées ne sont manipulables que depuis le script, elles ne sont pas rattachées à la portée globale. On ne pourra par exemple pas y accéder depuis la console JavaScript. Bien que les erreurs soient toujours indiquées dans les outils de développement, certaines techniques de débogage ne seront pas disponibles.</li>
</ul>

<h2 id="Exports_par_défaut_et_exports_nommés">Exports par défaut et exports nommés</h2>

<p>Jusqu'à présent, nous avons utilisé des <strong>exports nommés</strong> — chaque valeur est exportée avec un nom et c'est ce nom qui est également utilisé lorsqu'on réalise l'import.</p>

<p>Il existe également un <strong>export par défaut</strong> — conçu pour simplifier l'export d'une fonction par module et pour faciliter l'interopérabilité avec les systèmes de module CommonJS et AMD (pour plus d'informations, voir <a href="https://tech.mozfr.org/post/2015/08/21/ES6-en-details-%3A-les-modules">ES6 en détails : les modules</a>).</p>

<p>Prenons un exemple pour comprendre le fonctionnement des exports par défaut. Dans <code>square.mjs</code>, on a une fonction intitulée <code>randomSquare()</code> qui crée un carré avec une taille/couleur/position aléatoires. On souhaite exporter cette fonction par défaut et on écrit donc ceci à la fin du fichier :</p>

<pre class="brush: js">export default randomSquare;</pre>

<p>On notera ici l'absence d'accolades.</p>

<p>On aurait également pu ajouter <code>export default</code> devant le mot-clé <code>function</code> et la définir comme fonction anonyme :</p>

<pre class="brush: js">export default function(ctx) {
  ...
}</pre>

<p>Dans le fichier <code>main.mjs</code>, on importe la fonction par défaut avec cette ligne</p>

<pre class="brush: js">import randomSquare from './modules/square.mjs';</pre>

<p>On voit ici aussi l'absence d'accolade car il n'y a qu'un seul export par défaut possible par module (et ici, on sait qu'il s'agit de <code>randomSquare</code>). La ligne ci-avant est en fait une notation raccourcie équivalente à :</p>

<pre class="brush: js">import {default as randomSquare} from './modules/square.mjs';</pre>

<div class="note">
<p><strong>Note :</strong> Pour en savoir plus sur le renommage des objets exportés, voir ci-après {{anch("Renommage des imports et des exports")}}.</p>
</div>

<h2 id="Gestion_des_conflits_de_nommage">Gestion des conflits de nommage</h2>

<p>Jusqu'à présent, notre exemple fonctionne. Mais que se passerait-il si nous ajoutions un module permettant de dessiner une autre forme comme un cercle ou un triangle ? Ces formes disposeraient sans doute également de fonctions telles que <code>draw()</code>, <code>reportArea()</code>, etc. Si on essaie d'importer ces fonctions avec les mêmes noms dans le module de plus haut niveau, nous allons avoir des conflits et des erreurs.</p>

<p>Heureusement, il existe différentes façons de résoudre ce problème.</p>

<h3 id="Renommage_des_imports_et_des_exports">Renommage des imports et des exports</h3>

<p>Entre les accolades utilisées pour les instructions <code>import</code> et <code>export</code>, on peut utiliser le mot-clé <code>as</code> avec un autre nom afin de modifier le nom par lequel on souhaite identifier la fonctionnalité.</p>

<p>Ainsi, les deux fragments qui suivent permettraient d'obtenir le même résultat de façons différentes :</p>

<pre class="brush: js">// dans module.mjs
export {
  fonction1 as nouveauNomDeFonction,
  fonction2 as autreNouveauNomDeFonction
};

// dans main.mjs
import { nouveauNomDeFonction, autreNouveauNomDeFonction } from './modules/module.mjs';</pre>

<pre class="brush: js">// dans module.mjs
export { fonction1, fonction2 };

// dans main.mjs
import { fonction1 as nouveauNomDeFonction,
         fonction2 as autreNouveauNomDeFonction } from './modules/module.mjs';</pre>

<p>Prenons un exemple concret. Dans le répertoire <code><a href="https://github.com/mdn/js-examples/tree/master/modules/renaming">renaming</a></code>, vous verrez le même système de modules que précédemment auquel nous avons ajouté <code>circle.mjs</code> et <code>triangle.mjs</code> afin de dessiner et d'écrire des informations sur des cercles et des triangles.</p>

<p>Dans chaque module, on exporte les fonctionnalités avec des noms identiques : l'instruction  <code>export</code> utilisée est la même à chaque fin de fichier :</p>

<pre class="brush: js">export { name, draw, reportArea, reportPerimeter };</pre>

<p>Lorsqu'on importe les valeurs dans <code>main.mjs</code>, si on essaie d'utiliser</p>

<pre class="brush: js">import { name, draw, reportArea, reportPerimeter } from './modules/square.mjs';
import { name, draw, reportArea, reportPerimeter } from './modules/circle.mjs';
import { name, draw, reportArea, reportPerimeter } from './modules/triangle.mjs';</pre>

<p>Le navigateur déclenchera une erreur telle que "<em>SyntaxError: redeclaration of import name</em>" (Firefox).</p>

<p>Pour éviter ce problème, on renomme les imports afin qu'ils soient uniques :</p>

<pre class="brush: js">import { name as squareName,
         draw as drawSquare,
         reportArea as reportSquareArea,
         reportPerimeter as reportSquarePerimeter } from './modules/square.mjs';

import { name as circleName,
         draw as drawCircle,
         reportArea as reportCircleArea,
         reportPerimeter as reportCirclePerimeter } from './modules/circle.mjs';

import { name as triangleName,
        draw as drawTriangle,
        reportArea as reportTriangleArea,
        reportPerimeter as reportTrianglePerimeter } from './modules/triangle.mjs';</pre>

<p>On aurait pu également résoudre le problème dans les fichiers de chaque module.</p>

<pre class="brush: js">// dans square.mjs
export { name as squareName,
         draw as drawSquare,
         reportArea as reportSquareArea,
         reportPerimeter as reportSquarePerimeter };</pre>

<pre class="brush: js">// dans main.mjs
import { squareName, drawSquare, reportSquareArea, reportSquarePerimeter } from './modules/square.mjs';</pre>

<p>Les deux approches fonctionnent. C'est à vous de choisir le style. Toutefois, il est souvent plus pratique d'effectuer le renommage à l'import, notamment lorsqu'on importe des fonctionnalités de modules tiers sur lesquels on n'a pas le contrôle.</p>

<h3 id="Créer_un_objet_module">Créer un objet module</h3>

<p>La méthode précédente fonctionne mais reste « brouillonne ». Pour faire mieux, on peut importer l'ensemble des fonctionnalités de chaque module dans un objet, de la façon suivante :</p>

<pre class="brush: js">import * as Module from './modules/module.mjs';</pre>

<p>Cela récupère tous les exports disponibles depuis <code>module.mjs</code> et les transforme en propriétés et méthodes rattachées à l'objet <code>Module</code> qui fournit alors un espace de noms (<em>namespace</em>) :</p>

<pre class="brush: js">Module.function1()
Module.function2()
etc.</pre>

<p>Là encore, prenons un exemple concret avec le répertoire <a href="https://github.com/mdn/js-examples/tree/master/modules/module-objects">module-objects</a>. Il s'agit du même exemple que précédemment mais qui a été réécrit afin de tirer parti de cette syntaxe. Dans les modules, les exports sont tous écrits ainsi :</p>

<pre class="brush: js">export { name, draw, reportArea, reportPerimeter };</pre>

<p>En revanche, pour les imports, on les récupère ainsi :</p>

<pre class="brush: js">import * as Canvas from './modules/canvas.mjs';

import * as Square from './modules/square.mjs';
import * as Circle from './modules/circle.mjs';
import * as Triangle from './modules/triangle.mjs';</pre>

<p>Dans chaque cas, on peut accéder aux imports comme propriétés des objets ainsi créés :</p>

<pre class="brush: js">let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'blue');
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);</pre>

<p>On obtient alors un code plus lisible.</p>

<h2 id="Classes_et_modules">Classes et modules</h2>

<p>Comme mentionné avant, il est possible d'importer et d'exporter des classes. Cette méthode peut aussi être utilisée afin d'éviter les conflits de nommage. Elle s'avère notamment utile lorsque vous utilisez déjà des classes pour construire vos objets (cela permet de garder une certaine cohérence dans le style).</p>

<p>Pour voir le résultat obtenu, vous pouvez consulter le répertoire <a href="https://github.com/mdn/js-examples/tree/master/modules/classes">classes</a> du dépôt où l'ensemble a été réécrit pour tirer parti des classes ECMAScript. Ainsi, <code><a href="https://github.com/mdn/js-examples/blob/master/modules/classes/modules/square.js">square.mjs</a></code> contient désormais l'ensemble des fonctionnalités via une classe :</p>

<pre class="brush: js">class Square {
  constructor(ctx, listId, length, x, y, color) {
    ...
  }

  draw() {
    ...
  }

  ...
}</pre>

<p>Il suffit d'exporter cette classe :</p>

<pre class="brush: js">export { Square };</pre>

<p>Puis de l'importer ainsi dans <code><a href="https://github.com/mdn/js-examples/blob/master/modules/classes/main.js">main.mjs</a></code> :</p>

<pre class="brush: js">import { Square } from './modules/square.mjs';</pre>

<p>Ensuite, on peut utiliser cette classe afin de dessiner le carré :</p>

<pre class="brush: js">let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
square1.draw();
square1.reportArea();
square1.reportPerimeter();</pre>

<h2 id="Agréger_des_modules">Agréger des modules</h2>

<p>Il arrivera qu'on veuille agréger des modules entre eux. On peut avoir plusieurs niveaux de dépendances et vouloir simplifier les choses en combinant différents sous-modules en un seul module parent. Pour cela, on pourra utiliser la notation raccourcie suivante :</p>

<pre class="brush: js">export * from 'x.mjs'
export { name } from 'x.mjs'</pre>

<p>Pour voir cela en pratique, vous pouvez consulter le répertoire <a href="https://github.com/mdn/js-examples/tree/master/modules/module-aggregation">module-aggregation</a>. Dans cet exemple (construit sur le précédent qui utilise les classes), on a un module supplémentaire intitulé <code>shapes.mjs</code> qui agrège les fonctionnalités fournies par <code>circle.mjs</code>, <code>square.mjs</code> et <code>triangle.mjs</code>. Les sous-modules ont également été déplacés dans un répertoire <code>shapes</code> situé dans un répertoire <code>modules</code>. L'arborescence utilisée est donc :</p>

<pre>modules/
  canvas.mjs
  shapes.mjs
  shapes/
    circle.mjs
    square.mjs
    triangle.mjs</pre>

<p>Dans chaque sous-module, l'export aura la même forme :</p>

<pre class="brush: js">export { Square };</pre>

<p>Pour l'agrégation au sein de <code><a href="https://github.com/mdn/js-examples/blob/master/modules/module-aggregation/modules/shapes.js">shapes.mjs</a></code>, on écrit les lignes suivantes :</p>

<pre class="brush: js">export { Square } from './shapes/square.mjs';
export { Triangle } from './shapes/triangle.mjs';
export { Circle } from './shapes/circle.mjs';</pre>

<p>On récupère ainsi l'ensemble des exports de chaque module et on les rend disponibles via <code>shapes.mjs</code>.</p>

<div class="note">
<p><strong>Note :</strong> Cette notation ne permet que de rediriger les exports via le fichier. Les objets importés/exportés n'existent pas vraiment dans <code>shapes.mjs</code> et on ne peut donc pas écrire de code <em>utile</em> qui les manipule.</p>
</div>

<p>Dans le fichier <code>main.mjs</code>, on pourra alors remplacer :</p>

<pre class="brush: js">import { Square } from './modules/square.mjs';
import { Circle } from './modules/circle.mjs';
import { Triangle } from './modules/triangle.mjs';</pre>

<p>par :</p>

<pre class="brush: js">import { Square, Circle, Triangle } from './modules/shapes.mjs';</pre>

<h2 id="Chargement_dynamique_de_modules">Chargement dynamique de modules</h2>

<p>Cette nouvelle fonctionnalité permet aux navigateurs de charger les modules lorsqu'ils sont nécessaires plutôt que de tout précharger en avance de phase. Cette méthode offre de nombreux avantages quant aux performances. Voyons comment cela fonctionne.</p>

<p>Pour utiliser cette fonctionnalité, on pourra utiliser <code>import()</code> comme une fonction et lui passer le chemin du module en argument. Cette fonction renverra <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">une promesse</a>, qui sera résolue en un module objet donnant accès aux exports.</p>

<pre class="brush: js">import('./modules/monModule.mjs')
  .then((module) =&gt; {
    // Faire qqc avec le module.
  });</pre>

<p>Dans nos exemples, regardons le répertoire <a href="https://github.com/mdn/js-examples/tree/master/modules/dynamic-module-imports">dynamic-module-imports</a>, également basé sur les classes. Cette fois, on ne dessine rien au chargement de l'exemple mais on ajoute trois boutons — "Circle", "Square" et "Triangle" — qui, lorsqu'ils seront utilisés, chargeront dynamiquement les modules nécessaires et les utiliseront pour charger la forme associée.</p>

<p>Dans cet exemple, nous avons uniquement modifié <a href="https://github.com/mdn/js-examples/blob/master/modules/dynamic-module-imports/index.html">index.html</a> et <a href="https://github.com/mdn/js-examples/blob/master/modules/dynamic-module-imports/main.js">main.js</a> — les exports restent les mêmes.</p>

<p>Dans <code>main.js</code>, on récupère une référence à chaque bouton en utilisant <code><a href="/fr/docs/Web/API/Document/querySelector">document.querySelector()</a></code>. Par exemple :</p>

<pre class="brush: js">let squareBtn = document.querySelector('.square');</pre>

<p>Ensuite, on attache un gestionnaire d'évènement à chaque bouton afin qu'on puisse appuyer dessus. Le module correspondant est alors chargé dynamiquement et utilisé pour dessiner la forme :</p>

<pre class="brush: js">squareBtn.addEventListener('click', () =&gt; {
  import('./modules/square.mjs').then((Module) =&gt; {
    let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  })
});</pre>

<p>On voit ici que, parce que la promesse renvoie un objet module à la résolution, la classe est une propriété de cet objet et qu'il faut ajouter cet espace de nom devant le constructeur exporté pour l'utiliser. Autrement dit, avec cette méthode, on doit ajouter <code>Module.</code> devant <code>Square</code> (plutôt que d'utiliser uniquement <code>Square</code>).</p>

<h2 id="Diagnostiquer_les_problèmes_avec_les_modules">Diagnostiquer les problèmes avec les modules</h2>

<p>Voici quelques notes pour aider à comprendre et à diagnostiquer les problèmes parfois rencontrés avec les modules. N'hésitez pas à ajouter vos conseils à cette liste si vous en avez.</p>

<ul>
 <li>Comme indiqué ci-avant, les fichiers <code>.mjs</code> doivent être chargés avec le type MIME <code>javascript/esm</code> (ou avec un autre type MIME compatible JavaScript tel que <code>application/javascript</code>), sinon on aura une erreur lors de la vérification du type MIME.</li>
 <li>Si on essaie de charger des fichiers HTML en local à l'aide d'une URL <code>file://</code>, on aura des erreurs CORS relatives à la sécurité. Pour tester les modules, on doit donc mettre en place un serveur (ou, par exemple, utiliser les pages GitHub).</li>
 <li><code>.mjs</code> est une extension relativement récente et certains systèmes d'exploitation ne la reconnaîtront pas et/ou tenteront de la remplacer (ex. macOS pourra silencieusement ajouter un <code>.js</code> après le <code>.mjs</code>). Dans ce cas, afficher les extensions de tous les fichiers par défaut pourra permettre de vérifier.</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://tech.mozfr.org/post/2018/04/06/Une-plongee-illustree-dans-les-modules-ECMAScript">Une plongée illustrée dans les modules ECMAScript</a></li>
 <li><a href="https://tech.mozfr.org/post/2015/08/21/ES6-en-details-%3A-les-modules">ES6 en détails : les modules</a></li>
 <li><a href="https://developers.google.com/web/fundamentals/primers/modules#mjs">Utiliser les modules JavaScript sur le Web</a>, un article par Addy Osmani et Mathias Bynens (en anglais)</li>
 <li>Livre de Axel Rauschmayer (en anglais) : <a href="http://exploringjs.com/es6/ch_modules.html">Exploring JS: Modules</a></li>
</ul>

<p>{{Previous("Web/JavaScript/Guide/Métaprogrammation")}}</p>
