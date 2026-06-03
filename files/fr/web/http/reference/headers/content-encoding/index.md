---
title: En-tête Content-Encoding
short-title: Content-Encoding
slug: Web/HTTP/Reference/Headers/Content-Encoding
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("representation header", "en-tête de représentation")}} HTTP **`Content-Encoding`** liste les encodages et l'ordre dans lequel ils ont été appliqués à une ressource.
Ceci permet au·à la destinataire de savoir comment décoder les données afin d'obtenir le format de contenu d'origine décrit dans l'en-tête {{HTTPHeader("Content-Type")}}.
L'encodage du contenu est principalement utilisé pour compresser le contenu sans perdre d'information sur le type de média d'origine.

Les serveurs doivent compresser les données autant que possible, et utiliser l'encodage de contenu lorsque cela est approprié.
Compresser des types de médias déjà compressés, comme .zip ou .jpeg, n'est généralement pas approprié car cela peut augmenter la taille du fichier.
Si le média d'origine est déjà encodé (par exemple, sous forme de fichier .zip), cette information n'est pas incluse dans l'en-tête `Content-Encoding`.

Lorsque l'en-tête `Content-Encoding` est présent, les autres métadonnées (par exemple, {{HTTPHeader("Content-Length")}}) se réfèrent à la forme encodée des données, et non à la ressource d'origine, sauf indication explicite.
L'encodage du contenu diffère de {{HTTPHeader("Transfer-Encoding")}} en ce que `Transfer-Encoding` gère la façon dont les messages HTTP eux-mêmes sont transmis sur le réseau [de point à point](/fr/docs/Web/HTTP/Reference/Headers#en-têtes_de_point_à_point_hop-by-hop_headers).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Representation header", "En-tête de représentation")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: br
Content-Encoding: zstd
Content-Encoding: dcb
Content-Encoding: dcz

// Plusieurs valeurs selon l'ordre dans lequel ils ont été appliqués
Content-Encoding: deflate, gzip
```

## Directives

- `gzip`
  - : Un format utilisant le [codage Lempel-Ziv](https://fr.wikipedia.org/wiki/LZ77_et_LZ78#Description_de_l'algorithme_LZ77) (LZ77), avec un CRC sur 32 bits.
    Il s'agit du format original du programme UNIX _gzip_.
    La norme HTTP/1.1 recommande également que les serveurs prenant en charge cet encodage reconnaissent `x-gzip` comme alias, à des fins de compatibilité.
- `compress`
  - : Un format utilisant l'algorithme [Lempel-Ziv-Welch](https://fr.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW).
    Le nom de la valeur provient du programme UNIX _compress_, qui implémentait cet algorithme.
    Comme le programme compress, qui a disparu de la plupart des distributions UNIX, ce codage de contenu n'est plus utilisé par de nombreux navigateurs aujourd'hui, en partie à cause d'un problème de brevet (expiré en 2003).
- `deflate`
  - : Utilise la structure [zlib](https://fr.wikipedia.org/wiki/Zlib) (définie dans la {{RFC(1950)}}) avec l'algorithme de compression [deflate](https://fr.wikipedia.org/wiki/Deflate) (défini dans la {{RFC(1951)}}).
- `br`
  - : Un format utilisant la structure d'algorithme {{Glossary("Brotli compression","Brotli")}} (définie dans la {{RFC(7932)}}).
- `zstd`
  - : Un format utilisant la structure d'algorithme {{Glossary("Zstandard compression","Zstandard")}} (définie dans la {{RFC(8878)}}).
- `dcb` {{Experimental_Inline}}
  - : Un format qui utilise l'[algorithme Brotli compressé par dictionnaire <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl). Voir [Transport de dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport).

- `dcz` {{Experimental_Inline}}
  - : Un format qui utilise l'[algorithme Zstandard compressé par dictionnaire <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan). Voir [Transport de dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Exemples

### Compression avec gzip

Côté client, on peut fournir la liste des mécanismes de compression pris en charge en envoyant l'en-tête {{HTTPHeader("Accept-Encoding")}} lors de la négociation de l'encodage.

```http
Accept-Encoding: gzip, deflate
```

Le serveur répondra avec le schéma utilisé avec l'en-tête de réponse `Content-Encoding`.

```http
Content-Encoding: gzip
```

À noter que le serveur n'est pas obligé d'utiliser de méthode de compression. La compression dépend fortement des paramètres du serveur et des modules de serveur utilisés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Accept-Encoding")}}
- L'en-tête {{HTTPHeader("Transfer-Encoding")}}
- L'entrée de glossaire {{Glossary("Brotli compression", "Compression Brotli")}}
- L'entrée de glossaire {{Glossary("GZip compression", "Compression GZip")}}
- L'entrée de glossaire {{Glossary("Zstandard compression", "Compression Zstandard")}}
- [Guide sur le transport de dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport)
