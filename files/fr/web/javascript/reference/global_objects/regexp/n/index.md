---
title: RegExp.$1, …, RegExp.$9
short-title: $1, …, $9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Toutes les propriétés statiques de `RegExp` qui exposent l'état de la dernière correspondance globalement sont obsolètes. Voir [Fonctionnalités RegExp obsolètes](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) pour plus d'informations.

La propriété d'accesseur statique **`RegExp.$1, …, RegExp.$9`** retourne les sous-chaînes de caractères entre parenthèses correspondant aux groupes capturés.

## Description

Comme `$1` à `$9` sont des propriétés statiques de {{JSxRef("RegExp")}}, vous les utilisez toujours sous la forme `RegExp.$1`, `RegExp.$2`, etc., plutôt qu'en tant que propriétés d'un objet `RegExp` que vous avez créé.

Les valeurs de `$1, …, $9` sont mises à jour chaque fois qu'une instance de `RegExp` (mais pas d'une sous-classe de `RegExp`) réussit une correspondance. Si aucune correspondance n'a été effectuée, ou si la dernière correspondance ne contient pas le groupe capturant correspondant, la propriété respective est une chaîne de caractères vide. L'accesseur en écriture de chaque propriété est `undefined`, vous ne pouvez donc pas modifier les propriétés directement.

Le nombre de sous-chaînes de caractères entre parenthèses possibles est illimité, mais l'objet `RegExp` ne peut contenir que les neuf premières. Vous pouvez accéder à toutes les sous-chaînes de caractères entre parenthèses par les index du tableau retourné.

`$1, …, $9` peuvent également être utilisés dans la chaîne de caractères de remplacement de {{JSxRef("String.prototype.replace()")}}, mais cela n'a aucun rapport avec les propriétés héritées `RegExp.$n`.

## Exemples

### Utiliser `$n` avec `RegExp.prototype.test()`

Le script suivant utilise la méthode {{JSxRef("RegExp.prototype.test()")}} pour récupérer un nombre dans une chaîne de caractères générique.

```js
const chaine = "Test 24";
const nombre = /(\d+)/.test(chaine) ? RegExp.$1 : "0";
nombre; // "24"
```

Veuillez noter que toute opération impliquant l'utilisation d'autres expressions rationnelles entre un appel à `re.test(chaine)` et la propriété `RegExp.$n` peut avoir des effets secondaires, de sorte que l'accès à ces propriétés spéciales doit être effectué immédiatement, sinon le résultat peut être inattendu.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété statique [`RegExp.input` (`$_`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- La propriété statique [`RegExp.lastMatch` (`$&`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- La propriété statique [`RegExp.lastParen` (`$+`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- La propriété statique [`RegExp.leftContext` (`` $` ``)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- La propriété statique [`RegExp.rightContext` (`$'`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
