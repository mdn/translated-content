---
title: "Window : propriété fullScreen"
short-title: fullScreen
slug: Web/API/Window/fullScreen
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{Non-standard_Header}}

La propriété **`fullScreen`** de l'interface {{DOMxRef("Window")}} indique si la fenêtre est affichée en mode plein écran ou non.

## Valeur

Une valeur booléenne avec `true` signifiant que la fenêtre est en mode plein écran et `false` signifiant qu'elle ne l'est pas.

## Notes

- Passer entre le mode normal et le mode plein écran déclenchera l'évènement `resize` sur la fenêtre correspondante.

## Exemples

```js
if (window.fullScreen) {
  // en plein écran !
} else {
  // pas en plein écran !
}
```

## Compatibilité des navigateurs

{{Compat}}
