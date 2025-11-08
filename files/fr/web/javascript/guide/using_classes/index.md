---
title: Utiliser les classes
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript est un langage fondé sur les prototypes&nbsp;: les comportements d'un objet sont déterminés par ses propres propriétés et par celles de son prototype. Cependant, avec l'ajout des [classes](/fr/docs/Web/JavaScript/Reference/Classes), la création de hiérarchies d'objets et l'héritage de propriétés et de leurs valeurs s'alignent davantage avec d'autres langages orientés objet comme Java. Dans cette section, nous montrerons comment créer des objets à partir de classes.

Dans de nombreux autres langages, les _classes_ (ou constructeurs) sont clairement distinguées des _objets_ (ou instances). En JavaScript, les classes sont principalement une abstraction par-dessus le mécanisme d'héritage prototypal existant&nbsp;: tous les schémas sont convertibles en héritage basé sur les prototypes. Les classes sont elles-mêmes des valeurs JavaScript normales et possèdent leurs propres chaînes de prototypes. En fait, la plupart des fonctions JavaScript simples peuvent être utilisées comme constructeurs&nbsp;: on utilise l'opérateur `new` avec une fonction constructeur pour créer un nouvel objet.

Nous allons manipuler dans ce tutoriel le modèle de classes bien abstrait et discuter des sémantiques qu'offrent les classes. Si vous voulez approfondir le système de prototypes sous-jacent, lisez le guide [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Ce chapitre suppose que vous êtes déjà quelque peu familier avec JavaScript et que vous avez utilisé des objets ordinaires.

## Vue d'ensemble des classes

Si vous avez déjà pratiqué JavaScript, ou suivi ce guide, vous avez probablement déjà utilisé des classes, même sans en avoir créé. Par exemple, ceci [peut vous sembler familier](/fr/docs/Web/JavaScript/Guide/Representing_dates_times)&nbsp;:

```js
const grandJour = new Date(2019, 6, 19);
console.log(grandJour.toLocaleDateString());
if (grandJour.getTime() < Date.now()) {
  console.log("Il était une fois...");
}
```

À la première ligne, nous avons créé une instance de la classe [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date), appelée `grandJour`. À la deuxième ligne, nous appelons une [méthode](/fr/docs/Glossary/Method) [`toLocaleDateString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) sur l'instance `grandJour`, qui renvoie une chaîne. Ensuite, nous comparons deux nombres&nbsp;: l'un renvoyé par la méthode [`getTime()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime), l'autre obtenu directement depuis la classe `Date` elle‑même, via [`Date.now()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` est une classe intégrée de JavaScript. À partir de cet exemple, on peut dégager quelques idées sur ce que font les classes&nbsp;:

- Les classes créent des objets via l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new).
- Chaque objet se voit ajouter certaines propriétés (données ou méthodes) par la classe.
- La classe conserve aussi des propriétés (données ou méthodes) pour elle‑même, généralement utilisées pour interagir avec les instances.

Cela correspond à trois fonctionnalités clés des classes&nbsp;:

- Constructeur&nbsp;;
- Méthodes et champs d'instance&nbsp;;
- Méthodes et champs statiques.

## Déclarer une classe

Les classes sont généralement créées avec des _déclarations de classe_.

```js
class MaClasse {
  // corps de classe…
}
```

À l'intérieur du corps d'une classe, plusieurs éléments sont possibles.

```js
class MaClasse {
  // Constructeur
  constructor() {
    // corps du constructeur
  }
  // Champ d'instance
  monChamp = "toto";
  // Méthode d'instance
  maMethode() {
    // corps de maMethode
  }
  // Champ statique
  static monChampStatique = "tata";
  // Méthode statique
  static maMethodeStatique() {
    // corps de maMethodeStatique
  }
  // Bloc statique
  static {
    // code d'initialisation statique
  }
  // Les champs, méthodes, champs statiques et méthodes statiques
  // existent aussi en variantes « privées »
  #monChampPrive = "tata";
}
```

