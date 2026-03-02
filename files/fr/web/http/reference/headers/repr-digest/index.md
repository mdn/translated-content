---
title: En-tête Repr-Digest
short-title: Repr-Digest
slug: Web/HTTP/Reference/Headers/Repr-Digest
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'HTTP{{Glossary("Request header", "en-tête de requête")}} et {{Glossary("Response header", "de réponse")}} **`Repr-Digest`** fournit une {{Glossary("hash function", "fonction de hachage")}} de la représentation sélectionnée de la ressource cible.
Il peut être utilisé pour valider l'intégrité de l'ensemble de la représentation sélectionnée une fois qu'elle a été reçue et reconstituée.

La _représentation sélectionnée_ est le format spécifique d'une ressource choisi par [négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation).
Les détails concernant la représentation peuvent être déterminés à partir des {{Glossary("Representation header", "en-têtes de représentation")}}, tels que {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} et {{HTTPHeader("Content-Encoding")}}.

Le digest de représentation s'applique à l'ensemble de la représentation plutôt qu'à l'encodage ou au découpage en tranches des messages utilisés pour l'envoyer.
Un {{HTTPHeader("Content-Digest")}} s'applique au contenu d'un message HTTP spécifique et aura des valeurs différentes en fonction des {{HTTPHeader("Content-Encoding")}} et {{HTTPHeader("Content-Range")}} de chaque message.

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
Repr-Digest: <digest-algorithm>=<digest-value>

// Plusieurs algorithmes de digest
Repr-Digest: <digest-algorithm>=<digest-value>,…,<digest-algorithmN>=<digest-valueN>
```

## Directives

- `<digest-algorithm>`
  - : L'algorithme utilisé pour créer un digest de la représentation.
    Seuls deux algorithmes de digest enregistrés sont considérés sûrs&nbsp;: `sha-512` et `sha-256`.
    Les algorithmes de digest enregistrés non sécurisés (hérités) sont&nbsp;: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) et `crc32c`.
- `<digest-value>`
  - : Le digest en octets de la représentation en utilisant `<digest-algorithm>`.
    Le choix de l'algorithme de digest détermine également l'encodage à utiliser&nbsp;: `sha-512` et `sha-256` utilisent l'encodage {{Glossary("base64")}}, tandis que certains algorithmes hérités comme `unixsum` utilisent un entier décimal.
    Contrairement aux brouillons antérieurs de la spécification, les octets du digest encodés en base64 standard sont enveloppés entre deux deux-points (`:`, ASCII 0x3A) dans le cadre de la [syntaxe de dictionnaire <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences).

L'utilisation d'algorithmes de digest non sécurisés est fortement déconseillée, car des collisions peuvent être réalistement provoquées, rendant l'utilité du digest faible.
Sauf si vous travaillez avec des systèmes hérités (ce qui est improbable, car la plupart s'attendent à l'en-tête obsolète `Digest` et ne comprendront pas cette spécification), envisagez d'omettre un `Repr-Digest` plutôt que d'en inclure un avec un algorithme de digest non sécurisé.

## Description

Un en-tête `Digest` avait été défini dans des spécifications précédentes, mais il s'est avéré problématique car le périmètre auquel le digest s'appliquait n'était pas clair.
Plus précisément, il était difficile de distinguer si un digest s'appliquait à l'ensemble de la représentation de la ressource ou au contenu spécifique d'un message HTTP.
Ainsi, deux en-têtes séparés ont été définis (`Content-Digest` et `Repr-Digest`) pour transmettre respectivement les digests du contenu des messages HTTP et les digests des représentations de ressources.

## Exemples

### Envoi d'un `Repr-Digest` dans une requête par un agent utilisateur

Dans l'exemple suivant, un agent utilisateur envoie un digest du contenu du message en utilisant SHA-512.
Il envoie à la fois un `Content-Digest` et un `Repr-Digest`, qui diffèrent l'un de l'autre à cause du `Content-Encoding`&nbsp;:

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Encoding: zstd
Content-Digest: sha-512=:ABC…=:
Repr-Digest: sha-512=:DEF…=:

{
 "recipient": "Alex",
 "amount": 900000000
}
```

Le serveur peut calculer un digest du contenu qu'il a reçu et comparer le résultat avec les en-têtes `Content-Digest` ou `Repr-Digest` pour valider l'intégrité du message.
Dans des requêtes comme l'exemple ci‑dessus, le `Repr-Digest` est plus utile au serveur car il est calculé sur la représentation décodée et serait plus cohérent dans différents scénarios.

