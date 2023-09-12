---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
---

{{JSRef}}

La propriété **`Intl.Locale.prototype.language`** est une propriété fournie via un accesseur qui renvoie la langue associée à la locale.

## Description

La langue est l'une des caractéristiques majeurs d'une locale. La spécification Unicode indique que l'identifiant de la langue d'une locale est composée de l'identifiant canonique de la langue et de l'identifiant de la réponse (on pourra ainsi distinguer l'anglais britannique de l'anglais américain). Toutefois, la propriété `language` de {{jsxref("Locale", "Locale")}} renvoie uniquement la composante relative à la langue.

## Exemples

### Indiquer la langue via la chaîne décrivant la locale

Afin de pouvoir représenter une locale Unicode correctement, une chaîne doit commencer par un identifiant de langue. Le principal argument du constructeur {{jsxref("Locale", "Locale")}} doit être un identifiant valide et doit donc contenir la composante liée à la langue.

```js
let langStr = new Intl.Locale("en-Latn-US");

console.log(langStr.language); // Affichera "en" dans la console
```

### Surcharger la langue via l'objet de configuration

Bien que la composante de la langue doive être indiquée dans le premier paramètre, le constructeur {{jsxref("Locale", "Locale")}} prend comme deuxième argument un objet de configuration qui permet de surcharger cette composante.

```js
let langObj = new Intl.Locale("en-Latn-US", { language: "es" });

console.log(langObj.language); // Affichera "es" dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Locale", "Locale")}}
- [Spécification des extensions Unicode](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity)
