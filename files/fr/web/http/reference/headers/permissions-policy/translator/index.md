---
title: "Permissions-Policy : directive translator"
short-title: translator
slug: Web/HTTP/Reference/Headers/Permissions-Policy/translator
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`translator`** contrôle l'accès à la fonctionnalité de traduction des [API Translator et Language Detector](/fr/docs/Web/API/Translator_and_Language_Detector_APIs).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, la méthode statique {{DOMxRef("Translator.availability_static", "Translator.availability()")}} retourne `unavailable`, et toute tentative d'appel des autres méthodes de l'API échoue avec une `NotAllowedError` {{DOMxRef("DOMException")}}.

## Syntaxe

```http
Permissions-Policy: translator=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `translator` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