### Réponse HTTP où `Repr-Digest` et `Content-Digest` coïncident

Un serveur HTTP peut envoyer la représentation entière non encodée dans un seul message.
Dans ce cas, `Repr-Digest` et `Content-Digest` ont des valeurs égales pour les mêmes algorithmes de digest&nbsp;:

```http
…
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
Content-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
…
Content-Type: text/yaml
Content-Encoding: br
Content-Length: 38054
Content-Range: 0-38053/38054
…

[message body]
```

### Réponses HTTP où `Repr-Digest` et `Content-Digest` divergent

Un serveur peut compresser le contenu pour l'envoi.
Dans ce cas, {{HTTPHeader("Content-Digest")}} dépendra de l'en-tête {{HTTPHeader("Content-Encoding")}} et aura donc une valeur différente de l'en-tête `Repr-Digest` dans une réponse&nbsp;:

```http
…
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:, sha-512=:U59TCCaZPA9Qio3CzHJVAgDnIAut53t5Sgkj2Gv4BvDd0b+OX9QpIdgWkzdXLmBsmvBrf3t5PBt+UrVK6k5dkw==:
Content-Digest: sha-256=:293wcr5IoFAsDCzdoDXR1Qppgf2yxOPO1bvQ3nZQtuI=:, unixsum=54809
…
Content-Type: text/html; charset=utf-8
Content-Encoding: br
…

[message body]
```

Dans une autre réponse, le serveur utilise une méthode de compression différente, entraînant un nouveau `Content-Digest`, mais les mêmes digests `Repr-Digest`&nbsp;:

```http
…
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:, sha-512=:U59TCCaZPA9Qio3CzHJVAgDnIAut53t5Sgkj2Gv4BvDd0b+OX9QpIdgWkzdXLmBsmvBrf3t5PBt+UrVK6k5dkw==:
Content-Digest: sha-256=:rv9Jivc4TmcacLUshzN3OdX7Hz+ORnQRaiTaIKZQ0zk=:
…
Content-Type: text/html; charset=utf-8
Content-Encoding: zstd
…

[message body]
```

### Requête et réponse HTTP réussies utilisant `Want-Repr-Digest`, `Repr-Digest` et `Content-Digest`

La requête {{HTTPMethod("PUT")}} suivante inclut un en-tête `Want-Repr-Digest`, indiquant que le serveur doit inclure un en-tête `Repr-Digest` avec un digest `sha-256` si l'opération réussit&nbsp;:

```http
PUT /api/transact HTTP/1.1
Want-Repr-Digest: sha-256=8
Content-Type: text/json
…

[message body]
```

Le serveur répond par une réponse {{HTTPStatus("201", "201 Created")}} réussie, incluant les en-têtes `Repr-Digest` et `Content-Digest` avec des digests sha-256 de la représentation et du contenu, respectivement&nbsp;:

```http
HTTP/1.1 201 Created
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Encoding: br
Content-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…

[message body]
```

### Requête et réponse HTTP échouées utilisant `Repr-Digest`

Dans le message suivant, un agent utilisateur demande une ressource avec un digest sha-256 spécifique&nbsp;:

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…
```

Un statut {{HTTPStatus("406", "406 Not Acceptable")}} est retourné par le serveur pour indiquer que l'opération a échoué étant donné un digest spécifique pour la ressource.
Un en-tête `Repr-Digest` est inclus avec la valeur du digest SHA-256 qui aboutirait à une réponse réussie si l'agent utilisateur répéta la requête avec cette valeur&nbsp;:

```http
HTTP/1.1 406 Not Acceptable
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
…
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Cet en-tête n'a pas d'intégration définie par la spécification au niveau des navigateurs (la section «&nbsp;compatibilité des navigateurs&nbsp;» ne s'applique pas).
Les développeur·euse·s peuvent définir et récupérer des en-têtes HTTP en utilisant `fetch()` pour fournir un comportement d'implémentation propre à l'application.

## Voir aussi

- Les en-têtes {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- L'en-tête {{HTTPHeader("ETag")}}
- L'en-tête {{HTTPHeader("Content-Encoding")}}
- [Signatures numériques pour les API <sup>(angl.)</sup>](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) guide SDK utilisant des `Content-Digest` pour des signatures numériques dans des appels HTTP (developer.ebay.com)
