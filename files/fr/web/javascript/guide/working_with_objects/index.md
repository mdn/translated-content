---
title: Utiliser les objets
slug: Web/JavaScript/Guide/Working_with_Objects
tags:
  - Beginner
  - Comparing object
  - Document
  - Guide
  - JavaScript
  - Object
  - l10n:priority
translation_of: Web/JavaScript/Guide/Working_with_Objects
original_slug: Web/JavaScript/Guide/Utiliser_les_objets
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}

JavaScript est conçu autour d'un paradigme simple, basé sur les objets. Un objet est un ensemble de propriétés et une propriété est une association entre un nom (aussi appelé _clé_) et une valeur. La valeur d'une propriété peut être une fonction, auquel cas la propriété peut être appelée « méthode ». En plus des objets natifs fournis par l'environnement, il est possible de construire ses propres objets. Ce chapitre aborde la manipulation d'objets, l'utilisation des propriétés, fonctions et méthodes, il explique également comment créer ses objets.

## Un aperçu des objets

À l'instar de nombreux autres langages de programmation, on peut comparer les objets JavaScript aux objets du monde réel.

En JavaScript, un objet est une entité à part entière qui possède des propriétés et un type. Si on effectue cette comparaison avec une tasse par exemple, on pourra dire qu'une tasse est un objet avec des propriétés. Ces propriétés pourront être la couleur, la forme, le poids, le matériau qui la constitue, etc. De la même façon, un objet JavaScript possède des propriétés, chacune définissant une caractéristique.

## Les objets et les propriétés

Un objet JavaScript possède donc plusieurs propriétés qui lui sont associées. Une propriété peut être vue comme une variable attachée à l'objet. Les propriétés d'un objet sont des variables tout ce qu'il y a de plus classiques, exception faite qu'elles sont attachées à des objets. Les propriétés d'un objet représentent ses caractéristiques et on peut y accéder avec une notation utilisant le point « . », de la façon suivante :

```js
nomObjet.nomPropriete
```

Comme pour les variables JavaScript en général, le nom de l'objet (qui peut être une variable) et le nom des propriétés sont sensibles à la casse (une lettre minuscule ne sera pas équivalente à une lettre majuscule). On peut définir une propriété en lui affectant une valeur. Ainsi, si on crée un objet `maVoiture` et qu'on lui donne les propriétés `fabricant`, `modèle`, et `année` :

```js
let maVoiture = new Object();
maVoiture.fabricant = "Ford";
maVoiture.modele = "Mustang";
maVoiture.annee = 1969;
```

