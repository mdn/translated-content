---
title: En-tête Pragma
short-title: Pragma
slug: Web/HTTP/Reference/Headers/Pragma
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}

L'en-tête HTTP **`Pragma`** est un en-tête spécifique à l'implémentation qui peut avoir divers effets tout au long de la chaîne requête-réponse.
Cet en-tête sert à assurer la rétrocompatibilité avec les caches HTTP/1.0 qui ne prennent pas en charge l'en-tête {{HTTPHeader("Cache-Control")}} de HTTP/1.1.

> [!NOTE]
> L'en-tête `Pragma` n'est pas défini pour les réponses HTTP et n'est donc pas un remplacement fiable de l'en-tête `Cache-Control` de HTTP/1.1, bien que son comportement soit identique à `Cache-Control: no-cache` si le champ d'en-tête `Cache-Control` est omis dans une requête.
> Utilisez `Pragma` uniquement pour la rétrocompatibilité avec les clients HTTP/1.0.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "en-tête de réponse")}} (le comportement en réponse n'est pas défini et dépend de l'implémentation).
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé par CORS")}}
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Pragma: no-cache
```

## Directives

- `no-cache`
  - : Identique à `Cache-Control: no-cache`. Oblige les caches à soumettre la requête au serveur d'origine pour validation avant de délivrer une copie mise en cache.

## Exemples

```http
Pragma: no-cache
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Cache-Control")}}
- L'en-tête {{HTTPHeader("Expires")}}
