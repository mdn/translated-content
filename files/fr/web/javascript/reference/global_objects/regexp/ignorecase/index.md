---
title: "RegExp : propriété ignoreCase"
short-title: ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété d'accesseur **`ignoreCase`** des instances de {{JSxRef("RegExp")}} retourne si l'indicateur `i` est utilisé pour cette expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.ignoreCase")}}

```js interactive-example
const regex1 = /foo/;
const regex2 = /foo/i;

console.log(regex1.test("Football"));
// Résultat attendu : false

console.log(regex2.ignoreCase);
// Résultat attendu : true

console.log(regex2.test("Football"));
// Résultat attendu : true
```

## Description

`RegExp.prototype.ignoreCase` a la valeur `true` si l'indicateur `i` est utilisé&nbsp;; sinon, `false`. L'indicateur `i` indique que la casse doit être ignorée lors d'une tentative de correspondance dans une chaîne de caractères. La correspondance sans distinction de casse se fait en convertissant l'ensemble de caractères attendu et la chaîne de caractères correspondante dans la même casse.

Si l'expression rationnelle est [sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), la conversion de casse s'effectue par le _pliage simple de la casse_ défini dans [`CaseFolding.txt` <sup>(angl.)</sup>](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt). Cette conversion produit toujours un seul point de code, elle ne convertit donc pas, par exemple, `ß` (U+00DF LETTRE MINUSCULE LATINE S DUR) en `ss` (qui correspond au _pliage complet de la casse_, et non au _pliage simple de la casse_). Elle peut toutefois convertir des points de code extérieurs au bloc Latin de base en points de code appartenant à ce bloc — par exemple, `ſ` (U+017F LETTRE MINUSCULE LATINE S LONG) se plie en `s` (U+0073 LETTRE MINUSCULE LATINE S) et `K` (U+212A SIGNE KELVIN) se plie en `k` (U+006B LETTRE MINUSCULE LATINE K). Par conséquent, `/[a-z]/ui` peut correspondre à `ſ` et à `K`.

Si l'expression rationnelle ne tient pas compte de l'Unicode, la conversion de casse utilise la [conversion de casse par défaut Unicode <sup>(angl.)</sup>](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) — le même algorithme que celui utilisé dans {{JSxRef("String.prototype.toUpperCase()")}}. Cet algorithme empêche la conversion de points de code extérieurs au bloc Latin de base en points de code appartenant à ce bloc, donc `ſ` et `K` mentionnés précédemment ne correspondent pas à `/[a-z]/i`.

Le pliage de casse sensible à l'Unicode produit généralement des minuscules, tandis que le pliage de casse qui ne tient pas compte de l'Unicode produit des majuscules. Ces deux opérations ne sont pas parfaitement inverses, elles présentent donc de subtiles différences de comportement. Par exemple, `Ω` (U+2126 SIGNE OHM) et `Ω` (U+03A9 LETTRE MAJUSCULE GRECQUE OMÉGA) sont toutes deux converties en `ω` (U+03C9 LETTRE MINUSCULE GRECQUE OMÉGA) par le pliage simple de la casse, donc `"\u2126"` correspond à `/[\u03c9]/ui` et à `/[\u03a9]/ui`&nbsp;; en revanche, la conversion de casse par défaut convertit U+2126 en lui-même, tandis qu'elle convertit les deux autres en U+03A9, donc `"\u2126"` ne correspond ni à `/[\u03c9]/i` ni à `/[\u03a9]/i`.

L'accesseur définit `ignoreCase` comme `undefined`. Vous ne vous pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser `ignoreCase`

```js
var regex = new RegExp("toto", "i");

console.log(regex.ignoreCase); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("RegExp.prototype.lastIndex")}}
- La propriété {{JSxRef("RegExp.prototype.dotAll")}}
- La propriété {{JSxRef("RegExp.prototype.global")}}
- La propriété {{JSxRef("RegExp.prototype.hasIndices")}}
- La propriété {{JSxRef("RegExp.prototype.multiline")}}
- La propriété {{JSxRef("RegExp.prototype.source")}}
- La propriété {{JSxRef("RegExp.prototype.sticky")}}
- La propriété {{JSxRef("RegExp.prototype.unicode")}}
