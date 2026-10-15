---
title: "Window : propriété self"
short-title: self
slug: Web/API/Window/self
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`self`** de l'interface {{DOMxRef("Window")}} retourne la fenêtre elle-même, en tant que {{Glossary("WindowProxy", "mandataire de la fenêtre")}}. Elle peut être utilisée avec la notation par point sur un objet `window` (c'est-à-dire `window.self`) ou de manière autonome (`self`). L'avantage de la notation autonome est qu'une notation similaire existe pour les contextes non liés à la fenêtre, comme dans {{DOMxRef("Worker", "les Web Workers", "", 1)}}. En utilisant `self`, vous pouvez faire référence à la portée globale d'une manière qui fonctionne non seulement dans un contexte de fenêtre (`self` résout à `window.self`) mais aussi dans un contexte de worker (`self` résout alors à {{DOMxRef("WorkerGlobalScope.self")}}).

## Valeur

Un objet {{Glossary("WindowProxy")}}.

## Exemples

Les utilisations de `window.self` comme dans l'exemple suivant peuvent tout aussi bien être remplacées par `window`.

```js
if (window.parent.frames[0] !== window.self) {
  // cette fenêtre n'est pas le premier cadre dans la liste
}
```

De plus, lorsqu'il est exécuté dans le document actif d'un contexte de navigation, `window` est une référence à l'objet global actuel et donc toutes les expressions suivantes sont équivalentes&nbsp;:

```js
const w1 = window;
const w2 = self;
const w3 = window.window;
const w4 = window.self;
// w1, w2, w3, w4 sont tous strictement égaux, mais seul w2 fonctionne dans les workers
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Son équivalent dans les `Worker`, {{DOMxRef("WorkerGlobalScope.self")}}.
