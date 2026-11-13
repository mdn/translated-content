---
title: "RegExp : propriété unicodeSets"
short-title: unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
l10n:
  sourceCommit: 9fac65196ac2b9a26afabbcb7f14fd58621916ae
---

La propriété d'accesseur **`unicodeSets`** des instances de {{JSxRef("RegExp")}} retourne si l'indicateur `v` est utilisé ou non avec cette expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.unicodeSets")}}

```js interactive-example
const regex1 = /[α-ω]/u;
const regex2 = /[\p{Lowercase}&&\p{Script=Greek}]/v;

console.log(regex1.unicodeSets);
// Résultat attendu : false

console.log(regex2.unicodeSets);
// Résultat attendu : true
```

## Description

`RegExp.prototype.unicodeSets` a la valeur `true` si l'indicateur `v` a été utilisé&nbsp;; sinon, `false`. L'indicateur `v` est une «&nbsp;mise à niveau&nbsp;» de l'indicateur [`u`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) qui active davantage de fonctionnalités liées à Unicode. («&nbsp;v&nbsp;» est la lettre suivante après «&nbsp;u&nbsp;» dans l'alphabet.) Comme `u` et `v` interprètent la même expression rationnelle de manière incompatible, l'utilisation des deux indicateurs entraîne une {{JSxRef("SyntaxError")}}. Avec l'indicateur `v`, vous obtenez toutes les fonctionnalités mentionnées dans la description de l'indicateur `u`, plus&nbsp;:

- La séquence d'échappement [`\p`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) peut également être utilisée pour correspondre aux propriétés des chaînes de caractères, au lieu de se limiter aux caractères.
- La syntaxe de [classe de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) est améliorée pour permettre les syntaxes d'intersection, d'union et de soustraction, ainsi que la correspondance de plusieurs caractères Unicode.
- La syntaxe de complément de classe de caractères `[^...]` construit une classe complémentaire au lieu de nier le résultat de la correspondance, évitant certains comportements déroutants avec la correspondance insensible à la casse. Pour plus d'informations, voir [Classes complémentaires et correspondance insensible à la casse](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#classes_complémentaires_et_correspondance_insensible_à_la_casse).

Certaines expressions rationnelles valides en mode `u` deviennent invalides en mode `v`. Plus précisément, la syntaxe de la classe de caractères est différente et certains caractères ne peuvent plus apparaître littéralement. Pour plus d'informations, voir [Classe de caractères en mode `v`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#classe_de_caractères_du_mode_v).

> [!NOTE]
> Le mode `v` n'interprète pas les grappes de graphèmes comme des caractères uniques&nbsp;; elles restent constituées de plusieurs points de code. Par exemple, `/[🇺🇳]/v` peut toujours correspondre à `"🇺"`.

L'accesseur définit `unicodeSets` sur `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser la propriété `unicodeSets`

```js
const regex = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v;

console.log(regex.unicodeSets); // true
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
- La propriété {{JSxRef("RegExp.prototype.ignoreCase")}}
- La propriété {{JSxRef("RegExp.prototype.multiline")}}
- La propriété {{JSxRef("RegExp.prototype.source")}}
- La propriété {{JSxRef("RegExp.prototype.sticky")}}
- La propriété {{JSxRef("RegExp.prototype.unicode")}}
- [L'indicateur `v` de RegExp avec la notation des ensembles et les propriétés des chaînes de caractères <sup>(angl.)</sup>](https://v8.dev/features/regexp-v-flag) sur v8.dev (2022)
