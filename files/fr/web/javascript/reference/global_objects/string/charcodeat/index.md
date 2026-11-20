---
title: "String : méthode charCodeAt()"
short-title: charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`charCodeAt()`** des valeurs {{JSxRef("String")}} retourne un entier compris entre `0` et `65535` représentant le codet UTF-16 à l'indice donné.

`charCodeAt()` indexe la chaîne de caractères comme une séquence de [unités de code UTF-16](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes), donc elle peut retourner des substituts isolés. Pour obtenir le point de code Unicode complet à l'indice donné, utilisez {{JSxRef("String.prototype.codePointAt()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.charCodeAt()", "shorter")}}

```js interactive-example
const sentence = "Le rapide renard brun saute par-dessus le chien paresseux.";

const index = 4;

console.log(
  `Le code du caractère ${sentence.charCodeAt(index)} est égal à ${sentence.charAt(
    index,
  )}`,
);
// Résultat attendu : "Le code du caractère 113 est égal à q"
```

## Syntaxe

```js-nolint
charCodeAt(index)
```

### Paramètres

- `index`
  - : Un entier représentant l'indice basé sur zéro du caractère à retourner. [Converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_en_entier) — `undefined` est converti en 0.

### Valeur de retour

Un entier compris entre `0` et `65535` représentant la valeur de l'unité de code UTF-16 du caractère à un `index` défini. Si `index` est en dehors de la plage de `0` à `str.length - 1`, `charCodeAt()` retourne {{JSxRef("NaN")}}.

## Description

Les caractères dans une chaîne de caractères sont indexés de gauche à droite. L'indice du premier caractère est `0`, et l'indice du dernier caractère dans une chaîne de caractères appelée `str` est `str.length - 1`.

Les points de code Unicode vont de `0` à `1114111` (`0x10FFFF`). `charCodeAt()` retourne toujours une valeur inférieure à `65536`, car les points de code plus élevés sont représentés par _une paire_ de pseudo-caractères sur 16 bits appelés substituts. Par conséquent, pour obtenir un caractère complet dont la valeur est supérieure à `65535`, il est nécessaire de récupérer non seulement `charCodeAt(i)`, mais aussi `charCodeAt(i + 1)` (comme si l'on manipule une chaîne de caractères qui a deux caractères), ou d'utiliser {{JSxRef("String/codePointAt", "codePointAt(i)")}} à la place. Pour plus d'informations sur Unicode, voir [Caractères UTF-16, points de code Unicode et groupes de graphèmes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes).

## Exemples

### Utiliser la méthode `charCodeAt()`

L'exemple suivant retourne 65, la valeur Unicode de A.

```js
"ABC".charCodeAt(0); // retourne 65
```

`charCodeAt()` peut retourner des substituts isolés, qui ne sont pas des caractères Unicode valides.

```js
const chaine = "𠮷𠮾";
console.log(chaine.charCodeAt(0)); // 55362, ou d842, qui n'est pas un caractère Unicode valide
console.log(chaine.charCodeAt(1)); // 57271, ou dfb7, qui n'est pas un caractère Unicode valide
```

Pour obtenir le point de code Unicode complet à l'indice donné, utilisez {{JSxRef("String.prototype.codePointAt()")}}.

```js
const chaine = "𠮷𠮾";
console.log(chaine.codePointAt(0)); // 134071
```

> [!NOTE]
> Évitez de réimplémenter `codePointAt()` en utilisant `charCodeAt()`. La conversion des substituts UTF-16 en points de code Unicode est complexe, et `codePointAt()` peut être plus performant, car il utilise directement la représentation interne de la chaîne de caractères. Installez une prothèse d'émulation pour `codePointAt()` si nécessaire.

Voici un algorithme possible pour convertir une paire d'unités de code UTF-16 en un point de code Unicode, adapté de la [FAQ Unicode <sup>(angl.)</sup>](https://unicode.org/faq/utf_bom.html#utf16-3)&nbsp;:

```js
// constantes
const LEAD_OFFSET = 0xd800 - (0x10000 >> 10);
const SURROGATE_OFFSET = 0x10000 - (0xd800 << 10) - 0xdc00;

function utf16ToUnicode(lead, trail) {
  return (lead << 10) + trail + SURROGATE_OFFSET;
}
function unicodeToUTF16(codePoint) {
  const lead = LEAD_OFFSET + (codePoint >> 10);
  const trail = 0xdc00 + (codePoint & 0x3ff);
  return [lead, trail];
}

const str = "𠮷";
console.log(utf16ToUnicode(str.charCodeAt(0), str.charCodeAt(1))); // 134071
console.log(str.codePointAt(0)); // 134071
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("String.fromCharCode()")}}
- La méthode {{JSxRef("String.prototype.charAt()")}}
- La méthode statique {{JSxRef("String.fromCodePoint()")}}
- La méthode {{JSxRef("String.prototype.codePointAt()")}}
