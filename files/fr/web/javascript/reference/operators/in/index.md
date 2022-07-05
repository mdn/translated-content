---
title: L'opérateur in
slug: Web/JavaScript/Reference/Operators/in
tags:
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/in
original_slug: Web/JavaScript/Reference/Opérateurs/L_opérateur_in
---
{{jsSidebar("Operators")}}

L'**opérateur `in`** renvoie `true` si une propriété donnée appartient à l'objet donné (directement ou via sa chaîne de prototype).

{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}

## Syntaxe

```js
propriété in nomObjet
```

### Paramètres

- `propriété`
  - : Une expression évaluée en un nombre ou une chaîne de caractères qui représente le nom d'une propriété ou l'indice d'un tableau.
- `nomObjet`
  - : Le nom de l'objet qu'on souhaite inspecter.

## Description

Les exemples suivants illustrent certaines utilisation de l'opérateur `in`.

```js
// Tableaux
var arbres = ["sapin", "hêtre", "cèdre", "chêne", "érable"];
0 in arbres        // renvoie true
3 in arbres        // renvoie true
6 in arbres        // renvoie false
"hêtre" in arbres  // renvoie false (l'indice doit être spécifié, pas la valeur à cet indice)
"length" in arbres // renvoie true (length est une propriété des objets Array)
Symbol.iterator in arbres // renvoie true (les tableaux sont itérables, à partir d'ES6)

// Objets prédéfinis
"PI" in Math           // renvoie true
var ma_chaine = new String("corail");
"length" in ma_chaine  // renvoie true

// Objets personnalisés
var voiture = {marque&nbsp;: "Honda", modèle&nbsp;: "Accord", année&nbsp;: 1998};
"marque" in voiture  // renvoie true
"modèle" in voiture  // renvoie true
"marque" in voiture // renvoie true
"Accord" in voiture // renvoie false
```

L'opérande droit doit toujours être du type objet (et pas un autre type primitif). Par exemple, on peut utiliser une chaîne créée avec le constructeur `String`, mais pas une chaîne littérale.

```js
var couleur1 = new String("vert");
"length" in couleur1 // renvoie true
var couleur2 = "corail";
"length" in couleur2 // génère une erreur (couleur n'est pas un objet String)
```

### Utilisation de l'opérateur `in` avec des propriétés supprimées ou indéfinies

Si une propriété est supprimée avec l'opérateur [`delete`](fr/R%c3%a9f%c3%a9rence_de_JavaScript_1.5_Core/Op%c3%a9rateurs/Op%c3%a9rateurs_sp%c3%a9ciaux/L'op%c3%a9rateur_delete), l'opérateur `in` renvoie `false` pour cette propriété.

```js
var voiture = {marque&nbsp;: "Honda", modèle&nbsp;: "Accord", année&nbsp;: 1998};
delete voiture.marque;
"marque" in voiture  // renvoie false

var arbres = new Array("sapin", "hêtre", "cèdre", "chêne", "érable");
delete arbres[3];
3 in arbres // renvoie false
```

Si une propriété est définie à {{jsxref("Objets_globaux/undefined", "undefined")}} mais n'est pas supprimée, l'opérateur `in` renverra `true` pour cette propriété.

```js
var voiture = {marque&nbsp;: "Honda", modèle&nbsp;: "Accord", année&nbsp;: 1998};
voiture.marque = undefined;
"marque" in voiture  // renvoie true

var arbres = new Array("sapin", "hêtre", "cèdre", "chêne", "érable");
arbres[3] = undefined;
3 in arbres // renvoie true
```

### Propriétés héritées

L'opérateur `in` renvoie `true` pour les propriétés qui appartiennent à la chaîne de prototypes. SI on souhaite la présence d'une propriété non-héritée, on utilisera plutôt {{jsxref("Object.prototype.hasOwnProperty()")}}.

```js
"toString" in {}; // renvoie true
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-relational-operators', 'Relational Operators')}}     | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES2015', '#sec-relational-operators', 'Opérateurs relationnels')}} | {{Spec2('ES2015')}}     |                                                       |
| {{SpecName('ES5.1', '#sec-11.8.7', 'Opérateur in')}}                                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES3', '#sec-11.8.7', 'Opérateurs in')}}                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.4. |

## Compatibilité des navigateurs

{{Compat("javascript.operators.in")}}

## Voir aussi

- {{jsxref("Instructions/for...in","for...in")}}
- {{jsxref("Opérateurs/L_opérateur_delete","delete")}}
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Reflect.has()")}}
- [Caractère énumérable des propriétés et rattachement](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement)
