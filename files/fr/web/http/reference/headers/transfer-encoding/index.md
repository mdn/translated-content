---
title: En-tête Transfer-Encoding
short-title: Transfer-Encoding
slug: Web/HTTP/Reference/Headers/Transfer-Encoding
l10n:
  sourceCommit: dc18e207e48c04447d979a731129d1ae253a2109
---

{{Glossary("request header", "L'en-tête de requête")}} et {{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Transfer-Encoding`** définit la forme de codage utilisée pour transférer des messages entre les nœuds du réseau.

`Transfer-Encoding` est un [en-tête de point à point](/fr/docs/Web/HTTP/Reference/Headers#en-têtes_de_point_à_point_hop-by-hop_headers), qui s'applique à un message entre deux nœuds, et non à une ressource elle-même.
Chaque segment d'une connexion multi-nœuds peut utiliser différentes valeurs `Transfer-Encoding`.
Si vous souhaitez compresser les données sur l'ensemble de la connexion, utilisez plutôt l'en-tête de bout en bout {{HTTPHeader("Content-Encoding")}}.

En pratique, cet en-tête est rarement utilisé, et dans ces cas, il est presque toujours utilisé avec `chunked`.

Cela dit, la spécification indique que lorsqu'il est présent dans un message, il indique la compression utilisée sur le message à ce saut, et/ou si le message a été découpé en tranches.
Par exemple, `Transfer-Encoding: gzip, chunked` indique que le contenu a été compressé en utilisant le codage gzip, puis découpé en tranches en utilisant le codage en tranches lors de la formation du corps du message.

Cet en-tête est optionnel dans les réponses à une requête {{HTTPMethod("HEAD")}}, car ces messages n'ont pas de corps et, par conséquent, pas de codage de transfert.
Lorsqu'il est présent, il indique la valeur qui a été appliquée à la réponse correspondante à un message {{HTTPMethod("GET")}}, si cette requête `GET` n'inclut pas un `Transfer-Encoding` préféré.

> [!WARNING]
> HTTP/2 interdit toute utilisation de l'en-tête `Transfer-Encoding`.
> HTTP/2 et les versions ultérieures offrent des mécanismes plus efficaces pour le streaming de données que le transfert en tranches.
> L'utilisation de cet en-tête dans HTTP/2 peut probablement entraîner une `erreur de protocole` spécifique.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}},
        {{Glossary("Content header", "En-tête de contenu")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip

// Plusieurs valeurs peuvent être listées, séparées par une virgule
Transfer-Encoding: gzip, chunked
```

## Directives

- `chunked`
  - : La donnée est envoyée en une série de tranches.
    Le contenu peut être envoyé dans des flux de taille inconnue pour être transféré sous forme de séquence de tampons délimités par la longueur, de sorte que l'expéditeur puisse maintenir une connexion ouverte et informer le destinataire lorsqu'il a reçu l'intégralité du message.
    L'en-tête {{HTTPHeader("Content-Length")}} doit être omis, et au début de chaque tranche, une chaîne de caractères de chiffres hexadécimaux indique la taille des données de la tranche en octets, suivie de `\r\n` puis de la tranche elle-même, suivie d'un autre `\r\n`.
    La tranche terminale est une tranche de longueur nulle.
- `compress`
  - : Un format utilisant l'algorithme [Lempel-Ziv-Welch <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/LZW) (LZW).
    Le nom de la valeur provient du programme UNIX _compressé_, qui implémente cet algorithme.
    Comme le programme compress, qui a disparu de la plupart des distributions UNIX, ce codage de contenu est utilisé par presque aucun navigateur aujourd'hui, en partie à cause d'un problème de brevet (qui a expiré en 2003).
- `deflate`
  - : Utilise la structure [zlib <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Zlib) (définie dans le [RFC 1950 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc1950)), avec l'algorithme de compression par [_réduction_ <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/DEFLATE) (définit dans le [RFC 1951 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Un format utilisant le [codage Lempel-Ziv <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), avec un CRC de 32 bits.
    Il s'agit à l'origine du format du programme UNIX _gzip_.
    La norme HTTP/1.1 recommande également que les serveurs prenant en charge ce codage de contenu reconnaissent `x-gzip` comme alias, à des fins de compatibilité.

## Exemples

### Réponse avec encodage par tranches

L'encodage par tranches est utile lorsque de grandes quantités de données sont envoyées au client et que la taille totale de la réponse peut ne pas être connue avant que la requête n'ait été entièrement traitée.
Par exemple, lors de la génération d'un grand tableau HTML résultant d'une requête de base de données ou lors de la transmission de grandes images.
Une réponse par tranches ressemble à ceci&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Bienvenue\r\n
1c\r\n
sur Mozilla Developer Network\r\n
0\r\n
\r\n
```

## Spécifications

{{Specifications}}

## Compatibilité avec les navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Accept-Encoding")}}
- L'en-tête {{HTTPHeader("Content-Encoding")}}
- L'en-tête {{HTTPHeader("Content-Length")}}
- [Encodage de transfert par tranches <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
