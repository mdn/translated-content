---
title: "Permissions-Policy : directive otp-credentials"
short-title: otp-credentials
slug: Web/HTTP/Reference/Headers/Permissions-Policy/otp-credentials
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`otp-credentials`** contrôle si le document actuel est autorisé à utiliser [l'API WebOTP](/fr/docs/Web/API/WebOTP_API) pour demander un mot de passe à usage unique (OTP) à partir d'un message SMS spécialement formaté envoyé par le serveur de l'application, c'est-à-dire avec {{DOMxRef("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation, la promesse ({{JSxRef("Promise")}}) retournée par `navigator.credentials.get({otp})` est rejetée avec une `SecurityError` {{DOMxRef("DOMException")}}.

## Syntaxe

```http
Permissions-Policy: otp-credentials=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `otp-credentials` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [L'API WebOTP](/fr/docs/Web/API/WebOTP_API)
- L'interface API {{DOMxRef("OTPCredential")}}
