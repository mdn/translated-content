---
title: Utiliser les champs privés d'une classe
slug: Web/JavaScript/Guide/Working_With_Private_Class_Features
translation_of: Web/JavaScript/Guide/Working_With_Private_Class_Features
---
{{jsSidebar("JavaScript Guide")}}

Il arrive souvent de vouloir utiliser des champs ou des méthodes privées. Seulement, cette fonctionnalité n'était pas présente aux débuts de JavaScript et, même si des conventions ont été mises en place comme l'utilisation d'un tiret bas comme préfixe afin d'indiquer des champs ou des méthodes privées (`_masqué`)&nbsp;: ce n'était que des conventions et les propriétés concernées étaient bien publiques.

Avec l'arrivée de la fonctionnalité des champs privés au sein des classes JavaScript, le langage peut désormais implémenter cet aspect privé. Cela fournit plusieurs avantages comme éviter les collisions de nommage entre les classes et le reste du code, permettre aux classes d'exposer une interface réduite.

## Champs privés

Pour comprendre la façon dont les champs privés fonctionnent, voyons d'abord une classe uniquement dôtée de champs publics et qui utilise un constructeur pour encapsuler des données. La classe qui suit crée un compteur qui peut démarrer à une valeur indiquer et fournit des méthodes pour augmenter, réduire ou réinitialiser le compteur avec une autre valeur.

```js example-bad
class CompteurPublic {
  constructor(debut = 0) {
    let _compteur = debut;
    let _init = debut;
    this.augmenter = (x = 1) => _compteur += x;
    this.reduire = (x = 1) => _compteur -= x;
    this.reinitialiser = (x = _init) => _compteur = x;
    this.getCompteur = () => _compteur;
  }
  get actuel() {
    return this.getCompteur();
  }
}
```

Ici, dès qu'on construit une instance de cette classe, on a un compteur dont la valeur initiale et la valeur courante ne sont pas disponibles au code à l'extérieur du compteur. La seule façon de modifier la valeur de `_compteur` est d'utiliser les méthodes définies comme `augmenter()` et `reinitialiser()`. De même, `_init` ne peut être modifiée, car il n'y a pas de méthode à l'intérieur de la classe pour et le code extérieur ne peut pas y accéder.

Voici un fragment de code équivalent qui utilise des champs privés&nbsp;:

```js
class CompteurPrive {
  #compteur;
  #init;
  constructor(debut = 0) {
    this.#init = debut;
    this.reinitialiser(debut);
  }
  augmenter(x = 1) { this.#compteur += x; }
  reduire(x = 1) { this.#compteur -= x; }
  reinitialiser(x = this.#init) { this.#compteur = x; }
  get actuel() {
     return this.#compteur;
  }
}

let total = new CompteurPrive(7);
console.log(total.actuel); // valeur attendue : 7
total.augmenter();         // #compteur vaut désormais 8
total.augmenter(5);        // #compteur vaut désormais 13
console.log(total.actuel); // valeur attendue : 13
total.reinitialiser();     // #compteur vaut désormais 7
```

Le croisillon (`#`) est le symbole qui indique que le champ est privé. Il permet aussi d'éviter certains conflits de nommage&nbsp;: les noms des champs privés doivent commencer par ce symboles tandis que les noms des propriétés publiques ne peuvent pas commencer par ce caractère.

Une fois les champs privés déclarés, ils se comportent comme indiqué avec l'exemple précédent. La seule façon de modifier la valeur `#compteur` est d'utiliser les méthodes publiques disponibles comme `reduire()`. De même, il n'existe aucune façon de modifier `#init`. Sa valeur est fixée lorsqu'un instance de `CompteurPrive` est construite et ne peut être changée après.

On ne peut pas non plus lire une valeur privée depuis le code à l'extérieur de la classe. Par exemple&nbsp;:

```js
let score = new CompteurPrive(); 
// #compteur et #init valent tous les deux 0
score.augmenter(100);
console.log(score.actuel);    // 100
console.log(score.#compteur);
  // output:
  // "Uncaught SyntaxError: Private field '#compteur' must be declared in an enclosing class"
```

Si vous souhaitez lire des données privées en dehors d'une classe, vous devez d'abord implémenter une méthode ou une autre fonction au sein de la classe pour renvoyer cette donnée. C'est ce que nous avons fait ici avec l'accesseur `actuel()` qui renvoie la valeur courante de `#compteur`. Toutefois, `#init` reste inaccessible. Ainsi, à moins d'ajouter une méthode comme `getInit()` à la classe, la valeur initiale ne peut pas être vue en dehors de la classe (et encore moins la modifier). Toute tentative d'accès renverra une erreur.

Il est également impossible d'accéder à un champ privé qui n'a pas été précédemment défini.

```js example-bad
class MauvaiseIdee {
  constructor(arg) {
    this.#init = arg;  // erreur de syntaxe
    #startState = arg; // erreur de syntaxe ici aussi
  }
}
```

