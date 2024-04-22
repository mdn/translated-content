---
title: Window.fullScreen
slug: Web/API/Window/fullScreen
---

{{APIRef}}{{Non-standard_Header}}

La propriété **`fullScreen`**, rattachée à l'interface `Window`, indique si la fenêtre est affichée en mode plein écran ou non.

Avec des privilèges sur le chrome, cette propriété est accessible en lecture-écriture, sinon elle est uniquement accessible en lecture. Il faut garder à l'esprit que tenter de modifier cette propriété sans disposer des privilèges sur le chrome ne déclenchera pas d'exception mais échouera silencieusement. Ce comportement évite de casser les scripts qui modifient cette propriété pour Internet Explorer.

## Valeur

Une valeur booléenne qui indique si la fenêtre est en plein écran.

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
