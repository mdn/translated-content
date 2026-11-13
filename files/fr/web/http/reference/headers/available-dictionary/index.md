---
title: En-tête Available-Dictionary
short-title: Available-Dictionary
slug: Web/HTTP/Reference/Headers/Available-Dictionary
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête de requête HTTP **`Available-Dictionary`** permet au navigateur de définir le dictionnaire le plus adapté qu'il possède afin d'autoriser le serveur à utiliser le {{Glossary("Compression Dictionary Transport", "transport de dictionnaire de compression")}} pour une requête de ressource.

Les clients peuvent envoyer un en-tête `Available-Dictionary` lorsqu'ils prennent en charge les codages `dcb` ou `dcz`. L'en-tête est un hachage SHA-256 encodé en base 64, entouré de deux-points, du contenu du dictionnaire.

Voir le [guide sur le transport de dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport) pour plus d'informations.

## Syntaxe

```http
Available-Dictionary: :<base64-hash>:
```

## Directives

- `<base64-hash>`
  - : Un {{Glossary("Hash_function", "hachage")}} SHA-256 encodé en base 64 du contenu du dictionnaire.

## Exemples

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur le transport de dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- L'en-tête HTTP {{HTTPHeader("Use-As-Dictionary")}}
- L'en-tête HTTP {{HTTPHeader("Dictionary-ID")}}