Si vous venez d'un monde pré‑ES6, vous êtes peut‑être plus habitué·e à utiliser des fonctions comme constructeurs. Le modèle ci‑dessus se traduirait approximativement par le schéma suivant avec des fonctions constructrices&nbsp;:

```js
function MaClasse() {
  this.monChamp = "toto";
  // corps du constructeur
}
MaClasse.monChampStatique = "tata";
MaClasse.maMethodeStatique = function () {
  // corps de maMethodeStatique
};
MaClasse.prototype.maMethode = function () {
  // corps de maMethode
};

(function () {
  // code d'initialisation statique
})();
```

> [!NOTE]
> Les champs et méthodes privés sont de nouvelles fonctionnalités des classes, sans équivalent trivial avec les fonctions constructrices.

### Instancier une classe

Après la déclaration d'une classe, vous pouvez en créer des instances avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new).

```js
const monInterface = new MaClasse();
console.log(monInterface.monChamp); // 'toto'
monInterface.maMethode();
```

Les fonctions constructrices classiques peuvent être appelées avec `new` ou sans `new`. En revanche, tenter «&nbsp;d'appeler&nbsp;» une classe sans `new` produit une erreur.

```js
const monInterface = MaClasse(); // TypeError: Class constructor MaClasse cannot be invoked without 'new'
```

### Remontée des déclarations de classe

Contrairement aux déclarations de fonction, les déclarations de classe ne sont pas [hissées](/fr/docs/Glossary/Hoisting) (ou, selon certaines interprétations, hissées mais soumises à la zone morte temporelle), ce qui signifie que vous ne pouvez pas utiliser une classe avant sa déclaration.

```js
new MaClasse(); // ReferenceError: Cannot access 'MaClasse' before initialization

class MaClasse {}
```

Ce comportement est similaire à celui des variables déclarées avec [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let) et [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const).

### Expressions de classe

Comme pour les fonctions, les déclarations de classe ont aussi des équivalents sous forme d'expressions.

```js
const MaClasse = class {
  // corps de classe…
};
```

Les expressions de classe peuvent aussi être nommées. Le nom de l'expression n'est visible qu'à l'intérieur du corps de la classe.

```js
const MaClasse = class MaClasseNomLong {
  // Corps de classe. Ici, MaClasse et MaClasseNomLong désignent la même classe.
};
new MaClasseNomLong(); // ReferenceError: MaClasseNomLong is not defined
```

## Constructeur

Le rôle le plus important d'une classe est probablement d'agir comme «&nbsp;usine&nbsp;» à objets. Par exemple, lorsque nous utilisons le constructeur `Date`, nous attendons qu'il nous fournisse un nouvel objet représentant les données de date passées — que nous pouvons ensuite manipuler avec d'autres méthodes exposées par l'instance. Dans les classes, la création d'instances est effectuée par le [constructeur](/fr/docs/Web/JavaScript/Reference/Classes/constructor).

Par exemple, nous allons créer une classe `Color` qui représente une couleur précise. Les utilisateur·ice·s créent des couleurs en passant un triplet [RGB](/fr/docs/Glossary/RGB).

```js
class Color {
  constructor(r, g, b) {
    // Affecter les valeurs RGB en propriété de `this`.
    this.values = [r, g, b];
  }
}
```

Ouvrez les outils de développement de votre navigateur, collez le code ci‑dessus dans la console, puis créez une instance&nbsp;:

```js
const red = new Color(255, 0, 0);
console.log(red);
```

Vous devriez voir une sortie de ce type&nbsp;:

```plain
Object { values: (3) […] }
  values: Array(3) [ 255, 0, 0 ]
```

Vous avez créé avec succès une instance de `Color`, et cette instance possède une propriété `values`, qui est un tableau des valeurs RGB passées. C'est à peu près équivalent à&nbsp;:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

