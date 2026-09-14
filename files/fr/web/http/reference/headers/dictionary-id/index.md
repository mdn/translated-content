---
title: En-tête Dictionary-ID
short-title: Dictionary-ID
slug: Web/HTTP/Reference/Headers/Dictionary-ID
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Dictionary-ID`** fait référence à un dictionnaire qui peut être utilisé dans le {{Glossary("Compression Dictionary Transport", "transport de dictionnaire de compression")}} pour compresser la réponse du serveur.

Un serveur peut indiquer qu'une ressource peut être utilisée comme dictionnaire en envoyant l'en-tête {{HTTPHeader("Use-As-Dictionary")}} dans la réponse. Le serveur peut inclure une directive `id` dans l'en-tête `Use-As-Dictionary`, attribuant ainsi une valeur d'identifiant au dictionnaire. Si le serveur fait cela, alors lorsque le navigateur demande une ressource pouvant être compressée avec le dictionnaire, la requête doit inclure l'en-tête `Dictionary-ID`, et sa valeur doit correspondre à l'identifiant donné dans `Use-As-Dictionary`.

Ceci permet au serveur d'identifier et de retrouver un dictionnaire référencé par une clé arbitraire, plutôt que d'utiliser la {{Glossary("hash function", "fonction de hachage")}} comme clé (si cette méthode est utilisée, le serveur devra hacher chaque réponse qui inclut l'en-tête `Use-As-Dictionary` au cas où la ressource pourrait éventuellement être utilisée comme dictionnaire).

Notez que même si le serveur peut identifier et localiser le dictionnaire grâce à son `Dictionary-ID`, il doit toujours vérifier le hachage provenant de l'en-tête `Available-Dictionary` pour confirmer qu'il s'agit d'une correspondance correcte.

Voir le [guide sur le transport de dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport) pour plus d'informations.

## Syntaxe

```http
Dictionary-ID: "<string-identifier>"
```

## Directives

- `<string-identifier>`
  - : Une chaîne représentant l'identifiant attribué au dictionnaire par le serveur.

## Exemples

Par exemple, supposons que le serveur ait envoyé un en-tête `Use-As-Dictionary` contenant une directive `id="dictionary-12345"`&nbsp;:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Lorsque le client demande une ressource correspondante, il inclut cette valeur `id` dans un en-tête `Dictionary-ID`&nbsp;:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur le transport de dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- L'en-tête {{HTTPHeader("Available-Dictionary")}}
- L'en-tête {{HTTPHeader("Use-As-Dictionary")}}
