---
title: "Headers : méthode entries()"
short-title: entries()
slug: Web/API/Headers/entries
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`entries()`** de l'interface {{DOMxRef("Headers")}} retourne un {{JSxRef("Iteration_protocols",'iterator')}} permettant de parcourir toutes les paires clé/valeur contenues dans cet objet. La clé et la valeur de chaque paire sont des objets {{JSxRef("String")}}.

## Syntaxe

```js-nolint
entries()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne un {{JSxRef("Iteration_protocols", "iterator")}}.

## Exemples

```js
// Crée un objet Headers de test
const mesEnTetes = new Headers();
mesEnTetes.append("Content-Type", "text/xml");
mesEnTetes.append("Vary", "Accept-Language");

// Affiche les paires clé/valeur
for (const pair of mesEnTetes.entries()) {
  console.log(`${pair[0]}: ${pair[1]}`);
}
```

Le résultat est&nbsp;:

```plain
content-type: text/xml
vary: Accept-Language
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
