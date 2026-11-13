---
title: "Navigation : méthode entries()"
short-title: entries()
slug: Web/API/Navigation/entries
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La méthode **`entries()`** de l'interface {{DOMxRef("Navigation")}} retourne un tableau d'objets {{DOMxRef("NavigationHistoryEntry")}} représentant toutes les entrées d'historique existantes.

## Syntaxe

```js-nolint
entries()
```

### Paramètres

Aucun.

### Valeur de retour

Un tableau d'objets {{DOMxRef("NavigationHistoryEntry")}}.

### Exceptions

Aucune.

## Exemples

### Retourner le nombre d'entrées dans l'historique

```js
let nombreEntrees = navigation.entries().length - 1;
```

### Bouton de retour intelligent

Un bouton «&nbsp;retour&nbsp;» fourni par la page peut vous ramener en arrière, même après un rechargement, en inspectant les entrées d'historique précédentes&nbsp;:

```js
backButtonEl.addEventListener("click", () => {
  if (
    navigation.entries()[navigation.currentEntry.index - 1]?.url ===
    "/product-listing"
  ) {
    navigation.back();
  } else {
    // Si l'utilisateur·ice est arrivé ici d'une autre manière
    // par exemple en tapant l'URL directement :
    navigation.navigate("/product-listing", { history: "replace" });
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
