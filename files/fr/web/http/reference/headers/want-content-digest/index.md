---
title: En-tête Want-Content-Digest
short-title: Want-Content-Digest
slug: Web/HTTP/Reference/Headers/Want-Content-Digest
l10n:
  sourceCommit: 879be34803b4be7357ed5607ac90a7be413fb969
---

{{Glossary("request header", "L'en-tête de requête")}} et {{Glossary("response header", "de réponse")}} HTTP **`Want-Content-Digest`** indique une préférence pour que le destinataire envoie un en-tête d'intégrité {{HTTPHeader("Content-Digest")}} dans les messages associés à l'URI de la requête et aux métadonnées de la représentation.

L'en-tête inclut les préférences d'algorithmes de hachage que le destinataire peut utiliser dans les messages suivants.
Les préférences ne servent que d'indication, et le destinataire peut ignorer les choix d'algorithmes, ou les en-têtes d'intégrité dans leur ensemble.

Certaines implémentations peuvent envoyer des en-têtes `Content-Digest` non sollicités sans nécessiter un en-tête `Want-Content-Digest` dans un message précédent.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}, {{Glossary("Response header", "En-tête de réponse")}}, {{Glossary("Representation header", "En-tête de représentation")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Want-Content-Digest: <algorithm>=<preference>
Want-Content-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Directives

- `<algorithm>`
  - : L'algorithme demandé pour créer un condensé du contenu du message.
    Seuls deux algorithmes de condensé enregistrés sont considérés comme sécurisés&nbsp;: `sha-512` et `sha-256`.
    Les algorithmes de condensé enregistrés non sécurisés (anciens) sont&nbsp;: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) et `crc32c`.
- `<preference>`
  - : Un entier de 0 à 9 où `0` signifie «&nbsp;non acceptable&nbsp;», et les valeurs de `1` à `9` indiquent une préférence ascendante, relative et pondérée.
    Contrairement aux versions antérieures des spécifications, le poids n'est _pas_ déclaré avec la [valeurs de qualité](/fr/docs/Glossary/Quality_values) `q`.

## Exemples

### Utiliser `Want-Content-Digest` dans les requêtes

Le message suivant demande au destinataire d'envoyer un en-tête `Content-Digest` en utilisant l'algorithme SHA-512&nbsp;:

```http
Want-Content-Digest: sha-512=9
```

### `Want-Content-Digest` avec plusieurs valeurs

L'en-tête suivant contient trois algorithmes et indique que SHA-256 est l'algorithme de condensé préféré que le destinataire doit utiliser, suivi de SHA-512 et de MD5&nbsp;:

```http
Want-Content-Digest: md5=1, sha-512=2, sha-256=3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Cet en-tête n'a pas d'intégration dans les navigateurs définie par les spécifications («&nbsp;compatibilité des navigateurs&nbsp;» ne s'applique pas).
Les développeur·euse·s peuvent définir et obtenir des en-têtes HTTP en utilisant `fetch()` afin de fournir un comportement d'implémentation spécifique à l'application.

## Voir aussi

- Les en-têtes de condensé {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- Le guide du SDK [des signatures numériques pour les API <sup>(angl.)</sup>](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) qui utilisent `Content-Digest` pour les signatures numériques dans les appels HTTP (developer.ebay.com)
