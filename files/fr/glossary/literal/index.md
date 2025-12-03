---
title: Littéral
slug: Glossary/Literal
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Les **littéraux** représentent des valeurs en JavaScript. Ce sont des valeurs fixes — et non des variables — que vous fournissez _littéralement_ dans votre script.

- [Littéraux de tableau](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [Littéraux booléens](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#boolean_literals)
- [Littéraux à virgule flottante](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#floating-point_literals)
- [Littéraux numériques](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#numeric_literals)
- [Littéraux d'objet](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals)
- [Littéraux d'expression rationnelle](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_literals)
- [Littéraux de chaîne de caractères](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)

## Exemples

### Littéraux de chaîne de caractères

Un littéral de chaîne de caractères est une suite de zéro ou plusieurs caractères entourés de guillemets doubles (`"`) ou simples (`'`). Une chaîne doit être délimitée par des guillemets du même type (c'est-à-dire, soit deux guillemets simples, soit deux guillemets doubles).

Voici quelques exemples de littéraux de chaîne de caractères&nbsp;:

```js
"toto";
"tata";
"1234";
"une ligne \n nouvelle ligne";
"Le chat de Joyo";
```

### Littéraux d'objet

Un littéral d'objet est une liste de zéro ou plusieurs paires de noms de propriétés et de valeurs associées à un objet, entourée d'accolades (`{}`).

Voici un exemple de littéral d'objet. Le premier élément de l'objet `voiture` définit une propriété, `maVoiture`, et lui assigne une nouvelle chaîne, `"Toyota"`&nbsp;; le deuxième élément, la propriété `obtenirVoiture`, reçoit immédiatement le résultat de l'appel de la fonction `typeDeVoiture('Honda')`&nbsp;; le troisième élément, la propriété `reduction`, utilise une variable existante (`promotion`).

```js
const promotion = "BMW";

function typeDeVoiture(nom) {
  return nom === "Honda" ? nom : `Désolé, nous ne vendons pas de ${nom}.`;
}

const voiture = {
  maVoiture: "Toyota",
  obtenirVoiture: typeDeVoiture("Honda"),
  reduction: promotion,
};

console.log(voiture.maVoiture); // Toyota
console.log(voiture.obtenirVoiture); // Honda
console.log(voiture.reduction); // BMW
```

## Voir aussi

- [Littéral](<https://fr.wikipedia.org/wiki/Litt%C3%A9ral_(programmation)>) sur Wikipédia
