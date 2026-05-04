---
title: "Headers : méthode values()"
short-title: values()
slug: Web/API/Headers/values
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`values()`** de l'interface {{DOMxRef("Headers")}} retourne un {{JSxRef("Iteration_protocols", "iterator")}} permettant de parcourir toutes les valeurs contenues dans cet objet. Les valeurs sont des objets {{JSxRef("String")}}.

## Syntaxe

```js-nolint
values()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne un {{JSxRef("Iteration_protocols", "iterator")}}.

## Exemples

```js
// Créer un objet Headers de test
const mesEnTetes = new Headers();
mesEnTetes.append("Content-Type", "text/xml");
mesEnTetes.append("Vary", "Accept-Language");

// Afficher les valeurs
for (const value of mesEnTetes.values()) {
  console.log(value);
}
```

Le résultat est&nbsp;:

```plain
text/xml
Accept-Language
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
