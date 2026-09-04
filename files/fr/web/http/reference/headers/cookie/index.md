---
title: En-tête Cookie
short-title: Cookie
slug: Web/HTTP/Reference/Headers/Cookie
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Cookie`** contient les [cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies) stockés et associés au serveur (c'est-à-dire, précédemment envoyés par le serveur avec l'en-tête {{HTTPHeader("Set-Cookie")}} ou définis en JavaScript avec {{DOMxRef("Document.cookie")}}).

L'en-tête `Cookie` est optionnel et peut être omis si, par exemple, les paramètres de confidentialité du navigateur bloquent les cookies.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

## Directives

- `<cookie-list>`
  - : Une liste de paires nom-valeur sous la forme `<cookie-name>=<cookie-value>`.
    Les paires de la liste sont séparées par un point-virgule suivi d'un espace.

## Exemples

```http
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le code de statut {{HTTPStatus("413", "413 Content Too Large")}}
- L'en-tête {{HTTPHeader("Set-Cookie")}}
- La propriété API {{DOMxRef("Document.cookie")}}
