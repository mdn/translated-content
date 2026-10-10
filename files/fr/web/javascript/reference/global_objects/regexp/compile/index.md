---
title: "RegExp : méthode compile()"
short-title: compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> La méthode `compile()` n'est définie que pour des raisons de compatibilité. L'utilisation de `compile()` rend la source et les drapeaux de l'expression rationnelle, autrement immuables, mutables, ce qui peut perturber les attentes de l'utilisateur·ice. Vous pouvez utiliser le constructeur {{JSxRef("RegExp/RegExp", "RegExp()")}} pour créer un nouvel objet expression rationnelle à la place.

La méthode **`compile()`** des instances de {{JSxRef("RegExp")}} est utilisée pour recompiler une expression rationnelle avec une nouvelle source et de nouveaux drapeaux après que l'objet `RegExp` a déjà été créé.

## Syntaxe

```js-nolint
compile(pattern, flags)
```

### Paramètres

- `pattern`
  - : Le texte de l'expression rationnelle.
- `flags`
  - : Toute combinaison des [valeurs d'indicateurs](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#indicateurs).

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Lève une exception si la valeur de `this` n'est pas une instance du constructeur `RegExp` du domaine actuel.
    Cela inclut une sous-classe de `RegExp` et le constructeur `RegExp` d'un domaine différent.

## Exemples

### Utiliser `compile()`

L'exemple suivant montre comment recompiler une expression rationnelle avec un nouveau motif et un nouveau drapeau.

```js
const regexObj = /toto/gi;
regexObj.compile("nouveau toto", "g");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("RegExp")}}
