---
title: "Permissions-Policy : directive summarizer"
short-title: summarizer
slug: Web/HTTP/Reference/Headers/Permissions-Policy/summarizer
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`summarizer`** contrôle l'accès à [l'API Summarizer](/fr/docs/Web/API/Summarizer_API).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de l'API Summarizer, la méthode statique {{DOMxRef("Summarizer.availability_static", "Summarizer.availability()")}} retourne `unavailable`, et toute tentative d'appel des autres méthodes de l'API échoue avec une `NotAllowedError` {{DOMxRef("DOMException")}}.

## Syntaxe

```http
Permissions-Policy: summarizer=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `summarizer` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
