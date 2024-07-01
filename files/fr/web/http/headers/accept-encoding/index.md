---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
---

{{HTTPSidebar}}

L'en-tête HTTP **`Accept-Encoding`** permet de définir quel sera l'encodage du contenu. Il s'agit généralement de l'algorithme de compression utilisé par le serveur. Le client peut alors décoder le corps de la requête correctement. Utilisant [la négociation de contenu](/fr/docs/Web/HTTP/Content_negotiation), le serveur choisit l'une des propositions d'encodage que le client prend en charge. Le serveur l'utilise et le notifie au client à l'aide de l'en-tête de réponse [`Content-Encoding`](/fr/docs/Web/HTTP/Headers/Content-Encoding).

Même si le client et le serveur supportent deux algorithmes de compressions communs, le serveur peut choisir de ne pas compresser le corps de la réponse si l'encodage `identity` (aucune compression) est accepté par le client. Deux exemples de cas communs peuvent conduire à la non-compression du corps de la réponse :

- Les données sont déjà compressées et la compression ne réduira pas la taille des données transmises. Cela peut être le cas de certains formats d'images qui sont déjà compressés ;
- Le serveur est en surcharge et ne peut plus allouer suffisamment de temps de calcul nécessaire pour compresser les données. Microsoft recommande de ne pas utiliser la compression si le serveur utilise plus de 80% de la puissance de calcul.

Dès lors que l'usage d'`identity`, signifiant l'absence de compression, n'est pas explicitement interdite, que ce soit par `identity;q=0` ou `*;q=0` (sans l'usage d'une autre valeur pour `identity`), le serveur ne doit jamais renvoyer une erreur [`406`](/fr/docs/Web/HTTP/Status/406) `Not Acceptable.`

> **Note :**
>
> - Un dépôt IANA garde à jour [une liste complète des encodages de contenu](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1).
> - Deux autres encodages, `bzip` et `bzip2`, sont parfois utilisés, bien que non-standards. Ils implémentent l'algorithme utilisé par les deux programmes UNIX respectifs. À noter que le premier n'est plus maintenu suite à des problèmes de licence.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td><a href="/fr/docs/Glossary/Request_header">En-tête de requête</a></td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Glossary/Forbidden_header_name"
          >Nom d'en-tête interdit</a
        >
      </th>
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
Accept-Encoding: identity
Accept-Encoding: *

// Plusieurs algorithmes pondérés par facteur de qualité :
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## Directives

- `gzip`
  - : Un format de compression utilisant [Lempel-Ziv coding](https://fr.wikipedia.org/wiki/LZ77_et_LZ78#LZ77) (LZ77), avec un CRC (Contrôle de Redondance Cyclique) de 32 bits.
- `compress`
  - : Un format de compression utilisant l'algorithme [Lempel-Ziv-Welch](https://fr.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW).
- `deflate`
  - : Un format de compression utilisant la structure [zlib](https://fr.wikipedia.org/wiki/Zlib), avec l'algorithme de compression [_deflate_](https://fr.wikipedia.org/wiki/Deflate).
- `br`
  - : Un format de compression utilisant l'algorithme [Brotli](https://fr.wikipedia.org/wiki/Brotli).
- `identity`
  - : Indique la fonction identité (c'est-à-dire pas de compression ou de modification). Cette valeur est toujours considérée comme acceptable, même si l'en-tête ne le précise pas.
- `*`
  - : Correspond à tous les systèmes d'encodage de contenu qui n'ont pas été listés dans l'en-tête. C'est la valeur par défaut de l'en-tête s'il n'est pas présent. Cela ne signifie pas que tous les algorithmes sont supportés; seulement qu'aucune préférence n'est exprimée.
- `;q=` (pondération par qvalues)
  - : La valeur indique l'ordre de préférence des méthodes de compression à utiliser. Ce champ utilise les [pondérations de qualité (ou _quality values_ en anglais)](/fr/docs/Glossary/Quality_values).

## Exemples

```
Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Négociation de contenu](/fr/docs/Web/HTTP/Content_negotiation) HTTP
- En-tête résultant de la négociation de contenu : [`Content-Encoding`](/fr/docs/Web/HTTP/Headers/Content-Encoding)
- Autres en-têtes en rapport : [`TE`](/fr/docs/Web/HTTP/Headers/TE), [`Accept`](/fr/docs/Web/HTTP/Headers/Accept), [`Accept-Charset`](/fr/docs/Web/HTTP/Headers/Accept-Charset), [`Accept-Language`](/fr/docs/Web/HTTP/Headers/Accept-Language)
