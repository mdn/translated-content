---
title: Les modules JavaScript
slug: Web/JavaScript/Guide/Modules
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Métaprogrammation")}}

Ce guide aborde l'ensemble des notions vous permettant d'utiliser la syntaxe des modules en JavaScript.

## Un peu de contexte

Les programmes JavaScript ont commencé par être assez petits, réalisant des tâches isolées uniquement là où l'interactivité était nécessaire. Après plusieurs années, nous avons maintenant des applications complètes qui sont exécutées dans les navigateurs avec des codes complexes et volumineux. Des programmes JavaScript sont également exécutés dans d'autres contextes ([Node.js](/fr/docs/Glossary/Node.js) par exemple).

Il a donc été question de fournir un mécanisme pour diviser les programmes JavaScript en plusieurs modules qu'on pourrait importer les uns dans les autres. Cette fonctionnalité était présente dans Node.js depuis longtemps et plusieurs bibliothèques et _frameworks_ JavaScript ont permis l'utilisation de modules ([CommonJS](https://en.wikipedia.org/wiki/CommonJS), [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md), [RequireJS](https://requirejs.org/) ou, plus récemment, [Webpack](https://webpack.github.io/) et [Babel](https://babeljs.io/)).

Bonne nouvelle, les navigateurs ont également commencé à prendre en charge ces fonctionnalités nativement. C'est le sujet de ce guide.

Cette implémentation permettra aux navigateurs d'optimiser le chargement des modules, rendant le fonctionnement plus efficace qu'une bibliothèque tierce avec un traitement côté client des allers-retours sur le réseau.

## Compatibilité des navigateurs

L'utilisation des modules natifs JavaScript repose sur les instructions [`import`](/fr/docs/Web/JavaScript/Reference/Statements/import) et [`export`](/fr/docs/Web/JavaScript/Reference/Statements/export) dont vous pouvez voir l'état de la compatibilité ici&nbsp;:

{{Compat}}

## Commençons par un exemple

Pour illustrer le fonctionnement des modules, nous avons créé [un ensemble d'exemples disponibles sur GitHub](https://github.com/mdn/js-examples/tree/master/module-examples). Ces exemples illustrent un ensemble de modules pour créer un élément {{htmlelement("canvas")}} sur une page web puis dessiner (et afficher des informations) sur les différentes formes du canevas.

Ces opérations sont assez simples, mais nous les avons choisies pour nous concentrer plutôt sur le fonctionnement des modules.

> **Note :** Si vous souhaitez télécharger les exemples et les exécuter en local, vous devrez utiliser un serveur web local.

## Structure de l'exemple

Dans notre premier exemple (cf. [basic-modules](https://github.com/mdn/js-examples/tree/master/module-examples/basic-modules)), nous avons l'arborescence de fichier suivante&nbsp;:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> **Note :** Tous les exemples de ce guide suivent la même structure.

Le répertoire dédié aux modules contient deux modules&nbsp;:

- `canvas.js` — responsable de fonctions pour gérer le canevas

  - `create()` — crée un canevas avec les dimensions souhaitées (`width` / `height`) à l'intérieur d'un élément {{htmlelement("div")}} doté d'un identifiant et qui est ajouté à l'intérieur d'un élément indiqué. Cette fonction renvoie l'objet contenant le contexte du canevas et l'identifiant du conteneur.
  - `createReportList()` — crée une liste non ordonnée à l'intérieur d'un élément indiqué et dans lequel on affiche des données. Cette fonction renvoie l'identifiant de la liste.

- `square.js`

  - `name` — une constante qui est une chaîne de caractères&nbsp;: `"square"`.
  - `draw()` — dessine un carré avec une taille/position/couleur donnée sur le canevas indiqué. Cette fonction renvoie un objet contenant la taille du carré, sa position et sa couleur.
  - `reportArea()` — écrit la surface d'un carré dans une liste donnée en fonction de la longueur de son côté.
  - `reportPerimeter()` — écrit le périmètre d'un carré dans une liste donnée en fonction de la longueur de son côté.

## Aparté&nbsp;: `.mjs` ou `.js`

Tout au long de cet article, nous utiliserons l'extension `.js` pour les fichiers de nos modules. Toutefois, dans d'autres ressources, vous pourrez voir l'extension `.mjs` utilisée. Par exemple [dans les recommandations de la documentation de V8](https://v8.dev/features/modules#mjs). Les raisons alors fournies sont&nbsp;:

- Cela permet une meilleure clarté pour distinguer les fichiers qui sont des modules de ceux qui sont des fichiers JavaScript classiques.
- Cela permet que les fichiers de module soient analysés en tant que modules par les environnements d'exécution tels que [Node.js](https://nodejs.org/api/esm.html#esm_enabling), et les outils de compilation comme [Babel](https://babeljs.io/docs/en/options#sourcetype).

Toutefois, nous avons décidé de conserver l'extension `.js`. Pour que les modules fonctionnent dans les navigateurs, vous devez vous assurer qu'ils sont servis avec un en-tête `Content-Type` qui contient un type MIME JavaScript comme `text/javascript`. Si ce n'est pas le cas, vous aurez une erreur de vérification du type MIME et le navigateur n'exécutera pas le JavaScript de ces fichiers. La plupart des serveurs web utilisent le type MIME correct pour les fichiers `.js` mais pas encore pour les fichiers `.mjs`. Parmi les serveurs qui servent correctement les fichiers `.mjs`, on trouve [GitHub Pages](https://pages.github.com/) et [`http-server`](https://github.com/http-party/http-server#readme) en Node.js.

Il n'y a pas de problème si vous utilisez déjà un tel environnement ou si vous savez ce que vous faites et avez accès à la configuration de votre serveur pour paramétrer le bon [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type) pour les fichiers `.mjs`). Cela pourrait malheureusement être source de confusion si vous ne contrôlez pas le serveur qui sert les fichiers ou que vous publiez des fichiers pour un usage public (comme nous le faisons ici).

Aussi, à des fins d'apprentissage et de portabilité, nous avons décidé de conserver l'extension `.js` ici.

Si la distinction apportée par l'usage de `.mjs` pour identifier les modules (vs `.js` pour les fichiers JavaScript normaux) vous est utile, vous pouvez toujours utiliser l'extension `.mjs` pour le développement et convertir cette extension en `.js` lors de la compilation.

On notera que&nbsp;:

- Certains outils pourraient tout à fait ne jamais prendre en charge l'extension `.mjs`.
- Comme nous allons le voir plus bas, l'attribut `<script type="module">` est utilisé pour indiquer quand on cible un module.

## Exporter des fonctionnalités

Pour commencer et afin d'utiliser les fonctionnalités d'un module, on devra les exporter. Pour cela, on utilisera l'instruction [`export`](/fr/docs/Web/JavaScript/Reference/Statements/export).

La méthode la plus simple consiste à placer cette instruction devant chaque valeur qu'on souhaite exporter, par exemple&nbsp;:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color,
  };
}
```

Il est possible d'exporter des fonctions, des variables (qu'elles soient définies avec `var`, `let` ou `const`) et aussi des classes (que nous verrons par la suite). Les valeurs exportées doivent être présentes au plus haut niveau du script, il n'est pas possible d'utiliser `export` dans une fonction.

Une méthode plus concise consiste à exporter l'ensemble des valeurs grâce à une seule instruction située à la fin du fichier&nbsp;: les valeurs sont séparées par des virgules et la liste est délimitée entre accolades&nbsp;:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importer des fonctionnalités

Lorsque des fonctionnalités sont exportées par un premier module, on peut les importer dans un script afin de les utiliser. Voici la méthode la plus simple pour ce faire&nbsp;:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

On utilise ici l'instruction [`import`](/fr/docs/Web/JavaScript/Reference/Statements/import), suivie d'une liste d'identifiants séparés par des virgules et délimitée par des accolades, suivie du mot-clé `from` puis du chemin vers le fichier du module. Le chemin est relatif à la racine du site. Dans notre cas, pour `basic-module`, on écrira `/js-examples/module-examples/basic-modules`.

Ici, nous avons écrit le chemin d'une façon légèrement différente&nbsp;: on utilise le point (`.`) afin d'indiquer « l'emplacement courant », suivi du chemin vers le fichier. Cela permet d'éviter d'avoir à écrire l'intégralité du chemin à chaque fois, c'est aussi plus court et cela permet de déplacer le script et le modules sans avoir à modifier les scripts.

Ainsi&nbsp;:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

devient&nbsp;:

```bash
./modules/square.js
```

Vous pouvez voir ces lignes dans [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/basic-modules/main.js).

> **Note :** Pour certains systèmes de module, on peut omettre l'extension de fichier et le point (c'est-à-dire qu'on peut écrire `'/modules/square'`). Cela ne fonctionne pas pour les modules JavaScript !

Une fois les fonctionnalités importées dans le script, vous pouvez utiliser les valeurs dans votre script. Dans `main.js`, après les lignes d'import, on trouvera&nbsp;:

```js
let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> **Note :** Bien que les fonctionnalités importées soient disponibles dans le fichier, ce ne sont que des vues en lecture seule pour les fonctionnalités exportées. On ne peut pas changer la variable importée, mais on peut toujours modifier ses propriétés (à la façon dont les variables sont gérées avec `const`). De plus, ces fonctionnalités sont importées avec des liaisons dynamiques, ce qui signifie que leur valeur peut changer, même si on ne peut pas modifier la liaison (à la différence de `const`).

## Charger le module via le document HTML

Il faut ensuite pouvoir charger le script `main.js` sur la page HTML. Pour cela, nous allons voir qu'il y a quelques différences avec le chargement d'un script « classique ».

Tout d'abord, il est nécessaire d'indiquer `type="module"` dans l'élément {{htmlelement("script")}} afin d'indiquer qu'on charge des modules&nbsp;:

```html
<script type="module" src="main.js"></script>
```

On peut aussi embarquer directement le script du module dans le fichier HTML en plaçant le code JavaScript dans le corps de l'élément `<script>`&nbsp;:

```html
<script type="module">
  /* Code du module JavaScript */
</script>
```

Le script dans lequel on importe les fonctionnalités du module agira comme le script de plus haut niveau. Si ce dernier est absent, Firefox (par exemple) lèvera une erreur <q lang="en">SyntaxError: import declarations may only appear at top level of a module</q>.

Les instructions `import` et `export` ne peuvent être utilisées qu'à l'intérieur de modules et pas depuis des scripts classiques.

## Différences entre les modules et les scripts « classiques »

- Attention aux tests sur un environnement local&nbsp;: si vous chargez le fichier HTML directement depuis le système de fichier dans le navigateur (en double-cliquant dessus par exemple, ce qui donnera une URL `file://`), vous rencontrerez des erreurs CORS pour des raisons de sécurité. Il faut donc un serveur local afin de pouvoir tester.
- On pourra avoir un comportement différent entre un même script utilisé comme un module et un script utilisé de façon « classique ». En effet, les modules utilisent automatiquement [le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).
- Il n'est pas nécessaire d'utiliser l'attribut `defer` (voir [les attributs de `<script>`](/fr/docs/Web/HTML/Element/script#attributs)) lors du chargement d'un module, celui-ci étant automatiquement différé.
- Les modules sont exécutés une seule fois, même s'ils sont référencés dans plusieurs balises `<script>`.
- Enfin, les fonctionnalités importées ne sont disponibles qu'au sein de la portée du script qui les utilise ! Les valeurs importées ne sont manipulables que depuis le script, elles ne sont pas rattachées à la portée globale. On ne pourra par exemple pas y accéder depuis la console JavaScript. Bien que les erreurs soient toujours indiquées dans les outils de développement, certaines techniques de débogage ne seront pas disponibles.

## Exports par défaut et exports nommés

Jusqu'à présent, nous avons utilisé des **exports nommés** — chaque valeur est exportée avec un nom et c'est ce nom qui est également utilisé lorsqu'on réalise l'import.

Il existe également un **export par défaut** — conçu pour simplifier l'export d'une fonction par module et pour faciliter l'interopérabilité avec les systèmes de module CommonJS et AMD (pour plus d'informations, voir [ES6 en détails&nbsp;: les modules](https://tech.mozfr.org/post/2015/08/21/ES6-en-details-%3A-les-modules)).

Prenons un exemple pour comprendre le fonctionnement des exports par défaut. Dans `square.js`, on a une fonction intitulée `randomSquare()` qui crée un carré avec une taille/couleur/position aléatoire. On souhaite exporter cette fonction par défaut et on écrit donc ceci à la fin du fichier&nbsp;:

```js
export default randomSquare;
```

On notera ici l'absence d'accolades.

On aurait également pu ajouter `export default` devant le mot-clé `function` et la définir comme fonction anonyme&nbsp;:

```js
export default function(ctx) {
  ...
}
```

Dans le fichier `main.js`, on importe la fonction par défaut avec cette ligne

```js
import randomSquare from "./modules/square.js";
```

On voit ici aussi l'absence d'accolade, car il n'y a qu'un seul export par défaut possible par module (et ici, on sait qu'il s'agit de `randomSquare`). La ligne ci-avant est en fait une notation raccourcie équivalente à&nbsp;:

```js
import { default as randomSquare } from "./modules/square.js";
```

> **Note :** Pour en savoir plus sur le renommage des objets exportés, voir ci-après [Renommage des imports et des exports](#renommage_des_imports_et_des_exports).

## Gestion des conflits de nommage

Jusqu'à présent, notre exemple fonctionne. Mais que se passerait-il si nous ajoutions un module permettant de dessiner une autre forme comme un cercle ou un triangle ? Ces formes disposeraient sans doute également de fonctions telles que `draw()`, `reportArea()`, etc. Si on essaie d'importer ces fonctions avec les mêmes noms dans le module de plus haut niveau, nous allons avoir des conflits et des erreurs.

Heureusement, il existe différentes façons de résoudre ce problème.

### Renommage des imports et des exports

Entre les accolades utilisées pour les instructions `import` et `export`, on peut utiliser le mot-clé `as` avec un autre nom afin de modifier le nom par lequel on souhaite identifier la fonctionnalité.

Ainsi, les deux fragments qui suivent permettraient d'obtenir le même résultat de façons différentes&nbsp;:

```js
// dans module.js
export {
  fonction1 as nouveauNomDeFonction,
  fonction2 as autreNouveauNomDeFonction,
};

// dans main.js
import {
  nouveauNomDeFonction,
  autreNouveauNomDeFonction,
} from "./modules/module.js";
```

```js
// dans module.js
export { fonction1, fonction2 };

// dans main.js
import {
  fonction1 as nouveauNomDeFonction,
  fonction2 as autreNouveauNomDeFonction,
} from "./modules/module.js";
```

Prenons un exemple concret. Dans le répertoire [`renaming`](https://github.com/mdn/js-examples/tree/master/module-examples/renaming), vous verrez le même système de modules que précédemment auquel nous avons ajouté `circle.js` et `triangle.js` afin de dessiner et d'écrire des informations sur des cercles et des triangles.

Dans chaque module, on exporte les fonctionnalités avec des noms identiques&nbsp;: l'instruction `export` utilisée est la même à chaque fin de fichier&nbsp;:

```js
export { name, draw, reportArea, reportPerimeter };
```

Lorsqu'on importe les valeurs dans `main.js`, si on essaie d'utiliser

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Le navigateur déclenchera une erreur telle que <q lang="en">_SyntaxError: redeclaration of import name_</q> (Firefox).

Pour éviter ce problème, on renomme les imports afin qu'ils soient uniques&nbsp;:

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

On aurait pu également résoudre le problème dans les fichiers de chaque module.

```js
// dans square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// dans main.js
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "./modules/square.js";
```

Les deux approches fonctionnent. C'est à vous de choisir le style. Toutefois, il est souvent plus pratique d'effectuer le renommage à l'import, notamment lorsqu'on importe des fonctionnalités de modules tiers sur lesquels on n'a pas le contrôle.

## Créer un objet module

La méthode précédente fonctionne mais reste « brouillonne ». Pour faire mieux, on peut importer l'ensemble des fonctionnalités de chaque module dans un objet, de la façon suivante&nbsp;:

```js
import * as Module from "./modules/module.js";
```

Cela récupère tous les exports disponibles depuis `module.js` et les transforme en propriétés et méthodes rattachées à l'objet `Module` qui fournit alors un espace de noms (_namespace_)&nbsp;:

```js
Module.function1()
Module.function2()
etc.
```

Là encore, prenons un exemple concret avec le répertoire [module-objects](https://github.com/mdn/js-examples/tree/master/module-examples/module-objects). Il s'agit du même exemple que précédemment mais qui a été réécrit afin de tirer parti de cette syntaxe. Dans les modules, les exports sont tous écrits ainsi&nbsp;:

```js
export { name, draw, reportArea, reportPerimeter };
```

En revanche, pour les imports, on les récupère ainsi&nbsp;:

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

Dans chaque cas, on peut accéder aux imports comme propriétés des objets ainsi créés&nbsp;:

```js
let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

On obtient alors un code plus lisible.

## Classes et modules

Comme mentionné avant, il est possible d'importer et d'exporter des classes. Cette méthode peut aussi être utilisée afin d'éviter les conflits de nommage. Elle s'avère notamment utile lorsque vous utilisez déjà des classes pour construire vos objets (cela permet de garder une certaine cohérence dans le style).

Pour voir le résultat obtenu, vous pouvez consulter le répertoire [classes](https://github.com/mdn/js-examples/tree/master/module-examples/classes) du dépôt où l'ensemble a été réécrit pour tirer parti des classes ECMAScript. Ainsi, [`square.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/modules/square.js) contient désormais l'ensemble des fonctionnalités via une classe&nbsp;:

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    ...
  }

  draw() {
    ...
  }

  ...
}
```

Il suffit d'exporter cette classe&nbsp;:

```js
export { Square };
```

Puis de l'importer ainsi dans [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/main.js)&nbsp;:

```js
import { Square } from "./modules/square.js";
```

Ensuite, on peut utiliser cette classe afin de dessiner le carré&nbsp;:

```js
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Agréger des modules

Il arrivera qu'on veuille agréger des modules entre eux. On peut avoir plusieurs niveaux de dépendances et vouloir simplifier les choses en combinant différents sous-modules en un seul module parent. Pour cela, on pourra utiliser la notation raccourcie suivante&nbsp;:

```js
export * from "x.js";
export { name } from "x.js";
```

Pour voir cela en pratique, vous pouvez consulter le répertoire [module-aggregation](https://github.com/mdn/js-examples/tree/master/module-examples/module-aggregation). Dans cet exemple (construit sur le précédent qui utilise les classes), on a un module supplémentaire intitulé `shapes.js` qui agrège les fonctionnalités fournies par `circle.js`, `square.js` et `triangle.js`. Les sous-modules ont également été déplacés dans un répertoire `shapes` situé dans un répertoire `modules`. L'arborescence utilisée est donc&nbsp;:

```
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

Dans chaque sous-module, l'export aura la même forme&nbsp;:

```js
export { Square };
```

Pour l'agrégation au sein de [`shapes.js`](https://github.com/mdn/js-examples/blob/master/module-examples/module-aggregation/modules/shapes.js), on écrit les lignes suivantes&nbsp;:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

On récupère ainsi l'ensemble des exports de chaque module et on les rend disponibles via `shapes.js`.

> **Note :** Cette notation ne permet que de rediriger les exports via le fichier. Les objets importés/exportés n'existent pas vraiment dans `shapes.js` et on ne peut donc pas écrire de code _utile_ qui les manipule.

Dans le fichier `main.js`, on pourra alors remplacer&nbsp;:

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

par&nbsp;:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Chargement dynamique de modules

Cette nouvelle fonctionnalité permet aux navigateurs de charger les modules lorsqu'ils sont nécessaires plutôt que de tout précharger en avance de phase. Cette méthode offre de nombreux avantages quant aux performances. Voyons comment cela fonctionne.

Pour utiliser cette fonctionnalité, on pourra utiliser `import()` comme une fonction et lui passer le chemin du module en argument. Cette fonction renverra [une promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise), qui sera résolue en un module objet donnant accès aux exports.

```js
import("./modules/monModule.js").then((module) => {
  // Faire qqc avec le module.
});
```

Dans nos exemples, regardons le répertoire [dynamic-module-imports](https://github.com/mdn/js-examples/tree/master/module-examples/dynamic-module-imports), également basé sur les classes. Cette fois, on ne dessine rien au chargement de l'exemple, mais on ajoute trois boutons — "Circle", "Square" et "Triangle" — qui, lorsqu'ils seront utilisés, chargeront dynamiquement les modules nécessaires et les utiliseront pour charger la forme associée.

Dans cet exemple, nous avons uniquement modifié [index.html](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/index.html) et [main.js](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/main.js) — les exports restent les mêmes.

Dans `main.js`, on récupère une référence à chaque bouton en utilisant [`document.querySelector()`](/fr/docs/Web/API/Document/querySelector). Par exemple&nbsp;:

```js
let squareBtn = document.querySelector(".square");
```

Ensuite, on attache un gestionnaire d'évènement à chaque bouton afin qu'on puisse appuyer dessus. Le module correspondant est alors chargé dynamiquement et utilisé pour dessiner la forme&nbsp;:

```js
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    let square1 = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  });
});
```

On voit ici que, parce que la promesse renvoie un objet module à la résolution, la classe est une propriété de cet objet et qu'il faut ajouter cet espace de nom devant le constructeur exporté pour l'utiliser. Autrement dit, avec cette méthode, on doit ajouter `Module.` devant `Square` (plutôt que d'utiliser uniquement `Square`).

### `await` au plus haut niveau

L'utilisation du mot-clé `await` au plus haut niveau est une fonctionnalité disponible dans les modules. Cela permet d'avoir des modules qui agissent comme des [grandes fonctions asynchrones](/fr/docs/Learn/JavaScript/Asynchronous/Introducing), ce qui signifie que le code peut être évalué avant d'être utilisé dans des modules parents mais sans bloquer le chargement des modules frères et sœurs.

Prenons un exemple. Vous trouverez les fichiers et le code de cette section au sein du répertoire [`top-level-await`](https://github.com/mdn/js-examples/tree/master/module-examples/top-level-await) qui repart des exemples précédents.

Tout d'abord, on déclare une palette de couleurs dans un fichier [`colors.json`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/data/colors.json) distinct&nbsp;:

```js
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Ensuite, on crée un module intitulé [`getColors.js`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/modules/getColors.js) qui utilise une requête _fetch_ pour charger le fichier [`colors.json`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/data/colors.json) et qui renvoie les données comme un objet.

```js
// requête fetch
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Voyez ici la dernière ligne qui effectue l'export.

On y utilise le mot-clé `await` avant la constante `colors` qu'on souhaite exporter. Cela signifie que si d'autres modules incluent celui-ci, ils devront attendre que `colors` ait été téléchargé et analysé avant de pouvoir l'utiliser.

Incluons ce module dans le fichier [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/main.js)&nbsp;:

```js
import colors from './modules/getColors.js';
import { Canvas } from './modules/canvas.js';

let circleBtn = document.querySelector('.circle');

...
```

Utilisons `colors` plutôt que les chaînes de caractères précédemment utilisées pour l'appel aux fonctions de formes&nbsp;:

```js
...

let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, colors.blue);

...

let circle1 = new Module.Circle(myCanvas.ctx, myCanvas.listId, 75, 200, 100, colors.green);

...

let triangle1 = new Module.Triangle(myCanvas.ctx, myCanvas.listId, 100, 75, 190, colors.yellow);

...
```

C'est utile ici, car le code au sein de [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/main.js) ne s'exécutera pas tant que le code de [`getColors.js`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/modules/getColors.js) n'aura pas été exécuté. Toutefois, cela ne bloquera pas le chargement des autres modules. Ainsi, notre module [`canvas.js`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/modules/canvas.js) continuera de charger tandis que les données de `colors` sont récupérées.

## Diagnostiquer les problèmes avec les modules

Voici quelques notes pour aider à comprendre et à diagnostiquer les problèmes parfois rencontrés avec les modules. N'hésitez pas à ajouter vos conseils à cette liste si vous en avez.

- Comme indiqué ci-avant, les fichiers `.js` doivent être chargés avec le type MIME `text/javascript` (ou avec un autre type MIME compatible JavaScript tel que `application/javascript`, `text/javascript` étant recommandé), sinon on aura une erreur lors de la vérification du type MIME.
- Si on essaie de charger des fichiers HTML en local à l'aide d'une URL `file://`, on aura des erreurs CORS relatives à la sécurité. Pour tester les modules, on doit donc mettre en place un serveur (ou, par exemple, utiliser les pages GitHub).
- `.mjs` est une extension relativement récente et certains systèmes d'exploitation ne la reconnaîtront pas et/ou tenteront de la remplacer (ex. macOS pourra silencieusement ajouter un `.js` après le `.mjs`). Dans ce cas, afficher les extensions de tous les fichiers par défaut pourra permettre de vérifier.

## Voir aussi

- [Une plongée illustrée dans les modules ECMAScript](https://tech.mozfr.org/post/2018/04/06/Une-plongee-illustree-dans-les-modules-ECMAScript)
- [ES6 en détails&nbsp;: les modules](https://tech.mozfr.org/post/2015/08/21/ES6-en-details-%3A-les-modules)
- [Utiliser les modules JavaScript sur le Web](https://developers.google.com/web/fundamentals/primers/modules), un article par Addy Osmani et Mathias Bynens (en anglais)
- Livre d'Axel Rauschmayer (en anglais)&nbsp;: [Exploring JS: Modules](https://exploringjs.com/es6/ch_modules.html)

{{Previous("Web/JavaScript/Guide/Métaprogrammation")}}