La syntaxe du constructeur est exactement la même qu'une fonction normale — ce qui signifie que vous pouvez utiliser d'autres syntaxes, comme les [paramètres rest](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters)&nbsp;:

```js
class Color {
  constructor(...values) {
    this.values = values;
  }
}

const red = new Color(255, 0, 0);
// Crée une instance de la même forme que ci‑dessus.
```

Chaque appel à `new` crée une instance différente.

```js
const red = new Color(255, 0, 0);
const anotherRed = new Color(255, 0, 0);
console.log(red === anotherRed); // false
```

Dans le constructeur d'une classe, la valeur de `this` pointe vers l'instance nouvellement créée. Vous pouvez lui attribuer des propriétés, ou lire des propriétés existantes (notamment des méthodes, abordées ensuite).

La valeur `this` est automatiquement renvoyée comme résultat de `new`. Il est déconseillé de renvoyer une valeur depuis le constructeur — car si vous renvoyez une valeur non primitive, elle deviendra la valeur de l'expression `new`, et la valeur de `this` sera ignorée. (Voir la [description de `new`](/fr/docs/Web/JavaScript/Reference/Operators/new#description) pour plus de détails.)

```js
class MaClasse {
  constructor() {
    this.monChamp = "toto";
    return {};
  }
}

console.log(new MaClasse().monChamp); // undefined
```

## Méthodes d'instance

Si une classe n'a qu'un constructeur, elle ne diffère pas beaucoup d'une fonction usine `createX` qui crée de simples objets. La force des classes est qu'elles servent de «&nbsp;modèles&nbsp;» assignant automatiquement des méthodes aux instances.

Par exemple, pour les instances de `Date`, vous pouvez utiliser un ensemble de méthodes pour récupérer différentes informations à partir d'une même valeur de date, comme l'[année](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), le [mois](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), le [jour de la semaine](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay), etc. Vous pouvez aussi définir ces valeurs via les variantes `setX` comme [`setFullYear`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear).

Pour notre propre classe `Color`, on peut ajouter une méthode `getRed` qui renvoie la valeur rouge de la couleur.

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255
```

Sans méthodes, on pourrait être tenté de définir la fonction dans le constructeur&nbsp;:

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
    this.getRed = function () {
      return this.values[0];
    };
  }
}
```

Cela fonctionne aussi. Problème&nbsp;: cela crée une nouvelle fonction à chaque création d'instance `Color`, même si elles font toutes la même chose&nbsp;!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

