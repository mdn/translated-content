---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
tags:
  - En-têtes
  - HTTP
  - Reference
translation_of: Web/HTTP/Headers/Content-Encoding
---
{{HTTPSidebar}}

L'en-tête **`Content-Encoding`** indique la compression utilisée sur le média contenu dans le corps de la requête. Il permet au client de savoir comment décoder le contenu afin d'obtenir le type de média référencé par l'entête `Content-Type`.

Il est recommandé de compresser les données autant que possible et donc d'utiliser cet en-tête. Toutefois, certains types de fichiers, comme les images jpeg, sont déjà compressés. Parfois, l'utilisation d'une compression supplémentaire ne réduit pas la taille de la chage utile et peut même la rendre plus longue.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td><a href="/fr/docs/Glossaire/En-tête_entité">En-tête d'entité</a></td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Glossaire/Forbidden_header_name"
          >Nom d'en-tête interdit</a
        >
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Content-Encoding: gzip
    Content-Encoding: compress
    Content-Encoding: deflate
    Content-Encoding: identity
    Content-Encoding: br

    // Plusieurs valeurs selon l'ordre dans lequel ils ont été appliqués
    Content-Encoding: gzip, identity
    Content-Encoding: deflate, gzip

## Directives

- `gzip`
  - : Un format utilisant le [codage Lempel-Ziv](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), avec un CRC de 32 bits. Il s'agit du format original pour le programme UNIX _gzip_. La norme HTTP/1.1 recommande également que les serveurs prenant en charge cet encodage reconnaissent `x-gzip` comme alias, à des fins de compatibilité.
- `compress`
  - : Un format utilisant l'algorithme [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW). Le nom de la valeur a été tiré du programme de compression UNIX, qui a mis en œuvre cet algorithme. Comme le programme de compression, qui a disparu de la plupart des distributions UNIX, ce codage de contenu n'est pas utilisé par de nombreux navigateurs aujourd'hui, en partie à cause d'un problème de brevet (il a expiré en 2003).
- `deflate`
  - : Utilisant la structure [zlib](http://en.wikipedia.org/wiki/Zlib) (définie dans la [RFC 1950](http://tools.ietf.org/html/rfc1950)) avec l'algorithme de compression _[deflate](http://en.wikipedia.org/wiki/DEFLATE)_ (défini dans la [RFC 1951](http://tools.ietf.org/html/rfc1951)).
- `identity`
  - : Indicates the identity function (c'est-à-dire qu'il n'y a eu aucune compression ou modification). Sauf mention contraire, cette valeur est toujours considérée comme acceptable.
- `br`
  - : Un format utilisant l'algorithme de [Brotli](https://en.wikipedia.org/wiki/Brotli).

## Exemples

### Compression avec gzip

Côté client, on peut fournir la liste des mécanismes de compression pris en charge en envoyant l'en-tête {{HTTPHeader("Accept-Encoding")}} lors de la négociation de l'encodage.

    Accept-Encoding: gzip, deflate

Le serveur répondra avec le schéma utilisé avec l'en-tête de réponse `Content-Encoding`.

    Content-Encoding: gzip

À noter que le serveur n'est pas obligé d'utiliser de méthode de compression. La compression dépend fortement des paramètres du serveur et des modules de serveur utilisés.

## Spécifications

| Spécification                                                    | Titre                                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7932", "Brotli Compressed Data Format")}} | Brotli Compressed Data Format                                 |
| {{RFC("7231", "Content-Encoding", "3.1.2.2")}}     | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |
| {{RFC("2616", "Content-Encoding", "14.11")}}     | Content-Encoding                                              |

## Compatibilité des navigateurs

{{Compat("http.headers.Content-Encoding")}}

## Voir aussi

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
