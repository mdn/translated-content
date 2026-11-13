---
title: Objet sérialisable
slug: Glossary/Serializable_object
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **objet sérialisable** est un objet qui peut être sérialisé puis désérialisé dans n'importe quel environnement JavaScript («&nbsp;realm&nbsp;»).
Cela permet, par exemple, de le stocker sur un disque puis de le restaurer, de le cloner avec {{DOMxRef("Window.structuredClone", "structuredClone()")}}, ou de le partager entre des workers à l'aide de {{DOMxRef("DedicatedWorkerGlobalScope.postMessage()")}}.

La sérialisation peut ne pas inclure toutes les propriétés et autres aspects de l'objet d'origine.
Par exemple, la sérialisation d'un {{DOMxRef("DOMException")}} doit inclure les propriétés `name` et `message`, mais l'inclusion d'autres propriétés dépend de l'implémentation.
En conséquence, un objet désérialisé peut ne pas être un clone ou une copie identique de l'objet d'origine.
Le nouvel objet désérialisé sera cependant une {{Glossary("deep copy", "copie profonde")}}, donc toutes les propriétés qui auront été sérialisées à partir de l'objet d'origine puis désérialisées dans le nouvel objet ne partageront aucune référence avec l'objet d'origine.

Dans certains cas, lors de la sérialisation et de la désérialisation d'un objet, il est pertinent de transférer certaines ressources plutôt que de créer une copie.
Les objets pouvant être transférés sont appelés [objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects).

## Objets pris en charge

Toutes les valeurs primitives sont sérialisables.
Tous les objets ne sont pas des objets sérialisables.
Les objets pouvant être sérialisés sont listés dans&nbsp;: [L'algorithme de clonage structuré > Types pris en charge](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#types_supportés).

> [!NOTE]
> Les objets sérialisables sont annotés dans les [fichiers Web IDL <sup>(angl.)</sup>](https://github.com/w3c/webref/tree/main/ed/idl) avec l'attribut `[Serializable]`.
