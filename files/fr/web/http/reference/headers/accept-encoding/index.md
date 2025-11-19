---
title: En-tête Accept-Encoding
short-title: Accept-Encoding
slug: Web/HTTP/Reference/Headers/Accept-Encoding
original_slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'en-tête HTTP **`Accept-Encoding`** de {{glossary("request header", "requête")}} et {{glossary("response header", "réponse")}} indique le codage du contenu (généralement un algorithme de compression) que l'émetteur peut comprendre.
Dans les requêtes, le serveur utilise la [négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation) pour sélectionner l'un des encodages proposés par le client et informe ce dernier de son choix via l'en-tête de réponse {{HTTPHeader("Content-Encoding")}}.
Dans les réponses, il fournit des informations sur les codages de contenu que le serveur peut comprendre dans les messages vers la ressource demandée, afin que l'encodage puisse être utilisé dans les requêtes ultérieures vers cette ressource.
Par exemple, `Accept-Encoding` est inclus dans une réponse {{HTTPStatus("415", "415 Unsupported Media Type")}} si une requête vers une ressource (par exemple, {{HTTPMethod("PUT")}}) utilise un encodage non pris en charge.

Même si le client et le serveur prennent en charge les mêmes algorithmes de compression, le serveur peut choisir de ne pas compresser le corps d'une réponse si la valeur `identity` est également acceptable.
Cela se produit dans deux cas courants&nbsp;:

1. Les données sont déjà compressées, donc une seconde compression ne réduira pas la taille des données transmises, et peut même parfois l'augmenter. C'est le cas des formats d'images déjà compressés (comme JPEG).
2. Le serveur est surchargé et ne peut pas allouer de ressources de calcul pour effectuer la compression. Par exemple, Microsoft recommande de ne pas compresser si un serveur utilise plus de 80% de sa puissance de calcul.

Tant que les directives `identity;q=0` ou `*;q=0` n'interdisent pas explicitement la valeur `identity` (c'est-à-dire aucune compression), le serveur ne doit jamais retourner une erreur {{HTTPStatus("406", "406 Not Acceptable")}}.

> [!NOTE]
> L'IANA maintient [une liste officielle des codages de contenu <sup>(angl.)</sup>](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Les encodages `bzip` et `bzip2` ne sont pas standards, mais peuvent être utilisés dans certains cas, notamment pour la compatibilité avec des systèmes anciens.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}, {{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: zstd
Accept-Encoding: dcb
Accept-Encoding: dcz
Accept-Encoding: identity
Accept-Encoding: *

// Plusieurs algorithmes, pondérés avec la syntaxe de valeur de qualité :
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## Directives

- `gzip`
  - : Un format de compression utilisant le [codage Lempel-Ziv](https://fr.wikipedia.org/wiki/LZ77_et_LZ78#LZ77) (LZ77) avec une somme de contrôle CRC 32 bits.
- `compress`
  - : Un format de compression utilisant l'algorithme [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch) (LZW).
- `deflate`
  - : Un format de compression utilisant la structure [zlib](https://fr.wikipedia.org/wiki/Zlib) avec l'algorithme de compression [_deflate_]https://fr.wikipedia.org/wiki/Deflate).
- `br`
  - : Un format de compression utilisant l'algorithme [Brotli](https://fr.wikipedia.org/wiki/Brotli).
- `zstd`
  - : Un format de compression utilisant l'algorithme [Zstandard](https://fr.wikipedia.org/wiki/Zstandard).
- `dcb` {{experimental_inline}}
  - : Un format utilisant l'algorithme [Dictionary-Compressed Brotli <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl). Voir [Compression Dictionary Transport](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `dcz` {{experimental_inline}}
  - : Un format utilisant l'algorithme [Dictionary-Compressed Zstandard <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan). Voir [Compression Dictionary Transport](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `identity`
  - : Indique la fonction identité (c'est-à-dire sans modification ni compression). Cette valeur est toujours considérée comme acceptable, même si elle est omise.
- `*` (joker)
  - : Correspond à tout codage de contenu non déjà listé dans l'en-tête. C'est la valeur par défaut si l'en-tête n'est pas présent. Cette directive n'implique pas que tout algorithme est pris en charge, mais indique qu'aucune préférence n'est exprimée.
- `;q=` (pondération qvalues)
  - : Toute valeur est placée dans un ordre de préférence exprimé à l'aide d'une [valeur de qualité](/fr/docs/Glossary/Quality_values) relative appelée _poids_.

## Exemples

### Valeurs `Accept-Encoding` par défaut

La navigation dans un navigateur envoie généralement la valeur d'en-tête de requête `Accept-Encoding` suivante&nbsp;:

```http
GET /fr/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Valeurs `Accept-Encoding` pondérées

L'exemple suivant montre les préférences `Accept-Encoding` à l'aide d'une valeur de qualité comprise entre `0` (priorité la plus basse) et `1` (priorité la plus haute).
La compression Brotli est pondérée à `1.0`, ce qui fait de `br` le premier choix du client, suivi de `gzip` à la priorité `0.8`, puis de tout autre codage de contenu à `0.1`&nbsp;:

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- [Négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation) HTTP
- Un en-tête avec le résultat de la négociation de contenu&nbsp;: {{HTTPHeader("Content-Encoding")}}
- Autres en-têtes similaires&nbsp;: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli compression", "La compression Brotli")}}
- {{Glossary("GZip compression", "La compression GZip")}}
- {{Glossary("Zstandard compression", "La compression Zstandard")}}
- [Compression Dictionary Transport guide](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport)
