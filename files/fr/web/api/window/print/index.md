---
title: "Window : méthode print()"
short-title: print()
slug: Web/API/Window/print
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

La méthode **`print()`** de l'interface {{DOMxRef("Window")}} ouvre la boîte de dialogue pour imprimer le document actuel.

Si le chargement du document est toujours en cours lorsque cette fonction est appelée, l'ouverture de la boîte de dialogue attend la fin du chargement.

Cette méthode est bloquante pour le reste de l'exécution tant que la boîte de dialogue pour l'impression reste ouverte.

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
