---
title: "Headers : méthode delete()"
short-title: delete()
slug: Web/API/Headers/delete
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`delete()`** de l'interface {{DOMxRef("Headers")}} supprime un en-tête de l'objet `Headers` actuel.

Pour des raisons de sécurité, certains en-têtes ne peuvent être contrôlés que par l'agent utilisateur. Ces en-têtes incluent les {{Glossary("Forbidden_request_header", "en-têtes de requête interdits")}} et les {{Glossary("Forbidden_response_header_name", "noms d'en-têtes de réponse interdits")}}.

## Syntaxe

```js-nolint
delete(name)
```

### Paramètres

- `name`
  - : Le nom de l'en-tête HTTP que vous souhaitez supprimer de l'objet `Headers`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Créer un objet `Headers` vide est simple&nbsp;:

```js
const mesEnTetes = new Headers(); // Actuellement vide
```

Vous pouvez ajouter un en-tête à cet objet en utilisant {{DOMxRef("Headers.append")}}&nbsp;:

```js
mesEnTetes.append("Content-Type", "image/jpeg");
mesEnTetes.get("Content-Type"); // Retourne 'image/jpeg'
```

Vous pouvez ensuite le supprimer à nouveau&nbsp;:

```js
mesEnTetes.delete("Content-Type");
mesEnTetes.get("Content-Type"); // Retourne null, car il a été supprimé
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
