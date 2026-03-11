---
title: "Document : méthode queryCommandEnabled()"
short-title: queryCommandEnabled()
slug: Web/API/Document/queryCommandEnabled
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> Bien que la méthode {{DOMxRef("Document/execCommand", "execCommand()")}} soit obsolète, si vous décidez de l'utiliser pour les raisons indiquées sur cette page, vous devriez vérifier la disponibilité de la commande avec `queryCommandEnabled()` pour garantir la compatibilité.

La méthode **`queryCommandEnabled()`** de l'interface {{DOMxRef("Document")}} indique si la commande d'édition définie est activée par le navigateur.

## Syntaxe

```js-nolint
queryCommandEnabled(command)
```

### Paramètres

- `command`
  - : La commande pour laquelle déterminer la prise en charge.

### Valeur de retour

Retourne une valeur booléenne qui est `true` si la commande est activée et `false` si elle ne l'est pas.

## Notes

- Pour les commandes `"cut"` et `"copy"`, la méthode ne retourne vrai que lorsqu'elle est appelée depuis un processus initié par l'utilisateur·ice.
- La commande `"paste"` retourne `false` non seulement si la fonctionnalité est indisponible, mais aussi si le script qui l'appelle n'a pas les privilèges suffisants pour effectuer l'action.

## Exemples

```js
const flg = document.queryCommandEnabled("SelectAll");

if (flg) {
  document.execCommand("SelectAll", false, null); // la commande est activée, on l'exécute
}
```

## Spécifications

Cette fonctionnalité ne fait partie d'aucune spécification actuelle. Elle n'est plus destinée à devenir un standard. Il existe un [brouillon non officiel de la spécification W3C execCommand <sup>(angl.)</sup>](https://w3c.github.io/editing/docs/execCommand/).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("document.execCommand()")}}
- La méthode {{DOMxRef("document.queryCommandSupported()")}}
