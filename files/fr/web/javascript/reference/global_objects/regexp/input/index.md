---
title: RegExp.input ($_)
short-title: input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Toutes les propriétés statiques de `RegExp` qui exposent l'état de la dernière correspondance globalement sont obsolètes. Voir [Fonctionnalités RegExp obsolètes](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) pour plus d'informations.

La propriété d'accesseur statique **`RegExp.input`** retourne la chaîne de caractères sur laquelle une expression rationnelle est testée. `RegExp.$_` est un alias de cette propriété.

## Description

Étant donné que `input` est une propriété statique de {{JSxRef("RegExp")}}, vous l'utilisez toujours comme `RegExp.input` ou `RegExp.$_`, plutôt que comme propriété d'un objet `RegExp` que vous avez créé.

La valeur de `input` est mise à jour chaque fois qu'une instance de `RegExp` (mais pas d'une sous-classe de `RegExp`) réussit une correspondance. Si aucune correspondance n'a été effectuée, `input` est une chaîne de caractères vide. Vous pouvez définir la valeur de `input`, mais cela n'affecte pas les autres comportements de l'expression rationnelle, et la valeur est de nouveau écrasée lors de la prochaine correspondance réussie.

## Exemples

### Utiliser `input` et `$_`

```js
const re = /salut/g;
re.test("salut ici !");
RegExp.input; // "salut ici !"
re.test("toto"); // nouveau test, pas de correspondance
RegExp.$_; // "salut ici !"
re.test("salut le monde !"); // nouveau test avec correspondance
RegExp.$_; // "salut le monde !"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété statique [`RegExp.lastMatch` (`$&`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- La propriété statique [`RegExp.lastParen` (`$+`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- La propriété statique [`RegExp.leftContext` (`` $` ``)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- La propriété statique [`RegExp.rightContext` (`$'`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- La propriété statique [`RegExp.$1`, …, `RegExp.$9`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