À l'inverse, si vous utilisez une méthode, elle sera partagée entre toutes les instances. Une fonction peut être partagée entre toutes les instances tout en ayant un comportement différent selon l'instance qui l'appelle, car la valeur de `this` diffère. Si vous vous demandez _où_ est stockée cette méthode&nbsp;: elle est définie sur le prototype de toutes les instances, c'est‑à‑dire `Color.prototype`, comme expliqué en détail dans [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

De même, on peut créer une méthode `setRed` qui définit la composante rouge de la couleur.

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const rouge = new Color(255, 0, 0);
rouge.setRed(0);
console.log(rouge.getRed()); // 0 ; on devrait l'appeler « noir » à ce stade !
```

## Champs privés

Vous vous demandez peut‑être&nbsp;: pourquoi s'embêter avec `getRed` et `setRed` alors qu'on peut accéder directement au tableau `values` sur l'instance&nbsp;?

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
}

const rouge = new Color(255, 0, 0);
rouge.values[0] = 0;
console.log(rouge.values[0]); // 0
```

Il existe une philosophie en programmation orientée objet appelée «&nbsp;encapsulation&nbsp;». Cela signifie qu'il ne faut pas accéder à l'implémentation interne d'un objet, mais utiliser des méthodes bien abstraites pour interagir avec lui. Par exemple, si nous décidions soudain de représenter les couleurs en [HSL](/fr/docs/Web/CSS/Reference/Values/color_value/hsl) plutôt qu'en RGB&nbsp;:

```js
class Color {
  constructor(r, g, b) {
    // values est maintenant un tableau HSL !
    this.values = rgbToHSL([r, g, b]);
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const rouge = new Color(255, 0, 0);
console.log(rouge.values[0]); // 0 ; ce n'est plus 255, car H vaut 0 pour le rouge pur
```

L'hypothèse des utilisateur·ice·s selon laquelle `values` représente la valeur RGB s'effondre, et leur logique peut casser. Donc, en tant que créateur·ice d'une classe, vous voudrez masquer la structure de données interne de votre instance à vos utilisateur·ice·s, à la fois pour garder une API propre et pour éviter que leur code ne casse lors de «&nbsp;refactorings inoffensifs&nbsp;». Dans les classes, cela se fait via les [_champs privés_](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements).

Un champ privé est un identifiant préfixé par `#`. Le dièse fait partie intégrante du nom, ce qui garantit qu'un champ privé ne peut jamais entrer en collision avec un champ ou une méthode publique. Pour référencer un champ privé où que ce soit dans la classe, vous devez le _déclarer_ dans le corps de la classe (on ne peut pas créer un élément privé à la volée). Hormis cela, un champ privé est globalement équivalent à une propriété normale.

```js
class Color {
  // Déclaration : chaque instance de Color a un champ privé #values.
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    this.#values[0] = value;
  }
}

const rouge = new Color(255, 0, 0);
console.log(rouge.getRed()); // 255
```

Accéder aux champs privés en dehors de la classe est une erreur de syntaxe précoce. Le langage peut l'empêcher car `#privateField` est une syntaxe spéciale, ce qui permet une analyse statique de toutes les utilisations de champs privés avant même l'évaluation du code.

```js-nolint example-bad
console.log(rouge.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Le code exécuté dans la console de Chrome peut accéder à des éléments privés en dehors de la classe. Il s'agit d'un assouplissement spécifique aux DevTools par rapport à la restriction de syntaxe JavaScript.

Les champs privés en JavaScript sont _strictement privés_ (<i lang="en">hard private</i> en anglais)&nbsp;: si la classe n'expose pas de méthodes pour accéder à ces champs, il n'existe absolument aucun mécanisme pour les récupérer depuis l'extérieur. Vous pouvez donc refactorer librement les champs privés de votre classe tant que le comportement des méthodes exposées reste inchangé.

Après avoir rendu `values` privé, on peut enrichir `getRed` et `setRed` plutôt que d'en faire de simples relais. Par exemple, on peut vérifier dans `setRed` que la valeur R est valide&nbsp;:

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Invalid R value");
    }
    this.#values[0] = value;
  }
}

const rouge = new Color(255, 0, 0);
rouge.setRed(1000); // RangeError: Invalid R value
```

Si nous laissions la propriété `values` exposée, les utilisateur·ice·s pourraient aisément contourner ce contrôle en affectant directement `values[0]` et créer des couleurs invalides. Avec une API bien encapsulée, on rend le code plus robuste et on évite des erreurs logiques en aval.

Une méthode de classe peut lire les champs privés d'autres instances, pourvu qu'elles appartiennent à la même classe.

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    // #values n'a pas besoin d'être lu depuis this :
    // on peut accéder aux champs privés d'autres instances
    // de la même classe.
    return this.#values[0] - anotherColor.#values[0];
  }
}

