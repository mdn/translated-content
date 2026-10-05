---
title: "History : propriété scrollRestoration"
short-title: scrollRestoration
slug: Web/API/History/scrollRestoration
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("History API")}}

La propriété **`scrollRestoration`** de l'interface {{DOMxRef("History")}} permet aux applications web de définir explicitement le comportement par défaut de la restauration du défilement lors de la navigation dans l'historique.

## Valeur

L'une des valeurs suivantes&nbsp;:

- `auto`
  - : La position sur la page à laquelle l'utilisateur·ice a fait défiler est restaurée.
- `manual`
  - : La position sur la page n'est pas restaurée. L'utilisateur·ice doit faire défiler la page jusqu'à l'emplacement manuellement.

## Exemples

### Interroger le comportement actuel de la restauration du défilement

```js
const scrollRestoration = history.scrollRestoration;
if (scrollRestoration === "manual") {
  console.log(
    "La position sur la page n'est pas restaurée. L'utilisateur·ice devra faire défiler la page manuellement.",
  );
}
```

### Empêcher la restauration automatique de la position sur la page

```js
history.scrollRestoration = "manual";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
