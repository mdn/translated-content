---
title: "Document : propriété fullscreen"
short-title: fullscreen
slug: Web/API/Document/fullscreen
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Fullscreen API")}}{{Deprecated_Header}}

La propriété obsolète en lecture seule **`fullscreen`** de l'interface {{DOMxRef("Document")}} indique si le document affiche actuellement du contenu en mode plein écran.

Bien que cette propriété soit en lecture seule, elle ne générera pas d'erreur si elle est modifiée (même en mode strict)&nbsp;; le mutateur est une opération nulle et sera ignoré.

> [!NOTE]
> Étant donné que cette propriété est obsolète, vous pouvez déterminer si le mode plein écran est actif sur le document en vérifiant si {{DOMxRef("Document.fullscreenElement")}} n'est pas `null`.

## Valeur

Une valeur booléenne qui est `true` si le document affiche actuellement un élément en mode plein écran&nbsp;; sinon, la valeur est `false`.

## Exemples

Cette fonction simple indique si le mode plein écran est actuellement actif, en utilisant la propriété obsolète `fullscreen`.

```js
function isDocumentInFullScreenMode() {
  return document.fullscreen;
}
```

L'exemple suivant, en revanche, utilise la propriété actuelle `fullscreenElement` pour déterminer la même chose&nbsp;:

```js
function isDocumentInFullScreenMode() {
  return document.fullscreenElement !== null;
}
```

Si `fullscreenElement` n'est pas `null`, cela retourne `true`, indiquant que le mode plein écran est actif.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- [Guide de l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API/Guide)
- La propriété {{DOMxRef("Document.fullscreenEnabled")}}
