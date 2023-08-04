---
title: Window.print()
slug: Web/API/Window/print
---

{{APIRef}}

Ouvre la boîte de dialogue pour imprimer le document actuel.

Si le chargement du document est toujours en cours lorsque cette fonction est appelée, l'ouverture de la boîte de dialogue attendra la fin du chargement.

Cette méthode sera bloquante pour le reste de l'exécution tant que la boîte de dialogue pour l'impression restera ouverte.

## Syntaxe

```js
print();
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur l'impression](/fr/docs/Web/Guide/Printing)
- [L'évènement `beforeprint`](/fr/docs/Web/API/Window/beforeprint_event)
- [L'évènement `afterprint`](/fr/docs/Web/API/Window/afterprint_event)
