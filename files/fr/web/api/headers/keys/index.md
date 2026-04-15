---
title: "Headers : méthode keys()"
short-title: keys()
slug: Web/API/Headers/keys
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`keys()`** de l'interface {{DOMxRef("Headers")}} retourne un {{JSxRef("Iteration_protocols",'iterator')}} permettant de parcourir toutes les clés contenues dans cet objet. Les clés sont des objets {{JSxRef("String")}}.

## Syntaxe

```js-nolint
keys()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne un {{JSxRef("Iteration_protocols", "iterator")}}.

## Exemples

```js
// Créez un objet Headers de test
const mesEnTetes = new Headers();
mesEnTetes.append("Content-Type", "text/xml");
mesEnTetes.append("Vary", "Accept-Language");

// Afficher les clés
for (const key of mesEnTetes.keys()) {
  console.log(key);
}
```

Le résultat est&nbsp;:

```plain
content-type
vary
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
