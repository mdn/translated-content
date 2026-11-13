---
title: "String : méthode codePointAt()"
short-title: codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`codePointAt()`** des valeurs {{JSxRef("String")}} retourne un entier positif qui est la valeur du point de code Unicode du caractère commençant à l'indice donné. Notez que l'indice est toujours basé sur les unités de code UTF-16, et non sur les points de code Unicode.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.codePointAt()", "shorter")}}

```js interactive-example
const icons = "☃★♲";

console.log(icons.codePointAt(1));
// Résultat attendu : "9733"
```

## Syntaxe

```js-nolint
codePointAt(index)
```

### Paramètres

- `index`
  - : Un indice à partir de zéro du caractère à retourner. [Converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_en_entier) — `undefined` est converti en 0.

### Valeur de retour

Un entier qui n'est pas négatif représentant la valeur du point de code du caractère à un `index` donné.

- Si `index` est en dehors de la plage de `0` à `str.length - 1`, `codePointAt()` retourne {{JSxRef("undefined")}}.
- Si l'élément à `index` est un substitut principal UTF-16, retourne le point de code du _paire_ de substituts.
- Si l'élément à `index` est un substitut secondaire UTF-16, retourne _seulement_ l'unité de code du substitut secondaire.

## Description

Les caractères dans une chaîne de caractères sont indexés de gauche à droite. L'indice du premier caractère est `0`, et l'indice du dernier caractère d'une chaîne de caractères appelée `str` est `str.length - 1`.

Les points de code Unicode vont de `0` à `1114111` (`0x10FFFF`). En UTF-16, chaque indice de chaîne est une unité de code avec une valeur comprise entre `0` et `65535`. Les points de code plus élevés sont représentés par _une paire_ de pseudo-caractères substituts de 16 bits. Par conséquent, `codePointAt()` retourne un point de code qui peut s'étendre sur deux indices de chaîne de caractères. Pour plus d'informations sur Unicode, voir [Caractères UTF-16, points de code Unicode et grappes de graphèmes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes).

## Exemples

### Utiliser la méthode `codePointAt()`

```js
"ABC".codePointAt(0); // 65
"ABC".codePointAt(0).toString(16); // 41

"😍".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0).toString(16); // 1f60d

"😍".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1).toString(16); // de0d

"ABC".codePointAt(42); // undefined
```

### Boucler avec `codePointAt()`

Comme l'utilisation des indices de chaîne de caractères pour boucler fait que le même point de code est visité deux fois (une fois pour le substitut principal, une fois pour le substitut secondaire), et que la deuxième fois `codePointAt()` ne retourne _que_ le substitut secondaire, il est préférable d'éviter de boucler par indice.

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

Au lieu de cela, utilisez une instruction [`for...of`](/fr/docs/Web/JavaScript/Guide/Loops_and_iteration#instruction_for...of) ou [étalez la chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), qui invoquent toutes deux le [`[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) de la chaîne de caractères, qui itère par points de code. Ensuite, utilisez `codePointAt(0)` pour obtenir le point de code de chaque élément.

```js
for (const codePoint of str) {
  console.log(codePoint.codePointAt(0).toString(16));
}
// '1f40e', '1f471', '2764'

[...str].map((cp) => cp.codePointAt(0).toString(16));
// ['1f40e', '1f471', '2764']
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.codePointAt` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.codePointAt` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.prototype.codepointat)
- La méthode statique {{JSxRef("String.fromCodePoint()")}}
- La méthode statique {{JSxRef("String.fromCharCode()")}}
- La méthode {{JSxRef("String.prototype.charCodeAt()")}}
- La méthode {{JSxRef("String.prototype.charAt()")}}
