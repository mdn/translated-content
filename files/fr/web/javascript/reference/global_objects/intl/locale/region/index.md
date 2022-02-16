---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Locale
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/region
---
{{JSRef}}

La propriété **`Intl.Locale.prototype.region`** est fournie par un accesseur qui renvoie la région du monde (il s'agit généralement d'un pays) associée à la locale courante.

## Description

La région est un fragment majeur de l'identifiant de la locale car il situe la locale dans une zone donnée du monde. Connaître la région associée à la locale est crucial pour identifier les différences entre les locales. Ainsi, on parle anglais aux États-Unis et au Royaume-Uni mais il existe certaines différences d'orthographe entre ces pays. Connaître la région d'une locale peut permettre aux développeurs d'adapter leurs sites et applications selon la région depuis laquelle ils sont consultés.

## Exemples

### Définir la région avec la chaîne de caractères décrivant la locale

La région est la troisième composante d'une chaîne représentant un identifiant de langue Unicode. Cette chaîne de caractères est généralement passée au constructeur {{jsxref("Locale", "Locale")}}.

```js
let regionStr = new Intl.Locale("en-Latn-US");

console.log(regionStr.region);
// Affichera "US" dans la console
```

### Définir la région via l'objet de configuration du constructeur

Le constructeur {{jsxref("Locale", "Locale")}} prend comme second argument un objet de paramétrage dont chacune des propriétés permet de définir une extension ou une composante de la locale.

```js
let regionObj = new Intl.Locale("fr-Latn", {region: "FR"});

console.log(regionObj.region);
// Affichera "FR" dans la console
```

## Spécifications

| Spécification                                                                                                                    | État                    | Commentaires |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour `Intl.Locale.prototype.region`](https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.region) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.Locale.region")}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- [Tableau Unicode des régions](https://www.unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html)
