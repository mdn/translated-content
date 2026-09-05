---
title: "Permissions-Policy : directive language-detector"
short-title: language-detector
slug: Web/HTTP/Reference/Headers/Permissions-Policy/language-detector
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`language-detector`** contrôle l'accès à la fonctionnalité de détection de la langue des [API traduction et détection de la langue](/fr/docs/Web/API/Translator_and_Language_Detector_APIs).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, la méthode statique {{DOMxRef("LanguageDetector.availability_static", "LanguageDetector.availability()")}} retourne `unavailable`, et toute tentative d'appel des autres méthodes de l'API échoue avec une `NotAllowedError` {{DOMxRef("DOMException")}}.

## Syntaxe

```http
Permissions-Policy: language-detector=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `language-detector` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
