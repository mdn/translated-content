---
title: "Document : méthode queryCommandSupported()"
short-title: queryCommandSupported()
slug: Web/API/Document/queryCommandSupported
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> Bien que la méthode {{DOMxRef("Document/execCommand", "execCommand()")}} soit obsolète, si vous décidez de l'utiliser pour les raisons mentionnées sur cette page, vous devriez envisager de vérifier la disponibilité de la commande en utilisant `queryCommandSupported()` pour garantir la compatibilité.

La méthode **`queryCommandSupported()`** de l'interface {{DOMxRef("Document")}} indique si la commande d'éditeur définie est prise en charge par le navigateur.

## Syntaxe

```js-nolint
queryCommandSupported(command)
```

### Paramètres

- `command`
  - : La commande pour laquelle on veut déterminer si elle est prise en charge.

### Valeur de retour

Retourne une valeur booléenne qui est `true` si la commande est prise en charge et `false` si elle ne l'est pas.

## Notes

La commande `"paste"` (coller) retourne `false` non seulement si la fonctionnalité n'est pas disponible, mais aussi si le script l'appelant n'a pas les privilèges suffisants pour effectuer l'action.

## Exemples

```js
const flg = document.queryCommandSupported("SelectAll");

if (flg) {
  // ...Faire quelque chose
}
```

## Spécifications

Cette fonctionnalité ne fait partie d'aucune spécification actuelle. Elle n'est plus destinée à devenir un standard. Il existe un [brouillon non officiel de la spécification W3C execCommand <sup>(angl.)</sup>](https://w3c.github.io/editing/docs/execCommand/).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("document.execCommand()")}}
- La méthode {{DOMxRef("document.queryCommandEnabled()")}}
