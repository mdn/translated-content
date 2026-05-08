---
title: "Permissions-Policy : directive publickey-credentials-create"
short-title: publickey-credentials-create
slug: Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`publickey-credentials-create`** contrôle si le document actuel est autorisé à utiliser [l'API Web Authentication](/fr/docs/Web/API/Web_Authentication_API) pour créer de nouvelles informations d'identification WebAuthn, c'est-à-dire avec {{domxref("CredentialsContainer.create","navigator.credentials.create({publicKey})")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, la promesse ({{JSxRef("Promise")}}) retournée par `navigator.credentials.create({publicKey})` est rejetée avec une `NotAllowedError` {{DOMxRef("DOMException")}}.
Si la méthode est appelée de façon inter-origine, la promesse ({{JSxRef("Promise")}}) est également rejetée avec une erreur `NotAllowedError` si la fonctionnalité est accordée par [`allow=` sur un iframe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) et que le cadre n'a pas non plus {{Glossary("Transient activation", "d'activation transitoire")}}.

## Syntaxe

```http
Permissions-Policy: publickey-credentials-create=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `publickey-credentials-create` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [L'API Web Authentication](/fr/docs/Web/API/Web_Authentication_API)
- L'interface API {{DOMxRef("PublicKeyCredential")}}
