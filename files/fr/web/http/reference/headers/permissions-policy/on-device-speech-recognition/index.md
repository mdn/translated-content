---
title: "Permissions-Policy : directive on-device-speech-recognition"
short-title: on-device-speech-recognition
slug: Web/HTTP/Reference/Headers/Permissions-Policy/on-device-speech-recognition
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`on-device-speech-recognition`** contrôle l'accès à la fonctionnalité de [reconnaissance vocale sur l'appareil](/fr/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#reconnaissance_vocale_sur_lappareil) de [l'API Web Speech](/fr/docs/Web/API/Web_Speech_API).

Plus précisément, lorsqu'une politique définie bloque l'utilisation, toute tentative d'appel des méthodes {{DOMxRef("SpeechRecognition.available_static", "SpeechRecognition.available()")}} ou {{DOMxRef("SpeechRecognition.install_static", "SpeechRecognition.install()")}} de l'API échouera.

## Syntaxe

```http
Permissions-Policy: on-device-speech-recognition=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `on-device-speech-recognition` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
