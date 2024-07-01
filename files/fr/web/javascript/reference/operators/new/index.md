---
title: L'opérateur new
slug: Web/JavaScript/Reference/Operators/new
---

{{jsSidebar("Operators")}}

L'**opérateur `new`** permet de créer une instance d'un certain type d'objet à partir du constructeur qui existe pour celui-ci (natif ou défini par l'utilisateur).

Le mot-clé `new`, utilisé avec une fonction, applique les 4 étapes suivantes :

1. Il crée un nouvel objet à partir de zéro
2. Il lie cet objet à un autre objet en le définissant comme son prototype.
3. Le nouvel objet, créé à l'étape 1, est passé comme valeur `this` à la fonction
4. Si la fonction ne renvoie pas d'objet, c'est la valeur `this` qui est renvoyée.

{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}

## Syntaxe

```js-nolint
new constructeur[([arguments])];
```

### Paramètres

- `constructeur`
  - : Une fonction ou une classe qui définit le type de l'objet qui sera une instance.
- `arguments`
  - : Une liste de valeurs correspondant aux arguments avec lesquels appeler le `constructeur`.

## Description

La création d'un objet personnalisé se fait en deux étapes&nbsp;:

1. Définition du type d'objet en écrivant une fonction.
2. Création d'une instance de l'objet avec `new`.

Pour définir un type d'objet, créez une fonction pour ce type qui spécifie son nom, ses propriétés et ses méthodes. Un objet peut avoir des propriétés qui sont elles-mêmes des objets, comme on pourra le voir dans les exemples ci-dessous.

Lorsque le code `new Toto(...)` est exécuté, voici ce qui se passe :

1. Un nouvel objet est créé qui hérite de `Toto.prototype`.
2. La fonction constructrice `Toto` est appelée avec les arguments fournis, [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) étant lié au nouvel objet créé. `new Toto` sera équivalent à `new Toto()` (i.e. un appel sans argument).
3. L'objet renvoyé par le constructeur devient le résultat de l'expression qui contient `new`. Si le constructeur ne renvoie pas d'objet de façon explicite, l'objet créé à l'étape 1 sera utilisé. (En général, les constructeurs ne renvoient pas de valeurs mais si on souhaite surcharger le processus habituel, on peut utiliser cette valeur de retour).

Il est toujours possible d'ajouter une propriété à un objet défini précédemment. Par exemple, l'instruction `voiture1.couleur = "noir"` ajoute une propriété couleur à `voiture1`, et lui assigne une valeur : "`noir`". Cependant, ceci n'affecte aucunement les autres objets. Pour ajouter une nouvelle propriété à tous les objets du même type, cette propriété doit être ajoutée à la définition du type d'objet `Voiture`.

Il est possible d'ajouter une propriété partagée par tous les objets d'un type déjà défini auparavant en utilisant sa propriété [`Function.prototype`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/prototype). Ceci permet de définir une propriété partagée par tous les objets créés avec cette fonction, plutôt que simplement par une seule instance de ce type d'objet. Le code qui suit ajoute une propriété couleur avec la valeur `"couleur standard"` à tous les objets de type `Voiture`, et redéfinit ensuite cette valeur avec la chaîne "`noir`" uniquement pour l'instance d'objet `voiture1`. Pour plus d'informations, voir la page sur [prototype](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

```js
function Voiture() {}
voiture1 = new Voiture();
voiture2 = new Voiture();

console.log(voiture1.couleur); // undefined

Voiture.prototype.couleur = "couleur standard";
console.log(voiture1.couleur); // couleur standard

voiture1.couleur = "noir";
console.log(voiture1.couleur); // noir

console.log(voiture1.__proto__.couleur); // couleur standard
console.log(voiture2.__proto__.couleur); // couleur standard
console.log(voiture1.couleur); // noir
console.log(voiture2.couleur); // couleur standard
```

> **Note :** Si on n'écrit pas l'appel du constructeur avec l'opérateur `new`, le constructeur est appelé comme une fonction normale et ne crée pas d'objet. Dans ce cas, la valeur de `this` sera différente.

## Exemples

### Exemple&nbsp;: type d'objet et instance d'objet

Supposons que vous vouliez créer un type d'objet pour les voitures. Vous voulez que ce type d'objet s'appelle `Voiture`, et qu'il ait des propriétés pour la marque, le modèle et l'année. Pour ce faire, vous écririez la fonction suivante&nbsp;:

```js
function Voiture(marque, modèle, année) {
  this.marque = marque;
  this.modèle = modèle;
  this.année = année;
}
```

À présent, vous pouvez créer un objet appelé `ma_voiture` de la manière suivante&nbsp;:

```js
ma_voiture = new Voiture("Volkswagen", "Golf TDi", 1997);
```

Cette instruction crée l'objet `ma_voiture` et assigne les valeurs spécifiées à ses propriétés. La valeur de `ma_voiture.marque` est alors la chaîne `"Volkswagen"`, celle de `ma_voiture.année` est l'entier 1997, et ainsi de suite.

Il est possible de créer un nombre illimité d'objets `Voiture` en appelant `new`. Par exemple&nbsp;:

```js
voiture_de_ken = new Voiture("Nissan", "300ZX", 1992);
```

### Exemple&nbsp;: propriété d'objet qui est elle-même un autre objet

Supposons que vous ayez défini un objet appelé `Personne` de la manière suivante&nbsp;:

```js
function Personne(nom, age, surnom) {
  this.nom = nom;
  this.age = age;
  this.surnom = surnom;
}
```

Et que vous avez ensuite instancié deux nouveaux objets `Personne` de la manière suivante&nbsp;:

```js
rand = new Personne("Rand McNally", 33, "Randy");
ken = new Personne("Ken Jones", 39, "Kenny");
```

Vous pouvez alors réécrire la définition de `Voiture` pour contenir une propriété `propriétaire` qui reçoit un objet `Personne`, comme ceci&nbsp;:

```js
function Voiture(marque, modèle, année, propriétaire) {
  this.marque = marque;
  this.modèle = modèle;
  this.année = année;
  this.propriétaire = propriétaire;
}
```

Pour instancier les nouveaux objets, vous utiliserez ensuite&nbsp;:

```js
voiture1 = new Voiture("Volkswagen", "Golf TDi", 1997, rand);
voiture2 = new Voiture("Nissan", "300ZX", 1992, ken);
```

Plutôt que de passer une chaîne littérale ou une valeur entière lors de la création des nouveaux objets, les instructions ci-dessus utilisent les objets `rand` et `ken` comme paramètres pour les propriétaires. Pour connaître le nom du propriétaire de `voiture2`, on peut alors accéder à la propriété suivante&nbsp;:

```js
voiture2.propriétaire.nom;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Function")}}
- {{jsxref("Reflect.construct()")}}
- {{jsxref("Object.prototype")}}
