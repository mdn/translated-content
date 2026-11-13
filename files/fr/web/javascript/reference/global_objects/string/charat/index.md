---
title: "String : méthode charAt()"
short-title: charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`charAt()`** de valeurs {{JSxRef("String")}} retourne une nouvelle chaîne de caractères contenant l'unité de code UTF-16 unique à l'indice donné.

`charAt()` indexe toujours la chaîne de caractères comme une séquence [d'unités de code UTF-16](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes), donc elle peut retourner des substituts isolés. Pour obtenir le point de code Unicode complet à l'indice donné, utilisez {{JSxRef("String.prototype.codePointAt()")}} et {{JSxRef("String.fromCodePoint()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.charAt()", "shorter")}}

```js interactive-example
const sentence = "Le rapide renard brun saute par-dessus le chien paresseux.";

const index = 4;

console.log(`Le caractère d'indice ${index} est ${sentence.charAt(index)}`);
// Résultat attendu : "Le caractère d'indice 4 est a"
```

## Syntaxe

```js-nolint
charAt(index)
```

### Paramètres

- `index`
  - : Un entier représentant l'indice basé sur zéro du caractère à retourner. [Converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_en_entier) — `undefined` est converti en 0.

### Valeur de retour

Une chaîne de caractères représentant le caractère (exactement une unité de code UTF-16) à l'indice (`index`) défini. Si `index` est en dehors de l'intervalle de `0` à `str.length - 1`, `charAt()` retourne une chaîne de caractères vide.

## Description

Les caractères d'une chaîne de caractères sont indexés de la gauche vers la droite. L'indice du premier caractère est `0` et l'indice du dernier caractère d'une chaîne de caractères appelée `str` est `str.length - 1`.

Les points de code Unicode vont de `0` à `1114111` (`0x10FFFF`). `charAt()` retourne toujours un caractère dont la valeur est inférieure à `65536`, car les points de code les plus élevés sont représentés par _une paire_ de pseudo-caractères de substitution de 16 bits. Par conséquent, pour obtenir un caractère complet dont la valeur est supérieure à `65535`, il est nécessaire de récupérer non seulement `charAt(i)`, mais aussi `charAt(i + 1)` (comme si l'on manipule une chaîne de caractères avec deux caractères), ou d'utiliser {{JSxRef("String/codePointAt", "codePointAt(i)")}} et {{JSxRef("String.fromCodePoint()")}} à la place. Pour plus d'informations sur Unicode, voir [Caractères UTF-16, points de code Unicode et groupes de graphèmes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes).

`charAt()` est très similaire à l'utilisation de la [notation entre crochets](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors#notation_avec_crochets) pour accéder à un caractère à l'indice définit. Les principales différences sont&nbsp;:

- `charAt()` tente de convertir `index` en nombre entier, contrairement à la notation entre crochets, qui utilise directement `index` comme nom de propriété.
- `charAt()` retourne une chaîne de caractères vide si `index` est hors de la plage autorisée, tandis que la notation entre crochets retourne `undefined`.

## Exemples

### Utiliser la méthode `charAt()`

L'exemple suivant affiche des caractères situés à différents emplacements dans la chaîne de caractères `"Un nouveau monde"`&nbsp;:

```js
const uneChaine = "Un nouveau monde";
console.log(`Le caractère à l'indice 0   est '${uneChaine.charAt()}'`);
// Aucun indice n'a été fourni, 0 est utilisé par défaut

console.log(`Le caractère à l'indice 0   est '${uneChaine.charAt(0)}'`);
console.log(`Le caractère à l'indice 1   est '${uneChaine.charAt(1)}'`);
console.log(`Le caractère à l'indice 2   est '${uneChaine.charAt(2)}'`);
console.log(`Le caractère à l'indice 3   est '${uneChaine.charAt(3)}'`);
console.log(`Le caractère à l'indice 4   est '${uneChaine.charAt(4)}'`);
console.log(`Le caractère à l'indice 999 est '${uneChaine.charAt(999)}'`);
```

Ces lignes affichent ce qui suit&nbsp;:

```plain
Le caractère à l'indice 0   est 'U'

Le caractère à l'indice 0   est 'U'
Le caractère à l'indice 1   est 'n'
Le caractère à l'indice 2   est ' '
Le caractère à l'indice 3   est 'n'
Le caractère à l'indice 4   est 'o'
Le caractère à l'indice 999 est ''
```

`charAt()` peut retourner des substituts isolés, qui ne sont pas des caractères Unicode valides.

```js
const chaine = "𠮷𠮾";
console.log(chaine.charAt(0)); // "\ud842", qui n'est pas un caractère Unicode valide
console.log(chaine.charAt(1)); // "\udfb7", qui n'est pas un caractère Unicode valide
```

Pour obtenir le point de code Unicode complet à l'indice donné, utilisez une méthode d'indexation qui divise par points de code Unicode, comme {{JSxRef("String.prototype.codePointAt()")}} et [la propagation des chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) dans un tableau de points de code Unicode.

```js
const chaine = "𠮷𠮾";
console.log(String.fromCodePoint(chaine.codePointAt(0))); // "𠮷"
console.log([...chaine][0]); // "𠮷"
```

> [!NOTE]
> Évitez de réimplémenter les solutions ci-dessus en utilisant `charAt()`. La détection des substituts isolés et leur appariement est complexe, et les API intégrées peuvent être plus performantes, car elles utilisent directement la représentation interne de la chaîne de caractères. Installez une prothèse d'émulation pour les API mentionnées ci-dessus si nécessaire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("String.prototype.indexOf()")}}
- La méthode {{JSxRef("String.prototype.lastIndexOf()")}}
- La méthode {{JSxRef("String.prototype.charCodeAt()")}}
- La méthode {{JSxRef("String.prototype.codePointAt()")}}
- La méthode {{JSxRef("String.prototype.split()")}}
- La méthode statique {{JSxRef("String.fromCodePoint()")}}
- [JavaScript a un problème avec Unicode <sup>(angl.)</sup>](https://mathiasbynens.be/notes/javascript-unicode) par Mathias Bynens (2013)
