---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - PluralRules
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/PluralRules
---
{{JSRef}}

L'objet **`Intl.PluralRules`** est un constructeur d'objets qui permettent de mettre en forme des chaînes de caractères en fonction des règles de nombre (pluriel) d'une langue donnée.

## Syntaxe

    new Intl.PluralRules([locales[, options]])

### Paramètres

- `locales`
  - : Une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour le format général et l'interprétation de l'argument `locales`, voir la page {{jsxref("Objets_globaux/Intl","Intl","#L'identification_et_le_choix_de_la_locale")}}.
- `options` {{optional_inline}}

  - : Optionnel, un objet possédant tout ou partie des propriétés suivantes :

    - `localeMatcher`
      - : L'algorithme de correspondance à utiliser pour la locale. Les valeurs possibles sont `"lookup"` et `"best fit"` ; le défaut est `"best fit"`. Pour des informations sur cette option, voir la page {{jsxref("Objets_globaux/Intl","Intl","##Choix_de_la_locale")}}
    - `type`

      - : Le type de numérotation à utiliser. Les valeurs possibles sont :

        - `"cardinal"` pour les nombres cardinaux (la quantité de telle ou telle chose). Cette valeur est la valeur par défaut.
        - `"ordinal"` pour les nombres ordinaux (l'ordre relatif de différentes choses « premier », « deuxième », « troisième »).

## Description

### Propriétés

- {{jsxref("PluralRules.prototype", "Intl.PluralRules.prototype")}}
  - : Cette propriété permet d'ajouter des propriétés aux objets `Intl.PluralRules`.

### Méthodes

- {{jsxref("PluralRules.supportedLocalesOf", "Intl.PluralRules.supportedLocalesOf()")}}
  - : Cette méthode renvoie un tableau contenant les locales prises en charge sans que le moteur ait à utiliser la locale par défaut du système d'exécution.

## Instances de `PluralRules`

### Propriétés

Les instances de `PluralRules` héritent des propriétés suivantes de par leur prototype :

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/PluralRules/prototype', 'Propriétés')}}

### Méthodes

Les instances de `PluralRules` héritent des méthodes suivantes de par leur prototype :

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/PluralRules/prototype', 'Méthodes')}}

## Exemples

### Exemple simple

Sans indiquer de locale, une chaîne formatée dans la locale par défaut et avec les options par défaut est renvoyée. On peut ainsi différencier entre le singulier et le pluriel (par exemple "chien" et "chiens").

```js
var pr = new Intl.PluralRules();

pr.select(0);
// → 'one' si utilisée avec une locale anglais américain

pr.select(1);
// → 'one' si utilisée avec une locale anglais américain

pr.select(2);
// → 'other' si utilisée avec une locale anglais américain
```

### Utiliser `locales`

Dans cet exemple, on voit l'impact de la locale sur les règles de nombre. Afin de respecter la langue de l'utilisateur dans votre application, assurez vous d'indiquer cette langue (et éventuellement une langue de secours) grâce à l'argument `locales` :

```js
// L'arabe possède plusieurs règles
// de nombre

new Intl.PluralRules('ar-EG').select(0);
// → 'zero'
new Intl.PluralRules('ar-EG').select(1);
// → 'one'
new Intl.PluralRules('ar-EG').select(2);
// → 'two'
new Intl.PluralRules('ar-EG').select(6);
// → 'few'
new Intl.PluralRules('ar-EG').select(18);
// → 'many'
```

### Utiliser `options`

Les résultats obtenus peuvent être adaptés grâce à l'argument `options`. Celui-ci possède une propriété appelée `type` qui peut valoir `ordinal`. Cela peut être utile afin de déterminer la forme d'un indicateur ordinal (par exemple, "1er", "2e", etc.).

```js
var pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

pr.select(0);
// → 'other'
pr.select(1);
// → 'one'
pr.select(2);
// → 'two'
pr.select(3);
// → 'few'
pr.select(4);
// → 'other'
pr.select(42);
// → 'two'
```

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| [Proposition pour le constructeur `Intl.PluralRules`](https://tc39.es/ecma402/#sec-intl-pluralrules-constructor) | {{Spec2('ES Int Draft')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.PluralRules")}}

## Voir aussi

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl', 'Voir_aussi')}}