L'exemple précédent peut également s'écrire avec **[la syntaxe littérale pour initialiser les objets](#object_initializers)** : on fournit une liste, délimitée par des virgules, qui contient des paires de noms et de valeurs décrivant les propriétés et où le tout est encadré d'accolades (`{}`) :

```js
let maVoiture = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
```

Les propriétés d'un objet qui n'ont pas été affectées auront la valeur [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) (et non [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null)).

```js
maVoiture.color; // undefined
```

On peut aussi définir ou accéder à des propriétés JavaScript en utilisant une notation avec les crochets (voir la page sur [les accesseurs de propriétés](/fr/docs/Web/JavaScript/Reference/Operators/Property_Accessors) pour plus de détails). Les objets sont parfois appelés « tableaux associatifs ». Cela peut se comprendre, car chaque propriété est associée avec une chaîne de caractères qui permet d'y accéder. Ainsi, par exemple, on peut accéder aux propriétés de l'objet `maVoiture` de la façon suivante :

```js
maVoiture["fabricant"] = "Ford";
maVoiture["modèle"] = "Mustang";
maVoiture["année"] = 1969;
```

Le nom d'une propriété d'un objet peut être n'importe quelle chaîne JavaScript valide (ou n'importe quelle valeur qui puisse être convertie en une chaîne de caractères), y compris la chaîne vide. Cependant, n'importe quel nom de propriété qui n'est pas un identifiant valide (par exemple si le nom d'une propriété contient un tiret, un espace ou débute par un chiffre) devra être utilisé avec la notation à crochets. Cette notation s'avère également utile quand les noms des propriétés sont déterminés de façon dynamique (c'est-à-dire qu'on ne sait pas le nom de la propriété avant l'exécution). Par exemple :

```js
// on crée quatre variables avec une même instruction
let monObj = new Object();
let str = "maChaîne";
let rand = Math.random();
let obj = new Object();

monObj.type              = "Syntaxe point";
monObj["date created"]   = "Chaîne avec un espace";
monObj[str]              = "Une valeur qui est une chaîne";
monObj[rand]             = "Nombre aléatoire";
monObj[obj]              = "Objet";
monObj[""]               = "Une chaîne vide";

console.log(monObj);
```

On notera que les valeurs utilisées entre les crochets sont automatiquement converties en chaînes de caractères grâce à la méthode [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) sauf si ces valeurs sont des symboles (cf. [`Symbol`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol)). En effet, les noms des propriétés pour les objets JavaScript peuvent être des chaînes de caractères ou des symboles. Ainsi, dans l'exemple précédent, lorsqu'on ajoute la clé `obj` sur `monObj`, le moteur JavaScript appelle la méthode `obj.toString()` et utilise la chaîne de caractères renvoyée par cette méthode comme nom pour la propriété.

On peut également accéder aux propriétés d'un objet en utilisant une valeur qui est une chaîne de caractères enregistrée dans une variable :

```js
let nomPropriété = "fabricant";
maVoiture[nomPropriété] = "Ford";

nomPropriété = "modèle";
maVoiture[nomPropriété] = "Mustang";
```

La notation avec les crochets peut être utilisée dans une boucle [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) afin de parcourir les propriétés énumérables d'un objet. Pour illustrer comment cela fonctionne, on définit la fonction suivante qui affiche les propriétés d'un objet qu'on lui a passé en argument avec le nom associé :

```js
function afficherProps(obj, nomObjet) {
  let resultat = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
        resultat += `${nomObjet}.${i} = ${obj[i]}\n`;
    }
  }
  return resultat;
}
```

Si on appelle la fonction avec `afficherProps(maVoiture, "maVoiture")`, cela affichera le contenu suivant dans la console :

```js
maVoiture.fabricant = Ford
maVoiture.modele = Mustang
maVoiture.annee = 1969
```

## Lister les propriétés d'un objet

À partir d'ECMAScript 5, il existe trois méthodes natives pour lister/parcourir les propriétés d'un objet :

- Les boucles [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) qui permettent de parcourir l'ensemble des propriétés énumérables d'un objet et de sa chaîne de prototypes.
- [`Object.keys(o)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) qui permet de renvoyer un tableau contenant les noms (clés ou _keys_) des propriétés propres (celles qui ne sont pas héritées via la chaîne de prototypes) d'un objet `o` pour les propriétés énumérables.
- [`Object.getOwnPropertyNames(o)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) qui permet de renvoyer un tableau contenant les noms des propriétés propres (énumérables ou non) d'un objet `o`.

Avant ECMAScript 5, il n'existait aucune méthode native pour lister l'ensemble des propriétés d'un objet. Cependant, on pouvait utiliser le code suivant pour y parvenir :

```js
function listerToutesLesProprietes(o){
  let objectToInspect;
  let resultat = [];

  for(objectToInspect = o;
      objectToInspect !== null;
      objectToInspect = Object.getPrototypeOf(objectToInspect)){
    resultat = resultat.concat(Object.getOwnPropertyNames(objectToInspect));
  }
  return resultat;
}
```

Cela peut être utile pour révéler les propriétés « cachées » où leur nom est réutilisé dans la chaîne de prototypes. Pour lister les propriétés accessibles, il suffit de retirer les duplicatas du tableau.

## Créer de nouveaux objets

Un environnement JavaScript possède certains objets natifs prédéfinis. En plus de ces objets, il est possible de créer ses propres objets. Pour cela, on peut utiliser un [initialisateur d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer). On peut aussi créer un constructeur puis instancier un objet avec cette fonction en utilisant l'opérateur `new`.

### Utiliser les initialisateurs d'objets

On peut créer des objets avec une fonction qui est un constructeur, mais on peut aussi créer des objets avec des [initialisateurs d'objets](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer). On appelle parfois cette syntaxe la notation _littérale_.

La syntaxe utilisée avec les initialisateurs d'objets est la suivante :

```js
let obj = { 
  propriete_1:   valeur_1,   // propriete_# peut être un identifiant
            2:   valeur_2,   // ou un nombre
            // ...,
  "propriete n": valeur_n
  }; // ou une chaîne
```

où on a `obj` le nom de l'objet qu'on souhaite créer et chaque `propriete_i` un identifiant (que ce soit un nom, un nombre ou une chaîne de caractères) et chaque `valeur_i` une expression dont la valeur sera affectée à la propriété `propriete_i`. S'il n'est pas nécessaire d'utiliser l'objet `obj` par la suite, il n'est pas nécessaire de réaliser l'affectation à une variable (attention alors à l'encadrer dans des parenthèses pour que le littéral objet soit bien interprété comme une instruction et non pas comme un bloc.)

Les initialisateurs d'objets sont des expressions et chaque initialisateur entraîne la création d'un nouvel objet dans l'instruction pour laquelle il est exécuté. Des initialisateurs d'objets identiques créeront des objets distincts qui ne seront pas équivalents. Les objets sont créés de la même façon qu'avec `new Object()`, les objets créés à partir d'une expression littérale seront des instances d'`Object`.

L'instruction suivante crée un objet et l'affecte à une variable `x` si et seulement si l'expression `cond` est vraie :

```js
if (cond) let x = {emplacement: "le monde"};
```

Dans l'exemple suivant, on crée un objet `maHonda` avec trois propriétés. La propriété `moteur` est également un objet avec ses propres propriétés.

```js
let maHonda = {
  couleur: "rouge",
  roue: 4,
  moteur: {
    cylindres: 4,
    taille: 2.2
  }
};
```

De la même façon, on pourra utiliser des initialisateurs pour créer des tableaux. Pour plus d'informations à ce sujet, voir [les littéraux de tableaux](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#les_litt.c3.a9raux_de_tableaux).

### Utiliser les constructeurs

On peut aussi créer des objets d'une autre façon, en suivant deux étapes :

1.  On définit une fonction qui sera un constructeur définissant le type de l'objet. La convention, pour nommer les constructeurs, est d'utiliser une majuscule comme première lettre pour l'identifiant de la fonction.
2.  On crée une instance de l'objet avec `new`.

Pour définir le type d'un objet, on crée une fonction qui définit le nom de ce type et les propriétés et méthodes des instances. Ainsi, si on souhaite créer un type d'objet pour représenter des voitures, on pourra nommer ce type `voiture`, et il pourra avoir des propriétés pour le fabricant, le modèle et l'année. Pour ce faire, on pourra écrire la fonction suivante :

```js
function Voiture(fabricant, modele, annee) {
  this.fabricant = fabricant;
  this.modele = modele;
  this.annee = annee;
}
```

On voit ici qu'on utilise le mot-clé `this` pour affecter des valeurs aux propriétés d'un objet en fonction des valeurs passées en arguments de la fonction.

On peut désormais créer un objet `maVoiture` de la façon suivante :

```js
let maVoiture = new Voiture("Eagle", "Talon TSi", 1993);
```

Cette instruction crée un objet `maVoiture` et lui affecte les valeurs fournies pour ses propriétés. On obtient donc `maVoiture.fabricant` qui sera la chaîne de caractères "Eagle", `maVoiture.annee` qui sera l'entier 1993, et ainsi de suite.

Grâce à ce constructeur, on peut ensuite créer autant d'objets `Voiture` que nécessaire. Par exemple :

```js
let voitureMorgan = new Voiture("Audi", "A3", 2005);
let voitureMax = new Voiture("Mazda", "Miata", 1990);
```

Un objet peut avoir une propriété qui est elle-même un objet. Ainsi, si on définit un type d'objet `personne` de cette façon :

```js
function Personne(nom, age, sexe) {
  this.nom = nom;
  this.age = age;
  this.sexe = sexe;
}
```

et qu'on instancie deux nouveaux objets `personne` avec

```js
let max = new Personne("Max Gun", 33, "M");
let morgan = new Personne("Morgan Sousbrouille", 39, "M");
```

On pourra réécrire la fonction de définition pour le type `Voiture` pour inclure une propriété `proprietaire` qui est représentée par un objet `personne` :

```js
function Voiture(fabricant, modele, annee, proprietaire) {
  this.fabricant = fabricant;
  this.modele = modele;
  this.annee = annee;
  this.proprietaire = proprietaire;
}
```

Pour instancier des nouveaux objets, on pourra donc utiliser :

```js
let voiture1 = new Voiture("Mazda", "Miata", 1993, max);
let voiture2 = new Voiture("Audi", "A3", 2005, morgan);
```

On notera que le dernier argument n'est pas une chaîne de caractères ou une valeur numérique mais bien un objet. Les objets `max` et `morgan` sont passés en arguments pour représenter les propriétaires. Ainsi, si on veut obtenir le nom du propriétaire pour `voiture2`, on peut accéder à la propriété de la façon suivante :

```js
voiture2.proprietaire.nom
```

Il est toujours possible d'ajouter une propriété à un objet défini précédemment. Par exemple, on peut ajouter une propriété à l'objet `voiture1` avec l'instruction :

```js
voiture1.couleur = "noir";
```

Ici, on ajoute une propriété `couleur` à `voiture1`, et on lui affecte une valeur "noir". Cependant, cela n'affecte pas les autres objets `voiture`. Pour ajouter une nouvelle propriété à tous les objets, il faudra ajouter la propriété au constructeur `voiture`.

### Utiliser la méthode `Object.create()`

Les objets peuvent également être créés en utilisant la méthode [`Object.create()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create). Cette méthode peut s'avérer très utile, car elle permet de choisir le prototype pour l'objet qu'on souhaite créer, sans avoir à définir un constructeur.

```js
// Propriétés pour animal et encapsulation des méthodes
let Animal = {
  type: "Invertébrés",        // Valeur par défaut  value of properties
  afficherType : function() {  // Une méthode pour afficher le type Animal
    console.log(this.type);
  }
}

// On crée un nouveau type d'animal, animal1
let animal1 = Object.create(Animal);
animal1.afficherType(); // affichera Invertébrés

// On crée un type d'animal "Poisson"
let poisson = Object.create(Animal);
poisson.type = "Poisson";
poisson.afficherType(); // affichera Poisson
```

## L'héritage

Tous les objets JavaScript héritent d'un autre objet. L'objet dont on hérite est appelé _prototype_ et les propriétés héritées peuvent être accédées via l'objet `prototype` du constructeur. Pour plus d'informations sur le fonctionnement de l'héritage, voir la page sur [l'héritage et la chaîne de prototypes](/fr/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Indexer les propriétés d'un objet

Il est possible d'accéder à une propriété via son nom et via son indice (ordinal). Si on définit une propriété grâce à un nom, on accédera toujours à la valeur via le nom. De même, si on définit une propriété grâce à un indice, on y accèdera toujours via son indice.

Cette restriction s'applique lorsqu'on crée un objet et ses propriétés via un constructeur et lorsqu'on déclare les propriétés explicitement (par exemple avec `maVoiture.couleur = "rouge"`). Si on définit une propriété d'un objet avec `maVoiture[5] = "25 kmh"`, on pourra faire référence à cette propriété grâce à `maVoiture[5]`.

Il existe une exception à cette règle lorsqu'on manipule des objets "semblables à des tableaux" provenant d'API Web telles que l'objet `forms`. Pour ces objets semblables à des tableaux, on peut accéder à une propriété de l'objet grâce à son nom (si l'attribut [`name`](/fr/docs/Web/HTML/Global_attributes#name) est utilisé sur l'élément HTML) ou grâce à son index selon l'ordre dans le document. Ainsi, si on souhaite cibler un élément `<form>` du document possédant un attribut `name` qui vaut `monForm` et que cet élément est le deuxième élément du document, on pourra y accéder avec `document.forms[1]`, `document.forms["monForm"]` ou encore avec `document.forms.monForm`.

## Définir des propriétés pour un type d'objet

On peut ajouter une propriété à un type précédemment défini en utilisant la propriété `prototype`. Cela permettra de définir une propriété qui sera partagée par tous les objets d'un même type plutôt qu'elle ne soit définie que pour un seul objet. Le code suivant permet d'ajouter une propriété `couleur` à tous les objets de type `voiture`. On affecte ensuite une valeur à cette propriété pour l'objet `voiture1`.

```js
Voiture.prototype.couleur = null;
voiture1.couleur = "noir";
```

Pour plus d'informations, voir l'article sur [la propriété `prototype`](/fr/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Function) de l'objet `Function` de la [référence JavaScript](/fr/docs/Web/JavaScript/Reference).

## Définir des méthodes

Une _méthode_ est une fonction associée à un objet. Autrement dit, une méthode est une propriété d'un objet qui est une fonction. Les méthodes sont définies comme des fonctions normales et sont affectées à des propriétés d'un objet. Voir la page sur [les définitions de méthodes](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions) pour plus d'informations. Par exemple :

```js
nomObjet.nomMethode = nomFonction;

let monObj = {
  maMethode: function(params) {
    // …faire quelque chose
  }

  // la forme suivante fonctionne aussi

  monAutreMethode(params) {
    // …faire autre chose
  }
};
```

avec `nomObjet` qui est un objet existant, `nomMethode` est le nom de la propriété à laquelle on souhaite affecter la méthode et `nomFonction` le nom de la fonction.

On peut ensuite appeler la méthode sur l'objet :

```js
object.nomMethode(parametres);
```

On peut définir des méthodes pour un type d'objet en incluant la définition de la méthode dans le constructeur. Par exemple, on peut définir une fonction qui mettrait en forme et qui afficherait les propriétés d'un objet `voiture`. Par exemple :

```js
function afficheVoiture() {
  let resultat = `Une belle ${this.modele}, fabriquée en ${this.annee} par ${this.fabricant}`;
  console.log(résultat);
}
```

On peut ensuite ajouter cette fonction comme méthode dans le constructeur avec cette instruction :

```js
this.afficheVoiture = afficheVoiture;
```

La définition complète de `Voiture` serait donc :

```js
function Voiture(fabricant, modele, annee, proprietaire) {
  this.fabricant = fabricant;
  this.modele = modele;
  this.annee = annee;
  this.proprietaire = proprietaire;
  this.afficheVoiture = afficheVoiture;
}
```

On pourra donc ensuite appeler la méthode `afficheVoiture` pour chaque objet de ce type :

```js
voiture1.afficheVoiture();
voiture2.afficheVoiture();
```

## Utiliser `this` pour les références aux objets

JavaScript possède un mot-clé spécial [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this), qui peut être utilisé à l'intérieur d'une méthode pour faire référence à l'objet courant.

Par exemple, supposons qu'on ait deux objets, `responsable` et `stagiaire`. Chaque objet possède son propre `nom`, `age` et `poste`. Dans la fonction `direBonjour()`, on remarque qu'on utilise `this.nom`. Lorsqu'on ajoute cette méthode aux deux objets, on peut alors appeler cette fonction depuis les deux objets et celle-ci affichera `'Bonjour, mon nom est '` suivi de la valeur de la propriété `nom` rattaché à l'objet indiqué.

```js
const responsable = {
 nom: "Jean",
 age: 27,
 poste: "Ingénieur logiciel"
};

const stagiaire = {
 nom: "Ben",
 age: 21,
 poste: "Stagiaire ingénieur logiciel"
};

function direBonjour() {
 console.log('Bonjour, mon nom est', this.nom)
};

// on ajoute direBonjour aux deux objets
responsable.direBonjour = direBonjour;
stagiaire.direBonjour = direBonjour;

responsable.direBonjour(); // Bonjour, mon nom est John'
stagiaire.direBonjour();   // Bonjour, mon nom est Ben'
```

Ici, `this` fait référence à l'objet courant. On peut également créer une fonction `direMonAge()` qui affiche une phrase indiquant l'age.

```js
function direMonAge(){
  console.log("J'ai " + this.age + " ans.");
};

responsable.direMonAge = direMonAge;
responsable.direMonAge(); // J'ai 27 ans.
```

## Définir des accesseurs et des mutateurs (_getters_ et _setters_)

Un [accesseur](/fr/docs/Web/JavaScript/Reference/Functions/get) (_getter_) est une méthode qui permet de récupérer la valeur d'une propriété donnée. Un [mutateur](/fr/docs/Web/JavaScript/Reference/Functions/set) (_setter_) est une méthode qui permet de définir la valeur d'une propriété donnée. Il est possible de définir des accesseurs et des mutateurs sur chaque objet (qu'il soit natif ou défini par l'utilisateur) qui supporte l'ajout de nouvelles propriétés.

Les accesseurs et mutateurs peuvent être :

- définis avec [les initialisateurs d'objet](#object_initializers), ou
- ajoutés après la construction en utilisant une méthode pour ajouter un accesseur ou un mutateur.

Lorsqu'on définit des accesseurs et des mutateurs [en utilisant la syntaxe littérale des initialisateurs d'objet](#object_initializers), il suffit d'ajouter un préfixe `get` devant une fonction pour un accesseur et un préfixe `set` devant une fonction pour un mutateur. La méthode pour l'accesseur ne doit pas utiliser de paramètre tandis que la méthode pour le mutateur doit utiliser un seul paramètre (la nouvelle valeur à définir). Ainsi :

```js
let o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8 <-- À ce moment, la méthode get b() est invoquée
o.c = 50;         //   <-- À ce moment, la méthode set c(x) est invoquée
console.log(o.a); // 25
```

Les propriétés de l'objet `o` sont :

- `o.a` — un nombre
- `o.b` — un accesseur qui renvoie la valeur de `o.a` plus 1
- `o.c` — un mutateur qui définit la valeur de `o.a` avec la moitié de la valeur passée pour `o.c`

On notera que les noms des fonctions pour les accesseurs et les mutateurs définis dans un initialisateur d'objet avec la forme `[gs]et propriete()` ne sont pas les noms des accesseurs/mutateurs eux-mêmes malgré ce que pourrait laisser croire la syntaxe.

Les accesseurs et mutateurs peuvent également être ajoutés à un objet après sa création via la méthode `Object.defineProperties()` (ou `Object.defineProperty()`). Le premier paramètre de cette méthode est l'objet sur lequel on souhaite ajouter les fonctions. Le deuxième paramètre est un objet dont les noms des propriétés sont les noms des accesseurs et/ou des mutateurs et les valeurs de ces propriétés sont les objets qui définissent les fonctions correspondantes. Voici un exemple qui définit un accesseur et un mutateur pour obtenir un résultat équivalent à l'exemple précédent :

```js
let o = { a: 0 };

Object.defineProperties(o, {
 'b': { get: function() { return this.a + 1; } },
 'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // Exécute le mutateur qui affecte 10 / 2 (5) à la propriété 'a'
console.log(o.b); // Exécute l'accesseur qui renvoie a + 1, soit 6
```

Le choix de l'une ou l'autre de ces formes dépend de votre style et du type de tâche à réaliser. Si vous utilisez déjà un initialisateur d'objet lors de la définition d'un prototype, vous choisirez probablement la première forme, plus concise et plus naturelle. Toutefois, si vous avez besoin d'ajouter des accesseurs/mutateurs plus tard, parce que vous n'avez pas écrit le prototype ou la définition de l'objet, seule la seconde forme sera possible. Cette dernière représente mieux la nature dynamique de JavaScript mais peut rendre la lecture et la compréhension du code plus difficiles.

## Supprimer des propriétés

Il est possible de retirer des propriétés propres (celles qui ne sont pas héritées) grâce à l'opérateur [`delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete). Le code suivant montre comment retirer une propriété :

```js
// On crée un nouvel objet, monObj, avec deux propriétés a et b.
let monObj = new Object;
monObj.a = 5;
monObj.b = 12;

// On retire la propriété a, monObj a donc uniquement la propriété b
delete monObj.a;
console.log("a" in monObj) // produit "false"
```

Il est aussi possible de supprimer une propriété de l'objet global avec `delete` si aucun mot-clé comme `var`, `let` ou `const` n'avait été utilisé :

```js
g = 17;
delete g;
```

## Comparer des objets

En JavaScript, les objets fonctionnent par référence. Deux objets distincts ne sont jamais égaux, même s'ils ont les mêmes valeurs pour les mêmes propriétés. On aura une équivalence uniquement si on compare deux références vers un seul et même objet donné.

```js
// Deux variables avec deux objets distincts
// qui ont les mêmes propriétés
let fruit = {nom: "pomme"};
let fruit2 = {nom: "pomme"};

fruit == fruit2  // renvoie false
fruit === fruit2 // renvoie false
```

```js
// Deux variables référençant un même objet
let fruit = {nom: "pomme"};
let fruit2 = fruit;  // On affecte la même référence

// dans ce cas fruit et fruit2 pointent vers le même objet
fruit == fruit2  // renvoie true
fruit === fruit2 // renvoie true

fruit.nom = "raisin";
console.log(fruit2); // affiche {nom: "raisin"} et non {nom: "pomme"}
```

Pour plus d'informations sur les opérateurs de comparaisons, voir [cet article](/fr/docs/Web/JavaScript/Reference/Operators).

## Voir aussi

- Pour aller plus loin, voir [les détails du modèle objet javaScript](/fr/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
- Pour en savoir plus sur les classes ECMAScript 2015 (une nouvelle façon de créer des objets), lire le chapitre sur les [classes JavaScript](/fr/docs/Web/JavaScript/Reference/Classes).

{{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}
