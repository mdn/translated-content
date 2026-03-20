---
title: "Window : méthode print()"
short-title: print()
slug: Web/API/Window/print
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

La méthode **`print()`** de l'interface {{DOMxRef("Window")}} ouvre la boîte de dialogue pour imprimer le document actuel.

Si le chargement du document est toujours en cours lorsque cette fonction est appelée, l'ouverture de la boîte de dialogue attendra la fin du chargement.

Cette méthode sera bloquante pour le reste de l'exécution tant que la boîte de dialogue pour l'impression restera ouverte.

## Syntaxe

```js-nolint
print()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur l'impression](/fr/docs/Web/CSS/Guides/Media_queries/Printing)
- L'évènement {{DOMxRef("window.beforeprint_event", "beforeprint")}}
- L'évènement {{DOMxRef("window.afterprint_event", "afterprint")}}
