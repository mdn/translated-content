---
title: WindowProxy
slug: Glossary/WindowProxy
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un objet **`WindowProxy`** est un objet qui enveloppe un objet [`Window`](/fr/docs/Web/API/Window). Un objet `WindowProxy` existe dans chaque {{Glossary("browsing context", "contexte de navigation")}}. Toutes les opérations effectuées sur un objet `WindowProxy` sont également appliquées à l'objet `Window` sous‑jacent qu'il enveloppe actuellement. Par conséquent, interagir avec un objet `WindowProxy` est presque identique à interagir directement avec un objet `Window`. Lorsqu'un contexte de navigation est navigué, l'objet `Window` que son `WindowProxy` enveloppe est remplacé.

## Voir aussi

- Spécification HTML&nbsp;: [Section WindowProxy](https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object)
- Question Stack Overflow&nbsp;: [WindowProxy et objets Window&nbsp;?](https://stackoverflow.com/questions/16092835/windowproxy-and-window-objects)
