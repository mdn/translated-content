---
title: "Permissions-Policy : directive publickey-credentials-get"
short-title: publickey-credentials-get
slug: Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`publickey-credentials-get`** contrôle si le document actuel est autorisé à accéder à [l'API Web Authentication](/fr/docs/Web/API/Web_Authentication_API) pour récupérer des informations d'identification à clé publique, c'est-à-dire avec {{domxref("CredentialsContainer.get","navigator.credentials.get({publicKey})")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, la promesse ({{JSxRef("Promise")}}) retournée par `navigator.credentials.get({publicKey})` est rejetée avec une `NotAllowedError` {{DOMxRef("DOMException")}}.

## Syntaxe

```http
Permissions-Policy: publickey-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `publickey-credentials-get` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [L'API Web Authentication](/fr/docs/Web/API/Web_Authentication_API)
- L'interface API {{DOMxRef("PublicKeyCredential")}}
