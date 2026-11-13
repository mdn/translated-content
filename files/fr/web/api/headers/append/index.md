---
title: "Headers : méthode append()"
short-title: append()
slug: Web/API/Headers/append
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`append()`** de l'interface {{DOMxRef("Headers")}} ajoute une nouvelle valeur à un en-tête existant dans un objet `Headers`, ou ajoute l'en-tête s'il n'existe pas déjà.

La différence entre {{DOMxRef("Headers.set", "set()")}} et `append()` est que si l'en-tête défini existe déjà et accepte plusieurs valeurs, `set()` remplacera la valeur existante par la nouvelle, tandis que `append()` ajoutera la nouvelle valeur à la fin de l'ensemble des valeurs.

Pour des raisons de sécurité, certains en-têtes ne peuvent être contrôlés que par l'agent utilisateur. Ces en-têtes incluent les {{Glossary("Forbidden_request_header", "en-têtes de requête interdits")}} et les {{Glossary("Forbidden_response_header_name", "noms d'en-têtes de réponse interdits")}}.

## Syntaxe

```js-nolint
append(name, value)
```

### Paramètres

- `name`
  - : Le nom de l'en-tête HTTP que vous souhaitez ajouter à l'objet `Headers`.
- `value`
  - : La valeur de l'en-tête HTTP que vous souhaitez ajouter.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Créer un objet `Headers` vide est simple&nbsp;:

```js
const mesEnTetes = new Headers(); // Actuellement vide
```

Vous pouvez ajouter un en-tête à cet objet en utilisant `append()`&nbsp;:

```js
mesEnTetes.append("Content-Type", "image/jpeg");
mesEnTetes.get("Content-Type"); // Retourne 'image/jpeg'
```

Si l'en-tête défini existe déjà, `append()` changera sa valeur pour la valeur définie. Si l'en-tête défini existe déjà et accepte plusieurs valeurs, `append()` ajoutera la nouvelle valeur à la fin de l'ensemble des valeurs&nbsp;:

```js
mesEnTetes.append("Accept-Encoding", "deflate");
mesEnTetes.append("Accept-Encoding", "gzip");
mesEnTetes.get("Accept-Encoding"); // Retourne 'deflate, gzip'
```

Pour remplacer l'ancienne valeur par une nouvelle, utilisez {{DOMxRef("Headers.set")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
