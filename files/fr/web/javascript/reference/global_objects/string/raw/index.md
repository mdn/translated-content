---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
---

{{JSRef}}

La méthode statique **`String.raw()`** est une fonction d'étiquetage (_tag function_) pour les [gabarits de chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Littéraux_gabarits#Les_gabarits_étiquetés) (elle est [semblable](https://bugs.chromium.org/p/v8/issues/detail?id=5016) au préfixe `r` en Python ou au préfixe `@` en C#). Cette fonction permet d'obtenir la chaîne brute pour un gabarit (les caractères spéciaux ne sont pas pris en compte mais retranscrits tels quels, les séquences d'échappement ne sont pas interprétées et les emplacements (ex. `${toto}`) sont traités).

{{EmbedInteractiveExample("pages/js/string-raw.html")}}

## Syntaxe

```js
String.raw(callSite, ...substitutions);

String.raw`gabaritChaîne`;
```

### Paramètres

- `callSite`
  - : Un site d'appel bien formé pour un gabarit (_call site object_) tel que `{raw: "string"}`.
- ...substitutions
  - : Paramètre contenant les valeurs à substituer.
- gabaritChaîne
  - : [Un gabarit de chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Gabarit_chaînes_caractères), éventuellement avec des substitutions (`${...}`).

### Valeur de retour

La chaîne de caractères brute correspondant à un gabarit donné.

### Exceptions

- {{jsxref("TypeError")}}
  - : Une exception `TypeError` est renvoyée si le premier argument n'est pas un objet bien formé.

## Description

Dans la plupart des cas, `String.raw()` est utilisé avec des gabarits de chaînes de caractères. La première syntaxe, présentée ci-avant est rarement utilisée. En effet, le moteur JavaScript appellera cette forme avec les arguments appropriés, comme pour les [fonctions d'étiquetage (_tag_)](/fr/docs/Web/JavaScript/Reference/Gabarit_chaînes_caractères#Les_gabarits_de_cha.C3.AEnes_.C3.A9tiquett.C3.A9s).

La méthode `String.raw()` est la seule méthode d'étiquetage native pour les chaînes de caractères. Elle fonctionne comme la fonction par défaut pour les gabarits et permet d'effectuer des concaténations. Il est également possible d'implémenter cette méthode avec du code JavaScript.

## Exemples

```js
String.raw`Hi\n${2 + 3}!`;
// "Hi\n5!", le caractère après "Hi" n'est pas
// le caractère de nouvelle ligne
// "\" et "n" sont bien deux caractères distincts
// ici.

String.raw`Hi\u000A!`;
// "Hi\u000A!", de même ici. Les caractères
//  \, u, 0, 0, 0, A et 6 sont distincts.
// Tous les caractères d'échappement seront
// inefficaces. Des backslashes peuvent donc être
// présents dans la chaîne produite. Cela peut
// être vérifié avec la propriété .length de la
// chaîne.

let nom = "Bob";
String.raw`Hi\n${nom}!`;
// "Hi\nBob!", les remplacements sont effectués.

// Généralement, on n'appelle pas String.raw
// comme une fonction, mais c'est possible :
String.raw({ raw: "test" }, 0, 1, 2);
// "t0e1s2t"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gabarits de chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Gabarit_chaînes_caractères)
- {{jsxref("String")}}
- [Grammaire lexicale JavaScript](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale)
