---
title: "console : méthode statique table()"
slug: Web/API/console/table_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}

La méthode **`console.table()`** permet d'afficher des données tabulaires sous la forme d'un tableau.

Cette fonction prend un argument obligatoire, `data`, qui doit être un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) ou un objet, et un argument facultatif `columns`.

La fonction affiche `data` sous la forme d'un tableau. Chaque élément du tableau fourni (ou chaque propriété énumérable dans le cas d'un objet) sera affiché comme une ligne dans le tableau dans la console.

La première colonne dans le tableau sera intitulée `(index)`. Si `data` est un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)), alors les valeurs de cette colonne seront les indices du tableau JavaScript. Si `data` est un objet, ce seront les noms des propriétés qui seront affichés dans cette colonne `(index)`.

> [!NOTE]
> Dans Firefox, `console.table()` limite l'affichage aux 1000 premières lignes.

{{AvailableInWorkers}}

### Collections de données primitives

L'argument `data` peut être un tableau ou un objet.

```js
// un tableau de chaînes de caractères

console.table(["pommes", "oranges", "bananes"]);
```

| (index) | Valeurs   |
| ------- | --------- |
| 0       | 'pommes'  |
| 1       | 'oranges' |
| 2       | 'bananes' |

```js
// un objet dont les propriétés sont des chaînes de caractères

function Personne(prenom, nomFamille) {
  this.prenom = prenom;
  this.nomFamille = nomFamille;
}

const moi = new Personne("Jean", "Biche");

console.table(moi);
```

| (index)    | Valeurs |
| ---------- | ------- |
| prenom     | 'Jean'  |
| nomFamille | 'Biche' |

### Collections de données composites

Si les éléments d'un tableau ou les propriétés d'un objet sont eux-mêmes des tableaux ou des objets, alors ces éléments ou propriétés sont énumérés dans chaque ligne, avec un élément par colonne&nbsp;:

```js
// un tableau de tableaux

const personnes = [
  ["Tyrone", "Dupont"],
  ["Janet", "Martin"],
  ["Maria", "Cruz"],
];
console.table(personnes);
```

| (index) | 0        | 1        |
| ------- | -------- | -------- |
| 0       | 'Tyrone' | 'Dupont' |
| 1       | 'Janet'  | 'Martin' |
| 2       | 'Maria'  | 'Cruz'   |

```js
// un tableau d'objets

function Personne(prenom, nomFamille) {
  this.prenom = prenom;
  this.nomFamille = nomFamille;
}

const tyrone = new Personne("Tyrone", "Dupont");
const janet = new Personne("Janet", "Martin");
const maria = new Personne("Maria", "Cruz");

console.table([tyrone, janet, maria]);
```

Notez que si le tableau contient des objets, alors les colonnes seront nommées avec les noms des propriétés.

| (index) | prenom   | nomFamille |
| ------- | -------- | ---------- |
| 0       | 'Tyrone' | 'Dupont'   |
| 1       | 'Janet'  | 'Martin'   |
| 2       | 'Maria'  | 'Cruz'     |

```js
// un objet contenant des propriétés qui sont des objets

const famille = {};

famille.mere = new Personne("Janet", "Dupont");
famille.pere = new Personne("Tyrone", "Dupont");
famille.fille = new Personne("Maria", "Dupont");

console.table(famille);
```

| (index) | prenom   | nomFamille |
| ------- | -------- | ---------- |
| fille   | 'Maria'  | 'Dupont'   |
| pere    | 'Tyrone' | 'Dupont'   |
| mere    | 'Janet'  | 'Dupont'   |

### Restreindre les colonnes affichées

Par défaut, `console.table()` liste tous les éléments pour chaque ligne. Vous pouvez utiliser le paramètre facultatif `columns` pour sélectionner un sous-ensemble de colonnes à afficher&nbsp;:

```js
// un tableau d'objets, affichant seulement prenom

function Personne(prenom, nomFamille) {
  this.prenom = prenom;
  this.nomFamille = nomFamille;
}

const tyrone = new Personne("Tyrone", "Dupont");
const janet = new Personne("Janet", "Martin");
const maria = new Personne("Maria", "Cruz");

console.table([tyrone, janet, maria], ["prenom"]);
```

| (index) | prenom   |
| ------- | -------- |
| 0       | 'Tyrone' |
| 1       | 'Janet'  |
| 2       | 'Maria'  |

### Trier les colonnes

Vous pouvez trier les colonnes en cliquant sur l'intitulé de la colonne.

## Syntaxe

```js-nolint
table(data)
table(data, columns)
```

### Paramètres

- `data`
  - : Les données à afficher. Doit être un tableau ou un objet.
- `columns`
  - : Un tableau contenant les noms des colonnes à inclure dans la sortie.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
