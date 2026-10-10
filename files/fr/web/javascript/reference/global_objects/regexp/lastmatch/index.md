---
title: RegExp.lastMatch ($&)
short-title: lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Toutes les propriétés statiques de `RegExp` qui exposent l'état de la dernière correspondance globalement sont obsolètes. Voir [Fonctionnalités RegExp obsolètes](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) pour plus d'informations.

La propriété d'accesseur statique **`RegExp.lastMatch`** retourne la dernière sous-chaîne de caractères correspondante. `RegExp["$&"]` est un alias pour cette propriété.

## Description

Comme `lastMatch` est une propriété statique de {{JSxRef("RegExp")}}, vous l'utilisez toujours comme `RegExp.lastMatch` ou `RegExp["$&"]`, plutôt que comme une propriété d'un objet `RegExp` que vous avez créé.

La valeur de `lastMatch` est mise à jour chaque fois qu'une instance de `RegExp` (mais pas une sous-classe de `RegExp`) trouve une correspondance avec succès. Si aucune correspondance n'a été trouvée, `lastMatch` est une chaîne de caractères vide. L'accesseur en écriture de `lastMatch` est `undefined`, vous ne pouvez donc pas modifier cette propriété directement.

Vous ne pouvez pas utiliser l'alias avec la notation utilisant le point pour accéder à la propriété (`RegExp.$&`), car `&` n'est pas une partie valide d'un identifiant, ce qui provoque une {{JSxRef("SyntaxError")}}. Utilisez plutôt la [notation avec les crochets](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$&` peut également être utilisé dans la chaîne de caractères de remplacement de {{JSxRef("String.prototype.replace()")}}, mais cela n'a aucun rapport avec la propriété héritée `RegExp["$&"]`.

## Exemples

### Utiliser `lastMatch` et `$&`

```js
const re = /coucou/g;
re.test("coucou toi!");
RegExp.lastMatch; // "coucou"
RegExp["$&"]; // "coucou"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété statique [`RegExp.input` (`$_`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- La propriété statique [`RegExp.lastParen` (`$+`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- La propriété statique [`RegExp.leftContext` (`` $` ``)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- La propriété statique [`RegExp.rightContext` (`$'`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- La propriété statique [`RegExp.$1`, …, `RegExp.$9`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