Un même nom ne peut être défini deux fois dans une même classe. Un champ privé ne peut pas non plus être supprimé.

```js example-bad
class MauvaiseIdees {
  #prenom;
  #prenom; // erreur de syntaxe
  #nomFamille;
  constructor() {
    delete this.#nomFamille; // erreur de syntaxe
  }
}
```

Il est également impossible de déclarer des champs ou des méthodes privées avec [des littéraux objets](/fr/docs/Web/JavaScript/Guide/Working_with_Objects#using_object_initializers). Pour un objet classique, on peut utiliser&nbsp;:

```js
const planete = {
  nom: 'Terre',
  rayonKM: 6371
};
```

En revanche, on ne peut pas inclure de champs privés ici.

```js example-bad
const planete = {
  nom: 'Terre',
  rayonKM: 6371,
  #secret: 'cœur de la planète' // erreur de syntaxe
};
```

Au sein d'une classe, on peut avoir des champs statiques privés&nbsp;:

```js
class MelangeCouleur {
  static #rouge = "rgba(1,0,0,1)";
  static #vert  = "rgba(0,1,0,1)";
  static #bleu  = "rgba(0,0,1,1)";
  #couleurMelangee;
  constructor() {
    …
  }
}
```

## Méthodes privées

À l'instar des champs privés, il est aussi possible de déclarer des méthodes privées, également indiquées par `#`. On ne peut pas accéder à celles-ci en dehors de la classe. Elles permettent de réaliser des actions complexes qui sont nécessaire à l'intérieur de la classe et qui ne pourront pas être invoquée depuis le reste du code.

Par exemple, on peut créer [un élément HTML personnalisé](/fr/docs/Web/Web_Components/Using_custom_elements) qui effectue des actions complexes lors d'un clic/d'une touche ou d'une quelconque activation. Ces actions complexes qui concernent l'élément devraient être restreintes à l'élément et inaccessibles par ailleurs. On pourra donc écrire&nbsp;:

```js
class ClicPersonnalise extends HTMLElement {
  #gererClic() {
    // faire des choses complexes
  }
  constructor() {
    super();
    this.#gererClic();
  }
  connectedCallback() {
    this.addEventListener('click', this.#gererClic)
  }
}

customElements.define('chci-interactive', ClicPersonnalise);
```

Il en va de même avec les accesseurs et les mutateurs. Cela s'avère utile lorsqu'on souhaite uniquement accéder ou modifier des valeurs depuis la même classe. Là encore, on utilise le croisillon `#` pour indiquer le caractère privé.

```js
class Compteur extends HTMLElement {
  #valeurX = 0;
  get #x() { return #valeurX; }
  set #x(valeur) {
    this.#valeurX = valeur;
    window.requestAnimationFrame(this.#render.bind(this));
  }
  #clic() {
    this.#x++;
  }
  constructor() {
    super();
    this.onclick = this.#clic.bind(this);
  }
  connectedCallback() { this.#render(); }
  #render() {
    this.textContent = this.#x.toString();
  }
}

customElements.define('num-compteur', Compteur);
```

Dans cet exemple, la quasi-totalité des champs et méthodes est privée. Aucun autre endroit du code JavaScript ne pourra être utilisé pour modifier les valeurs internes d'une instance de cette classe.

## Vérifier l'existence d'un champ ou d'une méthode privée

JavaScript lèvera une exception si on essaie d'accéder à une méthode ou à un champ privé qui n'existe pas (à la différence des champs publiques pour lesquels la valeur sera `undefined`). On peut donc utiliser `try`/`catch` ou l'opérateur [`in`](/fr/docs/Web/JavaScript/Reference/Operators/in), plus concis, pour tester l'existence d'une propriété privée.

Dans le code qui suit, on illustre cette approche avec l'opérateur `in` pour vérifier que les objets ajoutés disposent bien d'un champ privé `#length`. Si ce n'est pas le cas, une exception avec un message détaillé est levée.

```js
class Scalaire {
  #total = 0;
  constructor(valeur) {
    this.#total = valeur || this.#total;
  }
  
  ajoute(s) {
    // On vérifie que l'objet définit #total
    if (!(#total in s)) {
      throw new TypeError("Une instance de Scalaire est atttendue");
    }
    this.#total += s.#total;
  }
}

let scalaire1 = new Scalaire(1);
scalaire1.ajoute(scalaire1);
scalaire1.ajoute({}); // lève l'exception TypeError
```

## Compatibilité des navigateurs

{{Compat("javascript.classes")}}

## Voir ausi

- [Les champs privés d'une classe dans la référence JavaScript](/fr/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [FAQ (en anglais) sur la syntaxe des champs privés](https://github.com/tc39/proposal-class-fields/blob/master/PRIVATE_SYNTAX_FAQ.md)
- [La sémantique pour les différentes propriétés au sein des classes JavaScript (en anglais)](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
