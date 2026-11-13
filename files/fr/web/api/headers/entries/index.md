---
title: "Headers : méthode entries()"
short-title: entries()
slug: Web/API/Headers/entries
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`entries()`** de l'interface {{DOMxRef("Headers")}} retourne un itérateur ({{JSxRef("Iteration_protocols", "iterator")}}) vous permettant de parcourir toutes les paires clé/valeur contenues dans cet objet. La clé et la valeur de chaque paire sont des objets {{JSxRef("String")}}.

## Syntaxe

```js-nolint
entries()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne un itérateur ({{JSxRef("Iteration_protocols", "iterator")}}).

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
