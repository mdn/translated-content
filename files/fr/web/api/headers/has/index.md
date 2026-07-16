---
title: "Headers : méthode has()"
short-title: has()
slug: Web/API/Headers/has
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`has()`** de l'interface {{DOMxRef("Headers")}} retourne un booléen indiquant si un objet `Headers` contient un certain en-tête.

Pour des raisons de sécurité, certains en-têtes ne peuvent être contrôlés que par l'agent utilisateur. Ces en-têtes incluent les {{Glossary("Forbidden_request_header", "en-têtes de requête interdits")}} et les {{Glossary("Forbidden_response_header_name", "noms d'en-têtes de réponse interdits")}}.

## Syntaxe

```js-nolint
has(name)
```

### Paramètres

- `name`
  - : Le nom de l'en-tête HTTP que vous souhaitez tester. Si le nom donné n'est pas un nom d'en-tête HTTP valide, cette méthode lève une {{JSxRef("TypeError")}}.

### Valeur de retour

Une valeur booléenne.

## Exemples

Créer un objet `Headers` vide est simple&nbsp;:

```js
const mesEnTetes = new Headers(); // Actuellement vide
```

Vous pouvez ajouter un en-tête à cet objet en utilisant {{DOMxRef("Headers.append")}}, puis tester son existence avec `has()`&nbsp;:

```js
mesEnTetes.append("Content-Type", "image/jpeg");
mesEnTetes.has("Content-Type"); // Retourne true
mesEnTetes.has("Accept-Encoding"); // Retourne false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
