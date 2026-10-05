---
title: En-tête TE
short-title: TE
slug: Web/HTTP/Reference/Headers/TE
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`TE`** définit les encodages de transfert que l'agent utilisateur est prêt à accepter.
Les encodages de transfert sont utilisés pour la compression des messages et le découpage des données pendant la transmission.

Les encodages de transfert sont appliqués au niveau du protocole, de sorte qu'une application consommant les réponses reçoit le corps comme si aucun encodage n'a été appliqué.

> [!NOTE]
> Dans [HTTP/2 <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) et [HTTP/3 <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9114.html#header-formatting), le champ d'en-tête `TE` n'est accepté que si la valeur `trailers` est définie.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
TE: compress
TE: deflate
TE: gzip
TE: trailers
```

Plusieurs directives dans une liste séparée par des virgules avec des {{glossary("quality values", "valeurs de qualité")}} comme poids&nbsp;:

```http
TE: trailers, deflate;q=0.5
```

## Directives

- `compress`
  - : Un format utilisant l'algorithme [Lempel-Ziv-Welch <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/LZW) (LZW) est accepté comme nom de codage de transfert.
- `deflate`
  - : Utilise la structure [zlib <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Zlib) et est accepté comme nom de codage de transfert.
- `gzip`
  - : Un format utilisant le [codage Lempel-Ziv <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), avec un CRC 32 bits est accepté comme nom de codage de transfert.
- `trailers`
  - : Indique que le client ne supprime pas les champs de «&nbsp;remorque&nbsp;» dans un [codage de transfert par tranches](/fr/docs/Web/HTTP/Reference/Headers/Transfer-Encoding#chunked).
- `q`
  - : Lorsque plusieurs codages de transfert sont acceptables, le paramètre `q` ({{glossary("quality values", "valeurs de qualité")}}) permet de classer les codages par préférence.

Notez que `chunked` est toujours pris en charge par les destinataires HTTP/1.1, vous n'avez donc pas besoin de le définir en utilisant l'en-tête `TE`.
Voir l'en-tête {{HTTPHeader("Transfer-Encoding")}} pour plus de détails.

## Exemples

### Utiliser l'en-tête `TE` avec des valeurs de qualité

Dans la requête suivante, le client indique une préférence pour les réponses encodées en `gzip` avec `deflate` comme deuxième préférence en utilisant une valeur `q`&nbsp;:

```http
GET /resource HTTP/1.1
Host: example.com
TE: gzip; q=1.0, deflate; q=0.8
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Transfer-Encoding")}}
- L'en-tête {{HTTPHeader("Content-Encoding")}}
- L'en-tête {{HTTPHeader("Trailer")}}
- [Encodage de transfert par tranches <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
