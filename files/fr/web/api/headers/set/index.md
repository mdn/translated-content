---
title: "Headers : méthode set()"
short-title: set()
slug: Web/API/Headers/set
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`set()`** de l'interface {{DOMxRef("Headers")}} définit une nouvelle valeur pour un en-tête existant dans un objet `Headers`, ou ajoute l'en-tête s'il n'existe pas déjà.

La différence entre `set()` et {{DOMxRef("Headers.append")}} est que si l'en-tête défini existe déjà et accepte plusieurs valeurs, `set()` remplace la valeur existante par la nouvelle, tandis que {{DOMxRef("Headers.append")}} ajoute la nouvelle valeur à la fin de l'ensemble des valeurs.

Pour des raisons de sécurité, certains en-têtes ne peuvent être contrôlés que par l'agent utilisateur. Ces en-têtes incluent les {{Glossary("Forbidden_request_header", "en-têtes de requête interdits")}} et les {{Glossary("Forbidden_response_header_name", "noms d'en-têtes de réponse interdits")}}.

## Syntaxe

```js-nolint
set(name, value)
```

### Paramètres

- `name`
  - : Le nom de l'en-tête HTTP que vous souhaitez définir avec une nouvelle valeur. Si le nom donné n'est pas le nom d'un en-tête HTTP, cette méthode lance une {{JSxRef("TypeError")}}.
- `value`
  - : La nouvelle valeur que vous souhaitez définir.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Créer un objet `Headers` vide est simple&nbsp;:

```js
const mesEnTetes = new Headers(); // Actuellement vide
```

Vous pouvez ajouter un en-tête à cet objet en utilisant {{DOMxRef("Headers.append")}}, puis définir une nouvelle valeur pour cet en-tête en utilisant `set()`&nbsp;:

```js
mesEnTetes.append("Content-Type", "image/jpeg");
mesEnTetes.set("Content-Type", "text/html");
```

Si l'en-tête défini n'existe pas déjà, `set()` le créera et définira sa valeur sur la valeur définie. Si l'en-tête défini existe déjà et accepte plusieurs valeurs, `set()` remplacera la valeur existante par la nouvelle&nbsp;:

```js
mesEnTetes.set("Accept-Encoding", "deflate");
mesEnTetes.set("Accept-Encoding", "gzip");
mesEnTetes.get("Accept-Encoding"); // Retourne 'gzip'
```

Vous auriez besoin de {{DOMxRef("Headers.append")}} pour ajouter la nouvelle valeur aux valeurs existantes, et non pas pour les surcharger.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
