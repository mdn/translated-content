---
title: Closures (Fermetures)
slug: Web/JavaScript/Closures
---

{{jsSidebar("Intermediate")}}

Une **fermeture** est la paire formée d'une fonction et des références à son état environnant (**l'environnement lexical**). En d'autres termes, une fermeture donne accès à la portée d'une fonction externe à partir d'une fonction interne (on dit aussi que la fonction «&nbsp;capture son environnement&nbsp;»). En JavaScript, une fermeture est créée chaque fois qu'une fonction est créée.

## Portée

Dans l'exemple suivant&nbsp;:

```js
function init() {
  var nom = "Mozilla"; // nom est une variable locale de init
  function afficheNom() {
    // afficheNom est une fonction interne de init
    console.log(nom); // ici nom est une variable libre (définie dans la fonction parente)
  }
  afficheNom();
}
init();
```

La fonction `init` créé une variable locale `nom` et une fonction interne `afficheNom`. La fonction interne est seulement visible de l'intérieur de `init`. Contrairement à `init`, `afficheNom` ne possède pas de variable locale propre, mais elle utilise la variable `nom` de la fonction parente (ceci dit `afficheNom` pourrait utiliser ses variables locales propres si elle en avait).

Vous pouvez exécuter le code sur cette [page](https://jsfiddle.net/xAFs9/3/) pour voir son fonctionnement. On a ici un exemple de portée lexicale&nbsp;: en JavaScript, la portée d'une variable est définie par son emplacement dans le code source (elle apparaît de façon _lexicale_), les fonctions imbriquées ont ainsi accès aux variables déclarées dans les portées parentes.

## Fermeture

Étudions l'exemple suivant&nbsp;:

```js
function creerFonction() {
  var nom = "Mozilla";
  function afficheNom() {
    console.log(nom);
  }
  return afficheNom;
}

var maFonction = creerFonction();
maFonction();
```

Ce code produit le même résultat que l'appel à `init()` étudié précédemment&nbsp;: "Mozilla" est affiché dans la console. L'intérêt de ce code est qu'une fermeture contenant la fonction `afficheNom()` est renvoyée par la fonction parente, _avant d'être exécutée_.

Le code continue à fonctionner, ce qui peut paraître contre-intuitif au regard de la syntaxe utilisée. Usuellement, les variables locales d'une fonction n'existent que pendant l'exécution d'une fonction. Une fois que `creerFonction()` a fini son exécution, on aurait pu penser que la variable `nom` n'est plus accessible. Cependant, le code fonctionne&nbsp;: en JavaScript, la variable est donc accessible d'une certaine façon.

L'explication est la suivante&nbsp;: `maFonction` est une fermeture. La fermeture combine la fonction `afficheNom` et son environnement. Cet environnement est composé de toutes les variables locales accessibles (dans la portée) à la création de la fermeture. Ici `maFonction` est une fermeture qui contient la fonction `afficheNom` et une référence à la variable `var nom = "Mozilla"` qui existait lorsque la fermeture a été créée. L'instance de `afficheNom` conserve une référence à son environnement lexical, dans lequel `nom` existe. Pour cette raison, lorsque `maFonction` est invoquée, la variable `nom` reste disponible et "Mozilla" est transmis à `console.log`.

Voici un exemple un peu plus intéressant, une fonction `ajouterA`&nbsp;:

```js
function ajouterA(x) {
  return function (y) {
    return x + y;
  };
}

var ajouter_5 = ajouterA(5);
var ajouter_10 = ajouterA(10);

console.log(ajouter_5(2)); // 7
console.log(ajouter_10(2)); // 12
```

On définit une fonction `ajouterA(x)` avec un seul argument `x` et qui renvoie une fonction anonyme. La fonction anonyme a un seul argument `y`, et renvoie la somme de `x` et `y`.

La fonction `ajouterA` permet de créer des fermetures qui font la somme de leur argument et d'un nombre fixé. Dans l'exemple ci-dessus, on crée `ajouter_5` et `ajouter_10`. Elles partagent la même fonction, mais des environnements différents. Dans `ajouter_5`, `x` vaut 5&nbsp;; dans `ajouter_10`, `x` vaut 10.

## Les fermetures en pratique

On a vu la théorie décrivant les fermetures. Est-ce qu'elles sont utiles pour autant ? Une fermeture permet d'associer des données (l'environnement) avec une fonction qui agit sur ces données. On peut faire un parallèle avec la programmation orientée objet, car les objets permettent d'associer des données (les propriétés) avec des méthodes.

Ainsi, on peut utiliser une fermeture pour tout endroit où on utiliserait un objet et ce avec une seule méthode.

Beaucoup de code JavaScript utilisé sur le Web gère des événements&nbsp;: on définit un comportement, puis on l'attache à un événement déclenché par l'utilisateur (tel un clic ou une frappe clavier). Notre code est généralement une fonction de rappel (ou _callback_) exécutée en réponse à l'événement.

Voici un exemple concret&nbsp;: si on souhaite ajouter des boutons à une page afin d'ajuster la taille du texte, on pourrait définir la taille de police de l'élément `body` en pixels, et celles des autres éléments relativement à cette première taille grâce à l'unité `em`&nbsp;:

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}
```

Les boutons vont ensuite changer la taille de la police de l'élément `body`, ce changement étant répercuté aux autres éléments grâce aux unités relatives.

Voici le code JavaScript qui correspond&nbsp;:

```js
function fabriqueRedimensionneur(taille) {
  return function () {
    document.body.style.fontSize = taille + "px";
  };
}

var taille12 = fabriqueRedimensionneur(12);
var taille14 = fabriqueRedimensionneur(14);
var taille16 = fabriqueRedimensionneur(16);
```

`taille12`, `taille14`, et `taille16` sont désormais des fermetures qui peuvent, respectivement, redimensionner le texte de l'élément `body` à 12, 14, ou 16 pixels. On peut les attacher aux boutons de la façon suivantes&nbsp;:

```js
document.getElementById("taille-12").onclick = taille12;
document.getElementById("taille-14").onclick = taille14;
document.getElementById("taille-16").onclick = taille16;
```

```html
<a href="#" id="taille-12">12</a>
<a href="#" id="taille-14">14</a>
<a href="#" id="taille-16">16</a>
```

Vous pouvez exécuter le code correspondant sur [JSFiddle](https://jsfiddle.net/vnkuZ/7726/).

## Émuler des méthodes privées avec des fermetures

Certains langages de programmation, comme Java, permettent d'avoir des méthodes privées, c'est-à-dire qu'on ne peut les utiliser qu'au sein de la même classe.

JavaScript ne permet pas de faire cela de façon native. En revanche, on peut émuler ce comportement grâce aux fermetures. Les méthodes privées ne sont pas seulement utiles en termes de restriction d'accès au code, elles permettent également de gérer un espace de nom (_namespace_) global qui isole les méthodes secondaires de l'interface publique du code ainsi rendu plus propre.

Voici comment définir une fonction publique accédant à des fonctions et des variables privées en utilisant des fermetures. Cette façon de procéder est également connue comme le patron de conception [module](https://en.wikipedia.org/wiki/Module_pattern)&nbsp;:

```js
var compteur = (function () {
  var compteurPrive = 0;
  function changeValeur(val) {
    compteurPrive += val;
  }
  return {
    increment: function () {
      changeValeur(1);
    },
    decrement: function () {
      changeValeur(-1);
    },
    valeur: function () {
      return compteurPrive;
    },
  };
})();

console.log(compteur.valeur()); /* Affiche 0 */

compteur.increment();
compteur.increment();
console.log(compteur.valeur()); /* Affiche 2 */

compteur.decrement();
console.log(compteur.valeur()); /* Affiche 1 */
```

Il y a beaucoup de différences par rapport aux exemples précédents. Au lieu de retourner une simple fonction, on retourne un objet anonyme qui contient 3 fonctions. Et ces 3 fonctions partagent le même environnement. L'objet retourné est affecté à la variable `compteur`, et les 3 fonctions sont alors accessibles sous les noms `compteur.increment`, `compteur.decrement`, et `compteur.valeur`.

L'environnement partagé vient du corps de la fonction anonyme qui est exécutée dès sa définition complète (on parle d'expression de fonction immédiatement invoquée, abrégé en anglais en [IIFE](/fr/docs/Glossary/IIFE)). L'environnement en question contient deux éléments privés&nbsp;: une variable `compteurPrive` et une fonction `changeValeur`. Aucun de ces deux éléments ne peut être utilisé en dehors de la fonction anonyme&nbsp;; seules les trois fonctions renvoyées par la fonction anonyme sont publiques.

Ces trois fonctions publiques sont des fermetures qui partagent le même environnement. Grâce à la portée lexicale, chacune a accès à `compteurPrive` et à `changeValeur`.

On remarquera qu'on définit une fonction anonyme qui crée un compteur puis qu'on l'appelle immédiatement pour assigner le résultat à la variable `compteur`. On pourrait stocker cette fonction dans une variable puis l'appeler plusieurs fois afin de créer plusieurs compteurs.

```js
var creerCompteur = function () {
  var compteurPrive = 0;
  function changeValeur(val) {
    compteurPrive += val;
  }
  return {
    increment: function () {
      changeValeur(1);
    },
    decrement: function () {
      changeValeur(-1);
    },
    valeur: function () {
      return compteurPrive;
    },
  };
};

var compteur1 = creerCompteur();
var compteur2 = creerCompteur();

console.log(compteur1.valeur()); /* Affiche 0 */

compteur1.increment();
compteur1.increment();
console.log(compteur1.valeur()); /* Affiche 2 */

compteur1.decrement();
console.log(compteur1.valeur()); /* Affiche 1 */
console.log(compteur2.valeur()); /* Affiche 0 */
```

Ici on peut voir que chacun des deux compteurs est indépendant de l'autre. Un nouvel environnement est instancié à chaque appel `creerCompteur()`.

L'utilisation de fermetures permet ainsi de bénéficier de certains concepts liés à la programmation orientée objet comme l'encapsulation et la dissimulation de données.

## Chaînage des portées pour les fermetures

Une fermeture s'inscrit dans trois portées&nbsp;:

- Une portée locale (sa propre portée)
- La portée des fonctions extérieures
- La portée globale

On peut oublier parfois, dans le cas de fonctions imbriquées, qu'une fonction accède à la portée de la fonction extérieure qui l'invoque. Ainsi, on peut avoir des enchaînements de portées qui permette à une fermeture d'accéder à la portée de la fonction englobante mais également à celles des fonctions qui englobent cette dernière. Voyons le code qui suit&nbsp;:

```js
// Portée globale
var e = 10;
function somme(a) {
  return function (b) {
    return function (c) {
      // Portée des autres fonctions (externes)
      return function (d) {
        // Portée locale
        return a + b + c + d + e;
      };
    };
  };
}

console.log(somme(1)(2)(3)(4)); // affiche 20

// On peut aussi écrire ceci sans fonction anonyme :

// Portée globale
var e = 10;
function somme(a) {
  return function somme2(b) {
    return function somme3(c) {
      // Portée des autres fonctions
      return function somme4(d) {
        // Portée locale
        return a + b + c + d + e;
      };
    };
  };
}

var somme2 = somme(1);
var somme3 = somme2(2);
var somme4 = somme3(3);
var resultat = somme4(4);
console.log(resultat); // affiche 20
```

Dans l'exemple qui précède, on a une suite de fonctions imbriquées dont chacune accède à la portée des fonctions extérieures. Dans ce contexte, on peut dire que les fermetures ont accès à _l'ensemble_ des portées des fonctions extérieures.

## Les fermetures et les boucles&nbsp;: attention au mélange

Avant que le mot clé [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let) ne soit introduit avec ECMAScript 2015, un problème se posait fréquemment lorsqu'on manipulait des fermetures au sein d'une boucle. Par exemple&nbsp;:

```html
<p id="aide">Des aides seront affichées ici</p>
<p>E-mail&nbsp;: <input type="text" id="email" name="email" /></p>
<p>Nom&nbsp;: <input type="text" id="nom" name="nom" /></p>
<p>Âge&nbsp;: <input type="text" id="âge" name="âge" /></p>
```

```js
function afficherAide(aide) {
  document.getElementById("aide").innerHTML = aide;
}

function preparerAide() {
  var texteAide = [
    { id: "email", aide: "Votre adresse e-mail" },
    { id: "nom", aide: "Vos prénom et nom" },
    { id: "âge", aide: "Votre âge (plus de 16 ans requis)" },
  ];

  for (var i = 0; i < texteAide.length; i++) {
    var item = texteAide[i];
    document.getElementById(item.id).onfocus = function () {
      afficherAide(item.aide);
    };
  }
}

preparerAide();
```

Vous pouvez essayer ce code sur [JSFiddle](https://jsfiddle.net/v7gjv/8164/).

Lorsqu'on essaie ce code, on s'aperçoit qu'il ne fonctionne pas exactement comme on le souhaitait&nbsp;: en effet, quel que soit le champ sur lequel on se situe, c'est toujours le message d'aide concernant l'âge qui s'affiche.

La cause de ce problème est que les fonctions attachées à `onfocus` sont des fermetures qui partagent le même environnement. À chaque itération de boucle, l'environnement de la fermeture créée contient une référence sur la même instance de la variable `item`. Ainsi, lorsque la fonction de rappel de `onfocus` est exécutée, la boucle a déjà été effectuée entièrement, et la variable `item` partagée par les trois fermetures pointe sur le dernier élément de `texteAide`.

Une solution consiste à utiliser plus de fermetures et à appliquer une fabrique de fonction comme on a vu précédemment&nbsp;:

```js
function afficheAide(aide) {
  document.getElementById("aide").innerHTML = aide;
}

function creerCallbackAide(aide) {
  return function () {
    afficheAide(aide);
  };
}

function prepareAide() {
  var texteAide = [
    { id: "email", aide: "Votre adresse e-mail" },
    { id: "nom", aide: "Votre prénom et nom" },
    { id: "âge", aide: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < texteAide.length; i++) {
    var item = texteAide[i];
    document.getElementById(item.id).onfocus = creerCallbackAide(item.aide);
  }
}

prepareAide();
```

Voici une autre solution qui permet de ne pas utiliser plus de fermetures&nbsp;:

```js
function afficheAide(aide) {
  document.getElementById("aide").innerHTML = aide;
}

function prepareAide() {
  var texteAide = [
    { id: "email", aide: "Votre adresse e-mail" },
    { id: "nom", aide: "Votre prénom et nom" },
    { id: "âge", aide: "Votre âge (vous devez être majeur)" },
  ];

  for (var i = 0; i < texteAide.length; i++) {
    let item = texteAide[i];
    document.getElementById(item.id).onfocus = function () {
      afficheAide(item.aide);
    };
  }
}

prepareAide();
```

Dans ce fragment de code, nous avons utilisé `let` au lieu de `var` afin que chaque fermeture soit liée avec les variables de bloc.

Vous pouvez essayer ce code sur [JSFiddle](https://jsfiddle.net/v7gjv/9573/).

Autrement, on aurait pu utiliser `forEach()` afin de parcourir le tableau `texteAide` et attacher un gestionnaire d'évènement sur chaque [`<div>`](/fr/docs/Web/HTML/Element/div)&nbsp;:

```js
function afficheAide(aide) {
  document.getElementById("aide").innerHTML = aide;
}

function prepareAide() {
  var texteAide = [
    { id: "email", aide: "Votre adresse e-mail" },
    { id: "nom", aide: "Votre prénom et nom" },
    { id: "âge", aide: "Votre âge (vous devez être majeur)" },
  ];

  texteAide.forEach(function (texte) {
    document.getElementById(texte.id).onfocus = function () {
      afficheAide(texte.help);
    };
  });
}

prepareAide();
```

## Les performances et les fermetures

Il est mal avisé de créer des fonctions imbriquées et des fermetures sans utilité. En effet, cela peut dégrader les performances en termes de vitesse d'exécution et de consommation de mémoire.

Quand, par exemple, on crée un nouvel objet, les méthodes devraient être associées au prototype de l'objet et non pas définies dans le constructeur de l'objet. De cette façon, on évite que les méthodes soient réassignées à chaque fois qu'un nouvel objet est créé.

Voici un exemple de la mauvaise façon de procéder&nbsp;:

```js example-bad
function MonObjet(nom, message) {
  this.nom = nom.toString();
  this.message = message.toString();
  this.getNom = function () {
    return this.nom;
  };

  this.getMessage = function () {
    return this.message;
  };
}
```

Le fragment de code précédent ne tire pas parti des avantages des fermetures. Il pourrait être mieux écrit ainsi&nbsp;:

```js
function MonObjet(nom, message) {
  this.nom = nom.toString();
  this.message = message.toString();
}
MonObjet.prototype = {
  getNom: function () {
    return this.nom;
  },
  getMessage: function () {
    return this.message;
  },
};
```

Cependant, redéfinir le prototype est déconseillé, donc encore meilleur serait d'ajouter les méthodes&nbsp;:

```js
function MonObjet(nom, message) {
  this.nom = nom.toString();
  this.message = message.toString();
}
MonObjet.prototype.getNom = function () {
  return this.nom;
};
MonObjet.prototype.getMessage = function () {
  return this.message;
};
```

Les deux derniers exemples permettent de voir que le prototype hérité est partagé par tous les objets construits et que les méthodes n'ont pas besoin d'être reconstruites pour chaque création d'objet. Veuillez consulter la page sur [le modèle objet JavaScript en détails](/fr/docs/Web/JavaScript/Guide/Le_modèle_objet_JavaScript_en_détails) pour plus d'informations.
