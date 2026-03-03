---
title: "Response : méthode statique redirect()"
short-title: redirect()
slug: Web/API/Response/redirect_static
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode statique **`redirect()`** de l'interface {{DOMxRef("Response")}} retourne un objet `Response` qui provoque une redirection vers l'URL définie.

> [!NOTE]
> Ceci peut être utilisé avec [l'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API).
> Un service worker contrôleur peut intercepter la requête d'une page et la rediriger comme souhaité.
> Cela entraînera une véritable redirection si un service worker l'envoie en amont.

## Syntaxe

```js-nolint
Response.redirect(url)
Response.redirect(url, status)
```

### Paramètres

- `url`
  - : L'URL à partir de laquelle la nouvelle réponse doit provenir.
- `status` {{Optional_Inline}}
  - : Un nombre optionnel indiquant le code de statut de la réponse&nbsp;: l'un de {{HTTPStatus("301", "301")}}, {{HTTPStatus("302", "302")}}, {{HTTPStatus("303", "303")}}, {{HTTPStatus("307", "307")}} ou {{HTTPStatus("308", "308")}}. Si omis, {{HTTPStatus("302", "302 Found")}} est utilisé par défaut.

### Valeur de retour

Un objet {{DOMxRef("Response")}}.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Le statut défini n'est pas un statut de redirection.
- {{JSxRef("TypeError")}}
  - : L'URL définie n'est pas valide.

## Exemples

```js
Response.redirect("https://www.exemple.com", 302);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
