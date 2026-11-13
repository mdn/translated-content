---
title: RegExp.leftContext ($`)
short-title: leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Toutes les propriétés statiques de `RegExp` qui exposent l'état de la dernière correspondance globalement sont obsolètes. Voir [Fonctionnalités RegExp obsolètes](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) pour plus d'informations.

La propriété d'accesseur statique **`RegExp.leftContext`** retourne la sous-chaîne de caractères précédant la correspondance la plus récente. ``RegExp["$`"]`` est un alias pour cette propriété.

## Description

Comme `leftContext` est une propriété statique de {{JSxRef("RegExp")}}, vous l'utilisez toujours comme `RegExp.leftContext` ou ``RegExp["$`"]``, plutôt que comme une propriété d'un objet `RegExp` que vous avez créé.

La valeur de `leftContext` est mise à jour chaque fois qu'une instance de `RegExp` (mais pas une sous-classe de `RegExp`) réussit une correspondance. Si aucune correspondance n'a été effectuée, `leftContext` est une chaîne de caractères vide. L'accesseur en écriture de `leftContext` est `undefined`, donc vous ne pouvez pas modifier cette propriété directement.

Vous ne pouvez pas utiliser l'alias raccourci avec l'accesseur de propriété par point (``RegExp.$` ``), car `` ` `` n'est pas une partie valide d'un identifiant, ce qui provoque une {{JSxRef("SyntaxError")}}. Utilisez plutôt la [notation avec les crochets](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`` $` `` peut également être utilisé pour remplacer une chaîne de caractères de {{JSxRef("String.prototype.replace()")}}, mais cela n'a aucun rapport avec la propriété héritée ``RegExp["$`"]``.

## Exemples

### Utiliser `leftContext` et `$\``

```js
const re = /monde/g;
re.test("coucou monde !");
RegExp.leftContext; // "coucou "
RegExp["$`"]; // "coucou "
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété statique [`RegExp.input` (`$_`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- La propriété statique [`RegExp.lastMatch` (`$&`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- La propriété statique [`RegExp.lastParen` (`$+`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- La propriété statique [`RegExp.rightContext` (`$'`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- La propriété statique [`RegExp.$1`, …, `RegExp.$9`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