const rouge = new Color(255, 0, 0);
const crimson = new Color(220, 20, 60);
rouge.redDifference(crimson); // 35
```

En revanche, si `anotherColor` n'est pas une instance de Color, `#values` n'existe pas. (Même si une autre classe possède un champ privé `#values` de même nom, il ne référence pas la même chose et n'est pas accessible ici.) Tenter d'accéder à un élément privé inexistant lève une erreur au lieu de renvoyer `undefined` comme le feraient des propriétés normales. Si vous ne savez pas si un champ privé existe sur un objet et souhaitez y accéder sans `try`/`catch`, utilisez l'opérateur [`in`](/fr/docs/Web/JavaScript/Reference/Operators/in).

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    if (!(#values in anotherColor)) {
      throw new TypeError("Color instance expected");
    }
    return this.#values[0] - anotherColor.#values[0];
  }
}
```

> [!NOTE]
> Gardez à l'esprit que `#` est une syntaxe d'identifiant spéciale&nbsp;: vous ne pouvez pas utiliser le nom du champ comme une chaîne. `"#values" in anotherColor` rechercherait une propriété littéralement nommée `"#values"`, et non un champ privé.

Il existe des limitations avec les éléments privés&nbsp;: un même nom ne peut pas être déclaré deux fois dans une classe, et ils ne peuvent pas être supprimés. Les deux cas génèrent des erreurs de syntaxe précoces.

```js-nolint example-bad
class MauvaisesIdees {
  #prenom;
  #prenom; // erreur de syntaxe ici
  #nom;
  constructor() {
    delete this.#nom; // erreur de syntaxe également
  }
}
```

Les méthodes, [accesseurs et mutateurs](#champs_daccesseur) peuvent aussi être privés. Ils sont utiles lorsqu'un traitement complexe doit rester interne à la classe, sans qu'aucune autre partie du code ne puisse l'appeler.

Par exemple, imaginons des [éléments HTML personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) devant effectuer une action un peu complexe lors d'un clic/tap/activation. De plus, ces actions doivent être limitées à cette classe, car aucune autre partie du JavaScript ne doit (ni ne devrait) y accéder.

```js
class Counter extends HTMLElement {
  #xValue = 0;
  constructor() {
    super();
    this.onclick = this.#clicked.bind(this);
  }
  get #x() {
    return this.#xValue;
  }
  set #x(value) {
    this.#xValue = value;
    window.requestAnimationFrame(this.#render.bind(this));
  }
  #clicked() {
    this.#x++;
  }
  #render() {
    this.textContent = this.#x.toString();
  }
  connectedCallback() {
    this.#render();
  }
}

customElements.define("num-counter", Counter);
```

Ici, presque tous les champs et méthodes sont privés à la classe. L'interface exposée au reste du code est donc similaire à celle d'un élément HTML natif. Aucune autre partie du programme ne peut influencer l'interne de `Counter`.

## Champs d'accesseur

`color.getRed()` et `color.setRed()` permettent de lire et d'écrire la valeur rouge d'une couleur. Si vous venez de langages comme Java, ce motif vous est très familier. Cependant, en JavaScript, il reste peu ergonomique d'utiliser des méthodes pour simplement accéder à une propriété. Les _champs d'accesseur_ permettent de manipuler quelque chose comme s'il s'agissait d'une «&nbsp;vraie propriété&nbsp;»&nbsp;:

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
  set red(value) {
    this.values[0] = value;
  }
}

const rouge = new Color(255, 0, 0);
rouge.red = 0;
console.log(rouge.red); // 0
```

On dirait que l'objet a une propriété `red` — mais en réalité, aucune propriété de ce nom n'existe sur l'instance&nbsp;! Il n'y a que deux méthodes, préfixées par `get` et `set`, qui permettent de les manipuler comme des propriétés.

Si un champ n'a qu'un accesseur mais pas de mutateur, il est effectivement en lecture seule.

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
}

const rouge = new Color(255, 0, 0);
rouge.red = 0;
console.log(rouge.red); // 255
```

En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), la ligne `rouge.red = 0` lèvera une erreur de type&nbsp;: «&nbsp;Cannot set property red of #\<Color> which has only a getter&nbsp;». En mode non strict, l'affectation est silencieusement ignorée.

## Champs publics

Les champs privés ont leurs homologues publics, qui permettent à chaque instance de posséder une propriété. Les champs sont en général conçus pour être indépendants des paramètres du constructeur.

