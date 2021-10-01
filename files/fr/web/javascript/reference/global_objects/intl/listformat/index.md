---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
tags:
  - Experimental
  - Internationalisation
  - Intl
  - JavaScript
  - ListFormat
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/ListFormat
---
{{JSRef}}

L'objet **`Intl.ListFormat`** est un constructeur d'objets qui permettent de formater des listes de façon différente selon la langue utilisée.

{{EmbedInteractiveExample("pages/js/intl-listformat.html")}}

## Syntax

    new Intl.ListFormat([locales[, options]])

### Paramètres

- `locales`{{optional_inline}}
  - : Paramètre optionnel. Une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour le format général et l'interprétation de l'argument `locales`, voir la page {{jsxref("Intl","Intl","#L'identification_et_le_choix_de_la_locale")}}.
- `options`{{optional_inline}}

  - : Paramètre optionnel. Un objet avec certaines ou toutes les propriétés suivantes :

    - `localeMatcher`
      - : L'algorithme de correspondance à utiliser pour la locale. Les valeurs possibles sont `"lookup"` et `"best fit"` ; le défaut est `"best fit"`. Pour des informations sur cette option, voir la page {{jsxref("Intl","Intl","##Choix_de_la_locale")}}.
    - `type`

      - : Le format de sortie pour le message. Les valeurs possibles sont :

        - `"conjunction"` : qui concaténera les éléments de la liste avec des _et_. Cela produira par exemple, en anglais : `A, B, and C`
        - `"disjunction"` : qui concaténera les éléments de la liste avec des _ou_. Cela produira par exemple, en anglais : `A, B, or C`
        - `"unit"` : qui permet de gérer des listes de valeurs avec des unités. Cela produira par exemple `5 livres, 12 onces`

    - `style`

      - : Le niveau de concision/longueur du message obtenu. Les valeurs possibles sont :

        - `"long"` : par exemple `A, B, and C`
        - `"narrow"` : cette valeur permet uniquement d'utiliser le type `unit` et affichera un message concis : par exemple `A, B, C`
        - `"short"` : par exemple `A, B, C`

## Description

### Propriétés

- {{jsxref("ListFormat.prototype", "Intl.ListFormat.prototype")}}
  - : Cette propriété permet d'ajouter des propriétés à l'ensemble des objets de ce type.

### Méthodes

- {{jsxref("ListFormat.supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : Cette méthode renvoie un tableau des locales prises en charge par le moteur pour le formatage des heures sans qu'il y ait besoin d'utiliser la locale de l'environnement d'exécution.

## Instances de `Intl.ListFormat`

Toutes les instances de `Intl.ListFormat` héritent de `Intl.ListFormat.prototype`.

### Propriétés

- `Intl.ListFormat.prototype.constructor`
  - : Définit la fonction qui crée le prototype d'un objet.

### Méthodes

- {{jsxref("ListFormat.prototype.format","Intl.ListFormat.prototype.format()")}}
  - : Renvoie une chaîne de caractères mise en forme selon la langue voulue et qui représente les éléments de la liste.

## Exemples

### Utiliser `format()`

Dans l'exemple qui suit, on voit comment créer un formateur de liste pour l'anglais.

```js
const list = ['Motorcycle', 'Bus', 'Car'];

 console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).format(list));
// > Motorcycle, Bus and Car

 console.log(new Intl.ListFormat('en-GB', { style: 'short', type: 'disjunction' }).format(list));
// > Motorcycle, Bus or Car

 console.log(new Intl.ListFormat('en-GB', { style: 'narrow', type: 'unit' }).format(list));
// > Motorcycle Bus Car
```

### Utiliser `formatToParts()`

Dans l'exemple qui suit, on voit comment créer un formateur de liste, renvoyant les fragments, pour l'anglais

```js
const list = ['Motorcycle', 'Bus', 'Car'];
console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).formatToParts(list));

// > [ { "type": "element", "value": "Motorcycle" },
       { "type": "literal", "value": ", " },
       { "type": "element", "value": "Bus" },
       { "type": "literal", "value": ", and " },
       { "type": "element", "value": "Car" } ];
```

## Spécifications

| Spécification                                                                                              | État                    | Commentaires |
| ---------------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour `Intl.ListFormat`](https://tc39.github.io/proposal-intl-list-format/#listformat-objects) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.ListFormat")}}

## Voir aussi

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl', 'Voir_aussi')}}
