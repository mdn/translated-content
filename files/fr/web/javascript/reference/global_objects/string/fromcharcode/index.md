---
title: "String : méthode statique fromCharCode()"
short-title: fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`String.fromCharCode()`** retourne une chaîne de caractères créée à partir de la séquence définie d'unités de code UTF-16.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.fromCharCode()", "shorter")}}

```js interactive-example
console.log(String.fromCharCode(189, 43, 190, 61));
// Résultat attendu : "½+¾="
```

## Syntaxe

```js-nolint
String.fromCharCode()
String.fromCharCode(num1)
String.fromCharCode(num1, num2)
String.fromCharCode(num1, num2, /* …, */ numN)
```

### Paramètres

- `num1`, …, `numN`
  - : Un nombre compris entre `0` et `65535` (`0xFFFF`) représentant une unité de code UTF-16. Les nombres supérieurs à `0xFFFF` sont tronqués aux 16 derniers bits. Aucune vérification de validité n'est effectuée.

### Valeur de retour

Une chaîne de caractères de longueur `N` composée des `N` unités de code UTF-16 définies.

## Description

Étant donné que `fromCharCode()` est une méthode statique de `String`, vous l'utilisez toujours sous la forme `String.fromCharCode()`, plutôt qu'en tant que méthode d'une valeur `String` que vous avez créée.

Les points de code Unicode vont de `0` à `1114111` (`0x10FFFF`). `charCodeAt()` retourne toujours une valeur inférieure à `65536`, car les points de code supérieurs sont représentés par _une paire_ de pseudo-caractères substituts de 16 bits. Par conséquent, afin de produire un caractère complet dont la valeur est supérieure à `65535`, il est nécessaire de fournir deux unités de code (comme si l'on manipule une chaîne de caractères de deux caractères). Pour plus d'informations sur Unicode, voir [Caractères UTF-16, points de code Unicode et groupes de graphèmes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes).

Étant donné que `fromCharCode()` ne fonctionne qu'avec des valeurs sur 16 bits (comme la séquence d'échappement `\u`), une paire de substituts est nécessaire pour retourner un caractère supplémentaire. Par exemple, `String.fromCharCode(0xd83c, 0xdf03)` et `"\ud83c\udf03"` retournent tous deux le point de code `U+1F303` «&nbsp;Nuit étoilée&nbsp;». Bien qu'il existe une relation mathématique entre la valeur du point de code supplémentaire (par exemple, `0x1f303`) et les deux valeurs de substituts qui le représentent (par exemple, `0xd83c` et `0xdf03`), il est nécessaire de calculer ou de rechercher les valeurs de la paire de substituts chaque fois qu'un point de code supplémentaire doit être utilisé. Pour cette raison, il est plus pratique d'utiliser {{JSxRef("String.fromCodePoint()")}}, qui permet de retourner des caractères supplémentaires en fonction de leur valeur réelle de point de code. Par exemple, `String.fromCodePoint(0x1f303)` retourne le point de code `U+1F303` «&nbsp;Nuit étoilée&nbsp;».

## Exemples

### Utiliser la méthode `fromCharCode()`

Les caractères du plan multilingue de base (BMP), en UTF-16, utilisent une seule unité de code&nbsp;:

```js
String.fromCharCode(65, 66, 67); // retourne "ABC"
String.fromCharCode(0x2014); // retourne "—"
String.fromCharCode(0x12014); // retourne également "—" ; le chiffre 1 est tronqué et ignoré
String.fromCharCode(8212); // retourne également "—" ; 8212 est la forme décimale de 0x2014
```

Les caractères supplémentaires, en UTF-16, nécessitent deux unités de code (c'est-à-dire une paire de substituts)&nbsp;:

```js
String.fromCharCode(0xd83c, 0xdf03); // Point de code U+1F303 "Nuit avec
String.fromCharCode(55356, 57091); // étoiles" === "\uD83C\uDF03"

String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07); // "\uD834\uDF06a\uD834\uDF07"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("String.fromCodePoint()")}}
- La méthode {{JSxRef("String.prototype.charAt()")}}
- La méthode {{JSxRef("String.prototype.charCodeAt()")}}
- La méthode {{JSxRef("String.prototype.codePointAt()")}}
