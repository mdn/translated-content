---
title: "Document : propriété visibilityState"
short-title: visibilityState
slug: Web/API/Document/visibilityState
l10n:
  sourceCommit: 14a752ccdcaa736e8e368156c48bca61a3c1e5ed
---

{{APIRef("DOM")}}

La propriété en lecture seule **`visibilityState`** de l'interface {{DOMxRef("Document")}} retourne la visibilité du document. Elle peut être utilisée pour vérifier si le document est en arrière-plan, dans une fenêtre minimisée ou autrement non visible pour l'utilisateur·ice.

Lorsque la valeur de cette propriété change, l'évènement {{DOMxRef("Document/visibilitychange_event", "visibilitychange")}} est envoyé au {{DOMxRef("Document")}}.

La propriété {{DOMxRef("Document.hidden")}} fournit un moyen alternatif de déterminer si la page est cachée.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `visible`
  - : Le contenu de la page peut être au moins partiellement visible. En pratique, cela signifie que la page est l'onglet au premier plan d'une fenêtre non minimisée.
- `hidden`
  - : Le contenu de la page n'est pas visible pour l'utilisateur·ice. En pratique, cela signifie que le document est soit un onglet en arrière-plan, soit une partie d'une fenêtre minimisée, ou que le verrouillage de l'écran du système d'exploitation est actif.

## Exemples

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.visibilityState);
  // Modifier le comportement…
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Document.hidden")}}
- [L'API Page Visibility](/fr/docs/Web/API/Page_Visibility_API)
