---
title: En-tête Upgrade-Insecure-Requests
short-title: Upgrade-Insecure-Requests
slug: Web/HTTP/Reference/Headers/Upgrade-Insecure-Requests
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Upgrade-Insecure-Requests`** envoie un signal au serveur indiquant la préférence du client pour une réponse chiffrée et authentifiée, et que le client peut gérer avec succès la directive [CSP](/fr/docs/Web/HTTP/Guides/CSP) {{CSP("upgrade-insecure-requests")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Upgrade-Insecure-Requests: <boolean>
```

## Directives

- `<boolean>`
  - : `1` indique `true` et est la seule valeur valide pour ce champ.

## Exemples

### Utiliser `Upgrade-Insecure-Requests`

La requête d'un client signale au serveur qu'il prend en charge les mécanismes de mise à niveau de {{CSP("upgrade-insecure-requests")}}&nbsp;:

```http
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

Le serveur peut maintenant rediriger vers une version sécurisée du site. Un en-tête {{HTTPHeader("Vary")}} peut être utilisé afin que le site ne soit pas servi par les caches aux clients qui ne prennent pas en charge le mécanisme de mise à niveau.

```http
Location: https://example.com/
Vary: Upgrade-Insecure-Requests
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- La directive CSP {{CSP("upgrade-insecure-requests")}}
- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