```js
class MaClasse {
  nombreAleatoire = Math.random();
}
console.log(new MaClasse().nombreAleatoire); // 0.5
console.log(new MaClasse().nombreAleatoire); // 0.3
```

Les champs publics sont presque équivalents à l'affectation d'une propriété sur `this`. Par exemple, l'exemple ci‑dessus peut aussi s'écrire&nbsp;:

```js
class MaClasse {
  constructor() {
    this.nombreAleatoire = Math.random();
  }
}
```

## Propriétés statiques

Avec l'exemple `Date`, nous avons aussi rencontré la méthode [`Date.now()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/now), qui renvoie la date courante. Cette méthode n'appartient à aucune instance&nbsp;: elle appartient à la classe elle‑même. Cependant, elle est placée sur la classe `Date` plutôt qu'exposée comme une fonction globale `DateNow()`, car elle est surtout utile lorsqu'on manipule des instances de date.

> [!NOTE]
> Préfixer les méthodes utilitaires par ce qu'elles manipulent s'appelle «&nbsp;nommage par espace de noms&nbsp;» (<i lang="en">namespacing</i> en anglais) et est une bonne pratique. Par exemple, en plus de l'ancienne méthode non préfixée [`parseInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt), JavaScript a ajouté plus tard la méthode préfixée [`Number.parseInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) pour indiquer qu'elle concerne les nombres.

Les [_propriétés statiques_](/fr/docs/Web/JavaScript/Reference/Classes/static) regroupent des fonctionnalités de classe définies sur la classe elle‑même, et non sur ses instances. Cela inclut&nbsp;:

- Les méthodes statiques
- Les champs statiques
- Les accesseurs et mutateurs statiques

Chaque élément possède aussi son équivalent privé. Par exemple, pour notre classe `Color`, on peut créer une méthode statique qui vérifie si un triplet donné est un RGB valide&nbsp;:

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

Les propriétés statiques sont très proches de leurs homologues d'instance, sauf que&nbsp;:

- Elles sont préfixées par `static`, et
- Elles ne sont pas accessibles depuis les instances.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Il existe aussi une construction particulière appelée [_bloc d'initialisation statique_](/fr/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), qui est un bloc de code exécuté au premier chargement de la classe.

```js
class MaClasse {
  static {
    MaClasse.maProprieteStatique = "toto";
  }
}

console.log(MaClasse.maProprieteStatique); // 'toto'
```

Les blocs d'initialisation statique sont presque équivalents à l'exécution immédiate d'un code juste après la déclaration de la classe. La seule différence est qu'ils ont accès aux éléments privés statiques.

## Extensions et héritage

Une caractéristique clé apportée par les classes (en plus d'une encapsulation ergonomique avec les champs privés) est l'_héritage_, qui permet à un objet de «&nbsp;réutiliser&nbsp;» une grande partie du comportement d'un autre objet, tout en surchargeant ou enrichissant certaines parties avec sa propre logique.

Par exemple, supposons que notre classe `Color` doive désormais gérer la transparence. On pourrait être tenté d'ajouter un nouveau champ indiquant la transparence&nbsp;:

```js
class Color {
  #values;
  constructor(r, g, b, a = 1) {
    this.#values = [r, g, b, a];
  }
  get alpha() {
    return this.#values[3];
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#values[3] = value;
  }
}
```

Cependant, cela signifie que chaque instance — même la grande majorité qui ne sont pas transparentes (alpha à 1) — devra porter la valeur alpha supplémentaire, ce qui manque d'élégance. De plus, si les fonctionnalités continuent de croître, notre classe `Color` deviendra volumineuse et difficile à maintenir.

En programmation orientée objet, on créera plutôt une _classe dérivée_. La classe dérivée a accès à toutes les propriétés publiques de la classe parente. En JavaScript, les classes dérivées se déclarent avec la clause [`extends`](/fr/docs/Web/JavaScript/Reference/Classes/extends), qui indique la classe étendue.

```js
class ColorWithAlpha extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#alpha = value;
  }
}
```

Plusieurs points importants apparaissent immédiatement. D'abord, dans le constructeur, nous appelons `super(r, g, b)`. Le langage impose d'appeler [`super()`](/fr/docs/Web/JavaScript/Reference/Operators/super) avant d'accéder à `this`. L'appel à `super()` invoque le constructeur de la classe parente pour initialiser `this` — ici cela revient grosso modo à `this = new Color(r, g, b)`. Vous pouvez écrire du code avant `super()`, mais vous ne pouvez pas accéder à `this` avant `super()` — le langage interdit l'accès à un `this` non initialisé.

Une fois la classe parente terminée, la classe dérivée peut appliquer sa logique. Ici, nous ajoutons un champ privé `#alpha` et fournissons un couple accesseur/mutateur pour l'exposer.

Une classe dérivée hérite de toutes les méthodes de son parent. Par exemple, bien que `ColorWithAlpha` ne déclare pas l'accesseur `get red()` lui‑même, vous pouvez toujours accéder à `red` car ce comportement est fourni par la classe parente&nbsp;:

```js
const couleur = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(couleur.red); // 255
```

Les classes dérivées peuvent aussi surcharger des méthodes du parent. Par exemple, toutes les classes héritent implicitement de la classe [`Object`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object), qui définit des méthodes de base comme [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString). Cependant, la méthode de base `toString()` est notoirement peu utile, car elle affiche `[object Object]` dans la plupart des cas&nbsp;:

```js
console.log(red.toString()); // [object Object]
```

À la place, notre classe peut la surcharger pour afficher les valeurs RGB de la couleur&nbsp;:

```js
class Color {
  #values;
  // …
  toString() {
    return this.#values.join(", ");
  }
}

console.log(new Color(255, 0, 0).toString()); // '255, 0, 0'
```

Dans les classes dérivées, vous pouvez accéder aux méthodes de la classe parente via `super`. Cela permet de construire des méthodes d'enrichissement et d'éviter la duplication de code.

```js
class ColorWithAlpha extends Color {
  #alpha;
  // …
  toString() {
    // Appeler la toString() parente et compléter sa valeur de retour
    return `${super.toString()}, ${this.#alpha}`;
  }
}

console.log(new ColorWithAlpha(255, 0, 0, 0.5).toString()); // '255, 0, 0, 0.5'
```

Quand vous utilisez `extends`, les méthodes statiques s'héritent aussi, donc vous pouvez également les surcharger ou les enrichir.

```js
class ColorWithAlpha extends Color {
  // …
  static isValid(r, g, b, a) {
    // Appeler isValid() du parent et compléter le résultat
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
  }
}

console.log(ColorWithAlpha.isValid(255, 0, 0, -1)); // false
```

Les classes dérivées n'ont pas accès aux champs privés de la classe parente — c'est un autre aspect des champs privés «&nbsp;strictement privés&nbsp;». Les champs privés sont limités au corps de la classe elle‑même et n'accordent l'accès à _aucun_ code extérieur.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Une classe ne peut étendre qu'une seule classe. Cela évite les problèmes de l'héritage multiple comme le [problème du diamant](https://fr.wikipedia.org/wiki/Probl%C3%A8me_du_diamant). Cependant, du fait de la nature dynamique de JavaScript, il reste possible d'obtenir des effets d'héritage multiple via la composition de classes et les [mixin](/fr/docs/Web/JavaScript/Reference/Classes/extends#mix-ins).

Les instances de classes dérivées sont aussi des [instances de](/fr/docs/Web/JavaScript/Reference/Operators/instanceof) la classe de base.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Pourquoi des classes ?

Ce guide a été pragmatique jusqu'ici&nbsp;: nous nous concentrons sur _comment_ utiliser les classes, mais une question demeure&nbsp;: _pourquoi_ utiliser une classe&nbsp;? Réponse&nbsp;: cela dépend.

Les classes introduisent un _paradigme_, une façon d'organiser votre code. Elles sont le fondement de la programmation orientée objet, basée sur des concepts tels que l'[héritage](<https://fr.wikipedia.org/wiki/H%C3%A9ritage_(programmation_objet)>) et le [polymorphisme](<https://fr.wikipedia.org/wiki/Polymorphisme_(informatique)>) (en particulier le polymorphisme par sous‑type). Cependant, de nombreuses personnes sont philosophiquement opposées à certaines pratiques de l'OOP et n'utilisent donc pas les classes.

Par exemple, un aspect qui rend les objets `Date` tristement célèbres est qu'ils sont _mutables_.

```js
function incrementDay(date) {
  return date.setDate(date.getDate() + 1);
}
const date = new Date(); // 2019-06-19
const newDay = incrementDay(date);
console.log(newDay); // 2019-06-20
// L'ancienne date est modifiée aussi !?
console.log(date); // 2019-06-20
```

Mutabilité et état interne sont des aspects importants de l'orienté objet, mais rendent souvent le code difficile à raisonner&nbsp;: une opération apparemment anodine peut avoir des effets de bord inattendus et modifier le comportement ailleurs dans le programme.

Pour réutiliser du code, on a tendance à étendre des classes, ce qui peut créer de grandes hiérarchies d'héritage.

![Un arbre d'héritage POO typique, avec cinq classes et trois niveaux](figure8.1.png)

Cependant, il est souvent difficile de décrire proprement l'héritage lorsqu'une classe ne peut étendre qu'une seule autre. Souvent, nous voulons le comportement de plusieurs classes. En Java, cela passe par des interfaces&nbsp;; en JavaScript, on peut utiliser des mixin. Mais au final, ce n'est pas très pratique.

Côté positif, les classes offrent un moyen puissant d'organiser le code à un niveau plus élevé. Par exemple, sans la classe `Color`, il faudrait écrire une douzaine de fonctions utilitaires&nbsp;:

```js
function isRed(color) {
  return color.red === 255;
}
function isValidColor(color) {
  return (
    color.red >= 0 &&
    color.red <= 255 &&
    color.green >= 0 &&
    color.green <= 255 &&
    color.blue >= 0 &&
    color.blue <= 255
  );
}
// …
```

Avec des classes, on peut tout regrouper sous l'«&nbsp;espace de noms&nbsp;» `Color`, ce qui améliore la lisibilité. De plus, l'introduction des champs privés permet de cacher certaines données aux utilisateur·ice·s, créant une API propre.

De manière générale, envisagez d'utiliser des classes lorsque vous voulez créer des objets qui stockent leurs propres données internes et exposent de nombreux comportements. Exemples parmi les classes intégrées de JavaScript&nbsp;:

- Les classes [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) et [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set) stockent des collections d'éléments et permettent d'y accéder par clé avec `get()`, `set()`, `has()`, etc.
- La classe [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) stocke une date sous forme d'horodatage Unix (un nombre) et permet de la formater, la mettre à jour et lire des composants individuels de date.
- La classe [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error) stocke des informations sur une exception particulière, y compris le message d'erreur, la pile d'appels, la cause, etc. C'est l'une des rares classes dotées d'une hiérarchie riche&nbsp;: plusieurs classes intégrées comme [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) et [`ReferenceError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) étendent `Error`. Pour les erreurs, cet héritage permet d'affiner la sémantique&nbsp;: chaque classe d'erreur représente un type spécifique, facilement vérifiable avec [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof).

JavaScript fournit un mécanisme pour organiser votre code de manière objectivement orientée objet, mais l'opportunité et la manière de l'utiliser relèvent entièrement du jugement du·de la programmeur·euse.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
